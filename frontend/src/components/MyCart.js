import styles from './MyCart.module.css';
import { useEffect, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../store/authcontext';
import CartItem from './CartItem';
import Button from '@material-ui/core/Button';
import AddressForm from './AddressForm';

function MyCart() {

    const [proceedClicked, setProceedClicked] = useState(false)

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);

    const [cartData, setCartData] = useState([])
    
    const history = useHistory();

    const updateCartHandler = (cart) => {
        setCartData(cart)
    }

    const proceedClickHandler = () => {
        setProceedClicked(true);
    }

    useEffect(() => {
        fetch('http://localhost:8080/cart', {
            headers:{'Authorization': `Bearer ${AuthCtx.login}`}
        })
            .then(res => {
                if (res.ok) {
                    console.log('res ok');
                    res.json().then(data => {
                        console.log(data);
                        setCartData(data);

                    })
                }
                else {
                    console.log('res not ok');
                }
            })
            .catch(err => {
                throw new Error(err);
            })
    }, [])

    console.log(cartData);
    let totalCost = 0;
    for(let i in cartData){
        console.log(+cartData[i].price, cartData[i].quantity);
        totalCost += +cartData[i].price * cartData[i].quantity;
        console.log(+cartData[i].price * cartData[i].quantity)
    }

    const placeOrderHandler = (address) => {
        console.log(address);
        console.log(cartData);
        console.log(totalCost);
        fetch('http://localhost:8080/add-to-orders', {
            method:'POST',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${AuthCtx.login}`},
            body:JSON.stringify({products:cartData,address:address, totalamount:totalCost})
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                })
            }
            else{
                console.log(' res not ok');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    console.log(totalCost);
    return (
        <>
        {!proceedClicked && cartData.map(element => <CartItem updateCart = {updateCartHandler} key={element.id} id={element.id} image = {element.image} name = {element.name} price = {element.price} desc = {element.desc} quantity = {element.quantity}/>)}
        {!proceedClicked && <p style={{marginTop:'25px', fontSize:'20px', marginLeft:'75%'}}><span style={{fontWeight:'600'}}>Total Amount : </span><span style={{color:'red'}}>{totalCost}</span></p>}
        {!proceedClicked && <Button variant='contained' color='primary' style={{marginTop:'10px', marginLeft:'45%'}} onClick = {proceedClickHandler}>Proceed to Buy</Button>}
        {proceedClicked && <AddressForm saveaddress = {placeOrderHandler}/>}
        </>
    )
};


export default MyCart;