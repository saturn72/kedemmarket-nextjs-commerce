import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCardSimple.module.css'
import Image, { ImageProps } from 'next/image'
import usePrice from '@framework/product/use-price'


interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCardSimple: FC<Props> = ({
  product,
  imgProps,
  className,
  noNameTag = false,
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
      <div className={s.header}>
        <span>{product.name}</span>
      </div>
      {product?.images && (
        <Image
          quality="85"
          src={product.images[0]?.src || placeholderImg}
          alt={product.name || 'Product Image'}
          height={320}
          width={320}
          {...imgProps}
        />
      )}
    </Link >
  )
}

export default ProductCardSimple
