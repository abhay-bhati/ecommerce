import styles from './AddressForm.module.css';
import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';

function AddressForm(props){

    const fullNameRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const pincodeRef = useRef();
    const phoneRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const data = {fullName:fullNameRef.current.value, street:streetRef.current.value, city:cityRef.current.value, state:stateRef.current.value, pincode:pincodeRef.current.value, phone:phoneRef.current.value};
        props.saveaddress(data);
    }

    return (
        <>
        <form className = {styles.container} onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor='fullname'>Full Name</label>
                <input type='text' id='fullname' ref={fullNameRef}/>
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef}/>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef}/>
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' ref={stateRef}/>
            </div>
            <div>
                <label htmlFor='pincode'>Pincode</label>
                <input type='text' id='pincode' ref={pincodeRef}/>
            </div>
            <div>
                <label htmlFor='phone'>Phone No.</label>
                <input type='number' id='phone' ref={phoneRef}/>
            </div>
        </form>
        <Button variant='contained' color='primary' onClick = {formSubmitHandler} style={{marginTop:'10px', marginLeft:'45%'}}>Place Order</Button>
        </>
    )
};


export default AddressForm;