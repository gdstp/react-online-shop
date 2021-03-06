# About the Project

This project was built to practice frontend development using Typescript and React. The idea was to create an online shop website that had most of the features a real world project would also consuming an external API. The packages used were:

- [React](https://reactjs.org/)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Tailwindcss](http://tailwindcss.com/)
- [Styled-Components](https://www.npmjs.com/package/styled-components)
- [Axios](https://www.npmjs.com/package/axios)
- [React-input-mask](https://www.npmjs.com/package/react-input-mask)
- [React-hook-form](https://www.npmjs.com/package/react-hook-form)
- [React-tooltip](https://www.npmjs.com/package/react-tooltip)

All the data comes from [FakeStore](https://fakestoreapi.com/).

You can check the working app at:

## In-depth review

Here's a more detailed description about the project.
The project was bootstrapped from create-react-app. For styling the components at first the chosen package was TailwindCSS but later in development the necessity of writting more complex CSS ended up installing Styled-Components as well. To handle global states and api calls the app uses react hooks useReducer and useContext, storing data in LocalStorage. To mask and validate inputs two new packages react-input-mask and react-hook-form.

## Available Scripts

In the project directory, you can run: [App](https://react-online-shop.vercel.app/)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.
