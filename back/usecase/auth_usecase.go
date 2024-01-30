package usecase

import (
	"github.com/Code-s-JDH/hackathon-rokycany/back/domain"

	"time"
)

type authUsecase struct {
	authRepository *domain.AuthRepository
	contextTimeout time.Duration
}
