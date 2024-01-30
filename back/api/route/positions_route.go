package route

import (
	"rtsofthr/bootstrap"
	"rtsofthr/domain"
	"rtsofthr/repository"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func NewPositionsRouter(env *bootstrap.Env, timeout time.Duration, db *sqlx.DB, group *gin.RouterGroup) {
	tr := repository.NewPositionsRepository(db, domain.CollectionPosition)

}
