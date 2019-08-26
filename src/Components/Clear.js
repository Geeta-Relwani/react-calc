import React from 'react';
import './clear.css'

class Clear extends React.Component{
    render(){
        return(
            <div className="clear"
            onClick={()=> this.props.handleClear()}
            >
                {this.props.children}
                Clear
            </div>
        );
    }
}

export default Clear;