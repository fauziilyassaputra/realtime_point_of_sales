import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// menonaktifkan hal-hal di eslintconfig
eslintConfig.push({
  rules: {
    "react-hooks/exhaustive-deps": "off", // melewatkan variable dalam depedensi array
    "react/jsx-key": "off", // tidak butuh key
    "@typescript-eslint/no-explicit-any": "off", // boleh menggunakan any
    "@typescript-eslint/no-unused-vars": "off", // boleh ada variable yang tidak digunakan
  },
});

export default eslintConfig;
