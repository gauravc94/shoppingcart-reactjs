import React from 'react'

// Header component for the app
export default function Header() {
    return (
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                {/* Title */}
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                {/* Subtitle */}
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    )
}