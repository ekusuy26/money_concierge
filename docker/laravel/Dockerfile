FROM php:8.2-fpm-alpine

EXPOSE 5173

RUN apk add --no-cache --update \
    bash npm && \
    docker-php-ext-install pdo_mysql

COPY ./php.ini /usr/local/etc/php/php.ini
COPY ./www.conf /usr/local/etc/php-fpm.d/zzz-www.conf

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN sed -i -e "s|listen.allowed_clients = 127.0.0.1|;listen.allowed_clients = 127.0.0.1|"  /usr/local/etc/php-fpm.d/www.conf

WORKDIR /var/www/html/app