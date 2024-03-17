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

      // stripe keys
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;

      // public server url
      NEXT_PUBLIC_SERVER_URL: string;
    }
  }
}
