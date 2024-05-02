import { FC, useRef } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import { Avatar } from '@mui/material'

interface Props {
  className?: string
  children?: any
}

const UserAvatar: FC<Props> = ({ }) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <Avatar alt="" />)
}

export default UserAvatar
