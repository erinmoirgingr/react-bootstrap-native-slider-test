var SliderNative = function(
    React,
    $,
    BootstrapSlider,
    BrowserDetectMixin) {
    
    return React.createClass({displayName: "BootstrapSlider",
        // Bootstrap-slider.js from https://github.com/seiyria/bootstrap-slider
        render: function () {
          console.log(this.props);
            // The slider's an input.  That's all we need.  We'll do the rest in JS.
            return (
                React.createElement("input", { name: this.props.name })
            );
        },
        componentDidMount: function () {
            var that = this;
            $.fn.bootstrapSlider = $.fn.bootstrapSlider || $.fn.slider;
            this.mySlider = $(this.getDOMNode()).bootstrapSlider({
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
        componentDidUpdate: function () {
            this.updateSliderValues();
        },
        updateSliderValues: function () {
            
            $(this.mySlider)
                .bootstrapSlider("setAttribute", "min", parseInt(this.props.min) )
                .bootstrapSlider("setAttribute", "max", parseInt(this.props.max) )
                .bootstrapSlider("setAttribute", "step", parseInt(this.props.step) )
                .bootstrapSlider("setValue", parseInt(this.props.value, 10) );

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

    if (typeof module === 'object' && module.exports) {
        module.exports = SliderNative(
            require('react'),
            require('jquery'),
            require('bootstrap-slider'),
            require('./javascript/libs/browserdetect-mixin.js'));
    } else if (typeof define === 'function' && define.amd) {
        define(function(require) {
            return SliderNative(
                require('react'),
                require('jquery'),
                require('bootstrap-slider'),
                require('./javascript/libs/browserdetect-mixin.js'));
        });
    } else {
        window.SliderNative = SliderNative(
            window.React,
            window.$,
            window.BootstrapSlider,
            window.BrowserDetectMixin);
    }
