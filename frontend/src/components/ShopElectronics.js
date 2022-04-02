import styles from './ShopElectronics.module.css';
import MediaCard from '../utility/MyCard';
import { useEffect, useState, useContext} from 'react';
import {AuthContext} from '../store/authcontext';

function ShopElectronics(props){
    let electronicProducts;
    let clothingProducts;
    let furnitureProducts;

    const AuthCtx = useContext(AuthContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/all-products', {
            headers:{'Authorization':`Bearer ${AuthCtx.login}`}
        })
        .then(res => {
            if(res.ok){
                console.log('res ok')
                res.json().then(data => {
                    console.log(data.result);
                    setProducts(data.result);
                })
            }
            else{
                console.log('res not ok')
            }
        })
        .catch(err => {
            throw new Error(err);
        })
    }, [])

    if(props.path==='electronics'){
        electronicProducts = products.filter(element => element.prodCategory === 'Electronics')
    }
    else if(props.path === 'clothing'){
        clothingProducts = products.filter(element => element.prodCategory === 'Clothing');
    }
    else if(props.path === 'furniture'){
        furnitureProducts = products.filter(element => element.prodCategory === 'Furniture');
    }

    return (
        <div className = {styles.container}>
        {props.path==='electronics' && electronicProducts.map(element => <MediaCard key={element._id} id={element._id} image={element.prodImage} name={element.prodName} desc = {element.prodDesc} price = {element.prodPrice}/>)}
        {props.path==='clothing' && clothingProducts.map(element => <MediaCard key={element._id } id={element._id} image={element.prodImage} name={element.prodName} desc = {element.prodDesc} price = {element.prodPrice} />)}
        {props.path==='furniture' && furnitureProducts.map(element => <MediaCard key={element._id } id={element._id} image={element.prodImage} name={element.prodName} desc = {element.prodDesc} price = {element.prodPrice} />)}

        </div>
    )
};

export default ShopElectronics;