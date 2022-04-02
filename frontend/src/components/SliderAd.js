import styles from './SliderAd.module.css';
import {useEffect, useState} from 'react';

function SliderAd(){
    const [indexVal, setIndexVal] = useState(0)

    let imgArr = ['https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/6/6f71d48f-4faa-40aa-8d20-3a766734f74e1630946894028-Lifestyle_Desk_Banner--1-.jpg','https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/3/f9669c9f-da41-4072-8ae2-7de1406de5c71630683367892-AW21-MainLaunchDesktopBanners-Unisex.jpg','https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/55dfa5cc-c71e-4472-8071-76e1cfe321311630840040322-SportsShoes_Dk--1-.jpg','https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/09de9a6e-3d66-4bd2-b325-91ad5a9f6c4a1630839964076-Kidswear_Dk--2-.jpg'];
    
    useEffect(() => {
        setTimeout(() => {
        if(indexVal < 3){
            setIndexVal(prev => prev+1)
        }
        else{
            setIndexVal(0)
        }
    }, 3000)
    },[indexVal])
    

    return (
        <div className = {styles.container}>
            <img src={imgArr[indexVal]} />
        </div>
    )
};

export default SliderAd;