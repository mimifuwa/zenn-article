export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-case": [0, "always"],
		"header-max-length": [2, "always", 999],
	},
};
