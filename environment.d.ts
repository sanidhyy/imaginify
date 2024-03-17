// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // mongo db url
      MONGODB_URL: string;

      // clerk webhook secret
      WEBHOOK_SECRET: string;

      // cloudinary api keys
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
    }
  }
}
