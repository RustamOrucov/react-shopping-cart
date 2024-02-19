import React, {  useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(true);
     console.log(props);
     useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);


  return (
    loading ? <div>loading ...</div>:
    <div className='grid grid-cols-3 gap-10 mb-8'>
      {products.map(product => (
        <ProductItem key={product.id} product={product}  setCart={props.setCart}/>
      ))}
    </div>
  )
}

export default Products
