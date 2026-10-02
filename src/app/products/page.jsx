import React from 'react';
import ProductPage from '../Components/Product';


const getProduct = async() => {
    // try{
    //     const ref = await fetch('http://localhost:5000/products')
    //     // const data = await ref.json()
    //     // return data
    //     return ref.json()
    // }
    // catch(error){
    //     throw new Error("Faild process the data loade")
    // }
    const ref = await fetch('http://localhost:5000/products')
    if(!ref.ok){
        throw new Error("Faild process the data loade")
    }
    return ref.json()
}

const ProductsPage = async() => {

    const products = await getProduct()

    return (
        <div>
            <h2>All Products : {products.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {products.map(product => <ProductPage key={product.id} product = {product}></ProductPage>)}
            </div>
        </div>
    );
};

export default ProductsPage;