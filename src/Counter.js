import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx'
import { observer } from 'mobx-react'

class Counter extends Component {
    
    number = 0;

    increase = () => {
        this.number++;
        console.log('++ : ' + this.number)
    }

    decrease = () => {
        this.number--;
        console.log('-- : ' + this.number)
    }

    render () {

        return (

            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>증가</button>
                <button onClick={this.decrease}>감소</button>
            </div>

        )

    }

}

decorate(Counter, {
    number: observable,
    increate: action,
    decrease: action
})

export default observer(Counter);