import React from 'react';
import ReactDOM from 'react-dom';

const Header = (properties) => {
    return (
        <div>
                <h1>{properties.course}</h1>
        </div>
    )
}

const Part = (properties) => {
    return (
        <div>
            {properties.course} {properties.exercises}
        </div>
    )
}

const Content = (properties) => {
    return (
        <div>
            <Part   course={properties.course1}  exercises={properties.exercises1} />
            <Part   course={properties.course2}  exercises={properties.exercises2} />
            <Part   course={properties.course3}  exercises={properties.exercises3} />
        </div>
    )
}

const Total = (properties) => {
    return (
        <div>
            <p>
                Number of exercises {properties.exercises1 +
                                     properties.exercises2 +
                                     properties.exercises3}
            </p>
        </div>
    )
}

const App = () => {
    const course        = 'Half Stack application development'
    const part1         = 'fundamentals of React'
    const part2         = 'Using props to pass data'
    const part3         = 'State of a component'
    const exercises1    = 10
    const exercises2    = 7
    const exercises3    = 14

    return (
        <div>
            <Header     course={course} />

            <Content    course1={part1}    exercises1={exercises1}
                        course2={part2}    exercises2={exercises2}
                        course3={part3}    exercises3={exercises3} />
            
            <Total      exercises1={exercises1}
                        exercises2={exercises2}
                        exercises3={exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
