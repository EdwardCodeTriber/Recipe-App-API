# Recipe App API

This is a RESTful API for managing recipes built using Node.js, Express, and MongoDB.

## Features

- CRUD operations for recipes
- Pagination for listing recipes
- Input validation
- Error handling

## Requirements

- Node.js v12+
- MongoDB

## Installation
- npm install express dotenv mongoose nodemon

## To Run
 - npx nodemon server.js

## Base URL
Copyhttp://localhost:8080/api
## Endpoints
##  Create Recipe (POST)
## Creates a new recipe entry.
 - Endpoint: /recipes
 - Method: POST
 - Request Body:
json
 Copy
 {
    "name": "Recipe Name",
    "ingredients": "List of ingredients as string",
    "category": "Recipe Category",
    "serving": 2
 }
## Required Fields:

name (string): Name of the recipe
ingredients (string): List of ingredients
category (string): Category of the recipe
serving (number): Number of servings

Error Response:

Status Code: 500

{
    "error": "An Error has occured when creating a Receipe"
}
##  Get All Recipes (GET)
## Retrieves a paginated list of all recipes.
 - Endpoint: /recipes
 - Method: GET
Query Parameters:

page (optional, default: 1): Page number
limit (optional, default: 5): Number of recipes per page

Success Response:

Status Code: 200

jsonCopy{
    "receipes": [
        {
            "_id": "recipe_id",
            "name": "Recipe Name",
            "ingredients": "List of ingredients as string",
            "category": "Recipe Category",
            "serving": 2,
            "createdAt": "2024-01-27T12:00:00.000Z"
        }
    ],
    "totalReceipes": 10,
    "page": 1,
    "limit": 5
}
Error Response:

Status Code: 500

jsonCopy{
    "error": "An error has occured when getting Receipes"
}
##  Get Single Recipe (GET)
 - Retrieves a specific recipe by ID.
 - Endpoint: /recipes/:id
 - Method: GET
 - URL Parameters:

 id: Recipe ID


## Update Recipe (PUT)
 - Updates an existing recipe by ID.
 - Endpoint: /recipes/:id
 - Method: PUT
 - URL Parameters:

id: Recipe ID

Request Body:
json
Copy
{
    "name": "Updated Recipe Name",
    "ingredients": "Updated ingredients list",
    "category": "Updated Category",
    "serving": 4
}

## Delete Recipe (DELETE)
 - Deletes a specific recipe by ID.
 - Endpoint: /recipes/:id
 - Method: DELETE
 - URL Parameters:

id: Recipe ID



# Test
# Example POST request body:

{
    "name": "Spaghetti Carbonara",
    "ingredients": "400g spaghetti, 150g pancetta, 4 eggs, 50g pecorino romano, black pepper",
    "category": "Pasta",
    "serving": 4
}

{
    "name": "Classic Burger",
    "ingredients": "200g ground beef, 1 burger bun, 1 slice cheese, lettuce, tomato, onions",
    "category": "Main Course",
    "serving": 1
}

{
    "name": "Toast",
    "ingredients": "2 slices bread, butter",
    "category": "Breakfast",
    "serving": 1
}

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-app-api.git
   cd recipe-app-api
