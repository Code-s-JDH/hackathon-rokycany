package domain

import "context"

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type AuthRepository interface {
	Create(c context.Context) error
	GetById(c context.Context, id int) (User, error)
	DeleteById(c context.Context, id int) (User, error)
}

type AuthUsecase interface {
	Create(c context.Context) error
	GetById(c context.Context, id int) (User, error)
	DeleteById(c context.Context, id int) (User, error)
}
