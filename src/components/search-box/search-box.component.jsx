import { Component } from "react";
import './search.styles.css';

class SearchBox extends Component{
    render(){
        const {onSearchHandler, className, placeholder} = this.props;
        return(
            <div>
                <input className={`search-box ${className}`}
                     type='search' 
                    placeholder={placeholder}
                    onChange={onSearchHandler}
                 />
            </div>
        )
    }
}

export default SearchBox;