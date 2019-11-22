# Saijiki

- [Docker for Windows or Docker for Mac](#docker-for-windows-or-docker-for-mac)
    - [初回の設定](#初回の設定)
        - [プロジェクトのクローン](#プロジェクトのクローン)
        - [Laradockのセットアップ](#laradockのセットアップ)
        - [Laravelのセットアップ](#laravelのセットアップ)
        - [Vue.jsのセットアップ](#vuejsのセットアップ)
- [Docker Toolbox](#docker-toolbox)
    - [初回の設定](#初回の設定-1)
        - [プロジェクトのクローン](#プロジェクトのクローン-1)
        - [Laradockのセットアップ](#laradockのセットアップ-1)
            - [ポートフォワーディング](#ポートフォワーディング)
        - [Laravelのセットアップ](#laravelのセットアップ-1)
        - [Vue.jsのセットアップ](#vuejsのセットアップ-1)
            - [ポートフォワーディング](#ポートフォワーディング-1)

## Docker for Windows or Docker for Mac

### 初回の設定

#### プロジェクトのクローン

```sh
git clone https://github.com/saijiki/saijiki.git && cd saijiki/laradock
```

#### Laradockのセットアップ

```sh
cp env-example .env && docker-compose up -d nginx mysql
```

#### Laravelのセットアップ

```sh
docker-compose exec --user=laradock workspace bash

composer install
composer run-script post-root-package-install
composer run-script post-create-project-cmd

php artisan migrate:fresh --seed

php artisan jwt:secret
```

#### Vue.jsのセットアップ

```sh
cd frontend && yarn install && exit
```

## Docker Toolbox

### 初回の設定

#### プロジェクトのクローン

```sh
git clone https://github.com/saijiki/saijiki.git && cd saijiki/laradock
```

#### Laradockのセットアップ

```sh
cp env-example .env && docker-compose up -d nginx mysql
```

##### ポートフォワーディング

```sh
ssh -fNCL 0.0.0.0:80:localhost:80 docker@192.168.99.100
# docker@192.168.99.100's password: tcuser
```

#### Laravelのセットアップ

```sh
docker-compose exec --user=laradock workspace bash

composer install
composer run-script post-root-package-install
composer run-script post-create-project-cmd

php artisan migrate:fresh --seed

php artisan jwt:secret
```

#### Vue.jsのセットアップ

```sh
cd frontend && yarn install && exit
```

##### ポートフォワーディング

```sh
ssh -fNCL 0.0.0.0:8080:localhost:8080 docker@192.168.99.100
# docker@192.168.99.100's password: tcuser
```
