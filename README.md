# saijiki

## 初回の設定

上から順に実行する。

### プロジェクトのクローン

```
git clone --recursive https://github.com/saijiki/saijiki.git

cd saijiki
```

### Laradockのセットアップ

```
cd laradock

cp env-example .env
sed -i 's/MYSQL_VERSION=.*/MYSQL_VERSION=5.7/' .env

docker-compose up -d nginx mysql workspace
```

### Laravelのセットアップ

```
docker-compose exec --user=laradock workspace bash

cp .env.example .env
sed -i 's/DB_HOST=.*/DB_HOST=mysql/' .env
sed -i 's/DB_DATABASE=.*/DB_DATABASE=default/' .env
sed -i 's/DB_USERNAME=.*/DB_USERNAME=default/' .env

composer install

php artisan key:generate
```

### Vue.jsのセットアップ

```
cd frontend

yarn install
exit
```

## Docker Toolbox

### ２回目以降

プロジェクトのディレクトリに移動してから下記のコマンドを実行する。

```
cd laradock
docker-compose up -d nginx mysql workspace

ssh -fNCL 0.0.0.0:80:localhost:80 docker@192.168.99.100
docker@192.168.99.100's password: tcuser

ssh -fNCL 0.0.0.0:8080:localhost:8888 docker@192.168.99.100
docker@192.168.99.100's password: tcuser
```

yarnやphp、composerを使用する際は下記のコマンドを実行する。

```
docker-compose exec --user=laradock workspace bash
```

### フロントエンドの開発

フロントエンドのディレクトリに移動して作業する。

#### 8888番ポートの開放

外部(ホストPC)から開発サーバにアクセスできるよう設定する。  
管理者権限で実行する。

```
docker inspect -f {{.NetworkSettings.Networks.laradock_backend.IPAddress}} laradock_workspace_1
# IPアドレスが出力される ... (1)

docker-machine ssh
sudo iptables -t nat -A DOCKER ! -i docker0 -p tcp -m tcp --dport 8888 -j DNAT --to-destination (1)のIPアドレス:8080
exit

```

#### 開発サーバの起動

下記のコマンドを実行して [http://localhost:8080](http://localhost:8080) にアクセスする。

```
yarn run serve
```

#### コードの整形

下記のコマンドを実行する。

```
yarn run lint
```

#### Gitのコミット前に

プロジェクトをビルドしてからコミットする。

```
yarn run build
git add -A
```

## Docker for Windows

### ２回目以降

プロジェクトのディレクトリに移動してから下記のコマンドを実行する。

```
cd laradock
docker-compose up -d nginx mysql workspace
```

phpとcomposerを使用する際は下記のコマンドを実行する。

```
docker-compose exec --user=laradock workspace bash
```

### フロントエンドの開発

フロントエンドのディレクトリに移動して作業する。

#### 開発サーバの起動

下記のコマンドを実行して [http://localhost:8080](http://localhost:8080) にアクセスする。

```
yarn run serve
```

#### コードの整形

下記のコマンドを実行する。

```
yarn run lint
```

#### Gitのコミット前に

プロジェクトをビルドしてからコミットする。

```
yarn run build
git add -A
```
