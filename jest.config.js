module.exports = {
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
		"!src/**/*.d.ts",
		"!src/index.tsx",
		"!src/serviceWorker.ts",
	],
	coveragePathIgnorePatterns: [
		"./src/*/*.types.{ts,tsx}",
		"./src/index.tsx",
		"./src/serviceWorker.ts",
	],
	coverageReporters: ["json", "lcov", "text-summary", "clover"],
	coverageThreshold: { global: { statements: 95, branches: 95, lines: 95, functions: 95 } },
	transform: { "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest" },
	transformIgnorePatterns: [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
		"^.+\\.module\\.(css|sass|scss)$",
	],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
		"src/(.*)$": "<rootDir>/src/$1",
	},
};
