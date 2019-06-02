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

const App = () => {

    const [good, setGood]       = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]         = useState(0)

    const total                 = good + neutral + bad

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

            <Statistic text="good"      value={good} />
            <Statistic text="neutral"   value={neutral} />
            <Statistic text="bad"       value={bad} />
            <Statistic text="all"       value={total} />
            <Statistic text="average"   value={total / 3} />
            <Statistic text="positive"  value={(good / total * 100 || 0) + " %"} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
