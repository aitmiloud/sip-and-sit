# SipAndSit [WORK IN PROGRESS]

## Description

a coffee shop directory platform designed for individuals who seek conducive environments for work, study, or simply enjoying a quiet moment with their laptops.

## Comfortable development (PostgreSQL + TypeORM)

1. Clone repository

   ```bash
   git clone https://github.com/aitmiloud/sip-and-sit
   ```

2. Go to folder, and copy `env-example` as `.env`.

   ```bash
   cd sip-and-sit
   cp env-example .env
   ```

3. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

4. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

5. Install dependency

   ```bash
   npm install
   ```

6. Run migrations

   ```bash
   npm run migration:run
   ```

7. Run seeds

   ```bash
   npm run seed:run
   ```

8. Run app in dev mode

   ```bash
   npm run start:dev
   ```

9. Open <http://localhost:3000>