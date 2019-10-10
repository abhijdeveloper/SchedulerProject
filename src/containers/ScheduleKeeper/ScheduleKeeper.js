import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import ShowSchedules from '../../components/Schedules/ShowSchedule/ShowSchedule'
import Modal from '../../components/UI/Modal/Modal';
import AddSchedule from '../../components/Schedules/AddSchedule/AddSchedule'



class ScheduleKeeper extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        schedules: {
            date: "tara",
            slots: {
                startDate : "",
                endDate: ""
            }
        },
        purchasing: false,
        startDate: new Date()
    }


    addSchedules = (schedule) => {
        const updatedSchedules = {
            ...this.state.schedules
        }
        this.setState({
            schedules: updatedSchedules , schedule
        })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   <AddSchedule 
                   purchaseCancelled={this.purchaseCancelHandler}
                   purchaseContinued={this.purchaseContinueHandler} 
                   startDate={this.state.startDate}
                   handleChange={(date) => this.handleChange}
                   />
                </Modal>
               
                <ShowSchedules 
                ordered={this.purchaseHandler}
                
                />
            </Aux>
        );
    }
}

export default ScheduleKeeper;