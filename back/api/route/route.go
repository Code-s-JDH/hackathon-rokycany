package route

import (
	"rtsofthr/bootstrap"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func NewRoute(env *bootstrap.Env, timeout time.Duration, db *sqlx.DB, gin *gin.Engine) {

}
