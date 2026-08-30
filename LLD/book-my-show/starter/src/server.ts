import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { connectDatabase } from "./config/database";
import { healthRouter } from "./controllers/health.controller";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);

async function bootstrap() {
  await connectDatabase();
  app.listen(env.port, () => {
    console.log(`[server] listening on port ${env.port}`);
  });
}

bootstrap();
