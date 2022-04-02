import styles from './HomeNewProducts.module.css';
import MediaCard from '../utility/MyCard';
import {useEffect, useState, useContext} from 'react';
import {AuthContext} from '../store/authcontext';
import {UserContext} from '../store/usercontext';

function HomeNewProducts(){

    const [data, setData] = useState([]);

    const AuthCtx = useContext(AuthContext);
    const UserCtx = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:8080/all-products',{
            headers:{'Authorization':`Bearer ${AuthCtx.login}`}
        })
        .then(res => {
            if(res.ok){
                console.log('res ok')
                res.json().then(data => {
                    console.log(data);
                    setData(data.result);
                    UserCtx.setuserinfo(data.user_info)
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

    return (
        <>
        <h2 style={{textAlign:'center', fontFamily:'monospace', letterSpacing:7, fontSize:'40px'}}>NEW PRODUCTS</h2>
        <div className = {styles.container}> 
            {data.map(element => <MediaCard key={element._id} id={element._id} image={element.prodImage} name={element.prodName} desc = {element.prodDesc} price = {element.prodPrice} />)}
        </div>
        </>
    )
};

export default HomeNewProducts;