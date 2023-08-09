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
refresh:
	docker-compose exec frontend yarn prisma migrate reset --force
	docker-compose exec backend php artisan migrate:refresh --seed
rollback:
	docker-compose exec backend php artisan migrate:rollback
yarn_install:
	docker-compose exec frontend yarn install
# make artisan COMMAND="this is command"
artisan:
	docker-compose exec --user=1000 backend php artisan ${COMMAND}
yarn_add:
	docker-compose exec frontend yarn add ${PACKAGE}