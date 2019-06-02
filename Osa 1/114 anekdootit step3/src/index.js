import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Votes = (props) => (
    <div>has {props.allVotes[props.selected]} votes</div>
)

const mostVotes = ({ allVotes }) => {
    let mostVotesIndex = 0;
    for (let i = 0; i < allVotes.length; i++) {
        if (allVotes[i] > allVotes[mostVotesIndex]) {
            mostVotesIndex = i
        }
    }
    return mostVotesIndex
}

const App = (props) => {
    const [selected, setSelected]   = useState(0)
    const [allVotes, setAll]        = useState(props.votes)
    const [voteClick, setVoteClick] = useState({
        click: 0
    })

    const handleVoteClick = () => {
        setVote()
        const newClick = {
            voteClick: voteClick.click + 1
        }
        setVoteClick(newClick)
    }

    const setVote = () => {
        const copy = allVotes
        copy[selected] += 1
        setAll(copy)
    }

    console.log(props.votes)
    
    const setNext = (newValue) => {
        setSelected(newValue)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected]}</div>
            <Votes selected={selected} allVotes={allVotes} />

            <Button handleClick = {() => handleVoteClick()}
                    text        = "vote" />

            <Button handleClick = {() => setNext(Math.floor(Math.random() * props.anecdotes.length))}
                    text        = {"next anecdote"} />

            <h1>Anecdote with most votes</h1>
            <div>{props.anecdotes[mostVotes({ allVotes })]}</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)

ReactDOM.render(
    <App anecdotes={anecdotes} votes={votes} />,
    document.getElementById('root')
)