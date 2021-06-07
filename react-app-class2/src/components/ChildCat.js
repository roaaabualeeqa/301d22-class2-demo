import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChildCat extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            numOfPets : 0
        }
    }
    
    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets+1
        })
    }
    
    render(){
        return(
           <div>
               {/* <img onClick={this.incrementNumOfPets} src={this.props.imgURL} alt={this.props.title} />
               <p>title: {this.props.title}</p>
               <p>Numbet of pets: {this.state.numOfPets}</p>
               <button>Go Somewhere</button> */}

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imgURL}/>
                <Card.Body>
                    <Card.Title> {this.props.title}</Card.Title>
                    <Card.Text>
                    Number of pets 😸 : {this.state.numOfPets}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
           </div>
        )
    }
}

export default ChildCat;