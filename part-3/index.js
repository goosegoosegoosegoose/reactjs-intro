const Person = (props) => {
    if(props.age > 18) {
        return (
            <div>
                <p>
                    Learn some information about this person<br/>
                    Name: {props.name.substring(0,6)}<br/>
                    Age: {props.age}
                </p>
                <h3>please go vote!</h3>
                <ul>
                    {props.hobbies.map(h => <li>{h}</li>)}  
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    Learn some information about this person<br/>
                    Name: {props.name.substring(0,6)}<br/>
                    Age: {props.age}
                </p>
                <h3>you must be 18</h3>
                <ul>
                    {props.hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
};

const App = () => (
    <div>
        <Person name="Mike" age={25} hobbies={["Eat", "Sleep", "Repeat"]} />
        <Person name="Carlos" age={7} hobbies={["What", "Are", "Hobbies"]} />
        <Person name="Jim" age={18} hobbies={["Sit", "Stand", "Lie"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))