package main

import (
	"rtsofthr/bootstrap"
	"time"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func main() {
	// Initialize of the project
	app := bootstrap.App()
	env := app.Env
	db := app.Database

	// // Setup of git framework
	gin := gin.Default()
	gin.Use(bootstrap.CORS())

	timeout := 10 * time.Second
	// route.NewRoute(env, timeout, db, gin)
	gin.Run(":" + env.SERVERport)
}
