window.bsfmodernizr = function(t, e, o) {
        function n(t) {
            d.cssText = t
        }

        function a(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            for (var n in t) {
                var r = t[n];
                if (!~("" + r).indexOf("-") && d[r] !== o) return "pfx" != e || r
            }
            return !1
        }

        function r(t, e, n) {
            var r = t.charAt(0).toUpperCase() + t.slice(1),
                i = (t + " " + p.join(r + " ") + r).split(" ");
            return a(e, "string") || a(e, "undefined") ? s(i, e) : function(t, e, n) {
                for (var r in t) {
                    var i = e[t[r]];
                    if (i !== o) return !1 === n ? t[r] : a(i, "function") ? i.bind(n || e) : i
                }
                return !1
            }(i = (t + " " + g.join(r + " ") + r).split(" "), e, n)
        }
        var i, l, u = {},
            c = e.documentElement,
            f = e.createElement("bsfmodernizr"),
            d = f.style,
            h = "Webkit Moz O ms",
            p = h.split(" "),
            g = h.toLowerCase().split(" "),
            v = {},
            m = [],
            y = m.slice,
            x = {}.hasOwnProperty;
        for (var b in l = a(x, "undefined") || a(x.call, "undefined") ? function(t, e) {
                return e in t && a(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return x.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(r) {
                var i = this;
                if ("function" != typeof i) throw new TypeError;
                var o = y.call(arguments, 1),
                    a = function() {
                        if (this instanceof a) {
                            var t = function() {};
                            t.prototype = i.prototype;
                            var e = new t,
                                n = i.apply(e, o.concat(y.call(arguments)));
                            return Object(n) === n ? n : e
                        }
                        return i.apply(r, o.concat(y.call(arguments)))
                    };
                return a
            }), v.csstransitions = function() {
                return r("transition")
            }, v) l(v, b) && (i = b.toLowerCase(), u[i] = v[b](), m.push((u[i] ? "" : "no-") + i));
        return u.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) l(t, n) && u.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), u[t] !== o) return u;
                    e = "function" == typeof e ? e() : e, c.className += " " + (e ? "" : "no-") + t, u[t] = e
                }
                return u
            }, n(""), f = null,
            function(t, l) {
                function u() {
                    var t = p.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function c(t) {
                    var e = s[t[r]];
                    return e || (e = {}, a++, t[r] = a, s[a] = e), e
                }

                function f(t, e, n) {
                    return e || (e = l), h ? e.createElement(t) : (n || (n = c(e)), !(r = n.cache[t] ? n.cache[t].cloneNode() : o.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || i.test(t) || r.tagUrn ? r : n.frag.appendChild(r));
                    var r
                }

                function e(t) {
                    t || (t = l);
                    var e, n, r, i, o, a, s = c(t);
                    return p.shivCSS && !d && !s.hasCSS && (s.hasCSS = (i = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", o = (r = t).createElement("p"), a = r.getElementsByTagName("head")[0] || r.documentElement, o.innerHTML = "x<style>" + i + "</style>", !!a.insertBefore(o.lastChild, a.firstChild))), h || (e = t, (n = s).cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function(t) {
                        return p.shivMethods ? f(t, e, n) : n.createElem(t)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + u().join().replace(/[\w\-]+/g, function(t) {
                        return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(p, n.frag)), t
                }
                var d, h, n = t.html5 || {},
                    i = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    r = "_html5shiv",
                    a = 0,
                    s = {};
                ! function() {
                    try {
                        var t = l.createElement("a");
                        t.innerHTML = "<xyz></xyz>", d = "hidden" in t, h = 1 == t.childNodes.length || function() {
                            l.createElement("a");
                            var t = l.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        h = d = !0
                    }
                }();
                var p = {
                    elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== n.shivCSS,
                    supportsUnknownElements: h,
                    shivMethods: !1 !== n.shivMethods,
                    type: "default",
                    shivDocument: e,
                    createElement: f,
                    createDocumentFragment: function(t, e) {
                        if (t || (t = l), h) return t.createDocumentFragment();
                        for (var n = (e = e || c(t)).frag.cloneNode(), r = 0, i = u(), o = i.length; r < o; r++) n.createElement(i[r]);
                        return n
                    }
                };
                t.html5 = p, e(l)
            }(this, e), u._version = "2.7.1", u._domPrefixes = g, u._cssomPrefixes = p, u.testProp = function(t) {
                return s([t])
            }, u.testAllProps = r, u.prefixed = function(t, e, n) {
                return e ? r(t, e, n) : r(t, "pfx")
            }, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + m.join(" "), u
    }(0, this.document),
    function(t, d, e) {
        function f(t) {
            return "[object Function]" == o.call(t)
        }

        function h(t) {
            return "string" == typeof t
        }

        function p() {}

        function g(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function v() {
            var t = b.shift();
            w = 1, t ? t.t ? y(function() {
                ("c" == t.t ? m.injectCss : m.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), v()) : w = 0
        }

        function n(t, e, n, r, i) {
            return w = 0, e = e || "j", h(t) ? function(n, r, t, e, i, o, a) {
                function s(t) {
                    if (!u && g(l.readyState) && (f.r = u = 1, !w && v(), l.onload = l.onreadystatechange = null, t))
                        for (var e in "img" != n && y(function() {
                                S.removeChild(l)
                            }, 50), T[r]) T[r].hasOwnProperty(e) && T[r][e].onload()
                }
                a = a || m.errorTimeout;
                var l = d.createElement(n),
                    u = 0,
                    c = 0,
                    f = {
                        t: t,
                        s: r,
                        e: i,
                        a: o,
                        x: a
                    };
                1 === T[r] && (c = 1, T[r] = []), "object" == n ? l.data = r : (l.src = r, l.type = n), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    s.call(this, c)
                }, b.splice(e, 0, f), "img" != n && (c || 2 === T[r] ? (S.insertBefore(l, C ? null : x), y(s, a)) : T[r].push(l))
            }("c" == e ? u : l, t, e, this.i++, n, r, i) : (b.splice(this.i++, 0, t), 1 == b.length && v()), this
        }

        function s() {
            var t = m;
            return t.loader = {
                load: n,
                i: 0
            }, t
        }
        var r, m, i = d.documentElement,
            y = t.setTimeout,
            x = d.getElementsByTagName("script")[0],
            o = {}.toString,
            b = [],
            w = 0,
            a = "MozAppearance" in i.style,
            C = a && !!d.createRange().compareNode,
            S = C ? i : x.parentNode,
            l = (i = t.opera && "[object Opera]" == o.call(t.opera), i = !!d.attachEvent && !i, a ? "object" : i ? "script" : "img"),
            u = i ? "script" : l,
            k = Array.isArray || function(t) {
                return "[object Array]" == o.call(t)
            },
            E = [],
            T = {},
            M = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (m = function(t) {
            function c(t, e, n, r, i) {
                var o = function(t) {
                        t = t.split("!");
                        var e, n, r, i = E.length,
                            o = t.pop(),
                            a = t.length;
                        for (o = {
                                url: o,
                                origUrl: o,
                                prefixes: t
                            }, n = 0; n < a; n++) r = t[n].split("="), (e = M[r.shift()]) && (o = e(o, r));
                        for (n = 0; n < i; n++) o = E[n](o);
                        return o
                    }(t),
                    a = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (e && (e = f(e) ? e : e[t] || e[r] || e[t.split("/").pop().split("?")[0]]), o.instead ? o.instead(t, e, n, r, i) : (T[o.url] ? o.noexec = !0 : T[o.url] = 1, n.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : void 0, o.noexec, o.attrs, o.timeout), (f(e) || f(a)) && n.load(function() {
                    s(), e && e(o.origUrl, i, r), a && a(o.origUrl, i, r), T[o.url] = 2
                })))
            }

            function e(t, e) {
                function n(n, t) {
                    if (n) {
                        if (h(n)) t || (s = function() {
                            var t = [].slice.call(arguments);
                            l.apply(this, t), u()
                        }), c(n, s, e, 0, o);
                        else if (Object(n) === n)
                            for (i in r = function() {
                                    var t, e = 0;
                                    for (t in n) n.hasOwnProperty(t) && e++;
                                    return e
                                }(), n) n.hasOwnProperty(i) && (!t && !--r && (f(s) ? s = function() {
                                var t = [].slice.call(arguments);
                                l.apply(this, t), u()
                            } : s[i] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), u()
                                }
                            }(l[i])), c(n[i], s, e, i, o))
                    } else !t && u()
                }
                var r, i, o = !!t.test,
                    a = t.load || t.both,
                    s = t.callback || p,
                    l = s,
                    u = t.complete || p;
                n(o ? t.yep : t.nope, !!a), a && n(a)
            }
            var n, r, i = this.yepnope.loader;
            if (h(t)) c(t, 0, i, 0);
            else if (k(t))
                for (n = 0; n < t.length; n++) h(r = t[n]) ? c(r, 0, i, 0) : k(r) ? m(r) : Object(r) === r && e(r, i);
            else Object(t) === t && e(t, i)
        }).addPrefix = function(t, e) {
            M[t] = e
        }, m.addFilter = function(t) {
            E.push(t)
        }, m.errorTimeout = 1e4, null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded", r = function() {
            d.removeEventListener("DOMContentLoaded", r, 0), d.readyState = "complete"
        }, 0)), t.yepnope = s(), t.yepnope.executeStack = v, t.yepnope.injectJs = function(t, e, n, r, i, o) {
            var a, s, l = d.createElement("script");
            r = r || m.errorTimeout;
            for (s in l.src = t, n) l.setAttribute(s, n[s]);
            e = o ? v : e || p, l.onreadystatechange = l.onload = function() {
                !a && g(l.readyState) && (a = 1, e(), l.onload = l.onreadystatechange = null)
            }, y(function() {
                a || e(a = 1)
            }, r), i ? l.onload() : x.parentNode.insertBefore(l, x)
        }, t.yepnope.injectCss = function(t, e, n, r, i, o) {
            var a;
            r = d.createElement("link"), e = o ? v : e || p;
            for (a in r.href = t, r.rel = "stylesheet", r.type = "text/css", n) r.setAttribute(a, n[a]);
            i || (x.parentNode.insertBefore(r, x), y(e, 0))
        }
    }(this, document), bsfmodernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t) {
        "use strict";

        function n(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }
        var r, i, o;

        function e(t, e) {
            (r(t, e) ? o : i)(t, e)
        }
        o = "classList" in document.documentElement ? (r = function(t, e) {
            return t.classList.contains(e)
        }, i = function(t, e) {
            t.classList.add(e)
        }, function(t, e) {
            t.classList.remove(e)
        }) : (r = function(t, e) {
            return n(e).test(t.className)
        }, i = function(t, e) {
            r(t, e) || (t.className = t.className + " " + e)
        }, function(t, e) {
            t.className = t.className.replace(n(e), " ")
        });
        var a = {
            hasClass: r,
            addClass: i,
            removeClass: o,
            toggleClass: e,
            has: r,
            add: i,
            remove: o,
            toggle: e
        };
        "function" == typeof define && define.amd ? define(a) : t.classie = a
    }(window);
