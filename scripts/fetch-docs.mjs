// 把开源项目仓库里的 docs/ 拉到 src/content/projects/<slug>/，供 docs 内容集合渲染。
// 文档正本在各项目仓库，这里只是构建时的副本（已加入 .gitignore）。
//
// 本地预览未推送的文档：JOT_DOCS_DIR=/path/to/jot/docs pnpm dev
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, posix, relative, resolve, sep } from 'node:path';

// home：渲染在 docs/ 根路径的那一篇，须与 src/data/projects.ts 一致
const projects = [{ slug: 'jot', repo: 'RedHiwiK/jot', ref: 'main', dir: 'docs', env: 'JOT_DOCS_DIR', home: 'getting-started/introduction' }];

// 文档里写的是 GitHub 上也能用的相对 .md 链接（../reference/cli.md#flags），改写成站内路由之间的相对链接
// （../../reference/cli/#flags），这样不依赖语言前缀和部署子路径
function rewriteLinks(dest, p) {
  const walk = (dir) =>
    readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : d.name.endsWith('.md') ? [join(dir, d.name)] : []));
  const route = (id) => (id === p.home ? 'docs' : `docs/${id}`);
  for (const file of walk(dest)) {
    const [lang, ...rest] = relative(dest, file).split(sep);
    if (lang !== 'en' && lang !== 'zh') continue;
    const self = rest.join('/').replace(/\.md$/, '');
    const dir = posix.dirname(self);
    const text = readFileSync(file, 'utf8').replace(/\]\((?!\w+:|\/|#)([^)#\s]+)\.md(#[^)\s]*)?\)/g, (_, target, anchor = '') => {
      const id = posix.normalize(posix.join(dir, target));
      const rel = posix.relative(route(self), route(id));
      return `](${rel ? `${rel}/` : './'}${anchor})`;
    });
    writeFileSync(file, text);
  }
}

const root = resolve(import.meta.dirname, '..');

for (const p of projects) {
  const dest = join(root, 'src/content/projects', p.slug);
  const local = process.env[p.env];
  let source = local ? resolve(local) : null;
  let tmp = null;

  if (!source) {
    tmp = mkdtempSync(join(tmpdir(), `docs-${p.slug}-`));
    const url = `https://codeload.github.com/${p.repo}/tar.gz/refs/heads/${p.ref}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`fetch ${url}: HTTP ${res.status}`);
    const archive = join(tmp, 'src.tar.gz');
    writeFileSync(archive, Buffer.from(await res.arrayBuffer()));
    // GitHub 的归档顶层目录是 <repo>-<ref>/，用 --strip-components 去掉；解压全部再取 docs，避免 GNU/BSD tar 通配语法差异
    execFileSync('tar', ['-xzf', archive, '-C', tmp, '--strip-components=1']);
    source = join(tmp, p.dir);
  }

  if (!existsSync(source)) throw new Error(`${p.slug}: docs directory not found at ${source}`);
  rmSync(dest, { recursive: true, force: true });
  cpSync(source, dest, { recursive: true });
  rewriteLinks(dest, p);
  if (tmp) rmSync(tmp, { recursive: true, force: true });
  console.log(`docs: ${p.slug} <- ${local ? source : `${p.repo}@${p.ref}`}`);
}
