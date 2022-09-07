# MERN RECIPES (backend)

This folder contains the code for the backend of the application.

# Backend Structure

```
backend
|---controllers
        |--- recipes.js (contains all the controllers(handlers/functions) used for each route/request)
|--- models
        |--- recipe.js (Contains the schema for the MongoDB cluster.)
|--- routes
        |--- recipes.js (contains routes for all the API endpoints)
|--- .gitignore
|--- package.json
|--- package-lock.json
|--- README.md (Documentation for the backend)
|--- server.js (main file that gets executed)
```

# Development

To start a local development of the backend the application, follow the following steps:

1. Fork this repository.
2. Clone the forked repository
```sh
git clone https://github.com/yourusername/mern-recipes.git
```
3. Move into the **backend** working directory
```sh
cd mern-recipes/backend
```
4. Install the dependencies.
```sh
npm install
```
5. Run the server.
```
npm start
```
> This will run the server in http://localhost:5000