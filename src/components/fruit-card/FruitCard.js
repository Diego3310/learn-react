import React from 'react'
import  styles from './FruitCard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class FruitCard extends React.Component {

    constructor() {

        super();

        this.state = {
            quantity: 0,
            existStock:true
        }

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clean = this.clean.bind(this);

    }

    add = () => {

        if (this.state.quantity === parseInt(this.props.stock)) {
            this.setState({existStock:false})
            return alert(`${this.props.name} without stock`);
        }

        this.setState({ quantity: this.state.quantity + 1 })
    }

    remove = () => {
        if (this.state.quantity === 0) {
            return alert(`Don't remove`)
        }
        this.setState({existStock:true})
        this.setState({ quantity: this.state.quantity - 1 })
    }

    clean = () => {
        this.setState({existStock:true})
        this.setState({ quantity: 0 })
    }

    render() {
        let available = `card ${styles.FruitCard} border rounded`;
        let error  = `card ${styles.FruitCardError} border rounded`
        
        let style = this.state.existStock ?available:error;

        return (
            <div className= {style}> 
                <div className="card-header">

                    <button type="button" className="btn btn-secondary">
                        Added <span className="badge badge-light">{this.state.quantity}</span>
                    </button>
                    <button type="button" className="btn btn-muted float-right">
                        Total : <span className="badge badge-light"> $ {this.props.price * this.state.quantity}</span>
                    </button>
                    
                </div>
                <img src={this.props.img} className="card-img-top img-thumbnail" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p id="stock-js" className="card-text"> Stock : {this.props.stock - this.state.quantity}</p>
                    <p className="card-text">Price : $ {this.props.price}</p>
                    <div className="text-center btn-group">
                        <button className="btn btn-info" onClick={this.add}>Add</button>
                        <button className="btn btn-danger" onClick={this.remove}>Remove</button>
                        <button className="btn btn-success" onClick={this.clean}>Clean</button>
                    </div>

                </div>
            </div>
        )
    }

}

export default FruitCard;