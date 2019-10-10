import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classes from './AddSchedule.css';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddSchedules extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment().toISOString()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate
    console.log(main.format('L'));
  }

          render() {     
    return (
        <Aux>
            <div className={classes.AddSchedules} >
            <h3><strong>Add Schedule</strong></h3>
            <div className={classes.Schedule} >
            <div className={classes.Label}>Dates</div>
            <p>
            <DatePicker
               selected={this.state.startDate}
               onChange={this.handleChange}
               peekNextMonth
               showMonthDropdown
               showYearDropdown
               dropdownMode="select"
             />
             </p>
            </div>
            <div className={classes.Schedule} >
            <div className={classes.Label}>Slots</div>
            <div className={classes.Time} >
            <div className={classes.Schedule} >
            <p>Starting Time: </p>
            <p>Jan 54</p>
            </div>
            <div className={classes.Schedule} >
            <p>Ending time: </p>
            <p>Jan 54</p>
            
            </div>
            </div>
            </div>
            <div className={classes.Schedule} >
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Submit</Button>
            </div>
            </div>
        </Aux>
    );
          }
};

export default AddSchedules;