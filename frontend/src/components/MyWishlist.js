import styles from './MyWishList.module.css';
import React, { useEffect, useState, useContext } from 'react';
import MediaCard from '../utility/MyCard';
import { AuthContext } from '../store/authcontext';

function MyWishList() {

    const [wishlistedProds, setWishlistedProds] = useState([])

    const AuthCtx = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:8080/mywishlist', {
            headers: { 'Authorization': `Bearer ${AuthCtx.login}` }
        })
            .then(res => {
                if (res.ok) {
                    console.log('res ok');
                    res.json().then(data => {
                        console.log(data);
                        setWishlistedProds(data);
                    })
                }
                else {
                    console.log('res not ok');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div style={{display:'flex'}}>
            {wishlistedProds.map(element => <MediaCard key={element.id} id={element.id} image={element.image} name={element.name} desc = {element.desc} price = {element.price}/>)}
        </div>
    )
};


export default MyWishList