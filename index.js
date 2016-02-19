var SliderNative = function(
    React,
    ReactDOM,
    BootstrapSlider) {

    return React.createClass({
        // Bootstrap-slider.js from https://github.com/seiyria/bootstrap-slider
        render: function () {
            // The slider's an input.  That's all we need.  We'll do the rest in JS.
            return (
                React.createElement("input", { name: this.props.name })
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
            });
        },
    });
}

module.exports = SliderNative(require('react'), require('react-dom'), require('./javascript/libs/bootstrap-slider'));
