# Kedemmarket Provider

**Demo:** https://kedemmarket.demo.vercel.store/

With the deploy button below you'll be able to have a [Kedemmarket](https://www.kedemmarket.com/) account and a store that works with this starter:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fcommerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&demo-description=An%20all-in-one%20starter%20kit%20for%20high-performance%20e-commerce%20sites.&demo-url=https%3A%2F%2Fdemo.vercel.store&demo-image=https%3A%2F%2Fkedemmarket-demo-asset-ksvtgfvnd.vercel.app%2Fkedemmarket.png&integration-ids=oac_MuWZiE4jtmQ2ejZQaQ7ncuDT)

If you already have a Kedemmarket account and want to use your current store, then copy the `.env.template` file in this directory to `.env.local` in the main directory (which will be ignored by Git):

```bash
cp packages/kedemmarket/.env.template .env.local
```

Then, set the environment variables in `.env.local` to match the ones from your store.

## Contribute

Our commitment to Open Source can be found [here](https://vercel.com/oss).

If you find an issue with the provider or want a new feature, feel free to open a PR or [create a new issue](https://github.com/vercel/commerce/issues).

## Troubleshoot

<details>
<summary>I already own a Kedemmarket store. What should I do?</summary>
<br>
First thing you do is: <b>set your environment variables</b>
<br>
<br>
.env.local

```sh
KEDEMMARKET_STOREFRONT_API_URL=<>
KEDEMMARKET_STOREFRONT_API_TOKEN=<>
KEDEMMARKET_STORE_API_URL=<>
KEDEMMARKET_STORE_API_TOKEN=<>
KEDEMMARKET_STORE_API_CLIENT_ID=<>
KEDEMMARKET_CHANNEL_ID=<>
```

If your project was started with a "Deploy with Vercel" button, you can use Vercel's CLI to retrieve these credentials.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and Github accounts (creates .vercel file): `vercel link`
3. Download your environment variables: `vercel env pull .env.local`

Next, you're free to customize the starter. More updates coming soon. Stay tuned.

</details>

<details>
<summary>Kedemmarket shows a Coming Soon page and requests a Preview Code</summary>
<br>
After Email confirmation, Checkout should be manually enabled through Kedemmarket platform. Look for "Review & test your store" section through Kedemmarket's dashboard.
<br>
<br>
Kedemmarket team has been notified and they plan to add more detailed about this subject.
</details>
