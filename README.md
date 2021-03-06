# React Workshop @SeekandHit

This is a demo project created for React Workshop held at [SeekandHit](https://seekandhit.com/). 
Project is going to be improved incrementally on each workshop, so tags will be available to 
browse through content of each workshop.

App renders a google map, and enables you to create a list of favorite places on that map.

## Project setup

Clone the repo and run `npm install`. `eslint` and `prettier` configuration files are included,
so your editor can pick that up. Project is bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app). `.env` file is used to set the environment 
variables for us. `NODE_PATH=src/` variable is used so we can get rid of relative paths when importing
JS modules. [Read this to be smarter](https://moduscreate.com/es6-es2015-import-no-relative-path-webpack/).

## Project structure

- `.vscode/` - editor config for VS Code
- `public/` - location for build output
- `src/` - source code which needs to be transpiled and bundled
- `src/components/` - presentational components (dumb components which hold no state or logic)
- `src/containers/` - container components (smart components which hold state)

Rest of the stuff is mostly configuration for tools used. To learn more about presentational and container components, 
[click here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). It's important. Basically, we use 
container components only when we need to hold data and perform business logic. Presentational components are just used for 
displaying the state passed from their parent container components. Presentational components are easy to understand and 
really reusable.

## Relevant topics

- handling forms 
- applying styles with `style` and `className` attributes
- different ways of writing properties in ES6 classes
- Stateless Functional Components
- avoiding unnecessary renders
- binding `this`
- creating new objects instead of mutating them

## Need-to-know stuff

We will be using ES6 syntax throughout the project since it will allow us to write more succint and readable code. 
Here is some stuff you will need to know to understand the source code:
- [variable declarations](https://medium.com/@southcapital/es6-variable-declaration-with-let-and-const-c26b4b03ff5)
- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Pay special attention to destructuring and rest/spread operators since they will be used everywhere.