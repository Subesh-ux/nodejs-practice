import { useState,useEffect } from "react";
export default function Vegetables() {

    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/vegetables")
            .then(response => response.json())
            .then(data => setVegetables(data))
            .catch(error => console.log("Error:", error));
    }, []);

    return (
        <div className="container py-4">

            {/* Header */}
            <div className="bg-success text-white text-center p-4 rounded-3 mb-4">
                <h1>🥬 Fresh Basket</h1>
                <p className="mb-0">
                    Fresh vegetables delivered to your doorstep
                </p>
            </div>

            <h3 className="mb-4 text-success">
                Our Fresh Vegetables
            </h3>

            {/* Product Cards */}
            <div className="row g-4">

                {vegetables.map((veg) => (

                    <div className="col-lg-3 col-md-4 col-sm-6" key={veg.id}>

                        <div className="card h-100 shadow-sm border-0">

                            <img
                                src={veg.image}
                                className="card-img-top"
                                alt={veg.name}
                                style={{ height: "180px", objectFit: "cover" }}
                            />

                            <div className="card-body">

                                <span className="badge bg-success-subtle text-success">
                                    {veg.category}
                                </span>

                                <h5 className="card-title mt-3">
                                    {veg.name}
                                </h5>

                                <p className="card-text text-secondary">
                                    {veg.description}
                                </p>

                                <div className="d-flex justify-content-between align-items-center">

                                    <h5 className="text-success mb-0">
                                        ₹{veg.price}
                                    </h5>

                                    <small className="text-muted">
                                        {veg.quantity}
                                    </small>

                                </div>

                            </div>

                            <div className="card-footer bg-white border-0 p-3">
                                <button className="btn btn-success w-100">
                                    Add to Cart
                                </button>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}