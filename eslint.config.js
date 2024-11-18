import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
     }
  },
  {languageOptions: { globals: globals.browser }},


  
  
];