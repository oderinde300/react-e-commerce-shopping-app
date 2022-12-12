
import React, { useState, useEffect } from 'react'
import HighlightedProduct from '../components/Products/HighlightedProduct';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(false);

    const params = useParams();
    const { productId } = params;

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch(
                'https://e-commerce-app-14e14-default-rtdb.firebaseio.com/products.json/'
            )
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            let loadedData = [];
            for (let key in data) {
                loadedData.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    image: data[key].image,
                    price: data[key].price,
                    category: data[key].category,
                    subCategory: data[key].subCategory,
                    size: data[key].size
                })
            }
            const productItem = loadedData.find(product => product.id === productId)
            setProducts(productItem);
        };
        fetchData().catch((err) => {
            setHttpError(err.message)
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [productId])


    return (
        <div>
            <HighlightedProduct
                data={products}
                loading={isLoading}
                error={httpError}
            />
        </div>
    )

};

export default ProductDetailsPage;
