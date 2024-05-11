import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCardFull.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import usePrice from '@framework/product/use-price'
import ProductTag from '../ProductTag'
import AddRemoveFromCart from '@components/cart/AddRemoveFromCart'
import { Card, CardActions, CardCover, CardContent, CardOverflow, IconButton } from '@mui/joy'
import { Favorite } from '@mui/icons-material'

import { Typography } from '@mui/material'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCardFull: FC<Props> = ({
  product,
  imgProps,
  className,
}) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const rootClassName = cn(
    s.root,
    s.simple,
    className
  )

  const image =
  {
    ...product.images[0],
    alt: product.images[0].alt || product.name,
    height: product.images[0].height || 140,
    width: product.images[0].width || 140,
    src: product.images[0]?.url || placeholderImg,
    quality: product.images[0]?.quality || 85
  };

  return (
    <Card>
      <CardCover>
        <Image
          style={{ opacity: 0.2 }}
          alt={image.alt}
          className={s.productImage}
          src={image.src}
          height={image.height}
          width={image.width}
          quality={image.quality}
          {...imgProps}
        />
      </CardCover>
      <CardOverflow>
        <WishlistButton
          className={s.wishlistButton}
          productId={product.id}
          variant={product.variants[0] as any}
        />
      </CardOverflow>
      <CardContent>
        <Typography
          variant='h4'
          // level="body-lg"
          fontWeight="lg"
          color="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          {product.name}
        </Typography>

        {product.description && (

          <Typography
            variant='body1'
            // level="body-lg"
            fontWeight="lg"
            color="#fff"
          >
            {product.description}
          </Typography>
        )}
      </CardContent>
      <CardActions></CardActions>
    </Card >
    // <Card className={rootClassName} variant='outlined'>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //         {product.name}
    //       </Typography>
    //       {
    //         product.description && (<Typography variant="subtitle1" color="text.secondary" component="div">
    //           {product.description}
    //         </Typography>)
    //       }
    //     </CardContent>
    //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    //       <IconButton aria-label="previous">
    //         <Plus />
    //       </IconButton>
    //       <IconButton aria-label="play/pause">
    //         <Bag sx={{ height: 38, width: 38 }} />
    //       </IconButton>
    //       <IconButton aria-label="next">
    //         <Minus />
    //       </IconButton>
    //     </Box>
    //   </Box>

    //   <CardMedia
    //     sx={{ maxHeight: 250, height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
    //     image={image.url}
    //     title={image.alt}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <IconButton size="small" icon></IconButton>
    //     <Button size="small">Remove</Button>
    //   </CardActions>
    // </Card >
    // <Link
    //   href={`/product/${product.slug}`}
    //   className={rootClassName}
    //   aria-label={product.name}
    // >
    //   <ProductTag
    //     name={product.name}
    //     price={`${price} ${product.price?.currencyCode}`}
    //   />

    //   <WishlistButton
    //     className={s.wishlistButton}
    //     productId={product.id}
    //     variant={product.variants[0] as any}
    //   />
    //   {!product.active}
    //   <AddRemoveFromCart className={s.addRemoveFromCart}
    //     productId={product.id} active={product.active} />

    //   <div className={s.imageContainer}>
    //     {product?.images && (
    //       <Image
    //         alt={product.name || 'Product Image'}
    //         className={s.productImage}
    //         src={product.images[0]?.url || placeholderImg}
    //         height={540}
    //         width={540}
    //         quality="85"
    //         {...imgProps}
    //       />
    //     )}
    //   </div>
    // </Link >
  )
}

export default ProductCardFull
