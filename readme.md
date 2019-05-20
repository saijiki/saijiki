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
```

## ２回目以降

プロジェクトのディレクトリに移動してから下記のコマンドを実行する。

```
cd laradock
docker-compose up -d nginx mysql workspace
```

## フロントエンドの開発

フロントエンドのディレクトリに移動して作業する。

### 8000番ポートの開放

外部から開発サーバにアクセスできるよう設定する。
管理者権限で実行する。

```
docker inspect -f {{.NetworkSettings.Networks.laradock_backend.IPAddress}} laradock_workspace_1
# IPアドレスが出力される ... (1)

docker-machine ssh
sudo iptables -t nat -A DOCKER ! -i docker0 -p tcp -m tcp --dport 8000 -j DNAT --to-destination (1)のIPアドレス:8080
```

### 開発サーバの起動

下記のコマンドを実行して[http://192.168.99.100:8000](http://192.168.99.100:8000)にアクセスする。

```
yarn run serve
```

### Gitのコミット前に

プロジェクトをビルドしてからコミットする。

```
yarn run build
git add -A
```
