package bootstrap

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/spf13/viper"
)

// server:
//   PORT: 8080

// db:
//   PORT: 5436
//   NAME: "postgres"
//   USERNAME: "portgres"
//   SSLMODE: "disabled"
//   HOST: "localhost"

type Env struct {
	SERVERport string
	DBport     string
	DBname     string
	DBusername string
	DBsslmode  string
	DBhost     string
	DBpassword string
	SECRET     string
}

func NewEnv() (*Env, error) {
	env := Env{}

	// Load config
	viper.SetConfigName(ConfigName)
	viper.AddConfigPath("config")
	if err := viper.ReadInConfig(); err != nil {
		return &env, err
	}

	// Load .env
	if err := godotenv.Load(); err != nil {
		return &env, err
	}

	// Set environment
	env.ENVtype = viper.GetString("Env")
	env.SERVERport = viper.GetString("server.PORT")
	env.DBport = viper.GetString("db.PORT")
	env.DBhost = viper.GetString("db.HOST")
	env.DBsslmode = viper.GetString("db.SSLMODE")
	env.DBusername = viper.GetString("db.USERNAME")
	env.DBname = viper.GetString("db.DBNAME")

	env.DBpassword = os.Getenv("DB_PASSWORD")
	env.ENVsecretkey = os.Getenv("SECRET_KEY")

	return &env, nil
}
