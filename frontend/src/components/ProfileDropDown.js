import styles from './ProfileDropDown.module.css';
import {useContext} from 'react';
import {UserContext} from '../store/usercontext';
import {AuthContext} from '../store/authcontext';
import {Link, useHistory, Redirect} from 'react-router-dom';


function ProfileDropDown(props){

    const AuthCtx = useContext(AuthContext);

    const UserCtx = useContext(UserContext);
    console.log(UserCtx);

    const history = useHistory();

    const authenticationHandler = () => {
        props.onauthclick();
        console.log('hiiiiii');
        history.replace('/authentication');
    }

    const logoutHandler = () => {
        localStorage.removeItem('token');
        AuthCtx.setlogin(null)
        UserCtx.setuserinfo('');
        props.onauthclick();
        history.replace('/')
    }

    return (
        <div className = {styles.container}>
            <p style={{}}>Hello {UserCtx.userinfo[1]}</p>
            <p style={{fontSize:'14px'}}>{UserCtx.userinfo[0]}</p>
            <div style={{backgroundColor:'gray', height:'1px', width:'90%', margin:'10px auto'}}></div>
            {AuthCtx.login && <p style={{cursor:'pointer'}}>My Cart</p>}
            {AuthCtx.login && <p style={{cursor:'pointer'}}>My Orders</p>}
            {!AuthCtx.login && <p style={{marginTop:'25px', cursor:'pointer'}} onClick = {authenticationHandler}>Login / SignUp</p>}
            {AuthCtx.login && <p style={{marginTop:'25px', cursor:'pointer'}} onClick = {logoutHandler}>Logout</p>}
        </div>
    )
};


export default ProfileDropDown;