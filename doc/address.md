# Address API Spec

## Create Address

Endpoint : POST api/contacts/:contactId/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan Contoh",
  "city": "Kota, optional",
  "province": "Provinsi, optional",
  "country": "Negara Apa",
  "postal_code": "123123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Negara Apa",
    "postal_code": "123123"
  }
}
```

## Get Address

Endpoint : GET api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Negara Apa",
    "postal_code": "123123"
  }
}
```

## Update Address

Endpoint : PATCH api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Negara Apa",
    "postal_code": "123123"
  }
}
```

## Remove Address

Endpoint : DELETE api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "message": "delete address successfully"
}
```

## List Address

Endpoint : GET api/contacts/:contactId/addresses

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Contoh",
      "city": "Kota, optional",
      "province": "Provinsi, optional",
      "country": "Negara Apa",
      "postal_code": "123123"
    },
    {
      "id": 2,
      "street": "Jalan Contoh",
      "city": "Kota, optional",
      "province": "Provinsi, optional",
      "country": "Negara Apa",
      "postal_code": "123123"
    }
  ]
}
```
