import React from 'react';
import ReactDOM from 'react-dom';

const Header = (properties) => {
    return (
        <div>
                <h1>{properties.course}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    const rows = () => parts.map(part =>
    <p key={part.id}>
        {part.name} {part.exercises}
    </p>)

    return (
        <div>
            {rows()}
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.map(part => part.exercises)
        .reduce((sum, partExercises) => sum + partExercises)

    return (
        <div>
            <p>
                Number of exercises {total}
            </p>
        </div>
    )
}

const App = () => {
    const course        = 'Half Stack application development'

    const parts         = [
        {
        name:   'fundamentals of React',    exercises: 10
        },
        {
        name:   'Using props to pass data', exercises: 7
        },
        {
        name:   'State of a component',     exercises: 14
        }
    ]

    return (
        <div>
            <Header     course={course} />

            <Content    parts={parts} />
            
            <Total      parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));