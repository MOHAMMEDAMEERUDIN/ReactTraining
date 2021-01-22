import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles.js';


export default class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        timeNow : new Date()
      }
    }

    componentDidMount(){
        this.timerID=setInterval(
          () =>this.ticktick(),
          1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    ticktick(){
      //we cant use this.state={timeNow : new Date()} because it can be used only while initializing inside the constructor
      this.setState({
        timeNow : new Date()
      })
    }

    render() {
      return (
        <>
          <p style={styles.time}>Time : {this.state.timeNow.toLocaleTimeString()}</p>
        </>
      )
    }

}