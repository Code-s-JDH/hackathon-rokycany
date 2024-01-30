rundb:
	docker run -e POSTGRES_PASSWORD="123321" -p 5436:5432 -d --rm postgres
migrate-up:
	migrate -path ./schema -database "postgres://postgres:123321@localhost:5436/postgres?sslmode=disable" up
migrate-down:
	migrate -path ./schema -database "postgres://postgres:123321@localhost:5436/postgres?sslmode=disable" down