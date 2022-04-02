import styles from './MyCard.module.css';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../store/authcontext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function MediaCard(props) {

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);

    const addToCartHandler = () => {
        console.log(AuthCtx.login);
        fetch('http://localhost:8080/add-to-cart', {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${AuthCtx.login}`},
            body:JSON.stringify(props)
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                })
            }
            else{
                console.log('res not ok')
            }
        })
        .catch(err => {
            throw new Error(err);
        })
    }

    const addToWishlistHandler = () => {
        fetch('http://localhost:8080/add-to-wishlist',{
            method:'POST',
            headers:{'Content-Type':'application/json','Authorization': `Bearer ${AuthCtx.login}`},
            body:JSON.stringify(props)
        })
        .then(res => {
            console.log('43333333');
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                })
            }
            else{
                console.log('res not ok');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }



    return (
        
        <div className={styles.container}>
            <img src={props.image} height='200px' width='150px' />
            <p style={{ fontWeight: '600', textAlign:'center'}}>{props.name}</p>
            <p className={styles.price}><span>Price :</span> {props.price}</p>
            <div style={{ textAlign: 'center', display:'flex'}}>
                <FavoriteBorderIcon style={{marginTop:'15px', marginLeft:'10px'}} onClick = {addToWishlistHandler}/>
                <div>
                <Link to={`/product-desc/${props.id}`} style={{textDecoration:'none'}}>
                    <Button size="small" color="primary" className={styles.btn}>
                        View Product
                    </Button>
                </Link>
                {AuthCtx.login && (<Button size="small" color="primary" className={styles.btn} onClick = {addToCartHandler}>
                    Add to Cart
                </Button>)}
                </div>
            </div>
        </div>
    )
};

export default MediaCard;