import routes from '../routes';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Paper } from '@mui/material';
import t from 'locale';

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

interface FooterProps { caption: string, uri: string, icon: JSX.Element }
const links = {
  home:
  {
    caption: 'homePage',
    uri: routes.uris.home,
    icon: <HomeOutlinedIcon />
  },
  cart:
  {
    caption: 'cart',
    uri: routes.uris.checkout,
    icon: <ShoppingCartCheckoutOutlinedIcon />
  },
  account:
  {
    caption: 'account',
    uri: routes.uris.account,
    icon: <AccountCircleOutlinedIcon />
  },
}

const FooterButton: FC<FooterProps> = ({ caption, uri, icon }) => {
  return (
    <BottomNavigationAction showLabel={true} label={t(caption)} icon={icon} href={uri} />
  )
};

const Footer: FC<Props> = ({ className, pages }) => {
  // const { sitePages } = usePages(pages)
  // const rootClassName = cn(s.root, className)
  const [value, setValue] = useState(0);
  return (
    <Paper sx={{ zIndex: 1000, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <FooterButton caption={links.cart.caption} uri={links.cart.uri} icon={links.cart.icon} />
        <FooterButton caption={links.account.caption} uri={links.account.uri} icon={links.account.icon} />
        <FooterButton caption={links.home.caption} uri={links.home.uri} icon={links.home.icon} />
      </BottomNavigation>
    </Paper>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
