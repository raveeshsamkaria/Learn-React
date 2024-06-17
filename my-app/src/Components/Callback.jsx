import { memo } from 'react'

const Callback = ({calculate}) => {
  return (
    <>
      {alert("Callback is Rendered")}
    </>
  )
}

export default memo(Callback)