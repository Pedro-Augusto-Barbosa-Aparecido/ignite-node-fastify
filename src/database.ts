import { env } from "./env";
import { Knex, knex as setupKnex } from "knex";

if (!process.env.DATABASE_URL) {
  throw new Error("database url not found");
}

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
