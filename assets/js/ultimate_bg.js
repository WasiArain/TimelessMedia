! function(R) {
    function E() {
        return !!jQuery("body").hasClass("rtl")
    }
    jQuery(document).ready(function() {
        function G() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return !1;
            jQuery(".enable-on-viewport").each(function(e, t) {
                var a = jQuery(this).isVdoOnScreen();
                jQuery(this).hasClass("hosted-video") && !jQuery(this).hasClass("override-controls") && (a ? (jQuery(this)[0].play(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "play"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this)[0].pause(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "pause"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlplay"></i>')))
            })
        }

        function J(e, t) {
            var a = e.data("seperator"),
                r = e.data("seperator-type"),
                o = e.data("seperator-shape-size"),
                s = e.data("seperator-background-color"),
                i = e.data("seperator-border"),
                l = e.data("seperator-border-color"),
                d = e.data("seperator-border-width"),
                p = e.data("seperator-svg-height"),
                n = e.data("seperator-full-width"),
                c = e.data("seperator-position");
            void 0 !== c && "" != c || (c = "top_seperator");
            var u = e.data("icon");
            u = void 0 === u ? "" : '<div class="separator-icon">' + u + "</div>";
            var v = seperator_class = seperator_border_css = seperator_border_line_css = seperator_css = "";
            if (void 0 !== a && "true" == a.toString()) {
                var h = shape_css = svg = inner_html = seperator_css = shape_css = "",
                    _ = !1,
                    b = "uvc-seperator-" + Math.floor(9999999999999 * Math.random());
                void 0 !== o && "" != o && "undefined" != o || (o = 0);
                var g = (o = parseInt(o)) / 2,
                    m = 0;
                if ("triangle_seperator" == r) seperator_class = "ult-trinalge-seperator";
                else if ("circle_seperator" == r) seperator_class = "ult-circle-seperator";
                else if ("diagonal_seperator" == r) seperator_class = "ult-double-diagonal";
                else if ("triangle_svg_seperator" == r) seperator_class = "ult-svg-triangle", svg = '<svg class="uvc-svg-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 0.156661 0.1"><polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "/></svg>', _ = !0;
                else if ("circle_svg_seperator" == r) seperator_class = "ult-svg-circle", svg = '<svg class="uvc-svg-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 0.2 0.1"><path d="M0.200004 0c-3.93701e-006,0.0552205 -0.0447795,0.1 -0.100004,0.1 -0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1l0.200004 0z"/></svg>', _ = !0;
                else if ("xlarge_triangle_seperator" == r) seperator_class = "ult-xlarge-triangle", svg = '<svg class="uvc-x-large-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-0 0.333331l4.66666 0 0 -3.93701e-006 -2.33333 0 -2.33333 0 0 3.93701e-006zm0 -0.333331l4.66666 0 0 0.166661 -4.66666 0 0 -0.166661zm4.66666 0.332618l0 -0.165953 -4.66666 0 0 0.165953 1.16162 -0.0826181 1.17171 -0.0833228 1.17171 0.0833228 1.16162 0.0826181z"/></svg>', _ = !0;
                else if ("xlarge_triangle_left_seperator" == r) seperator_class = "ult-xlarge-triangle-left", svg = '<svg class="uvc-x-large-triangle-left" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', _ = !0;
                else if ("xlarge_triangle_right_seperator" == r) seperator_class = "ult-xlarge-triangle-right", svg = '<svg class="uvc-x-large-triangle-right" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', _ = !0;
                else if ("xlarge_circle_seperator" == r) seperator_class = "ult-xlarge-circle", svg = '<svg class="uvc-x-large-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil1" d="M4.66666 0l0 7.87402e-006 -3.93701e-006 0c0,0.0920315 -1.04489,0.166665 -2.33333,0.166665 -1.28844,0 -2.33333,-0.0746339 -2.33333,-0.166665l-3.93701e-006 0 0 -7.87402e-006 4.66666 0z"/></svg>', _ = !0;
                else if ("curve_up_seperator" == r) seperator_class = "ult-curve-up-seperator", svg = '<svg class="curve-up-inner-seperator uvc-curve-up-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', _ = !0;
                else if ("curve_down_seperator" == r) seperator_class = "ult-curve-down-seperator", svg = '<svg class="curve-down-inner-seperator uvc-curve-down-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', _ = !0;
                else if ("tilt_left_seperator" == r) seperator_class = "ult-tilt-left-seperator", svg = '<svg class="uvc-tilt-left-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', _ = !0;
                else if ("tilt_right_seperator" == r) seperator_class = "ult-tilt-right-seperator", svg = '<svg class="uvc-tilt-right-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', _ = !0;
                else if ("waves_seperator" == r) seperator_class = "ult-wave-seperator", svg = '<svg class="wave-inner-seperator uvc-wave-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 6 0.1" preserveAspectRatio="none"><path d="M0.199945 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c-0.0541102,0 -0.0981929,-0.0430079 -0.0999409,-0.0967008l0 0.0967008 0.0999409 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm2.00004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm-0.1 0.1l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm1.90004 -0.1c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.199945 0.00329921l0 0.0967008 -0.0999409 0c0.0541102,0 0.0981929,-0.0430079 0.0999409,-0.0967008z"/></svg>', _ = !0;
                else if ("clouds_seperator" == r) seperator_class = "ult-cloud-seperator", svg = '<svg class="cloud-inner-seperator uvc-cloud-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + s + '" width="100%" height="' + p + '" viewBox="0 0 2.23333 0.1" preserveAspectRatio="none"><path class="fil0" d="M2.23281 0.0372047c0,0 -0.0261929,-0.000389764 -0.0423307,-0.00584252 0,0 -0.0356181,0.0278268 -0.0865354,0.0212205 0,0 -0.0347835,-0.00524803 -0.0579094,-0.0283701 0,0 -0.0334252,0.0112677 -0.0773425,-0.00116929 0,0 -0.0590787,0.0524724 -0.141472,0.000779528 0,0 -0.0288189,0.0189291 -0.0762362,0.0111535 -0.00458268,0.0141024 -0.0150945,0.040122 -0.0656811,0.0432598 -0.0505866,0.0031378 -0.076126,-0.0226614 -0.0808425,-0.0308228 -0.00806299,0.000854331 -0.0819961,0.0186969 -0.111488,-0.022815 -0.0076378,0.0114843 -0.059185,0.0252598 -0.083563,-0.000385827 -0.0295945,0.0508661 -0.111996,0.0664843 -0.153752,0.019 -0.0179843,0.00227559 -0.0571181,0.00573622 -0.0732795,-0.0152953 -0.027748,0.0419646 -0.110602,0.0366654 -0.138701,0.00688189 0,0 -0.0771732,0.0395709 -0.116598,-0.0147677 0,0 -0.0497598,0.02 -0.0773346,-0.00166929 0,0 -0.0479646,0.0302756 -0.0998937,0.00944094 0,0 -0.0252638,0.0107874 -0.0839488,0.00884646 0,0 -0.046252,0.000775591 -0.0734567,-0.0237087 0,0 -0.046252,0.0101024 -0.0769567,-0.00116929 0,0 -0.0450827,0.0314843 -0.118543,0.0108858 0,0 -0.0715118,0.0609803 -0.144579,0.00423228 0,0 -0.0385787,0.00770079 -0.0646299,0.000102362 0,0 -0.0387559,0.0432205 -0.125039,0.0206811 0,0 -0.0324409,0.0181024 -0.0621457,0.0111063l-3.93701e-005 0.0412205 2.2323 0 0 -0.0627953z"/></svg>', _ = !0;
                else if ("multi_triangle_seperator" == r) {
                    seperator_class = "ult-multi-trianle";
                    var f = function(e) {
                        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, r) {
                            return t + t + a + a + r + r
                        });
                        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return t ? {
                            r: parseInt(t[1], 16),
                            g: parseInt(t[2], 16),
                            b: parseInt(t[3], 16)
                        } : null
                    }(s);
                    svg = '<svg class="uvc-multi-triangle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="' + p + '">\t\t\t\t            <path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .1)"></path>\t\t\t\t            <path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .1)"></path>\t\t\t\t            <path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .3)"></path>\t\t\t\t            <path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .3)"></path>\t\t\t\t            <path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .5)"></path>\t\t\t\t            <path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', .5)"></path>\t\t\t\t            <path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', 1)"></path>\t\t\t\t            <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(' + f.r + "," + f.g + "," + f.b + ', 1)"></path>\t\t\t\t        </svg>', _ = !0
                } else if ("round_split_seperator" == r) {
                    var y = temp_border_before = temp_border_after = temp_border_line = "";
                    temp_padding = 0, seperator_class = "ult-rounded-split-seperator-wrapper";
                    jQuery(e).outerHeight();
                    if (0 != o) {
                        var w = parseInt(jQuery(e).css("padding-bottom"));
                        jQuery(e).css({
                            "padding-bottom": o + "px"
                        }), 0 == w && (temp_padding = o)
                    }
                    if ("top_seperator" == c) var x = "top-split-seperator",
                        j = "0px",
                        Q = "auto",
                        z = "border-radius: 0 0 " + o + "px 0 !important;",
                        k = "border-radius: 0 0 0 " + o + "px !important;";
                    else if ("bottom_seperator" == c) x = "bottom-split-seperator", j = "auto", Q = "0px", z = "border-radius: 0 " + o + "px 0 0 !important;", k = "border-radius: " + o + "px 0 0 0 !important;";
                    else {
                        x = "top-bottom-split-seperator";
                        var C = "0px",
                            M = "auto",
                            I = "auto",
                            P = "0px",
                            A = "border-radius: 0 0 " + o + "px 0 !important;",
                            L = "border-radius: 0 0 0 " + o + "px !important;",
                            B = "border-radius: 0 " + o + "px 0 0 !important;",
                            O = "border-radius: " + o + "px 0 0 0 !important;"
                    }
                    inner_html = '<div class="ult-rounded-split-seperator ' + x + '"></div>', "none" != i && (temp_border_line = d + "px " + i + " " + l, temp_border_before = "border-top: " + temp_border_line + "; border-right: " + temp_border_line + ";", temp_border_after = "border-top: " + temp_border_line + "; border-left: " + temp_border_line + ";"), "top_seperator" == c || "bottom_seperator" == c ? (y = "<style>." + b + " .ult-rounded-split-seperator." + x + ":before { background-color:" + s + "; height:" + o + "px !important; top:" + j + "; bottom:" + Q + "; " + temp_border_before + " " + z + " } ." + b + " .ult-rounded-split-seperator." + x + ":after { background-color:" + s + "; left: 50%; height:" + o + "px !important; top:" + j + "; bottom:" + Q + "; " + temp_border_after + " " + k + " }</style>", jQuery("head").append(y)) : (y = "<style>." + b + ".top_seperator .ult-rounded-split-seperator:before { background-color:" + s + "; height:" + o + "px !important; top:" + C + "; bottom:" + M + "; " + temp_border_before + " " + A + " } ." + b + ".top_seperator .ult-rounded-split-seperator:after { background-color:" + s + "; left: 50%; height:" + o + "px !important; top:" + C + "; bottom:" + M + "; " + temp_border_after + " " + L + " }</style>", temp_css_bottom = "<style>." + b + ".bottom_seperator .ult-rounded-split-seperator:before { background-color:" + s + "; height:" + o + "px !important; top:" + I + "; bottom:" + P + "; " + temp_border_before + " " + B + " } ." + b + ".bottom_seperator .ult-rounded-split-seperator:after { background-color:" + s + "; left: 50%; height:" + o + "px !important; top:" + I + "; bottom:" + P + "; " + temp_border_after + " " + O + " }</style>", jQuery("head").append(y + temp_css_bottom))
                } else seperator_class = "ult-no-shape-seperator";
                if (void 0 !== d && "" != d && 0 != d && (m = parseInt(d)), shape_css = 'content: "";width:' + o + "px; height:" + o + "px; bottom: -" + (g + m) + "px;", "" != s && (shape_css += "background-color:" + s + ";"), "none" != i && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == _ && (seperator_border_line_css = d + "px " + i + " " + l, shape_css += "border-bottom:" + seperator_border_line_css + "; border-right:" + seperator_border_line_css + ";", seperator_css += "border-bottom:" + seperator_border_line_css + ";", v = "bottom:" + d + "px !important"), "ult-no-shape-seperator" != seperator_class && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == _) {
                    h = "<style>." + b + " .ult-main-seperator-inner:after { " + shape_css + " }</style>";
                    jQuery("head").append(h)
                }
                if (1 == _ && (inner_html = svg), "top_bottom_seperator" == c) {
                    var N = '<div class="ult-vc-seperator top_seperator ' + seperator_class + " " + b + '" data-full-width="' + n + '" data-border="' + i + '" data-border-width="' + d + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + u + "</div>";
                    N += '<div class="ult-vc-seperator bottom_seperator ' + seperator_class + " " + b + '" data-full-width="' + n + '" data-border="' + i + '" data-border-width="' + d + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + u + "</div>"
                } else N = '<div class="ult-vc-seperator ' + c + " " + seperator_class + " " + b + '" data-full-width="' + n + '" data-border="' + i + '" data-border-width="' + d + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + u + "</div>";
                if (t.prepend(N), seperator_css = "<style>." + b + " .ult-main-seperator-inner { " + seperator_css + " }</style>", "" != v && (v = "<style>." + b + " .ult-main-seperator-inner { " + v + " }</style>", seperator_css += v), "" != u) {
                    var S = p / 2;
                    seperator_css += "none_seperator" == r || "circle_svg_seperator" == r || "triangle_svg_seperator" == r ? "<style>." + b + " .separator-icon { -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }</style>" : "<style>." + b + ".top_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% + " + S + "px)); -moz-transform: translate(-50%, calc(-50% + " + S + "px)); -ms-transform: translate(-50%, calc(-50% + " + S + "px)); -o-transform: translate(-50%, calc(-50% + " + S + "px)); transform: translate(-50%, calc(-50% + " + S + "px)); } ." + b + ".bottom_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% - " + S + "px)); -moz-transform: translate(-50%, calc(-50% - " + S + "px)); -ms-transform: translate(-50%, calc(-50% - " + S + "px)); -o-transform: translate(-50%, calc(-50% - " + S + "px)); transform: translate(-50%, calc(-50% - " + S + "px)); }</style>"
                }
                1 == _ && (jQuery("." + b).find("svg").css("height", p), setTimeout(function() {
                    "multi_triangle_seperator" == r && jQuery(".ult-multi-trianle").each(function(e, t) {
                        var a = R(t).find("svg").height();
                        R(t).hasClass("top_seperator") || R(t).hasClass("bottom_seperator") && R(t).css("bottom", a - 1)
                    })
                }, 300)), jQuery("head").append(seperator_css)
            }
        }
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && R("html").addClass("ult-remove-fixed-background"), jQuery(window).scroll(function() {
            G()
        }), jQuery(window).load(function() {
            G()
        }), jQuery.fn.isVdoOnScreen = function() {
            var e = jQuery(window),
                t = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                };
            t.right = t.left + e.width(), t.bottom = t.top + e.height() - 200;
            var a = this.parent().offset();
            return a.right = a.left + this.parent().outerWidth(), a.bottom = a.top + this.parent().outerHeight() - 300, !(t.right < a.left || t.left > a.right || t.bottom < a.top || t.top > a.bottom)
        }, jQuery.fn.ultimate_video_bg = function(D) {
            return jQuery(this).each(function() {
                var p = jQuery(this),
                    e = p.data("ultimate-video"),
                    t = p.data("ultimate-video2"),
                    a = p.data("ultimate-video-muted"),
                    r = p.data("ultimate-video-loop"),
                    o = p.data("ultimate-video-autoplay"),
                    s = p.data("ultimate-video-poster"),
                    n = p.data("bg-override"),
                    i = p.data("start-time"),
                    l = p.data("stop-time"),
                    d = p.data("upb-bg-animation"),
                    c = p.data("overlay"),
                    u = p.data("overlay-color"),
                    v = p.data("overlay-pattern"),
                    h = p.data("overlay-pattern-opacity"),
                    _ = p.data("overlay-pattern-size"),
                    b = p.data("overlay-pattern-attachment"),
                    g = p.data("viewport-video"),
                    m = p.data("controls"),
                    f = p.data("controls-color"),
                    y = p.data("fadeout"),
                    w = p.data("fadeout-percentage"),
                    x = p.data("parallax-content"),
                    j = p.data("parallax-content-sense"),
                    Q = p.data("row-effect-mobile-disable"),
                    z = p.data("hide-row"),
                    k = p.data("rtl"),
                    C = p.data("video_fixer"),
                    M = "",
                    I = "",
                    P = p.data("custom-vc-row"),
                    A = p.data("vc"),
                    L = p.data("theme-support"),
                    B = p.data("is_old_vc");
                void 0 !== P && "" !== P || (P = "wpb_row"), void 0 === A && (A = 0), void 0 === B && (B = !1), void 0 === L && (L = "disable"), p.data("multi-color-overlay") && (M = p.data("multi-color-overlay"), I = p.data("multi-color-overlay-opacity"));
                var O = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if (void 0 !== c && "true" === c.toString() && ("" != v && ("" != _ && (_ = "background-size:" + _ + "px;"), void 0 !== b && "" != b && (overlay_pattern_attachment_css = "background-attachment:" + b + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + v + "); opacity:" + h + "; " + _ + "; " + overlay_pattern_attachment_css + '"></div>'), "" != u && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + u + ';"></div>'), "" != M && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + M + '" style="opacity:' + I + ';"></div>'), O = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), l = 0 != l ? l : "", 1 == B || "enable" == L)
                    if (p.prev().is("p") || p.prev().is("style")) var N = p.prev().prev();
                    else N = p.prev();
                else N = p.prevAll("." + P + ":first");
                N.css("position", "relative");
                var S = N.attr("class"),
                    R = p;
                p = N;
                ! function() {
                    var e, t, a;
                    if (a = p, resize_selector = a.find(".upb_video-bg"), "full" == n && (a = jQuery("body")), "ex-full" == n && (a = jQuery("html")), !isNaN(n))
                        for (var r = 0; r < n && "HTML" != a.prop("tagName"); r++) a = a.parent();
                    t = resize_selector.parents("upb_video_class").outerHeight(), e = a.outerWidth(), "browser_size" == n && (t = jQuery(window).height(), e = jQuery(window).width(), a.css("min-height", t + "px")), resize_selector.css({
                        "min-height": t + "px",
                        "min-width": e + "px"
                    }), a.offset() && (a.offset().left, resize_selector.offset() && resize_selector.offset().left);
                    var o, s, i = e,
                        l = t,
                        d = resize_selector.find(".upb_vimeo_iframe");
                    youvideoplayer = resize_selector.find(".upb_utube_iframe"), embeddedvideoplayer = resize_selector.find(".upb_video-src");
                    d && (i / (16 / 9) < l ? (o = Math.ceil(l * (16 / 9)), d.width(o).height(l).css({
                        left: (i - o) / 2,
                        top: 0
                    })) : (s = Math.ceil(i / (16 / 9)), d.width(i).height(s).css({
                        left: 0,
                        top: (l - s) / 2
                    }))), embeddedvideoplayer && (i / (16 / 9) < resize_selector.height() ? (embeddedvideoplayer.css("width", "auto"), embeddedvideoplayer.css("height", "100%")) : (embeddedvideoplayer.css("width", "100%"), embeddedvideoplayer.css("height", "auto")))
                }(), "" != z && (p.addClass("ult-vc-hide-row"), p.attr("data-hide-row", z)), p.attr("data-rtl", k), p.addClass("upb_video_class"), p.attr("data-row-effect-mobile-disable", Q), "fadeout_row_value" == y && (p.addClass("vc-row-fade"), p.attr("data-fadeout-percentage", w)), p.attr("data-upb_br_animation", d), e && (-1 != e.indexOf("youtube.com") ? D = "youtube" : -1 != e.indexOf("vimeo.com") && (D = "vimeo"));
                var H = "";
                if ("display_control" == m) {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var T = "ult-vid-cntrlplay",
                        E = "pause";
                    else T = "ult-vid-cntrlpause", E = "play";
                    H = '<span class="video-controls" data-action="' + E + '" style="color:' + f + '"><i class="' + T + '"></i></span>'
                }
                if ("browser_size" == n && (p.wrapInner('<div class="upb_video-text-wrapper"><div class="upb_video-text"></div></div>'), p.find(".upb_video-text-wrapper").find(".upb_video-text").addClass(S)), "parallax_content_value" == x) {
                    p.addClass("vc-row-translate"), p.attr("data-parallax-content-sense", j), p.wrapInner('<div class="vc-row-translate-wrapper ' + S + '"></div>');
                    var W = p.css("padding-top"),
                        q = p.css("padding-bottom");
                    p.find(".vc-row-translate-wrapper").css({
                        "padding-top": W,
                        "padding-bottom": q
                    }), p[0].style.setProperty("padding-top", "0px", "important"), p[0].style.setProperty("padding-bottom", "0px", "important")
                }
                var V = "";
                if ("true" == C.toString() && (V = "uvc-video-fixer"), "youtube" == D || "vimeo" == D ? p.prepend('<div class="upb_video-wrapper ' + V + '"><div class="upb_video-bg utube" data-rtl="' + k + '" data-bg-override="' + n + '" data-row="' + P + '" data-theme-support="' + L + '">' + O + "</div></div>") : p.prepend(' <div class="upb_video-wrapper"><div class="upb_video-bg" data-bg-override="' + n + '" data-rtl="' + k + '" data-row="' + P + '" data-theme-support="' + L + '"><video class="upb_video-src"></video>' + H + O + "</div></div>"), J(R, p), R.remove(), "youtube" == D) e = e.substring(e.indexOf("watch?v=") + 8, e.indexOf("watch?v=") + 19), "loop" == r && (r = !0), "muted" == a && (a = !0), ($ = p.find(".upb_video-bg")).attr("data-vdo", e), $.attr("data-loop", r), $.attr("data-poster", s), $.attr("data-muted", a), $.attr("data-start", i), $.attr("data-stop", l), !0 === g && ($.addClass("enable-on-viewport"), $.addClass("youtube-video"), G());
                else if ("vimeo" == D) {
                    e = e.substring(e.indexOf("vimeo.com/") + 10, e.indexOf("vimeo.com/") + 18), ($ = p.find(".upb_video-bg")).html('<iframe class="upb_vimeo_iframe" src="https://player.vimeo.com/video/' + e + '?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;loop=0&amp;autoplay=1&amp;api=1&amp;rel=0&amp;" height="1600" width="900" frameborder=""></iframe>')
                } else {
                    var $ = p.find(".upb_video-src");
                    if (hosted_wrapper = $.parent(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "display_control" != m) "display_control" != m && ("" != s && $.parent().find(".video-controls").hide(), $.remove());
                    else {
                        if (jQuery("<source/>", {
                                type: "video/mp4",
                                src: e
                            }).appendTo($), void 0 !== t && "" !== t) {
                            var F = "";
                            t.match(/.ogg/i) ? F = "video/ogg" : t.match(/.webm/i) && (F = "video/webm"), "" != F && jQuery("<source/>", {
                                type: F,
                                src: t
                            }).appendTo($)
                        }
                        "muted" == a && $.attr({
                            "data-mute": "muted"
                        }), "loop" == r && $.attr({
                            loop: r
                        }), $.attr({
                            preload: "auto"
                        }), !0 === g ? ($.addClass("enable-on-viewport"), $.addClass("hosted-video"), G()) : "autoplay" == o && $.attr({
                            autoplay: o
                        })
                    }
                }
                "" != s && ($.is(".utube") ? $.css({
                    "background-image": "url(" + s + ")"
                }) : hosted_wrapper.css({
                    "background-image": "url(" + s + ")"
                })), jQuery(".upb_video-src").each(function(e, t) {
                    var a = jQuery(t).attr("data-mute");
                    (void 0 === a && (a = !1), "muted" === a) && (jQuery(t)[0].muted = "muted")
                })
            }), this
        }, jQuery.fn.ultimate_bg_shift = function() {
            return jQuery(this).each(function() {
                var i = jQuery(this),
                    e = i.data("ultimate-bg"),
                    t = i.data("ultimate-bg-style"),
                    a = i.prev().css("background-color"),
                    r = i.data("bg-img-repeat"),
                    o = i.data("bg-img-size"),
                    s = i.data("bg-img-position"),
                    l = i.data("parallx_sense"),
                    d = i.data("bg-override"),
                    p = i.data("bg_img_attach"),
                    n = i.data("upb-bg-animation"),
                    c = i.data("overlay"),
                    u = i.data("overlay-color"),
                    v = i.data("overlay-pattern"),
                    h = i.data("overlay-pattern-opacity"),
                    _ = i.data("overlay-pattern-size"),
                    b = i.data("overlay-pattern-attachment"),
                    g = i.data("fadeout"),
                    m = i.data("fadeout-percentage"),
                    f = i.data("parallax-content"),
                    y = i.data("parallax-content-sense"),
                    w = i.data("bg-animation"),
                    x = i.data("bg-animation-type"),
                    j = i.data("animation-repeat"),
                    Q = i.data("row-effect-mobile-disable"),
                    z = i.data("img-parallax-mobile-disable"),
                    k = i.data("hide-row"),
                    C = i.data("rtl"),
                    M = "",
                    I = "",
                    P = i.data("custom-vc-row"),
                    A = i.data("vc"),
                    L = i.data("theme-support"),
                    B = i.data("is_old_vc");
                void 0 !== P && "" !== P || (P = "wpb_row"), void 0 === A && (A = 0), void 0 === B && (B = !1), void 0 === L && (L = "disable"), i.data("multi-color-overlay") && (M = i.data("multi-color-overlay"), I = i.data("multi-color-overlay-opacity"));
                var O = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if (void 0 !== c && "true" === c.toString() && ("" != v && ("" != _ && (_ = "background-size:" + _ + "px;"), void 0 !== b && "" != b && (overlay_pattern_attachment_css = "background-attachment:" + b + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + v + "); opacity:" + h + "; " + _ + "; " + overlay_pattern_attachment_css + '"></div>'), "" != u && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + u + ';"></div>'), "" != M && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + M + '" style="opacity:' + I + ';"></div>'), O = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), 1 == B || "enable" == L)
                    if (i.prev().is("p") || i.prev().is("style")) var N = i.prev().prev();
                    else N = i.prev();
                else N = i.prevAll("." + P + ":first");
                N.css("position", "relative");
                var S = N.attr("class");
                if ("browser_size" == d && (N.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), i.parent().find(".upb-background-text-wrapper").addClass("full-browser-size"), i.parent().find(".upb-background-text-wrapper").find(".upb-background-text").addClass(S)), "parallax_content_value" == f) {
                    N.addClass("vc-row-translate"), N.attr("data-parallax-content-sense", y), N.wrapInner('<div class="vc-row-translate-wrapper ' + S + '"></div>');
                    var R = N.css("padding-top"),
                        H = N.css("padding-bottom");
                    N.find(".vc-row-translate-wrapper").css({
                        "padding-top": R,
                        "padding-bottom": H
                    }), void 0 !== N[0] && "" !== N && (N[0].style.setProperty("padding-top", "0px", "important"), N[0].style.setProperty("padding-bottom", "0px", "important"))
                }
                "" != k && (N.addClass("ult-vc-hide-row"), N.attr("data-hide-row", k)), N.attr("data-rtl", C), N.prepend('<div class="upb_row_bg">' + O + "</div>"), i.remove(), J(i, N), (i = N).attr("data-row-effect-mobile-disable", Q), i.attr("data-img-parallax-mobile-disable", z), "fadeout_row_value" == g && (i.addClass("vc-row-fade"), i.attr("data-fadeout-percentage", m)), i.css("background-image", ""), (i = i.find(".upb_row_bg")).attr("data-upb_br_animation", n), "automatic" != o ? i.css({
                    "background-size": o
                }) : i.addClass("upb_bg_size_automatic"), i.css({
                    "background-repeat": r,
                    "background-position": s,
                    "background-color": a
                }), "vcpb-fs-jquery" == t || "vcpb-mlvp-jquery" == t ? i.attr("data-img-array", e) : i.css({
                    "background-image": e,
                    "background-attachment": p
                }), i.attr("data-parallax_sense", l), i.attr("data-bg-override", d), i.attr("data-bg-animation", w), i.attr("data-bg-animation-type", x), i.attr("data-animation-repeat", j), i.addClass(t);
                var T = function() {
                    var e, t, a, r;
                    if (t = i.parent(), "full" == d && (t = jQuery("body"), a = 0), "ex-full" == d && (t = jQuery("html"), a = 0), !isNaN(d)) {
                        for (var o = 0; o < d && "HTML" != t.prop("tagName"); o++) t = t.parent();
                        a = t.offset().left
                    }
                    if (wh = jQuery(window).height(), i.parent().outerHeight(), e = t.outerWidth(), i.css({
                            "min-width": e + "px"
                        }), void 0 !== i.offset() && (r = i.offset().left), 1 == E() ? i.css({
                            right: -Math.abs(a - r) + "px"
                        }) : i.css({
                            left: -Math.abs(a - r) + "px"
                        }), "browser_size" == d) {
                        var s = i.parent().find(".upb-background-text").height();
                        s > wh && (wh = s), i.parent().css("height", wh + "px"), i.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                    }
                };
                T(), jQuery(window).load(function() {
                    T()
                }), jQuery(window).resize(function() {
                    T()
                })
            }), this
        }, jQuery.fn.ultimate_grad_shift = function() {
            return jQuery(this).each(function() {
                var i = jQuery(this),
                    e = i.data("grad"),
                    l = (i.data("grad-type"), i.data("grad-custom-degree"), jQuery(this).data("bg-override")),
                    t = i.data("overlay"),
                    a = i.data("overlay-color"),
                    r = i.data("overlay-pattern"),
                    o = i.data("overlay-pattern-opacity"),
                    s = i.data("overlay-pattern-size"),
                    d = i.data("overlay-pattern-attachment"),
                    p = i.data("upb-bg-animation"),
                    n = i.data("fadeout"),
                    c = i.data("fadeout-percentage"),
                    u = i.data("parallax-content"),
                    v = i.data("parallax-content-sense"),
                    h = i.data("row-effect-mobile-disable"),
                    _ = i.data("hide-row"),
                    b = i.data("rtl"),
                    g = "",
                    m = "",
                    f = i.data("custom-vc-row"),
                    y = i.data("vc"),
                    w = i.data("theme-support"),
                    x = i.data("is_old_vc");
                if (void 0 !== f && "" !== f || (f = "wpb_row"), void 0 === y && (y = 0), void 0 === x && (x = !1), void 0 === w && (w = "disable"), i.data("multi-color-overlay") && (g = i.data("multi-color-overlay"), m = i.data("multi-color-overlay-opacity")), 1 == x || "enable" == w)
                    if (i.prev().is("p") || i.prev().is("style")) var j = i.prev().prev();
                    else j = i.prev();
                else j = i.prevAll("." + f + ":first");
                j.css("position", "relative");
                var Q = j.attr("class");
                i.remove();
                var z = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if (void 0 !== t && "true" === t.toString() && ("" != r && ("" != s && (s = "background-size:" + s + "px;"), void 0 !== d && "" != d && (overlay_pattern_attachment_css = "background-attachment:" + d + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + r + "); opacity:" + o + "; " + s + "; " + overlay_pattern_attachment_css + '"></div>'), "" != a && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + a + ';"></div>'), "" != g && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + g + '" style="opacity:' + m + ';"></div>'), z = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == l && (j.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), j.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(Q), j.addClass("full-browser-size")), "parallax_content_value" == u) {
                    j.addClass("vc-row-translate"), j.attr("data-parallax-content-sense", v), j.wrapInner('<div class="vc-row-translate-wrapper ' + Q + '"></div>');
                    var k = j.css("padding-top"),
                        C = j.css("padding-bottom");
                    j.find(".vc-row-translate-wrapper").css({
                        "padding-top": k,
                        "padding-bottom": C
                    }), void 0 !== j[0] && "" !== j && (j[0].style.setProperty("padding-top", "0px", "important"), j[0].style.setProperty("padding-bottom", "0px", "important"))
                }
                "" != _ && (j.addClass("ult-vc-hide-row"), j.attr("data-hide-row", _)), j.attr("data-rtl", b), j.prepend('<div class="upb_row_bg">' + z + "</div>"), J(i, j), (i = j).attr("data-row-effect-mobile-disable", h), "fadeout_row_value" == n && (i.addClass("vc-row-fade"), i.attr("data-fadeout-percentage", c)), i.css("background-image", ""), (i = i.find(".upb_row_bg")).attr("data-upb_br_animation", p);
                var M = (e = e.replace("url(data:image/svg+xml;base64,", "")).indexOf(";");
                e = e.substring(M + 1), i.attr("style", e), i.attr("data-bg-override", l), "browser_size" == l && i.parent().find(".upb-background-text-wrapper").addClass("full-browser-size");
                var I = function() {
                    var e, t, a, r;
                    if (t = i.parent(), "full" == l && (t = jQuery("body"), a = 0), "ex-full" == l && (t = jQuery("html"), a = 0), !isNaN(l)) {
                        for (var o = 0; o < l && "HTML" != t.prop("tagName"); o++) t = t.parent();
                        a = t.offset().left
                    }
                    if (wh = jQuery(window).height(), i.parent().outerHeight(), e = t.outerWidth(), i.css({
                            "min-width": e + "px"
                        }), r = i.offset().left, 1 == E() ? i.css({
                            right: -Math.abs(a - r) + "px"
                        }) : i.css({
                            left: -Math.abs(a - r) + "px"
                        }), "browser_size" == l) {
                        var s = i.parent().find(".upb-background-text").height();
                        s > wh && (wh = s), i.parent().css("height", wh + "px"), i.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                    }
                };
                I(), jQuery(window).load(function() {
                    I()
                }), jQuery(window).resize(function() {
                    I()
                })
            }), this
        }, jQuery.fn.ultimate_bg_color_shift = function() {
            return jQuery(this).each(function() {
                var i = jQuery(this),
                    l = jQuery(this).data("bg-override"),
                    e = jQuery(this).data("bg-color"),
                    t = i.data("fadeout"),
                    a = i.data("fadeout-percentage"),
                    r = i.data("parallax-content"),
                    o = i.data("parallax-content-sense"),
                    s = i.data("row-effect-mobile-disable"),
                    d = i.data("overlay"),
                    p = i.data("overlay-color"),
                    n = i.data("overlay-pattern"),
                    c = i.data("overlay-pattern-opacity"),
                    u = i.data("overlay-pattern-size"),
                    v = i.data("overlay-pattern-attachment"),
                    h = i.data("hide-row"),
                    _ = i.data("rtl"),
                    b = "",
                    g = "",
                    m = i.data("vc"),
                    f = i.data("theme-support"),
                    y = i.data("custom-vc-row"),
                    w = i.data("is_old_vc");
                if (void 0 !== y && "" !== y || (y = "wpb_row"), void 0 === m && (m = 0), void 0 === w && (w = !1), void 0 === f && (f = "disable"), i.data("multi-color-overlay") && (b = i.data("multi-color-overlay"), g = i.data("multi-color-overlay-opacity")), 1 == w || "enable" == f)
                    if (i.prev().is("p") || i.prev().is("style")) var x = i.prev().prev();
                    else x = i.prev();
                else x = i.prevAll("." + y + ":first");
                x.css("position", "relative");
                var j = x.attr("class"),
                    Q = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if (void 0 !== d && "true" === d.toString() && ("" != n && ("" != u && (u = "background-size:" + u + "px;"), void 0 !== v && "" != v && (overlay_pattern_attachment_css = "background-attachment:" + v + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + n + "); opacity:" + c + "; " + u + "; " + overlay_pattern_attachment_css + '"></div>'), "" != p && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + p + ';"></div>'), "" != b && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + b + '" style="opacity:' + g + ';"></div>'), Q = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == l) x.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), x.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(j);
                else;
                if ("" != h && (x.addClass("ult-vc-hide-row"), x.attr("data-hide-row", h)), x.attr("data-rtl", _), "parallax_content_value" == r) {
                    x.addClass("vc-row-translate"), x.wrapInner('<div class="vc-row-translate-wrapper ' + j + '"></div>'), x.attr("data-parallax-content-sense", o);
                    var z = x.css("padding-top"),
                        k = x.css("padding-bottom");
                    x.find(".vc-row-translate-wrapper").css({
                        "padding-top": z,
                        "padding-bottom": k
                    }), void 0 !== x[0] && "" !== x && (x[0].style.setProperty("padding-top", "0px", "important"), x[0].style.setProperty("padding-bottom", "0px", "important"))
                }
                if (x.prepend('<div class="upb_row_bg">' + Q + "</div>"), J(i, x), i.remove(), (i = x).attr("data-row-effect-mobile-disable", s), "fadeout_row_value" == t && (i.addClass("vc-row-fade"), i.attr("data-fadeout-percentage", a)), i.css("background-image", ""), (i = i.find(".upb_row_bg")).css({
                        background: e
                    }), i.attr("data-bg-override", l), "browser_size" == l && i.parent().find(".upb-background-text-wrapper").addClass("full-browser-size"), 0 !== i.length) {
                    var C = function() {
                        var e, t, a, r;
                        if (t = i.parent(), "full" == l && (t = jQuery("body"), a = 0), "ex-full" == l && (t = jQuery("html"), a = 0), !isNaN(l)) {
                            for (var o = 0; o < l && "HTML" != t.prop("tagName"); o++) t = t.parent();
                            a = t.offset().left
                        }
                        if (wh = jQuery(window).height(), i.parent().outerHeight(), e = t.outerWidth(), i.css({
                                "min-width": e + "px"
                            }), r = i.offset().left, 1 == E() ? i.css({
                                right: -Math.abs(a - r) + "px"
                            }) : i.css({
                                left: -Math.abs(a - r) + "px"
                            }), "browser_size" == l) {
                            var s = i.parent().find(".upb-background-text").height();
                            s > wh && (wh = s), i.parent().css("height", wh + "px"), i.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                        }
                    };
                    C(), jQuery(window).load(function() {
                        C()
                    }), jQuery(window).resize(function() {
                        C()
                    })
                }
            }), this
        }, jQuery.fn.ultimate_parallax_animation = function(i) {
            var l = jQuery(window).height(),
                d = function(e) {
                    return e.height()
                },
                e = jQuery(this),
                p = jQuery(window).scrollTop();

            function t() {
                var s = jQuery(window).scrollTop();
                e.each(function() {
                    if ("upb_fade_animation" == jQuery(this).data("upb_br_animation")) {
                        jQuery(this).offset().top;
                        var e = jQuery(this),
                            t = e.offset().top,
                            a = d(e);
                        if (t + a < s || s + l - 100 < t) return;
                        if (t + a - l < s) {
                            var r = (p - s) / l;
                            if ("parent" == i) {
                                var o = parseInt(jQuery(this).css("opacity"));
                                o += r / 2.3, jQuery(this).parents(".wpb_row").css({
                                    opacity: o
                                })
                            }
                            if ("self" == i) {
                                o = parseInt(jQuery(this).css("opacity"));
                                o += r / 2.3, jQuery(this).css({
                                    opacity: o
                                })
                            }
                        }
                        p = s
                    }
                })
            }
            jQuery(window).bind("scroll", t).resize(t), t()
        };
        var m = 0;
        jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift(), jQuery(".upb_no_bg").each(function(e, t) {
            var a = jQuery(t).attr("data-fadeout"),
                r = jQuery(t).data("fadeout-percentage"),
                o = jQuery(t).data("parallax-content"),
                s = jQuery(t).data("parallax-content-sense"),
                i = jQuery(t).data("row-effect-mobile-disable"),
                l = jQuery(t).data("custom-vc-row"),
                d = jQuery(t).data("vc"),
                p = jQuery(t).data("theme-support");
            if (void 0 !== l && "" !== l || (l = "wpb_row"), void 0 === d && (d = 0), void 0 === p && (p = "disable"), (d = parseFloat(d)) < 4.4 || "enable" == p)
                if (jQuery(t).prev().is("p") || jQuery(t).prev().is("style")) var n = jQuery(t).prev().prev();
                else n = jQuery(t).prev();
            else n = jQuery(t).prevAll("." + l + ":first");
            if (n.css("position", "relative"), void 0 === n[0]) return !1;
            if (n.attr("row-effect-mobile-disable", i), "fadeout_row_value" == a && (n.addClass("vc-row-fade"), n.data("fadeout-percentage", r)), "parallax_content_value" == o) {
                n.addClass("vc-row-translate"), n.attr("data-parallax-content-sense", s), n.wrapInner('<div class="vc-row-translate-wrapper"></div>');
                var c = n.css("padding-top"),
                    u = n.css("padding-bottom");
                n.find(".vc-row-translate-wrapper").css({
                    "padding-top": c,
                    "padding-bottom": u
                }), void 0 !== n[0] && "" !== n && (n[0].style.setProperty("padding-top", "0px", "important"), n[0].style.setProperty("padding-bottom", "0px", "important"))
            }
        }), jQuery(".upb_no_bg").remove();
        var e = function() {
            jQuery(".upb_row_bg").each(function() {
                var e, t, a = jQuery(this).data("bg-override"),
                    r = jQuery(this).data("theme-support"),
                    o = jQuery(this).data("row");
                if ((t = void 0 !== r && "enable" !== r ? jQuery(this).parents("." + o + ":first") : jQuery(this).parent()).addClass("vc_row-has-fill"), "browser_size" == a && (e = jQuery("html")), "ex-full" == a) e = jQuery("html");
                else if ("full" == a) e = jQuery("body");
                else if (!isNaN(a)) {
                    e = t;
                    for (var s = 0; s < a && !e.is("html"); s++) e = e.parent()
                }
                var i = parseInt(e.css("paddingLeft")) + parseInt(e.css("paddingRight")) + e.width(),
                    l = -(t.offset().left - e.offset().left);
                if (0 < l && (left = 0), 1 == E() ? jQuery(this).css({
                        width: i,
                        right: l
                    }) : jQuery(this).css({
                        width: i,
                        left: l
                    }), "browser_size" == a) {
                    e.width(), e.height(), t.width();
                    var d = t.height(),
                        p = t.find(".upb-background-text").height(),
                        n = jQuery(window).height();
                    if (d < p) var c = p;
                    else c = n;
                    t.css("min-height", c + "px"), t.find(".upb-background-text-wrapper").css("min-height", c + "px")
                }
            }), jQuery(".upb_video-bg").each(function(e, t) {
                var a, r, o = jQuery(this).data("bg-override"),
                    s = jQuery(this).attr("data-rtl"),
                    i = jQuery(this).data("theme-support"),
                    l = jQuery(this).data("row");
                if ("true" == (r = void 0 !== i && "enable" !== i ? jQuery(this).parents("." + l + ":first") : jQuery(this).parent()).attr("data-vc-full-width") || 1 == r.attr("data-vc-full-width") ? r.addClass("uvc-vc-full-width") : r.addClass("uvc-row"), "browser_size" == o) a = jQuery("html"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if ("ex-full" == o) a = jQuery("html"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if ("full" == o) a = jQuery("body"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if (isNaN(o) || 0 == o) a = r;
                else {
                    a = r;
                    for (var d = 1; d <= o && !a.is("html"); d++) a = a.parent()
                }
                parseInt(a.css("paddingLeft")), parseInt(a.css("paddingRight")), parseInt(a.css("marginLeft"));
                var p = a.outerWidth(),
                    n = p,
                    c = jQuery(this).offset().left,
                    u = jQuery(this).position().left,
                    v = a.offset().left - c;
                u < 0 && (v = u + v), 0 == e && (m = u), 0 < m && (v = m), 0 < v && (v = 0), void 0 === s || !0 !== s && "true" !== s ? jQuery(this).css({
                    width: p,
                    "min-width": p,
                    left: v
                }) : jQuery(this).css({
                    width: p,
                    "min-width": p,
                    right: v
                });
                jQuery(window).width();
                var h = jQuery(window).height();
                r.find("video").height();
                if ("browser_size" == o) var _ = r.find(".upb_video-text").height();
                else _ = r.height();
                p < 960 && (p = 16 / 9 * _ + p);
                pHeight = Math.ceil(p / (16 / 9)), children = jQuery(this).children(), children.removeClass("ult-make-full-height"), n < _ && children.addClass("ult-make-full-height");
                var b = jQuery(this).css("background-image");
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) void 0 !== b && "none" != b || (children.css({
                    "max-height": "auto",
                    height: "auto"
                }), r.css("min-height", "auto"));
                else if ("browser_size" == o) {
                    if (h < _) var g = _;
                    else g = h;
                    r.addClass("video-browser-size"), r.find(".upb-background-text-wrapper").addClass("full-browser-size"), r.css("min-height", g + "px"), 0 < r.find(".upb_video-text-wrapper").length && (r.find(".upb_video-text-wrapper").addClass("full-browser-size"), r.find(".upb_video-text-wrapper").css("min-height", g + "px"))
                }
            })
        };

        function t() {
            jQuery(".ult-vc-seperator").each(function(e, t) {
                var a = jQuery(this).data("full-width"),
                    r = jQuery(this).parent().data("rtl");
                if (void 0 === r && (r = "false"), void 0 === (o = jQuery(this).parent().find(".upb_row_bg").data("bg-override"))) var o = jQuery(this).parent().find(".upb_video-bg").data("bg-override");
                if (("ex-full" == o || "full" == o || "browser_size" == o) && 1 == a) {
                    var s = jQuery("html").width();
                    if (jQuery(this).hasClass("ult-rounded-split-seperator-wrapper")) {
                        var i = jQuery(this).data("border"),
                            l = jQuery(this).data("border-width");
                        void 0 !== i && "none" != i && "undefined" != i && (s -= l)
                    }
                    var d = jQuery(this).offset().left;
                    jQuery(this).find(".ult-main-seperator-inner").width(s), "true" == r.toString() ? jQuery(this).find(".ult-main-seperator-inner").css({
                        "margin-right": -d + "px"
                    }) : jQuery(this).find(".ult-main-seperator-inner").css({
                        "margin-left": -d + "px"
                    })
                }
            })
        }
        e(), jQuery(window).load(function() {
            e(), t()
        }), jQuery(window).resize(function() {
            e(), t()
        }), jQuery(document).ajaxComplete(function(e, t, a) {
            jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift()
        }), jQuery(".video-controls").click(function(e) {
            var t = jQuery(this).attr("data-action"),
                a = jQuery(this).parent().find(".upb_video-src");
            "pause" == t ? (jQuery(this).attr("data-action", "play"), a[0].play(), jQuery(this).html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this).attr("data-action", "pause"), a[0].pause(), jQuery(this).html('<i class="ult-vid-cntrlplay"></i>')), a.hasClass("enable-on-viewport") && a.addClass("override-controls")
        }), jQuery(".ult-vc-hide-row").each(function(e, t) {
            var a = jQuery(t).data("hide-row");
            "" != a && jQuery(t).addClass(a)
        }), t(), jQuery(".vcpb-animated").each(function(e, t) {
            var a = jQuery(t).data("animation-repeat");
            jQuery(this).css({
                "background-repeat": a
            });
            var r = jQuery(t).parent().attr("data-img-parallax-mobile-disable");
            if (r = void 0 === r ? "false" : r.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) o = "true";
            else var o = "false";
            if ("true" == o && "true" == r) var s = "true";
            else s = "false";
            if ("false" == s) {
                var i = 10;
                "" != jQuery(this).attr("data-parallax_sense") && (i = jQuery(this).attr("data-parallax_sense")), i = 100 - i;
                var l = jQuery(this).attr("data-bg-animation-type"),
                    d = jQuery(this).attr("data-bg-animation"),
                    p = 0,
                    n = l;
                setInterval(function(e) {
                    "right-animation" == d || "bottom-animation" == d ? p -= 1 : p += 1, jQuery(t).css("backgroundPosition", "h" == n ? p + "px 0" : "0 " + p + "px")
                }, i)
            }
        })
    })
}(jQuery);