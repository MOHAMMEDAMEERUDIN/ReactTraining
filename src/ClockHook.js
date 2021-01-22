import React, {useState , useEffect} from 'react';
import styles from './Styles.js';


function ClockHook(props){
    const [timeNow, setTimeNow]=useState(new Date());

    //same as lifecycle useEffect will gets called when componentDidMount,componentDidUpdate and componentWillUnmount
    useEffect(()=>{
        //componentDidMount , ComponentDidUpdate
        setInterval(
            () => ticktick(),
            1000
        );
        return() => {

        }
    });

    const ticktick = ()=>{
        setTimeNow(new Date());   
    }
    return (
        <>
          <p style={styles.time}>Using Hook : {timeNow.toLocaleTimeString()}</p>
        </>
      )
}

export default ClockHook;