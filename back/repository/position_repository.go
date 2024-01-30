package repository

import "github.com/jmoiron/sqlx"

type positionRepository struct {
	database   *sqlx.DB
	collection string
	table      string
}

func NewPositionRepository(db *sqlx.DB, collection string) *positionRepository {
	return &positionRepository{
		database:   db,
		collection: collection,
		table:      "positions",
	}
}
