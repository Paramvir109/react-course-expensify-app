import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter,sortByAmount,sortByDate, setEndDate, setStartDate} from './../actions/filters';
import 'react-dates/initialize';
import uuid from 'uuid'

import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setEndDate(endDate);
        this.props.setStartDate(startDate);

    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        this.props.filters.sortBy === 'date'? this.props.sortByAmount() : this.props.sortByDate()
    }

    render() {
       return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            placeholder="Search expenses"
                            type="text" 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}>
                        </input>    
                    </div>
                    <div className="input-group__item">
                         <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>    
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            startDateId={uuid()}
                            endDateId={uuid()}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
               
                
                
            </div>
        );
    }
}

//props above contains two things 1.) filters 2.) dispatch method(bydefault)
const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      setTextFilter : (value) => dispatch(setTextFilter(value)),
      setStartDate : (startDate) => dispatch(setStartDate(startDate)),
      setEndDate : (endDate) => dispatch(setEndDate(endDate)),
      sortByAmount : () => dispatch(sortByAmount()),
      sortByDate : () => dispatch(sortByDate()),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);