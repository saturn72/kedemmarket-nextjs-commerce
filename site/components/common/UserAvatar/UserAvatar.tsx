import { FC, useRef } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import { Avatar } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface Props {
  className?: string
  children?: any
  width?: number
  height?: number
}

const UserAvatar: FC<Props> = ({
  width,
  height,
  ...props
}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <>
      <Avatar
        alt={userAvatar.name}
        src={userAvatar.src}
        srcSet={userAvatar.srcSet}
        sx={{
          width: width || 24,
          height: height || 24
        }}
        {...props} >
        <AccountCircleOutlinedIcon />
      </Avatar>
    </>)
}

export default UserAvatar
