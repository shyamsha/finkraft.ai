import React, {  } from 'react'

function Button(props) {
  console.log("button click")
  return (
    <div>
      <button onClick={props.incAge}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button)
