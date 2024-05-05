import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCardStandAlone.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import usePrice from '@framework/product/use-price'
import ProductTag from '../ProductTag'
import AddRemoveFromCart from '@components/cart/AddRemoveFromCart'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCardStandAlone: FC<Props> = ({
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

  return (
    <Link
      href={`/product/${product.slug}`}
      className={rootClassName}
      aria-label={product.name}
    >
      <ProductTag
        name={product.name}
        price={`${price} ${product.price?.currencyCode}`}
      />

      <WishlistButton
        className={s.wishlistButton}
        productId={product.id}
        variant={product.variants[0] as any}
      />
      <AddRemoveFromCart className={s.addRemoveFromCart}
        productId={product.id} variant={product.variants[0]} />


      <div className={s.imageContainer}>
        {product?.images && (
          <Image
            alt={product.name || 'Product Image'}
            className={s.productImage}
            src={product.images[0]?.url || placeholderImg}
            height={540}
            width={540}
            quality="85"
            {...imgProps}
          />
        )}
      </div>
    </Link >
  )
}

export default ProductCardStandAlone
