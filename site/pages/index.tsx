import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  // const productsPromise = commerce.getAllProducts({
  //   variables: { first: 6 },
  //   config,
  //   preview,
  //   // Saleor provider only
  //   ...({ featured: true } as any),
  // })
  const products = [{
    id: "1",
    name: 'name_1',
    description: 'desc_1',
    descriptionHtml: '<h2>desc_1</h2>',
    sku: 'sku_1',
    slug: 'slug_1',
    path: 'path_1',
    images: [],
    variants: [{ id: 'p_var1', name: 'product_var_1', price: 1, listPrice: 123 }],
    price: {
      value: 1,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "2",
    name: 'name_2',
    description: 'desc_2',
    descriptionHtml: '<h2>desc_2</h2>',
    sku: 'sku_2',
    slug: 'slug_2',
    path: 'path_2',
    images: [],
    variants: [{ id: 'p_var2', name: 'product_var_2', price: 2, listPrice: 223 }],
    price: {
      value: 2,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "3",
    name: 'name_3',
    description: 'desc_3',
    descriptionHtml: '<h2>desc_3</h2>',
    sku: 'sku_3',
    slug: 'slug_3',
    path: 'path_3',
    images: [],
    variants: [{ id: 'p_var3', name: 'product_var_3', price: 3, listPrice: 323 }],
    price: {
      value: 3,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "4",
    name: 'name_4',
    description: 'desc_4',
    descriptionHtml: '<h2>desc_4</h2>',
    sku: 'sku_4',
    slug: 'slug_4',
    path: 'path_4',
    images: [],
    variants: [{ id: 'p_var4', name: 'product_var_4', price: 4, listPrice: 423 }],
    price: {
      value: 4,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "5",
    name: 'name_5',
    description: 'desc_5',
    descriptionHtml: '<h2>desc_5</h2>',
    sku: 'sku_5',
    slug: 'slug_5',
    path: 'path_5',
    images: [],
    variants: [{ id: 'p_var5', name: 'product_var_5', price: 5, listPrice: 523 }],
    price: {
      value: 5,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "6",
    name: 'name_6',
    description: 'desc_6',
    descriptionHtml: '<h2>desc_6</h2>',
    sku: 'sku_6',
    slug: 'slug_6',
    path: 'path_6',
    images: [],
    variants: [{ id: 'p_var6', name: 'product_var_6', price: 6, listPrice: 623 }],
    price: {
      value: 6,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "7",
    name: 'name_7',
    description: 'desc_7',
    descriptionHtml: '<h2>desc_7</h2>',
    sku: 'sku_7',
    slug: 'slug_7',
    path: 'path_7',
    images: [],
    variants: [{ id: 'p_var7', name: 'product_var_7', price: 7, listPrice: 723 }],
    price: {
      value: 7,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "8",
    name: 'name_8',
    description: 'desc_8',
    descriptionHtml: '<h2>desc_8</h2>',
    sku: 'sku_8',
    slug: 'slug_8',
    path: 'path_8',
    images: [],
    variants: [{ id: 'p_var8', name: 'product_var_8', price: 8, listPrice: 823 }],
    price: {
      value: 8,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "9",
    name: 'name_9',
    description: 'desc_9',
    descriptionHtml: '<h2>desc_9</h2>',
    sku: 'sku_9',
    slug: 'slug_9',
    path: 'path_9',
    images: [],
    variants: [{ id: 'p_var9', name: 'product_var_9', price: 9, listPrice: 923 }],
    price: {
      value: 9,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }, {
    id: "10",
    name: 'name_10',
    description: 'desc_10',
    descriptionHtml: '<h2>desc_01</h2>',
    sku: 'sku_10',
    slug: 'slug_10',
    path: 'path_10',
    images: [],
    variants: [{ id: 'p_var10', name: 'product_var_10', price: 10, listPrice: 1023 }],
    price: {
      value: 10,
      currency: 'ש"\ח',
    },
    options: [],
    vendor: 'משק 72'
  }];

  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  //const { products } = await productsPromise

  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid variant="filled">
        {products.slice(0, 5).map((product: any, i: number) => (
          <ProductCard
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
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      {/* <Heros /> */}

      <h1>{products.length}</h1>
      <Grid layout="B" variant="filled">
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
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
