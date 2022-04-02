import styles from './SearchCategory.module.css';
import SearchIcon from '@material-ui/icons/Search';
import {useRef} from 'react';
import {Redirect, useHistory} from 'react-router-dom';

function SearchCategory(){

    const categoryRef = useRef();
    const history = useHistory();

    const categoryClickHandler = (event) => {
        event.preventDefault();
        console.log(categoryRef.current.value);
        history.push(categoryRef.current.value);
        
    }

    return (
        <form className = {styles.container} onSubmit = {categoryClickHandler}>
            <input type='text' placeholder = 'Search Category' ref={categoryRef}/>
            <div className = {styles.searchbox} onClick = {categoryClickHandler}>
                <SearchIcon style={{marginTop:'2px', padding:'5px'}}/>
            </div>
        </form>
    )
};


export default SearchCategory