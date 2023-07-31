up:
	docker-compose up -d
down:
	docker-compose down
front:
	docker-compose exec frontend sh
next:
	docker-compose exec frontend yarn create next-app . --typescript