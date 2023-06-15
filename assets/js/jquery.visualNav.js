/*!
 * Visual Navigation (visualNav) v2.5.2
 * https://github.com/Mottie/visualNav/wiki
 * by Rob Garrison (Mottie)
 * MIT licensed.
 */
;
(function(c) {
    c.visualNav = function(h, k) {
        var b, a = this;
        a.$el = c(h);
        a.$el.data("visualNav", a);
        a.init = function() {
            var d;
            a.initialized = !1;
            a.options = b = c.extend({}, c.visualNav.defaultOptions, k);
            a.winLoc = window.location;
            a.history = "replaceState" in window.history ? window.history : null;
            a.$win = c(window);
            a.$doc = c(document);
            a.$body = c("html, body");
            a.curHash = "";
            a.$lastItem = [null];
            a.namespace = ".visualNav";
            c.each(b.easing, function(a, d) {
                c.isFunction(c.easing[d]) || (b.easing[a] = "swing")
            });
            b.stopOnInteraction && a.$body.bind("scroll mousedown DOMMouseScroll mousewheel keyup ".split(" ").join(a.namespace +
                " "), function(b) {
                (0 < b.which || "mousedown" === b.type || "mousewheel" === b.type) && a.$body.stop()
            });
            a.$win.bind(["scroll", "resize", ""].join(a.namespace + " "), function() {
                a.throttle()
            });
            a.update();
            b.useHash && a.winLoc.hash && a.animate(a.winLoc.hash);
            a.findLocation();
            b.scrollOnInit ? (d = a.$el.find("." + b.selectedClass + (b.selectedAppliedTo === b.link ? "" : " " + b.link)), a.animate(d.attr(b.targetAttr) || d.attr("href"), !0)) : a.completed(!0)
        };
        a.update = function() {
            a.$content = c("." + b.contentClass);
            a.leftMargin = parseInt(a.$content.css("margin-left"),
                10);
            a.rightMargin = parseInt(a.$content.css("margin-right"), 10);
            var d, e = "." + b.externalLinks;
            a.$links = c(a.$el.find(b.selectedAppliedTo + (b.selectedAppliedTo === b.link ? "" : " " + b.link)).map(function(a, b) {
                d = c(b);
                return d.hasClass(e) || d.closest(e).length ? null : b
            }));
            e = "." + b.contentLinks;
            a.$links.add(c(e + "," + e + " a")).unbind("click.visualNav").bind("click.visualNav", function(d, e) {
                var l = c(this);
                a.animate(l.attr(b.targetAttr) || l.attr("href"), e);
                return !1
            });
            a.$items = b.selectedAppliedTo === b.link ? a.$links : c(a.$links.map(function() {
                return c(this).closest(b.selectedAppliedTo)[0]
            }));
            a.initialized && a.findLocation()
        };
        a.animate = function(d, e) {
            var f, g, l;
            g = c(d);
            "#" !== d && g.length && (f = c(d).eq(0).closest("." + b.contentClass), f.length && (g = f), g.length && (a.curHash = g[0].id || "", a.$curContent = g, a.initialized && "function" === typeof b.beforeAnimation && b.beforeAnimation(a, g), f = g.offset(), l = Math.min(f.top, a.$doc.height() - a.$win.height()) - b.offsetTop, g = "function" === typeof b.animationTime ? b.animationTime(Math.abs(a.$body.scrollTop() - l)) || 1200 : b.animationTime, a.$body.stop().animate({
                scrollLeft: Math.min(f.left,
                    a.$doc.width() - a.$win.width()) - a.leftMargin,
                scrollTop: l
            }, {
                queue: !1,
                duration: a.initialized ? g : 0,
                easing: b.easing[0],
                specialEasing: {
                    scrollLeft: b.easing[0] || "swing",
                    scrollTop: b.easing[1] || b.easing[0] || "swing"
                },
                complete: function() {
                    a.completed(e)
                }
            })))
        };
        a.throttle = function() {
            a.flag || (a.flag = !0, a.timer = setTimeout(function() {
                a.flag = !1;
                a.findLocation()
            }, 100))
        };
        a.updateHash = function() {
            var d, e;
            e = b.selectedAppliedTo === b.link ? a.$curItem.attr(b.targetAttr) || a.$curItem.attr("href") : a.$curItem.find(b.link).attr(b.targetAttr) ||
                a.$curItem.find(b.link).attr("href");
            var f = (e || "").replace(/^#/, "");
            e && "" !== f && f !== a.curHash && (e = c("#" + f), a.curHash = f, e.length && (e.attr("id", ""), d = c("<div></div>").css({
                position: "absolute",
                visibility: "hidden",
                top: c(document).scrollTop() + "px"
            }).attr("id", f).appendTo(document.body)), a.setHash("#" + f), e.length && (d.remove(), e.attr("id", f)))
        };
        a.setHash = function(b) {
            a.winLoc.hash !== b && "#" !== b && (a.winLoc.replace ? null !== a.history ? a.history.replaceState({}, "", b) : a.winLoc.replace(b) : a.winLoc.hash = b)
        };
        a.completed =
            function(c) {
                b.useHash && a.setHash("#" + a.curHash);
                a.initialized ? "function" === typeof b.complete && b.complete(a, a.$curContent) : c && ("function" === typeof b.initialized && b.initialized(a, a.$curContent), a.initialized = !0);
                a.flag = !1
            };
        a.findLocation = function() {
            var d, e, f, g, l, h, k, p, m = a.$win.width(),
                q = a.$win.scrollLeft(),
                r = a.$win.scrollTop(),
                t = q + m,
                n = r + a.$win.height(),
                u = a.$doc.height();
            a.$items.removeClass(b.inViewClass);
            b.fitContent && a.$content.width(m - a.leftMargin - a.rightMargin);
            a.$links.each(function(m) {
                g = c(this).attr(b.targetAttr);
                d = "#" === g || 1 >= g.length ? "" : c(g);
                d.length && (f = Math.ceil(d.offset().top), e = Math.ceil(d.offset().left), h = d.outerHeight(), l = f + h + b.bottomMargin, k = d.outerWidth(), p = e + k, f < n && (f + h - b.bottomMargin > r || l > n) && e < t && (e + k - b.bottomMargin > q || p > t) && a.$items.eq(m).addClass(b.inViewClass))
            });
            g = n + b.bottomMargin >= u ? ":last" : ":first";
            a.$items.removeClass(b.selectedClass);
            a.$curItem = a.$items.filter("." + b.inViewClass + g).addClass(b.selectedClass);
            a.$curItem[0] !== a.$lastItem[0] && (a.$lastItem = a.$curItem, a.$content.removeClass(b.currentContent),
                g = "." + b.selectedClass + (b.selectedAppliedTo === b.link ? "" : " " + b.link), d = a.$el.find(g).attr(b.targetAttr), a.$curContent = c(d).closest("." + b.contentClass).addClass(b.currentContent), a.initialized && "function" === typeof b.changed && b.changed(a, a.$curContent));
            b.useHash && a.initialized && a.updateHash()
        };
        a.init()
    };
    c.visualNav.defaultOptions = {
        link: "a",
        targetAttr: "href",
        selectedAppliedTo: "li",
        contentClass: "content",
        contentLinks: "visualNav",
        externalLinks: "external",
        useHash: !0,
        inViewClass: "inView",
        selectedClass: "selected",
        currentContent: "current",
        bottomMargin: 100,
        fitContent: !1,
        offsetTop: 0,
        scrollOnInit: !1,
        animationTime: 1200,
        stopOnInteraction: !0,
        easing: ["swing", "swing"],
        initialized: null,
        beforeAnimation: null,
        complete: null,
        changed: null
    };
    c.fn.visualNav = function(h) {
        return this.each(function() {
            var k = c(this).data("visualNav");
            (typeof h).match("object|undefined") ? k ? k.update() : new c.visualNav(this, h) : "string" === typeof h && /^(#|\.)/.test(h) && k.animate(h)
        })
    };
    c.fn.getvisualNav = function() {
        return this.data("visualNav")
    }
})(jQuery);