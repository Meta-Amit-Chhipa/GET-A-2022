import React from 'react'
import { ButtonPress } from './Button'
import OutPutScreen from './OutPut'

export class Calculator extends React.Component{
    constructor(){
        super()
        this.state={
            Result:''
        }
    }
    onClick=btn=>{
        if(btn=="=")
           this.Calculate()
        else if(btn=="C")
           this.Reset()
        else{
            this.setState({
                Result:this.state.Result+btn
            })
        }
    }
    Reset=()=>{
        this.setState({
            Result:''
        })
    }
    Calculate = () => {
        var checkResult = this.state.Result
        try {
            this.setState({
                // eslint-disable-next-line
                Result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                Result: "error"
            })

        }
    };
    render(){
        return(
            <div className="CalculatorBody">
                <OutPutScreen result={this.state.Result}/>
                <ButtonPress onClick={this.onClick}/>
            </div>
        )
    }
}