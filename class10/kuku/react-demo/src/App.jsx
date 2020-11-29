import React, {Component} from 'react';
import NameGenerator from "./components/name-generator";

const names = ['lili', 'amber', 'dayao', 'coral', 'kuku'];

class App extends Component {

    ref;

    /**
     * @description 渲染方法
     * @return {JSX.Element}
     */
    render() {
        return (
            // todo-item 思考ref
            <div
                style={
                    /* 花括号当中包裹一个对象 */
                    {
                        fontSize: '50px',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }
                }
                onClick={() => this.ref.switchIndex()}>
                hello <NameGenerator ref={r => this.ref = r} names={names}/>!
            </div>
        )
    }
}

const AppAnotherFirst = App;
const AppAnotherSecond = App;


export {
    AppAnotherSecond
}

export {
    AppAnotherFirst
}


export default App;