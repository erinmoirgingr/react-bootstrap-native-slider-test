var SliderNative = function(
    React,
    ReactDOM,
    BootstrapSlider) {

    return React.createClass({
        getInitialState: function() {
            return {
                value: this.props.value
            };
        },
        // Bootstrap-slider.js from https://github.com/seiyria/bootstrap-slider
        render: function () {
            // The slider's an input.  That's all we need.  We'll do the rest in JS.
            return (
                React.createElement("input", { name: this.props.name, value: this.state.value, readOnly: true })
            );
        },
        componentDidMount: function () {
            var that = this;
            $.fn.bootstrapSlider = $.fn.bootstrapSlider || $.fn.slider;
            this.mySlider = $(ReactDOM.findDOMNode(this)).bootstrapSlider({
                "tooltip": this.props.tooltip || "show"
            });
            this.updateSliderValues();
            this.mySlider.on("change", function (e) {
                var fakeEvent = {
                    target: {}
                };
                fakeEvent.target.value = e.value.newValue;
                // that.props.handleChange(fakeEvent);

                that.setState({
                    value: e.value.newValue
                });
            });
        },
        componentDidUpdate: function () {
            this.updateSliderValues();
        },
        updateSliderValues: function () {

            $(this.mySlider)
                .bootstrapSlider("setAttribute", "min", parseInt(this.props.min) )
                .bootstrapSlider("setAttribute", "max", parseInt(this.props.max) )
                .bootstrapSlider("setAttribute", "step", parseInt(this.props.step) )
                .bootstrapSlider("setValue", parseInt(this.state.value, 10) );

            var sliderEnable = this.props.disabled === "disabled" ? false : true;
            var currentlyEnabled = $(this.mySlider).bootstrapSlider("isEnabled");
            if (sliderEnable) {
                if (!currentlyEnabled) {
                  $(this.mySlider).bootstrapSlider("enable");
                }
            }
            else {
                if (currentlyEnabled) {
                  $(this.mySlider).bootstrapSlider("disable");
                }
            }
        }
    });
}

module.exports = SliderNative(require('react'), require('react-dom'), require('./javascript/libs/bootstrap-slider'));
