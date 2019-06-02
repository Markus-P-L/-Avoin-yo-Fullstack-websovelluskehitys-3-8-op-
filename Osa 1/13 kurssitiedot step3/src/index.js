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

    const part1         = {
        name:   'fundamentals of React',    exercises: 10
    }
    const part2         = {
        name:   'Using props to pass data', exercises: 7
    }
    const part3         = {
        name:   'State of a component',     exercises: 14
    }

    return (
        <div>
            <Header     course={course} />

            <Content    course1={part1.name}    exercises1={part1.exercises}
                        course2={part2.name}    exercises2={part2.exercises}
                        course3={part3.name}    exercises3={part3.exercises} />
            
            <Total      exercises1={part1.exercises}
                        exercises2={part2.exercises}
                        exercises3={part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));