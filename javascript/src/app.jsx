/** @jsx React.DOM */
/* jshint browser: true */
/* globals React, ReactSlider, console */



class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.startValue,
            min: this.props.min,
            max: this.props.max,
            step: this.props.step
        };
    }

    render() {
        var newValue = this.state.currentValue;
        // TODO: Replace this with bootstrap version
        return (
            <div>
                <SliderNativeBootstrap
                    value={this.state.currentValue}
                    handleChange={this.changeValue}
                    step={this.state.step}
                    max={this.state.max}
                    min={this.state.min} />
                <br /><br />
                Value: {newValue}

                <br /><br />
                <button onClick={this.changeAxes}>Change axes!</button>
            </div>
            );
    }

    changeValue(e) {
        console.log("changeValue");
        this.setState({currentValue: e.target.value});
    }

    changeAxes(){
        this.setState({
            currentValue: 500,
            min: 0,
            max: 2000,
            step: 100
        });
    }
}

ReactDOM.render(<Demo
        startValue={3000}
        max={20000}
        min={1000}
        step={1000} />, document.getElementById("main"));
