import React from 'react';
import './input.css'

class Input extends React.Component{
    render(){
        return(
            <div className="input">
                {this.props.children}
            </div>
        );
    }
}

export default Input;