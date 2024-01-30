package bootstrap

import (
	"log"

	"github.com/jmoiron/sqlx"
)

type Application struct {
	Env      *Env
	Database *sqlx.DB
}

func App() *Application {
	app := &Application{}
	env, err := NewEnv()
	if err != nil {
		log.Fatalf(err.Error())
	}
	app.Env = env

	db, err := NewDatabase(env)
	if err != nil {
		log.Fatalf(err.Error())
	}
	app.Database = db
	return app
}
