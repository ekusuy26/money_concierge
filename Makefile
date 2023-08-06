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
next:
	docker-compose exec frontend yarn create next-app . --typescript
migrate:
	docker-compose exec backend php artisan migrate
