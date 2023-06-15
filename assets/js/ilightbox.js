/**
 * jQuery iLightBox - Revolutionary Lightbox Plugin
 * http://www.ilightbox.net/
 *
 * @version: 2.2.4 - October 14, 2017
 *
 * @author: iProDev (Hemn Chawroka)
 *          http://www.iprodev.com/
 *
 */
(function(g, p, Q) {
    function F(a, b) {
        return parseInt(a.css(b), 10) || 0
    }

    function J() {
        var a = p,
            b = "inner";
        "innerWidth" in p || (b = "client", a = document.documentElement || document.body);
        return {
            width: a[b + "Width"],
            height: a[b + "Height"]
        }
    }

    function ia() {
        var a = L();
        p.location.hash = "";
        p.scrollTo(a.x, a.y)
    }

    function ja(a, b) {
        a = "//ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        g.ajax({
            url: a,
            dataType: "jsonp"
        });
        iLCallback = function(a) {
            b.call(this, a)
        }
    }

    function R(a) {
        var b = [];
        g("*", a).each(function() {
            var a = "";
            "none" != g(this).css("background-image") ? a = g(this).css("background-image") : "undefined" != typeof g(this).attr("src") && "img" == this.nodeName.toLowerCase() && (a = g(this).attr("src"));
            if (-1 == a.indexOf("gradient")) {
                a = a.replace(/url\(\"/g, "");
                a = a.replace(/url\(/g, "");
                a = a.replace(/\"\)/g, "");
                a = a.replace(/\)/g, "");
                a = a.split(",");
                for (var d = 0; d < a.length; d++) {
                    if (0 < a[d].length && -1 == g.inArray(a[d], b)) {
                        var e = "";
                        D.msie && 9 > D.version && (e = "?" + M(3000 * S()));
                        b.push(a[d] + e)
                    }
                }
            }
        });
        return b
    }

    function Z(a) {
        a = a.split(".").pop().toLowerCase();
        var b = -1 !== a.indexOf("?") ? a.split("?").pop() : "";
        return a.replace(b, "")
    }

    function aa(a) {
        a = Z(a);
        return -1 !== T.image.indexOf(a) ? "image" : -1 !== T.flash.indexOf(a) ? "flash" : -1 !== T.video.indexOf(a) ? "video" : "iframe"
    }

    function ba(a, b) {
        return parseInt(b / 100 * a)
    }

    function U(a) {
        return (a = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)) ? {
            href: a[0] || "",
            protocol: a[1] || "",
            authority: a[2] || "",
            host: a[3] || "",
            hostname: a[4] || "",
            port: a[5] || "",
            pathname: a[6] || "",
            search: a[7] || "",
            hash: a[8] || ""
        } : null
    }

    function N(a, b) {
        function c(a) {
            var b = [];
            a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a) {
                "/.." === a ? b.pop() : b.push(a)
            });
            return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
        }
        b = U(b || "");
        a = U(a || "");
        return b && a ? (b.protocol || a.protocol) + (b.protocol || b.authority ? b.authority : a.authority) + c(b.protocol || b.authority || "/" === b.pathname.charAt(0) ? b.pathname : b.pathname ? (a.authority && !a.pathname ? "/" : "") + a.pathname.slice(0, a.pathname.lastIndexOf("/") + 1) + b.pathname : a.pathname) + (b.protocol || b.authority || b.pathname ? b.search : b.search || a.search) + b.hash : null
    }

    function ka(a, b, c) {
        this.php_js = this.php_js || {};
        this.php_js.ENV = this.php_js.ENV || {};
        var d = 0,
            e = 0,
            f = 0,
            h = {
                dev: -6,
                alpha: -5,
                a: -5,
                beta: -4,
                b: -4,
                RC: -3,
                rc: -3,
                "#": -2,
                p: 1,
                pl: 1
            };
        d = function(a) {
            a = ("" + a).replace(/[_\-+]/g, ".");
            a = a.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
            return a.length ? a.split(".") : [-8]
        };
        var g = function(a) {
            return a ? isNaN(a) ? h[a] || -7 : parseInt(a, 10) : 0
        };
        a = d(a);
        b = d(b);
        e = ca(a.length, b.length);
        for (d = 0; d < e; d++) {
            if (a[d] != b[d]) {
                if (a[d] = g(a[d]), b[d] = g(b[d]), a[d] < b[d]) {
                    f = -1;
                    break
                } else {
                    if (a[d] > b[d]) {
                        f = 1;
                        break
                    }
                }
            }
        }
        if (!c) {
            return f
        }
        switch (c) {
            case ">":
            case "gt":
                return 0 < f;
            case ">=":
            case "ge":
                return 0 <= f;
            case "<=":
            case "le":
                return 0 >= f;
            case "==":
            case "=":
            case "eq":
                return 0 === f;
            case "<>":
            case "!=":
            case "ne":
                return 0 !== f;
            case "":
            case "<":
            case "lt":
                return 0 > f;
            default:
                return null
        }
    }

    function L() {
        var a = 0,
            b = 0;
        "number" == typeof p.pageYOffset ? (b = p.pageYOffset, a = p.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft);
        return {
            x: a,
            y: b
        }
    }

    function da(a, b, c) {
        var d = r[a + b];
        null == d && (d = r[b]);
        return null != d ? (0 == b.indexOf(a) && null == c && (c = b.substring(a.length)), null == c && (c = b), c + '="' + d + '" ') : ""
    }

    function A(a, b) {
        if (0 == a.indexOf("emb#")) {
            return ""
        }
        0 == a.indexOf("obj#") && null == b && (b = a.substring(4));
        return da("obj#", a, b)
    }

    function G(a, b) {
        if (0 == a.indexOf("obj#")) {
            return ""
        }
        0 == a.indexOf("emb#") && null == b && (b = a.substring(4));
        return da("emb#", a, b)
    }

    function ea(a, b) {
        var c, d = "",
            e = b ? " />" : ">"; - 1 == a.indexOf("emb#") && (c = r["obj#" + a], null == c && (c = r[a]), 0 == a.indexOf("obj#") && (a = a.substring(4)), null != c && (d = '  <param name="' + a + '" value="' + c + '"' + e + "\n"));
        return d
    }

    function la() {
        for (var a = 0; a < arguments.length; a++) {
            var b = arguments[a];
            delete r[b];
            delete r["emb#" + b];
            delete r["obj#" + b]
        }
    }

    function ma() {
        var a = "QT_GenerateOBJECTText";
        var b = arguments;
        if (4 > b.length || 0 != b.length % 2) {
            b = na, b = b.replace("%%", a), alert(b), a = ""
        } else {
            r = [];
            r.src = b[0];
            r.width = b[1];
            r.height = b[2];
            r.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
            r.pluginspage = "http://www.apple.com/quicktime/download/";
            a = b[3];
            if (null == a || "" == a) {
                a = "6,0,2,0"
            }
            r.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + a;
            for (var c, d = 4; d < b.length; d += 2) {
                c = b[d].toLowerCase(), a = b[d + 1], "name" == c || "id" == c ? r.name = a : r[c] = a
            }
            b = "<object " + A("classid") + A("width") + A("height") + A("codebase") + A("name", "id") + A("tabindex") + A("hspace") + A("vspace") + A("border") + A("align") + A("class") + A("title") + A("accesskey") + A("noexternaldata") + ">\n" + ea("src", !1);
            d = "  <embed " + G("src") + G("width") + G("height") + G("pluginspage") + G("name") + G("align") + G("tabindex");
            la("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
            for (c in r) {
                a = r[c], null != a && (d += G(c), b += ea(c, !1))
            }
            a = b + d + "> </embed>\n</object>"
        }
        return a
    }
    var T = {
            flash: ["swf"],
            image: "bmp gif jpeg jpg png tiff tif jfif jpe".split(" "),
            iframe: "asp aspx cgi cfm htm html jsp php pl php3 php4 php5 phtml rb rhtml shtml txt".split(" "),
            video: "avi mov mpg mpeg movie mp4 webm ogv ogg 3gp m4v".split(" ")
        },
        O = g(p),
        E = g(document),
        D, B, H, t = "",
        V = navigator.userAgent || navigator.vendor || p.opera,
        z = !!("ontouchstart" in p) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(V),
        oa = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(V) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(V.substr(0, 4)),
        K = z ? "itap.iLightBox" : "click.iLightBox",
        pa = z ? "touchstart.iLightBox" : "mousedown.iLightBox",
        qa = z ? "touchend.iLightBox" : "mouseup.iLightBox",
        W = z ? "touchmove.iLightBox" : "mousemove.iLightBox",
        I = Math.abs,
        P = Math.sqrt,
        X = Math.round,
        ca = Math.max,
        Y = Math.min,
        M = Math.floor,
        S = Math.random,
        fa = function(a, b, c, d) {
            var e = this;
            e.options = b;
            e.selector = a.selector || a;
            e.context = a.context;
            e.instant = d;
            1 > c.length ? e.attachItems() : e.items = c;
            e.vars = {
                total: e.items.length,
                start: 0,
                current: null,
                next: null,
                prev: null,
                BODY: g("body"),
                loadRequests: 0,
                overlay: g('<div class="ilightbox-overlay"></div>'),
                loader: g('<div class="ilightbox-loader"><div></div></div>'),
                toolbar: g('<div class="ilightbox-toolbar"></div>'),
                innerToolbar: g('<div class="ilightbox-inner-toolbar"></div>'),
                title: g('<div class="ilightbox-title"></div>'),
                closeButton: g('<a class="ilightbox-close" title="' + e.options.text.close + '"></a>'),
                fullScreenButton: g('<a class="ilightbox-fullscreen" title="' + e.options.text.enterFullscreen + '"></a>'),
                innerPlayButton: g('<a class="ilightbox-play" title="' + e.options.text.slideShow + '"></a>'),
                innerNextButton: g('<a class="ilightbox-next-button" title="' + e.options.text.next + '"></a>'),
                innerPrevButton: g('<a class="ilightbox-prev-button" title="' + e.options.text.previous + '"></a>'),
                holder: g('<div class="ilightbox-holder' + (z ? " supportTouch" : "") + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                nextPhoto: g('<div class="ilightbox-holder' + (z ? " supportTouch" : "") + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                prevPhoto: g('<div class="ilightbox-holder' + (z ? " supportTouch" : "") + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                nextButton: g('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + e.options.text.next + '"><span></span></a>'),
                prevButton: g('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + e.options.text.previous + '"><span></span></a>'),
                thumbnails: g('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
                thumbs: !1,
                nextLock: !1,
                prevLock: !1,
                hashLock: !1,
                isMobile: !1,
                mobileMaxWidth: 980,
                isInFullScreen: !1,
                isSwipe: !1,
                mouseID: 0,
                cycleID: 0,
                isPaused: 0
            };
            e.vars.hideableElements = e.vars.nextButton.add(e.vars.prevButton);
            e.normalizeItems();
            e.availPlugins();
            e.options.startFrom = 0 < e.options.startFrom && e.options.startFrom >= e.vars.total ? e.vars.total - 1 : e.options.startFrom;
            e.options.startFrom = e.options.randomStart ? M(S() * e.vars.total) : e.options.startFrom;
            e.vars.start = e.options.startFrom;
            d ? e.instantCall() : e.patchItemsEvents();
            e.options.linkId && (e.hashChangeHandler(), O.iLightBoxHashChange(function() {
                e.hashChangeHandler()
            }));
            z && (a = /(click|mouseenter|mouseleave|mouseover|mouseout)/ig, e.options.caption.show = e.options.caption.show.replace(a, "itap"), e.options.caption.hide = e.options.caption.hide.replace(a, "itap"), e.options.social.show = e.options.social.show.replace(a, "itap"), e.options.social.hide = e.options.social.hide.replace(a, "itap"));
            e.options.controls.arrows && g.extend(e.options.styles, {
                nextOffsetX: 0,
                prevOffsetX: 0,
                nextOpacity: 0,
                prevOpacity: 0
            })
        };
    fa.prototype = {
        showLoader: function() {
            this.vars.loadRequests += 1;
            "horizontal" == this.options.path.toLowerCase() ? this.vars.loader.addClass("ilightbox-show").stop().animate({
                top: "-30px"
            }, this.options.show.speed, "easeOutCirc") : this.vars.loader.addClass("ilightbox-show").stop().animate({
                left: "-30px"
            }, this.options.show.speed, "easeOutCirc")
        },
        hideLoader: function() {
            --this.vars.loadRequests;
            this.vars.loadRequests = 0 > this.vars.loadRequests ? 0 : this.vars.loadRequests;
            "horizontal" == this.options.path.toLowerCase() ? 0 >= this.vars.loadRequests && this.vars.loader.removeClass("ilightbox-show").stop().animate({
                top: "-192px"
            }, this.options.show.speed, "easeInCirc") : 0 >= this.vars.loadRequests && this.vars.loader.removeClass("ilightbox-show").stop().animate({
                left: "-192px"
            }, this.options.show.speed, "easeInCirc")
        },
        createUI: function() {
            var a = this;
            a.ui = {
                currentElement: a.vars.holder,
                nextElement: a.vars.nextPhoto,
                prevElement: a.vars.prevPhoto,
                currentItem: a.vars.current,
                nextItem: a.vars.next,
                prevItem: a.vars.prev,
                hide: function() {
                    a.closeAction()
                },
                refresh: function() {
                    0 < arguments.length ? a.repositionPhoto(!0) : a.repositionPhoto()
                },
                fullscreen: function() {
                    a.fullScreenAction()
                }
            }
        },
        attachItems: function() {
            var a = this,
                b = [],
                c = [];
            g(a.selector, a.context).each(function() {
                var d = g(this),
                    e = d.attr(a.options.attr) || null,
                    f = d.data("options") && eval("({" + d.data("options") + "})") || {},
                    h = d.data("caption"),
                    l = d.data("title"),
                    k = d.data("type") || aa(e);
                c.push({
                    URL: e,
                    caption: h,
                    title: l,
                    type: k,
                    options: f
                });
                a.instant || b.push(d)
            });
            a.items = c;
            a.itemsObject = b
        },
        normalizeItems: function() {
            var a = this,
                b = [];
            g.each(a.items, function(c, d) {
                "string" == typeof d && (d = {
                    url: d
                });
                var e = d.url || d.URL || null,
                    f = d.options || {},
                    h = d.caption || null,
                    l = d.title || null,
                    k = d.type ? d.type.toLowerCase() : aa(e),
                    n = "object" != typeof e ? Z(e) : "";
                f.thumbnail = f.thumbnail || ("image" == k ? e : null);
                f.videoType = f.videoType || null;
                f.skin = f.skin || a.options.skin;
                f.width = f.width || null;
                f.height = f.height || null;
                f.mousewheel = "undefined" != typeof f.mousewheel ? f.mousewheel : !0;
                f.swipe = "undefined" != typeof f.swipe ? f.swipe : !0;
                f.social = "undefined" != typeof f.social ? f.social : a.options.social.buttons && g.extend({}, {}, a.options.social.buttons);
                "video" == k && (f.html5video = "undefined" != typeof f.html5video ? f.html5video : {}, f.html5video.webm = f.html5video.webm || f.html5video.WEBM || null, f.html5video.controls = "undefined" != typeof f.html5video.controls ? f.html5video.controls : "controls", f.html5video.preload = f.html5video.preload || "metadata", f.html5video.autoplay = "undefined" != typeof f.html5video.autoplay ? f.html5video.autoplay : !1);
                f.width && f.height || ("video" == k ? (f.width = 1280, f.height = 720) : "iframe" == k ? (f.width = "100%", f.height = "90%") : "flash" == k && (f.width = 1280, f.height = 720));
                delete d.url;
                d.index = c;
                d.URL = e;
                d.caption = h;
                d.title = l;
                d.type = k;
                d.options = f;
                d.ext = n;
                b.push(d)
            });
            a.items = b
        },
        instantCall: function() {
            var a = this.vars.start;
            this.vars.current = a;
            this.vars.next = this.items[a + 1] ? a + 1 : null;
            this.vars.prev = this.items[a - 1] ? a - 1 : null;
            this.addContents();
            this.patchEvents()
        },
        addContents: function() {
            var a = this,
                b = a.vars,
                c = a.options,
                d = J(),
                e = c.path.toLowerCase(),
                f = 0 < b.total && a.items.filter(function(a, b, d) {
                    return -1 === ["image", "flash", "video"].indexOf(a.type) && "undefined" === typeof a.recognized && (c.smartRecognition || a.options.smartRecognition)
                }),
                h = 0 < f.length;
            c.mobileOptimizer && !c.innerToolbar && (b.isMobile = d.width <= b.mobileMaxWidth);
            b.overlay.addClass(c.skin).hide().css("opacity", c.overlay.opacity);
            c.linkId && b.overlay[0].setAttribute("linkid", c.linkId);
            c.controls.toolbar && (b.toolbar.addClass(c.skin).append(b.closeButton), c.controls.fullscreen && b.toolbar.append(b.fullScreenButton), c.controls.slideshow && b.toolbar.append(b.innerPlayButton), 1 < b.total && b.toolbar.append(b.innerPrevButton).append(b.innerNextButton));
            b.BODY.addClass("ilightbox-noscroll").append(b.overlay).append(b.loader).append(b.holder).append(b.nextPhoto).append(b.prevPhoto);
            c.innerToolbar || b.BODY.append(b.toolbar);
            c.controls.arrows && b.BODY.append(b.nextButton).append(b.prevButton);
            c.controls.thumbnail && 1 < b.total && (b.BODY.append(b.thumbnails), b.thumbnails.addClass(c.skin).addClass("ilightbox-" + e), g("div.ilightbox-thumbnails-grid", b.thumbnails).empty(), b.thumbs = !0);
            d = "horizontal" == c.path.toLowerCase() ? {
                left: parseInt(d.width / 2 - b.loader.outerWidth() / 2)
            } : {
                top: parseInt(d.height / 2 - b.loader.outerHeight() / 2)
            };
            b.loader.addClass(c.skin).css(d);
            b.nextButton.add(b.prevButton).addClass(c.skin);
            "horizontal" == e && b.loader.add(b.nextButton).add(b.prevButton).addClass("horizontal");
            b.BODY[b.isMobile ? "addClass" : "removeClass"]("isMobile");
            c.infinite || (b.prevButton.add(b.prevButton).add(b.innerPrevButton).add(b.innerNextButton).removeClass("disabled"), 0 == b.current && b.prevButton.add(b.innerPrevButton).addClass("disabled"), b.current >= b.total - 1 && b.nextButton.add(b.innerNextButton).addClass("disabled"));
            c.show.effect ? (b.overlay.stop().fadeIn(c.show.speed), b.toolbar.stop().fadeIn(c.show.speed)) : (b.overlay.show(), b.toolbar.show());
            var l = f.length;
            h ? (a.showLoader(), g.each(f, function(d, e) {
                a.ogpRecognition(this, function(d) {
                    console.log(d);
                    var e = -1;
                    a.items.filter(function(a, b, c) {
                        a.URL == d.url && (e = b);
                        return a.URL == d.url
                    });
                    var f = a.items[e];
                    d && g.extend(!0, f, {
                        URL: d.source,
                        type: d.type,
                        recognized: !0,
                        options: {
                            html5video: d.html5video,
                            width: "image" == d.type ? 0 : d.width || f.width,
                            height: "image" == d.type ? 0 : d.height || f.height,
                            thumbnail: f.options.thumbnail || d.thumbnail
                        }
                    });
                    l--;
                    0 == l && (a.hideLoader(), b.dontGenerateThumbs = !1, a.generateThumbnails(), c.show.effect ? setTimeout(function() {
                        a.generateBoxes()
                    }, c.show.speed) : a.generateBoxes())
                })
            })) : c.show.effect ? setTimeout(function() {
                a.generateBoxes()
            }, c.show.speed) : a.generateBoxes();
            a.createUI();
            p.iLightBox = {
                close: function() {
                    a.closeAction()
                },
                fullscreen: function() {
                    a.fullScreenAction()
                },
                moveNext: function() {
                    a.moveTo("next")
                },
                movePrev: function() {
                    a.moveTo("prev")
                },
                goTo: function(b) {
                    a.goTo(b)
                },
                refresh: function() {
                    a.refresh()
                },
                reposition: function() {
                    0 < arguments.length ? a.repositionPhoto(!0) : a.repositionPhoto()
                },
                setOption: function(b) {
                    a.setOption(b)
                },
                destroy: function() {
                    a.closeAction();
                    a.dispatchItemsEvents()
                }
            };
            c.linkId && (b.hashLock = !0, p.location.hash = c.linkId + "/" + b.current, setTimeout(function() {
                b.hashLock = !1
            }, 55));
            c.slideshow.startPaused || (a.resume(), b.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause"));
            "function" == typeof a.options.callback.onOpen && a.options.callback.onOpen.call(a)
        },
        loadContent: function(a, b, c) {
            this.createUI();
            a.speed = c || this.options.effects.loadedFadeSpeed;
            "current" == b && (this.vars.lockWheel = a.options.mousewheel ? !1 : !0, this.vars.lockSwipe = a.options.swipe ? !1 : !0);
            switch (b) {
                case "current":
                    var d = this.vars.holder;
                    var e = this.vars.current;
                    break;
                case "next":
                    d = this.vars.nextPhoto;
                    e = this.vars.next;
                    break;
                case "prev":
                    d = this.vars.prevPhoto, e = this.vars.prev
            }
            d.removeAttr("style class").addClass("ilightbox-holder" + (z ? " supportTouch" : "")).addClass(a.options.skin);
            g("div.ilightbox-inner-toolbar", d).remove();
            if (a.title || this.options.innerToolbar) {
                var f = this.vars.innerToolbar.clone();
                if (a.title && this.options.show.title) {
                    var h = this.vars.title.clone();
                    h.empty().html(a.title);
                    f.append(h)
                }
                this.options.innerToolbar && f.append(1 < this.vars.total ? this.vars.toolbar.clone() : this.vars.toolbar);
                d.prepend(f)
            }
            console.warn("loadContent", arguments);
            this.loadSwitcher(a, d, e, b)
        },
        loadSwitcher: function(a, b, c, d) {
            var e = this,
                f = e.options,
                h = {
                    element: b,
                    position: c
                };
            switch (a.type) {
                case "image":
                    "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
                    "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, h);
                    e.loadImage(a.URL, function(k) {
                        "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                        "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                        b.data({
                            naturalWidth: k ? k.width : 400,
                            naturalHeight: k ? k.height : 200
                        });
                        g("div.ilightbox-container", b).empty().append(k ? '<img src="' + a.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + f.errors.loadImage + "</span>");
                        "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                        "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                        e.configureHolder(a, d, b)
                    });
                    break;
                case "video":
                    b.data({
                        naturalWidth: a.options.width,
                        naturalHeight: a.options.height
                    });
                    "current" === d ? (e.addContent(b, a), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, h)) : g("div.ilightbox-container", b).empty();
                    e.configureHolder(a, d, b);
                    break;
                case "iframe":
                    b.data({
                        naturalWidth: a.options.width,
                        naturalHeight: a.options.height
                    });
                    e.configureHolder(a, d, b);
                    if ("current" === d) {
                        var l = e.addContent(b, a);
                        "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                        "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                        "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
                        "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, h);
                        l.bind("load", function() {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                            "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                            l.unbind("load")
                        })
                    } else {
                        g("div.ilightbox-container", b).empty()
                    }
                    break;
                case "inline":
                    l = g(a.URL);
                    var k = e.addContent(b, a),
                        n = R(b);
                    b.data({
                        naturalWidth: e.items[c].options.width || l.outerWidth(),
                        naturalHeight: e.items[c].options.height || l.outerHeight()
                    });
                    k.children().eq(0).show();
                    "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                    "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                    "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
                    "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, h);
                    e.loadImage(n, function() {
                        "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                        "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                        e.configureHolder(a, d, b)
                    });
                    break;
                case "flash":
                    l = e.addContent(b, a);
                    b.data({
                        naturalWidth: e.items[c].options.width || l.outerWidth(),
                        naturalHeight: e.items[c].options.height || l.outerHeight()
                    });
                    "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                    "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                    e.configureHolder(a, d, b);
                    break;
                case "ajax":
                    var m = a.options.ajax || {};
                    "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
                    "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, h);
                    e.showLoader();
                    g.ajax({
                        url: a.URL || f.ajaxSetup.url,
                        data: m.data || null,
                        dataType: m.dataType || "html",
                        type: m.type || f.ajaxSetup.type,
                        cache: m.cache || f.ajaxSetup.cache,
                        crossDomain: m.crossDomain || f.ajaxSetup.crossDomain,
                        global: m.global || f.ajaxSetup.global,
                        ifModified: m.ifModified || f.ajaxSetup.ifModified,
                        username: m.username || f.ajaxSetup.username,
                        password: m.password || f.ajaxSetup.password,
                        beforeSend: m.beforeSend || f.ajaxSetup.beforeSend,
                        complete: m.complete || f.ajaxSetup.complete,
                        success: function(k, l, n) {
                            e.hideLoader();
                            var q = g(k),
                                u = g("div.ilightbox-container", b),
                                C = e.items[c].options.width || parseInt(q[0].getAttribute("width")),
                                v = e.items[c].options.height || parseInt(q[0].getAttribute("height")),
                                y = q[0].getAttribute("width") && q[0].getAttribute("height") ? {
                                    overflow: "hidden"
                                } : {};
                            u.empty().append(g('<div class="ilightbox-wrapper"></div>').css(y).html(q));
                            b.show().data({
                                naturalWidth: C || u.outerWidth(),
                                naturalHeight: v || u.outerHeight()
                            }).hide();
                            "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                            "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                            q = R(b);
                            e.loadImage(q, function() {
                                "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                                "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                                e.configureHolder(a, d, b)
                            });
                            f.ajaxSetup.success(k, l, n);
                            "function" == typeof m.success && m.success(k, l, n)
                        },
                        error: function(k, l, n) {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                            "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                            e.hideLoader();
                            g("div.ilightbox-container", b).empty().append('<span class="ilightbox-alert">' + f.errors.loadContents + "</span>");
                            e.configureHolder(a, d, b);
                            f.ajaxSetup.error(k, l, n);
                            "function" == typeof m.error && m.error(k, l, n)
                        }
                    });
                    break;
                case "html":
                    k = a.URL;
                    container = g("div.ilightbox-container", b);
                    k[0].nodeName ? l = k.clone() : (k = g(k), l = k.selector ? g("<div>" + k + "</div>") : k);
                    var C = e.items[c].options.width || parseInt(l.attr("width")),
                        y = e.items[c].options.height || parseInt(l.attr("height"));
                    e.addContent(b, a);
                    l.appendTo(document.documentElement).hide();
                    "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
                    "function" == typeof a.options.onRender && a.options.onRender.call(e, h);
                    n = R(b);
                    "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
                    "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, h);
                    e.loadImage(n, function() {
                        "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
                        "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, h);
                        b.show().data({
                            naturalWidth: C || container.outerWidth(),
                            naturalHeight: y || container.outerHeight()
                        }).hide();
                        l.remove();
                        e.configureHolder(a, d, b)
                    })
            }
        },
        configureHolder: function(a, b, c) {
            var d = this,
                e = d.vars,
                f = d.options;
            "current" != b && ("next" == b ? c.addClass("ilightbox-next") : c.addClass("ilightbox-prev"));
            if ("current" == b) {
                var h = e.current
            } else {
                if ("next" == b) {
                    var l = f.styles.nextOpacity;
                    h = e.next
                } else {
                    l = f.styles.prevOpacity, h = e.prev
                }
            }
            var k = {
                element: c,
                position: h
            };
            d.items[h].options.width = d.items[h].options.width || 0;
            d.items[h].options.height = d.items[h].options.height || 0;
            "current" == b ? f.show.effect ? c.css(B, H).fadeIn(a.speed, function() {
                c.css(B, "");
                if (a.caption) {
                    d.setCaption(a, c);
                    var b = g("div.ilightbox-caption", c),
                        e = parseInt(b.outerHeight() / c.outerHeight() * 100);
                    f.caption.start & 50 >= e && b.fadeIn(f.effects.fadeSpeed)
                }
                if (b = a.options.social) {
                    d.setSocial(b, a.URL, c), f.social.start && g("div.ilightbox-social", c).fadeIn(f.effects.fadeSpeed)
                }
                d.generateThumbnails();
                "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, h);
                "function" == typeof a.options.onShow && a.options.onShow.call(d, k)
            }) : (c.show(), d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, h), "function" == typeof a.options.onShow && a.options.onShow.call(d, k)) : f.show.effect ? c.fadeTo(a.speed, l, function() {
                "next" == b ? e.nextLock = !1 : e.prevLock = !1;
                d.generateThumbnails();
                "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, h);
                "function" == typeof a.options.onShow && a.options.onShow.call(d, k)
            }) : (c.css({
                opacity: l
            }).show(), "next" == b ? e.nextLock = !1 : e.prevLock = !1, d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, h), "function" == typeof a.options.onShow && a.options.onShow.call(d, k));
            setTimeout(function() {
                d.repositionPhoto()
            }, 0)
        },
        generateBoxes: function() {
            var a = this.vars,
                b = this.options;
            b.infinite && 3 <= a.total ? (a.current == a.total - 1 && (a.next = 0), 0 == a.current && (a.prev = a.total - 1)) : b.infinite = !1;
            this.loadContent(this.items[a.current], "current", b.show.speed);
            this.items[a.next] && this.loadContent(this.items[a.next], "next", b.show.speed);
            this.items[a.prev] && this.loadContent(this.items[a.prev], "prev", b.show.speed)
        },
        generateThumbnails: function() {
            var a = this,
                b = a.vars,
                c = a.options,
                d = null;
            if (b.thumbs && !a.vars.dontGenerateThumbs) {
                var e = b.thumbnails,
                    f = g("div.ilightbox-thumbnails-container", e),
                    h = g("div.ilightbox-thumbnails-grid", f),
                    l = 0;
                h.removeAttr("style").empty();
                g.each(a.items, function(k, n) {
                    var m = b.current == k ? "ilightbox-active" : "",
                        C = b.current == k ? c.thumbnails.activeOpacity : c.thumbnails.normalOpacity,
                        y = n.options.thumbnail,
                        q = g('<div class="ilightbox-thumbnail"></div>'),
                        u = g('<div class="ilightbox-thumbnail-icon"></div>');
                    q.css({
                        opacity: 0
                    }).addClass(m);
                    "video" != n.type && "flash" != n.type || "undefined" != typeof n.options.icon ? n.options.icon && (u.addClass("ilightbox-thumbnail-" + n.options.icon), q.append(u)) : (u.addClass("ilightbox-thumbnail-video"), q.append(u));
                    y && a.loadImage(y, function(b) {
                        l++;
                        b ? q.data({
                            naturalWidth: b.width,
                            naturalHeight: b.height
                        }).append('<img src="' + y + '" border="0" />') : q.data({
                            naturalWidth: c.thumbnails.maxWidth,
                            naturalHeight: c.thumbnails.maxHeight
                        });
                        clearTimeout(d);
                        d = setTimeout(function() {
                            a.positionThumbnails(e, f, h)
                        }, 20);
                        setTimeout(function() {
                            q.fadeTo(c.effects.loadedFadeSpeed, C)
                        }, 20 * l)
                    });
                    h.append(q)
                });
                a.vars.dontGenerateThumbs = !0
            }
        },
        positionThumbnails: function(a, b, c) {
            var d = this,
                e = d.vars,
                f = d.options,
                h = J(),
                l = f.path.toLowerCase();
            a || (a = e.thumbnails);
            b || (b = g("div.ilightbox-thumbnails-container", a));
            c || (c = g("div.ilightbox-thumbnails-grid", b));
            var k = g(".ilightbox-thumbnail", c);
            e = "horizontal" == l ? h.width - f.styles.pageOffsetX : k.eq(0).outerWidth() - f.styles.pageOffsetX;
            h = "horizontal" == l ? k.eq(0).outerHeight() - f.styles.pageOffsetY : h.height - f.styles.pageOffsetY;
            var n = "horizontal" == l ? 0 : e,
                m = "horizontal" == l ? h : 0,
                C = g(".ilightbox-active", c),
                y = {};
            3 > arguments.length && (k.css({
                opacity: f.thumbnails.normalOpacity
            }), C.css({
                opacity: f.thumbnails.activeOpacity
            }));
            k.each(function(a) {
                a = g(this);
                var b = a.data(),
                    c = "horizontal" == l ? 0 : f.thumbnails.maxWidth;
                height = "horizontal" == l ? f.thumbnails.maxHeight : 0;
                dims = d.getNewDimenstions(c, height, b.naturalWidth, b.naturalHeight, !0);
                a.css({
                    width: dims.width,
                    height: dims.height
                });
                "horizontal" == l && a.css({
                    "float": "left"
                });
                "horizontal" == l ? n += a.outerWidth() : m += a.outerHeight()
            });
            y = {
                width: n,
                height: m
            };
            c.css(y);
            y = {};
            k = c.offset();
            var q = C.length ? C.offset() : {
                top: parseInt(h / 2),
                left: parseInt(e / 2)
            };
            k.top -= E.scrollTop();
            k.left -= E.scrollLeft();
            q.top = q.top - k.top - E.scrollTop();
            q.left = q.left - k.left - E.scrollLeft();
            "horizontal" == l ? (y.top = 0, y.left = parseInt(e / 2 - q.left - C.outerWidth() / 2)) : (y.top = parseInt(h / 2 - q.top - C.outerHeight() / 2), y.left = 0);
            3 > arguments.length ? c.stop().animate(y, f.effects.repositionSpeed, "easeOutCirc") : c.css(y)
        },
        loadImage: function(a, b) {
            g.isArray(a) || (a = [a]);
            var c = this,
                d = a.length;
            0 < d ? (c.showLoader(), g.each(a, function(e, f) {
                var h = new Image;
                h.onload = function() {
                    --d;
                    0 == d && (c.hideLoader(), b(h))
                };
                h.onerror = h.onabort = function() {
                    --d;
                    0 == d && (c.hideLoader(), b(!1))
                };
                h.src = a[e]
            })) : b(!1)
        },
        patchItemsEvents: function() {
            var a = this,
                b = a.vars,
                c = z ? "itap.iL" : "click.iL",
                d = z ? "click.iL" : "itap.iL";
            if (a.context && a.selector) {
                var e = g(a.selector, a.context);
                g(a.context).on(c, a.selector, function() {
                    var c = g(this);
                    c = e.index(c);
                    b.current = c;
                    b.next = a.items[c + 1] ? c + 1 : null;
                    b.prev = a.items[c - 1] ? c - 1 : null;
                    a.addContents();
                    a.patchEvents();
                    return !1
                }).on(d, a.selector, function() {
                    return !1
                })
            } else {
                g.each(a.itemsObject, function(e, h) {
                    h.on(c, function() {
                        b.current = e;
                        b.next = a.items[e + 1] ? e + 1 : null;
                        b.prev = a.items[e - 1] ? e - 1 : null;
                        a.addContents();
                        a.patchEvents();
                        return !1
                    }).on(d, function() {
                        return !1
                    })
                })
            }
        },
        dispatchItemsEvents: function() {
            this.context && this.selector ? g(this.context).off(".iL", this.selector) : g.each(this.itemsObject, function(a, b) {
                b.off(".iL")
            })
        },
        refresh: function() {
            this.dispatchItemsEvents();
            this.attachItems();
            this.normalizeItems();
            this.patchItemsEvents()
        },
        patchEvents: function() {
            function a(a) {
                c.isMobile || (c.mouseID || c.hideableElements.show(), c.mouseID = clearTimeout(c.mouseID), -1 === k.indexOf(a.target) && (c.mouseID = setTimeout(function() {
                    c.hideableElements.hide();
                    c.mouseID = clearTimeout(c.mouseID)
                }, 3000)))
            }
            var b = this,
                c = b.vars,
                d = b.options,
                e = d.path.toLowerCase(),
                f = g(".ilightbox-holder"),
                h = t.fullScreenEventName + ".iLightBox",
                l = verticalDistanceThreshold = 100,
                k = [c.nextButton[0], c.prevButton[0], c.nextButton[0].firstChild, c.prevButton[0].firstChild];
            O.bind("resize.iLightBox", function() {
                var a = J();
                d.mobileOptimizer && !d.innerToolbar && (c.isMobile = a.width <= c.mobileMaxWidth);
                c.BODY[c.isMobile ? "addClass" : "removeClass"]("isMobile");
                b.repositionPhoto(null);
                z && (clearTimeout(c.setTime), c.setTime = setTimeout(function() {
                    var a = L().y;
                    p.scrollTo(0, a - 30);
                    p.scrollTo(0, a + 30);
                    p.scrollTo(0, a)
                }, 2000));
                c.thumbs && b.positionThumbnails()
            }).bind("keydown.iLightBox", function(a) {
                if (d.controls.keyboard) {
                    switch (a.keyCode) {
                        case 13:
                            a.shiftKey && d.keyboard.shift_enter && b.fullScreenAction();
                            break;
                        case 27:
                            d.keyboard.esc && b.closeAction();
                            break;
                        case 37:
                            d.keyboard.left && !c.lockKey && b.moveTo("prev");
                            break;
                        case 38:
                            d.keyboard.up && !c.lockKey && b.moveTo("prev");
                            break;
                        case 39:
                            d.keyboard.right && !c.lockKey && b.moveTo("next");
                            break;
                        case 40:
                            d.keyboard.down && !c.lockKey && b.moveTo("next")
                    }
                }
            });
            t.supportsFullScreen && O.bind(h, function() {
                b.doFullscreen()
            });
            h = [d.caption.show + ".iLightBox", d.caption.hide + ".iLightBox", d.social.show + ".iLightBox", d.social.hide + ".iLightBox"].filter(function(a, b, c) {
                return c.lastIndexOf(a) === b
            });
            var n = "";
            g.each(h, function(a, b) {
                0 != a && (n += " ");
                n += b
            });
            E.on(K, ".ilightbox-overlay", function() {
                d.overlay.blur && b.closeAction()
            }).on(K, ".ilightbox-next, .ilightbox-next-button", function() {
                b.moveTo("next")
            }).on(K, ".ilightbox-prev, .ilightbox-prev-button", function() {
                b.moveTo("prev")
            }).on(K, ".ilightbox-thumbnail", function() {
                var a = g(this);
                a = g(".ilightbox-thumbnail", c.thumbnails).index(a);
                a != c.current && b.goTo(a)
            }).on(n, ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a) {
                var b = g("div.ilightbox-caption", c.holder),
                    e = g("div.ilightbox-social", c.holder),
                    f = d.effects.fadeSpeed;
                c.nextLock || c.prevLock ? (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.fadeOut(f) : b.fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.fadeOut(f) : e.fadeIn(f)) : (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.stop().fadeOut(f) : b.stop().fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.stop().fadeOut(f) : e.stop().fadeIn(f))
            }).on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-wrapper", function(a) {
                c.lockWheel = "mouseenter" == a.type ? !0 : !1
            }).on(K, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause", function() {
                var a = g(this);
                a.hasClass("ilightbox-fullscreen") ? b.fullScreenAction() : a.hasClass("ilightbox-play") ? (b.resume(), a.addClass("ilightbox-pause").removeClass("ilightbox-play")) : a.hasClass("ilightbox-pause") ? (b.pause(), a.addClass("ilightbox-play").removeClass("ilightbox-pause")) : b.closeAction()
            }).on(W, ".ilightbox-overlay, .ilightbox-thumbnails-container", function(a) {
                a.preventDefault()
            });
            if (d.controls.arrows && !z) {
                E.on("mousemove.iLightBox", a)
            }
            if (d.controls.slideshow && d.slideshow.pauseOnHover) {
                E.on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a) {
                    "mouseenter" == a.type && c.cycleID ? b.pause() : "mouseleave" == a.type && c.isPaused && b.resume()
                })
            }
            h = g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");
            if (d.controls.mousewheel) {
                h.on("mousewheel.iLightBox", function(a, d) {
                    c.lockWheel || (a.preventDefault(), 0 > d ? b.moveTo("next") : 0 < d && b.moveTo("prev"))
                })
            }
            if (d.controls.swipe) {
                f.on(pa, function(a) {
                    function h(a) {
                        var b = g(this);
                        a = r[a];
                        var c = [w.coords[0] - x.coords[0], w.coords[1] - x.coords[1]];
                        b[0].style["horizontal" == e ? "left" : "top"] = ("horizontal" == e ? a.left - c[0] : a.top - c[1]) + "px"
                    }

                    function k(a) {
                        if (w) {
                            var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                            x = {
                                time: (new Date).getTime(),
                                coords: [b.pageX - n, b.pageY - m]
                            };
                            f.each(h);
                            a.preventDefault()
                        }
                    }

                    function q() {
                        f.each(function() {
                            var a = g(this),
                                b = a.data("offset") || {
                                    top: a.offset().top - m,
                                    left: a.offset().left - n
                                },
                                c = b.top;
                            b = b.left;
                            a.css(B, H).stop().animate({
                                top: c,
                                left: b
                            }, 500, "easeOutCirc", function() {
                                a.css(B, "")
                            })
                        })
                    }
                    if (!(c.nextLock || c.prevLock || 1 == c.total || c.lockSwipe)) {
                        c.BODY.addClass("ilightbox-closedhand");
                        a = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                        var m = E.scrollTop(),
                            n = E.scrollLeft(),
                            p = [f.eq(0).offset(), f.eq(1).offset(), f.eq(2).offset()],
                            r = [{
                                top: p[0].top - m,
                                left: p[0].left - n
                            }, {
                                top: p[1].top - m,
                                left: p[1].left - n
                            }, {
                                top: p[2].top - m,
                                left: p[2].left - n
                            }],
                            w = {
                                time: (new Date).getTime(),
                                coords: [a.pageX - n, a.pageY - m]
                            },
                            x;
                        f.bind(W, k);
                        E.one(qa, function(a) {
                            f.unbind(W, k);
                            c.BODY.removeClass("ilightbox-closedhand");
                            w && x && ("horizontal" == e && 1000 > x.time - w.time && I(w.coords[0] - x.coords[0]) > l && I(w.coords[1] - x.coords[1]) < verticalDistanceThreshold ? w.coords[0] > x.coords[0] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : q() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : q() : "vertical" == e && 1000 > x.time - w.time && I(w.coords[1] - x.coords[1]) > l && I(w.coords[0] - x.coords[0]) < verticalDistanceThreshold ? w.coords[1] > x.coords[1] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : q() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : q() : q());
                            w = x = Q
                        })
                    }
                })
            }
        },
        goTo: function(a) {
            var b = this,
                c = b.vars,
                d = b.options,
                e = a - c.current;
            d.infinite && (a == c.total - 1 && 0 == c.current && (e = -1), c.current == c.total - 1 && 0 == a && (e = 1));
            if (1 == e) {
                b.moveTo("next")
            } else {
                if (-1 == e) {
                    b.moveTo("prev")
                } else {
                    if (c.nextLock || c.prevLock) {
                        return !1
                    }
                    "function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui);
                    d.linkId && (c.hashLock = !0, p.location.hash = d.linkId + "/" + a);
                    b.items[a] && (b.items[a].options.mousewheel ? b.vars.lockWheel = !1 : c.lockWheel = !0, c.lockSwipe = b.items[a].options.swipe ? !1 : !0);
                    g.each([c.holder, c.nextPhoto, c.prevPhoto], function(a, b) {
                        b.css(B, H).fadeOut(d.effects.loadedFadeSpeed)
                    });
                    c.current = a;
                    c.next = a + 1;
                    c.prev = a - 1;
                    b.createUI();
                    setTimeout(function() {
                        b.generateBoxes()
                    }, d.effects.loadedFadeSpeed + 50);
                    g(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(a).addClass("ilightbox-active");
                    b.positionThumbnails();
                    d.linkId && setTimeout(function() {
                        c.hashLock = !1
                    }, 55);
                    d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled"));
                    b.resetCycle();
                    "function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
                }
            }
        },
        moveTo: function(a) {
            var b = this,
                c = b.vars,
                d = b.options,
                e = d.path.toLowerCase(),
                f = J(),
                h = d.effects.switchSpeed;
            if (c.nextLock || c.prevLock) {
                return !1
            }
            var l = "next" == a ? c.next : c.prev;
            d.linkId && (c.hashLock = !0, p.location.hash = d.linkId + "/" + l);
            if ("next" == a) {
                if (!b.items[l]) {
                    return !1
                }
                var k = c.nextPhoto,
                    n = c.holder,
                    m = c.prevPhoto,
                    C = "ilightbox-prev",
                    y = "ilightbox-next"
            } else {
                if ("prev" == a) {
                    if (!b.items[l]) {
                        return !1
                    }
                    k = c.prevPhoto;
                    n = c.holder;
                    m = c.nextPhoto;
                    C = "ilightbox-next";
                    y = "ilightbox-prev"
                }
            }
            "function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui);
            "next" == a ? c.nextLock = !0 : c.prevLock = !0;
            var q = g("div.ilightbox-caption", n),
                u = g("div.ilightbox-social", n);
            q.length && q.stop().fadeOut(h, function() {
                g(this).remove()
            });
            u.length && u.stop().fadeOut(h, function() {
                g(this).remove()
            });
            b.items[l].caption && (b.setCaption(b.items[l], k), q = g("div.ilightbox-caption", k), u = parseInt(q.outerHeight() / k.outerHeight() * 100), d.caption.start && 50 >= u && q.fadeIn(h));
            if (q = b.items[l].options.social) {
                b.setSocial(q, b.items[l].URL, k), d.social.start && g("div.ilightbox-social", k).fadeIn(d.effects.fadeSpeed)
            }
            g.each([k, n, m], function(a, b) {
                b.removeClass("ilightbox-next ilightbox-prev")
            });
            var v = k.data("offset");
            q = f.width - d.styles.pageOffsetX;
            f = f.height - d.styles.pageOffsetY;
            u = v.newDims.width;
            var r = v.newDims.height,
                t = v.thumbsOffset;
            v = v.diff;
            var w = parseInt(f / 2 - r / 2 - v.H - t.H / 2);
            v = parseInt(q / 2 - u / 2 - v.W - t.W / 2);
            k.css(B, H).animate({
                top: w,
                left: v,
                opacity: 1
            }, h, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                k.css(B, "")
            });
            g("div.ilightbox-container", k).animate({
                width: u,
                height: r
            }, h, c.isSwipe ? "easeOutCirc" : "easeInOutCirc");
            r = n.data("offset");
            var x = r.object;
            v = r.diff;
            u = r.newDims.width;
            r = r.newDims.height;
            u = parseInt(u * d.styles["next" == a ? "prevScale" : "nextScale"]);
            r = parseInt(r * d.styles["next" == a ? "prevScale" : "nextScale"]);
            w = "horizontal" == e ? parseInt(f / 2 - x.offsetY - r / 2 - v.H - t.H / 2) : parseInt(f - x.offsetX - v.H - t.H / 2);
            "prev" == a ? v = "horizontal" == e ? parseInt(q - x.offsetX - v.W - t.W / 2) : parseInt(q / 2 - u / 2 - v.W - x.offsetY - t.W / 2) : (w = "horizontal" == e ? w : parseInt(x.offsetX - v.H - r - t.H / 2), v = "horizontal" == e ? parseInt(x.offsetX - v.W - u - t.W / 2) : parseInt(q / 2 - x.offsetY - u / 2 - v.W - t.W / 2));
            g("div.ilightbox-container", n).animate({
                width: u,
                height: r
            }, h, c.isSwipe ? "easeOutCirc" : "easeInOutCirc");
            n.addClass(C).css(B, H).animate({
                top: w,
                left: v,
                opacity: d.styles.prevOpacity
            }, h, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                n.css(B, "");
                g(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(l).addClass("ilightbox-active");
                b.positionThumbnails();
                b.items[l] && (c.lockWheel = b.items[l].options.mousewheel ? !1 : !0, c.lockSwipe = b.items[l].options.swipe ? !1 : !0);
                c.isSwipe = !1; - 1 !== ["iframe", "video"].indexOf(b.items[c.current].type) && g("div.ilightbox-container", n).empty();
                "next" == a ? (c.nextPhoto = m, c.prevPhoto = n, c.holder = k, c.nextPhoto.hide(), c.next += 1, c.prev = c.current, c.current += 1, d.infinite && (c.current > c.total - 1 && (c.current = 0), c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.next] ? b.loadContent(b.items[c.next], "next") : c.nextLock = !1) : (c.prevPhoto = m, c.nextPhoto = n, c.holder = k, c.prevPhoto.hide(), c.next = c.current, c.current = c.prev, c.prev = c.current - 1, d.infinite && (c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.prev] ? b.loadContent(b.items[c.prev], "prev") : c.prevLock = !1); - 1 !== ["iframe", "video"].indexOf(b.items[c.current].type) && b.loadContent(b.items[c.current], "current");
                d.linkId && setTimeout(function() {
                    c.hashLock = !1
                }, 55);
                d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled"));
                b.repositionPhoto();
                b.resetCycle();
                "function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
            });
            w = "horizontal" == e ? F(m, "top") : "next" == a ? parseInt(-(f / 2) - m.outerHeight()) : parseInt(2 * w);
            v = "horizontal" == e ? "next" == a ? parseInt(-(q / 2) - m.outerWidth()) : parseInt(2 * v) : F(m, "left");
            m.css(B, H).animate({
                top: w,
                left: v,
                opacity: d.styles.nextOpacity
            }, h, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                m.css(B, "")
            }).addClass(y)
        },
        setCaption: function(a, b) {
            var c = g('<div class="ilightbox-caption"></div>');
            a.caption && (c.html(a.caption), g("div.ilightbox-container", b).append(c))
        },
        normalizeSocial: function(a, b) {
            var c = this.options,
                d = p.location.href;
            g.each(a, function(e, f) {
                if (!f) {
                    return !0
                }
                switch (e.toLowerCase()) {
                    case "facebook":
                        var h = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}";
                        var g = "Share on Facebook";
                        break;
                    case "twitter":
                        h = "http://twitter.com/home?status={URL}";
                        g = "Share on Twitter";
                        break;
                    case "googleplus":
                        h = "https://plus.google.com/share?url={URL}";
                        g = "Share on Google+";
                        break;
                    case "delicious":
                        h = "http://delicious.com/post?url={URL}";
                        g = "Share on Delicious";
                        break;
                    case "digg":
                        h = "http://digg.com/submit?phase=2&url={URL}";
                        g = "Share on Digg";
                        break;
                    case "reddit":
                        h = "http://reddit.com/submit?url={URL}", g = "Share on reddit"
                }
                a[e] = {
                    URL: f.URL && N(d, f.URL) || c.linkId && p.location.href || "string" !== typeof b && d || b && N(d, b) || d,
                    source: f.source || h || f.URL && N(d, f.URL) || b && N(d, b),
                    text: f.text || g || "Share on " + e,
                    width: "undefined" == typeof f.width || isNaN(f.width) ? 640 : parseInt(f.width),
                    height: f.height || 360
                }
            });
            return a
        },
        setSocial: function(a, b, c) {
            var d = g('<div class="ilightbox-social"></div>'),
                e = "<ul>";
            a = this.normalizeSocial(a, b);
            g.each(a, function(a, b) {
                a.toLowerCase();
                var c = b.source.replace(/\{URL\}/g, encodeURIComponent(b.URL).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+"));
                e += '<li class="' + a + '"><a href="' + c + '" onclick="javascript:window.open(this.href' + (0 >= b.width || 0 >= b.height ? "" : ", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + b.height + ",width=" + b.width + ",left=40,top=40'") + ');return false;" title="' + b.text + '" target="_blank"></a></li>'
            });
            e += "</ul>";
            d.html(e);
            g("div.ilightbox-container", c).append(d)
        },
        fullScreenAction: function() {
            t.supportsFullScreen ? t.isFullScreen() ? t.cancelFullScreen(document.documentElement) : t.requestFullScreen(document.documentElement) : this.doFullscreen()
        },
        doFullscreen: function() {
            var a = this.vars,
                b = J(),
                c = this.options;
            if (c.fullAlone) {
                var d = a.holder,
                    e = this.items[a.current],
                    f = b.width,
                    h = b.height,
                    l = [d, a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.overlay, a.toolbar, a.thumbnails, a.loader];
                b = [a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.loader, a.thumbnails];
                if (a.isInFullScreen) {
                    a.isInFullScreen = a.lockKey = a.lockWheel = a.lockSwipe = !1, a.overlay.css({
                        opacity: this.options.overlay.opacity
                    }), g.each(b, function(a, b) {
                        b.show()
                    }), a.fullScreenButton.attr("title", c.text.enterFullscreen), d.data({
                        naturalWidth: d.data("naturalWidthOld"),
                        naturalHeight: d.data("naturalHeightOld"),
                        naturalWidthOld: null,
                        naturalHeightOld: null
                    }), g.each(l, function(a, b) {
                        b.removeClass("ilightbox-fullscreen")
                    }), "function" == typeof c.callback.onExitFullScreen && c.callback.onExitFullScreen.call(this, this.ui)
                } else {
                    a.isInFullScreen = a.lockKey = a.lockWheel = a.lockSwipe = !0;
                    a.overlay.css({
                        opacity: 1
                    });
                    g.each(b, function(a, b) {
                        b.hide()
                    });
                    a.fullScreenButton.attr("title", c.text.exitFullscreen);
                    if (-1 != c.fullStretchTypes.indexOf(e.type)) {
                        d.data({
                            naturalWidthOld: d.data("naturalWidth"),
                            naturalHeightOld: d.data("naturalHeight"),
                            naturalWidth: f,
                            naturalHeight: h
                        })
                    } else {
                        b = e.options.fullViewPort || c.fullViewPort || "";
                        a = f;
                        e = h;
                        f = d.data("naturalWidth");
                        var k = d.data("naturalHeight");
                        "fill" == b.toLowerCase() ? (e = a / f * k, e < h && (a = h / k * f, e = h)) : "fit" == b.toLowerCase() ? (h = this.getNewDimenstions(a, e, f, k, !0), a = h.width, e = h.height) : "stretch" != b.toLowerCase() && (h = this.getNewDimenstions(a, e, f, k, f > a || k > e ? !0 : !1), a = h.width, e = h.height);
                        d.data({
                            naturalWidthOld: d.data("naturalWidth"),
                            naturalHeightOld: d.data("naturalHeight"),
                            naturalWidth: a,
                            naturalHeight: e
                        })
                    }
                    g.each(l, function(a, b) {
                        b.addClass("ilightbox-fullscreen")
                    });
                    "function" == typeof c.callback.onEnterFullScreen && c.callback.onEnterFullScreen.call(this, this.ui)
                }
            } else {
                a.isInFullScreen = a.isInFullScreen ? !1 : !0
            }
            this.repositionPhoto(!0)
        },
        closeAction: function() {
            var a = this.vars,
                b = this.options;
            O.unbind(".iLightBox");
            E.off(".iLightBox");
            a.isInFullScreen && t.cancelFullScreen(document.documentElement);
            g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox");
            b.hide.effect ? a.overlay.stop().fadeOut(b.hide.speed, function() {
                a.overlay.remove();
                a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")
            }) : (a.overlay.remove(), a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));
            g.each([a.toolbar, a.holder, a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.loader, a.thumbnails], function(a, b) {
                b.removeAttr("style").remove()
            });
            a.dontGenerateThumbs = a.isInFullScreen = !1;
            p.iLightBox = null;
            b.linkId && (a.hashLock = !0, ia(), setTimeout(function() {
                a.hashLock = !1
            }, 55));
            "function" == typeof b.callback.onHide && b.callback.onHide.call(this, this.ui)
        },
        repositionPhoto: function() {
            var a = this.vars,
                b = this.options,
                c = b.path.toLowerCase(),
                d = J(),
                e = d.width,
                f = d.height;
            d = a.isInFullScreen && b.fullAlone || a.isMobile ? 0 : "horizontal" == c ? 0 : a.thumbnails.outerWidth();
            var h = a.isMobile ? a.toolbar.outerHeight() : a.isInFullScreen && b.fullAlone ? 0 : "horizontal" == c ? a.thumbnails.outerHeight() : 0;
            e = a.isInFullScreen && b.fullAlone ? e : e - b.styles.pageOffsetX;
            f = a.isInFullScreen && b.fullAlone ? f : f - b.styles.pageOffsetY;
            var l = "horizontal" == c ? parseInt(this.items[a.next] || this.items[a.prev] ? 2 * (b.styles.nextOffsetX + b.styles.prevOffsetX) : 30 >= e / 10 ? 30 : e / 10) : parseInt(30 >= e / 10 ? 30 : e / 10) + d,
                k = "horizontal" == c ? parseInt(30 >= f / 10 ? 30 : f / 10) + h : parseInt(this.items[a.next] || this.items[a.prev] ? 2 * (b.styles.nextOffsetX + b.styles.prevOffsetX) : 30 >= f / 10 ? 30 : f / 10);
            d = {
                type: "current",
                width: e,
                height: f,
                item: this.items[a.current],
                offsetW: l,
                offsetH: k,
                thumbsOffsetW: d,
                thumbsOffsetH: h,
                animate: arguments.length,
                holder: a.holder
            };
            this.repositionEl(d);
            this.items[a.next] && (d = g.extend(d, {
                type: "next",
                item: this.items[a.next],
                offsetX: b.styles.nextOffsetX,
                offsetY: b.styles.nextOffsetY,
                holder: a.nextPhoto
            }), this.repositionEl(d));
            this.items[a.prev] && (d = g.extend(d, {
                type: "prev",
                item: this.items[a.prev],
                offsetX: b.styles.prevOffsetX,
                offsetY: b.styles.prevOffsetY,
                holder: a.prevPhoto
            }), this.repositionEl(d));
            b = "horizontal" == c ? {
                left: parseInt(e / 2 - a.loader.outerWidth() / 2)
            } : {
                top: parseInt(f / 2 - a.loader.outerHeight() / 2)
            };
            a.loader.css(b)
        },
        repositionEl: function(a) {
            var b = this.vars,
                c = this.options,
                d = c.path.toLowerCase(),
                e = "current" == a.type ? b.isInFullScreen && c.fullAlone ? a.width : a.width - a.offsetW : a.width - a.offsetW,
                f = "current" == a.type ? b.isInFullScreen && c.fullAlone ? a.height : a.height - a.offsetH : a.height - a.offsetH,
                h = a.item,
                l = a.item.options,
                k = a.holder,
                n = a.offsetX || 0,
                m = a.offsetY || 0,
                p = a.thumbsOffsetW,
                r = a.thumbsOffsetH;
            "current" == a.type ? ("number" == typeof l.width && l.width && (e = b.isInFullScreen && c.fullAlone && (-1 != c.fullStretchTypes.indexOf(h.type) || l.fullViewPort || c.fullViewPort) ? e : l.width > e ? e : l.width), "number" == typeof l.height && l.height && (f = b.isInFullScreen && c.fullAlone && (-1 != c.fullStretchTypes.indexOf(h.type) || l.fullViewPort || c.fullViewPort) ? f : l.height > f ? f : l.height)) : ("number" == typeof l.width && l.width && (e = l.width > e ? e : l.width), "number" == typeof l.height && l.height && (f = l.height > f ? f : l.height));
            c.innerToolbar && (f = parseInt(f - g(".ilightbox-inner-toolbar", k).outerHeight()));
            b = "string" == typeof l.width && -1 != l.width.indexOf("%") ? ba(parseInt(l.width.replace("%", "")), a.width) : k.data("naturalWidth");
            h = "string" == typeof l.height && -1 != l.height.indexOf("%") ? ba(parseInt(l.height.replace("%", "")), a.height) : k.data("naturalHeight");
            h = "string" == typeof l.width && -1 != l.width.indexOf("%") || "string" == typeof l.height && -1 != l.height.indexOf("%") ? {
                width: b,
                height: h
            } : this.getNewDimenstions(e, f, b, h);
            e = g.extend({}, h, {});
            "prev" == a.type || "next" == a.type ? (b = parseInt(h.width * ("next" == a.type ? c.styles.nextScale : c.styles.prevScale)), h = parseInt(h.height * ("next" == a.type ? c.styles.nextScale : c.styles.prevScale))) : (b = h.width, h = h.height);
            f = parseInt((F(k, "padding-left") + F(k, "padding-right") + F(k, "border-left-width") + F(k, "border-right-width")) / 2);
            l = parseInt((F(k, "padding-top") + F(k, "padding-bottom") + F(k, "border-top-width") + F(k, "border-bottom-width") + (g(".ilightbox-inner-toolbar", k).outerHeight() || 0)) / 2);
            switch (a.type) {
                case "current":
                    var q = parseInt(a.height / 2 - h / 2 - l - r / 2),
                        u = parseInt(a.width / 2 - b / 2 - f - p / 2);
                    break;
                case "next":
                    q = "horizontal" == d ? parseInt(a.height / 2 - m - h / 2 - l - r / 2) : parseInt(a.height - n - l - r / 2);
                    u = "horizontal" == d ? parseInt(a.width - n - f - p / 2) : parseInt(a.width / 2 - b / 2 - f - m - p / 2);
                    break;
                case "prev":
                    q = "horizontal" == d ? parseInt(a.height / 2 - m - h / 2 - l - r / 2) : parseInt(n - l - h - r / 2), u = "horizontal" == d ? parseInt(n - f - b - p / 2) : parseInt(a.width / 2 - m - b / 2 - f - p / 2)
            }
            k.data("offset", {
                top: q,
                left: u,
                newDims: e,
                diff: {
                    W: f,
                    H: l
                },
                thumbsOffset: {
                    W: p,
                    H: r
                },
                object: a
            });
            0 < a.animate && c.effects.reposition ? (k.css(B, H).stop().animate({
                top: q,
                left: u
            }, c.effects.repositionSpeed, "easeOutCirc", function() {
                k.css(B, "")
            }), g("div.ilightbox-container", k).stop().animate({
                width: b,
                height: h
            }, c.effects.repositionSpeed, "easeOutCirc"), g("div.ilightbox-inner-toolbar", k).stop().animate({
                width: b
            }, c.effects.repositionSpeed, "easeOutCirc", function() {
                g(this).css("overflow", "visible")
            })) : (k.css({
                top: q,
                left: u
            }), g("div.ilightbox-container", k).css({
                width: b,
                height: h
            }), g("div.ilightbox-inner-toolbar", k).css({
                width: b
            }))
        },
        resume: function(a) {
            var b = this,
                c = b.vars,
                d = b.options;
            !d.slideshow.pauseTime || d.controls.slideshow && 1 >= c.total || a < c.isPaused || (c.isPaused = 0, c.cycleID && (c.cycleID = clearTimeout(c.cycleID)), c.cycleID = setTimeout(function() {
                c.current == c.total - 1 ? b.goTo(0) : b.moveTo("next")
            }, d.slideshow.pauseTime))
        },
        pause: function(a) {
            var b = this.vars;
            a < b.isPaused || (b.isPaused = a || 100, b.cycleID && (b.cycleID = clearTimeout(b.cycleID)))
        },
        resetCycle: function() {
            var a = this.vars;
            this.options.controls.slideshow && a.cycleID && !a.isPaused && this.resume()
        },
        getNewDimenstions: function(a, b, c, d, e) {
            factor = a ? b ? Y(a / c, b / d) : a / c : b / d;
            e || (factor > this.options.maxScale ? factor = this.options.maxScale : factor < this.options.minScale && (factor = this.options.minScale));
            a = this.options.keepAspectRatio ? X(c * factor) : a;
            b = this.options.keepAspectRatio ? X(d * factor) : b;
            return {
                width: a,
                height: b,
                ratio: factor
            }
        },
        setOption: function(a) {
            this.options = g.extend(!0, this.options, a || {});
            this.refresh()
        },
        availPlugins: function() {
            var a = document.createElement("video");
            this.plugins = {
                flash: !oa,
                quicktime: 0 <= parseInt(ha.getVersion("QuickTime")) ? !0 : !1,
                html5H264: !(!a.canPlayType || !a.canPlayType("video/mp4").replace(/no/, "")),
                html5WebM: !(!a.canPlayType || !a.canPlayType("video/webm").replace(/no/, "")),
                html5Vorbis: !(!a.canPlayType || !a.canPlayType("video/ogg").replace(/no/, "")),
                html5QuickTime: !(!a.canPlayType || !a.canPlayType("video/quicktime").replace(/no/, ""))
            }
        },
        addContent: function(a, b) {
            switch (b.type) {
                case "video":
                    var c = !1,
                        d = b.videoType,
                        e = b.options.html5video;
                    ("video/mp4" == d || "mp4" == b.ext || "m4v" == b.ext || e.h264) && this.plugins.html5H264 ? (b.ext = "mp4", b.URL = e.h264 || b.URL) : e.webm && this.plugins.html5WebM ? (b.ext = "webm", b.URL = e.webm || b.URL) : e.ogg && this.plugins.html5Vorbis && (b.ext = "ogv", b.URL = e.ogg || b.URL);
                    !this.plugins.html5H264 || "video/mp4" != d && "mp4" != b.ext && "m4v" != b.ext ? !this.plugins.html5WebM || "video/webm" != d && "webm" != b.ext ? !this.plugins.html5Vorbis || "video/ogg" != d && "ogv" != b.ext ? !this.plugins.html5QuickTime || "video/quicktime" != d && "mov" != b.ext && "qt" != b.ext || (c = !0, d = "video/quicktime") : (c = !0, d = "video/ogg") : (c = !0, d = "video/webm") : (c = !0, d = "video/mp4");
                    if (c) {
                        var f = g("<video />", {
                            width: "100%",
                            height: "100%",
                            preload: e.preload,
                            autoplay: e.autoplay,
                            poster: e.poster,
                            controls: e.controls
                        }).append(g("<source />", {
                            src: b.URL,
                            type: d
                        }))
                    } else {
                        this.plugins.quicktime ? (f = g("<object />", {
                            type: "video/quicktime",
                            pluginspage: "http://www.apple.com/quicktime/download"
                        }).attr({
                            data: b.URL,
                            width: "100%",
                            height: "100%"
                        }).append(g("<param />", {
                            name: "src",
                            value: b.URL
                        })).append(g("<param />", {
                            name: "autoplay",
                            value: "false"
                        })).append(g("<param />", {
                            name: "loop",
                            value: "false"
                        })).append(g("<param />", {
                            name: "scale",
                            value: "tofit"
                        })), D.msie && (f = ma(b.URL, "100%", "100%", "", "SCALE", "tofit", "AUTOPLAY", "false", "LOOP", "false"))) : f = g("<span />", {
                            "class": "ilightbox-alert",
                            html: this.options.errors.missingPlugin.replace("{pluginspage}", "http://www.apple.com/quicktime/download").replace("{type}", "QuickTime")
                        })
                    }
                    break;
                case "flash":
                    if (this.plugins.flash) {
                        var h = "",
                            l = 0;
                        b.options.flashvars ? g.each(b.options.flashvars, function(a, b) {
                            0 != l && (h += "&");
                            h += a + "=" + encodeURIComponent(b);
                            l++
                        }) : h = null;
                        f = g("<embed />").attr({
                            type: "application/x-shockwave-flash",
                            src: b.URL,
                            width: "number" == typeof b.options.width && b.options.width && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.width : "100%",
                            height: "number" == typeof b.options.height && b.options.height && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.height : "100%",
                            quality: "high",
                            bgcolor: "#000000",
                            play: "true",
                            loop: "true",
                            menu: "true",
                            wmode: "transparent",
                            scale: "showall",
                            allowScriptAccess: "always",
                            allowFullScreen: "true",
                            flashvars: h,
                            fullscreen: "yes"
                        })
                    } else {
                        f = g("<span />", {
                            "class": "ilightbox-alert",
                            html: this.options.errors.missingPlugin.replace("{pluginspage}", "http://www.adobe.com/go/getflash").replace("{type}", "Adobe Flash player")
                        })
                    }
                    break;
                case "iframe":
                    f = g("<iframe />").attr({
                        width: "number" == typeof b.options.width && b.options.width && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.width : "100%",
                        height: "number" == typeof b.options.height && b.options.height && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.height : "100%",
                        src: b.URL,
                        frameborder: 0,
                        hspace: 0,
                        vspace: 0,
                        scrolling: z ? "auto" : "scroll",
                        webkitAllowFullScreen: "",
                        mozallowfullscreen: "",
                        allowFullScreen: ""
                    });
                    break;
                case "inline":
                    f = g('<div class="ilightbox-wrapper"></div>').html(g(b.URL).clone(!0));
                    break;
                case "html":
                    c = b.URL, c[0].nodeName || (c = g(b.URL), c = c.selector ? g("<div>" + c + "</div>") : c), f = g('<div class="ilightbox-wrapper"></div>').html(c)
            }
            g("div.ilightbox-container", a).empty().html(f);
            "video" === f[0].tagName.toLowerCase() && D.webkit && setTimeout(function() {
                var a = f[0].currentSrc + "?" + M(30000 * S());
                f[0].currentSrc = a;
                f[0].src = a
            });
            return f
        },
        ogpRecognition: function(a, b) {
            var c = this,
                d = a.URL;
            c.showLoader();
            ja(d, function(a) {
                c.hideLoader();
                if (a) {
                    var d = {
                        length: !1
                    };
                    d.url = a.url;
                    if (200 == a.status) {
                        a = a.results;
                        var e = a.type,
                            g = a.source;
                        d.source = g.src;
                        d.width = g.width && parseInt(g.width) || 0;
                        d.height = g.height && parseInt(g.height) || 0;
                        d.type = e;
                        d.thumbnail = g.thumbnail || a.images && a.images[0];
                        d.html5video = a.html5video || {};
                        d.length = !0;
                        "application/x-shockwave-flash" == g.type ? d.type = "flash" : -1 != g.type.indexOf("video/") ? d.type = "video" : -1 != g.type.indexOf("/html") ? d.type = "iframe" : -1 != g.type.indexOf("image/") && (d.type = "image")
                    } else {
                        if ("undefined" != typeof a.response) {
                            throw a.response
                        }
                    }
                    b.call(this, d.length ? d : !1)
                }
            })
        },
        hashChangeHandler: function(a) {
            var b = this.vars,
                c = this.options;
            a = U(a || p.location.href).hash;
            var d = a.split("/");
            b.hashLock || "#" + c.linkId != d[0] && 1 < a.length || (d[1] ? (b = d[1] || 0, this.items[b] ? (a = g(".ilightbox-overlay"), a.length && a.attr("linkid") == c.linkId ? this.goTo(b) : this.itemsObject[b].trigger(z ? "itap" : "click")) : (a = g(".ilightbox-overlay"), a.length && this.closeAction())) : (a = g(".ilightbox-overlay"), a.length && this.closeAction()))
        }
    };
    g.fn.iLightBox = function() {
        var a = arguments,
            b = g.isPlainObject(a[0]) ? a[0] : a[1],
            c = g.isArray(a[0]) || "string" == typeof a[0] ? a[0] : a[1];
        b || (b = {});
        b = g.extend(!0, {
            attr: "href",
            path: "vertical",
            skin: "dark",
            linkId: !1,
            infinite: !1,
            startFrom: 0,
            randomStart: !1,
            keepAspectRatio: !0,
            maxScale: 1,
            minScale: 0.2,
            innerToolbar: !1,
            smartRecognition: !1,
            mobileOptimizer: !0,
            fullAlone: !0,
            fullViewPort: null,
            fullStretchTypes: "flash, video",
            overlay: {
                blur: !0,
                opacity: 0.85
            },
            controls: {
                arrows: !1,
                slideshow: !1,
                toolbar: !0,
                fullscreen: !0,
                thumbnail: !0,
                keyboard: !0,
                mousewheel: !0,
                swipe: !0
            },
            keyboard: {
                left: !0,
                right: !0,
                up: !0,
                down: !0,
                esc: !0,
                shift_enter: !0
            },
            show: {
                effect: !0,
                speed: 300,
                title: !0
            },
            hide: {
                effect: !0,
                speed: 300
            },
            caption: {
                start: !0,
                show: "mouseenter",
                hide: "mouseleave"
            },
            social: {
                start: !0,
                show: "mouseenter",
                hide: "mouseleave",
                buttons: !1
            },
            styles: {
                pageOffsetX: 0,
                pageOffsetY: 0,
                nextOffsetX: 45,
                nextOffsetY: 0,
                nextOpacity: 1,
                nextScale: 1,
                prevOffsetX: 45,
                prevOffsetY: 0,
                prevOpacity: 1,
                prevScale: 1
            },
            thumbnails: {
                maxWidth: 120,
                maxHeight: 80,
                normalOpacity: 1,
                activeOpacity: 0.6
            },
            effects: {
                reposition: !0,
                repositionSpeed: 200,
                switchSpeed: 500,
                loadedFadeSpeed: 180,
                fadeSpeed: 200
            },
            slideshow: {
                pauseTime: 5000,
                pauseOnHover: !1,
                startPaused: !0
            },
            text: {
                close: "Press Esc to close",
                enterFullscreen: "Enter Fullscreen (Shift+Enter)",
                exitFullscreen: "Exit Fullscreen (Shift+Enter)",
                slideShow: "Slideshow",
                next: "Next",
                previous: "Previous"
            },
            errors: {
                loadImage: "An error occurred when trying to load photo.",
                loadContents: "An error occurred when trying to load contents.",
                missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."
            },
            ajaxSetup: {
                url: "",
                beforeSend: function(a, b) {},
                cache: !1,
                complete: function(a, b) {},
                crossDomain: !1,
                error: function(a, b, c) {},
                success: function(a, b, c) {},
                global: !0,
                ifModified: !1,
                username: null,
                password: null,
                type: "GET"
            },
            callback: {}
        }, b);
        var d = g.isArray(c) || "string" == typeof c ? !0 : !1;
        c = g.isArray(c) ? c : [];
        "string" == typeof a[0] && (c[0] = a[0]);
        if (ka(g.fn.jquery, "1.8", ">=")) {
            var e = new fa(g(this), b, c, d);
            return {
                close: function() {
                    e.closeAction()
                },
                fullscreen: function() {
                    e.fullScreenAction()
                },
                moveNext: function() {
                    e.moveTo("next")
                },
                movePrev: function() {
                    e.moveTo("prev")
                },
                goTo: function(a) {
                    e.goTo(a)
                },
                refresh: function() {
                    e.refresh()
                },
                reposition: function() {
                    0 < arguments.length ? e.repositionPhoto(!0) : e.repositionPhoto()
                },
                setOption: function(a) {
                    e.setOption(a)
                },
                destroy: function() {
                    e.closeAction();
                    e.dispatchItemsEvents()
                }
            }
        }
        throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+"
    };
    g.iLightBox = function(a, b) {
        return g.fn.iLightBox(a, b)
    };
    g.extend(g.easing, {
        easeInCirc: function(a, b, c, d, e) {
            return -d * (P(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * P(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? -d / 2 * (P(1 - b * b) - 1) + c : d / 2 * (P(1 - (b -= 2) * b) + 1) + c
        }
    });
    (function() {
        g.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(a, b) {
            g.fn[b] = function(a) {
                return a ? this.bind(b, a) : this.trigger(b)
            };
            if (g.isFunction(g.fn.attrFn)) {
                g.attrFn && (g.attrFn[b] = !0)
            }
        });
        g.event.special.itap = {
            setup: function() {
                var a = this,
                    b = g(this),
                    c, d;
                b.bind("touchstart.iTap", function(e) {
                    c = L();
                    b.one("touchend.iTap", function(b) {
                        d = L();
                        b = g.event.fix(b || p.event);
                        b.type = "itap";
                        c && d && c.x == d.x && c.y == d.y && (g.event.dispatch || g.event.handle).call(a, b);
                        c = d = Q
                    })
                })
            },
            teardown: function() {
                g(this).unbind("touchstart.iTap")
            }
        }
    })();
    (function() {
        t = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return !1
            },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            prefix: ""
        };
        browserPrefixes = ["webkit", "moz", "o", "ms", "khtml"];
        if ("undefined" != typeof document.cancelFullScreen) {
            t.supportsFullScreen = !0
        } else {
            for (var a = 0, b = browserPrefixes.length; a < b; a++) {
                if (t.prefix = browserPrefixes[a], "undefined" != typeof document[t.prefix + "CancelFullScreen"]) {
                    t.supportsFullScreen = !0;
                    break
                }
            }
        }
        t.supportsFullScreen && (t.fullScreenEventName = t.prefix + "fullscreenchange", t.isFullScreen = function() {
            switch (this.prefix) {
                case "":
                    return document.fullScreen;
                case "webkit":
                    return document.webkitIsFullScreen;
                default:
                    return document[this.prefix + "FullScreen"]
            }
        }, t.requestFullScreen = function(a) {
            return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
        }, t.cancelFullScreen = function(a) {
            return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
        })
    })();
    (function() {
        var a = navigator.userAgent;
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        a = b[1] || "";
        b = b[2] || "0";
        D = {};
        a && (D[a] = !0, D.version = b);
        D.chrome ? D.webkit = !0 : D.webkit && (D.safari = !0)
    })();
    (function() {
        function a(a) {
            for (var d = 0, f = b.length; d < f; d++) {
                var h = b[d] ? b[d] + a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (c.style[h] !== Q) {
                    return h
                }
            }
        }
        var b = ["", "webkit", "moz", "ms", "o"],
            c = document.createElement("div");
        B = a("transform") || "";
        H = a("perspective") ? "translateZ(0) " : ""
    })();
    var ha = {
        version: "0.7.9",
        name: "PluginDetect",
        handler: function(a, b, c) {
            return function() {
                a(b, c)
            }
        },
        openTag: "<",
        isDefined: function(a) {
            return "undefined" != typeof a
        },
        isArray: function(a) {
            return /array/i.test(Object.prototype.toString.call(a))
        },
        isFunc: function(a) {
            return "function" == typeof a
        },
        isString: function(a) {
            return "string" == typeof a
        },
        isNum: function(a) {
            return "number" == typeof a
        },
        isStrNum: function(a) {
            return "string" == typeof a && /\d/.test(a)
        },
        getNumRegx: /[\d][\d\.\_,-]*/,
        splitNumRegx: /[\.\_,-]/g,
        getNum: function(a, b) {
            var c = this.isStrNum(a) ? (this.isDefined(b) ? new RegExp(b) : this.getNumRegx).exec(a) : null;
            return c ? c[0] : null
        },
        compareNums: function(a, b, c) {
            var d = parseInt;
            if (this.isStrNum(a) && this.isStrNum(b)) {
                if (this.isDefined(c) && c.compareNums) {
                    return c.compareNums(a, b)
                }
                a = a.split(this.splitNumRegx);
                b = b.split(this.splitNumRegx);
                for (c = 0; c < Y(a.length, b.length); c++) {
                    if (d(a[c], 10) > d(b[c], 10)) {
                        return 1
                    }
                    if (d(a[c], 10) < d(b[c], 10)) {
                        return -1
                    }
                }
            }
            return 0
        },
        formatNum: function(a, b) {
            var c;
            if (!this.isStrNum(a)) {
                return null
            }
            this.isNum(b) || (b = 4);
            b--;
            var d = a.replace(/\s/g, "").split(this.splitNumRegx).concat(["0", "0", "0", "0"]);
            for (c = 0; 4 > c; c++) {
                if (/^(0+)(.+)$/.test(d[c]) && (d[c] = RegExp.$2), c > b || !/\d/.test(d[c])) {
                    d[c] = "0"
                }
            }
            return d.slice(0, 4).join(",")
        },
        $$hasMimeType: function(a) {
            return function(b) {
                if (!a.isIE && b) {
                    var c, d, e = a.isArray(b) ? b : a.isString(b) ? [b] : [];
                    for (d = 0; d < e.length; d++) {
                        if (a.isString(e[d]) && /[^\s]/.test(e[d]) && (c = (b = navigator.mimeTypes[e[d]]) ? b.enabledPlugin : 0) && (c.name || c.description)) {
                            return b
                        }
                    }
                }
                return null
            }
        },
        findNavPlugin: function(a, b, c) {
            a = new RegExp(a, "i");
            b = !this.isDefined(b) || b ? /\d/ : 0;
            c = c ? new RegExp(c, "i") : 0;
            var d = navigator.plugins,
                e;
            for (e = 0; e < d.length; e++) {
                var f = d[e].description || "";
                var h = d[e].name || "";
                if (a.test(f) && (!b || b.test(RegExp.leftContext + RegExp.rightContext)) || a.test(h) && (!b || b.test(RegExp.leftContext + RegExp.rightContext))) {
                    if (!c || !c.test(f) && !c.test(h)) {
                        return d[e]
                    }
                }
            }
            return null
        },
        getMimeEnabledPlugin: function(a, b, c) {
            var d;
            b = new RegExp(b, "i");
            c = c ? new RegExp(c, "i") : 0;
            var e, f = this.isString(a) ? [a] : a;
            for (e = 0; e < f.length; e++) {
                if ((d = this.hasMimeType(f[e])) && (d = d.enabledPlugin)) {
                    var h = d.description || "";
                    a = d.name || "";
                    if (b.test(h) || b.test(a)) {
                        if (!c || !c.test(h) && !c.test(a)) {
                            return d
                        }
                    }
                }
            }
            return 0
        },
        getPluginFileVersion: function(a, b) {
            var c, d, e = -1;
            if (2 < this.OS || !a || !a.version || !(c = this.getNum(a.version))) {
                return b
            }
            if (!b) {
                return c
            }
            c = this.formatNum(c);
            b = this.formatNum(b);
            var f = b.split(this.splitNumRegx);
            var h = c.split(this.splitNumRegx);
            for (d = 0; d < f.length; d++) {
                if (-1 < e && d > e && "0" != f[d] || h[d] != f[d] && (-1 == e && (e = d), "0" != f[d])) {
                    return b
                }
            }
            return c
        },
        AXO: p.ActiveXObject,
        getAXO: function(a) {
            var b = null;
            try {
                b = new this.AXO(a)
            } catch (c) {}
            return b
        },
        convertFuncs: function(a) {
            var b, c = /^[\$][\$]/;
            for (b in a) {
                if (c.test(b)) {
                    try {
                        var d = b.slice(2);
                        0 < d.length && !a[d] && (a[d] = a[b](a), delete a[b])
                    } catch (e) {}
                }
            }
        },
        initObj: function(a, b, c) {
            var d;
            if (a) {
                if (1 == a[b[0]] || c) {
                    for (d = 0; d < b.length; d += 2) {
                        a[b[d]] = b[d + 1]
                    }
                }
                for (d in a) {
                    (c = a[d]) && 1 == c[b[0]] && this.initObj(c, b)
                }
            }
        },
        initScript: function() {
            var a = navigator,
                b, c = document,
                d = a.userAgent || "",
                e = a.vendor || "",
                f = a.platform || "";
            a = a.product || "";
            this.initObj(this, ["$", this]);
            for (b in this.Plugins) {
                this.Plugins[b] && this.initObj(this.Plugins[b], ["$", this, "$$", this.Plugins[b]], 1)
            }
            this.convertFuncs(this);
            this.OS = 100;
            if (f) {
                var h = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                for (b = h.length - 2; 0 <= b; b -= 2) {
                    if (h[b] && (new RegExp(h[b], "i")).test(f)) {
                        this.OS = h[b + 1];
                        break
                    }
                }
            }
            this.head = c.getElementsByTagName("head")[0] || c.getElementsByTagName("body")[0] || c.body || null;
            this.verIE = (this.isIE = (new Function("return/*@cc_on!@*/!1"))()) && /MSIE\s*(\d+\.?\d*)/i.test(d) ? parseFloat(RegExp.$1, 10) : null;
            this.docModeIE = this.verIEfull = null;
            if (this.isIE) {
                b = document.createElement("div");
                try {
                    b.style.behavior = "url(#default#clientcaps)", this.verIEfull = b.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid").replace(/,/g, ".")
                } catch (l) {}
                b = parseFloat(this.verIEfull || "0", 10);
                this.docModeIE = c.documentMode || (/back/i.test(c.compatMode || "") ? 5 : b) || this.verIE;
                this.verIE = b || this.docModeIE
            }
            this.ActiveXEnabled = !1;
            if (this.isIE) {
                for (c = "Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM ShockwaveFlash.ShockwaveFlash TDCCtl.TDCCtl Shell.UIHelper Scripting.Dictionary wmplayer.ocx".split(" "), b = 0; b < c.length; b++) {
                    if (this.getAXO(c[b])) {
                        this.ActiveXEnabled = !0;
                        break
                    }
                }
            }
            this.verGecko = (this.isGecko = /Gecko/i.test(a) && /Gecko\s*\/\s*\d/i.test(d)) ? this.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(d) ? RegExp.$1 : "0.9") : null;
            this.verChrome = (this.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(d)) ? this.formatNum(RegExp.$1) : null;
            this.verSafari = (this.isSafari = (/Apple/i.test(e) || !e && !this.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(d)) && /Version\s*\/\s*(\d[\d\.]*)/i.test(d) ? this.formatNum(RegExp.$1) : null;
            this.verOpera = (this.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(d)) && (/Version\s*\/\s*(\d+\.?\d*)/i.test(d), 1) ? parseFloat(RegExp.$1, 10) : null;
            this.addWinEvent("load", this.handler(this.runWLfuncs, this))
        },
        init: function(a) {
            var b = {
                status: -3,
                plugin: 0
            };
            if (!this.isString(a)) {
                return b
            }
            if (1 == a.length) {
                return this.getVersionDelimiter = a, b
            }
            a = a.toLowerCase().replace(/\s/g, "");
            var c = this.Plugins[a];
            if (!c || !c.getVersion) {
                return b
            }
            b.plugin = c;
            this.isDefined(c.installed) || (c.installed = null, c.version = null, c.version0 = null, c.getVersionDone = null, c.pluginName = a);
            this.garbage = !1;
            if (this.isIE && !this.ActiveXEnabled && "java" !== a) {
                return b.status = -2, b
            }
            b.status = 1;
            return b
        },
        fPush: function(a, b) {
            this.isArray(b) && (this.isFunc(a) || this.isArray(a) && 0 < a.length && this.isFunc(a[0])) && b.push(a)
        },
        callArray: function(a) {
            var b;
            if (this.isArray(a)) {
                for (b = 0; b < a.length && null !== a[b]; b++) {
                    this.call(a[b]), a[b] = null
                }
            }
        },
        call: function(a) {
            var b = this.isArray(a) ? a.length : -1;
            if (0 < b && this.isFunc(a[0])) {
                a[0](this, 1 < b ? a[1] : 0, 2 < b ? a[2] : 0, 3 < b ? a[3] : 0)
            } else {
                this.isFunc(a) && a(this)
            }
        },
        getVersionDelimiter: ",",
        $$getVersion: function(a) {
            return function(b, c, d) {
                b = a.init(b);
                if (0 > b.status) {
                    return null
                }
                b = b.plugin;
                1 != b.getVersionDone && (b.getVersion(null, c, d), null === b.getVersionDone && (b.getVersionDone = 1));
                a.cleanup();
                return c = (c = b.version || b.version0) ? c.replace(a.splitNumRegx, a.getVersionDelimiter) : c
            }
        },
        cleanup: function() {
            this.garbage && this.isDefined(p.CollectGarbage) && p.CollectGarbage()
        },
        isActiveXObject: function(a, b) {
            var c = !1,
                d = '<object width="1" height="1" style="display:none" ' + a.getCodeBaseVersion(b) + ">" + a.HTML + this.openTag + "/object>";
            if (!this.head) {
                return c
            }
            this.head.insertBefore(document.createElement("object"), this.head.firstChild);
            this.head.firstChild.outerHTML = d;
            try {
                this.head.firstChild.classid = a.classID
            } catch (e) {}
            try {
                this.head.firstChild.object && (c = !0)
            } catch (e) {}
            try {
                c && 4 > this.head.firstChild.readyState && (this.garbage = !0)
            } catch (e) {}
            this.head.removeChild(this.head.firstChild);
            return c
        },
        codebaseSearch: function(a, b) {
            var c = this;
            if (!c.ActiveXEnabled || !a) {
                return null
            }
            a.BIfuncs && a.BIfuncs.length && null !== a.BIfuncs[a.BIfuncs.length - 1] && c.callArray(a.BIfuncs);
            var d, e = a.SEARCH;
            if (c.isStrNum(b)) {
                if (e.match && e.min && 0 >= c.compareNums(b, e.min)) {
                    return !0
                }
                if (e.match && e.max && 0 <= c.compareNums(b, e.max)) {
                    return !1
                }(d = c.isActiveXObject(a, b)) && (!e.min || 0 < c.compareNums(b, e.min)) && (e.min = b);
                d || e.max && !(0 > c.compareNums(b, e.max)) || (e.max = b);
                return d
            }
            var f = [0, 0, 0, 0],
                h = [].concat(e.digits),
                g = e.min ? 1 : 0,
                k, n = function(b, d) {
                    var e = [].concat(f);
                    e[b] = d;
                    return c.isActiveXObject(a, e.join(","))
                };
            if (e.max) {
                d = e.max.split(c.splitNumRegx);
                for (k = 0; k < d.length; k++) {
                    d[k] = parseInt(d[k], 10)
                }
                d[0] < h[0] && (h[0] = d[0])
            }
            if (e.min) {
                var m = e.min.split(c.splitNumRegx);
                for (k = 0; k < m.length; k++) {
                    m[k] = parseInt(m[k], 10)
                }
                m[0] > f[0] && (f[0] = m[0])
            }
            if (m && d) {
                for (k = 1; k < m.length && m[k - 1] == d[k - 1]; k++) {
                    d[k] < h[k] && (h[k] = d[k]), m[k] > f[k] && (f[k] = m[k])
                }
            }
            if (e.max) {
                for (k = 1; k < h.length; k++) {
                    if (0 < d[k] && 0 == h[k] && h[k - 1] < e.digits[k - 1]) {
                        h[k - 1] += 1;
                        break
                    }
                }
            }
            for (k = 0; k < h.length; k++) {
                m = {};
                for (e = 0; 20 > e && !(1 > h[k] - f[k]); e++) {
                    d = X((h[k] + f[k]) / 2);
                    if (m["a" + d]) {
                        break
                    }
                    m["a" + d] = 1;
                    n(k, d) ? (f[k] = d, g = 1) : h[k] = d
                }
                h[k] = f[k];
                !g && n(k, f[k]) && (g = 1);
                if (!g) {
                    break
                }
            }
            return g ? f.join(",") : null
        },
        addWinEvent: function(a, b) {
            if (this.isFunc(b)) {
                if (p.addEventListener) {
                    p.addEventListener(a, b, !1)
                } else {
                    if (p.attachEvent) {
                        p.attachEvent("on" + a, b)
                    } else {
                        var c = p["on" + a];
                        p["on" + a] = this.winHandler(b, c)
                    }
                }
            }
        },
        winHandler: function(a, b) {
            return function() {
                a();
                "function" == typeof b && b()
            }
        },
        WLfuncs0: [],
        WLfuncs: [],
        runWLfuncs: function(a) {
            a.winLoaded = !0;
            a.callArray(a.WLfuncs0);
            a.callArray(a.WLfuncs);
            if (a.onDoneEmptyDiv) {
                a.onDoneEmptyDiv()
            }
        },
        winLoaded: !1,
        $$onWindowLoaded: function(a) {
            return function(b) {
                a.winLoaded ? a.call(b) : a.fPush(b, a.WLfuncs)
            }
        },
        div: null,
        divID: "plugindetect",
        divWidth: 50,
        pluginSize: 1,
        emptyDiv: function() {
            var a, b, c;
            if (this.div && this.div.childNodes) {
                for (a = this.div.childNodes.length - 1; 0 <= a; a--) {
                    if ((c = this.div.childNodes[a]) && c.childNodes) {
                        for (b = c.childNodes.length - 1; 0 <= b; b--) {
                            var d = c.childNodes[b];
                            try {
                                c.removeChild(d)
                            } catch (e) {}
                        }
                    }
                    if (c) {
                        try {
                            this.div.removeChild(c)
                        } catch (e) {}
                    }
                }
            }!this.div && (a = document.getElementById(this.divID)) && (this.div = a);
            if (this.div && this.div.parentNode) {
                try {
                    this.div.parentNode.removeChild(this.div)
                } catch (e) {}
                this.div = null
            }
        },
        DONEfuncs: [],
        onDoneEmptyDiv: function() {
            var a, b;
            if (this.winLoaded && (!this.WLfuncs || !this.WLfuncs.length || null === this.WLfuncs[this.WLfuncs.length - 1])) {
                for (a in this) {
                    if ((b = this[a]) && b.funcs && (3 == b.OTF || b.funcs.length && null !== b.funcs[b.funcs.length - 1])) {
                        return
                    }
                }
                for (a = 0; a < this.DONEfuncs.length; a++) {
                    this.callArray(this.DONEfuncs)
                }
                this.emptyDiv()
            }
        },
        getWidth: function(a) {
            return a && (a = a.scrollWidth || a.offsetWidth, this.isNum(a)) ? a : -1
        },
        getTagStatus: function(a, b, c, d) {
            var e = a.span,
                f = this.getWidth(e);
            c = c.span;
            var g = this.getWidth(c);
            b = b.span;
            var l = this.getWidth(b);
            if (!(e && c && b && this.getDOMobj(a))) {
                return -2
            }
            if (g < l || 0 > f || 0 > g || 0 > l || l <= this.pluginSize || 1 > this.pluginSize) {
                return 0
            }
            if (f >= l) {
                return -1
            }
            try {
                if (f == this.pluginSize && (!this.isIE || 4 == this.getDOMobj(a).readyState) && (!a.winLoaded && this.winLoaded || a.winLoaded && this.isNum(d) && (this.isNum(a.count) || (a.count = d), 10 <= d - a.count))) {
                    return 1
                }
            } catch (k) {}
            return 0
        },
        getDOMobj: function(a, b) {
            var c = a ? a.span : 0,
                d = c && c.firstChild ? 1 : 0;
            try {
                d && b && this.div.focus()
            } catch (e) {}
            return d ? c.firstChild : null
        },
        setStyle: function(a, b) {
            var c = a.style,
                d;
            if (c && b) {
                for (d = 0; d < b.length; d += 2) {
                    try {
                        c[b[d]] = b[d + 1]
                    } catch (e) {}
                }
            }
        },
        insertDivInBody: function(a, b) {
            var c = null,
                d = b ? p.top.document : p.document,
                e = d.getElementsByTagName("body")[0] || d.body;
            if (!e) {
                try {
                    d.write('<div id="pd33993399">.' + this.openTag + "/div>"), c = d.getElementById("pd33993399")
                } catch (f) {}
            }
            if (e = d.getElementsByTagName("body")[0] || d.body) {
                e.insertBefore(a, e.firstChild), c && e.removeChild(c)
            }
        },
        insertHTML: function(a, b, c, d, e) {
            e = document;
            var f = e.createElement("span"),
                g, l = "outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ");
            this.isDefined(d) || (d = "");
            if (this.isString(a) && /[^\s]/.test(a)) {
                a = a.toLowerCase().replace(/\s/g, "");
                var k = this.openTag + a + ' width="' + this.pluginSize + '" height="' + this.pluginSize + '" ';
                k += 'style="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;display:inline;" ';
                for (g = 0; g < b.length; g += 2) {
                    /[^\s]/.test(b[g + 1]) && (k += b[g] + '="' + b[g + 1] + '" ')
                }
                k += ">";
                for (g = 0; g < c.length; g += 2) {
                    /[^\s]/.test(c[g + 1]) && (k += this.openTag + 'param name="' + c[g] + '" value="' + c[g + 1] + '" />')
                }
                k += d + this.openTag + "/" + a + ">"
            } else {
                k = d
            }
            this.div || ((b = e.getElementById(this.divID)) ? this.div = b : (this.div = e.createElement("div"), this.div.id = this.divID), this.setStyle(this.div, l.concat(["width", this.divWidth + "px", "height", this.pluginSize + 3 + "px", "fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "block"])), b || (this.setStyle(this.div, "position absolute right 0px top 0px".split(" ")), this.insertDivInBody(this.div)));
            if (this.div && this.div.parentNode) {
                this.setStyle(f, l.concat(["fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
                try {
                    f.innerHTML = k
                } catch (n) {}
                try {
                    this.div.appendChild(f)
                } catch (n) {}
                return {
                    span: f,
                    winLoaded: this.winLoaded,
                    tagName: a,
                    outerHTML: k
                }
            }
            return {
                span: null,
                winLoaded: this.winLoaded,
                tagName: "",
                outerHTML: k
            }
        },
        Plugins: {
            quicktime: {
                mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
                progID: "QuickTimeCheckObject.QuickTimeCheck.1",
                progID0: "QuickTime.QuickTime",
                classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                minIEver: 7,
                HTML: '<param name="src" value="" /><param name="controller" value="false" />',
                getCodeBaseVersion: function(a) {
                    return 'codebase="#version=' + a + '"'
                },
                SEARCH: {
                    min: 0,
                    max: 0,
                    match: 0,
                    digits: [16, 128, 128, 0]
                },
                getVersion: function(a) {
                    var b = this.$,
                        c = null,
                        d = null;
                    if (b.isIE) {
                        b.isStrNum(a) && (a = a.split(b.splitNumRegx), 3 < a.length && 0 < parseInt(a[3], 10) && (a[3] = "9999"), a = a.join(","));
                        if (b.isStrNum(a) && b.verIE >= this.minIEver && 0 < this.canUseIsMin()) {
                            this.installed = this.isMin(a);
                            this.getVersionDone = 0;
                            return
                        }
                        this.getVersionDone = 1;
                        !c && b.verIE >= this.minIEver && (c = this.CDBASE2VER(b.codebaseSearch(this)));
                        c || (d = b.getAXO(this.progID)) && d.QuickTimeVersion && (c = d.QuickTimeVersion.toString(16), c = parseInt(c.charAt(0), 16) + "." + parseInt(c.charAt(1), 16) + "." + parseInt(c.charAt(2), 16))
                    } else {
                        b.hasMimeType(this.mimeType) && (d = 3 != b.OS ? b.findNavPlugin("QuickTime.*Plug-?in", 0) : null) && d.name && (c = b.getNum(d.name))
                    }
                    this.installed = c ? 1 : d ? 0 : -1;
                    this.version = b.formatNum(c, 3)
                },
                cdbaseUpper: ["7,60,0,0", "0,0,0,0"],
                cdbaseLower: ["7,50,0,0", null],
                cdbase2ver: [function(a, b) {
                    var c = b.split(a.$.splitNumRegx);
                    return [c[0], c[1].charAt(0), c[1].charAt(1), c[2]].join()
                }, null],
                CDBASE2VER: function(a) {
                    var b = this.$,
                        c, d = this.cdbaseUpper,
                        e = this.cdbaseLower;
                    if (a) {
                        for (a = b.formatNum(a), c = 0; c < d.length; c++) {
                            if (d[c] && 0 > b.compareNums(a, d[c]) && e[c] && 0 <= b.compareNums(a, e[c]) && this.cdbase2ver[c]) {
                                return this.cdbase2ver[c](this, a)
                            }
                        }
                    }
                    return a
                },
                canUseIsMin: function() {
                    var a = this.$,
                        b, c = this.canUseIsMin,
                        d = this.cdbaseUpper,
                        e = this.cdbaseLower;
                    if (!c.value) {
                        for (c.value = -1, b = 0; b < d.length; b++) {
                            if (d[b] && a.codebaseSearch(this, d[b])) {
                                c.value = 1;
                                break
                            }
                            if (e[b] && a.codebaseSearch(this, e[b])) {
                                c.value = -1;
                                break
                            }
                        }
                    }
                    this.SEARCH.match = 1 == c.value ? 1 : 0;
                    return c.value
                },
                isMin: function(a) {
                    return this.$.codebaseSearch(this, a) ? 0.7 : -1
                }
            },
            flash: {
                mimeType: "application/x-shockwave-flash",
                progID: "ShockwaveFlash.ShockwaveFlash",
                classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                getVersion: function() {
                    var a = function(a) {
                            return a ? (a = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a)) ? a[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null : null
                        },
                        b = this.$,
                        c, d = null,
                        e = null,
                        f = null;
                    if (b.isIE) {
                        for (c = 15; 2 < c; c--) {
                            if (e = b.getAXO(this.progID + "." + c)) {
                                f = c.toString();
                                break
                            }
                        }
                        e || (e = b.getAXO(this.progID));
                        if ("6" == f) {
                            try {
                                e.AllowScriptAccess = "always"
                            } catch (h) {
                                return "6,0,21,0"
                            }
                        }
                        try {
                            d = a(e.GetVariable("$version"))
                        } catch (h) {}!d && f && (d = f)
                    } else {
                        if (e = b.hasMimeType(this.mimeType)) {
                            c = b.getDOMobj(b.insertHTML("object", ["type", this.mimeType], [], "", this));
                            try {
                                d = b.getNum(c.GetVariable("$version"))
                            } catch (h) {}
                        }
                        d || ((c = e ? e.enabledPlugin : null) && c.description && (d = a(c.description)), d && (d = b.getPluginFileVersion(c, d)))
                    }
                    this.installed = d ? 1 : -1;
                    this.version = b.formatNum(d);
                    return !0
                }
            },
            shockwave: {
                mimeType: "application/x-director",
                progID: "SWCtl.SWCtl",
                classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                getVersion: function() {
                    var a = null,
                        b = null,
                        c = this.$;
                    if (c.isIE) {
                        try {
                            b = c.getAXO(this.progID).ShockwaveVersion("")
                        } catch (d) {}
                        c.isString(b) && 0 < b.length ? a = c.getNum(b) : c.getAXO(this.progID + ".8") ? a = "8" : c.getAXO(this.progID + ".7") ? a = "7" : c.getAXO(this.progID + ".1") && (a = "6")
                    } else {
                        (b = c.findNavPlugin("Shockwave\\s*for\\s*Director")) && b.description && c.hasMimeType(this.mimeType) && (a = c.getNum(b.description)), a && (a = c.getPluginFileVersion(b, a))
                    }
                    this.installed = a ? 1 : -1;
                    this.version = c.formatNum(a)
                }
            },
            zz: 0
        }
    };
    ha.initScript();
    var na = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',
        r = null;
    (function() {
        function a(a) {
            a = a || location.href;
            return "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var b = document,
            c = g.event.special,
            d = b.documentMode,
            e = "oniLightBoxHashChange" in p && (void 0 === d || 7 < d);
        g.fn.iLightBoxHashChange = function(a) {
            return a ? this.bind("iLightBoxHashChange", a) : this.trigger("iLightBoxHashChange")
        };
        g.fn.iLightBoxHashChange.delay = 50;
        c.iLightBoxHashChange = g.extend(c.iLightBoxHashChange, {
            setup: function() {
                if (e) {
                    return !1
                }
                g(f.start)
            },
            teardown: function() {
                if (e) {
                    return !1
                }
                g(f.stop)
            }
        });
        var f = function() {
            function c() {
                var b = a(),
                    d = t(n);
                b !== n ? (r(n = b, d), g(p).trigger("iLightBoxHashChange")) : d !== n && (location.href = location.href.replace(/#.*/, "") + d);
                f = setTimeout(c, g.fn.iLightBoxHashChange.delay)
            }
            var d = {},
                f, n = a(),
                m = function(a) {
                    return a
                },
                r = m,
                t = m;
            d.start = function() {
                f || c()
            };
            d.stop = function() {
                f && clearTimeout(f);
                f = void 0
            };
            D.msie && !e && function() {
                var e, f;
                d.start = function() {
                    e || (f = (f = g.fn.iLightBoxHashChange.src) && f + a(), e = g('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        f || r(a());
                        c()
                    }).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, b.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (e.document.title = b.title)
                        } catch (v) {}
                    })
                };
                d.stop = m;
                t = function() {
                    return a(e.location.href)
                };
                r = function(a, c) {
                    var d = e.document,
                        f = g.fn.iLightBoxHashChange.domain;
                    a !== c && (d.title = b.title, d.open(), f && d.write('<script>document.domain="' + f + '"\x3c/script>'), d.close(), e.location.hash = a)
                }
            }();
            return d
        }()
    })();
    Array.prototype.filter || (Array.prototype.filter = function(a, b) {
        if (null == this) {
            throw new TypeError
        }
        var c = Object(this),
            d = c.length >>> 0;
        if ("function" != typeof a) {
            throw new TypeError
        }
        for (var e = [], f = 0; f < d; f++) {
            if (f in c) {
                var g = c[f];
                a.call(b, g, f, c) && e.push(g)
            }
        }
        return e
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        if (null == this) {
            throw new TypeError('"this" is null or not defined')
        }
        var c = Object(this),
            d = c.length >>> 0;
        if (0 === d) {
            return -1
        }
        var e = +b || 0;
        Infinity === I(e) && (e = 0);
        if (e >= d) {
            return -1
        }
        for (e = ca(0 <= e ? e : d - I(e), 0); e < d;) {
            if (e in c && c[e] === a) {
                return e
            }
            e++
        }
        return -1
    });
    Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(a) {
        if (null == this) {
            throw new TypeError
        }
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) {
            return -1
        }
        var d = c;
        1 < arguments.length && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (0 < d || -1) * M(I(d))));
        for (c = 0 <= d ? Y(d, c - 1) : c - I(d); 0 <= c; c--) {
            if (c in b && b[c] === a) {
                return c
            }
        }
        return -1
    })
})(jQuery, this);