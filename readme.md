# saijiki

## 初回の設定

### Project clone

```
git clone --recursive https://github.com/saijiki/saijiki.git
cd saijiki
```

### Laradock setup

```
cd laradock

cp env-example .env
sed -i 's/MYSQL_VERSION=.*/MYSQL_VERSION=5.7/' .env

docker-compose up -d nginx mysql workspace
```

### Laravel setup

```
docker-compose exec --user=laradock workspace bash

composer install

cp .env.example .env
sed -i 's/DB_HOST=.*/DB_HOST=mysql/' .env
sed -i 's/DB_DATABASE=.*/DB_DATABASE=default/' .env
sed -i 's/DB_USERNAME=.*/DB_USERNAME=default/' .env

php artisan key:generate
```

### Vue.js setup

```
cd frontend

yarn install
```

## ２回目以降
```
cd laradock

docker-compose up -d nginx mysql workspace
```
