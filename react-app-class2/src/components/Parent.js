import React from 'react';
import ChildCat from './ChildCat';
import frankie from './assets/cat.jpg';

class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: 'frankie',
            imgURL: frankie
        }
    }

    render(){
        return(
            <div>
                <p>Parent</p>
                <ChildCat imgURL={this.state.imgURL} title={this.state.name}/>
                <ChildCat imgURL={this.state.imgURL} title={this.state.name}/>
            </div>
        )
    }
}

export default Parent;