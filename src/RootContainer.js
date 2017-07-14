import React from 'react'

class RootContainer extends React.Component {
    constructor(props) {
        super(props)

        this._bind('onDivClick','onButtonClick')
    }

    _bind(...methods) {
        for(let method of methods) {
            this[method] = this[method].bind(this)
        }
    }

    onDivClick(){
        console.log("Div Clicked")
        this.refs.headerRef.innerHTML = "This is after click"

    }

    onButtonClick() {
        console.log("Button Clicked")
        this.refs.buttonRef.innerHTML = "Button Clicked"
    }

    render() {
        return(
            <div style={{width:"100%", height:"100%", minHeight:400}}>
                <div onClick={this.onDivClick} style={{border:"1px solid black"}}>
                    <h1 ref="headerRef">This is before click</h1>
                </div>
                <button onClick={this.onButtonClick} style={{border:"1px solid black"}}>
                    <h1 ref="buttonRef">Click this button</h1>
                </button>
            </div>
        )
    }
}

export default RootContainer