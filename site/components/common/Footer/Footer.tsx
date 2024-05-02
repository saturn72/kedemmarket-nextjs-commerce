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

const links = {
  home:
  {
    caption: 'homePage',
    uri: '/',
    icon: <HomeOutlinedIcon />
  },
  cart:
  {
    caption: 'cart',
    uri: '/cart',
    icon: <ShoppingCartCheckoutOutlinedIcon />
  },
  account:
  {
    caption: 'account',
    uri: '/account',
    icon: <AccountCircleOutlinedIcon />
  },
}

const FooterButton: FC<{ caption: string, uri: string, icon: JSX.Element }> = ({ caption, uri, icon }) => {
  return (
    <BottomNavigationAction label={t(caption)} icon={icon} href={uri} />
  )
};

const Footer: FC<Props> = ({ className, pages }) => {
  // const { sitePages } = usePages(pages)
  // const rootClassName = cn(s.root, className)
  const [value, setValue] = useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
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
    // <footer className={rootClassName}>
    //   <Container>
    //     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
    //       <div className="col-span-1 lg:col-span-2">
    //         <Link
    //           href="/"
    //           className="flex flex-initial items-center font-bold md:mr-24"
    //         >
    //           <span className="rounded-full border border-accent-6 mr-2">
    //             <Logo />
    //           </span>
    //           <span>{t('kedemMarket')}</span>
    //         </Link>
    //       </div>
    //       <div className="col-span-1 lg:col-span-7">
    //         <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
    //           {[...links, ...sitePages].map((page) => (
    //             <span key={page.url} className="py-3 md:py-0 md:pb-4">
    //               <Link
    //                 href={page.url!}
    //                 className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150"
    //               >
    //                 {t(page.name)}
    //               </Link>
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
    //       <div>
    //         <span>&copy; 2024 Kedem Market, Inc. All rights reserved.</span>
    //       </div>
    //       <div className="flex items-center text-primary text-sm">
    //         <span className="text-primary">Created by</span>
    //         <a
    //           rel="noopener noreferrer"
    //           href="https://saturn72.com"
    //           aria-label="Saturn72 Link"
    //           target="_blank"
    //           className="text-primary"
    //         >
    //           <Vercel
    //             className="inline-block h-6 ml-3 text-primary"
    //             alt="Vercel.com Logo"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
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
