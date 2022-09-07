# MERN RECIPES (frontend)

This folder contains the code for the frontend of the application.

# Frontend Structure

```
frontend
|---public
        |--- recipes.js (contains all the controllers(handlers/functions) used for each route/request)
|--- src
        |--- actions
                |--- recipes.js (contains all the actions(functions) that need to be executed for specific tasks)
        |--- api
                |--- index.js (contains all functions that make calls to the APi at specific endpoints for specific tasks)
        |--- components
                |--- Button.js (reusable button component used throughout the frontend of the application)
                |--- CardActionMenu.js (component used by the RecipeCard component that contains buttons for editing and deleting a post)
                |--- Form.js (Form component reused by the Add & Edit pages for recieving input from the user)
                |--- IngredientsInput.js (component used by the Form component to input ingredients in a user-friendly manner)
                |--- IngredientsList.js (component used by the Recipe page to display the list of ingredients as a checklist)
                |--- Navbar.js (Navbar component used throughout the application on all pages)
                |--- RecipeCard.js (component used by the Home page for displaying the list of all recipes in the database)

        |--- pages
                |--- Add.js (Add page that contains the Form component for adding a new recipe)
                |--- Edit.js (Edit page that contains the Form component for editing an existing recipe)
                |--- Home.js (Home page of the application, contains the list of all the recipes displayed as a grid through the RecipeCard Component)
                |--- Recipe.js (Recipe page component that is used to display individual recipes)

        |--- reducers
                |--- index.js (makes the reducers accesible globally)
                |--- recipes.js (contains reducer function used to handle states using redux)
        |--- App.js (main file of the frontend application. It contains all the routes and layout of each page)
        |--- index.css (Global stylesheet)
        |--- index.js

|--- .gitignore
|--- package.json
|--- package-lock.json
|--- postcss.config.js (Configuration for postcss)
|--- README.md (Documentation for the frontend)
|--- tailwind.config.js (configuration for TailwindCSS)
```

# Development

To start a local development of the frontend the application, follow the following steps:

1. Fork [this repository](https://github.com/ammaaraslam/mern-recipes.git).
2. Clone the forked repository
```sh
git clone https://github.com/yourusername/mern-recipes.git
```
3. Move into the **frontend** working directory
```sh
cd mern-recipes/frontend
```
4. Install the dependencies.
```sh
npm install
```
5. Run the application.
```
npm start
```
> This will run the application in http://localhost:3000
