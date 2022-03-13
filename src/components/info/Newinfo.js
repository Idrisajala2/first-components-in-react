import React from 'react'

const newinfo = ({change, applyChange}) => {
  return (
    <div>
        {change ? (
            <div>
                <h1>Drink water everyday</h1>
                <h3>And Mind your business</h3>
                <button onClick={applyChange}>Go Back</button>
            </div>
        ) : null}
    </div>
  )
}

export default newinfo