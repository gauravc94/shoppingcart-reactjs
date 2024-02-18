import React from 'react'

export default function ProductCard({ product, handleClick, cartItems}) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{ product.name }</h5>
                        {/* <!-- Product price--> */}
                        { product.price }
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                    onClick={(e)=> { e.preventDefault(); handleClick(product.id)}}>
                    {/* Conditional rendering of the button text */}
                    {cartItems.includes(product.id) ? "Remove from cart" : "Add to cart"}</a></div>
                </div>
            </div>
        </div>
    )
}