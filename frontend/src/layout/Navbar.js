import styles from './Navbar.module.css';
import React,{useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ProfileDropDown from '../components/ProfileDropDown';
import SearchCategory from '../components/SearchCategory';
import {AuthContext} from '../store/authcontext';

function Navbar() {

    const AuthCtx = useContext(AuthContext);

    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/' style={{textDecoration:'none', color:'black'}}>
                        <h3>ReactEcom</h3>
                    </Link>
                </div>
                <div><SearchCategory /></div>
                <div className={styles.navlinks}>
                    <span><PermIdentityIcon onClick = {() => {setIsShown(prev => !prev)}} style={{cursor:'pointer'}}/></span>
                </div>
                <Link to='/mycart' style={{textDecoration:'none', color:'black', marginTop:'21px'}}>
                    {AuthCtx.login && <ShoppingCartIcon />}
                </Link>

            </div>
            {isShown && (<div>
                <ProfileDropDown onauthclick = {() => {setIsShown(false)}}/>
            </div>)}
        </>
    )
};


export default Navbar;