
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'


class FruitCard extends React.Component {

    constructor() {

        super();

        this.state = {
            quantity: 0
        }

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clean = this.clean.bind(this);

    }

    add = () => {

        if (this.state.quantity === parseInt(this.props.stock)) {
            return alert(`${this.props.name} without stock`);
        }

        this.setState({ quantity: this.state.quantity + 1 })
    }

    remove = () => {
        if (this.state.quantity === 0) {
            return alert(`Don't remove`)
        }
        this.setState({ quantity: this.state.quantity - 1 })
    }

    clean = () => {
        this.setState({ quantity: 0 })
    }

    render() {
        return (
            <div className="card" >
                <div className="card-header">
                    <button type="button" className="btn btn-secondary mr-2">
                        Added <span className="badge badge-light">{this.state.quantity}</span>
                    </button>
                </div>
                <img src={this.props.img} className="card-img-top img-thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p id="stock-js" className="card-text"> Stock :
                            {this.props.stock - this.state.quantity}</p>
                    <p className="card-text">Price :  {this.props.price}</p>
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