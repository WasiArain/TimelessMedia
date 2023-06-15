jQuery(document).ready(function(p) {
    var u = "",
        m = "",
        v = "",
        h = "",
        b = "";
    jQuery(".ult-responsive").each(function(e, a) {
        var t = jQuery(this),
            i = t.attr("data-responsive-json-new"),
            r = t.data("ultimate-target"),
            s = "",
            d = "",
            n = "",
            l = "",
            c = "",
            o = "";
        void 0 === i && null == i || p.each(p.parseJSON(i), function(e, a) {
            var i = e;
            if (void 0 !== a && null != a) {
                var t = a.split(";");
                jQuery.each(t, function(e, a) {
                    if (void 0 !== a || null != a) {
                        var t = a.split(":");
                        switch (t[0]) {
                            case "large_screen":
                                s += i + ":" + t[1] + ";";
                                break;
                            case "desktop":
                                d += i + ":" + t[1] + ";";
                                break;
                            case "tablet":
                                n += i + ":" + t[1] + ";";
                                break;
                            case "tablet_portrait":
                                l += i + ":" + t[1] + ";";
                                break;
                            case "mobile_landscape":
                                c += i + ":" + t[1] + ";";
                                break;
                            case "mobile":
                                o += i + ":" + t[1] + ";"
                        }
                    }
                })
            }
        }), "" != o && (b += r + "{" + o + "}"), "" != c && (h += r + "{" + c + "}"), "" != l && (v += r + "{" + l + "}"), "" != n && (m += r + "{" + n + "}"), "" != d && (u += r + "{" + d + "}"), "" != s && r + "{" + s + "}"
    });
    var e = "<style>/** Ultimate: Media Responsive **/ ";
    e += u, e += "@media (max-width: 1199px) { " + m + "}", e += "@media (max-width: 991px)  { " + v + "}", e += "@media (max-width: 767px)  { " + h + "}", e += "@media (max-width: 479px)  { " + b + "}", e += "/** Ultimate: Media Responsive - **/</style>", jQuery("head").append(e)
});