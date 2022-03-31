# Node JS JWT authentication

## How to Start the App

```
git clone https://github.com/0xGodson/Node-JWT-auth

cd Node-JWT-auth

npm i

npm start
```

## Register User:

```
POST /api/register
Host: localhost:3000
...
...
Content-type: application/json

{
  "username":"godson",
  "password":"pakePassword"
}
```
This return a JWT token, You can Use that Token to Verify your identity. 

## Login

```
GET /api/login
Host: localhost:3000
token: `JWT_TOKEN`
...
...

```

