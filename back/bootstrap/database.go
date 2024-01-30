package bootstrap

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewDatabase(env *Env) (*sqlx.DB, error) {
	var db *sqlx.DB
	// , env.DBusername, env.DBname, env.DBsslmode, env.DBpassword, env.DBhost, env.DBport
	db, err := sqlx.Connect("postgres", fmt.Sprintf("user='postgres' dbname='postgres' sslmode='disable' password='123321' host='localhost' port=5436"))

	// db, err := sqlx.Connect("postgres", fmt.Sprintf("user=%s dbname=%s sslmode=%s password=%s host=%s port=%s", env.DBusername, env.DBname, env.DBsslmode, env.DBpassword, env.DBhost, env.DBport))
	if err != nil {
		return db, err
	}
	if err := db.Ping(); err != nil {
		return db, err
	}
	return db, nil
}
