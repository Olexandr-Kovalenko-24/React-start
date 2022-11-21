import React, { Component } from 'react';
import { getProducts } from '../../api/products';
import Spiner from '../Spiner';

class ProductCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isFetching: false
        }
    }
    
    componentDidMount () {
        getProducts()
        .then(data=>{
            this.setState({
                products: data,
                isFetching: false
            })
        })
    }       

    mapProducts = () => {
        return this.state.products.map(product =>
            <li key={product.id}>{product.title} --- {product.price} --- {product.description}</li>)
        }


    render() {
        const {isFetching, products} = this.state;
        return (
            <div>
                {isFetching && <Spiner />}
                <ul>
                    {products.length && this.mapProducts()}
                </ul>
            </div>
        )
    }
}

export default ProductCards;
