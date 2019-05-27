import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? ((props.expense.amount)/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocus : false,
            error : ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }
    onDateChange = (createdAt) => {//This fn gets called by this param only
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {//See docs (just copied the methods)
        this.setState(() => ({calendarFocus : focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount||!this.state.description) {
            this.setState(() => ({error : 'Please enter amount and description'}));
        } else {
            this.setState(() => ({error : ''}));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount)*100,
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }   
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error" >{this.state.error}</p>}

                    <input  
                        className="text-input"
                        type="text"
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    >
                    </input>
                    <input  
                        className="text-input"
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                    </input>
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocus}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea  
                        className="textarea"
                        placeholder="Add a note for your expense(optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}

                    >
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>

                    </div>
                </form>
        )
    }
}   