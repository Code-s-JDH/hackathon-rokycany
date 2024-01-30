package repository

import (
	"context"
	"fmt"
	"strings"

	"github.com/Code-s-JDH/hackathon-rokycany/back/domain"

	"github.com/jmoiron/sqlx"
)

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
func (pr *positionRepository) GetAll(c context.Context) ([]domain.Position, error) {
	var data []domain.Position
	query := fmt.Sprintf("SELECT * FROM %s", pr.table)
	rows, err := pr.database.Query(query)
	if err != nil {
		return data, nil
	}
	defer rows.Close()

	for rows.Next() {
		var dataEl domain.Position
		err := rows.Scan(&dataEl.Id, &dataEl.Title, &dataEl.Description, &dataEl.Tags)
		if err != nil {
			return data, nil
		}
		data = append(data, dataEl)
	}
	return data, nil
}
func (pr *positionRepository) GetById(c context.Context, posId int) (domain.Position, error) {
	var data domain.Position
	query := fmt.Sprintf("SELECT * from %s WHERE id=$1", pr.table)
	err := pr.database.QueryRow(query, posId).Scan(&data.Id, &data.Title, &data.Description, &data.Tags)
	return data, err
}
func (pr *positionRepository) Create(c context.Context, pos domain.Position) error {
	query := fmt.Sprintf("INSERT INTO %s (title, description, tags) VALUES ($1, $2, $3)", pr.table)
	_, err := pr.database.Exec(query, pos.Title, pos.Description, pos.Tags)
	return err
}
func (pr *positionRepository) Update(c context.Context, pos domain.PositionUpdate, posId int) error {
	setValues := make([]string, 0)
	args := make([]interface{}, 0)
	argId := 1
	if pos.Title != "" {
		setValues = append(setValues, fmt.Sprintf("title='%v'", pos.Title))
		args = append(args, fmt.Sprintf("$%d", argId))
		argId++
	}
	if pos.Description != "" {
		setValues = append(setValues, fmt.Sprintf("description=%v", pos.Description))
		args = append(args, fmt.Sprintf("$%d", argId))
		argId++
	}
	if pos.Tags != "" {
		setValues = append(setValues, fmt.Sprintf("tags='%v'", pos.Tags))
		args = append(args, fmt.Sprintf("$%d", argId))
		argId++
	}
	setQuery := strings.Join(setValues, ", ")
	query := fmt.Sprintf("UPDATE %s SET %s WHERE id=%d", pr.table, setQuery, posId)
	fmt.Print(query)
	_, err := pr.database.Exec(query)
	return err
}

func (pr *positionRepository) Delete(c context.Context, posId int) error {
	query := fmt.Sprintf("DELETE FROM %s WHERE id=$1", pr.table)
	_, err := pr.database.Exec(query, posId)
	return err
}
