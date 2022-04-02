import styles from './MyOrders.module.css';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/authcontext';
import OrderItem from './OrderItem';

function MyOrders() {

    const [myOrders, setMyOrders] = useState([]);

    const AuthCtx = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:8080/myorders', {
            headers: { 'Authorization': `Bearer ${AuthCtx.login}` }
        })
            .then(res => {
                if (res.ok) {
                    console.log('res ok');
                    res.json().then(data => {
                        console.log(data);
                        setMyOrders(data);
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

    console.log(myOrders);

    return (
        <>
        {myOrders.map(element => <OrderItem key={element.order_id} order_id={element.order_id} products={element.products} amount={element.totalamount}/>)}
        </>
    );
};

export default MyOrders;