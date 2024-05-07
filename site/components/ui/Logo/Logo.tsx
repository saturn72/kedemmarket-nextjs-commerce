import { Avatar } from '@mui/material'
import t from 'locale'
import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <>
    <Avatar src='/logo.png'
      alt={t('kedemMarketLogo')}
      sx={{
        width: props.width || 128,
        height: props.height || 128
      }}
      className={className}
      {...props}
    />
  </>)

export default Logo
