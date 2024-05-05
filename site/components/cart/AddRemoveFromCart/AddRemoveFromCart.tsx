import React, { FC, useState } from 'react'
import cn from 'clsx'
import { useUI } from '@components/ui'
import { Plus, Minus } from '@components/icons'
import useCustomer from '@framework/customer/use-customer'
import s from './AddRemoveFromCart.module.css'
import type { Product, ProductVariant } from '@commerce/types/product'
import { useAddItem, useCart, useRemoveItem } from '@framework/cart'

type Props = {
  productId: Product['id']
  variant: ProductVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const AddRemoveFromCart: FC<Props> = ({
  productId,
  variant,
  className,
  ...props
}) => {
  const { data } = useCart()
  const addItem = useAddItem()
  const removeItem = useRemoveItem()
  const { data: customer } = useCustomer()
  const { openModal, setModalView } = useUI()
  const [loading, setLoading] = useState(false)

  // @ts-ignore Wishlist is not always enabled
  const itemInCart = data?.items?.find(
    // @ts-ignore Wishlist is not always enabled
    (item) => item.productId === productId && item.variantId === variant.id
  )

  const handleCartChange = async (e: any) => {
    e.preventDefault()

    if (loading) return

    // A login is required before adding an item to the wishlist
    if (!customer) {
      setModalView('LOGIN_VIEW')
      return openModal()
    }

    setLoading(true)

    try {
      if (itemInCart) {
        await removeItem({ id: itemInCart.id! })
      } else {
        await addItem({
          productId,
          variantId: variant?.id!,
        })
      }

      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        aria-label="Add to cart"
        className={cn(s.root, className)}
        onClick={handleCartChange}
        {...props}
      >
        <Plus
          className={cn(s.icon, {
            [s.loading]: loading,
          })}
        />
      </button>
      <h1> cart quantity goes here</h1>
      <button
        aria-label="Remove from cart"
        className={cn(s.root, className)}
        onClick={handleCartChange}
        {...props}
      >
        <Minus
          className={cn(s.icon, {
            [s.loading]: loading
          })}
        />
      </button>
    </>
  )
}

export default AddRemoveFromCart
