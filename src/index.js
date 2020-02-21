/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom'
import { fruits } from './assets/mock/data'


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

        } else {
            this.setState({ quantity: this.state.quantity + 1 })
        }


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





const App = () => (
    <div className="container">
        <h1 className="text-center">Delicious Fruit Market</h1>
        <hr></hr>
        <div className="card-columns">
            {
                fruits.map(value => {
                    return <FruitCard name={value.name}
                        img={value.img} price={value.price} stock={value.stock} />
                })
            }
        </div>
    </div>

)

ReactDOM.render(<App />, document.getElementById('root'))