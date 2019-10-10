import React from 'react';
import classes from './ShowSchedule.css';

const showSchedules = (props) => (
<div className={classes.ShowSchedules}>
<p><strong>SCHEDULES</strong> </p>
       <div className={classes.Schedule} >
        <div className={classes.Label}>Dates</div>
        <p>3rd January 1991</p>
        </div>
        <p><strong>Slots</strong></p>
        <div className={classes.Schedule} >
        <div className={classes.Label}>Starting Time</div>
        <p>12:00 HRS</p>
        </div>
        <div className={classes.Schedule} >
        <div className={classes.Label}>Ending Time</div>
        <p>18:00 HRS</p>
        </div>
        <button 
            className={classes.AddScheduleButton}
            onClick={props.ordered}>ADD SCHEDULE</button>
        
    </div>
)

export default showSchedules;