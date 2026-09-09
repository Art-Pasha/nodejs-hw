# nodejs-hw — 02-mongodb

Express-додаток для роботи з колекцією нотаток із підключенням MongoDB через Mongoose.

## Встановлення

\`\`\`bash
npm install
\`\`\`

## Змінні оточення

Створіть файл `.env` у корені проєкту (приклад у `.env.example`):

\`\`\`
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
\`\`\`

## Запуск

\`\`\`bash
npm run dev    # режим розробки (nodemon)
npm start      # звичайний запуск
\`\`\`

## Маршрути

- `GET /notes` — повертає всі нотатки
- `GET /notes/:noteId` — повертає нотатку за ID (404, якщо не знайдено)
- `POST /notes` — створює нову нотатку (201)
- `PATCH /notes/:noteId` — оновлює нотатку за ID (404, якщо не знайдено)
- `DELETE /notes/:noteId` — видаляє нотатку за ID (404, якщо не знайдено)
- будь-який інший маршрут — 404 `Route not found`

## Деплой

Продакшн-версія задеплоєна на [render.com](https://render.com).
