import React from 'react';

// function App
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    render() {
        const {index} = this.state;

        return (
            <div
                onClick={
                    () => {
                        this.setState({index: index + 1})
                    }
                }
                className="hello">
                hello {this.state.index}!
            </div>
        )
    }

}
export default App;

const AppDemo = App;

export {
    AppDemo,
}