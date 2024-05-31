import type { FlatConfig } from "../helper";

const rules = (await Promise.resolve({
    rules: {
        "no-undef": "error",
    },
})) satisfies FlatConfig;

export default [
    // Top-level await
    rules,
] satisfies FlatConfig[];
