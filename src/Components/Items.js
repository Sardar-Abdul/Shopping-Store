import React from 'react'

const Items = ({product}) => {
    return (
        <div>
            <h2 style = {{color: 'white', textAlign: 'left', alignSelf: 'stretch'}}>Product Title:  </h2>
            <h3 style ={{textAlign: 'left', alignSelf: 'stretch'}}>{product.title}</h3>
            <h2 style = {{color: 'blue', textAlign: 'left', alignSelf: 'stretch'}}>Product Description:</h2>
            <h4 style = {{textAlign: 'left', alignSelf: 'stretch'}}>{product.description}</h4>
            <img src = {product.image} alt = 'Images Of Product' width = '200px'/>
            <h4 style ={{color: 'green'}}>For Just: ${product.price}/-</h4>
            <br />
            <br />
            <br />
            <hr />
            <hr />
        </div>
    )
}

export default Items
