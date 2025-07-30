# robust-backend

En robust och framtidssäker backend-struktur med TypeScript, Express och Prisma.

## Struktur

```
robust-backend/
├── package.json
├── tsconfig.json  
├── .env
├── .env.example
├── src/
│   ├── server.ts
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── prisma/
│   └── schema.prisma
└── tests/
```

## Kom igång

1. Installera beroenden:
   ```
   npm install
   ```
2. Skapa en `.env`-fil baserat på `.env.example`.
3. Starta utvecklingsservern:
   ```
   npm run dev
   ```
