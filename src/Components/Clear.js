import React from 'react';
import './clear.css'

class Clear extends React.Component{
    render(){
        return(
            <div className="clear">
                {this.props.children}
                Clear
            </div>
        );
    }
}

export default Clear;