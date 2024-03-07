import React from 'react'
import produit from './product'

 function Image(props) {
    const {image} = props
  return (
    <div>
        <img src={image}  alt="Image" />
    </div>
  )
}
export default Image