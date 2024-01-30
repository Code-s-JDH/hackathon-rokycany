---
runme:
  id: 01HNCN5CAG28Z4Y1J84XB5R9EH
  version: v2.2
---

# Back

## API

v1 - Ful open<br>
v2 - Protected by jwt<br>

api/v1/auth:<br>
api/v1/auth/reg POST<br>
api/v1/auth/log POST<br>

<!-- api/v1/auth/reg POST -->
api/v1/position:<br>
api/v1/position/ GET<br>
api/v1/position/ POST<br>
api/v1/position/:id GET<br>
api/v1/position/:id PUT<br>
api/v1/position/:id DELETE<br>


## API REQUESTS

### JWT token

```kt {"id":"01HNCP1T6D2TV5DJT3HDX6N0F5"}
claims {
    "id": 1234123,
    "username": "Username",
    "role": "admin",
    "expires": 3600   
}

Header: Authorization
How looking: Bearer qwkeljqlwje.lqwekjqwlje.qweojqwoej
```

### Auth

api/v1/auth/reg POST
Type | JSON
--- | ---
Request | {"username": "name", "password": "something", "email": "admin@gmail.com"}
Response | {"status": "ok"}
Error response | {"message": "ok"}

api/v1/auth/log POST
Type | JSON
--- | ---
Request | {"username": "name", "password": "something"}
Response | {"token": "qweljqwlejo123uj.oodjwoi1j2320j.1230udwq"}
Error response | {"message": "ok"}

### Work

### WorkRequests
