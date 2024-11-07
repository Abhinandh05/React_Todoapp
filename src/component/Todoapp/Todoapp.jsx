import React, { Component } from 'react';
import './Todoapp.css';


export default class Todoapp extends Component {
  state = {
    inputs: '',
    item: [],
  };

  handleChange = (event) => {
    this.setState({
      inputs: event.target.value,
    });
  };

  storeItem = (event) => {
    event.preventDefault();
    const { inputs } = this.state;
    this.setState({
      item: [...this.state.item, inputs],
      inputs: '', // Clear the input field after adding an item
    });
  };
   
  deleteItem =(key) => {
    const allItems = this.state.item;
    allItems.splice(key, 1);
    this.setState({
      item: allItems,
    });

  }

      editItem =(key) => {
        const allItems = this.state.item;
        allItems[key] = prompt('Edit your item');
        this.setState({
          item: allItems,
        });
      }
  

  render() {
    const { inputs, item } = this.state;
    return (
      <div className='Todoapp-container'>
        <form className='Todoapp-input' onSubmit={this.storeItem}>
          <h1>Todoapp</h1>
          <input
            type='text'
            value={inputs}
            onChange={this.handleChange}
            placeholder='Add a new todo...'
          />
        </form>
        <ul>
       
          {item.map((data, index,) => (
            <li key={index}>
              {data}
             <i className="fa fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
             <i className="fa-solid fa-wand-magic-sparkles"onClick={()=>this.editItem(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}