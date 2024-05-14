import { FC } from 'react'
import cn from 'clsx'
import type { Product } from '@commerce/types/product'
import s from './ProductCardFull.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import usePrice from '@framework/product/use-price'
import AddRemoveFromCart from '@components/cart/AddRemoveFromCart'
import {
  AspectRatio,
  Card,
  CardContent,
  CardCover,
  CardOverflow
} from '@mui/joy'

import { Typography } from '@mui/joy'

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
    <Card variant='plain' sx={{ width: 'auto' }}>
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
        <AspectRatio ratio="2">
          <img
            src={image.src}
            srcSet={image.src}
            loading="lazy"
            alt={image.alt || product.name}
          />
        </AspectRatio>
        <WishlistButton
          className={s.wishlistButton}
          productId={product.id}
          variant={product.variants[0] as any}
        /> </CardOverflow>

      <CardContent style={{
        justifyContent: 'end',
      }}>
        <Typography
          fontWeight="lg"
        >
          {product.name}
        </Typography>

        {product.description && (

          <Typography
          >
            {product.description}
          </Typography>
        )}

        <AddRemoveFromCart className={s.addRemoveFromCart}
          productId={product.id} active={product.active} />
      </CardContent >
    </Card>
  )
}

export default ProductCardFull
