package domain

import "github.com/golang-jwt/jwt/v4"

type JwtClaims struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Role     string `json:"role"`
	jwt.StandardClaims
}
