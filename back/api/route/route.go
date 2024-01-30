package route

import (
	"time"

	"github.com/Code-s-JDH/hackathon-rokycany/back/bootstrap"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func NewRoute(env *bootstrap.Env, timeout time.Duration, db *sqlx.DB, gin *gin.Engine) {
	publicRoter := gin.Group("api/v1")
	NewPositionsRouter(env, timeout, db, publicRoter)

	privateRoter := gin.Group("api/v2")
	privateRoter.Use()

}
