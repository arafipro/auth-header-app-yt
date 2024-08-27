# 【Auth.js】Webアプリ必須！NextAuth v5で認証機能付きヘッダーを作る

## YouTube

[!["【Auth.js】Webアプリ必須！NextAuth v5で認証機能付きヘッダーを作る"](https://i.ytimg.com/vi/EadIZK96lsE/maxresdefault.jpg)](https://youtu.be/EadIZK96lsE)

## 技術選定

- TypeScript
- Next.js
- Tailwind CSS
- shadcn/ui
- Auth.js(NextAuth.js) v5
- Cloudflare Pages

## 初期設定

### NodeModuleをインストール

```bash
npm install
```

### 環境変数を設定

ファイル`.env.local.sample`を`.env.local`に変更して、各環境変数を指定する

```sh:.env.local
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
