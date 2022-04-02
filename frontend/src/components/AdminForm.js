import styles from './AdminForm.module.css';
import {useRef} from 'react';

function AdminForm(){

    const imgRef = useRef();
    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(imgRef.current.value, nameRef.current.value, priceRef.current.value);
        const data = {prodImage : imgRef.current.value, prodName:nameRef.current.value, prodDesc:descRef.current.value, prodPrice:priceRef.current.value, prodCategory:categoryRef.current.value}
        fetch('http://localhost:8080/admin', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => {
            if(res.ok){
                console.log('res ok')
                res.json().then(data => console.log(data));
            }
            else{
                console.log('res not ok')
            }
        }
        )
        .catch(err => {
            throw new Error(err);
        })
    }

    return (
        <form className = {styles.container} onSubmit = {formSubmitHandler}>
            <label htmlFor='prod-image'>Product Image</label>
            <input type='text' id='prod-image' ref={imgRef}/>
            <label htmlFor='prod-name'>Product Name</label>
            <input type='text' id='prod-name' ref={nameRef}/>
            <label type='text' id='prod-desc'>Product Description </label>
            <textarea id='prod-desc' white-space='pre-wrap' ref={descRef} />
            <label htmlFor='prod-price'>Product Price</label>
            <input type='number' id='prod-price' ref={priceRef}/>
            <label htmlFor = 'prod-category'>Product Category</label>
            <input type='text' id='prod-category' ref={categoryRef} />
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
};


export default AdminForm;