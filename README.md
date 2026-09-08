# Team Products API

FastAPIで作成したDockerアプリケーションです。

## 必要なもの

- Git
- Docker Desktop

## 起動方法

```bash
git clone https://github.com/himekawaaaaaq/team-products.git

cd team-products

docker compose up -d --build
```

## フロントエンドの確認方法

Dockerの起動後、ブラウザで以下にアクセスします。

```text
http://localhost:5173/
```

Desk PALのダッシュボードが表示されれば起動成功です。

## 終了方法

Dockerを終了する場合は、以下を実行します。

```bash
docker compose down
```