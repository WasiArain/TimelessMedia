/*!/wp-content/themes/vivagh/framework/js/jquery.debouncedresize.js*/ ! function(n, r) {
    var t = function(n, r, t) {
        var e;
        return function() {
            function i() {
                t || n.apply(u, a), e = null
            }
            var u = this,
                a = arguments;
            e ? clearTimeout(e) : t && n.apply(u, a), e = setTimeout(i, r || 100)
        }
    };
    jQuery.fn[r] = function(n) {
        return n ? this.bind("resize", t(n)) : this.trigger(r)
    }
}(jQuery, "smartresize");
(function(e) {
    var t = e.event,
        n, r;
    n = t.special.debouncedresize = {
        setup: function() {
            e(this).on("resize", n.handler)
        },
        teardown: function() {
            e(this).off("resize", n.handler)
        },
        handler: function(e, i) {
            var s = this,
                o = arguments,
                u = function() {
                    e.type = "debouncedresize";
                    t.dispatch.apply(s, o)
                };
            if (r) {
                clearTimeout(r)
            }
            i ? u() : r = setTimeout(u, n.threshold)
        },
        threshold: 150
    }
})(jQuery);