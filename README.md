<a name="readme-top"></a>

# Imaginify - AI powered image generator.

![Imaginify - AI powered image generator.](/.github/images/img_main.png "Imaginify - AI powered image generator.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/imaginify?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/imaginify?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/imaginify?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/imaginify?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/imaginify?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/imaginify/pulls "GitHub pull requests")
[![Netlify Status](https://api.netlify.com/api/v1/badges/934abd2a-920b-4a40-9940-d8850c9d47bf/deploy-status)](https://ai-imaginify.netlify.app/ "Netlify Status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
imaginify/
  |- actions/
    |-- image.action.ts
    |-- transaction.action.ts
    |-- user.action.ts
  |- app/
    |-- (auth)/
        |--- sign-in/[[...sign-in]]/
        |--- sign-up/[[...sign-up]]/
        |--- layout.tsx
    |-- (root)/
        |--- credits/
        |--- profile/
        |--- transformations/
            |---- [id]/
                |----- update/
                |----- page.tsx
            |---- add/
            |---- layout.tsx
            |---- page.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- api/webhooks/
        |--- clerk/
        |--- stripe/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- shared/
    |-- ui/
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- lib/
    |-- mongoose.ts
    |-- utils.ts
  |- models/
    |-- image.model.ts
    |-- transaction.model.ts
    |-- user.model.ts
  |- public/assets/
    |-- icons/
    |-- images/
  |- types/
    |-- index.d.ts
  |- .env.example
  |- .env.local
  |- .eslintrc.json
  |- .gitignore
  |- .vercelignore
  |- components.json
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect urls
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# clerk webhook secret
WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXX

# mongo db url
MONGODB_URL=mongodb+srv://<user>:<password>@<host>:<port>/?retryWrites=true&w=majority&appName=imaginify-backend

# cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxxxxxxxx
CLOUDINARY_API_KEY=000000000000000
CLOUDINARY_API_SECRET=XXXXXXXXXXXXXXXXXXXX

# stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# public server url
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

```

5. **Clerk Auth Keys**:

   - Go to the Clerk Dashboard (https://dashboard.clerk.dev/).
   - Log in to your account.
   - Navigate to the project you're working on.
   - Find the section for API keys.
   - Generate or locate the following keys:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `CLERK_SECRET_KEY`
   - Copy these keys into your `.env.local` file.

6. **Clerk Redirect URLs**:

   - These are typically configured within your Clerk Dashboard or during project setup.
   - Ensure that the following URLs are configured correctly:
     - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
     - `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
     - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
     - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`
   - Copy these URLs into your `.env.local` file.

7. **Clerk Webhook Secret**:

   - Navigate to the Clerk Dashboard.
   - Find the section for webhooks or integrations.
   - Generate a webhook secret or locate an existing one.
   - Copy the webhook secret (`WEBHOOK_SECRET`) into your `.env.local` file.

8. **MongoDB URL**:

   - Log in to your MongoDB Atlas account (https://www.mongodb.com/cloud/atlas).
   - Navigate to your project or cluster.
   - Locate the connection string.
   - Replace `<user>`, `<password>`, `<host>`, and `<port>` with your MongoDB credentials.
   - Copy the MongoDB URL (`MONGODB_URL`) into your `.env.local` file.

9. **Cloudinary**:

   - Log in to your Cloudinary account (https://cloudinary.com/console).
   - Navigate to your account settings or dashboard.
   - Find or generate the Cloudinary API key and API secret.
   - Copy these credentials into your `.env.local` file under `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.

10. **Stripe Keys**:

- Log in to your Stripe account (https://dashboard.stripe.com/login).
- Navigate to your API settings.
- Find or generate the following keys:
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
- Copy these keys into your `.env.local` file.

11. **Public Server URL**:

- This is typically the URL where your server is hosted.
- Replace `http://localhost:3000` with your actual server URL.
- Copy the updated URL (`NEXT_PUBLIC_SERVER_URL`) into your `.env.local` file.

12. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.
13. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Profile Page](/.github/images/img2.png "Profile Page")

![Buy Credits](/.github/images/img3.png "Buy Credits")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify") [![MongoDB](https://skillicons.dev/icons?i=mongodb "MongoDB")](https://mongodb.com/ "MongoDB")

## :wrench: Stats

[![Stats for Imaginify](/.github/images/stats.svg "Stats for Imaginify")](https://pagespeed.web.dev/analysis?url=https://ai-imaginify.netlify.app/ "Stats for Imaginify")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Imaginify.

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.9
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers): ^3.3.4
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.0.2
- [@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select): ^2.0.0
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [@radix-ui/react-toast](https://www.npmjs.com/package/@radix-ui/react-toast): ^1.1.5
- [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js): ^3.0.10
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [cloudinary](https://www.npmjs.com/package/cloudinary): ^2.0.3
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.357.0
- [mongodb](https://www.npmjs.com/package/mongodb): ^6.5.0
- [mongoose](https://www.npmjs.com/package/mongoose): ^8.2.1
- [next](https://www.npmjs.com/package/next): 14.1.3
- [next-cloudinary](https://www.npmjs.com/package/next-cloudinary): ^6.3.0
- [qs](https://www.npmjs.com/package/qs): ^6.12.0
- [react](https://www.npmjs.com/package/react): ^18
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): ^7.51.0
- [stripe](https://www.npmjs.com/package/stripe): ^14.21.0
- [svix](https://www.npmjs.com/package/svix): ^1.21.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.1
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [zod](https://www.npmjs.com/package/zod): ^3.22.4

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fimaginify "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/imaginify&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/imaginify&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/imaginify&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/imaginify&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
