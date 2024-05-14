import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Stack, Grid } from '@mui/joy';

import { Marquee } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ProductCardSlim from '@components/product/ProductCardSlim'
import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import { getHomePageInfo, getHomePageProducts } from 'cms/homePage'
import ProductCardFull from '@components/product/ProductCardFull'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const products = await getHomePageProducts();
  const { categories, brands } = await getHomePageInfo();

  const pagesPromise = commerce.getAllPages({ config, preview })

  const { pages } = await pagesPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
  categories,
  brands
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid
        container
        columns={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 5 }}
        sx={{ flexGrow: 1, justifyContent: 'center' }}
      >
        {products.slice(0, 5).map((product: any, i: number) => (
          <ProductCardFull
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
              priority: true,
            }}
          />
        ))}
      </Grid >
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCardSlim key={product.id} product={product} />
        ))}
      </Marquee>
      {/* <Heros /> */}

      {/* <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 1 ? 1080 : 540,
              height: i === 1 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCardSlim key={product.id} product={product} />
        ))}
      </Marquee>
      <HomeAllProductsGrid
        products={products}
        categories={categories}
        brands={brands}
      />
    </>
  )
}

Home.Layout = Layout
