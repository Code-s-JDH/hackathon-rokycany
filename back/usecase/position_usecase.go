package usecase

import (
	"context"
	"rtsofthr/domain"
	"time"
)

type positionUsecase struct {
	positionRepository domain.PositionRepository
	contextTimeout     time.Duration
}

func NewPositionsUsecase(PositionRepository domain.PositionRepository, timeout time.Duration) domain.PositionUsecase {
	return &positionUsecase{
		positionRepository: PositionRepository,
		contextTimeout:     timeout,
	}
}
func (pu *positionUsecase) GetAll(c context.Context) ([]domain.Position, error)
{
	
}
func (pu *positionUsecase) GetById(c context.Context) (domain.Position, error)
{
	
}
func (pu *positionUsecase) Create(c context.Context, pos domain.Position) error
{
	
}
func (pu *positionUsecase) Update(c context.Context, posId int) error
{
	
}
func (pu *positionUsecase) Delete(c context.Context, posId int) error
{
	
}
