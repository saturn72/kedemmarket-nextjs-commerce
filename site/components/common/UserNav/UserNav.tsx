import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import useCart from '@framework/cart/use-cart'
import { useUI } from '@components/ui/context'
import { Heart, Bag, Menu } from '@components/icons'
import CustomerMenuContent from './CustomerMenuContent'
import useCustomer from '@framework/customer/use-customer'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'

import type { LineItem } from '@commerce/types/cart'
import { IconButton } from '@mui/material'
import UserAvatar from '../UserAvatar'

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { data } = useCart()
  const { data: isCustomerLoggedIn } = useCustomer()
  const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
    useUI()

  const itemsCount = data?.lineItems?.reduce(countItem, 0) ?? 0
  const DropdownTrigger = isCustomerLoggedIn
    ? DropdownTriggerInst
    : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.mobileMenu}>
          <IconButton
            className={s.item}
            aria-label="Menu"
            onClick={() => {
              setSidebarView('MOBILE_MENU_VIEW')
              openSidebar()
            }}
          >
            {/* <MenuIcon /> */}
            <Menu />
          </IconButton>
        </li>
        <li className={s.item}>
          <Dropdown>
            <DropdownTrigger>
              <button
                aria-label="Menu"
                className={s.avatarButton}
                onClick={() => (isCustomerLoggedIn ? null : openModal())}
              >
                <UserAvatar />
              </button>
            </DropdownTrigger>
            <CustomerMenuContent />
          </Dropdown>
        </li>

        {isCustomerLoggedIn && (
          <li className={s.item}>
            <Link href="/wishlist" legacyBehavior>
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default UserNav
