### React Workshop @SeekandHit
 TODO:
 - Google Maps API key
 - Google Maps package: map + markers, see how to place markers on positions
 - Main layout 
 - App holds state, renders Map and MarkersList
 - MarkersList takes an array of markers and renders a list of MarkerItems
 - MarkerItem allows for deletion of a marker
 - delete function is passed down the component tree

 ## Project setup

 Clone the repo and run `npm install`. `eslint` and `prettier` configuration files are included,
 so your editor can pick that up. Project is bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app). `.env` file is used to set the environment 
 variables for us. `NODE_PATH=src/` variable is used so we can get rid of relative paths when importing
 JS modules [read this to be smarter](https://moduscreate.com/es6-es2015-import-no-relative-path-webpack/).

 ## Project structure

- `.vscode/` - editor config for VS Code
- `public/` - location for build output
- `src/` - source code which needs to be transpiled and bundled
- `src/components` - presentational components (dumb components which hold no state or logic)
- `src/containers` - container components (smart components which hold state)

Rest of the stuff are mostly configuration items for tools used. To learn more about presentational and container components, 
[click here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). It's important. Basically, we use 
container components only when we need to hold data and perform business logic. Presentational components are just used for 
displaying the state passed from their parent container components. Presentational components are easy to understand and 
really reusable. 