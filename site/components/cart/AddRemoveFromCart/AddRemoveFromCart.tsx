import React, { FC, useState } from 'react'
import cn from 'clsx'
import { Button, useUI } from '@components/ui'
import { Plus, Minus } from '@components/icons'
import { Input } from '@mui/joy'
import useCustomer from '@framework/customer/use-customer'
import s from './AddRemoveFromCart.module.css'
import type { Product, ProductVariant } from '@commerce/types/product'
import { useAddItem, useCart, useRemoveItem } from '@framework/cart'
import t from 'locale'
import CartPlus from '@components/icons/CartPlus'


type Props = {
  productId: Product['id']
  variant?: ProductVariant
  active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const AddRemoveFromCart: FC<Props> = ({
  productId,
  active,
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

  // @ts-ignore cart is not always enabled
  const itemInCart = data?.items?.find(
    // @ts-ignore cart is not always enabled
    (item) => item.productId === productId && item.variantId === active.id
  )

  const handleCartChange = async (e: any, action: 'add' | 'remove') => {
    e.preventDefault()
    console.log("action:", action);

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

  //press on card to redirect to product page
  //add image gallery
  return (
    <>
      {
        itemInCart ? (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={cn(s.root, className)}
            onClick={e => handleCartChange(e, 'add')}
            // onClick={addToCart}
            loading={loading}
            disabled={!active}
          >
            {!active
              ? t('notAvailable')
              : t('addToCart')}
            & nbsp;
            <CartPlus />
          </Button >

        ) : (
          <Input
            value='quantity from cart'
            startDecorator={<Button
              aria-label="Add to cart"
              className={cn(s.root, className)}
              onClick={e => handleCartChange(e, 'add')}
              {...props}
            >
              <Plus
                className={cn(s.icon, {
                  [s.loading]: loading,
                })}
              />
            </Button>}
            endDecorator={
              <Button
                aria-label="Remove from cart"
                className={cn(s.root, className)}
                onClick={e => handleCartChange(e, 'remove')}
                {...props}
              >
                <Minus
                  className={cn(s.icon, {
                    [s.loading]: loading
                  })}
                />
              </Button >}
          />
        )
      }
    </>
  )
}

export default AddRemoveFromCart
