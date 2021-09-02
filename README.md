# Go Bootcamp Application
## Cakes Rest API
### Steps to run project
1. Get Node Js v14.16.1 in your computer
2. Create a `.env` file in the root of the project with this content:
````
MONGO_USER=YOUR_MONGO_USER
MONGO_PASS=YOUR_MONGO_PASSWORD
MONGO_DB_NAME=YOUR_MONGO_DB_NAME
````
3. Install all needed libraries with the command `npm install`
4. Run the project with the command `npm start`

### Deployed version
A deployed version of this api is found on  https://glacial-depths-77848.herokuapp.com/

### Routes
`GET - /`: hello world endpoint.

`GET - /api/v1/cakes`: Get all cakes

`POST - /api/v1/cakes`: Create a cake

`GET - /api/v1/cakes/:id`: Get one cake

`PUT - /api/v1/cakes/:id`: Update one cake

`DELETE - /api/v1/cakes/:id`: Delete one cake
