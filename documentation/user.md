# User Api Spec

## Register User

Endpoint: POST /api/users/register

Request Body :

```json
{
  "username": "Fian",
  "password": "rahasia deh",
  "name": "Fian Siburian"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Fian",
    "name": "Fian Siburian"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint: POST /api/users/login

Request Body :

```json
{
  "username": "Fian",
  "password": "rahasia deh"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Fian",
    "name": "Fian Siburian",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Get User

Endpoint: GET /api/users/current

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "username": "Fian",
    "name": "Fian Siburian"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint: PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "password": "rahasia deh", //optional
  "name": "Fian Siburian" //optional
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Fian",
    "name": "Fian Siburian"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "name already in use"
}
```

## Logout User

Endpoint : DELETE api/users/current

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "message": "Logout Berhasil"
}
```
