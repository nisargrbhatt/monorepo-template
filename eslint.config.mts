import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
	globalIgnores([
		// Default ignores of eslint-config-next:
		"**/.next/**",
		"**/out/**",
		"**/build/**",
		"**/next-env.d.ts",
		"**/.turbo/**",
	]),
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		plugins: {
			js: js,
		},
		extends: ["js/recommended"],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			"no-undef": "warn",
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"unused-imports": unusedImports,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				React: true,
			},
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
		},
		rules: {
			"no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			"prefer-const": [
				"error",
				{
					destructuring: "any",
					ignoreReadBeforeAssign: false,
				},
			],
			"arrow-body-style": ["error", "as-needed"],
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
]);
