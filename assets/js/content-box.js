! function(m, b, t) {
    function r() {
        m(".ult-content-box").each(function(o, r) {
            var n = m(r).css("background-color") || "",
                a = m(r).data("border_color") || "transparent",
                t = m(r).css("box-shadow") || "",
                i = m(r).data("hover_bg_color") || m(r).css("background-color"),
                c = m(r).data("hover_border_color") || "transparent",
                s = m(r).data("hover_box_shadow") || m(r).css("box-shadow");
            m(r).hover(function() {
                m(r).css("background-color", i), m(r).css("border-color", c), m(r).css("box-shadow", s)
            }, function() {
                m(r).css("background-color", n), m(r).css("border-color", a), m(r).css("box-shadow", t)
            });
            var e = {},
                l = m(r).data("responsive_margins");
            void 0 !== l && null != l && (e = v(l));
            var u = {},
                d = m(r).data("normal_margins");
            u = void 0 !== d && null != d ? v(d) : function(o) {
                var r = {};
                r["margin-left"] = f(m(o).css("margin-left")), r["margin-right"] = f(m(o).css("margin-right")), r["margin-top"] = f(m(o).css("margin-top")), r["margin-bottom"] = f(m(o).css("margin-bottom"));
                var n = "";
                return m.each(r, function(o, r) {
                    void 0 !== r && null != r && (n += o + ":" + r + "px;")
                }), m(o).attr("data-normal_margins", n), r
            }(r);
            var g = m(b).width() || "";
            "" != g && h(768 <= g ? u : e, r)
        })
    }

    function f(o) {
        var r;
        return void 0 !== o && null != o && (r = o.split("px"), r = parseInt(r[0])), r
    }

    function v(o) {
        var a = {},
            r = o.split(";");
        return void 0 !== r && null != r && m.each(r, function(o, r) {
            if (typeof r != t && null != r) {
                var n = r.split(":");
                if (typeof n[0] != t && null != n[0] && typeof n[1] != t && null != n[1]) switch (n[0]) {
                    case "margin":
                        a.margin = n[1];
                        break;
                    case "margin-left":
                        a["margin-left"] = n[1];
                        break;
                    case "margin-right":
                        a["margin-right"] = n[1];
                        break;
                    case "margin-top":
                        a["margin-top"] = n[1];
                        break;
                    case "margin-bottom":
                        a["margin-bottom"] = n[1]
                }
            }
        }), a
    }

    function h(o, n) {
        m.isEmptyObject(o) || m.each(o, function(o, r) {
            void 0 !== r && null != r && m(n).css(o, r)
        })
    }
    jQuery(b).load(function(o) {
        r()
    }), jQuery(b).resize(function(o) {
        r()
    }), jQuery(document).ready(function(o) {
        r()
    })
}(jQuery, window);