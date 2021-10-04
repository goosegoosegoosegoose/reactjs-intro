const Tweet = ({username, name, date, msg}) => {
    return(
        <ul>
            <li>username: {username}</li>
            <li>name: {name}</li>
            <li>date posted: {date}</li>
            <li>message: {msg}</li>
        </ul>
    )
}

const App = () => (
    <div>
        <Tweet username="CORN" name="Hank" date="10/3/21" msg="first tweet"/>
        <Tweet username="CAN" name="Frank" date="10/2/21" msg="second tweet"/>
        <Tweet username="SOUP" name="Bank" date="10/1/21" msg="third tweet"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))