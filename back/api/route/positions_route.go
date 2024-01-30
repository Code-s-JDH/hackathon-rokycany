package route

import (
	"rtsofthr/bootstrap"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func NewPositionsRouter(env *bootstrap.Env, timeout time.Duration, db *sqlx.DB, group *gin.RouterGroup) {
	tr := repository.NewPositionsRouter(db, domain.CollectionPosition)
}
