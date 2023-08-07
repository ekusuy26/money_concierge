include .env

up:
	docker-compose up
upd:
	docker-compose up -d
down:
	docker-compose down
front:
	docker-compose exec frontend sh
back:
	docker-compose exec backend bash
db:
	docker-compose exec db bash
connect_db:
	docker-compose exec db mysql -u $(DB_USER) -p$(DB_PASS)
nginx:
	docker-compose exec nginx bash
next:
	docker-compose exec frontend yarn create next-app . --typescript
migrate:
	docker-compose exec backend php artisan migrate
rollback:
	docker-compose exec backend php artisan migrate:rollback
yarn_install:
	docker-compose exec frontend yarn install
