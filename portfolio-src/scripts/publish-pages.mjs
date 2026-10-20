import { cp, mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const appRoot=fileURLToPath(new URL('../',import.meta.url));
const repoRoot=path.resolve(appRoot,'..');
const buildDir=path.join(appRoot,'dist');
const assets=path.join(repoRoot,'assets');
await mkdir(assets,{recursive:true});
// Remove only generated Vite entry bundles; keep image and document assets.
for(const name of await readdir(assets)){
  if(/^index-[A-Za-z0-9_-]+\.(js|css)$/.test(name))await unlink(path.join(assets,name));
}
await cp(buildDir,repoRoot,{recursive:true});
await writeFile(path.join(repoRoot,'.nojekyll'),'');
console.log('GitHub Pages files updated in repository root.');
