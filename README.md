# game-player-finder-graphql

Сервіс пошуку гравців для настільних і відеоігор з GraphQL API та аналізом уподобань користувачів (курсова робота, ТНТУ ім. І. Пулюя, «Сховища великих даних»).

Стек, версії та документація: [docs/STACK.md](docs/STACK.md).

## Вимоги
- Node.js 24.22.2 (`nvm install 24.22.2 && nvm use 24.22.2`)
- pnpm 12.16.1 (`corepack enable` або `npm install -g pnpm@12.16.1`)
- MongoDB 8.x запущена локально (`mongodb://127.0.0.1:27017`)

## Запуск
```bash
pnpm install
cp .env.example .env
pnpm dev          # GraphQL API на http://localhost:4000 (Apollo Sandbox у браузері)
```

## Команди
| Команда | Призначення |
|---|---|
| `pnpm dev` | запуск сервера з перезапуском при змінах |
| `pnpm typecheck` | перевірка типів TypeScript |
| `pnpm codegen` | генерація типів зі `src/schema.graphql` |
| `pnpm test` | автотести (Vitest) |
| `pnpm format` | форматування коду (Prettier) |
