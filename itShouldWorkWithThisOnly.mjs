import { readFile, writeFile } from 'node:fs/promises';

const pathToDJS = new URL('./node_modules/discord.js/', import.meta.url);
const pathToDJSPkgJson = new URL('./package.json', pathToDJS);

const originalPackageJson = await readFile(pathToDJSPkgJson, 'utf8');
const packageJson = JSON.parse(originalPackageJson);
packageJson.exports['.'] = {
	types: './typings/index.d.ts',
	default: './src/index.js',
};

await writeFile(pathToDJSPkgJson, JSON.stringify(packageJson, null, 2));
