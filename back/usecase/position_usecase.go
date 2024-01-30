package usecase

import (
	"rtsofthr/domain"
	"time"
)

type positionUsecase struct {
	positionUsecase *domain.PositionUsecase
	contextTimeout  time.Duration
}
