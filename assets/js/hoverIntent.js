/*! This file is auto-generated */ ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(i) {
    "use strict";

    function u(e) {
        return "function" == typeof e
    }
    var r, v, a = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        f = 0,
        s = function(e) {
            r = e.pageX, v = e.pageY
        },
        p = function(e, t, n, o) {
            if (Math.sqrt((n.pX - r) * (n.pX - r) + (n.pY - v) * (n.pY - v)) < o.sensitivity) return t.off(n.event, s), delete n.timeoutId, n.isActive = !0, e.pageX = r, e.pageY = v, delete n.pX, delete n.pY, o.over.apply(t[0], [e]);
            n.pX = r, n.pY = v, n.timeoutId = setTimeout(function() {
                p(e, t, n, o)
            }, o.interval)
        };
    i.fn.hoverIntent = function(e, t, n) {
        var o = f++,
            d = i.extend({}, a);
        i.isPlainObject(e) ? (d = i.extend(d, e), u(d.out) || (d.out = d.over)) : d = u(t) ? i.extend(d, {
            over: e,
            out: t,
            selector: n
        }) : i.extend(d, {
            over: e,
            out: e,
            selector: t
        });
        t = function(e) {
            var u = i.extend({}, e),
                r = i(this),
                t = r.data("hoverIntent");
            t || r.data("hoverIntent", t = {});
            var v = t[o];
            v || (t[o] = v = {
                id: o
            }), v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId));
            t = v.event = "mousemove.hoverIntent.hoverIntent" + o;
            "mouseenter" === e.type ? v.isActive || (v.pX = u.pageX, v.pY = u.pageY, r.off(t, s).on(t, s), v.timeoutId = setTimeout(function() {
                p(u, r, v, d)
            }, d.interval)) : v.isActive && (r.off(t, s), v.timeoutId = setTimeout(function() {
                var e, t, n, o, i;
                e = u, t = r, n = v, o = d.out, (i = t.data("hoverIntent")) && delete i[n.id], o.apply(t[0], [e])
            }, d.timeout))
        };
        return this.on({
            "mouseenter.hoverIntent": t,
            "mouseleave.hoverIntent": t
        }, d.selector)
    }
});