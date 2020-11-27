import React from 'react'

function SalaryButton(props) {
  return (
    <div>
      <button onClick={incSalary}>{props.children}</button>
    </div>
  )
}

export default SalaryButton
