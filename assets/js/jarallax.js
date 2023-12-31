/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.2
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(a) {
    "use strict";

    function l() {
        j = a.innerWidth || document.documentElement.clientWidth, k = a.innerHeight || document.documentElement.clientHeight
    }

    function o(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c) : a.attachEvent("on" + b, function() {
            c.call(a)
        })
    }

    function p(b) {
        a.requestAnimationFrame(function() {
            "scroll" !== b.type && l();
            for (var a = 0, c = m.length; a < c; a++) "scroll" !== b.type && (m[a].coverImage(), m[a].clipContainer()), m[a].onScroll()
        })
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), a.requestAnimationFrame || ! function() {
        for (var b = ["webkit", "moz"], c = 0; c < b.length && !a.requestAnimationFrame; ++c) {
            var d = b[c];
            a.requestAnimationFrame = a[d + "RequestAnimationFrame"], a.cancelAnimationFrame = a[d + "CancelAnimationFrame"] || a[d + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(a.navigator.userAgent) || !a.requestAnimationFrame || !a.cancelAnimationFrame) {
            var e = 0;
            a.requestAnimationFrame = function(a) {
                var b = Date.now(),
                    c = Math.max(e + 16, b);
                return setTimeout(function() {
                    a(e = c)
                }, c - b)
            }, a.cancelAnimationFrame = clearTimeout
        }
    }();
    var j, k, b = function() {
            if (!a.getComputedStyle) return !1;
            var c, b = document.createElement("p"),
                d = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            (document.body || document.documentElement).insertBefore(b, null);
            for (var e in d) "undefined" != typeof b.style[e] && (b.style[e] = "translate3d(1px,1px,1px)", c = a.getComputedStyle(b).getPropertyValue(d[e]));
            return (document.body || document.documentElement).removeChild(b), "undefined" != typeof c && c.length > 0 && "none" !== c
        }(),
        c = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        d = /iPad|iPhone|iPod/.test(navigator.userAgent) && !a.MSStream,
        e = !!a.opera,
        f = /Edge\/\d+/.test(navigator.userAgent),
        g = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
        h = !!Function("/*@cc_on return document.documentMode===10@*/")(),
        i = document.all && !a.atob;
    l();
    var m = [],
        n = function() {
            function b(b, i) {
                var k, j = this;
                if (j.$item = b, j.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgWidth: null,
                        imgHeight: null,
                        enableTransform: !0,
                        elementInViewport: null,
                        zIndex: -100,
                        noAndroid: !1,
                        noIos: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    }, k = JSON.parse(j.$item.getAttribute("data-jarallax") || "{}"), j.options = j.extend({}, j.defaults, k, i), !(c && j.options.noAndroid || d && j.options.noIos)) {
                    j.options.speed = Math.min(2, Math.max(-1, parseFloat(j.options.speed)));
                    var l = j.options.elementInViewport;
                    l && "object" == typeof l && "undefined" != typeof l.length && (l = l[0]), !l instanceof Element && (l = null), j.options.elementInViewport = l, j.instanceID = a++, j.image = {
                        src: j.options.imgSrc || null,
                        $container: null,
                        $item: null,
                        width: j.options.imgWidth || null,
                        height: j.options.imgHeight || null,
                        useImgTag: d || c || e || g || h || f
                    }, j.initImg() && j.init()
                }
            }
            var a = 0;
            return b
        }();
    n.prototype.css = function(b, c) {
        if ("string" == typeof c) return a.getComputedStyle ? a.getComputedStyle(b).getPropertyValue(c) : b.style[c];
        c.transform && (c.WebkitTransform = c.MozTransform = c.transform);
        for (var d in c) b.style[d] = c[d];
        return b
    }, n.prototype.extend = function(a) {
        a = a || {};
        for (var b = 1; b < arguments.length; b++)
            if (arguments[b])
                for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
        return a
    }, n.prototype.initImg = function() {
        var a = this;
        return null === a.image.src && (a.image.src = a.css(a.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!a.image.src || "none" === a.image.src)
    }, n.prototype.init = function() {
        function g() {
            a.coverImage(), a.clipContainer(), a.onScroll(!0), a.$item.setAttribute("data-jarallax-original-styles", a.$item.getAttribute("style")), a.options.onInit && a.options.onInit.call(a), setTimeout(function() {
                a.$item && a.css(a.$item, {
                    "background-image": "none",
                    "background-attachment": "scroll",
                    "background-size": "auto"
                })
            }, 0)
        }
        var a = this,
            c = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
            },
            d = {
                position: "fixed"
            };
        a.image.$container = document.createElement("div"), a.css(a.image.$container, c), a.css(a.image.$container, {
            visibility: "hidden",
            "z-index": a.options.zIndex
        }), a.image.$container.setAttribute("id", "jarallax-container-" + a.instanceID), a.$item.appendChild(a.image.$container), a.image.useImgTag && b && a.options.enableTransform ? (a.image.$item = document.createElement("img"), a.image.$item.setAttribute("src", a.image.src), d = a.extend({
            "max-width": "none"
        }, c, d)) : (a.image.$item = document.createElement("div"), d = a.extend({
            "background-position": "50% 50%",
            "background-size": "100% auto",
            "background-repeat": "no-repeat no-repeat",
            "background-image": 'url("' + a.image.src + '")'
        }, c, d)), i && (d.backgroundAttachment = "fixed"), a.parentWithTransform = 0;
        for (var e = a.$item; null !== e && e !== document && 0 === a.parentWithTransform;) {
            var f = a.css(e, "-webkit-transform") || a.css(e, "-moz-transform") || a.css(e, "transform");
            f && "none" !== f && (a.parentWithTransform = 1, a.css(a.image.$container, {
                transform: "translateX(0) translateY(0)"
            })), e = e.parentNode
        }
        a.css(a.image.$item, d), a.image.$container.appendChild(a.image.$item), a.image.width && a.image.height ? g() : a.getImageSize(a.image.src, function(b, c) {
            a.image.width = b, a.image.height = c, g()
        }), m.push(a)
    }, n.prototype.destroy = function() {
        for (var a = this, b = 0, c = m.length; b < c; b++)
            if (m[b].instanceID === a.instanceID) {
                m.splice(b, 1);
                break
            }
        var d = a.$item.getAttribute("data-jarallax-original-styles");
        a.$item.removeAttribute("data-jarallax-original-styles"), "null" === d ? a.$item.removeAttribute("style") : a.$item.setAttribute("style", d), a.$clipStyles && a.$clipStyles.parentNode.removeChild(a.$clipStyles), a.image.$container.parentNode.removeChild(a.image.$container), a.options.onDestroy && a.options.onDestroy.call(a), delete a.$item.jarallax;
        for (var e in a) delete a[e]
    }, n.prototype.getImageSize = function(a, b) {
        if (a && b) {
            var c = new Image;
            c.onload = function() {
                b(c.width, c.height)
            }, c.src = a
        }
    }, n.prototype.clipContainer = function() {
        if (!i) {
            var a = this,
                b = a.image.$container.getBoundingClientRect(),
                c = b.width,
                d = b.height;
            if (!a.$clipStyles) {
                a.$clipStyles = document.createElement("style"), a.$clipStyles.setAttribute("type", "text/css"), a.$clipStyles.setAttribute("id", "#jarallax-clip-" + a.instanceID);
                var e = document.head || document.getElementsByTagName("head")[0];
                e.appendChild(a.$clipStyles)
            }
            var f = ["#jarallax-container-" + a.instanceID + " {", "   clip: rect(0 " + c + "px " + d + "px 0);", "   clip: rect(0, " + c + "px, " + d + "px, 0);", "}"].join("\n");
            a.$clipStyles.styleSheet ? a.$clipStyles.styleSheet.cssText = f : a.$clipStyles.innerHTML = f
        }
    }, n.prototype.coverImage = function() {
        var a = this;
        if (a.image.width && a.image.height) {
            var c = a.image.$container.getBoundingClientRect(),
                d = c.width,
                e = c.height,
                f = c.left,
                g = a.image.width,
                h = a.image.height,
                i = a.options.speed,
                j = "scroll" === a.options.type || "scroll-opacity" === a.options.type,
                l = 0,
                m = 0,
                n = e,
                o = 0,
                p = 0;
            j && (l = i * (e + k) / 2, (i < 0 || i > 1) && (l = i * Math.max(e, k) / 2), i < 0 || i > 1 ? n = Math.max(e, k) + 2 * Math.abs(l) : n += Math.abs(k - e) * (1 - i)), m = n * g / h, m < d && (m = d, n = m * h / g), a.bgPosVerticalCenter = 0, !(j && n < k) || b && a.options.enableTransform || (a.bgPosVerticalCenter = (k - n) / 2, n = k), j ? (o = f + (d - m) / 2, p = (k - n) / 2) : (o = (d - m) / 2, p = (e - n) / 2), b && a.options.enableTransform && a.parentWithTransform && (o -= f), a.parallaxScrollDistance = l, a.css(a.image.$item, {
                width: m + "px",
                height: n + "px",
                marginLeft: o + "px",
                marginTop: p + "px"
            }), a.options.onCoverImage && a.options.onCoverImage.call(a)
        }
    }, n.prototype.isVisible = function() {
        return this.isElementInViewport || !1
    }, n.prototype.onScroll = function(a) {
        var c = this;
        if (c.image.width && c.image.height) {
            var d = c.$item.getBoundingClientRect(),
                e = d.top,
                f = d.height,
                g = {
                    position: "absolute",
                    visibility: "visible",
                    backgroundPosition: "50% 50%"
                },
                h = d;
            if (c.options.elementInViewport && (h = c.options.elementInViewport.getBoundingClientRect()), c.isElementInViewport = h.bottom >= 0 && h.right >= 0 && h.top <= k && h.left <= j, a || c.isElementInViewport) {
                var l = Math.max(0, e),
                    m = Math.max(0, f + e),
                    n = Math.max(0, -e),
                    o = Math.max(0, e + f - k),
                    p = Math.max(0, f - (e + f - k)),
                    q = Math.max(0, -e + k - f),
                    r = 1 - 2 * (k - e) / (k + f),
                    s = 1;
                if (f < k ? s = 1 - (n || o) / f : m <= k ? s = m / k : p <= k && (s = p / k), "opacity" !== c.options.type && "scale-opacity" !== c.options.type && "scroll-opacity" !== c.options.type || (g.transform = "translate3d(0, 0, 0)", g.opacity = s), "scale" === c.options.type || "scale-opacity" === c.options.type) {
                    var t = 1;
                    c.options.speed < 0 ? t -= c.options.speed * s : t += c.options.speed * (1 - s), g.transform = "scale(" + t + ") translate3d(0, 0, 0)"
                }
                if ("scroll" === c.options.type || "scroll-opacity" === c.options.type) {
                    var u = c.parallaxScrollDistance * r;
                    b && c.options.enableTransform ? (c.parentWithTransform && (u -= e), g.transform = "translate3d(0, " + u + "px, 0)") : c.image.useImgTag ? g.top = u + "px" : (c.bgPosVerticalCenter && (u += c.bgPosVerticalCenter), g.backgroundPosition = "50% " + u + "px"), g.position = i ? "absolute" : "fixed"
                }
                c.css(c.image.$item, g), c.options.onScroll && c.options.onScroll.call(c, {
                    section: d,
                    beforeTop: l,
                    beforeTopEnd: m,
                    afterTop: n,
                    beforeBottom: o,
                    beforeBottomEnd: p,
                    afterBottom: q,
                    visiblePercent: s,
                    fromViewportCenter: r
                })
            }
        }
    }, o(a, "scroll", p), o(a, "resize", p), o(a, "orientationchange", p), o(a, "load", p);
    var q = function(a) {
        ("object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) && (a = [a]);
        var f, b = arguments[1],
            c = Array.prototype.slice.call(arguments, 2),
            d = a.length,
            e = 0;
        for (e; e < d; e++)
            if ("object" == typeof b || "undefined" == typeof b ? a[e].jarallax || (a[e].jarallax = new n(a[e], b)) : a[e].jarallax && (f = a[e].jarallax[b].apply(a[e].jarallax, c)), "undefined" != typeof f) return f;
        return a
    };
    q.constructor = n;
    var r = a.jarallax;
    if (a.jarallax = q, a.jarallax.noConflict = function() {
            return a.jarallax = r, this
        }, "undefined" != typeof jQuery) {
        var s = function() {
            var b = arguments || [];
            Array.prototype.unshift.call(b, this);
            var c = q.apply(a, b);
            return "object" != typeof c ? c : this
        };
        s.constructor = n;
        var t = jQuery.fn.jarallax;
        jQuery.fn.jarallax = s, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = t, this
        }
    }
    o(a, "DOMContentLoaded", function() {
        q(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
    })
}(window);