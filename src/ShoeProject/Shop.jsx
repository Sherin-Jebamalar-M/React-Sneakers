import React from 'react'
import { useState } from 'react'

let products = [
    {
        sname: "Nike Air Force 1 '03",
        sdep: "Nike, Inc., is one of the largest and best-recognized global sports and athleticwear brands",
        srate: "4.2",
        sp: "$499",
        sbut: true,
        simg: "s1.jpeg"
    },
    {
        sname: "Nike Air Force 2 '04",
        sdep: "Nike, Inc., is one of the largest and best-recognized global sports and athleticwear brands",
        srate: "4.5",
        sp: "$799",
        sbut: true,
        simg: "s2.jpeg"
    },
    {
        sname: "Nike Air Force 11 '05",
        sdep: "Nike, Inc., is one of the largest and best-recognized global sports and athleticwear brands",
        srate: "4.7",
        sp: "$1499",
        sbut: false,
        simg: "s3.jpeg"
    },

    {
        sname: "Nike Air Force 17 '07",
        sdep: "Nike, Inc., is one of the largest and best-recognized global sports and athleticwear brands",
        srate: "4.6",
        sp: "$299",
        sbut: true,
        simg: "s4.jpeg"
    }
]


let Card = (props) => {

    let { product } = props

    let [isHovered, setIsHovered] = useState(false)

    function swap() {
        isHovered === false ? setIsHovered(true) : setIsHovered(false)
    }
    return (
        <div className='cardbox' >
            
            <div className='image' onClick={swap} style={{
                transform: isHovered ? "translateX(100%)" : "translateX(0)"
            }}><img src={product.simg} alt="" /></div>
            <div className='content' style={{

                transform: isHovered ? "translateX(-100%)" : "translateX(0)"
            }}>
                <h3>{product.sname}</h3>
                <p>{product.sdep}</p>
                <h5>Rating <span>{product.srate}</span></h5>
                <h2>{product.sp}</h2>
                <button className={product.sbut?'but':'butt'}>{product.sbut?"Shop Now":"Out of Stock"}</button>

            </div>
        </div>
    )
}


function Shop() {
    return (

        <div className='bigbox'>{products.map((product, index) => (
            <Card  key={index}  product={product} />
        ))}

        </div>

    )
}

export default Shop
