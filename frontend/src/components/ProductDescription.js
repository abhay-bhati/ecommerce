import styles from './ProductDescription.module.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState, useContext} from 'react';
import {AuthContext} from '../store/authcontext';


function ProductDescription(){

    const AuthCtx = useContext(AuthContext);

    const [data, setData] = useState('')

    const params = useParams();
    console.log(params);


    useEffect(() => {
        fetch('http://localhost:8080/product-by-id', {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${AuthCtx.login}`},
            body:JSON.stringify({prodId:params.product_id})
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                    setData(data);
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

    console.log(data);

    return (
        <div className = {styles.container}>
            <div className = {styles.prodimg}>
                <img src={data.prodImage} />
            </div>
            <div className = {styles.proddesc}>
                <h3>{data.prodName}</h3>
                <p style={{marginTop:'50px'}}>{data.prodDesc}</p>
                <p style={{marginTop:'50px'}}>Price:  {data.prodPrice}</p>
            </div>
        </div>
    )
};


export default ProductDescription;