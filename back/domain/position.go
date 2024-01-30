package domain

import "context"

const (
	CollectionPosition = "positions"
)

type Position struct {
	Id          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Description string `json:"description" db:"description"`
	Tags        string `json:"tags" db:"tags"`
}
type PositionUpdate struct {
	Title       string `json:"title" db:"title"`
	Description string `json:"description" db:"description"`
	Tags        string `json:"tags" db:"tags"`
}
type PositionUsecase interface {
	GetAll(c context.Context) ([]Position, error)
	GetById(c context.Context, posId int) (Position, error)
	Create(c context.Context, pos Position) error
	Update(c context.Context, pos PositionUpdate, posId int) error
	Delete(c context.Context, posId int) error
}
type PositionRepository interface {
	GetAll(c context.Context) ([]Position, error)
	GetById(c context.Context, posId int) (Position, error)
	Create(c context.Context, pos Position) error
	Update(c context.Context, pos PositionUpdate, posId int) error
	Delete(c context.Context, posId int) error
}
