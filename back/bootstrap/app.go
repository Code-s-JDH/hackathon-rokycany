package bootstrap

import "github.com/jmoiron/sqlx"

type Application struct {
	Env      *Env
	Database *sqlx.DB
}

func App() *Application {
	app := &Application{}
	app.Env = NewEnv()
	return app
}
