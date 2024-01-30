package controller

import (
	"net/http"
	"rtsofthr/domain"
	"strconv"

	"github.com/gin-gonic/gin"
)

type PositionController struct {
	PositionUsecase domain.PositionUsecase
}

func (pc *PositionController) GetAll(c *gin.Context) {
	data, err := pc.PositionUsecase.GetAll(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	c.JSON(http.StatusOK, data)
}
func (pc *PositionController) GetById(c *gin.Context) {
	id := c.Params.ByName("id")
	subId, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	data, err := pc.PositionUsecase.GetById(c, subId)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, data)
}

func (pc *PositionController) Create(c *gin.Context) {
	var input domain.Position
	if err := c.BindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	err := pc.PositionUsecase.Create(c, input)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	c.JSON(http.StatusOK, domain.SuccessResponse{Status: "ok"})
}
func (pc *PositionController) Update(c *gin.Context) {
	id := c.Params.ByName("id")
	subId, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}

	var input domain.PositionUpdate
	if err := c.BindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	err = pc.PositionUsecase.Update(c, input, subId)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	c.JSON(http.StatusOK, domain.SuccessResponse{Status: "ok"})

}
func (pc *PositionController) Delete(c *gin.Context) {
	id := c.Params.ByName("id")
	subId, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
		return
	}
	err = pc.PositionUsecase.Delete(c, subId)
	if err != nil {
		c.JSON(http.StatusBadRequest, domain.ErrorResponse{Message: err.Error()})
	}
	c.JSON(http.StatusOK, domain.SuccessResponse{Status: "ok"})
}
