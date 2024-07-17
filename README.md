# SBA 318 Express Web App

## Testing

### Accounts

Login with <br>
username: rainny

### Endpoints

Must be done in postman

#### GET

/account

#### POST

/account/#

#### PATCH

/account/#

#### DELETE

/account/#

## Requirements

- Create and use at least two pieces of custom middleware.

```js
app.use(function (req, res, next) {
  console.log(req.method);
  next();
});
```

```js
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});
```

- Create and use error-handling middleware.

```js
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Something went wrong" });
});
```

- Use at least three different data categories (e.g., users, posts, or comments).
  - video-games.json
  - users.js
  - user1-games.js
- Utilize reasonable data structuring practices.
  - yes
- Create GET routes for all data that should be exposed to the client.

```js
//HOME
app.get("/", (req, res) => {
  res.render("home", { data: videogames_Data });
});
```

- Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.

```js
app.post("/login", (req, res) => {
  const username = req.body.username;
  res.render("login");
});
```

- Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.

```js
router.patch("/:id", (req, res, next) => { ... })
```

- Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request

```js
router.delete("/:id", (req, res, next) => { ... })
```

- Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters.
  - use search bar to filter games to add to library
- Utilize route parameters, where appropriate

```js
//HOME
app.get(("/"() = {}));
```

- Adhere to the guiding principles of REST.
  - yes
- Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine.
  - home.ejs
  - login.ejs
  - games.ejs
- Use simple CSS to style the rendered views.
  - public folder has css styles
- Include a form within a rendered view that allows for interaction with your RESTful API.
  - user can use the searc bar to get games
- Utilize reasonable code organization practices
  - everything is organized in data, public, routes, views folders

## Souces

- bootstrap
- select2
- https://www.kaggle.com/datasets/beridzeg45/video-games
