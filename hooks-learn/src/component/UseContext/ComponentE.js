import React,{useContext, userContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from '../../App'

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(useContext)
  return (
    <div>
     {user}-{channel}
    </div>
  )
}

export default ComponentE
