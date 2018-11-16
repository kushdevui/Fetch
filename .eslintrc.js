module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
                "eslint:recommended",
                "plugin:react/recommended" 
               ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-empty" : "warn",
        "no-multiple-empty-lines": "warn",
        "no-var" : "error",
        "prefer-const" : "error",
        "no-console" : "warn",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};