import styles from './AuthForm.module.css';
import {useState, useRef, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {AuthContext} from '../store/authcontext';

function AuthForm() {
    const history = useHistory();

    const [isLogin, setIsLogin] = useState(true);

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();

    const clickHandler = () => {
        setIsLogin(prev => !prev)
    }

    const formSubmitHandler = () => {
        console.log('submit');
        if(!isLogin){
            const data = {fullName:nameRef.current.value, email:emailRef.current.value, phoneNo:phoneRef.current.value, password:passwordRef.current.value};
            fetch('http://localhost:8080/register', {
                method:'POST', 
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res => {
                if(res.ok){
                    console.log(' res ok ');
                    res.json().then(data => {
                        console.log(data);
                        history.replace('/');
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
        else{
            const data = {email:emailRef.current.value, password:passwordRef.current.value};
            fetch('http://localhost:8080/login', {
                method:'POST', 
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res => {
                if(res.ok){
                    console.log(' res ok ');
                    res.json().then(data => {
                        console.log(data);
                        if(data.token){
                            localStorage.setItem('token', data.token);
                            AuthCtx.setlogin(data.token);
                            history.replace('/');

                        }
                        if(data.message){
                            console.log('email or password is incorrect')
                        }
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
    }

    return (
        <form className = {styles.container}>
            {isLogin? <h2>Login</h2>:<h2>Register</h2>}
            {!isLogin && (<div>
                <label htmlFor='full_name'>Full Name</label>
                <input type='text' id='full_name' ref={nameRef}/>
            </div>)}
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' ref={emailRef}/>
            </div>
            {!isLogin && (<div>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' pattern='[0-9]{10}' ref={phoneRef}/>
            </div>)}
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref={passwordRef}/>
            </div>
            <div>
                <Button variant='contained' color='primary' onClick = {formSubmitHandler}>Submit</Button>
            </div>
            <p style={{cursor:'pointer', color:'blue'}} onClick = {clickHandler}>{!isLogin? 'Already Registered? Login' : 'New User? Register Here'} </p>
        </form>

    )
}


export default AuthForm;
