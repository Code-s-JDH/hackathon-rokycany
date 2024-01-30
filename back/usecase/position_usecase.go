package usecase

import (
	"context"
	"time"

	"github.com/Code-s-JDH/hackathon-rokycany/back/domain"
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
func (pu *positionUsecase) GetAll(c context.Context) ([]domain.Position, error) {
	c, cancel := context.WithTimeout(c, pu.contextTimeout)
	defer cancel()
	return pu.positionRepository.GetAll(c)
}
func (pu *positionUsecase) GetById(c context.Context, posId int) (domain.Position, error) {
	c, cancel := context.WithTimeout(c, pu.contextTimeout)
	defer cancel()
	return pu.positionRepository.GetById(c, posId)
}
func (pu *positionUsecase) Create(c context.Context, pos domain.Position) error {
	c, cancel := context.WithTimeout(c, pu.contextTimeout)
	defer cancel()
	return pu.positionRepository.Create(c, pos)
}
func (pu *positionUsecase) Update(c context.Context, pos domain.PositionUpdate, posId int) error {
	c, cancel := context.WithTimeout(c, pu.contextTimeout)
	defer cancel()
	return pu.positionRepository.Update(c, pos, posId)
}
func (pu *positionUsecase) Delete(c context.Context, posId int) error {
	c, cancel := context.WithTimeout(c, pu.contextTimeout)
	defer cancel()
	return pu.positionRepository.Delete(c, posId)
}
