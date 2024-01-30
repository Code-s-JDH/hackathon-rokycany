package repository

import (
	"github.com/jmoiron/sqlx"
)

type authRepository struct {
	database   *sqlx.DB
	collection string
	table      string
}

func NewAuthRepository(database *sqlx.DB, collection string) *authRepository {
	return &authRepository{
		database:   database,
		collection: collection,
		table:      "users",
	}
}
