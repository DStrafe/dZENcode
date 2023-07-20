import React from "react";

export default function Product({product}){
    return(
        <div className="product">
            <div className="card mb-3 w-100 h-25 overflow-hidden">
                <div className="row g-0">
                    <div className="d-flex col-md-4 align-items-center w-25 ">
                        <img src={product.thumbnail} className="img-fluid rounded-start object-fit-cover overflow-hidden" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-row justify-content-between">
                            <h5 className="card-title">
                                {product.brand+" "+product.title}
                            </h5>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <p className="card-text text-success">
                                {product.price + '$'}
                            </p>
                            <p className="card-text text-danger">
                                {"-"+Math.round(product.discountPercentage) + '%'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps({params}:any){
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    const product = await response.json()
    return{
        props:{product}
    }
}