module.exports = {
    '*.{js,jsx}': ['eslint --ignore-path .gitignore --fix --ext .js,.jsx --max-warnings 0 ./src'],
    '*.{js,jsx,css,mjs}': ['prettier --write'],
};
