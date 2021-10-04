const FirstComponent = () => {
    return <h1>My very first component</h1>
}

const NamedComponent = ({name="MIKE"}) => {
    return <p>My name is {name}</p>
}

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="steve" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))