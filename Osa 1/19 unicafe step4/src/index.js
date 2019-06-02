import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => (
    <div>
        {props.text} {props.value}
    </div>
)

const Statistics = (props) => (
    <div>
        <Statistic text="good"      value={props.good} />
        <Statistic text="neutral"   value={props.neutral} />
        <Statistic text="bad"       value={props.bad} />
        <Statistic text="all"       value={props.total} />
        <Statistic text="average"   value={props.total / 3} />
        <Statistic text="positive"  value={(props.good / props.total * 100 || 0) + " %"} />
    </div>
)

const App = () => {

    const [good, setGood]       = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]         = useState(0)

    const total                 = good + neutral + bad

    let stats

    if (total !== 0) {
        stats = <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    } else {
        stats = "No feedback given"
    }

    const setGoodToValue    = newValue => {
        setGood(newValue)
    }
    const setNeutralToValue = newValue => {
        setNeutral(newValue)
    }
    const setBadToValue     = newValue => {
        setBad(newValue)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={() => setGoodToValue(good + 1)}        text="good" />
            <Button handleClick={() => setNeutralToValue(neutral + 1)}  text="neutral" />
            <Button handleClick={() => setBadToValue(bad + 1)}          text="bad" />
            
            <h1>statistics</h1>

            {stats}
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
