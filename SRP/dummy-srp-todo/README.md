This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

k.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Analysis: whether the initial code follows SRP or not

old Project structure:
App.js: This file contains all the code i.e rendering todos on the UI, fetching data from storage and handling side effects
This results in higly coupled code and almost all parts of the code in file App.js is dependant on each other.

1. if new functionalities are to be added in this todo app, then the many parts of code will be changes
   for example, adding capability to sort the todo list or maintain the order etc
