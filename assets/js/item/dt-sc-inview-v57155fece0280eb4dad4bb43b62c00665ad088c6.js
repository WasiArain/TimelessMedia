/*!/wp-content/plugins/designthemes-core-features/shortcodes/js/jquery.inview.js*/
(function(factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'))
    } else {
        factory(jQuery)
    }
}(function($) {
    var inviewObjects = [],
        viewportSize, viewportOffset, d = document,
        w = window,
        documentElement = d.documentElement,
        timer;
    $.event.special.inview = {
        add: function(data) {
            inviewObjects.push({
                data: data,
                $element: $(this),
                element: this
            });
            if (!timer && inviewObjects.length) {
                timer = setInterval(checkInView, 250)
            }
        },
        remove: function(data) {
            for (var i = 0; i < inviewObjects.length; i++) {
                var inviewObject = inviewObjects[i];
                if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
                    inviewObjects.splice(i, 1);
                    break
                }
            }
            if (!inviewObjects.length) {
                clearInterval(timer);
                timer = null
            }
        }
    };

    function getViewportSize() {
        var mode, domObject, size = {
            height: w.innerHeight,
            width: w.innerWidth
        };
        if (!size.height) {
            mode = d.compatMode;
            if (mode || !$.support.boxModel) {
                domObject = mode === 'CSS1Compat' ? documentElement : d.body;
                size = {
                    height: domObject.clientHeight,
                    width: domObject.clientWidth
                }
            }
        }
        return size
    }

    function getViewportOffset() {
        return {
            top: w.pageYOffset || documentElement.scrollTop || d.body.scrollTop,
            left: w.pageXOffset || documentElement.scrollLeft || d.body.scrollLeft
        }
    }

    function checkInView() {
        if (!inviewObjects.length) {
            return
        }
        var i = 0,
            $elements = $.map(inviewObjects, function(inviewObject) {
                var selector = inviewObject.data.selector,
                    $element = inviewObject.$element;
                return selector ? $element.find(selector) : $element
            });
        viewportSize = viewportSize || getViewportSize();
        viewportOffset = viewportOffset || getViewportOffset();
        for (; i < inviewObjects.length; i++) {
            if (!$.contains(documentElement, $elements[i][0])) {
                continue
            }
            var $element = $($elements[i]),
                elementSize = {
                    height: $element[0].offsetHeight,
                    width: $element[0].offsetWidth
                },
                elementOffset = $element.offset(),
                inView = $element.data('inview');
            if (!viewportOffset || !viewportSize) {
                return
            }
            if (elementOffset.top + elementSize.height > viewportOffset.top && elementOffset.top < viewportOffset.top + viewportSize.height && elementOffset.left + elementSize.width > viewportOffset.left && elementOffset.left < viewportOffset.left + viewportSize.width) {
                if (!inView) {
                    $element.data('inview', !0).trigger('inview', [!0])
                }
            } else if (inView) {
                $element.data('inview', !1).trigger('inview', [!1])
            }
        }
    }
    $(w).on("scroll resize scrollstop", function() {
        viewportSize = viewportOffset = null
    });
    if (!documentElement.addEventListener && documentElement.attachEvent) {
        documentElement.attachEvent("onfocusin", function() {
            viewportOffset = null
        })
    }
}));