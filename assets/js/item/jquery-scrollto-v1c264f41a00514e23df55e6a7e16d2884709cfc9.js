/*!/wp-content/themes/vivagh/framework/js/jquery.scrollto.js*/
jQuery.noConflict();
(function($) {
    var h = $.scrollTo = function(a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {
        axis: 'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    };
    h.window = function(a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function() {
        return this.map(function() {
            var a = this,
                isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function(e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function') g = {
            onAfter: g
        };
        if (e == 'max') e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue) f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function() {
            if (!e) return;
            var d = this,
                $elem = $(d),
                targ = e,
                toff, attr = {},
                win = $elem.is('html,body');
            switch (typeof targ) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length) return;
                case 'object':
                    if (targ.is || targ.style) toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function(i, a) {
                var b = a == 'x' ? 'Left' : 'Top',
                    pos = b.toLowerCase(),
                    key = 'scroll' + b,
                    old = d[key],
                    max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key]) animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);

            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function() {
                    a.call(this, e, g)
                })
            }
        }).end()
    };
    h.max = function(a, b) {
        var c = b == 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + c;
        if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c,
            html = a.ownerDocument.documentElement,
            body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };

    function both(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
jQuery.noConflict();
! function(a, b, c, d) {
    var e = function(d, e) {
        this.elem = d, this.$elem = a(d), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = a(b), this.sections = {}, this.didScroll = !1, this.$doc = a(c), this.docHeight = this.$doc.height()
    };
    e.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function() {
            return this.config = a.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", a.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", a.proxy(this.getPositions, this)), this
        },
        adjustNav: function(a, b) {
            a.$elem.find("." + a.config.currentClass).removeClass(a.config.currentClass), b.addClass(a.config.currentClass)
        },
        bindInterval: function() {
            var b, a = this;
            a.$win.on("scroll.onePageNav", function() {
                a.didScroll = !0
            }), a.t = setInterval(function() {
                b = a.$doc.height(), a.didScroll && (a.didScroll = !1, a.scrollChange()), b !== a.docHeight && (a.docHeight = b, a.getPositions())
            }, 250)
        },
        getHash: function(a) {
            return a.attr("href").split("#")[1]
        },
        getPositions: function() {
            var c, d, e, b = this;
            b.$nav.each(function() {
                c = b.getHash(a(this)), e = a("#" + c), e.length && (d = parseInt(e.offset().top, 10) + 200, b.sections[c] = Math.round(d))
            })
        },
        getSection: function(a) {
            var b = null,
                c = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var d in this.sections) this.sections[d] - c < a && (b = d);
            return b
        },
        handleClick: function(c) {
            var d = this,
                e = a(c.currentTarget),
                f = e.parent(),
                g = "#" + d.getHash(e);
            f.hasClass(d.config.currentClass) || (d.config.begin && d.config.begin(), d.adjustNav(d, f), d.unbindInterval(), d.scrollTo(g, function() {
                d.config.changeHash && (b.location.hash = g), d.bindInterval(), d.config.end && d.config.end()
            })), c.preventDefault()
        },
        scrollChange: function() {
            var c, a = this.$win.scrollTop(),
                b = this.getSection(a);
            null !== b && (c = this.$elem.find('a[href$="#' + b + '"]').parent(), c.hasClass(this.config.currentClass) || (this.adjustNav(this, c), this.config.scrollChange && this.config.scrollChange(c)))
        },
        scrollTo: function(b, c) {
            var d = a(b).offset().top;
            a("html, body").animate({
                scrollTop: d
            }, this.config.scrollSpeed, this.config.easing, c)
        },
        unbindInterval: function() {
            clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
        }
    }, e.defaults = e.prototype.defaults, a.fn.onePageNav = function(a) {
        return this.each(function() {
            new e(this, a).init()
        })
    }
}(jQuery, window, document);