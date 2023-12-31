/*!
 * fullPage 2.8.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        l = "fp-scrollable",
        s = "." + l,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        g = "fp-completely",
        m = "." + g,
        w = ".section",
        S = "fp-section",
        y = "." + S,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        k = "." + T,
        I = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        A = "#" + E,
        M = "fp-tooltip",
        O = "." + M,
        H = "fp-show-active",
        B = ".slide",
        R = "fp-slide",
        z = "." + R,
        D = z + v,
        P = "fp-slides",
        q = "." + P,
        F = "fp-slidesContainer",
        V = "." + F,
        W = "fp-table",
        Y = "fp-slidesNav",
        j = "." + Y,
        N = j + " a",
        U = "fp-controlArrow",
        X = "." + U,
        K = "fp-prev",
        Q = "." + K,
        G = U + " " + K,
        J = X + Q,
        Z = "fp-next",
        $ = "." + Z,
        _ = U + " " + Z,
        ee = X + $,
        ne = e(n),
        te = e(t),
        oe = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function(l) {
        function s(n, t) {
            ot("autoScrolling", n, t);
            var o = e(b);
            l.autoScrolling && !l.scrollBar ? (rt.css({
                overflow: "hidden",
                height: "100%"
            }), U(Et.recordHistory, "internal"), vt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && $n(o.position().top)) : (rt.css({
                overflow: "visible",
                height: "initial"
            }), U(!1, "internal"), vt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), $n(0), o.length && rt.scrollTop(o.position().top))
        }

        function U(e, n) {
            ot("recordHistory", e, n)
        }

        function Q(e, n) {
            ot("scrollingSpeed", e, n)
        }

        function Z(e, n) {
            ot("fitToSection", e, n)
        }

        function $(e) {
            l.lockAnchors = e
        }

        function ae(e) {
            e ? (Nn(), Un()) : (jn(), Xn())
        }

        function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                et(n, t, "m")
            })) : n ? (ae(!0), Kn()) : (ae(!1), Qn())
        }

        function le(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                et(n, t, "k")
            })) : l.keyboardScrolling = n
        }

        function se() {
            var n = e(b).prev(y);
            n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()), n.length && Ue(n, null, !0)
        }

        function ce() {
            var n = e(b).next(y);
            n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()), n.length && Ue(n, null, !1)
        }

        function de(e, n) {
            Q(0, "internal"), fe(e, n), Q(Et.scrollingSpeed, "internal")
        }

        function fe(e, n) {
            var t = Bn(e);
            "undefined" != typeof n ? zn(e, n) : t.length > 0 && Ue(t)
        }

        function ue(e) {
            Ye("right", e)
        }

        function he(e) {
            Ye("left", e)
        }

        function pe(n) {
            if (!vt.hasClass(f)) {
                mt = !0, gt = ne.height(), e(y).each(function() {
                    var n = e(this).find(q),
                        t = e(this).find(z);
                    l.verticalCentered && e(this).find(k).css("height", On(e(this)) + "px"), e(this).css("height", gt + "px"), l.scrollOverflow && (t.length ? t.each(function() {
                        An(e(this))
                    }) : An(e(this))), t.length > 1 && gn(n, n.find(D))
                });
                var t = e(b),
                    o = t.index(y);
                o && de(o + 1), mt = !1, e.isFunction(l.afterResize) && n && l.afterResize.call(vt), e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(vt)
            }
        }

        function ve(n) {
            var t = lt.hasClass(c);
            n ? t || (s(!1, "internal"), Z(!1, "internal"), e(A).hide(), lt.addClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(vt, n)) : t && (s(Et.autoScrolling, "internal"), Z(Et.autoScrolling, "internal"), e(A).show(), lt.removeClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(vt, n))
        }

        function ge() {
            l.css3 && (l.css3 = Yn()), l.scrollBar = l.scrollBar || l.hybrid, we(), Se(), re(!0), s(l.autoScrolling, "internal");
            var n = e(b).find(D);
            n.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== n.index()) && Zn(n), bn(), Wn(), "complete" === t.readyState && tn(), ne.on("load", tn)
        }

        function me() {
            ne.on("scroll", Oe).on("hashchange", on).blur(fn).resize(yn), te.keydown(an).keyup(ln).on("click touchstart", A + " a", un).on("click touchstart", N, hn).on("click", O, rn), e(y).on("click touchstart", X, dn), l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function() {
                ae(!1)
            }), te.on("mouseleave", l.normalScrollElements, function() {
                ae(!0)
            }))
        }

        function we() {
            var n = vt.find(l.sectionSelector);
            l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function Se() {
            vt.css({
                height: "100%",
                position: "relative"
            }), vt.addClass(a), e("html").addClass(u), gt = ne.height(), vt.removeClass(f), Ce(), e(y).each(function(n) {
                var t = e(this),
                    o = t.find(z),
                    i = o.length;
                be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Mn(t)
            }), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(lt), l.navigation && ke(), Le(), l.scrollOverflow ? ("complete" === t.readyState && Ie(), ne.on("load", Ie)) : Me()
        }

        function ye(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Pn(n, o)), t.each(function(n) {
                e(this).css("width", a + "%"), l.verticalCentered && Mn(e(this))
            });
            var r = n.find(D);
            r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? Zn(r) : t.eq(0).addClass(p)
        }

        function be(n, t) {
            t || 0 !== e(b).length || n.addClass(p), n.css("height", gt + "px"), l.paddingTop && n.css("padding-top", l.paddingTop), l.paddingBottom && n.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]), "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t])
        }

        function xe(n, t) {
            "undefined" != typeof l.anchors[t] && n.hasClass(p) && In(l.anchors[t], t), l.menu && l.css3 && e(l.menu).closest(r).length && e(l.menu).appendTo(lt)
        }

        function Ce() {
            vt.find(l.sectionSelector).addClass(S), vt.find(l.slideSelector).addClass(R)
        }

        function Te(e) {
            e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(J).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(J).hide()
        }

        function ke() {
            lt.append('<div id="' + E + '"><ul></ul></div>');
            var n = e(A);
            n.addClass(function() {
                return l.showActiveTooltip ? H + " " + l.navigationPosition : l.navigationPosition
            });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                l.anchors.length && (o = l.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = l.navigationTooltips[t];
                "undefined" != typeof a && "" !== a && (i += '<div class="' + M + " " + l.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }

        function Ie() {
            e(y).each(function() {
                var n = e(this).find(z);
                n.length ? n.each(function() {
                    An(e(this))
                }) : An(e(this))
            }), Me()
        }

        function Le() {
            vt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Ee(e(this), "enablejsapi=1")
            })
        }

        function Ee(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Ae(t) + n)
        }

        function Ae(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Me() {
            var n = e(b);
            n.addClass(g), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n), Ze(n), $e(n), l.scrollOverflowHandler.afterLoad(), e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(l.afterRender) && l.afterRender.call(vt)
        }

        function Oe() {
            var n;
            if (!l.autoScrolling || l.scrollBar) {
                var o = ne.scrollTop(),
                    i = Be(o),
                    a = 0,
                    r = o + ne.height() / 2,
                    s = lt.height() - ne.height() === o,
                    c = t.querySelectorAll(y);
                if (s) a = c.length - 1;
                else if (o)
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= r && (a = d)
                    } else a = 0;
                if (He(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(a), !n.hasClass(p)) {
                    At = !0;
                    var u, h, v = e(b),
                        m = v.index(y) + 1,
                        w = Ln(n),
                        S = n.data("anchor"),
                        x = n.index(y) + 1,
                        C = n.find(D);
                    C.length && (h = C.data("anchor"), u = C.index()), St && (n.addClass(p).siblings().removeClass(p), e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w), e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x), en(v), Ze(n), $e(n), In(S, x - 1), l.anchors.length && (ct = S), qn(u, h, S, x)), clearTimeout(kt), kt = setTimeout(function() {
                        At = !1
                    }, 100)
                }
                l.fitToSection && (clearTimeout(It), It = setTimeout(function() {
                    St && l.fitToSection && (e(b).is(n) && (mt = !0), Ue(e(b)), mt = !1)
                }, l.fitToSectionDelay))
            }
        }

        function He(n) {
            var t = e(b).position().top,
                o = t + ne.height();
            return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop()
        }

        function Be(e) {
            var n = e > Mt ? "down" : "up";
            return Mt = e, Dt = e, n
        }

        function Re(e, n) {
            if (bt.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : se;
                if (n.length > 0) {
                    if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;
                    o()
                } else o()
            }
        }

        function ze(e) {
            var n = e.originalEvent;
            !Pe(e.target) && l.autoScrolling && qe(n) && e.preventDefault()
        }

        function De(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);
            if (!Pe(n.target) && qe(t)) {
                l.autoScrolling && n.preventDefault();
                var a = l.scrollOverflowHandler.scrollable(i),
                    r = Jn(t);
                Bt = r.y, Rt = r.x, i.find(q).length && o.abs(Ht - Rt) > o.abs(Ot - Bt) ? !ut && o.abs(Ht - Rt) > ne.outerWidth() / 100 * l.touchSensitivity && (Ht > Rt ? bt.m.right && ue(i) : bt.m.left && he(i)) : l.autoScrolling && St && o.abs(Ot - Bt) > ne.height() / 100 * l.touchSensitivity && (Ot > Bt ? Re("down", a) : Bt > Ot && Re("up", a))
            }
        }

        function Pe(n, t) {
            t = t || 0;
            var o = e(n).parent();
            return t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements) ? !0 : t == l.normalScrollElementTouchThreshold ? !1 : Pe(o, ++t)
        }

        function qe(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function Fe(e) {
            var n = e.originalEvent;
            if (l.fitToSection && rt.stop(), qe(n)) {
                var t = Jn(n);
                Ot = t.y, Ht = t.x
            }
        }

        function Ve(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a];
            return o.ceil(t / n)
        }

        function We(t) {
            var i = (new Date).getTime(),
                a = e(m).hasClass(L);
            if (l.autoScrolling && !ft && !a) {
                t = t || n.event;
                var r = t.wheelDelta || -t.deltaY || -t.detail,
                    s = o.max(-1, o.min(1, r)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                yt.length > 149 && yt.shift(), yt.push(o.abs(r)), l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b),
                    u = l.scrollOverflowHandler.scrollable(f),
                    h = i - zt;
                if (zt = i, h > 200 && (yt = []), St) {
                    var p = Ve(yt, 10),
                        v = Ve(yt, 70),
                        g = p >= v;
                    g && d && (0 > s ? Re("down", u) : Re("up", u))
                }
                return !1
            }
            l.fitToSection && rt.stop()
        }

        function Ye(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(q),
                a = i.find(z).length;
            if (!(!i.length || ut || 2 > a)) {
                var r = i.find(D),
                    s = null;
                if (s = "left" === n ? r.prev(z) : r.next(z), !s.length) {
                    if (!l.loopHorizontal) return;
                    s = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                ut = !0, gn(i, s, n)
            }
        }

        function je() {
            e(D).each(function() {
                Zn(e(this), "internal")
            })
        }

        function Ne(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Dt,
                i = t - gt + e.outerHeight(),
                a = l.bigSectionsDestination;
            return e.outerHeight() > gt ? (!o && !a || "bottom" === a) && (t = i) : (o || mt && e.is(":last-child")) && (t = i), Dt = t, t
        }

        function Ue(n, t, o) {
            if ("undefined" != typeof n) {
                var i, a, r = Ne(n),
                    s = {
                        element: n,
                        callback: t,
                        isMovementUp: o,
                        dtop: r,
                        yMovement: Ln(n),
                        anchorLink: n.data("anchor"),
                        sectionIndex: n.index(y),
                        activeSlide: n.find(D),
                        activeSection: e(b),
                        leavingSection: e(b).index(y) + 1,
                        localIsResizing: mt
                    };
                s.activeSection.is(n) && !mt || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), a = s.activeSlide.index()), l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Qe(s)), (!e.isFunction(l.onLeave) || s.localIsResizing || l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) !== !1) && (en(s.activeSection), l.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), Ze(n), l.scrollOverflowHandler.onLeave(), St = !1, qn(a, i, s.anchorLink, s.sectionIndex), Xe(s), ct = s.anchorLink, In(s.anchorLink, s.sectionIndex)))
            }
        }

        function Xe(n) {
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                Hn(t, !0), l.scrollingSpeed ? (clearTimeout(Ct), Ct = setTimeout(function() {
                    Je(n)
                }, l.scrollingSpeed)) : Je(n)
            } else {
                var i = Ke(n);
                e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function() {
                    l.scrollBar ? setTimeout(function() {
                        Je(n)
                    }, 30) : Je(n)
                })
            }
        }

        function Ke(e) {
            var n = {};
            return l.autoScrolling && !l.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = r) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function Qe(n) {
            return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), $n(e(b).position().top), je(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = Ln(n.element), n
        }

        function Ge(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), $n(e(b).position().top), je())
        }

        function Je(n) {
            Ge(n), e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), l.scrollOverflowHandler.afterLoad(), n.localIsResizing || $e(n.element), n.element.addClass(g).siblings().removeClass(g), St = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function Ze(n) {
            if (l.lazyLoading) {
                var t, o = nn(n);
                o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    t = e(this), t.attr("src", t.data("src")), t.removeAttr("data-src"), t.is("source") && t.closest("video").get(0).load()
                })
            }
        }

        function $e(n) {
            var t = nn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && _e(n), n.onload = function() {
                    n.hasAttribute("data-autoplay") && _e(n)
                }
            })
        }

        function _e(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function en(n) {
            var t = nn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function nn(n) {
            var t = n.find(D);
            return t.length && (n = e(t)), n
        }

        function tn() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            t && (l.animateAnchor ? zn(t, o) : de(t, o))
        }

        function on() {
            if (!At && !l.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof ct,
                    a = "undefined" == typeof ct && "undefined" == typeof o && !ut;
                t.length && (t && t !== ct && !i || a || !ut && dt != o) && zn(t, o)
            }
        }

        function an(n) {
            clearTimeout(Lt);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), ft = n.ctrlKey, Lt = setTimeout(function() {
                    pn(n)
                }, 150)
            }
        }

        function rn() {
            e(this).prev().trigger("click")
        }

        function ln(e) {
            wt && (ft = e.ctrlKey)
        }

        function sn(e) {
            2 == e.which && (Pt = e.pageY, vt.on("mousemove", vn))
        }

        function cn(e) {
            2 == e.which && vt.off("mousemove")
        }

        function dn() {
            var n = e(this).closest(y);
            e(this).hasClass(K) ? bt.m.left && he(n) : bt.m.right && ue(n)
        }

        function fn() {
            wt = !1, ft = !1
        }

        function un(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ue(e(y).eq(t))
        }

        function hn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(q),
                o = t.find(z).eq(e(this).closest("li").index());
            gn(t, o)
        }

        function pn(n) {
            var t = n.shiftKey;
            switch (n.which) {
                case 38:
                case 33:
                    bt.k.up && se();
                    break;
                case 32:
                    if (t && bt.k.up) {
                        se();
                        break
                    }
                case 40:
                case 34:
                    bt.k.down && ce();
                    break;
                case 36:
                    bt.k.up && fe(1);
                    break;
                case 35:
                    bt.k.down && fe(e(y).length);
                    break;
                case 37:
                    bt.k.left && he();
                    break;
                case 39:
                    bt.k.right && ue();
                    break;
                default:
                    return
            }
        }

        function vn(e) {
            St && (e.pageY < Pt && bt.m.up ? se() : e.pageY > Pt && bt.m.down && ce()), Pt = e.pageY
        }

        function gn(n, t, o) {
            var i = n.closest(y),
                a = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(y),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(j),
                    slideAnchor: Vn(t),
                    prevSlide: i.find(D),
                    prevSlideIndex: i.find(D).index(),
                    localIsResizing: mt
                };
            return a.xMovement = En(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (St = !1), l.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void(ut = !1) : (t.addClass(p).siblings().removeClass(p), a.localIsResizing || (en(a.prevSlide), Ze(t)), !l.loopHorizontal && l.controlArrows && (i.find(J).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && qn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void wn(n, a, !0))
        }

        function mn(n) {
            Sn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), St = !0, $e(n.destiny)), ut = !1
        }

        function wn(e, n, t) {
            var i = n.destinyPos;
            if (l.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                xn(e.find(V)).css(_n(a)), Tt = setTimeout(function() {
                    t && mn(n)
                }, l.scrollingSpeed, l.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, l.scrollingSpeed, l.easing, function() {
                t && mn(n)
            })
        }

        function Sn(e, n) {
            e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p)
        }

        function yn() {
            if (bn(), ht) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - qt) > 20 * o.max(qt, i) / 100 && (pe(!0), qt = i)
                }
            } else clearTimeout(xt), xt = setTimeout(function() {
                pe(!0)
            }, 350)
        }

        function bn() {
            var e = l.responsive || l.responsiveWidth,
                n = l.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }

        function xn(e) {
            var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
            return e.removeClass(d), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function Cn(e) {
            return e.addClass(d)
        }

        function Tn(n, t) {
            l.navigation && (e(A).find(v).removeClass(p), n ? e(A).find('a[href="#' + n + '"]').addClass(p) : e(A).find("li").eq(t).find("a").addClass(p))
        }

        function kn(n) {
            l.menu && (e(l.menu).find(v).removeClass(p), e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p))
        }

        function In(e, n) {
            kn(e), Tn(e, n)
        }

        function Ln(n) {
            var t = e(b).index(y),
                o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function En(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function An(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = l.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    a = t.scrollable(e);
                a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, l.verticalCentered && (n = e.find(k).get(0).scrollHeight));
                var r = gt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                n > r ? a.length ? t.update(e, r) : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "")
            }
        }

        function Mn(e) {
            e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + T + '" style="height:' + On(e) + 'px;" />')
        }

        function On(e) {
            var n = gt;
            if (l.paddingTop || l.paddingBottom) {
                var t = e;
                t.hasClass(S) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = gt - o
            }
            return n
        }

        function Hn(e, n) {
            n ? xn(vt) : Cn(vt), vt.css(_n(e)), setTimeout(function() {
                vt.removeClass(d)
            }, 10)
        }

        function Bn(n) {
            var t = vt.find(y + '[data-anchor="' + n + '"]');
            return t.length || (t = e(y).eq(n - 1)), t
        }

        function Rn(e, n) {
            var t = n.find(q),
                o = t.find(z + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(z).eq(e)), o
        }

        function zn(e, n) {
            var t = Bn(e);
            t.length && ("undefined" == typeof n && (n = 0), e === ct || t.hasClass(p) ? Dn(t, n) : Ue(t, function() {
                Dn(t, n)
            }))
        }

        function Dn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(q),
                    o = Rn(n, e);
                o.length && gn(t, o)
            }
        }

        function Pn(e, n) {
            e.append('<div class="' + Y + '"><ul></ul></div>');
            var t = e.find(j);
            t.addClass(l.slidesNavPosition);
            for (var o = 0; n > o; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p)
        }

        function qn(e, n, t, o) {
            var i = "";
            l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), dt = n, Fn(i + "/" + n)) : "undefined" != typeof e ? (dt = n, Fn(t)) : Fn(t)), Wn()
        }

        function Fn(e) {
            if (l.recordHistory) location.hash = e;
            else if (ht || pt) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Vn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function Wn() {
            var n = e(b),
                t = n.find(D),
                o = Vn(n),
                i = Vn(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            lt[0].className = lt[0].className.replace(r, ""), lt.addClass(h + "-" + a)
        }

        function Yn() {
            var e, o = t.createElement("p"),
                a = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function jn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", We, !1), t.removeEventListener("wheel", We, !1), t.removeEventListener("MozMousePixelScroll", We, !1)) : t.detachEvent("onmousewheel", We)
        }

        function Nn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", We, !1) : t[e](o + a, We, !1)
        }

        function Un() {
            vt.on("mousedown", sn).on("mouseup", cn)
        }

        function Xn() {
            vt.off("mousedown", sn).off("mouseup", cn)
        }

        function Kn() {
            if (l.autoScrolling && (ht || pt)) {
                var n = Gn();
                lt.off("touchmove " + n.move).on("touchmove " + n.move, ze), e(r).off("touchstart " + n.down).on("touchstart " + n.down, Fe).off("touchmove " + n.move).on("touchmove " + n.move, De)
            }
        }

        function Qn() {
            if (ht || pt) {
                var n = Gn();
                e(r).off("touchstart " + n.down).off("touchmove " + n.move)
            }
        }

        function Gn() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Jn(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, pt && qe(e) && l.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function Zn(e, n) {
            Q(0, "internal"), "undefined" != typeof n && (mt = !0), gn(e.closest(q), e), "undefined" != typeof n && (mt = !1), Q(Et.scrollingSpeed, "internal")
        }

        function $n(e) {
            var n = o.round(e);
            if (l.scrollBar || !l.autoScrolling) vt.scrollTop(n);
            else if (l.css3) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                Hn(t, !1)
            } else vt.css("top", -n)
        }

        function _n(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function et(e, n, t) {
            switch (n) {
                case "up":
                    bt[t].up = e;
                    break;
                case "down":
                    bt[t].down = e;
                    break;
                case "left":
                    bt[t].left = e;
                    break;
                case "right":
                    bt[t].right = e;
                    break;
                case "all":
                    "m" == t ? re(e) : le(e)
            }
        }

        function nt(n) {
            s(!1, "internal"), re(!1), le(!1), vt.addClass(f), clearTimeout(Tt), clearTimeout(Ct), clearTimeout(xt), clearTimeout(kt), clearTimeout(It), ne.off("scroll", Oe).off("hashchange", on).off("resize", yn), te.off("click touchstart", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click touchstart", N).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(Tt), clearTimeout(Ct), n && tt()
        }

        function tt() {
            $n(0), vt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src")
            }), e(A + ", " + j + ", " + X).remove(), e(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(z).css({
                width: ""
            }), vt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), rt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(u), lt.removeClass(c), e.each(lt.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(h) && lt.removeClass(n)
            }), e(y + ", " + z).each(function() {
                l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + p)
            }), Cn(vt), vt.find(k + ", " + V + ", " + q).each(function() {
                e(this).replaceWith(this.childNodes)
            }), rt.scrollTop(0);
            var n = [S, R, F];
            e.each(n, function(n, t) {
                e("." + t).removeClass(t)
            })
        }

        function ot(e, n, t) {
            l[e] = n, "internal" !== t && (Et[e] = n)
        }

        function it() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove"];
            return e("html").hasClass(u) ? void at("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, at("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && at("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1, at("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function(e, n) {
                l[n] && at("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n)
            }), void e.each(l.anchors, function(n, t) {
                var o = te.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                    }),
                    i = te.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (at("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && at("error", '"' + t + '" is is being used by another element `id` property'), o.length && at("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function at(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(u)) return void it();
        var rt = e("html, body"),
            lt = e("body"),
            st = e.fn.fullpage;
        l = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowHandler: ie,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            sectionSelector: w,
            slideSelector: B,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, l);
        var ct, dt, ft, ut = !1,
            ht = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            pt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            vt = e(this),
            gt = ne.height(),
            mt = !1,
            wt = !0,
            St = !0,
            yt = [],
            bt = {};
        bt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, bt.k = e.extend(!0, {}, bt.m);
        var xt, Ct, Tt, kt, It, Lt, Et = e.extend(!0, {}, l);
        it(), oe.click = pt, oe = e.extend(oe, l.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), e(this).length && (st.setAutoScrolling = s, st.setRecordHistory = U, st.setScrollingSpeed = Q, st.setFitToSection = Z, st.setLockAnchors = $, st.setMouseWheelScrolling = ae, st.setAllowScrolling = re, st.setKeyboardScrolling = le, st.moveSectionUp = se, st.moveSectionDown = ce, st.silentMoveTo = de, st.moveTo = fe, st.moveSlideRight = ue, st.moveSlideLeft = he, st.reBuild = pe, st.setResponsive = ve, st.destroy = nt, ge(), me());
        var At = !1,
            Mt = 0,
            Ot = 0,
            Ht = 0,
            Bt = 0,
            Rt = 0,
            zt = (new Date).getTime(),
            Dt = 0,
            Pt = 0,
            qt = gt
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(n) {
            var t = e(b).find(s);
            t.each(function() {
                var t = e(this).data("iscrollInstance");
                "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff())
            })
        },
        onLeave: function() {
            ie.toggleWheel(!1)
        },
        beforeLeave: function() {
            ie.onLeave()
        },
        afterLoad: function() {
            ie.toggleWheel(!0)
        },
        create: function(n, t) {
            var o = n.find(s);
            o.height(t), o.each(function() {
                var n = e(this),
                    t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function() {
                    e(this).destroy()
                }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t)
            })
        },
        isScrolled: function(e, n) {
            var t = n.data("iscrollInstance");
            return t ? "top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 : !0
        },
        scrollable: function(e) {
            return e.find(q).length ? e.find(D).find(s) : e.find(s)
        },
        scrollHeight: function(e) {
            return e.find(s).children().first().get(0).scrollHeight
        },
        remove: function(e) {
            var n = e.find(s);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t.destroy(), n.data("iscrollInstance", null)
            }
            e.find(s).children().first().children().first().unwrap().unwrap()
        },
        update: function(n, t) {
            clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function() {
                e.each(ie.iScrollInstances, function() {
                    e(this).get(0).refresh()
                })
            }, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px")
        },
        wrapContent: function() {
            return '<div class="' + l + '"><div class="fp-scroller"></div></div>'
        }
    }
});