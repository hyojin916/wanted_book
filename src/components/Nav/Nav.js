import React from 'react'
import { useHistory } from 'react-router'

function Nav() {
  const history = useHistory()
  const goToMain = () => {
    history.push('/')
  }

  return (
    <div>
      <button onClick={goToMain}>홈으로 가기!</button>
    </div>
  )
}

export default Nav
