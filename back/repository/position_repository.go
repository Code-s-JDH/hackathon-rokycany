package repository

import (
	"context"
	"fmt"
	"rtsofthr/domain"
	"strings"

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
	query := fmt.Sprintf("SELECT * FROM %s", pu.table)
	rows, err := pu.database.Query(query)
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
func (pr *positionRepository) GetById(c context.Context) (domain.Position, error) {
	var data domain.Position
	query := fmt.Sprintf("SELECT * from %s WHERE id=$1")
	err := pr.database.QueryRow(query, pr.table).Scan(&dataEl.Id, &dataEl.Title, &dataEl.Description, &dataEl.Tags)
	return data, err
}
func (pr *positionRepository) Create(c context.Context, pos domain.Position) error {
	query := fmt.Sprintf("INSERT INTO %s (id, title, description, tags) VALUES ($1, $2, $3, $4)", pr.table)
	_, err := pr.database.Exec(query, pos.Id, pos.Title, pos.Description, pos.Tags)
	return err
}
func (pr *positionRepository) Update(c context.Context, pos domain.PositionUpdate, posId int) error {
	setValues := make([]string, 0)
	args := make([]interface{}, 0)
	argId := 1
	if pos.Title != "" {
		setValues = append(setValues, fmt.Sprintf("title='%v'", pos.Name))
		args = append(args, fmt.Sprintf("$%d", argId))
		argId++
	}
	if pos.Description > 0 {
		setValues = append(setValues, fmt.Sprintf("description=%v", pos.Price))
		args = append(args, fmt.Sprintf("$%d", argId))
		argId++
	}
	if pos.Tags != "" {
		setValues = append(setValues, fmt.Sprintf("tags='%v'", pos.Description))
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
