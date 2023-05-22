This is a fork of the next example **api-routes-rest** in the next repo.

There is a problem with query parameter parsing during a server request when a not encoded query parameter with a double // lose one / and is returned incorrect.

- Next 13.2.4 -> the problem does not appear
- Next 13.3.0 -> the problem appear for the first time
  - if you run the code in development mode (yarn dev) you get the problem
  - if you run the code in production mode (yarn build && yarn start) you do not get the problem
- Next 13.4.3 (latest) -> the problem appear in development and production mode (i didn't check from which version the problem went into production mode too)




# API routes with REST

Next.js ships with [API routes](https://github.com/vercel/next.js#api-routes), which provide an easy solution to build your own `API`. This example shows how it can be used to create your [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) `API`.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/api-routes-rest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest&project-name=api-routes-rest&repository-name=api-routes-rest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example api-routes-rest api-routes-rest-app
```

```bash
yarn create next-app --example api-routes-rest api-routes-rest-app
```

```bash
pnpm create next-app --example api-routes-rest api-routes-rest-app
```

### Deploy to Vercel

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
