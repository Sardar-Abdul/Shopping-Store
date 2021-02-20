import React from 'react'
import abc from '../abc.jpg'
import xyz from '../xyz.jpg'
import jkl from '../jkl.jpg'
import mno from '../mno.jpg'
import pqr from '../pqr.jpg'

const Home = () => {
    return (
        <div className = 'home'>
            <h1>Shopping For Everyone!</h1>
            <h3>This shop offers rich variety of products. We have thousands of satisfying customers.
            </h3>
            <h1>THINK SHOPPING, THINK US!</h1>
            <h1>Products Include:</h1>

            <h3 style = {{color: 'white'}}>Clothing for women</h3>
            <img src = {abc} alt = 'clothes' width = '400px'/>

            <h3 style = {{color: 'white'}}>Clothing for men</h3>
            <img src = {mno} alt = 'clothes' width = '400px'/>

            <h3 style = {{color: 'white'}}>Fruits</h3>
            <img src = {xyz} alt = 'clothes' width = '400px'/>

            <h3 style = {{color: 'white'}}>Accessories</h3>
            <img src = {jkl} alt = 'clothes' width = '400px'/>



            <h3 style = {{color: 'white'}}>Gaming</h3>
            <img src = {pqr} alt = 'clothes' width = '400px'/>


        </div>
    )
}

export default Home
