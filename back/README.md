---
runme:
  id: 01HNCN5CAG28Z4Y1J84XB5R9EH
  version: v2.2
---

# Back

## API

v1 - Ful open
v2 - Protected by jwt

api/v1/auth:
api/v1/auth/reg POST
api/v1/auth/log POST

<!-- api/v1/auth/reg POST -->

api/v2/work:
api/v2/work/ GET
api/v2/work/ POST
api/v2/work/:id GET
api/v2/work/:id PUT
api/v2/work/:id DELETE

api/v2/workRequests:
api/v2/workRequests/ GET
api/v2/workRequests/ POST
api/v2/workRequests/:id GET
api/v2/workRequests/:id PUT
api/v2/workRequests/:id DELETE

## API REQUESTS

### JWT token

```kt {"id":"01HNCP1T6D2TV5DJT3HDX6N0F5"}
claims {
    "id": 1234123,
    "username": "Username",
    "role": "admin"
}

Header: Authorization
How looking: Bearer qwkeljqlwje.lqwekjqwlje.qweojqwoej
```

### Auth

api/v1/auth/reg POST
Type | JSON
--- | ---
Request | {"username": "name", "password": "something", "email": "admin@gmail.com"}
Response | {"status"}
Error response | {"status": "ok"}

api/v1/auth/log POST
Type | JSON
--- | ---
Request | {"username": "name", "password": "something"}
Response | {"token": "qweljqwlejo123uj.oodjwoi1j2320j.1230udwq"}
Error response | {"status": "ok"}

### Work

### WorkRequests