var Froogaloop = function() {
    function e(t) {
        return new e.fn.init(t)
    }

    function a(t, e, n) {
        if (!n.contentWindow.postMessage) return !1;
        var r = n.getAttribute("src").split("?")[0];
        t = JSON.stringify({
            method: t,
            value: e
        });
        "//" === r.substr(0, 2) && (r = window.location.protocol + r), n.contentWindow.postMessage(t, r)
    }

    function t(t) {
        var e, n;
        try {
            n = (e = JSON.parse(t.data)).event || e.method
        } catch (t) {}
        if ("ready" == n && !l && (l = !0), t.origin != u) return !1;
        t = e.value;
        var r = e.data,
            i = "" === i ? null : e.player_id;
        return e = i ? o[i][n] : o[n], n = [], !!e && (void 0 !== t && n.push(t), r && n.push(r), i && n.push(i), 0 < n.length ? e.apply(null, n) : e.call())
    }

    function s(t, e, n) {
        n ? (o[n] || (o[n] = {}), o[n][t] = e) : o[t] = e
    }
    var o = {},
        l = !1,
        u = "";
    return (e.fn = e.prototype = {
        element: null,
        init: function(t) {
            "string" == typeof t && (t = document.getElementById(t)), this.element = t, "//" === (t = this.element.getAttribute("src")).substr(0, 2) && (t = window.location.protocol + t);
            for (var e = "", n = 0, r = (t = t.split("/")).length; n < r && n < 3; n++) e += t[n], n < 2 && (e += "/");
            return u = e, this
        },
        api: function(t, e) {
            if (!this.element || !t) return !1;
            var n = this.element,
                r = "" !== n.id ? n.id : null,
                i = e && e.constructor && e.call && e.apply ? null : e,
                o = e && e.constructor && e.call && e.apply ? e : null;
            return o && s(t, o, r), a(t, i, n), this
        },
        addEvent: function(t, e) {
            if (!this.element) return !1;
            var n = this.element,
                r = "" !== n.id ? n.id : null;
            return s(t, e, r), "ready" != t ? a("addEventListener", t, n) : "ready" == t && l && e.call(null, r), this
        },
        removeEvent: function(t) {
            if (!this.element) return !1;
            var e, n = this.element;
            t: {
                if ((e = "" !== n.id ? n.id : null) && o[e]) {
                    if (!o[e][t]) {
                        e = !1;
                        break t
                    }
                    o[e][t] = null
                } else {
                    if (!o[t]) {
                        e = !1;
                        break t
                    }
                    o[t] = null
                }
                e = !0
            }
            "ready" != t && e && a("removeEventListener", t, n)
        }
    }).init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent("onmessage", t), window.Froogaloop = window.$f = e
}();
! function(t) {
    var h, p, d = "hasOwnProperty",
        g = /[\.\/]/,
        a = function() {},
        v = function(t, e) {
            return t - e
        },
        m = {
            n: {}
        },
        y = function(t, e) {
            t = String(t);
            var n, r = p,
                i = Array.prototype.slice.call(arguments, 2),
                o = y.listeners(t),
                a = 0,
                s = [],
                l = {},
                u = [],
                c = h;
            h = t;
            for (var f = p = 0, d = o.length; f < d; f++) "zIndex" in o[f] && (s.push(o[f].zIndex), o[f].zIndex < 0 && (l[o[f].zIndex] = o[f]));
            for (s.sort(v); s[a] < 0;)
                if (n = l[s[a++]], u.push(n.apply(e, i)), p) return p = r, u;
            for (f = 0; f < d; f++)
                if ("zIndex" in (n = o[f]))
                    if (n.zIndex == s[a]) {
                        if (u.push(n.apply(e, i)), p) break;
                        do {
                            if ((n = l[s[++a]]) && u.push(n.apply(e, i)), p) break
                        } while (n)
                    } else l[n.zIndex] = n;
            else if (u.push(n.apply(e, i)), p) break;
            return p = r, h = c, u.length ? u : null
        };
    y._events = m, y.listeners = function(t) {
        var e, n, r, i, o, a, s, l, u = t.split(g),
            c = m,
            f = [c],
            d = [];
        for (i = 0, o = u.length; i < o; i++) {
            for (l = [], a = 0, s = f.length; a < s; a++)
                for (n = [(c = f[a].n)[u[i]], c["*"]], r = 2; r--;)(e = n[r]) && (l.push(e), d = d.concat(e.f || []));
            f = l
        }
        return d
    }, y.on = function(t, e) {
        if (t = String(t), "function" != typeof e) return function() {};
        for (var n = t.split(g), r = m, i = 0, o = n.length; i < o; i++) r = (r = r.n).hasOwnProperty(n[i]) && r[n[i]] || (r[n[i]] = {
            n: {}
        });
        for (r.f = r.f || [], i = 0, o = r.f.length; i < o; i++)
            if (r.f[i] == e) return a;
        return r.f.push(e),
            function(t) {
                +t == +t && (e.zIndex = +t)
            }
    }, y.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            y.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, y.stop = function() {
        p = 1
    }, y.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(h) : h
    }, y.nts = function() {
        return h.split(g)
    }, y.off = y.unbind = function(t, e) {
        if (t) {
            var n, r, i, o, a, s, l, u = t.split(g),
                c = [m];
            for (o = 0, a = u.length; o < a; o++)
                for (s = 0; s < c.length; s += i.length - 2) {
                    if (i = [s, 1], n = c[s].n, "*" != u[o]) n[u[o]] && i.push(n[u[o]]);
                    else
                        for (r in n) n[d](r) && i.push(n[r]);
                    c.splice.apply(c, i)
                }
            for (o = 0, a = c.length; o < a; o++)
                for (n = c[o]; n.n;) {
                    if (e) {
                        if (n.f) {
                            for (s = 0, l = n.f.length; s < l; s++)
                                if (n.f[s] == e) {
                                    n.f.splice(s, 1);
                                    break
                                }!n.f.length && delete n.f
                        }
                        for (r in n.n)
                            if (n.n[d](r) && n.n[r].f) {
                                var f = n.n[r].f;
                                for (s = 0, l = f.length; s < l; s++)
                                    if (f[s] == e) {
                                        f.splice(s, 1);
                                        break
                                    }!f.length && delete n.n[r].f
                            }
                    } else
                        for (r in delete n.f, n.n) n.n[d](r) && n.n[r].f && delete n.n[r].f;
                    n = n.n
                }
        } else y._events = m = {
            n: {}
        }
    }, y.once = function(t, e) {
        var n = function() {
            return y.unbind(t, n), e.apply(this, arguments)
        };
        return y.on(t, n)
    }, y.version = "0.4.2", y.toString = function() {
        return "You are running Eve 0.4.2"
    }, "undefined" != typeof module && module.exports ? module.exports = y : "undefined" != typeof define ? define("eve", [], function() {
        return y
    }) : t.eve = y
}(this),
function(e, n) {
    "function" == typeof define && define.amd ? define(["eve"], function(t) {
        return n(e, t)
    }) : n(e, e.eve)
}(this, function(vt, mt) {
    var s, c, f, l, d, h, t, p, v, m, y, x, b, w, C, yt = (s = void 0 === mt ? function() {} : mt, c = {}, f = vt.requestAnimationFrame || vt.webkitRequestAnimationFrame || vt.mozRequestAnimationFrame || vt.oRequestAnimationFrame || vt.msRequestAnimationFrame || function(t) {
            setTimeout(t, 16)
        }, l = Array.isArray || function(t) {
            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
        }, d = 0, h = "M" + (+new Date).toString(36), t = Date.now || function() {
            return +new Date
        }, p = function(t) {
            var e = this;
            if (null == t) return e.s;
            var n = e.s - t;
            e.b += e.dur * n, e.B += e.dur * n, e.s = t
        }, v = function(t) {
            return null == t ? this.spd : void(this.spd = t)
        }, m = function(t) {
            var e = this;
            return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
        }, y = function() {
            delete c[this.id], s("mina.stop." + this.id, this)
        }, x = function() {
            var t = this;
            t.pdif || (delete c[t.id], t.pdif = t.get() - t.b)
        }, b = function() {
            var t = this;
            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, c[t.id] = t)
        }, w = function() {
            var t = 0;
            for (var e in c)
                if (c.hasOwnProperty(e)) {
                    var n, r = c[e],
                        i = r.get();
                    if (t++, r.s = (i - r.b) / (r.dur / r.spd), 1 <= r.s && (delete c[e], r.s = 1, t--, function(t) {
                            setTimeout(function() {
                                s("mina.finish." + t.id, t)
                            })
                        }(r)), l(r.start)) {
                        n = [];
                        for (var o = 0, a = r.start.length; o < a; o++) n[o] = +r.start[o] + (r.end[o] - r.start[o]) * r.easing(r.s)
                    } else n = +r.start + (r.end - r.start) * r.easing(r.s);
                    r.set(n)
                }
            t && f(w)
        }, (C = function(t, e, n, r, i, o, a) {
            var s = {
                id: h + (d++).toString(36),
                start: t,
                end: e,
                b: n,
                s: 0,
                dur: r - n,
                spd: 1,
                get: i,
                set: o,
                easing: a || C.linear,
                status: p,
                speed: v,
                duration: m,
                stop: y,
                pause: x,
                resume: b
            };
            c[s.id] = s;
            var l, u = 0;
            for (l in c)
                if (c.hasOwnProperty(l) && 2 == ++u) break;
            return 1 == u && f(w), s
        }).time = t, C.getById = function(t) {
            return c[t] || null
        }, C.linear = function(t) {
            return t
        }, C.easeout = function(t) {
            return Math.pow(t, 1.7)
        }, C.easein = function(t) {
            return Math.pow(t, .48)
        }, C.easeinout = function(t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = .48 - t / 1.04,
                n = Math.sqrt(.1734 + e * e),
                r = n - e,
                i = -n - e,
                o = Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + .5;
            return 3 * (1 - o) * o * o + o * o * o
        }, C.backin = function(t) {
            return 1 == t ? 1 : t * t * (2.70158 * t - 1.70158)
        }, C.backout = function(t) {
            return 0 == t ? 0 : (t -= 1) * t * (2.70158 * t + 1.70158) + 1
        }, C.elastic = function(t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
        }, C.bounce = function(t) {
            var e = 7.5625,
                n = 2.75;
            return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
        }, vt.mina = C),
        e = function() {
            function l(t, e) {
                if (t) {
                    if (t.tagName) return w(t);
                    if (t instanceof d) return t;
                    if (null == e) return w(t = B.doc.querySelector(t))
                }
                return new m(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
            }

            function p(t, e) {
                if (e) {
                    if ("string" == typeof t && (t = p(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(K, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(tt, e.substring(4)) : t.getAttribute(e);
                    for (var n in e)
                        if (e[_](n)) {
                            var r = A(e[n]);
                            r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(K, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(tt, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                        }
                } else t = B.doc.createElementNS(tt, t);
                return t
            }

            function y(t, e) {
                return "finite" == (e = A.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || R.call(t).slice(8, -1).toLowerCase() == e)
            }

            function e(o, a, s) {
                return function t() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        n = e.join("␀"),
                        r = t.cache = t.cache || {},
                        i = t.count = t.count || [];
                    return r[_](n) ? function(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return t.push(t.splice(n, 1)[0])
                    }(i, n) : (1e3 <= i.length && delete r[i.shift()], i.push(n), r[n] = o.apply(a, e)), s ? s(r[n]) : r[n]
                }
            }

            function a(t) {
                return t % 360 * z / 180
            }

            function s(t) {
                return 180 * t / z % 360
            }

            function x(t, e, n, r, i, o) {
                return null == e && "[object SVGMatrix]" == R.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(this.f = null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0))
            }

            function i(t) {
                var r = [];
                return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, e, n) {
                    return n = n.split(/\s*,\s*|\s+/), "rotate" == e && 1 == n.length && n.push(0, 0), "scale" == e && (2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), "skewX" == e ? r.push(["m", 1, 0, j.tan(a(n[0])), 1, 0, 0]) : "skewY" == e ? r.push(["m", 1, j.tan(a(n[0])), 0, 1, 0, 0]) : r.push([e.charAt(0)].concat(n)), t
                }), r
            }

            function o(t, e) {
                var n = ct(t),
                    r = new x;
                if (n)
                    for (var i = 0, o = n.length; i < o; i++) {
                        var a, s, l, u, c, f = n[i],
                            d = f.length,
                            h = A(f[0]).toLowerCase(),
                            p = f[0] != h,
                            g = p ? r.invert() : 0;
                        "t" == h && 2 == d ? r.translate(f[1], 0) : "t" == h && 3 == d ? p ? (a = g.x(0, 0), s = g.y(0, 0), l = g.x(f[1], f[2]), u = g.y(f[1], f[2]), r.translate(l - a, u - s)) : r.translate(f[1], f[2]) : "r" == h ? 2 == d ? (c = c || e, r.rotate(f[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == d && (p ? (l = g.x(f[2], f[3]), u = g.y(f[2], f[3]), r.rotate(f[1], l, u)) : r.rotate(f[1], f[2], f[3])) : "s" == h ? 2 == d || 3 == d ? (c = c || e, r.scale(f[1], f[d - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == d ? p ? (l = g.x(f[2], f[3]), u = g.y(f[2], f[3]), r.scale(f[1], f[1], l, u)) : r.scale(f[1], f[1], f[2], f[3]) : 5 == d && (p ? (l = g.x(f[3], f[4]), u = g.y(f[3], f[4]), r.scale(f[1], f[2], l, u)) : r.scale(f[1], f[2], f[3], f[4])) : "m" == h && 7 == d && r.add(f[1], f[2], f[3], f[4], f[5], f[6])
                    }
                return r
            }

            function u(t, e) {
                if (null == e) {
                    var n = !0;
                    if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new x;
                    e = i(e)
                } else y(e = l._.rgTransform.test(e) ? A(e).replace(/\.{3}|\u2026/g, t._.transform || D) : i(e), "array") && (e = l.path ? l.path.toString.call(e) : A(e)), t._.transform = e;
                var r = o(e, t.getBBox(1));
                return n ? r : void(t.matrix = r)
            }

            function c(t) {
                var e = l._.someDefs;
                if (e && ht(e.ownerDocument.documentElement, e)) return e;
                var n = t.node.ownerSVGElement && w(t.node.ownerSVGElement) || t.node.parentNode && w(t.node.parentNode) || l.select("svg") || l(0, 0),
                    r = n.select("defs"),
                    i = null != r && r.node;
                return i || (i = b("defs", n.node).node), l._.someDefs = i
            }

            function n(n, r, i) {
                function t(t) {
                    return null == t ? D : t == +t ? t : (p(l, {
                        width: t
                    }), l.getBBox().width)
                }

                function e(t) {
                    return null == t ? D : t == +t ? t : (p(l, {
                        height: t
                    }), l.getBBox().height)
                }

                function o(t, e) {
                    null == r ? s[t] = e(n.attr(t)) : t == r && (s = e(null == i ? n.attr(t) : i))
                }
                var a = c(n),
                    s = {},
                    l = a.querySelector(".svg---mgr");
                switch (l || (p(l = p("rect"), {
                    width: 10,
                    height: 10,
                    class: "svg---mgr"
                }), a.appendChild(l)), n.type) {
                    case "rect":
                        o("rx", t), o("ry", e);
                    case "image":
                        o("width", t), o("height", e);
                    case "text":
                        o("x", t), o("y", e);
                        break;
                    case "circle":
                        o("cx", t), o("cy", e), o("r", t);
                        break;
                    case "ellipse":
                        o("cx", t), o("cy", e), o("rx", t), o("ry", e);
                        break;
                    case "line":
                        o("x1", t), o("x2", t), o("y1", e), o("y2", e);
                        break;
                    case "marker":
                        o("refX", t), o("markerWidth", t), o("refY", e), o("markerHeight", e);
                        break;
                    case "radialGradient":
                        o("fx", t), o("fy", e);
                        break;
                    case "tspan":
                        o("dx", t), o("dy", e);
                        break;
                    default:
                        o(r, t)
                }
                return s
            }

            function f(t) {
                y(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                    r.appendChild(t.node)
                }) : r.appendChild(t[e].node);
                var i = r.childNodes;
                for (e = 0; e < i.length; e++) this[n++] = w(i[e]);
                return this
            }

            function d(t) {
                if (t.snap in et) return et[t.snap];
                var e, n = this.id = Q();
                try {
                    e = t.ownerSVGElement
                } catch (t) {}
                if (this.node = t, e && (this.paper = new m(e)), this.type = t.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, t.snap = n, "g" == (et[n] = this).type)
                    for (var r in this.add = f, m.prototype) m.prototype[_](r) && (this[r] = m.prototype[r])
            }

            function h(t) {
                for (var e, n = 0, r = t.length; n < r; n++)
                    if (e = e || t[n]) return e
            }

            function v(t) {
                this.node = t
            }

            function b(t, e) {
                var n = p(t);
                e.appendChild(n);
                var r = w(n);
                return r.type = t, r
            }

            function m(t, e) {
                var n, r, i, o = m.prototype;
                if (t && "svg" == t.tagName) {
                    if (t.snap in et) return et[t.snap];
                    for (var a in n = new d(t), r = t.getElementsByTagName("desc")[0], i = t.getElementsByTagName("defs")[0], r || ((r = p("desc")).appendChild(B.doc.createTextNode("Created with Snap")), n.node.appendChild(r)), i || (i = p("defs"), n.node.appendChild(i)), n.defs = i, o) o[_](a) && (n[a] = o[a]);
                    n.paper = n.root = n
                } else p((n = b("svg", B.doc.body)).node, {
                    height: e,
                    version: 1.1,
                    width: t,
                    xmlns: tt
                });
                return n
            }

            function w(t) {
                return t ? t instanceof d || t instanceof v ? t : "svg" == t.tagName ? new m(t) : new d(t) : t
            }

            function C() {
                return this.selectAll("stop")
            }

            function S(t, e) {
                var n = p("stop"),
                    r = {
                        offset: +e + "%"
                    };
                return t = l.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), p(n, r), this.node.appendChild(n), this
            }

            function k() {
                if ("linearGradient" == this.type) {
                    var t = p(this.node, "x1") || 0,
                        e = p(this.node, "x2") || 1,
                        n = p(this.node, "y1") || 0,
                        r = p(this.node, "y2") || 0;
                    return l._.box(t, n, j.abs(e - t), j.abs(r - n))
                }
                var i = this.node.cx || .5,
                    o = this.node.cy || .5,
                    a = this.node.r || 0;
                return l._.box(i - a, o - a, 2 * a, 2 * a)
            }

            function E(t, e) {
                function n(t, e) {
                    for (var n = (e - s) / (t - l), r = l; r < t; r++) o[r].offset = +(+s + n * (r - l)).toFixed(2);
                    l = t, s = e
                }
                var r, i = h(mt("snap.util.grad.parse", null, e));
                if (!i) return null;
                i.params.unshift(t), r = "l" == i.type.toLowerCase() ? T.apply(0, i.params) : M.apply(0, i.params), i.type != i.type.toLowerCase() && p(r.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var o = i.stops,
                    a = o.length,
                    s = 0,
                    l = 0;
                a--;
                for (var u = 0; u < a; u++) "offset" in o[u] && n(u, o[u].offset);
                for (o[a].offset = o[a].offset || 100, n(a, o[a].offset), u = 0; u <= a; u++) {
                    var c = o[u];
                    r.addStop(c.color, c.offset)
                }
                return r
            }

            function T(t, e, n, r, i) {
                var o = b("linearGradient", t);
                return o.stops = C, o.addStop = S, o.getBBox = k, null != e && p(o.node, {
                    x1: e,
                    y1: n,
                    x2: r,
                    y2: i
                }), o
            }

            function M(t, e, n, r, i, o) {
                var a = b("radialGradient", t);
                return a.stops = C, a.addStop = S, a.getBBox = k, null != e && p(a.node, {
                    cx: e,
                    cy: n,
                    r: r
                }), null != i && null != o && p(a.node, {
                    fx: i,
                    fy: o
                }), a
            }

            function t(i) {
                return function(t) {
                    if (mt.stop(), t instanceof v && 1 == t.node.childNodes.length && ("radialGradient" == t.node.firstChild.tagName || "linearGradient" == t.node.firstChild.tagName || "pattern" == t.node.firstChild.tagName) && (t = t.node.firstChild, c(this).appendChild(t), t = w(t)), t instanceof d)
                        if ("radialGradient" == t.type || "linearGradient" == t.type || "pattern" == t.type) {
                            t.node.id || p(t.node, {
                                id: t.id
                            });
                            var e = nt(t.node.id)
                        } else e = t.attr(i);
                    else if ((e = l.color(t)).error) {
                        var n = E(c(this), t);
                        e = n ? (n.node.id || p(n.node, {
                            id: n.id
                        }), nt(n.node.id)) : t
                    } else e = A(e);
                    var r = {};
                    r[i] = e, p(this.node, r), this.node.style[i] = D
                }
            }
            l.version = "0.2.0", l.toString = function() {
                return "Snap v" + this.version
            }, l._ = {};
            var B = {
                win: vt,
                doc: vt.document
            };
            l._.glob = B;
            var r, F, _ = "hasOwnProperty",
                A = String,
                N = parseFloat,
                P = parseInt,
                j = Math,
                L = j.max,
                q = j.min,
                O = j.abs,
                z = (j.pow, j.PI),
                D = (j.round, ""),
                R = Object.prototype.toString,
                U = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                G = /^url\(#?([^)]+)\)$/,
                $ = "\t\n\v\f\r   ᠎             　\u2028\u2029",
                V = new RegExp("[," + $ + "]+"),
                I = (new RegExp("[" + $ + "]", "g"), new RegExp("[" + $ + "]*,[" + $ + "]*")),
                H = {
                    hs: 1,
                    rg: 1
                },
                X = new RegExp("([a-z])[" + $ + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + $ + "]*,?[" + $ + "]*)+)", "ig"),
                Y = new RegExp("([rstm])[" + $ + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + $ + "]*,?[" + $ + "]*)+)", "ig"),
                W = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + $ + "]*,?[" + $ + "]*", "ig"),
                J = 0,
                Z = "S" + (+new Date).toString(36),
                Q = function() {
                    return Z + (J++).toString(36)
                },
                K = "http://www.w3.org/1999/xlink",
                tt = "http://www.w3.org/2000/svg",
                et = {},
                nt = l.url = function(t) {
                    return "url('#" + t + "')"
                };
            l._.$ = p, l._.id = Q, l.format = (r = /\{([^\}]+)\}/g, F = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, i) {
                return A(t).replace(r, function(t, e) {
                    return n = t, o = r = i, e.replace(F, function(t, e, n, r, i) {
                        e = e || r, o && (e in o && (o = o[e]), "function" == typeof o && i && (o = o()))
                    }), o = (null == o || o == r ? n : o) + "";
                    var n, r, o
                })
            });
            var rt = function() {
                function i() {
                    this.parentNode.removeChild(this)
                }
                return function(t, e) {
                    var n = B.doc.createElement("img"),
                        r = B.doc.body;
                    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
                        e.call(n), n.onload = n.onerror = null, r.removeChild(n)
                    }, n.onerror = i, r.appendChild(n), n.src = t
                }
            }();
            l._.clone = function t(e) {
                    if ("function" == typeof e || Object(e) !== e) return e;
                    var n = new e.constructor;
                    for (var r in e) e[_](r) && (n[r] = t(e[r]));
                    return n
                }, l._.cacher = e, l.rad = a, l.deg = s, l.angle = function t(e, n, r, i, o, a) {
                    if (null != o) return t(e, n, o, a) - t(r, i, o, a);
                    var s = e - r,
                        l = n - i;
                    return s || l ? (180 + 180 * j.atan2(-l, -s) / z + 360) % 360 : 0
                }, l.is = y, l.snapTo = function(t, e, n) {
                    if (n = y(n, "finite") ? n : 10, y(t, "array")) {
                        for (var r = t.length; r--;)
                            if (O(t[r] - e) <= n) return t[r]
                    } else {
                        var i = e % (t = +t);
                        if (i < n) return e - i;
                        if (t - n < i) return e - i + t
                    }
                    return e
                },
                function(t) {
                    function i(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function o(t) {
                        var e = j.sqrt(i(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }
                    t.add = function(t, e, n, r, i, o) {
                        var a, s, l, u, c = [
                                [],
                                [],
                                []
                            ],
                            f = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            d = [
                                [t, n, i],
                                [e, r, o],
                                [0, 0, 1]
                            ];
                        for (t && t instanceof x && (d = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), a = 0; a < 3; a++)
                            for (s = 0; s < 3; s++) {
                                for (l = u = 0; l < 3; l++) u += f[a][l] * d[l][s];
                                c[a][s] = u
                            }
                        return this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2], this
                    }, t.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new x(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, t.clone = function() {
                        return new x(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.translate = function(t, e) {
                        return this.add(1, 0, 0, 1, t, e)
                    }, t.scale = function(t, e, n, r) {
                        return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                    }, t.rotate = function(t, e, n) {
                        t = a(t), e = e || 0, n = n || 0;
                        var r = +j.cos(t).toFixed(9),
                            i = +j.sin(t).toFixed(9);
                        return this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n)
                    }, t.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, t.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, t.get = function(t) {
                        return +this[A.fromCharCode(97 + t)].toFixed(4)
                    }, t.toString = function() {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }, t.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, t.split = function() {
                        var t = {};
                        t.dx = this.e, t.dy = this.f;
                        var e = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        t.scalex = j.sqrt(i(e[0])), o(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = j.sqrt(i(e[1])), o(e[1]), t.shear /= t.scaley;
                        var n = -e[0][1],
                            r = e[1][1];
                        return r < 0 ? (t.rotate = s(j.acos(r)), n < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = s(j.asin(n)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                    }, t.toTransformString = function(t) {
                        var e = t || this.split();
                        return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : D) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : D) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : D)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(x.prototype), l.Matrix = x, l.getRGB = e(function(t) {
                    if (!t || (t = A(t)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: st
                    };
                    if ("none" == t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: st
                    };
                    if (!(H[_](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = it(t)), !t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: st
                    };
                    var e, n, r, i, o, a, s = t.match(U);
                    return s ? (s[2] && (r = P(s[2].substring(5), 16), n = P(s[2].substring(3, 5), 16), e = P(s[2].substring(1, 3), 16)), s[3] && (r = P((o = s[3].charAt(3)) + o, 16), n = P((o = s[3].charAt(2)) + o, 16), e = P((o = s[3].charAt(1)) + o, 16)), s[4] && (a = s[4].split(I), e = N(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), n = N(a[1]), "%" == a[1].slice(-1) && (n *= 2.55), r = N(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), "rgba" == s[1].toLowerCase().slice(0, 4) && (i = N(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100)), s[5] ? (a = s[5].split(I), e = N(a[0]), "%" == a[0].slice(-1) && (e /= 100), n = N(a[1]), "%" == a[1].slice(-1) && (n /= 100), r = N(a[2]), "%" == a[2].slice(-1) && (r /= 100), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (e /= 360), "hsba" == s[1].toLowerCase().slice(0, 4) && (i = N(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100), l.hsb2rgb(e, n, r, i)) : s[6] ? (a = s[6].split(I), e = N(a[0]), "%" == a[0].slice(-1) && (e /= 100), n = N(a[1]), "%" == a[1].slice(-1) && (n /= 100), r = N(a[2]), "%" == a[2].slice(-1) && (r /= 100), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (e /= 360), "hsla" == s[1].toLowerCase().slice(0, 4) && (i = N(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100), l.hsl2rgb(e, n, r, i)) : (e = q(j.round(e), 255), n = q(j.round(n), 255), r = q(j.round(r), 255), i = q(L(i, 0), 1), (s = {
                        r: e,
                        g: n,
                        b: r,
                        toString: st
                    }).hex = "#" + (16777216 | r | n << 8 | e << 16).toString(16).slice(1), s.opacity = y(i, "finite") ? i : 1, s)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: st
                    }
                }, l), l.hsb = e(function(t, e, n) {
                    return l.hsb2rgb(t, e, n).hex
                }), l.hsl = e(function(t, e, n) {
                    return l.hsl2rgb(t, e, n).hex
                }), l.rgb = e(function(t, e, n, r) {
                    if (y(r, "finite")) {
                        var i = j.round;
                        return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                });
            var it = function(t) {
                    var n = B.doc.getElementsByTagName("head")[0],
                        r = "rgb(255, 0, 0)";
                    return (it = e(function(t) {
                        if ("red" == t.toLowerCase()) return r;
                        n.style.color = r, n.style.color = t;
                        var e = B.doc.defaultView.getComputedStyle(n, D).getPropertyValue("color");
                        return e == r ? null : e
                    }))(t)
                },
                ot = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                at = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                st = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                lt = function(t, e, n) {
                    if (null == e && y(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && y(t, string)) {
                        var r = l.getRGB(t);
                        t = r.r, e = r.g, n = r.b
                    }
                    return (1 < t || 1 < e || 1 < n) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                },
                ut = function(t, e, n, r) {
                    var i = {
                        r: t = j.round(255 * t),
                        g: e = j.round(255 * e),
                        b: n = j.round(255 * n),
                        opacity: y(r, "finite") ? r : 1,
                        hex: l.rgb(t, e, n),
                        toString: st
                    };
                    return y(r, "finite") && (i.opacity = r), i
                };
            l.color = function(t) {
                var e;
                return y(t, "object") && "h" in t && "s" in t && "b" in t ? (e = l.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : y(t, "object") && "h" in t && "s" in t && "l" in t ? (e = l.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (y(t, "string") && (t = l.getRGB(t)), y(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = l.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = l.rgb2hsb(t), t.v = e.b) : ((t = {
                    hex: "none"
                }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = st, t
            }, l.hsb2rgb = function(t, e, n, r) {
                var i, o, a, s, l;
                return y(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = (t = t.h).o), s = (l = n * e) * (1 - O((t = (t *= 360) % 360 / 60) % 2 - 1)), i = o = a = n - l, ut(i += [l, s, 0, 0, s, l][t = ~~t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], r)
            }, l.hsl2rgb = function(t, e, n, r) {
                var i, o, a, s, l;
                return y(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < n) && (t /= 360, e /= 100, n /= 100), s = (l = 2 * e * (n < .5 ? n : 1 - n)) * (1 - O((t = (t *= 360) % 360 / 60) % 2 - 1)), i = o = a = n - l / 2, ut(i += [l, s, 0, 0, s, l][t = ~~t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], r)
            }, l.rgb2hsb = function(t, e, n) {
                var r, i;
                return t = (n = lt(t, e, n))[0], e = n[1], n = n[2], {
                    h: ((0 == (i = (r = L(t, e, n)) - q(t, e, n)) ? null : r == t ? (e - n) / i : r == e ? (n - t) / i + 2 : (t - e) / i + 4) + 360) % 6 * 60 / 360,
                    s: 0 == i ? 0 : i / r,
                    b: r,
                    toString: ot
                }
            }, l.rgb2hsl = function(t, e, n) {
                var r, i, o, a;
                return t = (n = lt(t, e, n))[0], e = n[1], n = n[2], r = ((i = L(t, e, n)) + (o = q(t, e, n))) / 2, {
                    h: ((0 == (a = i - o) ? null : i == t ? (e - n) / a : i == e ? (n - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360,
                    s: 0 == a ? 0 : r < .5 ? a / (2 * r) : a / (2 - 2 * r),
                    l: r,
                    toString: at
                }
            }, l.parsePathString = function(t) {
                if (!t) return null;
                var e = l.path(t);
                if (e.arr) return l.path.clone(e.arr);
                var o = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    a = [];
                return y(t, "array") && y(t[0], "array") && (a = l.path.clone(t)), a.length || A(t).replace(X, function(t, e, n) {
                    var r = [],
                        i = e.toLowerCase();
                    if (n.replace(W, function(t, e) {
                            e && r.push(+e)
                        }), "m" == i && 2 < r.length && (a.push([e].concat(r.splice(0, 2))), i = "l", e = "m" == e ? "l" : "L"), "o" == i && 1 == r.length && a.push([e, r[0]]), "r" == i) a.push([e].concat(r));
                    else
                        for (; r.length >= o[i] && (a.push([e].concat(r.splice(0, o[i]))), o[i]););
                }), a.toString = l.path.toString, e.arr = l.path.clone(a), a
            };
            var ct = l.parseTransformString = function(t) {
                if (!t) return null;
                var i = [];
                return y(t, "array") && y(t[0], "array") && (i = l.path.clone(t)), i.length || A(t).replace(Y, function(t, e, n) {
                    var r = [];
                    e.toLowerCase(), n.replace(W, function(t, e) {
                        e && r.push(+e)
                    }), i.push([e].concat(r))
                }), i.toString = l.path.toString, i
            };
            l._.svgTransform2string = i, l._.rgTransform = new RegExp("^[a-z][" + $ + "]*-?\\.?\\d", "i"), l._.transform2matrix = o, l._unit2px = n;
            var ft, dt, ht = B.doc.contains || B.doc.compareDocumentPosition ? function(t, e) {
                var n = 9 == t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e;)
                        if ((e = e.parentNode) == t) return !0;
                return !1
            };
            l._.getSomeDefs = c, l.select = function(t) {
                    return w(B.doc.querySelector(t))
                }, l.selectAll = function(t) {
                    for (var e = B.doc.querySelectorAll(t), n = (l.set || Array)(), r = 0; r < e.length; r++) n.push(w(e[r]));
                    return n
                },
                function(t) {
                    function v(n, r, i) {
                        return function(t) {
                            var e = t.slice(n, r);
                            return 1 == e.length && (e = e[0]), i ? i(e) : e
                        }
                    }

                    function e(o) {
                        return function() {
                            var t = o ? "<" + this.type : "",
                                e = this.node.attributes,
                                n = this.node.childNodes;
                            if (o)
                                for (var r = 0, i = e.length; r < i; r++) t += " " + e[r].name + '="' + e[r].value.replace(/"/g, '\\"') + '"';
                            if (n.length) {
                                for (o && (t += ">"), r = 0, i = n.length; r < i; r++) 3 == n[r].nodeType ? t += n[r].nodeValue : 1 == n[r].nodeType && (t += w(n[r]).toString());
                                o && (t += "</" + this.type + ">")
                            } else o && (t += "/>");
                            return t
                        }
                    }
                    t.attr = function(t, e) {
                        var n = this;
                        if (n.node, !t) return n;
                        if (y(t, "string")) {
                            if (!(1 < arguments.length)) return h(mt("snap.util.getattr." + t, n));
                            var r = {};
                            r[t] = e, t = r
                        }
                        for (var i in t) t[_](i) && mt("snap.util.attr." + i, n, t[i]);
                        return n
                    }, t.getBBox = function(t) {
                        var e = this;
                        if ("use" == e.type && (e = e.original), e.removed) return {};
                        var n = e._;
                        return t ? (n.bboxwt = l.path.get[e.type] ? l.path.getBBox(e.realPath = l.path.get[e.type](e)) : l._.box(e.node.getBBox()), l._.box(n.bboxwt)) : (e.realPath = (l.path.get[e.type] || l.path.get.deflt)(e), n.bbox = l.path.getBBox(l.path.map(e.realPath, e.matrix)), l._.box(n.bbox))
                    };
                    var o = function() {
                        return this.string
                    };
                    t.transform = function(t) {
                        var e = this._;
                        if (null != t) return t instanceof x && (t = t.toTransformString()), u(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? p(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? p(this.node, {
                            patternTransform: this.matrix
                        }) : p(this.node, {
                            transform: this.matrix
                        })), this;
                        var n = new x(this.node.getCTM()),
                            r = u(this),
                            i = r.toTransformString();
                        return {
                            string: A(r) == A(this.matrix) ? e.transform : i,
                            globalMatrix: n,
                            localMatrix: r,
                            diffMatrix: n.clone().add(r.invert()),
                            global: n.toTransformString(),
                            local: i,
                            toString: o
                        }
                    }, t.parent = function() {
                        return w(this.node.parentNode)
                    }, t.append = t.add = function(t) {
                        if (t) {
                            if ("set" == t.type) {
                                var e = this;
                                return t.forEach(function(t) {
                                    e.add(t)
                                }), this
                            }
                            t = w(t), this.node.appendChild(t.node), t.paper = this.paper
                        }
                        return this
                    }, t.appendTo = function(t) {
                        return t && (t = w(t)).append(this), this
                    }, t.prepend = function(t) {
                        if (t) {
                            var e = (t = w(t)).parent();
                            this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), e && e.add()
                        }
                        return this
                    }, t.prependTo = function(t) {
                        return (t = w(t)).prepend(this), this
                    }, t.before = function(t) {
                        if ("set" == t.type) {
                            var n = this;
                            return t.forEach(function(t) {
                                var e = t.parent();
                                n.node.parentNode.insertBefore(t.node, n.node), e && e.add()
                            }), this.parent().add(), this
                        }
                        var e = (t = w(t)).parent();
                        return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                    }, t.after = function(t) {
                        var e = (t = w(t)).parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                    }, t.insertBefore = function(t) {
                        t = w(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.insertAfter = function(t) {
                        t = w(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.remove = function() {
                        var t = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                    }, t.select = function(t) {
                        return w(this.node.querySelector(t))
                    }, t.selectAll = function(t) {
                        for (var e = this.node.querySelectorAll(t), n = (l.set || Array)(), r = 0; r < e.length; r++) n.push(w(e[r]));
                        return n
                    }, t.asPX = function(t, e) {
                        return null == e && (e = this.attr(t)), +n(this, t, e)
                    }, t.use = function() {
                        var t, e = this.node.id;
                        return e || (e = this.id, p(this.node, {
                            id: e
                        })), p((t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? b(this.type, this.node.parentNode) : b("use", this.node.parentNode)).node, {
                            "xlink:href": "#" + e
                        }), t.original = this, t
                    }, t.clone = function() {
                        var t = w(this.node.cloneNode(!0));
                        return p(t.node, "id") && p(t.node, {
                                id: t.id
                            }),
                            function(t) {
                                function e(n, r) {
                                    var t = p(n.node, r);
                                    (t = (t = t && t.match(o)) && t[2]) && "#" == t.charAt() && (t = t.substring(1)) && (s[t] = (s[t] || []).concat(function(t) {
                                        var e = {};
                                        e[r] = nt(t), p(n.node, e)
                                    }))
                                }

                                function n(e) {
                                    var t = p(e.node, "xlink:href");
                                    t && "#" == t.charAt() && (t = t.substring(1)) && (s[t] = (s[t] || []).concat(function(t) {
                                        e.attr("xlink:href", "#" + t)
                                    }))
                                }
                                for (var r, i = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], s = {}, l = 0, u = i.length; l < u; l++) {
                                    e(r = i[l], "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                                    var c = p(r.node, "id");
                                    c && (p(r.node, {
                                        id: r.id
                                    }), a.push({
                                        old: c,
                                        id: r.id
                                    }))
                                }
                                for (l = 0, u = a.length; l < u; l++) {
                                    var f = s[a[l].old];
                                    if (f)
                                        for (var d = 0, h = f.length; d < h; d++) f[d](a[l].id)
                                }
                            }(t), t.insertAfter(this), t
                    }, t.toDefs = function() {
                        return c(this).appendChild(this.node), this
                    }, t.pattern = function(t, e, n, r) {
                        var i = b("pattern", c(this));
                        return null == t && (t = this.getBBox()), y(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), p(i.node, {
                            x: t,
                            y: e,
                            width: n,
                            height: r,
                            patternUnits: "userSpaceOnUse",
                            id: i.id,
                            viewBox: [t, e, n, r].join(" ")
                        }), i.node.appendChild(this.node), i
                    }, t.marker = function(t, e, n, r, i, o) {
                        var a = b("marker", c(this));
                        return null == t && (t = this.getBBox()), y(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, o = t.refY || t.cy, t = t.x), p(a.node, {
                            viewBox: [t, e, n, r].join(" "),
                            markerWidth: n,
                            markerHeight: r,
                            orient: "auto",
                            refX: i || 0,
                            refY: o || 0,
                            id: a.id
                        }), a.node.appendChild(this.node), a
                    };
                    var m = function(t, e, n, r) {
                        "function" != typeof n || n.length || (r = n, n = yt.linear), this.attr = t, this.dur = e, n && (this.easing = n), r && (this.callback = r)
                    };
                    l.animation = function(t, e, n, r) {
                        return new m(t, e, n, r)
                    }, t.inAnim = function() {
                        var t = [];
                        for (var e in this.anims) this.anims[_](e) && function(e) {
                            t.push({
                                anim: new m(e._attrs, e.dur, e.easing, e._callback),
                                curStatus: e.status(),
                                status: function(t) {
                                    return e.status(t)
                                },
                                stop: function() {
                                    e.stop()
                                }
                            })
                        }(this.anims[e]);
                        return t
                    }, l.animate = function(t, e, n, r, i, o) {
                        "function" != typeof i || i.length || (o = i, i = yt.linear);
                        var a = yt.time(),
                            s = yt(t, e, a, a + r, yt.time, n, i);
                        return o && mt.once("mina.finish." + s.id, o), s
                    }, t.stop = function() {
                        for (var t = this.inAnim(), e = 0, n = t.length; e < n; e++) t[e].stop();
                        return this
                    }, t.animate = function(t, e, n, r) {
                        "function" != typeof n || n.length || (r = n, n = yt.linear), t instanceof m && (r = t.callback, e = (n = t.easing).dur, t = t.attr);
                        var i, o, a, s, l = [],
                            u = [],
                            c = {},
                            f = this;
                        for (var d in t)
                            if (t[_](d)) {
                                f.equal ? (i = (s = f.equal(d, A(t[d]))).from, o = s.to, a = s.f) : (i = +f.attr(d), o = +t[d]);
                                var h = y(i, "array") ? i.length : 1;
                                c[d] = v(l.length, l.length + h, a), l = l.concat(i), u = u.concat(o)
                            }
                        var p = yt.time(),
                            g = yt(l, u, p, p + e, yt.time, function(t) {
                                var e = {};
                                for (var n in c) c[_](n) && (e[n] = c[n](t));
                                f.attr(e)
                            }, n);
                        return (f.anims[g.id] = g)._attrs = t, g._callback = r, mt.once("mina.finish." + g.id, function() {
                            delete f.anims[g.id], r && r.call(f)
                        }), mt.once("mina.stop." + g.id, function() {
                            delete f.anims[g.id]
                        }), f
                    };
                    var i = {};
                    t.data = function(t, e) {
                        var n = i[this.id] = i[this.id] || {};
                        if (0 == arguments.length) return mt("snap.data.get." + this.id, this, n, null), n;
                        if (1 != arguments.length) return n[t] = e, mt("snap.data.set." + this.id, this, e, t), this;
                        if (l.is(t, "object")) {
                            for (var r in t) t[_](r) && this.data(r, t[r]);
                            return this
                        }
                        return mt("snap.data.get." + this.id, this, n[t], t), n[t]
                    }, t.removeData = function(t) {
                        return null == t ? i[this.id] = {} : i[this.id] && delete i[this.id][t], this
                    }, t.outerSVG = t.toString = e(1), t.innerSVG = e()
                }(d.prototype), l.parse = function(t) {
                    var e = B.doc.createDocumentFragment(),
                        n = !0,
                        r = B.doc.createElement("div");
                    if ((t = A(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])
                        if (n) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return r.innerHTML = D, new v(e)
                }, v.prototype.select = d.prototype.select, v.prototype.selectAll = d.prototype.selectAll, l.fragment = function() {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = B.doc.createDocumentFragment(), n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        i.node && i.node.nodeType && e.appendChild(i.node), i.nodeType && e.appendChild(i), "string" == typeof i && e.appendChild(l.parse(i).node)
                    }
                    return new v(e)
                }, (dt = m.prototype).el = function(t, e) {
                    return b(t, this.node).attr(e)
                }, dt.rect = function(t, e, n, r, i, o) {
                    var a;
                    return null == o && (o = i), y(t, "object") && "x" in t ? a = t : null != t && (a = {
                        x: t,
                        y: e,
                        width: n,
                        height: r
                    }, null != i && (a.rx = i, a.ry = o)), this.el("rect", a)
                }, dt.circle = function(t, e, n) {
                    var r;
                    return y(t, "object") && "cx" in t ? r = t : null != t && (r = {
                        cx: t,
                        cy: e,
                        r: n
                    }), this.el("circle", r)
                }, dt.image = function(t, e, n, r, i) {
                    var o = b("image", this.node);
                    if (y(t, "object") && "src" in t) o.attr(t);
                    else if (null != t) {
                        var a = {
                            "xlink:href": t,
                            preserveAspectRatio: "none"
                        };
                        null != e && null != n && (a.x = e, a.y = n), null != r && null != i ? (a.width = r, a.height = i) : rt(t, function() {
                            p(o.node, {
                                width: this.offsetWidth,
                                height: this.offsetHeight
                            })
                        }), p(o.node, a)
                    }
                    return o
                }, dt.ellipse = function(t, e, n, r) {
                    var i = b("ellipse", this.node);
                    return y(t, "object") && "cx" in t ? i.attr(t) : null != t && i.attr({
                        cx: t,
                        cy: e,
                        rx: n,
                        ry: r
                    }), i
                }, dt.path = function(t) {
                    var e = b("path", this.node);
                    return y(t, "object") && !y(t, "array") ? e.attr(t) : t && e.attr({
                        d: t
                    }), e
                }, dt.group = dt.g = function(t) {
                    var e = b("g", this.node);
                    for (var n in e.add = f, dt) dt[_](n) && (e[n] = dt[n]);
                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                }, dt.text = function(t, e, n) {
                    var r = b("text", this.node);
                    return y(t, "object") ? r.attr(t) : null != t && r.attr({
                        x: t,
                        y: e,
                        text: n || ""
                    }), r
                }, dt.line = function(t, e, n, r) {
                    var i = b("line", this.node);
                    return y(t, "object") ? i.attr(t) : null != t && i.attr({
                        x1: t,
                        x2: n,
                        y1: e,
                        y2: r
                    }), i
                }, dt.polyline = function(t) {
                    1 < arguments.length && (t = Array.prototype.slice.call(arguments, 0));
                    var e = b("polyline", this.node);
                    return y(t, "object") && !y(t, "array") ? e.attr(t) : null != t && e.attr({
                        points: t
                    }), e
                }, dt.polygon = function(t) {
                    1 < arguments.length && (t = Array.prototype.slice.call(arguments, 0));
                    var e = b("polygon", this.node);
                    return y(t, "object") && !y(t, "array") ? e.attr(t) : null != t && e.attr({
                        points: t
                    }), e
                }, dt.gradient = function(t) {
                    return E(this.defs, t)
                }, dt.gradientLinear = function(t, e, n, r) {
                    return T(this.defs, t, e, n, r)
                }, dt.gradientRadial = function(t, e, n, r, i) {
                    return M(this.defs, t, e, n, r, i)
                }, dt.toString = function() {
                    var t, e = B.doc.createDocumentFragment(),
                        n = B.doc.createElement("div"),
                        r = this.node.cloneNode(!0);
                    return e.appendChild(n), n.appendChild(r), p(r, {
                        xmlns: tt
                    }), t = n.innerHTML, e.removeChild(e.firstChild), t
                }, dt.clear = function() {
                    for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName && e.parentNode.removeChild(e), e = t
                }, l.ajax = function(t, e, n, r) {
                    var i = new XMLHttpRequest,
                        o = Q();
                    if (i) {
                        if (y(e, "function")) r = n, n = e, e = null;
                        else if (y(e, "object")) {
                            var a = [];
                            for (var s in e) e.hasOwnProperty(s) && a.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
                            e = a.join("&")
                        }
                        return i.open(e ? "POST" : "GET", t, !0), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n && (mt.once("snap.ajax." + o + ".0", n), mt.once("snap.ajax." + o + ".200", n), mt.once("snap.ajax." + o + ".304", n)), i.onreadystatechange = function() {
                            4 == i.readyState && mt("snap.ajax." + o + "." + i.status, r, i)
                        }, 4 == i.readyState || i.send(e), i
                    }
                }, l.load = function(t, n, r) {
                    l.ajax(t, function(t) {
                        var e = l.parse(t.responseText);
                        r ? n.call(r, e) : n(e)
                    })
                }, mt.on("snap.util.attr.mask", function(t) {
                    if (t instanceof d || t instanceof v) {
                        if (mt.stop(), t instanceof v && 1 == t.node.childNodes.length && (t = t.node.firstChild, c(this).appendChild(t), t = w(t)), "mask" == t.type) var e = t;
                        else(e = b("mask", c(this))).node.appendChild(t.node), !e.node.id && p(e.node, {
                            id: e.id
                        });
                        p(this.node, {
                            mask: nt(e.id)
                        })
                    }
                }), ft = function(t) {
                    if (t instanceof d || t instanceof v) {
                        if (mt.stop(), "clipPath" == t.type) var e = t;
                        else(e = b("clipPath", c(this))).node.appendChild(t.node), !e.node.id && p(e.node, {
                            id: e.id
                        });
                        p(this.node, {
                            "clip-path": nt(e.id)
                        })
                    }
                }, mt.on("snap.util.attr.clip", ft), mt.on("snap.util.attr.clip-path", ft), mt.on("snap.util.attr.clipPath", ft), mt.on("snap.util.attr.fill", t("fill")), mt.on("snap.util.attr.stroke", t("stroke"));
            var pt = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            mt.on("snap.util.grad.parse", function(t) {
                var e = (t = A(t)).match(pt);
                if (!e) return null;
                var n = e[1],
                    r = e[2],
                    i = e[3];
                return 1 == (r = r.split(/\s*,\s*/).map(function(t) {
                    return +t == t ? +t : t
                })).length && 0 == r[0] && (r = []), {
                    type: n,
                    params: r,
                    stops: i = (i = i.split("-")).map(function(t) {
                        var e = {
                            color: (t = t.split(":"))[0]
                        };
                        return t[1] && (e.offset = t[1]), e
                    })
                }
            }), mt.on("snap.util.attr.d", function(t) {
                mt.stop(), y(t, "array") && y(t[0], "array") && (t = l.path.toString.call(t)), (t = A(t)).match(/[ruo]/i) && (t = l.path.toAbsolute(t)), p(this.node, {
                    d: t
                })
            })(-1), mt.on("snap.util.attr.#text", function(t) {
                mt.stop(), t = A(t);
                for (var e = B.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(e)
            })(-1), mt.on("snap.util.attr.path", function(t) {
                mt.stop(), this.attr({
                    d: t
                })
            })(-1), mt.on("snap.util.attr.viewBox", function(t) {
                var e;
                e = y(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : y(t, "array") ? t.join(" ") : t, p(this.node, {
                    viewBox: e
                }), mt.stop()
            })(-1), mt.on("snap.util.attr.transform", function(t) {
                this.transform(t), mt.stop()
            })(-1), mt.on("snap.util.attr.r", function(t) {
                "rect" == this.type && (mt.stop(), p(this.node, {
                    rx: t,
                    ry: t
                }))
            })(-1), mt.on("snap.util.attr.textpath", function(t) {
                if (mt.stop(), "text" == this.type) {
                    var e, n, r;
                    if (!t && this.textPath) {
                        for (n = this.textPath; n.node.firstChild;) this.node.appendChild(n.node.firstChild);
                        return n.remove(), void delete this.textPath
                    }
                    if (y(t, "string")) {
                        var i = c(this),
                            o = w(i.parentNode).path(t);
                        i.appendChild(o.node), e = o.id, o.attr({
                            id: e
                        })
                    } else(t = w(t)) instanceof d && ((e = t.attr("id")) || (e = t.id, t.attr({
                        id: e
                    })));
                    if (e)
                        if (n = this.textPath, r = this.node, n) n.attr({
                            "xlink:href": "#" + e
                        });
                        else {
                            for (n = p("textPath", {
                                    "xlink:href": "#" + e
                                }); r.firstChild;) n.appendChild(r.firstChild);
                            r.appendChild(n), this.textPath = w(n)
                        }
                }
            })(-1), mt.on("snap.util.attr.text", function(t) {
                if ("text" == this.type) {
                    for (var e = this.node, r = function(t) {
                            var e = p("tspan");
                            if (y(t, "array"))
                                for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                            else e.appendChild(B.doc.createTextNode(t));
                            return e.normalize && e.normalize(), e
                        }; e.firstChild;) e.removeChild(e.firstChild);
                    for (var n = r(t); n.firstChild;) e.appendChild(n.firstChild)
                }
                mt.stop()
            })(-1);
            var gt = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            mt.on("snap.util.attr", function(t) {
                    var e = mt.nt(),
                        n = {};
                    n[e = e.substring(e.lastIndexOf(".") + 1)] = t;
                    var r = e.replace(/-(\w)/gi, function(t, e) {
                            return e.toUpperCase()
                        }),
                        i = e.replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    gt[_](i) ? this.node.style[r] = null == t ? D : t : p(this.node, n)
                }), mt.on("snap.util.getattr.transform", function() {
                    return mt.stop(), this.transform()
                })(-1), mt.on("snap.util.getattr.textpath", function() {
                    return mt.stop(), this.textPath
                })(-1),
                function() {
                    function t(e) {
                        return function() {
                            mt.stop();
                            var t = B.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + e);
                            return "none" == t ? t : l(B.doc.getElementById(t.match(G)[1]))
                        }
                    }

                    function e(r) {
                        return function(t) {
                            mt.stop();
                            var e = "marker" + r.charAt(0).toUpperCase() + r.substring(1);
                            if ("" != t && t) {
                                if ("marker" == t.type) {
                                    var n = t.node.id;
                                    return n || p(t.node, {
                                        id: t.id
                                    }), void(this.node.style[e] = nt(n))
                                }
                            } else this.node.style[e] = "none"
                        }
                    }
                    mt.on("snap.util.getattr.marker-end", t("end"))(-1), mt.on("snap.util.getattr.markerEnd", t("end"))(-1), mt.on("snap.util.getattr.marker-start", t("start"))(-1), mt.on("snap.util.getattr.markerStart", t("start"))(-1), mt.on("snap.util.getattr.marker-mid", t("mid"))(-1), mt.on("snap.util.getattr.markerMid", t("mid"))(-1), mt.on("snap.util.attr.marker-end", e("end"))(-1), mt.on("snap.util.attr.markerEnd", e("end"))(-1), mt.on("snap.util.attr.marker-start", e("start"))(-1), mt.on("snap.util.attr.markerStart", e("start"))(-1), mt.on("snap.util.attr.marker-mid", e("mid"))(-1), mt.on("snap.util.attr.markerMid", e("mid"))(-1)
                }(), mt.on("snap.util.getattr.r", function() {
                    return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (mt.stop(), p(this.node, "rx")) : void 0
                })(-1), mt.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        mt.stop();
                        var t = function t(e) {
                            for (var n = [], r = e.childNodes, i = 0, o = r.length; i < o; i++) {
                                var a = r[i];
                                3 == a.nodeType && n.push(a.nodeValue), "tspan" == a.tagName && (1 == a.childNodes.length && 3 == a.firstChild.nodeType ? n.push(a.firstChild.nodeValue) : n.push(t(a)))
                            }
                            return n
                        }(this.node);
                        return 1 == t.length ? t[0] : t
                    }
                })(-1), mt.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1), mt.on("snap.util.getattr.viewBox", function() {
                    mt.stop();
                    var t = p(this.node, "viewBox").split(V);
                    return l._.box(+t[0], +t[1], +t[2], +t[3])
                })(-1), mt.on("snap.util.getattr.points", function() {
                    var t = p(this.node, "points");
                    return mt.stop(), t.split(V)
                }), mt.on("snap.util.getattr.path", function() {
                    var t = p(this.node, "d");
                    return mt.stop(), t
                }), mt.on("snap.util.getattr", function() {
                    var t = mt.nt(),
                        e = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    return gt[_](e) ? B.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(e) : p(this.node, t)
                });
            return l.getElementByPoint = function(t, e) {
                var n, r, i, o, a, s, l, u = (this.canvas, B.doc.elementFromPoint(t, e));
                if (B.win.opera && "svg" == u.tagName) {
                    var c = (r = (n = u).getBoundingClientRect(), i = n.ownerDocument, o = i.body, a = i.documentElement, s = a.clientTop || o.clientTop || 0, l = a.clientLeft || o.clientLeft || 0, {
                            y: r.top + (g.win.pageYOffset || a.scrollTop || o.scrollTop) - s,
                            x: r.left + (g.win.pageXOffset || a.scrollLeft || o.scrollLeft) - l
                        }),
                        f = u.createSVGRect();
                    f.x = t - c.x, f.y = e - c.y, f.width = f.height = 1;
                    var d = u.getIntersectionList(f, null);
                    d.length && (u = d[d.length - 1])
                }
                return u ? w(u) : null
            }, l.plugin = function(t) {
                t(l, d, m, B)
            }, B.win.Snap = l
        }();
    return e.plugin(function(V, v) {
        function x(e) {
            var n = x.ps = x.ps || {};
            return n[e] ? n[e].sleep = 100 : n[e] = {
                sleep: 100
            }, setTimeout(function() {
                for (var t in n) n[r](t) && t != e && (n[t].sleep--, !n[t].sleep && delete n[t])
            }), n[e]
        }

        function h(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: I.min(n, r) / 2,
                r2: I.max(n, r) / 2,
                r0: I.sqrt(n * n + r * r) / 2,
                path: s(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }

        function b() {
            return this.join(",").replace(n, "$1")
        }

        function w(t) {
            var e = g(t);
            return e.toString = b, e
        }

        function m(t, e, n, r, i, o, a, s, l) {
            return null == l ? E(t, e, n, r, i, o, a, s) : C(t, e, n, r, i, o, a, s, function(t, e, n, r, i, o, a, s, l) {
                if (!(l < 0 || E(t, e, n, r, i, o, a, s) < l)) {
                    var u, c = .5,
                        f = 1 - c;
                    for (u = E(t, e, n, r, i, o, a, s, f); .01 < X(u - l);) u = E(t, e, n, r, i, o, a, s, f += (u < l ? 1 : -1) * (c /= 2));
                    return f
                }
            }(t, e, n, r, i, o, a, s, l))
        }

        function t(h, p) {
            function g(t) {
                return +(+t).toFixed(3)
            }
            return V._.cacher(function(t, e, n) {
                t instanceof v && (t = t.attr("d"));
                for (var r, i, o, a, s, l = "", u = {}, c = 0, f = 0, d = (t = P(t)).length; f < d; f++) {
                    if ("M" == (o = t[f])[0]) r = +o[1], i = +o[2];
                    else {
                        if (e < c + (a = m(r, i, o[1], o[2], o[3], o[4], o[5], o[6]))) {
                            if (p && !u.start) {
                                if (l += ["C" + g((s = m(r, i, o[1], o[2], o[3], o[4], o[5], o[6], e - c)).start.x), g(s.start.y), g(s.m.x), g(s.m.y), g(s.x), g(s.y)], n) return l;
                                u.start = l, l = ["M" + g(s.x), g(s.y) + "C" + g(s.n.x), g(s.n.y), g(s.end.x), g(s.end.y), g(o[5]), g(o[6])].join(), c += a, r = +o[5], i = +o[6];
                                continue
                            }
                            if (!h && !p) return m(r, i, o[1], o[2], o[3], o[4], o[5], o[6], e - c)
                        }
                        c += a, r = +o[5], i = +o[6]
                    }
                    l += o.shift() + o
                }
                return u.end = l, h ? c : p ? u : C(r, i, o[0], o[1], o[2], o[3], o[4], o[5], 1)
            }, null, V._.clone)
        }

        function C(t, e, n, r, i, o, a, s, l) {
            var u = 1 - l,
                c = D(u, 3),
                f = D(u, 2),
                d = l * l,
                h = d * l,
                p = t + 2 * l * (n - t) + d * (i - 2 * n + t),
                g = e + 2 * l * (r - e) + d * (o - 2 * r + e),
                v = n + 2 * l * (i - n) + d * (a - 2 * i + n),
                m = r + 2 * l * (o - r) + d * (s - 2 * o + r);
            return {
                x: c * t + 3 * f * l * n + 3 * u * l * l * i + h * a,
                y: c * e + 3 * f * l * r + 3 * u * l * l * o + h * s,
                m: {
                    x: p,
                    y: g
                },
                n: {
                    x: v,
                    y: m
                },
                start: {
                    x: u * t + l * n,
                    y: u * e + l * r
                },
                end: {
                    x: u * i + l * a,
                    y: u * o + l * s
                },
                alpha: 90 - 180 * I.atan2(p - v, g - m) / H
            }
        }

        function S(t, e, n, r, i, o, a, s) {
            V.is(t, "array") || (t = [t, e, n, r, i, o, a, s]);
            var l = p.apply(null, t);
            return h(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
        }

        function i(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function k(t, e) {
            return t = h(t), i(e = h(e), t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function y(t, e, n, r, i) {
            return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
        }

        function E(t, e, n, r, i, o, a, s, l) {
            null == l && (l = 1);
            for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, h = 0; h < 12; h++) {
                var p = u * c[h] + u,
                    g = y(p, t, n, i, a),
                    v = y(p, e, r, o, s),
                    m = g * g + v * v;
                d += f[h] * I.sqrt(m)
            }
            return u * d
        }

        function T(t, e, n, r, i, o, a, s) {
            if (!(z(t, n) < O(i, a) || O(t, n) > z(i, a) || z(e, r) < O(o, s) || O(e, r) > z(o, s))) {
                var l = (t - n) * (o - s) - (e - r) * (i - a);
                if (l) {
                    var u = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / l,
                        c = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / l,
                        f = +u.toFixed(2),
                        d = +c.toFixed(2);
                    if (!(f < +O(t, n).toFixed(2) || f > +z(t, n).toFixed(2) || f < +O(i, a).toFixed(2) || f > +z(i, a).toFixed(2) || d < +O(e, r).toFixed(2) || d > +z(e, r).toFixed(2) || d < +O(o, s).toFixed(2) || d > +z(o, s).toFixed(2))) return {
                        x: u,
                        y: c
                    }
                }
            }
        }

        function M(t, e, n) {
            if (!k(S(t), S(e))) return n ? 0 : [];
            for (var r = ~~(E.apply(0, t) / 5), i = ~~(E.apply(0, e) / 5), o = [], a = [], s = {}, l = n ? 0 : [], u = 0; u < r + 1; u++) {
                var c = C.apply(0, t.concat(u / r));
                o.push({
                    x: c.x,
                    y: c.y,
                    t: u / r
                })
            }
            for (u = 0; u < i + 1; u++) c = C.apply(0, e.concat(u / i)), a.push({
                x: c.x,
                y: c.y,
                t: u / i
            });
            for (u = 0; u < r; u++)
                for (var f = 0; f < i; f++) {
                    var d = o[u],
                        h = o[u + 1],
                        p = a[f],
                        g = a[f + 1],
                        v = X(h.x - d.x) < .001 ? "y" : "x",
                        m = X(g.x - p.x) < .001 ? "y" : "x",
                        y = T(d.x, d.y, h.x, h.y, p.x, p.y, g.x, g.y);
                    if (y) {
                        if (s[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
                        s[y.x.toFixed(4)] = y.y.toFixed(4);
                        var x = d.t + X((y[v] - d[v]) / (h[v] - d[v])) * (h.t - d.t),
                            b = p.t + X((y[m] - p[m]) / (g[m] - p[m])) * (g.t - p.t);
                        0 <= x && x <= 1 && 0 <= b && b <= 1 && (n ? l++ : l.push({
                            x: y.x,
                            y: y.y,
                            t1: x,
                            t2: b
                        }))
                    }
                }
            return l
        }

        function o(t, e, n) {
            t = P(t), e = P(e);
            for (var r, i, o, a, s, l, u, c, f, d, h = n ? 0 : [], p = 0, g = t.length; p < g; p++) {
                var v = t[p];
                if ("M" == v[0]) r = s = v[1], i = l = v[2];
                else {
                    i = "C" == v[0] ? (r = (f = [r, i].concat(v.slice(1)))[6], f[7]) : (f = [r, i, r, i, s, l, s, l], r = s, l);
                    for (var m = 0, y = e.length; m < y; m++) {
                        var x = e[m];
                        if ("M" == x[0]) o = u = x[1], a = c = x[2];
                        else {
                            a = "C" == x[0] ? (o = (d = [o, a].concat(x.slice(1)))[6], d[7]) : (d = [o, a, o, a, u, c, u, c], o = u, c);
                            var b = M(f, d, n);
                            if (n) h += b;
                            else {
                                for (var w = 0, C = b.length; w < C; w++) b[w].segment1 = p, b[w].segment2 = m, b[w].bez1 = f, b[w].bez2 = d;
                                h = h.concat(b)
                            }
                        }
                    }
                }
            }
            return h
        }

        function a(t) {
            var e = x(t);
            if (e.bbox) return g(e.bbox);
            if (!t) return h();
            for (var n, r = 0, i = 0, o = [], a = [], s = 0, l = (t = P(t)).length; s < l; s++)
                if ("M" == (n = t[s])[0]) r = n[1], i = n[2], o.push(r), a.push(i);
                else {
                    var u = p(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
                    o = o.concat(u.min.x, u.max.x), a = a.concat(u.min.y, u.max.y), r = n[5], i = n[6]
                }
            var c = O.apply(0, o),
                f = O.apply(0, a),
                d = h(c, f, z.apply(0, o) - c, z.apply(0, a) - f);
            return e.bbox = g(d), d
        }

        function s(t, e, n, r, i) {
            if (i) return [
                ["M", t + i, e],
                ["l", n - 2 * i, 0],
                ["a", i, i, 0, 0, 1, i, i],
                ["l", 0, r - 2 * i],
                ["a", i, i, 0, 0, 1, -i, i],
                ["l", 2 * i - n, 0],
                ["a", i, i, 0, 0, 1, -i, -i],
                ["l", 0, 2 * i - r],
                ["a", i, i, 0, 0, 1, i, -i],
                ["z"]
            ];
            var o = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ];
            return o.toString = b, o
        }

        function B(t, e, n, r, i) {
            if (null == i && null == r && (r = n), null != i) var o = Math.PI / 180,
                a = t + n * Math.cos(-r * o),
                s = t + n * Math.cos(-i * o),
                l = [
                    ["M", a, e + n * Math.sin(-r * o)],
                    ["A", n, n, 0, +(180 < i - r), 0, s, e + n * Math.sin(-i * o)]
                ];
            else l = [
                ["M", t, e],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ];
            return l.toString = b, l
        }

        function F(t) {
            var e = x(t);
            if (e.abs) return w(e.abs);
            if (L(t, "array") && L(t && t[0], "array") || (t = V.parsePathString(t)), !t || !t.length) return [
                ["M", 0, 0]
            ];
            var n, r = [],
                i = 0,
                o = 0,
                a = 0,
                s = 0,
                l = 0;
            "M" == t[0][0] && (a = i = +t[0][1], s = o = +t[0][2], l++, r[0] = ["M", i, o]);
            for (var u, c, f = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), d = l, h = t.length; d < h; d++) {
                if (r.push(u = []), (n = (c = t[d])[0]) != n.toUpperCase()) switch (u[0] = n.toUpperCase(), u[0]) {
                        case "A":
                            u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] + i), u[7] = +(c[7] + o);
                            break;
                        case "V":
                            u[1] = +c[1] + o;
                            break;
                        case "H":
                            u[1] = +c[1] + i;
                            break;
                        case "R":
                            for (var p = [i, o].concat(c.slice(1)), g = 2, v = p.length; g < v; g++) p[g] = +p[g] + i, p[++g] = +p[g] + o;
                            r.pop(), r = r.concat(j(p, f));
                            break;
                        case "O":
                            r.pop(), (p = B(i, o, c[1], c[2])).push(p[0]), r = r.concat(p);
                            break;
                        case "U":
                            r.pop(), r = r.concat(B(i, o, c[1], c[2], c[3])), u = ["U"].concat(r[r.length - 1].slice(-2));
                            break;
                        case "M":
                            a = +c[1] + i, s = +c[2] + o;
                        default:
                            for (g = 1, v = c.length; g < v; g++) u[g] = +c[g] + (g % 2 ? i : o)
                    } else if ("R" == n) p = [i, o].concat(c.slice(1)), r.pop(), r = r.concat(j(p, f)), u = ["R"].concat(c.slice(-2));
                    else if ("O" == n) r.pop(), (p = B(i, o, c[1], c[2])).push(p[0]), r = r.concat(p);
                else if ("U" == n) r.pop(), r = r.concat(B(i, o, c[1], c[2], c[3])), u = ["U"].concat(r[r.length - 1].slice(-2));
                else
                    for (var m = 0, y = c.length; m < y; m++) u[m] = c[m];
                if ("O" != (n = n.toUpperCase())) switch (u[0]) {
                    case "Z":
                        i = a, o = s;
                        break;
                    case "H":
                        i = u[1];
                        break;
                    case "V":
                        o = u[1];
                        break;
                    case "M":
                        a = u[u.length - 2], s = u[u.length - 1];
                    default:
                        i = u[u.length - 2], o = u[u.length - 1]
                }
            }
            return r.toString = b, e.abs = w(r), r
        }

        function _(t, e, n, r) {
            return [t, e, n, r, n, r]
        }

        function A(t, e, n, r, i, o) {
            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
        }

        function N(t, e, n, r, i, o, a, s, l) {
            var u = 1 - l;
            return {
                x: D(u, 3) * t + 3 * D(u, 2) * l * n + 3 * u * l * l * i + D(l, 3) * a,
                y: D(u, 3) * e + 3 * D(u, 2) * l * r + 3 * u * l * l * o + D(l, 3) * s
            }
        }

        function p(t, e, n, r, i, o, a, s) {
            var l, u = i - 2 * n + t - (a - 2 * i + n),
                c = 2 * (n - t) - 2 * (i - n),
                f = t - n,
                d = (-c + I.sqrt(c * c - 4 * u * f)) / 2 / u,
                h = (-c - I.sqrt(c * c - 4 * u * f)) / 2 / u,
                p = [e, s],
                g = [t, a];
            return "1e12" < X(d) && (d = .5), "1e12" < X(h) && (h = .5), 0 < d && d < 1 && (l = N(t, e, n, r, i, o, a, s, d), g.push(l.x), p.push(l.y)), 0 < h && h < 1 && (l = N(t, e, n, r, i, o, a, s, h), g.push(l.x), p.push(l.y)), u = o - 2 * r + e - (s - 2 * o + r), f = e - r, d = (-(c = 2 * (r - e) - 2 * (o - r)) + I.sqrt(c * c - 4 * u * f)) / 2 / u, h = (-c - I.sqrt(c * c - 4 * u * f)) / 2 / u, "1e12" < X(d) && (d = .5), "1e12" < X(h) && (h = .5), 0 < d && d < 1 && (l = N(t, e, n, r, i, o, a, s, d), g.push(l.x), p.push(l.y)), 0 < h && h < 1 && (l = N(t, e, n, r, i, o, a, s, h), g.push(l.x), p.push(l.y)), {
                min: {
                    x: O.apply(0, g),
                    y: O.apply(0, p)
                },
                max: {
                    x: z.apply(0, g),
                    y: z.apply(0, p)
                }
            }
        }

        function P(t, e) {
            var n = !e && x(t);
            if (!e && n.curve) return w(n.curve);
            for (var o = F(t), a = e && F(e), r = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, s = function(t, e) {
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"].concat(function t(e, n, r, i, o, a, s, l, u, c) {
                                var f, d = 120 * H / 180,
                                    h = H / 180 * (+o || 0),
                                    p = [],
                                    g = V._.cacher(function(t, e, n) {
                                        return {
                                            x: t * I.cos(n) - e * I.sin(n),
                                            y: t * I.sin(n) + e * I.cos(n)
                                        }
                                    });
                                if (c) k = c[0], E = c[1], C = c[2], S = c[3];
                                else {
                                    e = (f = g(e, n, -h)).x, n = f.y, l = (f = g(l, u, -h)).x, u = f.y;
                                    var v = (I.cos(H / 180 * o), I.sin(H / 180 * o), (e - l) / 2),
                                        m = (n - u) / 2,
                                        y = v * v / (r * r) + m * m / (i * i);
                                    1 < y && (r *= y = I.sqrt(y), i *= y);
                                    var x = r * r,
                                        b = i * i,
                                        w = (a == s ? -1 : 1) * I.sqrt(X((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))),
                                        C = w * r * m / i + (e + l) / 2,
                                        S = w * -i * v / r + (n + u) / 2,
                                        k = I.asin(((n - S) / i).toFixed(9)),
                                        E = I.asin(((u - S) / i).toFixed(9));
                                    (k = e < C ? H - k : k) < 0 && (k = 2 * H + k), (E = l < C ? H - E : E) < 0 && (E = 2 * H + E), s && E < k && (k -= 2 * H), !s && k < E && (E -= 2 * H)
                                }
                                var T = E - k;
                                if (X(T) > d) {
                                    var M = E,
                                        B = l,
                                        F = u;
                                    E = k + d * (s && k < E ? 1 : -1), p = t(l = C + r * I.cos(E), u = S + i * I.sin(E), r, i, o, 0, s, B, F, [E, M, C, S])
                                }
                                T = E - k;
                                var _ = I.cos(k),
                                    A = I.sin(k),
                                    N = I.cos(E),
                                    P = I.sin(E),
                                    j = I.tan(T / 4),
                                    L = 4 / 3 * r * j,
                                    q = 4 / 3 * i * j,
                                    O = [e, n],
                                    z = [e + L * A, n - q * _],
                                    D = [l + L * P, u - q * N],
                                    R = [l, u];
                                if (z[0] = 2 * O[0] - z[0], z[1] = 2 * O[1] - z[1], c) return [z, D, R].concat(p);
                                for (var U = [], G = 0, $ = (p = [z, D, R].concat(p).join().split(",")).length; G < $; G++) U[G] = G % 2 ? g(p[G - 1], p[G], h).y : g(p[G], p[G + 1], h).x;
                                return U
                            }.apply(0, [e.x, e.y].concat(t.slice(1))));
                            break;
                        case "S":
                            t = ["C", e.x + (e.x - (e.bx || e.x)), e.y + (e.y - (e.by || e.y))].concat(t.slice(1));
                            break;
                        case "T":
                            e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"].concat(A(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"].concat(A(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"].concat(_(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"].concat(_(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"].concat(_(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"].concat(_(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }, l = function(t, e) {
                    if (7 < t[e].length) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                        t.splice(e, 1), f = z(o.length, a && a.length || 0)
                    }
                }, u = function(t, e, n, r, i) {
                    t && e && "M" == t[i][0] && "M" != e[i][0] && (e.splice(i, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[i][1], n.y = t[i][2], f = z(o.length, a && a.length || 0))
                }, c = 0, f = z(o.length, a && a.length || 0); c < f; c++) {
                o[c] = s(o[c], r), l(o, c), a && (a[c] = s(a[c], i)), a && l(a, c), u(o, a, r, i, c), u(a, o, i, r, c);
                var d = o[c],
                    h = a && a[c],
                    p = d.length,
                    g = a && h.length;
                r.x = d[p - 2], r.y = d[p - 1], r.bx = q(d[p - 4]) || r.x, r.by = q(d[p - 3]) || r.y, i.bx = a && (q(h[g - 4]) || i.x), i.by = a && (q(h[g - 3]) || i.y), i.x = a && h[g - 2], i.y = a && h[g - 1]
            }
            return a || (n.curve = w(o)), a ? [o, a] : o
        }

        function j(t, e) {
            for (var n = [], r = 0, i = t.length; r < i - 2 * !e; r += 2) {
                var o = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                }, {
                    x: +t[r],
                    y: +t[r + 1]
                }, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? o[3] = {
                    x: +t[0],
                    y: +t[1]
                } : i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }
        var e = v.prototype,
            L = V.is,
            g = V._.clone,
            r = "hasOwnProperty",
            n = /,?([a-z]),?/gi,
            q = parseFloat,
            I = Math,
            H = I.PI,
            O = I.min,
            z = I.max,
            D = I.pow,
            X = I.abs,
            l = t(1),
            u = t(),
            c = t(0, 1),
            f = V._unit2px,
            d = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = f(t);
                    return B(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = f(t);
                    return B(e.cx, e.cy, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = f(t);
                    return s(e.x, e.y, e.width, e.height, e.rx, e.ry)
                },
                image: function(t) {
                    var e = f(t);
                    return s(e.x, e.y, e.width, e.height)
                },
                text: function(t) {
                    var e = t.node.getBBox();
                    return s(e.x, e.y, e.width, e.height)
                },
                g: function(t) {
                    var e = t.node.getBBox();
                    return s(e.x, e.y, e.width, e.height)
                },
                symbol: function(t) {
                    var e = t.getBBox();
                    return s(e.x, e.y, e.width, e.height)
                },
                line: function(t) {
                    return "M" + [t.attr("x1"), t.attr("y1"), t.attr("x2"), t.attr("y2")]
                },
                polyline: function(t) {
                    return "M" + t.attr("points")
                },
                polygon: function(t) {
                    return "M" + t.attr("points") + "z"
                },
                svg: function(t) {
                    var e = t.node.getBBox();
                    return s(e.x, e.y, e.width, e.height)
                },
                deflt: function(t) {
                    var e = t.node.getBBox();
                    return s(e.x, e.y, e.width, e.height)
                }
            };
        V.path = x, V.path.getTotalLength = l, V.path.getPointAtLength = u, V.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return c(t, e).end;
            var r = c(t, n, 1);
            return e ? c(r, e).end : r
        }, e.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, e.getPointAtLength = function(t) {
            return u(this.attr("d"), t)
        }, e.getSubpath = function(t, e) {
            return V.path.getSubpath(this.attr("d"), t, e)
        }, V._.box = h, V.path.findDotsAtSegment = C, V.path.bezierBBox = S, V.path.isPointInsideBBox = i, V.path.isBBoxIntersect = k, V.path.intersection = function(t, e) {
            return o(t, e)
        }, V.path.intersectionNumber = function(t, e) {
            return o(t, e, 1)
        }, V.path.isPointInside = function(t, e, n) {
            var r = a(t);
            return i(r, e, n) && 1 == o(t, [
                ["M", e, n],
                ["H", r.x2 + 10]
            ], 1) % 2
        }, V.path.getBBox = a, V.path.get = d, V.path.toRelative = function(t) {
            var e = x(t),
                n = String.prototype.toLowerCase;
            if (e.rel) return w(e.rel);
            V.is(t, "array") && V.is(t && t[0], "array") || (t = V.parsePathString(t));
            var r = [],
                i = 0,
                o = 0,
                a = 0,
                s = 0,
                l = 0;
            "M" == t[0][0] && (a = i = t[0][1], s = o = t[0][2], l++, r.push(["M", i, o]));
            for (var u = l, c = t.length; u < c; u++) {
                var f = r[u] = [],
                    d = t[u];
                if (d[0] != n.call(d[0])) switch (f[0] = n.call(d[0]), f[0]) {
                    case "a":
                        f[1] = d[1], f[2] = d[2], f[3] = d[3], f[4] = d[4], f[5] = d[5], f[6] = +(d[6] - i).toFixed(3), f[7] = +(d[7] - o).toFixed(3);
                        break;
                    case "v":
                        f[1] = +(d[1] - o).toFixed(3);
                        break;
                    case "m":
                        a = d[1], s = d[2];
                    default:
                        for (var h = 1, p = d.length; h < p; h++) f[h] = +(d[h] - (h % 2 ? i : o)).toFixed(3)
                } else {
                    f = r[u] = [], "m" == d[0] && (a = d[1] + i, s = d[2] + o);
                    for (var g = 0, v = d.length; g < v; g++) r[u][g] = d[g]
                }
                var m = r[u].length;
                switch (r[u][0]) {
                    case "z":
                        i = a, o = s;
                        break;
                    case "h":
                        i += +r[u][m - 1];
                        break;
                    case "v":
                        o += +r[u][m - 1];
                        break;
                    default:
                        i += +r[u][m - 2], o += +r[u][m - 1]
                }
            }
            return r.toString = b, e.rel = w(r), r
        }, V.path.toAbsolute = F, V.path.toCubic = P, V.path.map = function(t, e) {
            if (!e) return t;
            var n, r, i, o, a, s, l;
            for (i = 0, a = (t = P(t)).length; i < a; i++)
                for (o = 1, s = (l = t[i]).length; o < s; o += 2) n = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
            return t
        }, V.path.toString = b, V.path.clone = w
    }), e.plugin(function(t) {
        var s = Math.max,
            l = Math.min,
            u = function(t) {
                if (this.items = [], this.length = 0, this.type = "set", t)
                    for (var e = 0, n = t.length; e < n; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            e = u.prototype;
        e.push = function() {
            for (var t, e, n = 0, r = arguments.length; n < r; n++)(t = arguments[n]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
            return this
        }, e.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, e.forEach = function(t, e) {
            for (var n = 0, r = this.items.length; n < r; n++)
                if (!1 === t.call(e, this.items[n], n)) return this;
            return this
        }, e.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, e.attr = function(t) {
            for (var e = 0, n = this.items.length; e < n; e++) this.items[e].attr(t);
            return this
        }, e.clear = function() {
            for (; this.length;) this.pop()
        }, e.splice = function(t, e) {
            t = t < 0 ? s(this.length + t, 0) : t, e = s(0, l(this.length - t, e));
            var n, r = [],
                i = [],
                o = [];
            for (n = 2; n < arguments.length; n++) o.push(arguments[n]);
            for (n = 0; n < e; n++) i.push(this[t + n]);
            for (; n < this.length - t; n++) r.push(this[t + n]);
            var a = o.length;
            for (n = 0; n < a + r.length; n++) this.items[t + n] = this[t + n] = n < a ? o[n] : r[n - a];
            for (n = this.items.length = this.length -= e - a; this[n];) delete this[n++];
            return new u(i)
        }, e.exclude = function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, e.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, e.getBBox = function() {
            for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
                if (!this.items[i].removed) {
                    var o = this.items[i].getBBox();
                    t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
                }
            return {
                x: t = l.apply(0, t),
                y: e = l.apply(0, e),
                x2: n = s.apply(0, n),
                y2: r = s.apply(0, r),
                width: n - t,
                height: r - e,
                cx: t + (n - t) / 2,
                cy: e + (r - e) / 2
            }
        }, e.clone = function(t) {
            t = new u;
            for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
            return t
        }, e.toString = function() {
            return "Snap‘s set"
        }, e.type = "set", t.set = function() {
            var t = new u;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), e.plugin(function(f, t) {
        function d(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function u(t) {
            return t
        }

        function c(t) {
            return f.rgb(t[0], t[1], t[2])
        }

        function h(t) {
            var e, n, r, i, o, a, s = 0,
                l = [];
            for (e = 0, n = t.length; e < n; e++) {
                for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; r < i; r++) a[r] = "val[" + s++ + "]";
                o += a + "]", l[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }

        function p(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++)
                for (var i = 1, o = t[n].length; i < o; i++) e.push(t[n][i]);
            return e
        }
        var g = {},
            v = /[a-z]+$/i,
            m = String;
        g.stroke = g.fill = "colour", t.prototype.equal = function(t, e) {
            var n, r, i = m(this.attr(t) || ""),
                o = this;
            if (i == +i && e == +e) return {
                from: +i,
                to: +e,
                f: u
            };
            if ("colour" == g[t]) return n = f.color(i), r = f.color(e), {
                from: [n.r, n.g, n.b, n.opacity],
                to: [r.r, r.g, r.b, r.opacity],
                f: c
            };
            if ("transform" == t || "gradientTransform" == t || "patternTransform" == t) return e instanceof f.Matrix && (e = e.toTransformString()), f._.rgTransform.test(e) || (e = f._.svgTransform2string(e)),
                function(t, e, n) {
                    e = m(e).replace(/\.{3}|\u2026/g, t), t = f.parseTransformString(t) || [], e = f.parseTransformString(e) || [];
                    for (var r, i, o, a, s = Math.max(t.length, e.length), l = [], u = [], c = 0; c < s; c++) {
                        if (o = t[c] || d(e[c]), a = e[c] || d(o), o[0] != a[0] || "r" == o[0].toLowerCase() && (o[2] != a[2] || o[3] != a[3]) || "s" == o[0].toLowerCase() && (o[3] != a[3] || o[4] != a[4])) {
                            t = f._.transform2matrix(t, n()), e = f._.transform2matrix(e, n()), l = [
                                ["m", t.a, t.b, t.c, t.d, t.e, t.f]
                            ], u = [
                                ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                            ];
                            break
                        }
                        for (l[c] = [], u[c] = [], r = 0, i = Math.max(o.length, a.length); r < i; r++) r in o && (l[c][r] = o[r]), r in a && (u[c][r] = a[r])
                    }
                    return {
                        from: p(l),
                        to: p(u),
                        f: h(l)
                    }
                }(i, e, function() {
                    return o.getBBox(1)
                });
            if ("d" == t || "path" == t) return {
                from: p((n = f.path.toCubic(i, e))[0]),
                to: p(n[1]),
                f: h(n[0])
            };
            if ("points" == t) return {
                from: n = m(i).split(","),
                to: r = m(e).split(","),
                f: function(t) {
                    return t
                }
            };
            var a, s = i.match(v),
                l = m(e).match(v);
            return s && s == l ? {
                from: parseFloat(i),
                to: parseFloat(e),
                f: (a = s, function(t) {
                    return +t.toFixed(3) + a
                })
            } : {
                from: this.asPX(t),
                to: this.asPX(t, e),
                f: u
            }
        }
    }), e.plugin(function(c, t, e, s) {
        for (var n = t.prototype, d = ("createTouch" in s.doc), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], h = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, p = function(t) {
                var e = "y" == t ? "scrollTop" : "scrollLeft";
                return s.doc.documentElement[e] || s.doc.body[e]
            }, l = function() {
                this.returnValue = !1
            }, g = function() {
                return this.originalEvent.preventDefault()
            }, u = function() {
                this.cancelBubble = !0
            }, v = function() {
                return this.originalEvent.stopPropagation()
            }, i = s.doc.addEventListener ? function(l, u, c, f) {
                var t = d && h[u] ? h[u] : u,
                    e = function(t) {
                        var e = p("y"),
                            n = p("x");
                        if (d && h.hasOwnProperty(u))
                            for (var r = 0, i = t.targetTouches && t.targetTouches.length; r < i; r++)
                                if (t.targetTouches[r].target == l || l.contains(t.targetTouches[r].target)) {
                                    var o = t;
                                    (t = t.targetTouches[r]).originalEvent = o, t.preventDefault = g, t.stopPropagation = v;
                                    break
                                }
                        var a = t.clientX + n,
                            s = t.clientY + e;
                        return c.call(f, t, a, s)
                    };
                return u !== t && l.addEventListener(u, e, !1), l.addEventListener(t, e, !1),
                    function() {
                        return u !== t && l.removeEventListener(u, e, !1), l.removeEventListener(t, e, !1), !0
                    }
            } : s.doc.attachEvent ? function(t, e, o, a) {
                var n = function(t) {
                    t = t || s.win.event;
                    var e = p("y"),
                        n = p("x"),
                        r = t.clientX + n,
                        i = t.clientY + e;
                    return t.preventDefault = t.preventDefault || l, t.stopPropagation = t.stopPropagation || u, o.call(a, t, r, i)
                };
                return t.attachEvent("on" + e, n),
                    function() {
                        return t.detachEvent("on" + e, n), !0
                    }
            } : void 0, f = [], m = function(t) {
                for (var e, n = t.clientX, r = t.clientY, i = p("y"), o = p("x"), a = f.length; a--;) {
                    if (e = f[a], d) {
                        for (var s, l = t.touches && t.touches.length; l--;)
                            if ((s = t.touches[l]).identifier == e.el._drag.id || e.el.node.contains(s.target)) {
                                n = s.clientX, r = s.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault();
                    var u = e.el.node;
                    c._.glob, u.nextSibling, u.parentNode, u.style.display, n += o, r += i, mt("snap.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, r - e.el._drag.y, n, r, t)
                }
            }, y = function(t) {
                c.unmousemove(m).unmouseup(y);
                for (var e, n = f.length; n--;)(e = f[n]).el._drag = {}, mt("snap.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
                f = []
            }, o = r.length; o--;) ! function(r) {
            c[r] = n[r] = function(t, e) {
                return c.is(t, "function") && (this.events = this.events || [], this.events.push({
                    name: r,
                    f: t,
                    unbind: i(this.shape || this.node || s.doc, r, t, e || this)
                })), this
            }, c["un" + r] = n["un" + r] = function(t) {
                for (var e = this.events || [], n = e.length; n--;)
                    if (e[n].name == r && (e[n].f == t || !t)) return e[n].unbind(), e.splice(n, 1), !e.length && delete this.events, this;
                return this
            }
        }(r[o]);
        n.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, n.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var x = [];
        n.drag = function(r, i, o, a, s, l) {
            function t(t, e, n) {
                (t.originalEvent || t).preventDefault(), this._drag.x = e, this._drag.y = n, this._drag.id = t.identifier, !f.length && c.mousemove(m).mouseup(y), f.push({
                    el: this,
                    move_scope: a,
                    start_scope: s,
                    end_scope: l
                }), i && mt.on("snap.drag.start." + this.id, i), r && mt.on("snap.drag.move." + this.id, r), o && mt.on("snap.drag.end." + this.id, o), mt("snap.drag.start." + this.id, s || a || this, e, n, t)
            }
            return arguments.length ? (this._drag = {}, x.push({
                el: this,
                start: t
            }), this.mousedown(t), this) : this.drag(function(t, e) {
                this.attr({
                    transform: n + (n ? "T" : "t") + [t, e]
                })
            }, function() {
                n = this.transform().local
            });
            var n
        }, n.undrag = function() {
            for (var t = x.length; t--;) x[t].el == this && (this.unmousedown(x[t].start), x.splice(t, 1), mt.unbind("snap.drag.*." + this.id));
            return !x.length && c.unmousemove(m).unmouseup(y), this
        }
    }), e.plugin(function(o, a, t) {
        var e = (a.prototype, t.prototype),
            n = /^\s*url\((.+)\)/,
            s = String,
            l = o._.$;
        o.filter = {}, e.filter = function(t) {
            var e = this;
            "svg" != e.type && (e = e.paper);
            var n = o.parse(s(t)),
                r = o._.id(),
                i = (e.node.offsetWidth, e.node.offsetHeight, l("filter"));
            return l(i, {
                id: r,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(n.node), e.defs.appendChild(i), new a(i)
        }, mt.on("snap.util.getattr.filter", function() {
            mt.stop();
            var t = l(this.node, "filter");
            if (t) {
                var e = s(t).match(n);
                return e && o.select(e[1])
            }
        }), mt.on("snap.util.attr.filter", function(t) {
            if (t instanceof a && "filter" == t.type) {
                mt.stop();
                var e = t.node.id;
                e || (l(t.node, {
                    id: t.id
                }), e = t.id), l(this.node, {
                    filter: o.url(e)
                })
            }
            t && "none" != t || (mt.stop(), this.node.removeAttribute("filter"))
        }), o.filter.blur = function(t, e) {
            null == t && (t = 2);
            var n = null == e ? t : [t, e];
            return o.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: n
            })
        }, o.filter.blur.toString = function() {
            return this()
        }, o.filter.shadow = function(t, e, n, r) {
            return r = r || "#000", null == n && (n = 4), "string" == typeof n && (r = n, n = 4), null == t && (t = 0, e = 2), null == e && (e = t), r = o.color(r), o.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: r,
                dx: t,
                dy: e,
                blur: n
            })
        }, o.filter.shadow.toString = function() {
            return this()
        }, o.filter.grayscale = function(t) {
            return null == t && (t = 1), o.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - t),
                b: .7152 - .7152 * (1 - t),
                c: .0722 - .0722 * (1 - t),
                d: .2126 - .2126 * (1 - t),
                e: .7152 + .2848 * (1 - t),
                f: .0722 - .0722 * (1 - t),
                g: .2126 - .2126 * (1 - t),
                h: .0722 + .9278 * (1 - t)
            })
        }, o.filter.grayscale.toString = function() {
            return this()
        }, o.filter.sepia = function(t) {
            return null == t && (t = 1), o.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - t),
                b: .769 - .769 * (1 - t),
                c: .189 - .189 * (1 - t),
                d: .349 - .349 * (1 - t),
                e: .686 + .314 * (1 - t),
                f: .168 - .168 * (1 - t),
                g: .272 - .272 * (1 - t),
                h: .534 - .534 * (1 - t),
                i: .131 + .869 * (1 - t)
            })
        }, o.filter.sepia.toString = function() {
            return this()
        }, o.filter.saturate = function(t) {
            return null == t && (t = 1), o.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - t
            })
        }, o.filter.saturate.toString = function() {
            return this()
        }, o.filter.hueRotate = function(t) {
            return t = t || 0, o.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: t
            })
        }, o.filter.hueRotate.toString = function() {
            return this()
        }, o.filter.invert = function(t) {
            return null == t && (t = 1), o.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: t,
                amount2: 1 - t
            })
        }, o.filter.invert.toString = function() {
            return this()
        }, o.filter.brightness = function(t) {
            return null == t && (t = 1), o.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: t
            })
        }, o.filter.brightness.toString = function() {
            return this()
        }, o.filter.contrast = function(t) {
            return null == t && (t = 1), o.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: t,
                amount2: .5 - t / 2
            })
        }, o.filter.contrast.toString = function() {
            return this()
        }
    }), e
}),
function(u) {
    u(".overlay-show");
    var o = u("div.ult-overlay");
    o.find("div.ult-overlay-close");

    function n(t) {
        var e = "div.ult-overlay." + t;
        if (joverlay = document.querySelector(e), (o = u(e)).hasClass("ult-open")) {
            o.removeClass("ult-open"), o.addClass("ult-close");
            var n = function(t) {
                if (support.transitions) {
                    if ("visibility" !== t.propertyName) return;
                    this.removeEventListener(transEndEventName, n)
                }
                o.removeClass("ult-close")
            };
            support.transitions ? (joverlay.addEventListener(transEndEventName, n), o.removeClass("ult-close"), i < r && u("html").css({
                overflow: "auto"
            })) : n()
        } else o.hasClass("ult-close") || o.addClass("ult-open");
        var r = o.find(".ult_modal").outerHeight(),
            i = u(window).outerHeight();
        i < r && u("html").css({
            overflow: "hidden"
        })
    }
    transEndEventNames = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
    }, transEndEventName = transEndEventNames[bsfmodernizr.prefixed("transition")], support = {
        transitions: bsfmodernizr.csstransitions
    };
    u(".overlay-show-cornershape").find("path").attr("d");

    function r(t) {
        var e = "div.overlay-cornershape." + t,
            n = document.querySelector(e),
            r = u(e),
            i = Snap(n.querySelector("svg")).select("path"),
            o = "m 0,0 1439.999975,0 0,805.99999 0,-805.99999 z ",
            a = " m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z  ";
        if (r.hasClass("ult-open")) {
            r.removeClass("ult-open"), r.addClass("ult-close");
            i.animate({
                path: o
            }, 400, mina.linear, function(t) {
                r.removeClass("ult-close")
            })
        } else r.hasClass("ult-close") || (r.addClass("ult-open"), i.animate({
            path: a
        }, 400, mina.linear))
    }

    function i(t) {
        var e = "div.overlay-genie." + t,
            n = document.querySelector(e),
            r = u(e),
            i = Snap(n.querySelector("svg")).select("path"),
            o = n.getAttribute("data-steps").split(";"),
            a = o.length;
        if (r.hasClass("ult-open")) {
            var s = a - 1;
            r.removeClass("ult-open"), r.addClass("ult-close");
            (l = function(t) {
                --t < 0 || i.animate({
                    path: o[t]
                }, 60, mina.linear, function() {
                    0 === t && r.removeClass("ult-close"), l(t)
                })
            })(s)
        } else if (!r.hasClass("ult-close")) {
            var l;
            s = 0;
            r.addClass("ult-open"), (l = function(t) {
                a - 1 < ++t || i.animate({
                    path: o[t]
                }, 60, mina.linear, function() {
                    l(t)
                })
            })(s)
        }
    }

    function a(t) {
        var e = "div.overlay-boxes." + t,
            n = document.querySelector(e),
            r = u(e),
            i = [].slice.call(n.querySelectorAll("svg > path")),
            o = i.length,
            a = 0;
        ! function(t) {
            for (var e, n, r = t.length; 0 !== r;) n = Math.floor(Math.random() * r), e = t[r -= 1], t[r] = t[n], t[n] = e
        }(i), r.hasClass("ult-open") ? (r.removeClass("ult-open"), r.addClass("ult-close"), i.forEach(function(t, e) {
            setTimeout(function() {
                ++a, t.style.display = "none", a === o && r.removeClass("ult-close")
            }, 30 * e)
        })) : r.hasClass("ult-close") || (r.addClass("ult-open"), i.forEach(function(t, e) {
            setTimeout(function() {
                t.style.display = "block"
            }, 30 * e)
        }))
    }

    function s(t) {
        var e = u("." + t).find(".ult_modal-content").height();
        u(window).height() < e ? u("." + t).addClass("ult_modal-auto-top") : u("." + t).removeClass("ult_modal-auto-top"), 0 < u("." + t).find("iframe").length && u("." + t).find("iframe").each(function(t, e) {
            u(e).attr("src", u(e).attr("src"))
        }), u(document).trigger("onUVCModalPopupOpen", t)
    }
    u(window).load(function() {
        var e = new Array;
        u(".ult-onload").each(function(t) {
            e.push(u(this)), setTimeout(function() {
                e[t].trigger("click")
            }, 1e3 * parseInt(u(this).data("onload-delay")))
        }), u(".ult-vimeo iframe").each(function(t, e) {
            u(this).attr("id");
            var n = u(this)[0],
                r = $f(n);
            r.addEvent("ready", function() {
                r.addEvent("pause"), r.addEvent("finish")
            })
        })
    }), u(document).ready(function() {
        u(".ult-overlay").each(function() {
            u(this).appendTo(document.body)
        }), u(".ult-overlay").show(), u(".overlay-show").each(function(t, e) {
            var n = u(this).data("class-id");
            u("." + n).find(".ult-vimeo iframe").attr("id", "video_" + n), u("." + n).find(".ult-youtube iframe").attr("id", "video_" + n)
        });
        u(document).on("click", ".overlay-show", function(t) {
            t.stopPropagation(), t.preventDefault();
            var e = u(this).data("class-id");
            1 != u(this).parent().hasClass("modal-hide-mobile") && 1 != u(this).parent().hasClass("modal-hide-tablet") && (u("." + e).find(".ult_modal-content").removeClass("ult-hide"), u("." + e).find(".ult-vimeo iframe").html(u(".ult-vimeo iframe").html()), u("." + e).addClass(u(this).data("overlay-class")), setTimeout(function() {
                u("body, html").addClass("ult_modal-body-open"), n(e), s(e)
            }, 500), "keypress-control-enable" != u(this).parent().attr("data-keypress-control") && "keypress-control-enable" != u(this).attr("data-keypress-control") || (window.onkeydown = function(t) {
                27 == t.keyCode && u(document).find(".ult-overlay.ult-open." + e).removeClass("ult-open")
            }))
        }), u(document).on("click", ".overlay-show-cornershape", function(t) {
            t.stopPropagation(), t.preventDefault();
            var e = u(this).data("class-id");
            u("." + e).find(".ult_modal-content").removeClass("ult-hide"), setTimeout(function() {
                u("." + e).addClass("overlay-cornershape"), r(e), u("body, html").addClass("ult_modal-body-open"), s(e)
            }, 300)
        }), u(document).on("click", "div.overlay-cornershape div.ult-overlay-close", function(t) {
            t.stopPropagation();
            var e = u(this).parents("div.overlay-cornershape").data("class");
            r(e), u("body, html").removeClass("ult_modal-body-open"), u("html").css({
                overflow: "auto"
            }), u(document).trigger("onUVCModalPopUpClosed", e)
        }), u(document).on("click", ".overlay-show-boxes", function(t) {
            t.stopPropagation(), t.preventDefault();
            var e = u(this).data("class-id");
            u("." + e).find(".ult_modal-content").removeClass("ult-hide"), setTimeout(function() {
                u("." + e).addClass("overlay-boxes"), a(e), u("body, html").addClass("ult_modal-body-open"), s(e)
            }, 300)
        }), u(document).on("click", "div.overlay-boxes div.ult-overlay-close", function(t) {
            t.stopPropagation();
            var e = u(this).parents("div.overlay-boxes").data("class");
            a(e), u("body, html").removeClass("ult_modal-body-open"), u("html").css({
                overflow: "auto"
            }), u(document).trigger("onUVCModalPopUpClosed", e)
        }), u(document).on("click", ".overlay-show-genie", function(t) {
            t.preventDefault();
            var e = u(this).data("class-id");
            u("." + e).find(".ult_modal-content").removeClass("ult-hide"), setTimeout(function() {
                u("." + e).addClass("overlay-genie"), i(e), u("body, html").addClass("ult_modal-body-open"), s(e), u("html").css({
                    overflow: "auto"
                })
            }, 300)
        }), u(document).on("click", "div.overlay-genie div.ult-overlay-close", function(t) {
            t.stopPropagation();
            var e = u(this).parents("div.overlay-genie").data("class");
            i(e), u("body, html").removeClass("ult_modal-body-open"), u("html").css({
                overflow: "auto"
            }), u(document).trigger("onUVCModalPopUpClosed", e)
        }), u(document).on("click", ".ult-overlay .ult-overlay-close", function(t) {
            t.stopPropagation(), $this = u(this), n($this.parents(".ult-overlay").data("class")), u("body, html").removeClass("ult_modal-body-open"), $this.parent().find(".ult-vimeo").length && $this.parent().find(".ult-vimeo iframe").each(function(t, e) {
                var n = u(e),
                    r = u(e).attr("src");
                u(e).attr("src", ""), u(e).attr("src", r);
                e = n[0];
                $f(e).api("pause")
            }), $this.parent().find(".ult-youtube").length && $this.parent().find(".ult-youtube iframe").each(function(t, e) {
                var n = u(e).attr("src");
                u(e).attr("src", ""), u(e).attr("src", n)
            }), $this.parent().find(".ult-video-shortcode").length && $this.parent().find(".ult-video-shortcode video").each(function(t, e) {
                e.pause()
            }), u("html").css({
                overflow: "auto"
            }), u(document).trigger("onUVCModalPopUpClosed")
        }), u(document).on("click", ".ult-overlay .ult_modal", function(t) {
            t.stopPropagation()
        }), u(document).on("click", ".ult-overlay", function(t) {
            t.stopPropagation(), t.preventDefault(), $this = u(this);
            var e = $this.data("class");
            u(document).find(".ult-modal-input-wrapper").children().each(function() {
                u(this).data("class-id") == e && "overlay-control-enable" == u(this).parent(".ult-modal-input-wrapper").data("overlay-control") && ($this.find(".ult-overlay-close").trigger("click"), u("html").css({
                    overflow: "auto"
                }))
            })
        })
    }), u(document).on("onUVCModalPopupOpen", function() {
        u(".ult_modal-body iframe").each(function(t, e) {
            var n = u(this).parent().width(),
                r = (u(this).parent().parent().parent().hasClass("ult-small"), u(this).parent().parent().parent().hasClass("ult-medium"), !!u(this).parent().parent().parent().hasClass("ult-container")),
                i = !!u(this).parent().parent().parent().hasClass("ult-block"),
                o = n * (9 / 16) + n / 10;
            if (!u(this).parent().hasClass("ult-youtube") && !u(this).parent().hasClass("ult-vimeo")) return !1;
            if (r) {
                var a = u(window).height();
                a < o && (o = a - 100)
            }
            i && (void 0 !== (n = u(this).attr("width")) && "" != n || (n = 640), void 0 !== (o = u(this).attr("height")) && "" != o || (o = 360)), u(this).css({
                width: n + "px",
                height: o + "px"
            })
        }), u(window).trigger("resize")
    })
}(jQuery);