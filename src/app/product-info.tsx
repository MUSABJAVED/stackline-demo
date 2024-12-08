import React from 'react';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { RootState } from './store';

const Product: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const product = products[0];

    return (
        <div>
            <Image src={product.image} width='250' height='250' alt="alt"/>
            <h1 style={{color: 'black', fontSize: 'large'}}>{product.title}</h1>
            <p style={{border: '1px solid rgb(246 248 250)'}}>{product.subtitle}</p>
            <div className="tags">
                {product.tags.map((tag, index) => (
                    <div key={index} className="tag">{tag}</div>
                ))}
            </div>
        </div>
    );
}

export default Product;