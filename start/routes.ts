/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("welcome");

Route.on("register").render("register");
Route.post("register", "AuthController.register");

Route.group(() => {
  Route.get("/dashboard", "TodosController.index").as("dashboard");
  Route.get("/todos/user", "TodosController.byUserId");
  Route.resource("todos", "TodosController");
}).middleware("auth");

Route.on("login").render("login");
Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.login").as("logout");
