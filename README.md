# The Fifteen game

## App structure

- **main.ts** - entry point
    - **index.js** - application root
    - **actions**
        - **action-types.js**
        - **index.js** - all actions
    - **components**
        - **board** - Board that holds everything
        - **chip** - Single chip
        - **page-title**
        - **toolbar** - Toolbar with buttons
    - **layout** - Basic page layout
    - **reducers**
        - **fifteen-reducers.js** - Main reducer
        - **index.js**
    - **App.js**
    - **index.css** - simple reset

### How to

To start dev mode
```
npm run start
```
To build
```
npm run build
```
To deploy to gh-pages
```
npm run deploy
```