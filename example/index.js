import React from 'react';
import ReactDOM from 'react-dom';
import MonthCalendar from '../src/components/MonthCalendar';

class AppComponent extends React.Component {
    render () {

        return (<div><MonthCalendar  /></div>);
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('component-container'));
