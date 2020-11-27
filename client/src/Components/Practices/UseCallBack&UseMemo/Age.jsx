import React from 'react'

function Age(props) {
  console.log(props.text+" rendering")
  return (
    <div>
      {props.age}
    </div>
  )
}

export default React.memo(Age)
