import React, { Component } from 'react';
import './Appointment.css'


class Appointment extends Component {
    render() {
  
      return (
            <div className='apm-body' id='registration'>
                <h1>ОНЛАЙН ЗАПИСЬ</h1>
                <iframe
          title="reg"
          src="https://b475334.yclients.com/"
        ></iframe>
            </div>
        );
    }
  }
   
  export default Appointment;