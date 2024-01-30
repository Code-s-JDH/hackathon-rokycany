package usecase

import (
	"time"
)

type authUsecase struct {
	authUsecase    *domain.authUsecase
	contextTimeout time.Duration
}
