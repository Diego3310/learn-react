import React from 'react'
import FruitCard from './components/FruitCard'
import { fruits } from './assets/mock/data'


const TITLE = 'Delicious Fruit Market';

class App extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="container">
                <h1 className="text-center p-5">{TITLE}</h1>
                <hr></hr>
                <div className="card-columns">
                    {
                        fruits.map((fruit,index) => {
                            return <FruitCard key={index} name={fruit.name} 
                                img={fruit.img} price={fruit.price} stock={fruit.stock} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;