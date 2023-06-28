import React, { Component } from 'react'

import List from './List'
import Search from './Search'
import Circle from '../Circle';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
        this.onAddList = this.onAddList.bind(this);
        this.onRemoveList = this.onRemoveList.bind(this);
        this.onSolve = this.onSolve.bind(this);
    }
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <main className='calculator'>
                <div className='calculator__cont cont'>
                    <h2 className='calculator__title'>Калькулятор</h2>
                    <Search onAddList={this.onAddList} />
                    <List
                        onRemoveList={this.onRemoveList}
                        onSolve={this.onSolve}
                        itemList={this.state.itemList}
                    />
                </div>
                <Circle />
            </main>
        )
    }
    onAddList(element) {
        if (this.state.itemList.includes(element)) {
            alert('Цей продукт уже є в списку!')
        } else {
            this.setState({itemList: [...this.state.itemList, element]})
        }
    }
    onRemoveList(element) {
        console.log(element.id)
        this.setState({
            itemList: this.state.itemList.filter((el) => el.id !== element.id)
        })
    }
    onSolve(el) {
        const grams = document.getElementById(el.id).value;
        const answer = ((el.carb / 100) * grams) / 12;
        const updatedItemList = this.state.itemList.map(item => {
            if (item.id === el.id) {
                return { ...item, ans: answer.toFixed(1) };
            }
            return item;
        });
        this.setState({ itemList: updatedItemList });
    }
}