import React from 'react'

// Section component for the app
export default function Section({ count, setCount,  cartItems, setCartItems }) {
    // product details array with product id, name and price
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
            price: "$40",
        },
    ]

    // handler for incrementing/decrementing the product count and the items in the cart
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
    console.log(count)
    console.log(cartItems)

    return (
        <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* Mapping through product details and rendering product cards*/}
                {productDetails.map((product, index) => (
                                <div class="col mb-5" key={ index }>
                                    <div class="card h-100">
                                        {/* <!-- Product image--> */}
                                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        {/* <!-- Product details--> */}
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                {/* <!-- Product name--> */}
                                                <h5 class="fw-bolder">{ product.name }</h5>
                                                {/* <!-- Product price--> */}
                                                { product.price }
                                            </div>
                                        </div>
                                        {/* <!-- Product actions--> */}
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#"
                                            onClick={(e)=> { e.preventDefault(); handleClick(product.id)}}>
                                            {/* Conditional rendering of the button text */}
                                            {cartItems.includes(product.id) ? "Remove from cart" : "Add to cart"}</a></div>
                                        </div>
                                    </div>
                                </div>
                ))}
            </div>
        </div>
    </section>
    )
}