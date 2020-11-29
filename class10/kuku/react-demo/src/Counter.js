import React from "react";

class Counter extends React.Component{
    constructor() {
        super();
        this.state={
            index:0,
        }
    }



    hello(){
        const {index}=this.state;
        this.setState({index: index +1})
    }


    render() {
        return(
               <span>
                   {index}
               </span>
        )
    }
}

export default Counter;