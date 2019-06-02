import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

/* const Part = (properties) => {
    return (
        <div>
            {properties.course} {properties.exercises}
        </div>
    )
} */

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
    const course = {

        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header     course={course} />

            <Content    parts={course.parts} />
            
            <Total      parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));