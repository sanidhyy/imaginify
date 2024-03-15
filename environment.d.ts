// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // mongo db url
      MONGODB_URL
    }
  }
}