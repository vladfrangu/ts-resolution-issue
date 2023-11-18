import { cp, readFile, writeFile } from 'node:fs/promises';

const pathToDJS = new URL('./node_modules/discord.js/', import.meta.url);
const pathToDJSPkgJson = new URL('./package.json', pathToDJS);
const pathToDJSDTS = new URL('./typings/index.d.ts', pathToDJS);
const pathToDJSDMTS = new URL('./typings/index.d.mts', pathToDJS);

await cp(pathToDJSDTS, pathToDJSDMTS);

const originalPackageJson = await readFile(pathToDJSPkgJson, 'utf8');
const packageJson = JSON.parse(originalPackageJson);
packageJson.exports['.'] = {
	import: {
		types: './typings/index.d.mts',
		default: './src/index.js',
	},
	default: {
		types: './typings/index.d.ts',
		default: './src/index.js',
	},
};

await writeFile(pathToDJSPkgJson, JSON.stringify(packageJson, null, 2));
