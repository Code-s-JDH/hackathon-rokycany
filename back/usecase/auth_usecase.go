package usecase

import (
	"rtsofthr/domain"

	"time"
)

type authUsecase struct {
	authRepository *domain.AuthRepository
	contextTimeout time.Duration
}
