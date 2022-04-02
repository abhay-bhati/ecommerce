import styles from './Footer.module.css';

function Footer(){
    return(
        <>
        <div style={{backgroundColor:'rgb(238, 237, 237)', width:'100%', height:'20px', marginTop:'200px'}}></div>
        <div className = {styles.container}>
            <div className = {styles.info}>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
        </>
    )
};


export default Footer;