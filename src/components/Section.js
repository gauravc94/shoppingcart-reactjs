import React from 'react'
import ProductCard from './ProductCard'

// Section component for the app
export default function Section({ count, setCount,  cartItems, setCartItems }) {
    // product details array containing the product id, name and price
    const productDetails = [
        {
            id: 1,
            name: "Fancy Product",
            price: "$40.00 - $80.00",
        },
        {
            id: 2,
            name: "Special Item",
            price: "$20.00 $18.00",
        },
        {
            id: 3,
            name: "Sale Item",
            price: "$50.00 $25.00",
        },
        {
            id: 4,
            name: "Popular Item",
            price: "$40.00",
        },
        {
            id: 5,
            name: "Sale Item",
            price: "$50.00 $25.00",
        },
        {
            id: 6,
            name: "Fancy Product",
            price: "$120.00 - $280.00",
        },
        {
            id: 7,
            name: "Special Item",
            price: "$20.00 - $18.00",
        },
        {
            id: 8,
            name: "Popular Item",
            price: "$40.00",
        },
    ]

    // handler for incrementing/decrementing the count and also adding/removing products to/from the cartItems
    function handleClick(itemID) {
        if(cartItems.includes(itemID)) {
            setCount(count - 1)
            setCartItems(cartItems.filter((item) => item !== itemID))
        } else {
            setCount(count + 1)
            setCartItems([...cartItems, itemID])
        }
    }

    // check the current value of the state variables count and cartItems
    // console.log(count)
    // console.log(cartItems)

    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* Mapping through product details and rendering product cards passing props to the ProductCard component*/}
                {productDetails.map((product, index) => (
                    <ProductCard key={index} product={product} handleClick={handleClick} cartItems={cartItems}/>
                ))}
            </div>
        </div>
    </section>
    )
}