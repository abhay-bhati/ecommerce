
import styles from './CartItem.module.css';
import {AuthContext} from '../store/authcontext';
import {useContext} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function CartItem(props){
    
    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);

    const quantPlusHandler = (event) => {
        event.preventDefault();
        console.log(props.id);
        fetch('http://localhost:8080/cart-increment', {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${AuthCtx.login}`},
            body:JSON.stringify({product_id:props.id, action:event.target.getAttribute('value')})
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data)
                    props.updateCart(data)
                })
            }
            else{
                console.log('res not ok');
            }
        })
        .catch(err => {
            throw new Error(err);
        })
    }

    return (
        <div className = {styles.container}>
            <img src={props.image} />
            <div className = {styles.cartinfo}>
                <h3 style={{textAlign:'center'}}>{props.name}</h3>
                <p>Price : {props.price}</p>
            </div>
            <div className = {styles.action}>
                <button value='minus' onClick = {quantPlusHandler} style={{cursor:'pointer'}}>-</button>
            </div>
            <div className = {styles.action}>
                Quantity:{props.quantity}
            </div>
            <div className = {styles.action}>
                <button value='plus' onClick = {quantPlusHandler} style={{cursor:'pointer'}}>+</button>
            </div>
            <div className = {styles.action}>
                <DeleteIcon value='delete' onClick = {quantPlusHandler} style={{cursor:'pointer'}}/>
            </div>
        </div>
    )
};


export default CartItem;