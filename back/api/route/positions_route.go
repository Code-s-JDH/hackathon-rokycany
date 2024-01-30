package route

import (
	"time"

	"github.com/Code-s-JDH/hackathon-rokycany/back/api/controller"
	"github.com/Code-s-JDH/hackathon-rokycany/back/bootstrap"
	"github.com/Code-s-JDH/hackathon-rokycany/back/domain"
	"github.com/Code-s-JDH/hackathon-rokycany/back/repository"
	"github.com/Code-s-JDH/hackathon-rokycany/back/usecase"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
)

func NewPositionsRouter(env *bootstrap.Env, timeout time.Duration, db *sqlx.DB, group *gin.RouterGroup) {
	pr := repository.NewPositionRepository(db, domain.CollectionPosition)
	pc := &controller.PositionController{
		PositionUsecase: usecase.NewPositionsUsecase(pr, timeout),
	}
	group.GET("/position", pc.GetAll)
	group.GET("/position/:id", pc.GetById)
	group.POST("/position", pc.Create)
	group.DELETE("/position/:id", pc.Delete)
	group.PUT("/position/:id", pc.Update)
}
