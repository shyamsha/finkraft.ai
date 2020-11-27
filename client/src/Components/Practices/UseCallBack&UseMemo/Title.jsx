import React from 'react'

function Title(props) {
  console.log("title rendering")

  return (
    <div>
      {props.name}
    </div>
  )
}

export default React.memo(Title)
