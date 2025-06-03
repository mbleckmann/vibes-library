#!/bin/sh
npm ci
npm run build
npx prisma migrate deploy
npx vercel --prod --token "$VERCEL_TOKEN"
