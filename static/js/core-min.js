if (function($) {
        var t = new Array,
            e = new Array,
            i = function() {},
            n = 0,
            o = {
                splashVPos: "35%",
                loaderVPos: "75%",
                splashID: "#jpreContent",
                showSplash: !0,
                showPercentage: !0,
                autoClose: !0,
                closeBtnText: "Start!",
                onetimeLoad: !1,
                debugMode: !1,
                splashFunction: function() {}
            },
            r = function() {
                if (o.onetimeLoad) {
                    for (var t = document.cookie.split("; "), e = 0, i; i = t[e] && t[e].split("="); e++)
                        if ("jpreLoader" === i.shift()) return i.join("=");
                    return !1
                }
                return !1
            },
            a = function(t) {
                if (o.onetimeLoad) {
                    var e = new Date;
                    e.setDate(e.getDate() + t);
                    var i = null == t ? "" : "expires=" + e.toUTCString();
                    document.cookie = "jpreLoader=loaded; " + i
                }
            },
            s = function() {
                if (jOverlay = $("<div></div>").attr("id", "jpreOverlay").css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 9999999
                    }).appendTo("body"), o.showSplash) {
                    jContent = $("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                    var t = $(window).width() - $(jContent).width();
                    $(jContent).css({
                        position: "absolute",
                        top: o.splashVPos,
                        left: Math.round(50 / $(window).width() * t) + "%"
                    }), $(jContent).html($(o.splashID).wrap("<div/>").parent().html()), $(o.splashID).remove(), o.splashFunction()
                }
                jLoader = $("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
                var e = $(window).width() - $(jLoader).width();
                $(jLoader).css({
                    position: "absolute",
                    top: o.loaderVPos,
                    left: Math.round(50 / $(window).width() * e) + "%"
                }), jBar = $("<div></div>").attr("id", "jpreBar").css({
                    width: "0%",
                    height: "100%"
                }).appendTo(jLoader), o.showPercentage && (jPer = $("<div></div>").attr("id", "jprePercentage").css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).html("0%")), o.autoclose || (jButton = $("<div></div>").attr("id", "jpreButton").on("click", function() {
                    h()
                }).css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).text(o.closeBtnText).hide())
            },
            l = function(e) {
                $(e).find("*:not(script)").each(function() {
                    var e = "";
                    if ($(this).css("background-image").indexOf("none") == -1 && $(this).css("background-image").indexOf("-gradient") == -1 && $(this).css("background-image").indexOf("svg") == -1) {
                        if (e = $(this).css("background-image"), e.indexOf("url") != -1) {
                            var i = e.match(/url\((.*?)\)/);
                            e = i[1].replace(/\"/g, "")
                        }
                    } else "img" == $(this).get(0).nodeName.toLowerCase() && void 0 !== $(this).attr("src") && (e = $(this).attr("src"));
                    e.length > 0 && t.push(e)
                })
            },
            d = function() {
                for (var e = 0; e < t.length; e++) c(t[e])
            },
            c = function(t) {
                $(new Image).load(function() {
                    u()
                }).error(function() {
                    e.push($(this).attr("src")), u()
                }).attr("src", t)
            },
            u = function() {
                n++;
                var e = Math.round(n / t.length * 100);
                if ($(jBar).stop().animate({
                        width: e + "%"
                    }, 500, "linear"), o.showPercentage && $(jPer).text(e + "%"), n >= t.length) {
                    if (n = t.length, a(), o.showPercentage && $(jPer).text("100%"), o.debugMode) var i = p();
                    $(jBar).stop().animate({
                        width: "100%"
                    }, 500, "linear", function() {
                        o.autoClose ? h() : $(jButton).fadeIn(1e3)
                    })
                }
            },
            h = function() {
                $(jOverlay).fadeOut(800, function() {
                    $(jOverlay).remove(), i()
                })
            },
            p = function() {
                if (e.length > 0) {
                    var t = "ERROR - IMAGE FILES MISSING!!!\n\r";
                    t += e.length + " image files cound not be found. \n\r", t += "Please check your image paths and filenames:\n\r";
                    for (var i = 0; i < e.length; i++) t += "- " + e[i] + "\n\r";
                    return !0
                }
                return !1
            };
        $.fn.jpreLoader = function(t, e) {
            return t && $.extend(o, t), "function" == typeof e && (i = e), $("body").css({
                display: "block"
            }), this.each(function() {
                r() ? ($(o.splashID).remove(), i()) : (s(), l(this), d())
            })
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function($) {
    "use strict";
    var t = $.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function($) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    $.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        $(this).one("bsTransitionEnd", function() {
            e = !0
        });
        var n = function() {
            e || $(i).trigger($.support.transition.end)
        };
        return setTimeout(n, t), this
    }, $(function() {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(t) {
                if ($(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("bs.alert");
            n || e.data("bs.alert", n = new i(this)), "string" == typeof t && n[t].call(e)
        })
    }
    var e = '[data-dismiss="alert"]',
        i = function(t) {
            $(t).on("click", e, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var n = $(this),
            o = n.attr("data-target");
        o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = $("#" === o ? [] : o);
        t && t.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(t = $.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), $.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(i.TRANSITION_DURATION) : e())
    };
    var n = $.fn.alert;
    $.fn.alert = t, $.fn.alert.Constructor = i, $.fn.alert.noConflict = function() {
        return $.fn.alert = n, this
    }, $(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.button"),
                o = "object" == typeof t && t;
            n || i.data("bs.button", n = new e(this, o)), "toggle" == t ? n.toggle() : t && n.setState(t)
        })
    }
    var e = function(t, i) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.isLoading = !1
    };
    e.VERSION = "3.3.7", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[n]()), setTimeout($.proxy(function() {
            i[n](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = $.fn.button;
    $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function() {
        return $.fn.button = i, this
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = $(e.target).closest(".btn");
        t.call(i, "toggle"), $(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        $(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.carousel"),
                o = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t),
                r = "string" == typeof t ? t : o.slide;
            n || i.data("bs.carousel", n = new e(this, o)), "number" == typeof t ? n.to(t) : r ? n[r]() : o.interval && n.pause().cycle()
        })
    }
    var e = function(t, e) {
        this.$element = $(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, e.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function(t, i) {
        var n = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(t, n),
            r = this.interval,
            a = "next" == t ? "left" : "right",
            s = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var l = o[0],
            d = $.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: a
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = $(this.$indicators.children()[this.getItemIndex(o)]);
                c && c.addClass("active")
            }
            var u = $.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: a
            });
            return $.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, n.addClass(a), o.addClass(a), n.one("bsTransitionEnd", function() {
                o.removeClass([t, a].join(" ")).addClass("active"), n.removeClass(["active", a].join(" ")), s.sliding = !1, setTimeout(function() {
                    s.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
        }
    };
    var i = $.fn.carousel;
    $.fn.carousel = t, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = i, this
    };
    var n = function(e) {
        var i, n = $(this),
            o = $(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = $.extend({}, o.data(), n.data()),
                a = n.attr("data-slide-to");
            a && (r.interval = !1), t.call(o, r), a && o.data("bs.carousel").to(a), e.preventDefault()
        }
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var e = $(this);
            t.call(e, e.data())
        })
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        var e;
        return $(t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""))
    }

    function e(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("bs.collapse"),
                o = $.extend({}, i.DEFAULTS, e.data(), "object" == typeof t && t);
            !n && o.toggle && /show|hide/.test(t) && (o.toggle = !1), n || e.data("bs.collapse", n = new i(this, o)), "string" == typeof t && n[t]()
        })
    }
    var i = function(t, e) {
        this.$element = $(t), this.options = $.extend({}, i.DEFAULTS, e), this.$trigger = $('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (t = n.data("bs.collapse")) && t.transitioning)) {
                var o = $.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    n && n.length && (e.call(n, "hide"), t || n.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!$.support.transition) return a.call(this);
                    var s = $.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", $.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][s])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!$.support.transition) return n.call(this);
                this.$element[e](0).one("bsTransitionEnd", $.proxy(n, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(e, i) {
            var n = $(i);
            this.addAriaAndCollapsedClass(t(n), n)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = $.fn.collapse;
    $.fn.collapse = e, $.fn.collapse.Constructor = i, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = n, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var n = $(this);
        n.attr("data-target") || i.preventDefault();
        var o = t(n),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : n.data();
        e.call(o, a)
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        var e = t.attr("data-target");
        e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && $(e);
        return i && i.length ? i : t.parent()
    }

    function e(e) {
        e && 3 === e.which || ($(n).remove(), $(o).each(function() {
            var i = $(this),
                n = t(i),
                o = {
                    relatedTarget: this
                };
            n.hasClass("open") && (e && "click" == e.type && /input|textarea/i.test(e.target.tagName) && $.contains(n[0], e.target) || (n.trigger(e = $.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), n.removeClass("open").trigger($.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var e = $(this),
                i = e.data("bs.dropdown");
            i || e.data("bs.dropdown", i = new r(this)), "string" == typeof t && i[t].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(t) {
            $(t).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.7", r.prototype.toggle = function(i) {
        var n = $(this);
        if (!n.is(".disabled, :disabled")) {
            var o = t(n),
                r = o.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = $.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger($.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = $(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var n = t(i),
                    r = n.hasClass("open");
                if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && n.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    s = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (s.length) {
                    var l = s.index(e.target);
                    38 == e.which && l > 0 && l--, 40 == e.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = $.fn.dropdown;
    $.fn.dropdown = i, $.fn.dropdown.Constructor = r, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = a, this
    }, $(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
function($) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var n = $(this),
                o = n.data("bs.modal"),
                r = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t);
            o || n.data("bs.modal", o = new e(this, r)), "string" == typeof t ? o[t](i) : r.show && o.show(i)
        })
    }
    var e = function(t, e) {
        this.options = e, this.$body = $(document.body), this.$element = $(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(t) {
        var i = this,
            n = $.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                $(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = $.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), n && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = $.Event("shown.bs.modal", {
                relatedTarget: t
            });
            n ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, e.prototype.hide = function(t) {
        t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function() {
        this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(t) {
        var i = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = $.support.transition && n;
            if (this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(t) {
                    if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), t && t()
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
        } else t && t()
    }, e.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function() {
        return $.fn.modal = i, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = $(this),
            n = i.attr("href"),
            o = $(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : $.extend({
                remote: !/#/.test(n) && n
            }, o.data(), i.data());
        i.is("a") && e.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, r, this)
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            !n && /destroy|hide/.test(t) || (n || i.data("bs.tooltip", n = new e(this, o)), "string" == typeof t && n[t]())
        })
    }
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = $(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
            var r = n[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    s = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(t) {
        return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, e.prototype.getDelegateOptions = function() {
        var t = {},
            e = this.getDefaults();
        return this._options && $.each(this._options, function(i, n) {
            e[i] != n && (t[i] = n)
        }), t
    }, e.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)
        }
    }, e.prototype.show = function() {
        var t = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var n = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                l = s.test(a);
            l && (a = a.replace(s, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                c = o[0].offsetWidth,
                u = o[0].offsetHeight;
            if (l) {
                var h = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + u > p.bottom ? "top" : "top" == a && d.top - u < p.top ? "bottom" : "right" == a && d.right + c > p.width ? "left" : "left" == a && d.left - c < p.left ? "right" : a, o.removeClass(h).addClass(a)
            }
            var f = this.getCalculatedOffset(a, d, c, u);
            this.applyPlacement(f, a);
            var g = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            $.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            o = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top += r, t.left += a, $.offset.setOffset(i[0], $.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var s = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != o && (t.top = t.top + o - l);
        var d = this.getViewportAdjustedDelta(e, t, s, l);
        d.left ? t.left += d.left : t.top += d.top;
        var c = /top|bottom/.test(e),
            u = c ? 2 * d.left - n + s : 2 * d.top - o + l,
            h = c ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(u, i[0][h], c)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(t) {
        function i() {
            "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
        }
        var n = this,
            o = $(this.$tip),
            r = $.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), $.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(t) {
        t = t || this.$element;
        var e = t[0],
            i = "BODY" == e.tagName,
            n = e.getBoundingClientRect();
        null == n.width && (n = $.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var o = window.SVGElement && e instanceof window.SVGElement,
            r = i ? {
                top: 0,
                left: 0
            } : o ? null : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = i ? {
                width: $(window).width(),
                height: $(window).height()
            } : null;
        return $.extend({}, n, a, s, r)
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - a.scroll,
                l = e.top + r - a.scroll + n;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var d = e.left - r,
                c = e.left + r + i;
            d < a.left ? o.left = a.left - d : c > a.right && (o.left = a.left + a.width - c)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = $(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(t) {
        var e = this;
        t && ((e = $(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = $.fn.tooltip;
    $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = i, this
    }
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.popover"),
                o = "object" == typeof t && t;
            !n && /destroy|hide/.test(t) || (n || i.data("bs.popover", n = new e(this, o)), "string" == typeof t && n[t]())
        })
    }
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = $.fn.popover;
    $.fn.popover = t, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function() {
        return $.fn.popover = i, this
    }
}(jQuery),
function($) {
    "use strict";

    function t(e, i) {
        this.$body = $(document.body), this.$scrollElement = $($(e).is(document.body) ? window : e), this.options = $.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(e) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.scrollspy"),
                o = "object" == typeof e && e;
            n || i.data("bs.scrollspy", n = new t(this, o)), "string" == typeof e && n[e]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            e = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), $.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = $(this),
                n = t.data("target") || t.attr("href"),
                o = /^#./.test(n) && $(n);
            return o && o.length && o.is(":visible") && [
                [o[e]().top + i, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var t = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.getScrollHeight(),
            i = this.options.offset + e - this.$scrollElement.height(),
            n = this.offsets,
            o = this.targets,
            r = this.activeTarget,
            a;
        if (this.scrollHeight != e && this.refresh(), t >= i) return r != (a = o[o.length - 1]) && this.activate(a);
        if (r && t < n[0]) return this.activeTarget = null, this.clear();
        for (a = n.length; a--;) r != o[a] && t >= n[a] && (void 0 === n[a + 1] || t < n[a + 1]) && this.activate(o[a])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = $(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = $.fn.scrollspy;
    $.fn.scrollspy = e, $.fn.scrollspy.Constructor = t, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = i, this
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var t = $(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.tab");
            n || i.data("bs.tab", n = new e(this)), "string" == typeof t && n[t]()
        })
    }
    var e = function(t) {
        this.element = $(t)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var n = e.find(".active:last a"),
                o = $.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                r = $.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(o), t.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = $(i);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, e.prototype.activate = function(t, i, n) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var r = i.find("> .active"),
            a = n && $.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var i = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function() {
        return $.fn.tab = i, this
    };
    var n = function(e) {
        e.preventDefault(), t.call($(this), "show")
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.affix"),
                o = "object" == typeof t && t;
            n || i.data("bs.affix", n = new e(this, o)), "string" == typeof t && n[t]()
        })
    }
    var e = function(t, i) {
        this.options = $.extend({}, e.DEFAULTS, i), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - n) && "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            d = s ? a : e;
        return null != i && o <= i ? "top" : null != n && l + d >= t - n && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                n = i.top,
                o = i.bottom,
                r = Math.max($(document).height(), $(document.body).height());
            "object" != typeof i && (o = n = i), "function" == typeof n && (n = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(r, t, n, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var s = "affix" + (a ? "-" + a : ""),
                    l = $.Event(s + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(s).trigger(s.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - t - o
            })
        }
    };
    var i = $.fn.affix;
    $.fn.affix = t, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function() {
        return $.fn.affix = i, this
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var e = $(this),
                i = e.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(e, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var i = 0;
        return e
    }(), e.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (0 > i || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function(e) {
        var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, n, o, r, a, s = this;
        if (n = document.createDocumentFragment(), r = s.$slider.children(), s.options.rows > 1) {
            for (a = s.options.slidesPerRow * s.options.rows, o = Math.ceil(r.length / a), t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < s.options.rows; e++) {
                    var d = document.createElement("div");
                    for (i = 0; i < s.options.slidesPerRow; i++) {
                        var c = t * a + (e * s.options.slidesPerRow + i);
                        r.get(c) && d.appendChild(r.get(c))
                    }
                    l.appendChild(d)
                }
                n.appendChild(l)
            }
            s.$slider.empty().append(n), s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, o, r, a = this,
            s = !1,
            l = a.$slider.width(),
            d = window.innerWidth || t(window).width();
        if ("window" === a.respondTo ? r = d : "slider" === a.respondTo ? r = l : "min" === a.respondTo && (r = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            o = null;
            for (n in a.breakpoints) a.breakpoints.hasOwnProperty(n) && (a.originalSettings.mobileFirst === !1 ? r < a.breakpoints[n] && (o = a.breakpoints[n]) : r > a.breakpoints[n] && (o = a.breakpoints[n]));
            null !== o ? null !== a.activeBreakpoint ? (o !== a.activeBreakpoint || i) && (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), s = o) : (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), s = o) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e), s = o), e || s === !1 || a.$slider.trigger("breakpoint", [a, s])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, o, r, a = this,
            s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), r = a.slideCount % a.options.slidesToScroll != 0, n = r ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || s.index() * a.options.slidesToScroll;
                a.slideHandler(a.checkNavigable(l), !1, i), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i;
        if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        this.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, n, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
            return r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r, !1) : void 0
        }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), a.$slider.trigger("lazyLoaded", [a, e, i])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, e, i])
                }, n.src = i
            })
        }
        var i, n, o, r, a = this;
        a.options.centerMode === !0 ? a.options.infinite === !0 ? (o = a.currentSlide + (a.options.slidesToShow / 2 + 1), r = o + a.options.slidesToShow + 2) : (o = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), r = a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide) : (o = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, r = Math.ceil(o + a.options.slidesToShow), a.options.fade === !0 && (o > 0 && o--, r <= a.slideCount && r++)), i = a.$slider.find(".slick-slide").slice(o, r), e(i), a.slideCount <= a.options.slidesToShow ? (n = a.$slider.find(".slick-slide"), e(n)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (n = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), e(n)) : 0 === a.currentSlide && (n = a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow), e(n))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1,
            t.interrupted = !1
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, o, r = this,
            a = t("img[data-lazy]", r.$slider);
        a.length ? (i = a.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            3 > e ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
        }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function(e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r)
                if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                    for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, n = this,
            o = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, o) {
            e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, o, r, a = this,
            s = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], s = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) a.options[n] = o;
        else if ("multiple" === r) t.each(n, function(t, e) {
            a.options[t] = e
        });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== t.type(a.options.responsive)) a.options.responsive = [o[i]];
                else {
                    for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === o[i].breakpoint && a.options.responsive.splice(e, 1), e--;
                    a.options.responsive.push(o[i])
                }
        s && (a.unload(), a.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, o, r, a, s, l = null,
            d = this;
        return e = e || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === t || d.slideCount <= d.options.slidesToShow ? void 0 : (e === !1 && d.asNavFor(t), n = t, l = d.getLeft(n), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > t || t > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (n = d.currentSlide, i !== !0 ? d.animateSlide(a, function() {
            d.postSlide(n)
        }) : d.postSlide(n))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > t || t > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (n = d.currentSlide, i !== !0 ? d.animateSlide(a, function() {
            d.postSlide(n)
        }) : d.postSlide(n))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > n ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (s = d.getNavTarget(), s = s.slick("getSlick"), s.slideCount <= s.options.slidesToShow && s.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(r), d.fadeSlide(o, function() {
            d.postSlide(o)
        })) : d.postSlide(o), void d.animateHeight()) : void(i !== !0 ? d.animateSlide(l, function() {
            d.postSlide(o)
        }) : d.postSlide(o))))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, o, r, a = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), i = a.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && t.preventDefault(), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = e + n * o), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            a = n.length;
        for (t = 0; a > t; t++)
            if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), void 0 !== i) return i;
        return n
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return t.svg4everybody = e()
    }) : "object" == typeof exports ? module.exports = e() : t.svg4everybody = e()
}(this, function() {
    function t(t, e) {
        if (e) {
            var i = document.createDocumentFragment(),
                n = !t.getAttribute("viewBox") && e.getAttribute("viewBox");
            n && t.setAttribute("viewBox", n);
            for (var o = e.cloneNode(!0); o.childNodes.length;) i.appendChild(o.firstChild);
            t.appendChild(i)
        }
    }

    function e(e) {
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var i = e._cachedDocument;
                i || (i = e._cachedDocument = document.implementation.createHTMLDocument(""), i.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(n) {
                    var o = e._cachedTarget[n.id];
                    o || (o = e._cachedTarget[n.id] = i.getElementById(n.id)), t(n.svg, o)
                })
            }
        }, e.onreadystatechange()
    }

    function i(i) {
        function n() {
            for (var i = 0; i < u.length;) {
                var a = u[i],
                    s = a.parentNode;
                if (s && /svg/i.test(s.nodeName)) {
                    var l = a.getAttribute("xlink:href");
                    if (o && (!r.validate || r.validate(l, s, a))) {
                        s.removeChild(a);
                        var h = l.split("#"),
                            p = h.shift(),
                            f = h.join("#");
                        if (p.length) {
                            var g = d[p];
                            g || (g = d[p] = new XMLHttpRequest, g.open("GET", p), g.send(), g._embeds = []), g._embeds.push({
                                svg: s,
                                id: f
                            }), e(g)
                        } else t(s, document.getElementById(f))
                    }
                } else ++i
            }
            c(n, 67)
        }
        var o, r = Object(i),
            a = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            s = /\bAppleWebKit\/(\d+)\b/,
            l = /\bEdge\/12\.(\d+)\b/;
        o = "polyfill" in r ? r.polyfill : a.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537;
        var d = {},
            c = window.requestAnimationFrame || setTimeout,
            u = document.getElementsByTagName("use");
        o && n()
    }
    return i
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Countdown = t()
    }
}(function() {
    var t, e, i;
    return function t(e, i, n) {
        function o(a, s) {
            if (!i[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var d = new Error("Cannot find module '" + a + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var c = i[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function(t) {
                    var i = e[a][1][t];
                    return o(i ? i : t)
                }, c, c.exports, t, e, i, n)
            }
            return i[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(t, e, i) {
            var n = {
                    date: "June 7, 2087 15:03:25",
                    refresh: 1e3,
                    offset: 0,
                    onEnd: function() {},
                    render: function(t) {
                        this.el.innerHTML = t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec"
                    }
                },
                o = function(t, e) {
                    this.el = t, this.options = {}, this.interval = !1, this.mergeOptions = function(t) {
                        for (var e in n) n.hasOwnProperty(e) && (this.options[e] = void 0 !== t[e] ? t[e] : n[e], "date" === e && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)), "function" == typeof this.options[e] && (this.options[e] = this.options[e].bind(this)));
                        "object" != typeof this.options.date && (this.options.date = new Date(this.options.date))
                    }.bind(this), this.mergeOptions(e), this.getDiffDate = function() {
                        var t = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3,
                            e = {
                                years: 0,
                                days: 0,
                                hours: 0,
                                min: 0,
                                sec: 0,
                                millisec: 0
                            };
                        return t <= 0 ? (this.interval && (this.stop(), this.options.onEnd()), e) : (t >= 31557600 && (e.years = Math.floor(t / 31557600), t -= 365.25 * e.years * 86400), t >= 86400 && (e.days = Math.floor(t / 86400), t -= 86400 * e.days), t >= 3600 && (e.hours = Math.floor(t / 3600), t -= 3600 * e.hours), t >= 60 && (e.min = Math.floor(t / 60), t -= 60 * e.min), e.sec = Math.round(t), e.millisec = t % 1 * 1e3, e)
                    }.bind(this), this.leadingZeros = function(t, e) {
                        return e = e || 2, t = String(t), t.length > e ? t : (Array(e + 1).join("0") + t).substr(-e)
                    }, this.update = function(t) {
                        return "object" != typeof t && (t = new Date(t)), this.options.date = t, this.render(), this
                    }.bind(this), this.stop = function() {
                        return this.interval && (clearInterval(this.interval), this.interval = !1), this
                    }.bind(this), this.render = function() {
                        return this.options.render(this.getDiffDate()), this
                    }.bind(this), this.start = function() {
                        if (!this.interval) return this.render(), this.options.refresh && (this.interval = setInterval(this.render, this.options.refresh)), this
                    }.bind(this), this.updateOffset = function(t) {
                        return this.options.offset = t, this
                    }.bind(this), this.restart = function(t) {
                        return this.mergeOptions(t), this.interval = !1, this.start(), this
                    }.bind(this), this.start()
                };
            e.exports = o
        }, {}],
        2: [function(t, e, i) {
            var n = t("./countdown.js"),
                o = "countdown",
                r = "date";
            jQuery.fn.countdown = function(t) {
                return $.each(this, function(e, i) {
                    var o = $(i);
                    o.data("countdown") || (o.data("date") && (t.date = o.data("date")), o.data("countdown", new n(i, t)))
                })
            }, e.exports = n
        }, {
            "./countdown.js": 1
        }]
    }, {}, [2])(2)
}),
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(this, function($) {
    var t = function(t, e) {
            var i, n = document.createElement("canvas");
            t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
            var o = n.getContext("2d");
            n.width = n.height = e.size;
            var r = 1;
            window.devicePixelRatio > 1 && (r = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * r, o.scale(r, r)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI);
            var a = (e.size - e.lineWidth) / 2;
            e.scaleColor && e.scaleLength && (a -= e.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var s = function(t, e, i) {
                    i = Math.min(Math.max(-1, i || 0), 1);
                    var n = i <= 0;
                    o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke()
                },
                l = function() {
                    var t, i;
                    o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                    for (var n = 24; n > 0; --n) n % 6 == 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                    o.restore()
                },
                d = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    }
                }(),
                c = function() {
                    e.scaleColor && l(), e.trackColor && s(e.trackColor, e.trackWidth || e.lineWidth, 1)
                };
            this.getCanvas = function() {
                return n
            }, this.getCtx = function() {
                return o
            }, this.clear = function() {
                o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
            }, this.draw = function(t) {
                e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (c(), i = o.getImageData(0, 0, e.size * r, e.size * r)) : (this.clear(), c()) : this.clear(), o.lineCap = e.lineCap;
                var n;
                n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(n, e.lineWidth, t / 100)
            }.bind(this), this.animate = function(t, i) {
                var n = Date.now();
                e.onStart(t, i);
                var o = function() {
                    var r = Math.min(Date.now() - n, e.animate.duration),
                        a = e.easing(this, r, t, i - t, e.animate.duration);
                    this.draw(a), e.onStep(t, i, a), r >= e.animate.duration ? e.onStop(t, i) : d(o)
                }.bind(this);
                d(o)
            }.bind(this)
        },
        e = function(e, i) {
            var n = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(t, e, i, n, o) {
                    return e /= o / 2, e < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                },
                onStart: function(t, e) {},
                onStep: function(t, e, i) {},
                onStop: function(t, e) {}
            };
            if (void 0 !== t) n.renderer = t;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                n.renderer = SVGRenderer
            }
            var o = {},
                r = 0,
                a = function() {
                    this.el = e, this.options = o;
                    for (var t in n) n.hasOwnProperty(t) && (o[t] = i && void 0 !== i[t] ? i[t] : n[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
                    "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
                        duration: o.animate,
                        enabled: !0
                    }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                        duration: 1e3,
                        enabled: o.animate
                    }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(t) {
                return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(r, t) : this.renderer.draw(t), r = t, this
            }.bind(this), this.disableAnimation = function() {
                return o.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return o.animate.enabled = !0, this
            }, a()
        };
    $.fn.easyPieChart = function(t) {
        return this.each(function() {
            var i;
            $.data(this, "easyPieChart") || (i = $.extend({}, t, $(this).data()), $.data(this, "easyPieChart", new e(this, i)))
        })
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function($) {
    var t = "Close",
        e = "BeforeClose",
        i = "AfterClose",
        n = "BeforeAppend",
        o = "MarkupParse",
        r = "Open",
        a = "Change",
        s = "mfp",
        l = ".mfp",
        d = "mfp-ready",
        c = "mfp-removing",
        u = "mfp-prevent-close",
        h, p = function() {},
        f = !!window.jQuery,
        g, m = $(window),
        v, y, b, x, w = function(t, e) {
            h.ev.on("mfp" + t + ".mfp", e)
        },
        k = function(t, e, i, n) {
            var o = document.createElement("div");
            return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? e && e.appendChild(o) : (o = $(o), e && o.appendTo(e)), o
        },
        S = function(t, e) {
            h.ev.triggerHandler("mfp" + t, e), h.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), h.st.callbacks[t] && h.st.callbacks[t].apply(h, $.isArray(e) ? e : [e]))
        },
        C = function(t) {
            return t === x && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = $(h.st.closeMarkup.replace("%title%", h.st.tClose)), x = t), h.currTemplate.closeBtn
        },
        T = function() {
            $.magnificPopup.instance || (h = new p, h.init(), $.magnificPopup.instance = h)
        },
        I = function() {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    p.prototype = {
        constructor: p,
        init: function() {
            var t = navigator.appVersion;
            h.isLowIE = h.isIE8 = document.all && !document.addEventListener, h.isAndroid = /android/gi.test(t), h.isIOS = /iphone|ipad|ipod/gi.test(t), h.supportsTransition = I(), h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), v = $(document), h.popupsCache = {}
        },
        open: function(t) {
            var e;
            if (t.isObj === !1) {
                h.items = t.items.toArray(), h.index = 0;
                var i = t.items,
                    n;
                for (e = 0; e < i.length; e++)
                    if (n = i[e], n.parsed && (n = n.el[0]), n === t.el[0]) {
                        h.index = e;
                        break
                    }
            } else h.items = $.isArray(t.items) ? t.items : [t.items], h.index = t.index || 0;
            if (h.isOpen) return void h.updateItemHTML();
            h.types = [], b = "", t.mainEl && t.mainEl.length ? h.ev = t.mainEl.eq(0) : h.ev = v, t.key ? (h.popupsCache[t.key] || (h.popupsCache[t.key] = {}), h.currTemplate = h.popupsCache[t.key]) : h.currTemplate = {}, h.st = $.extend(!0, {}, $.magnificPopup.defaults, t), h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos, h.st.modal && (h.st.closeOnContentClick = !1, h.st.closeOnBgClick = !1, h.st.showCloseBtn = !1, h.st.enableEscapeKey = !1), h.bgOverlay || (h.bgOverlay = k("bg").on("click.mfp", function() {
                h.close()
            }), h.wrap = k("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
                h._checkIfClose(t.target) && h.close()
            }), h.container = k("container", h.wrap)), h.contentContainer = k("content"), h.st.preloader && (h.preloader = k("preloader", h.container, h.st.tLoading));
            var o = $.magnificPopup.modules;
            for (e = 0; e < o.length; e++) {
                var r = o[e];
                r = r.charAt(0).toUpperCase() + r.slice(1), h["init" + r].call(h)
            }
            S("BeforeOpen"), h.st.showCloseBtn && (h.st.closeBtnInside ? (w("MarkupParse", function(t, e, i, n) {
                i.close_replaceWith = C(n.type)
            }), b += " mfp-close-btn-in") : h.wrap.append(C())), h.st.alignTop && (b += " mfp-align-top"), h.fixedContentPos ? h.wrap.css({
                overflow: h.st.overflowY,
                overflowX: "hidden",
                overflowY: h.st.overflowY
            }) : h.wrap.css({
                top: m.scrollTop(),
                position: "absolute"
            }), (h.st.fixedBgPos === !1 || "auto" === h.st.fixedBgPos && !h.fixedContentPos) && h.bgOverlay.css({
                height: v.height(),
                position: "absolute"
            }), h.st.enableEscapeKey && v.on("keyup.mfp", function(t) {
                27 === t.keyCode && h.close()
            }), m.on("resize.mfp", function() {
                h.updateSize()
            }), h.st.closeOnContentClick || (b += " mfp-auto-cursor"), b && h.wrap.addClass(b);
            var a = h.wH = m.height(),
                s = {};
            if (h.fixedContentPos && h._hasScrollBar(a)) {
                var l = h._getScrollbarSize();
                l && (s.marginRight = l)
            }
            h.fixedContentPos && (h.isIE7 ? $("body, html").css("overflow", "hidden") : s.overflow = "hidden");
            var d = h.st.mainClass;
            return h.isIE7 && (d += " mfp-ie7"), d && h._addClassToMFP(d), h.updateItemHTML(), S("BuildControls"), $("html").css(s), h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || $(document.body)), h._lastFocusedEl = document.activeElement, setTimeout(function() {
                h.content ? (h._addClassToMFP("mfp-ready"), h._setFocus()) : h.bgOverlay.addClass("mfp-ready"), v.on("focusin.mfp", h._onFocusIn)
            }, 16), h.isOpen = !0, h.updateSize(a), S("Open"), t
        },
        close: function() {
            h.isOpen && (S("BeforeClose"), h.isOpen = !1, h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP("mfp-removing"), setTimeout(function() {
                h._close()
            }, h.st.removalDelay)) : h._close())
        },
        _close: function() {
            S("Close");
            var t = "mfp-removing mfp-ready ";
            if (h.bgOverlay.detach(), h.wrap.detach(), h.container.empty(), h.st.mainClass && (t += h.st.mainClass + " "), h._removeClassFromMFP(t), h.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                h.isIE7 ? $("body, html").css("overflow", "") : e.overflow = "", $("html").css(e)
            }
            v.off("keyup.mfp focusin.mfp"), h.ev.off(".mfp"), h.wrap.attr("class", "mfp-wrap").removeAttr("style"), h.bgOverlay.attr("class", "mfp-bg"), h.container.attr("class", "mfp-container"), !h.st.showCloseBtn || h.st.closeBtnInside && h.currTemplate[h.currItem.type] !== !0 || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(), h.st.autoFocusLast && h._lastFocusedEl && $(h._lastFocusedEl).focus(), h.currItem = null, h.content = null, h.currTemplate = null, h.prevHeight = 0, S("AfterClose")
        },
        updateSize: function(t) {
            if (h.isIOS) {
                var e = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * e;
                h.wrap.css("height", i), h.wH = i
            } else h.wH = t || m.height();
            h.fixedContentPos || h.wrap.css("height", h.wH), S("Resize")
        },
        updateItemHTML: function() {
            var t = h.items[h.index];
            h.contentContainer.detach(), h.content && h.content.detach(), t.parsed || (t = h.parseEl(h.index));
            var e = t.type;
            if (S("BeforeChange", [h.currItem ? h.currItem.type : "", e]), h.currItem = t, !h.currTemplate[e]) {
                var i = !!h.st[e] && h.st[e].markup;
                S("FirstMarkupParse", i), h.currTemplate[e] = !i || $(i)
            }
            y && y !== t.type && h.container.removeClass("mfp-" + y + "-holder");
            var n = h["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, h.currTemplate[e]);
            h.appendContent(n, e), t.preloaded = !0, S("Change", t), y = t.type, h.container.prepend(h.contentContainer), S("AfterChange")
        },
        appendContent: function(t, e) {
            h.content = t, t ? h.st.showCloseBtn && h.st.closeBtnInside && h.currTemplate[e] === !0 ? h.content.find(".mfp-close").length || h.content.append(C()) : h.content = t : h.content = "", S("BeforeAppend"), h.container.addClass("mfp-" + e + "-holder"), h.contentContainer.append(h.content)
        },
        parseEl: function(t) {
            var e = h.items[t],
                i;
            if (e.tagName ? e = {
                    el: $(e)
                } : (i = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var n = h.types, o = 0; o < n.length; o++)
                    if (e.el.hasClass("mfp-" + n[o])) {
                        i = n[o];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = i || h.st.type || "inline", e.index = t, e.parsed = !0, h.items[t] = e, S("ElementParse", e), h.items[t]
        },
        addGroup: function(t, e) {
            var i = function(i) {
                i.mfpEl = this, h._openClick(i, t, e)
            };
            e || (e = {});
            var n = "click.magnificPopup";
            e.mainEl = t, e.items ? (e.isObj = !0, t.off(n).on(n, i)) : (e.isObj = !1, e.delegate ? t.off(n).on(n, e.delegate, i) : (e.items = t, t.off(n).on(n, i)))
        },
        _openClick: function(t, e, i) {
            if ((void 0 !== i.midClick ? i.midClick : $.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                var n = void 0 !== i.disableOn ? i.disableOn : $.magnificPopup.defaults.disableOn;
                if (n)
                    if ($.isFunction(n)) {
                        if (!n.call(h)) return !0
                    } else if (m.width() < n) return !0;
                t.type && (t.preventDefault(), h.isOpen && t.stopPropagation()), i.el = $(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), h.open(i)
            }
        },
        updateStatus: function(t, e) {
            if (h.preloader) {
                g !== t && h.container.removeClass("mfp-s-" + g), e || "loading" !== t || (e = h.st.tLoading);
                var i = {
                    status: t,
                    text: e
                };
                S("UpdateStatus", i), t = i.status, e = i.text, h.preloader.html(e), h.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation()
                }), h.container.addClass("mfp-s-" + t), g = t
            }
        },
        _checkIfClose: function(t) {
            if (!$(t).hasClass("mfp-prevent-close")) {
                var e = h.st.closeOnContentClick,
                    i = h.st.closeOnBgClick;
                if (e && i) return !0;
                if (!h.content || $(t).hasClass("mfp-close") || h.preloader && t === h.preloader[0]) return !0;
                if (t === h.content[0] || $.contains(h.content[0], t)) {
                    if (e) return !0
                } else if (i && $.contains(document, t)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) {
            h.bgOverlay.addClass(t), h.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t), h.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
            return (h.isIE7 ? v.height() : document.body.scrollHeight) > (t || m.height())
        },
        _setFocus: function() {
            (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
        },
        _onFocusIn: function(t) {
            if (t.target !== h.wrap[0] && !$.contains(h.wrap[0], t.target)) return h._setFocus(), !1
        },
        _parseMarkup: function(t, e, i) {
            var n;
            i.data && (e = $.extend(i.data, e)), S("MarkupParse", [t, e, i]), $.each(e, function(e, i) {
                if (void 0 === i || i === !1) return !0;
                if (n = e.split("_"), n.length > 1) {
                    var o = t.find(".mfp-" + n[0]);
                    if (o.length > 0) {
                        var r = n[1];
                        "replaceWith" === r ? o[0] !== i[0] && o.replaceWith(i) : "img" === r ? o.is("img") ? o.attr("src", i) : o.replaceWith($("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(n[1], i)
                    }
                } else t.find(".mfp-" + e).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === h.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), h.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return h.scrollbarSize
        }
    }, $.magnificPopup = {
        instance: null,
        proto: p.prototype,
        modules: [],
        open: function(t, e) {
            return T(), t = t ? $.extend(!0, {}, t) : {}, t.isObj = !0, t.index = e || 0, this.instance.open(t)
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close()
        },
        registerModule: function(t, e) {
            e.options && ($.magnificPopup.defaults[t] = e.options), $.extend(this.proto, e.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, $.fn.magnificPopup = function(t) {
        T();
        var e = $(this);
        if ("string" == typeof t)
            if ("open" === t) {
                var i, n = f ? e.data("magnificPopup") : e[0].magnificPopup,
                    o = parseInt(arguments[1], 10) || 0;
                n.items ? i = n.items[o] : (i = e, n.delegate && (i = i.find(n.delegate)), i = i.eq(o)), h._openClick({
                    mfpEl: i
                }, e, n)
            } else h.isOpen && h[t].apply(h, Array.prototype.slice.call(arguments, 1));
        else t = $.extend(!0, {}, t), f ? e.data("magnificPopup", t) : e[0].magnificPopup = t, h.addGroup(e, t);
        return e
    };
    var _ = "inline",
        M, A, P, E = function() {
            P && (A.after(P.addClass(M)).detach(), P = null)
        };
    $.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                h.types.push("inline"), w("Close.inline", function() {
                    E()
                })
            },
            getInline: function(t, e) {
                if (E(), t.src) {
                    var i = h.st.inline,
                        n = $(t.src);
                    if (n.length) {
                        var o = n[0].parentNode;
                        o && o.tagName && (A || (M = i.hiddenClass, A = k(M), M = "mfp-" + M), P = n.after(A).detach().removeClass(M)), h.updateStatus("ready")
                    } else h.updateStatus("error", i.tNotFound), n = $("<div>");
                    return t.inlineElement = n, n
                }
                return h.updateStatus("ready"), h._parseMarkup(e, {}, t), e
            }
        }
    });
    var D = "ajax",
        O, L = function() {
            O && $(document.body).removeClass(O)
        },
        z = function() {
            L(), h.req && h.req.abort()
        };
    $.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                h.types.push("ajax"), O = h.st.ajax.cursor, w("Close.ajax", z), w("BeforeChange.ajax", z)
            },
            getAjax: function(t) {
                O && $(document.body).addClass(O), h.updateStatus("loading");
                var e = $.extend({
                    url: t.src,
                    success: function(e, i, n) {
                        var o = {
                            data: e,
                            xhr: n
                        };
                        S("ParseAjax", o), h.appendContent($(o.data), "ajax"), t.finished = !0, L(), h._setFocus(), setTimeout(function() {
                            h.wrap.addClass("mfp-ready")
                        }, 16), h.updateStatus("ready"), S("AjaxContentAdded")
                    },
                    error: function() {
                        L(), t.finished = t.loadError = !0, h.updateStatus("error", h.st.ajax.tError.replace("%url%", t.src))
                    }
                }, h.st.ajax.settings);
                return h.req = $.ajax(e), ""
            }
        }
    });
    var F, R = function(t) {
        if (t.data && void 0 !== t.data.title) return t.data.title;
        var e = h.st.image.titleSrc;
        if (e) {
            if ($.isFunction(e)) return e.call(h, t);
            if (t.el) return t.el.attr(e) || ""
        }
        return ""
    };
    $.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var t = h.st.image,
                    e = ".image";
                h.types.push("image"), w("Open" + e, function() {
                    "image" === h.currItem.type && t.cursor && $(document.body).addClass(t.cursor)
                }), w("Close" + e, function() {
                    t.cursor && $(document.body).removeClass(t.cursor), m.off("resize.mfp")
                }), w("Resize" + e, h.resizeImage), h.isLowIE && w("AfterChange", h.resizeImage)
            },
            resizeImage: function() {
                var t = h.currItem;
                if (t && t.img && h.st.image.verticalFit) {
                    var e = 0;
                    h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", h.wH - e)
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, F && clearInterval(F), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (h.content && h.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function(t) {
                var e = 0,
                    i = t.img[0],
                    n = function(o) {
                        F && clearInterval(F), F = setInterval(function() {
                            if (i.naturalWidth > 0) return void h._onImageHasSize(t);
                            e > 200 && clearInterval(F), e++, 3 === e ? n(10) : 40 === e ? n(50) : 100 === e && n(500)
                        }, o)
                    };
                n(1)
            },
            getImage: function(t, e) {
                var i = 0,
                    n = function() {
                        t && (t.img[0].complete ? (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, S("ImageLoadComplete")) : (i++, i < 200 ? setTimeout(n, 100) : o()))
                    },
                    o = function() {
                        t && (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("error", r.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                    },
                    r = h.st.image,
                    a = e.find(".mfp-img");
                if (a.length) {
                    var s = document.createElement("img");
                    s.className = "mfp-img", t.el && t.el.find("img").length && (s.alt = t.el.find("img").attr("alt")), t.img = $(s).on("load.mfploader", n).on("error.mfploader", o), s.src = t.src, a.is("img") && (t.img = t.img.clone()), s = t.img[0], s.naturalWidth > 0 ? t.hasSize = !0 : s.width || (t.hasSize = !1)
                }
                return h._parseMarkup(e, {
                    title: R(t),
                    img_replaceWith: t.img
                }, t), h.resizeImage(), t.hasSize ? (F && clearInterval(F), t.loadError ? (e.addClass("mfp-loading"), h.updateStatus("error", r.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), h.updateStatus("ready")), e) : (h.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), h.findImageSize(t)), e)
            }
        }
    });
    var N, B = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    $.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var t = h.st.zoom,
                    e = ".zoom",
                    i;
                if (t.enabled && h.supportsTransition) {
                    var n = t.duration,
                        o = function(e) {
                            var i = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + t.duration / 1e3 + "s " + t.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, i.css(o), i
                        },
                        r = function() {
                            h.content.css("visibility", "visible")
                        },
                        a, s;
                    w("BuildControls" + e, function() {
                        if (h._allowZoom()) {
                            if (clearTimeout(a), h.content.css("visibility", "hidden"), !(i = h._getItemToZoom())) return void r();
                            s = o(i), s.css(h._getOffset()), h.wrap.append(s), a = setTimeout(function() {
                                s.css(h._getOffset(!0)), a = setTimeout(function() {
                                    r(), setTimeout(function() {
                                        s.remove(), i = s = null, S("ZoomAnimationEnded")
                                    }, 16)
                                }, n)
                            }, 16)
                        }
                    }), w("BeforeClose" + e, function() {
                        if (h._allowZoom()) {
                            if (clearTimeout(a), h.st.removalDelay = n, !i) {
                                if (!(i = h._getItemToZoom())) return;
                                s = o(i)
                            }
                            s.css(h._getOffset(!0)), h.wrap.append(s), h.content.css("visibility", "hidden"), setTimeout(function() {
                                s.css(h._getOffset())
                            }, 16)
                        }
                    }), w("Close" + e, function() {
                        h._allowZoom() && (r(), s && s.remove(), i = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === h.currItem.type
            },
            _getItemToZoom: function() {
                return !!h.currItem.hasSize && h.currItem.img
            },
            _getOffset: function(t) {
                var e;
                e = t ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem);
                var i = e.offset(),
                    n = parseInt(e.css("padding-top"), 10),
                    o = parseInt(e.css("padding-bottom"), 10);
                i.top -= $(window).scrollTop() - n;
                var r = {
                    width: e.width(),
                    height: (f ? e.innerHeight() : e[0].offsetHeight) - o - n
                };
                return B() ? r["-moz-transform"] = r.transform = "translate(" + i.left + "px," + i.top + "px)" : (r.left = i.left, r.top = i.top), r
            }
        }
    });
    var W = "iframe",
        j = "//about:blank",
        H = function(t) {
            if (h.currTemplate.iframe) {
                var e = h.currTemplate.iframe.find("iframe");
                e.length && (t || (e[0].src = "//about:blank"), h.isIE8 && e.css("display", t ? "block" : "none"))
            }
        };
    $.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                h.types.push("iframe"), w("BeforeChange", function(t, e, i) {
                    e !== i && ("iframe" === e ? H() : "iframe" === i && H(!0))
                }), w("Close.iframe", function() {
                    H()
                })
            },
            getIframe: function(t, e) {
                var i = t.src,
                    n = h.st.iframe;
                $.each(n.patterns, function() {
                    if (i.indexOf(this.index) > -1) return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                });
                var o = {};
                return n.srcAction && (o[n.srcAction] = i), h._parseMarkup(e, o, t), h.updateStatus("ready"), e
            }
        }
    });
    var V = function(t) {
            var e = h.items.length;
            return t > e - 1 ? t - e : t < 0 ? e + t : t
        },
        U = function(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    $.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var t = h.st.gallery,
                    e = ".mfp-gallery";
                if (h.direction = !0, !t || !t.enabled) return !1;
                b += " mfp-gallery", w("Open" + e, function() {
                    t.navigateByImgClick && h.wrap.on("click" + e, ".mfp-img", function() {
                        if (h.items.length > 1) return h.next(), !1
                    }), v.on("keydown" + e, function(t) {
                        37 === t.keyCode ? h.prev() : 39 === t.keyCode && h.next()
                    })
                }), w("UpdateStatus" + e, function(t, e) {
                    e.text && (e.text = U(e.text, h.currItem.index, h.items.length))
                }), w("MarkupParse" + e, function(e, i, n, o) {
                    var r = h.items.length;
                    n.counter = r > 1 ? U(t.tCounter, o.index, r) : ""
                }), w("BuildControls" + e, function() {
                    if (h.items.length > 1 && t.arrows && !h.arrowLeft) {
                        var e = t.arrowMarkup,
                            i = h.arrowLeft = $(e.replace(/%title%/gi, t.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                            n = h.arrowRight = $(e.replace(/%title%/gi, t.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        i.click(function() {
                            h.prev()
                        }), n.click(function() {
                            h.next()
                        }), h.container.append(i.add(n))
                    }
                }), w("Change" + e, function() {
                    h._preloadTimeout && clearTimeout(h._preloadTimeout), h._preloadTimeout = setTimeout(function() {
                        h.preloadNearbyImages(), h._preloadTimeout = null
                    }, 16)
                }), w("Close" + e, function() {
                    v.off(e), h.wrap.off("click" + e), h.arrowRight = h.arrowLeft = null
                })
            },
            next: function() {
                h.direction = !0, h.index = V(h.index + 1), h.updateItemHTML()
            },
            prev: function() {
                h.direction = !1, h.index = V(h.index - 1), h.updateItemHTML()
            },
            goTo: function(t) {
                h.direction = t >= h.index, h.index = t, h.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var t = h.st.gallery.preload,
                    e = Math.min(t[0], h.items.length),
                    i = Math.min(t[1], h.items.length),
                    n;
                for (n = 1; n <= (h.direction ? i : e); n++) h._preloadItem(h.index + n);
                for (n = 1; n <= (h.direction ? e : i); n++) h._preloadItem(h.index - n)
            },
            _preloadItem: function(t) {
                if (t = V(t), !h.items[t].preloaded) {
                    var e = h.items[t];
                    e.parsed || (e = h.parseEl(t)), S("LazyLoad", e), "image" === e.type && (e.img = $('<img class="mfp-img" />').on("load.mfploader", function() {
                        e.hasSize = !0
                    }).on("error.mfploader", function() {
                        e.hasSize = !0, e.loadError = !0, S("LazyLoadError", e)
                    }).attr("src", e.src)), e.preloaded = !0
                }
            }
        }
    });
    var q = "retina";
    $.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = h.st.retina,
                        e = t.ratio;
                    e = isNaN(e) ? e() : e, e > 1 && (w("ImageHasSize.retina", function(t, i) {
                        i.img.css({
                            "max-width": i.img[0].naturalWidth / e,
                            width: "100%"
                        })
                    }), w("ElementParse.retina", function(i, n) {
                        n.src = t.replaceSrc(n, e)
                    }))
                }
            }
        }
    }), T()
}),
function(t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        (n(t, e) ? r : o)(t, e)
    }
    var n, o, r;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, o = function(t, e) {
        t.classList.add(e)
    }, r = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, o = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var a = {
        hasClass: n,
        addClass: o,
        removeClass: r,
        toggleClass: i,
        has: n,
        add: o,
        remove: r,
        toggle: i
    };
    "function" == typeof define && define.amd ? define(a) : t.classie = a
}(window),
function(t) {
    "use strict";

    function e(t, e) {
        if (!t) return !1;
        for (var i = t.target || t.srcElement || t || !1; i && i != e;) i = i.parentNode || !1;
        return i !== !1
    }

    function i(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function n(t, e) {
        this.el = t, this.options = i({}, this.options), i(this.options, e), this._init()
    }
    n.prototype.options = {
        newTab: !0,
        stickyPlaceholder: !0,
        onChange: function(t) {
            return !1
        }
    }, n.prototype._init = function() {
        var t = this.el.options[this.el.selectedIndex];
        this.hasDefaultPlaceholder = t && t.disabled, this.selectedOpt = t || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
    }, n.prototype._createSelectEl = function() {
        var t = this,
            e = "",
            i = function(t) {
                var e = "",
                    i = "",
                    n = "";
                !t.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ", this.foundSelected = !0), t.getAttribute("data-class") && (i += t.getAttribute("data-class")), t.getAttribute("data-link") && (n = "data-link=" + t.getAttribute("data-link")), "" !== i && (e = 'class="' + i + '" ');
                var o = "";
                return [].forEach.call(t.attributes, function(t) {
                    var e = t.name;
                    e.indexOf("data-") + ["data-option", "data-value"].indexOf(e) == -1 && (o += e + "='" + t.value + "' ")
                }), "<li " + e + n + o + ' data-option data-value="' + t.value + '"><span>' + t.textContent + "</span></li>"
            };
        [].slice.call(this.el.children).forEach(function(t) {
            if (!t.disabled) {
                var n = t.tagName.toLowerCase();
                "option" === n ? e += i(t) : "optgroup" === n && (e += '<li class="cs-optgroup"><span>' + t.label + "</span><ul>", [].slice.call(t.children).forEach(function(t) {
                    e += i(t)
                }), e += "</ul></li>")
            }
        });
        var n = '<div class="cs-options"><ul>' + e + "</ul></div>";
        this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + n, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
    }, n.prototype._initEvents = function() {
        var t = this;
        this.selPlaceholder.addEventListener("click", function() {
            t._toggleSelect()
        }), this.selOpts.forEach(function(e, i) {
            e.addEventListener("click", function() {
                t.current = i, t._changeOption(), t._toggleSelect()
            })
        }), document.addEventListener("click", function(i) {
            var n = i.target;
            t._isOpen() && n !== t.selEl && !e(n, t.selEl) && t._toggleSelect()
        }), this.selEl.addEventListener("keydown", function(e) {
            switch (e.keyCode || e.which) {
                case 38:
                    e.preventDefault(), t._navigateOpts("prev");
                    break;
                case 40:
                    e.preventDefault(), t._navigateOpts("next");
                    break;
                case 32:
                    e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && t.preSelCurrent !== -1 && t._changeOption(), t._toggleSelect();
                    break;
                case 13:
                    e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && t.preSelCurrent !== -1 && (t._changeOption(), t._toggleSelect());
                    break;
                case 27:
                    e.preventDefault(), t._isOpen() && t._toggleSelect()
            }
        })
    }, n.prototype._navigateOpts = function(t) {
        this._isOpen() || this._toggleSelect();
        var e = void 0 !== this.preSelCurrent && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
        ("prev" === t && e > 0 || "next" === t && e < this.selOptsCount - 1) && (this.preSelCurrent = "next" === t ? e + 1 : e - 1, this._removeFocus(), classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
    }, n.prototype._toggleSelect = function() {
        this._removeFocus(), this._isOpen() ? (this.current !== -1 && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), classie.add(this.selEl, "cs-active"))
    }, n.prototype._changeOption = function() {
        void 0 !== this.preSelCurrent && this.preSelCurrent !== -1 && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
        var e = this.selOpts[this.current];
        this.selPlaceholder.textContent = e.textContent, this.el.value = e.getAttribute("data-value");
        var i = this.selEl.querySelector("li.cs-selected");
        i && classie.remove(i, "cs-selected"), classie.add(e, "cs-selected"), e.getAttribute("data-link") && (this.options.newTab ? t.open(e.getAttribute("data-link"), "_blank") : t.location = e.getAttribute("data-link")), this.options.onChange(this.el.value)
    }, n.prototype._isOpen = function(t) {
        return classie.has(this.selEl, "cs-active")
    }, n.prototype._removeFocus = function(t) {
        var e = this.selEl.querySelector("li.cs-focus");
        e && classie.remove(e, "cs-focus")
    }, t.SelectFx = n
}(window),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var a = r && r[o];
                a && (this.off(t, o), delete r[o]), o.apply(this, e), n += a ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function t(e, i) {
    function n(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function o(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function r(t, e, i) {
        if (!(this instanceof r)) return new r(t, e, i);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), $ && (this.jqDeferred = new $.Deferred), setTimeout(function() {
            this.check()
        }.bind(this))
    }

    function a(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var $ = e.jQuery,
        l = e.console;
    r.prototype = Object.create(i.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var a = r[n];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, r.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.addBackground = function(t, e) {
            var i = new s(t, e);
            this.images.push(i)
        },
        r.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            })
        }, r.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, a.prototype = Object.create(i.prototype), a.prototype.check = function() {
            if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src
        }, a.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, a.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, a.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(a.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function(t) {
            (t = t || e.jQuery) && ($ = t, $.fn.imagesLoaded = function(t, e) {
                return new r(this, t, e).jqDeferred.promise($(this))
            })
        }, r.makeJQueryPlugin(), r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function t(e, i) {
    "use strict";

    function n(t, n, $) {
        function a(e, i, n) {
            var o, r = "$()." + t + '("' + i + '")';
            return e.each(function(e, a) {
                var l = $.data(a, t);
                if (!l) return void s(t + " not initialized. Cannot call methods, i.e. " + r);
                var d = l[i];
                if (!d || "_" == i.charAt(0)) return void s(r + " is not a valid method");
                var c = d.apply(l, n);
                o = void 0 === o ? c : o
            }), void 0 !== o ? o : e
        }

        function l(e, i) {
            e.each(function(e, o) {
                var r = $.data(o, t);
                r ? (r.option(i), r._init()) : (r = new n(o, i), $.data(o, t, r))
            })
        }($ = $ || i || e.jQuery) && (n.prototype.option || (n.prototype.option = function(t) {
            $.isPlainObject(t) && (this.options = $.extend(!0, this.options, t))
        }), $.fn[t] = function(t) {
            if ("string" == typeof t) {
                return a(this, t, r.call(arguments, 1))
            }
            return l(this, t), this
        }, o($))
    }

    function o($) {
        !$ || $ && $.bridget || ($.bridget = n)
    }
    var r = Array.prototype.slice,
        a = e.console,
        s = void 0 === a ? function() {} : function(t) {
            a.error(t)
        };
    return o(i || e.jQuery), n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var a = r && r[o];
                a && (this.off(t, o), delete r[o]), o.apply(this, e), n += a ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function t() {
    "use strict";

    function e(t) {
        var e = parseFloat(t);
        return t.indexOf("%") == -1 && !isNaN(e) && e
    }

    function i() {}

    function n() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < d; e++) {
            t[l[e]] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function r() {
        if (!c) {
            c = !0;
            var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(t);
            var n = o(t);
            a.isBoxSizeOuter = u = 200 == e(n.width), i.removeChild(t)
        }
    }

    function a(t) {
        if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var i = o(t);
            if ("none" == i.display) return n();
            var a = {};
            a.width = t.offsetWidth, a.height = t.offsetHeight;
            for (var s = a.isBorderBox = "border-box" == i.boxSizing, c = 0; c < d; c++) {
                var h = l[c],
                    p = i[h],
                    f = parseFloat(p);
                a[h] = isNaN(f) ? 0 : f
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                x = a.borderTopWidth + a.borderBottomWidth,
                w = s && u,
                k = e(i.width);
            k !== !1 && (a.width = k + (w ? 0 : g + b));
            var S = e(i.height);
            return S !== !1 && (a.height = S + (w ? 0 : m + x)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s = "undefined" == typeof console ? i : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        d = l.length,
        c = !1,
        u;
    return a
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function t() {
    "use strict";
    var e = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function t(i, n) {
        return i[e](n)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function t(e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function(t, e) {
        return (t % e + e) % e
    }, n.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, n.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, n.getParent = function(t, e) {
        for (; t != document.body;)
            if (t = t.parentNode, i(t, e)) return t
    }, n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!e) return void o.push(t);
                i(t, e) && o.push(t);
                for (var n = t.querySelectorAll(e), r = 0; r < n.length; r++) o.push(n[r])
            }
        }), o
    }, n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, n.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
    }, n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = e.console;
    return n.htmlInit = function(t, i) {
        n.docReady(function() {
            var r = n.toDashed(i),
                a = "data-" + r,
                s = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + r),
                d = n.makeArray(s).concat(n.makeArray(l)),
                c = a + "-options",
                u = e.jQuery;
            d.forEach(function(e) {
                var n = e.getAttribute(a) || e.getAttribute(c),
                    r;
                try {
                    r = n && JSON.parse(n)
                } catch (t) {
                    return void(o && o.error("Error parsing " + a + " on " + e.className + ": " + t))
                }
                var s = new t(e, r);
                u && u.data(e, i, s)
            })
        })
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function t(e, i) {
    "use strict";

    function n(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function r(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var a = document.documentElement.style,
        s = "string" == typeof a.transition ? "transition" : "WebkitTransition",
        l = "string" == typeof a.transform ? "transform" : "WebkitTransform",
        d = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        c = {
            transform: l,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        u = o.prototype = Object.create(e.prototype);
    u.constructor = o, u._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.getSize = function() {
        this.size = i(this.element)
    }, u.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            e[c[i] || i] = t[i]
        }
    }, u.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
            s = o.indexOf("%") != -1 ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        a = isNaN(a) ? 0 : a, s = isNaN(s) ? 0 : s, a -= e ? r.paddingLeft : r.paddingRight, s -= i ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = s
    }, u.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            a = i ? "right" : "left",
            s = this.position.x + t[o];
        e[r] = this.getXValue(s), e[a] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            d = n ? "top" : "bottom",
            c = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[d] = this.getYValue(u), e[c] = "", this.css(e), this.emitEvent("layout", [this])
    }, u.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, u.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, u._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            a = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
        var s = t - i,
            l = e - n,
            d = {};
        d.transform = this.getTranslate(s, l), this.transition({
            to: d,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, u.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, u.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, u.moveTo = u._transitionTo, u.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, u._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, u.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var h = "opacity," + r(l);
    u.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(d, this, !1)
        }
    }, u.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, u.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var p = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = p[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                e.onEnd[i].call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, u.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
    }, u._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return u.removeTransitionStyles = function() {
        this.css(f)
    }, u.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, u.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, u.remove = function() {
        if (!s || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        this.once("transitionEnd", function() {
            this.removeElem()
        }), this.hide()
    }, u.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, u.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, u.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, u.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function t(e, i, n, o, r) {
    "use strict";

    function a(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(d && d.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, c && (this.$element = c(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++h;
        this.element.outlayerGUID = n, p[n] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function l(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        return i.length ? (i = parseFloat(i)) * (g[n] || 1) : 0
    }
    var d = e.console,
        c = e.jQuery,
        u = function() {},
        h = 0,
        p = {};
    a.namespace = "outlayer", a.Item = r, a.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = a.prototype;
    o.extend(f, i.prototype), f.option = function(t) {
        o.extend(this.options, t)
    }, f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, a.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                a = new i(r, this);
            n.push(a)
        }
        return n
    }, f._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = n(this.element)
    }, f._getMeasurement = function(t, e) {
        var i = this.options[t],
            o;
        i ? ("string" == typeof i ? o = this.element.querySelector(i) : i instanceof HTMLElement && (o = i), this[t] = o ? n(o)[e] : i) : this[t] = 0
    }, f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = l(t), this.stagger)
    }, f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, f._getContainerSize = u, f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++a == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var a = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), c)
            if (this.$element = this.$element || c(this.element), e) {
                var o = c.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, f._manageStamp = u, f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(t);
        return {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom
        }
    }, f.handleEvent = o.handleEvent, f.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, o.debounceMethod(a, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize(), delete p[this.element.outlayerGUID], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
    }, a.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && p[e]
    }, a.create = function(t, e) {
        var i = s(a);
        return i.defaults = o.extend({}, a.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = s(r), o.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
    };
    var g = {
        ms: 1,
        s: 1e3
    };
    return a.Item = r, a
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function t(e) {
    "use strict";

    function i() {
        e.Item.apply(this, arguments)
    }
    var n = i.prototype = Object.create(e.Item.prototype),
        o = n._create;
    n._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, n.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var r = n.destroy;
    return n.destroy = function() {
        r.apply(this, arguments), this.css({
            display: ""
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function t(e, i) {
    "use strict";

    function n(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = n.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
        o[t] = function() {
            return i.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, n.modes = {}, n.create = function(t, e) {
        function i() {
            n.apply(this, arguments)
        }
        return i.prototype = Object.create(o), i.prototype.constructor = i, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i, i
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function t(e, i) {
    var n = e.create("masonry");
    return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                e = t && t.element;
            this.columnWidth = e && i(e).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            a = n - o % n,
            s = a && a < 1 ? "round" : "floor";
        r = Math[s](r), this.cols = Math.max(r, 1)
    }, n.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            e = t ? this.element.parentNode : this.element,
            n = i(e);
        this.containerWidth = n && n.innerWidth
    }, n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), a = o.indexOf(r), s = {
                x: this.columnWidth * a,
                y: r
            }, l = r + t.size.outerHeight, d = this.cols + 1 - o.length, c = 0; c < d; c++) this.colYs[a + c] = l;
        return s
    }, n.prototype._getColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, n.prototype._manageStamp = function(t) {
        var e = i(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            a = r + e.outerWidth,
            s = Math.floor(r / this.columnWidth);
        s = Math.max(0, s);
        var l = Math.floor(a / this.columnWidth);
        l -= a % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var d = this._getOption("originTop"), c = (d ? n.top : n.bottom) + e.outerHeight, u = s; u <= l; u++) this.colYs[u] = Math.max(c, this.colYs[u])
    }, n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function t(e, i) {
    "use strict";
    var n = e.create("masonry"),
        o = n.prototype,
        r = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var a in i.prototype) r[a] || (o[a] = i.prototype[a]);
    var s = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
    };
    var l = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : l.apply(this.isotope, arguments)
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function t(e) {
    "use strict";
    var i = e.create("fitRows"),
        n = i.prototype;
    return n._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, n._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function t(e) {
    "use strict";
    var i = e.create("vertical", {
            horizontalAlignment: 0
        }),
        n = i.prototype;
    return n._resetLayout = function() {
        this.y = 0
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, n._getContainerSize = function() {
        return {
            height: this.y
        }
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, a, s) {
        return e(t, i, n, o, r, a, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function t(e, i, n, o, r, a, s) {
    function l(t, e) {
        return function i(n, o) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r],
                    s = n.sortData[a],
                    l = o.sortData[a];
                if (s > l || s < l) {
                    var d = void 0 !== e[a] ? e[a] : e,
                        c = d ? 1 : -1;
                    return (s > l ? 1 : -1) * c
                }
            }
            return 0
        }
    }
    var d = e.jQuery,
        c = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        u = i.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    u.Item = a, u.LayoutMode = s;
    var h = u.prototype;
    h._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, h.reloadItems = function() {
        this.itemGUID = 0, i.prototype.reloadItems.call(this)
    }, h._itemize = function() {
        for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
            t[e].id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, h._initLayoutMode = function(t) {
        var e = s.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, h.layout = function() {
        if (!this._isLayoutInited && this._getOption("initLayout")) return void this.arrange();
        this._layout()
    }, h._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, h.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, h._init = h.arrange, h._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, h._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, h._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, h._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), a = 0; a < t.length; a++) {
            var s = t[a];
            if (!s.isIgnored) {
                var l = r(s);
                l && i.push(s), l && s.isHidden ? n.push(s) : l || s.isHidden || o.push(s)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, h._getFilterTest = function(t) {
        return d && this.options.isJQueryFiltering ? function(e) {
            return d(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, h.updateSortData = function(t) {
        var e;
        t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, h._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = p(i)
        }
    }, h._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var p = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = c(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                r = o && o[1],
                a = e(r, n),
                s = u.sortDataParsers[i[1]];
            return t = s ? function(t) {
                return t && s(a(t))
            } : function(t) {
                return t && a(t)
            }
        }

        function e(t, e) {
            return t ? function e(i) {
                return i.getAttribute(t)
            } : function t(i) {
                var n = i.querySelector(e);
                return n && n.textContent
            }
        }
        return t
    }();
    u.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, h._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = l(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, h._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, h._resetLayout = function() {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, h._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, h._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, h._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, h.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, h.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, h.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, h._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, h.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var f = h.remove;
    return h.remove = function(t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var o = e[n];
            r.removeFrom(this.filteredItems, o)
        }
    }, h.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, h._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, h.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, u
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
    }
}(function() {
    return function t(e, i, n) {
        function o(a, s) {
            if (!i[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var d = new Error("Cannot find module '" + a + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var c = i[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function(t) {
                    var i = e[a][1][t];
                    return o(i ? i : t)
                }, c, c.exports, t, e, i, n)
            }
            return i[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(t, e, i) {}, {}],
        2: [function(t, e, i) {
            function n(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/,
                        i = /^#([a-fA-F0-9]{6})$/,
                        n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        r = /(\w+)/,
                        a = [0, 0, 0],
                        s = 1,
                        l = t.match(/^#([a-fA-F0-9]{3})$/);
                    if (l) {
                        l = l[1];
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l[d] + l[d], 16)
                    } else if (l = t.match(/^#([a-fA-F0-9]{6})$/)) {
                        l = l[1];
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16)
                    } else if (l = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l[d + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                        for (var d = 0; d < a.length; d++) a[d] = Math.round(2.55 * parseFloat(l[d + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(/(\w+)/)) {
                        if ("transparent" == l[1]) return [0, 0, 0, 0];
                        if (!(a = x[l[1]])) return
                    }
                    for (var d = 0; d < a.length; d++) a[d] = y(a[d], 0, 255);
                    return s = s || 0 == s ? y(s, 0, 1) : 1, a[3] = s, a
                }
            }

            function o(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        i = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (i) {
                        var n = parseFloat(i[4]);
                        return [y(parseInt(i[1]), 0, 360), y(parseFloat(i[2]), 0, 100), y(parseFloat(i[3]), 0, 100), y(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        i = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (i) {
                        var n = parseFloat(i[4]);
                        return [y(parseInt(i[1]), 0, 360), y(parseFloat(i[2]), 0, 100), y(parseFloat(i[3]), 0, 100), y(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function a(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }

            function s(t) {
                var e = o(t);
                return e && e.slice(0, 3)
            }

            function l(t) {
                var e = n(t);
                return e ? e[3] : (e = o(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
            }

            function d(t) {
                return "#" + b(t[0]) + b(t[1]) + b(t[2])
            }

            function c(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? u(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function h(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            }

            function p(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function f(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }

            function g(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function m(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }

            function v(t) {
                return w[t.slice(0, 3)]
            }

            function y(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function b(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var x = t(6);
            e.exports = {
                getRgba: n,
                getHsla: o,
                getRgb: a,
                getHsl: s,
                getHwb: r,
                getAlpha: l,
                hexString: d,
                rgbString: c,
                rgbaString: u,
                percentString: h,
                percentaString: p,
                hslString: f,
                hslaString: g,
                hwbString: m,
                keyword: v
            };
            var w = {};
            for (var k in x) w[x[k]] = k
        }, {
            6: 6
        }],
        3: [function(t, e, i) {
            var n = t(5),
                o = t(2),
                r = function(t) {
                    if (t instanceof r) return t;
                    if (!(this instanceof r)) return new r(t);
                    this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    };
                    var e;
                    if ("string" == typeof t)
                        if (e = o.getRgba(t)) this.setValues("rgb", e);
                        else if (e = o.getHsla(t)) this.setValues("hsl", e);
                    else {
                        if (!(e = o.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                        this.setValues("hwb", e)
                    } else if ("object" == typeof t)
                        if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
                        else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
                    else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
                    else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
                    else {
                        if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                        this.setValues("cmyk", e)
                    }
                };
            r.prototype = {
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return o.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return o.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return o.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return o.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return o.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return o.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return o.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return o.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = .03928 >= n ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return 128 > (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = 0 > i ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var i = this,
                        n = t,
                        o = void 0 === e ? .5 : e,
                        r = 2 * o - 1,
                        a = i.alpha() - n.alpha(),
                        s = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * o + n.alpha() * (1 - o))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, i = new r,
                        n = this.values,
                        o = i.values;
                    for (var a in n) n.hasOwnProperty(a) && (t = n[a], e = {}.toString.call(t), "[object Array]" === e ? o[a] = t.slice(0) : "[object Number]" === e ? o[a] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function(t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, r.prototype.setValues = function(t, e) {
                var i, o = this.values,
                    r = this.spaces,
                    a = this.maxes,
                    s = 1;
                if ("alpha" === t) s = e;
                else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                    s = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var l = r[t];
                    for (i = 0; i < t.length; i++) o[t][i] = e[l[i]];
                    s = e.alpha
                }
                if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
                var d;
                for (i = 0; i < t.length; i++) d = Math.max(0, Math.min(a[t][i], o[t][i])), o[t][i] = Math.round(d);
                for (var c in r) c !== t && (o[c] = n[t][c](o[t]));
                return !0
            }, r.prototype.setSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, r.prototype.setChannel = function(t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
            }, "undefined" != typeof window && (window.Color = r), e.exports = r
        }, {
            2: 2,
            5: 5
        }],
        4: [function(t, e, i) {
            function n(t) {
                var e, i, n, o = t[0] / 255,
                    r = t[1] / 255,
                    a = t[2] / 255,
                    s = Math.min(o, r, a),
                    l = Math.max(o, r, a),
                    d = l - s;
                return l == s ? e = 0 : o == l ? e = (r - a) / d : r == l ? e = 2 + (a - o) / d : a == l && (e = 4 + (o - r) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), n = (s + l) / 2, i = l == s ? 0 : .5 >= n ? d / (l + s) : d / (2 - l - s), [e, 100 * i, 100 * n]
            }

            function o(t) {
                var e, i, n, o = t[0],
                    r = t[1],
                    a = t[2],
                    s = Math.min(o, r, a),
                    l = Math.max(o, r, a),
                    d = l - s;
                return i = 0 == l ? 0 : d / l * 1e3 / 10, l == s ? e = 0 : o == l ? e = (r - a) / d : r == l ? e = 2 + (a - o) / d : a == l && (e = 4 + (o - r) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), n = l / 255 * 1e3 / 10, [e, i, n]
            }

            function a(t) {
                var e = t[0],
                    i = t[1],
                    o = t[2],
                    r = n(t)[0],
                    a = 1 / 255 * Math.min(e, Math.min(i, o)),
                    o = 1 - 1 / 255 * Math.max(e, Math.max(i, o));
                return [r, 100 * a, 100 * o]
            }

            function s(t) {
                var e, i, n, o, r = t[0] / 255,
                    a = t[1] / 255,
                    s = t[2] / 255;
                return o = Math.min(1 - r, 1 - a, 1 - s), e = (1 - r - o) / (1 - o) || 0, i = (1 - a - o) / (1 - o) || 0, n = (1 - s - o) / (1 - o) || 0, [100 * e, 100 * i, 100 * n, 100 * o]
            }

            function l(t) {
                return Z[JSON.stringify(t)]
            }

            function d(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255;
                return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, [100 * (.4124 * e + .3576 * i + .1805 * n), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function c(t) {
                var e, i, n, o = d(t),
                    r = o[0],
                    a = o[1],
                    s = o[2];
                return r /= 95.047, a /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * a - 16, i = 500 * (r - a), n = 200 * (a - s), [e, i, n]
            }

            function u(t) {
                return N(c(t))
            }

            function h(t) {
                var e, i, n, o, r, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return r = 255 * l, [r, r, r];
                i = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - i, o = [0, 0, 0];
                for (var d = 0; 3 > d; d++) n = a + 1 / 3 * -(d - 1), 0 > n && n++, n > 1 && n--, r = 1 > 6 * n ? e + 6 * (i - e) * n : 1 > 2 * n ? i : 2 > 3 * n ? e + (i - e) * (2 / 3 - n) * 6 : e, o[d] = 255 * r;
                return o
            }

            function p(t) {
                var e, i, n = t[0],
                    o = t[1] / 100,
                    r = t[2] / 100;
                return 0 === r ? [0, 0, 0] : (r *= 2, o *= 1 >= r ? r : 2 - r, i = (r + o) / 2, e = 2 * o / (r + o), [n, 100 * e, 100 * i])
            }

            function f(t) {
                return a(h(t))
            }

            function m(t) {
                return s(h(t))
            }

            function v(t) {
                return l(h(t))
            }

            function y(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    o = Math.floor(e) % 6,
                    r = e - Math.floor(e),
                    a = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * r),
                    l = 255 * n * (1 - i * (1 - r)),
                    n = 255 * n;
                switch (o) {
                    case 0:
                        return [n, l, a];
                    case 1:
                        return [s, n, a];
                    case 2:
                        return [a, n, l];
                    case 3:
                        return [a, s, n];
                    case 4:
                        return [l, a, n];
                    case 5:
                        return [n, a, s]
                }
            }

            function x(t) {
                var e, i, n = t[0],
                    o = t[1] / 100,
                    r = t[2] / 100;
                return i = (2 - o) * r, e = o * r, e /= 1 >= i ? i : 2 - i, e = e || 0, i /= 2, [n, 100 * e, 100 * i]
            }

            function w(t) {
                return a(y(t))
            }

            function k(t) {
                return s(y(t))
            }

            function S(t) {
                return l(y(t))
            }

            function C(t) {
                var e, i, n, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    d = s + l;
                switch (d > 1 && (s /= d, l /= d), e = Math.floor(6 * a), i = 1 - l, n = 6 * a - e, 0 != (1 & e) && (n = 1 - n), o = s + n * (i - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = i,
                    g = o,
                    b = s;
                    break;
                    case 1:
                            r = o,
                        g = i,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = i,
                        b = o;
                        break;
                    case 3:
                            r = s,
                        g = o,
                        b = i;
                        break;
                    case 4:
                            r = o,
                        g = s,
                        b = i;
                        break;
                    case 5:
                            r = i,
                        g = s,
                        b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function T(t) {
                return n(C(t))
            }

            function I(t) {
                return o(C(t))
            }

            function _(t) {
                return s(C(t))
            }

            function M(t) {
                return l(C(t))
            }

            function A(t) {
                var e, i, n, o = t[0] / 100,
                    r = t[1] / 100,
                    a = t[2] / 100,
                    s = t[3] / 100;
                return e = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, r * (1 - s) + s), n = 1 - Math.min(1, a * (1 - s) + s), [255 * e, 255 * i, 255 * n]
            }

            function P(t) {
                return n(A(t))
            }

            function E(t) {
                return o(A(t))
            }

            function D(t) {
                return a(A(t))
            }

            function O(t) {
                return l(A(t))
            }

            function L(t) {
                var e, i, n, o = t[0] / 100,
                    r = t[1] / 100,
                    a = t[2] / 100;
                return e = 3.2406 * o + -1.5372 * r + a * -.4986, i = o * -.9689 + 1.8758 * r + .0415 * a, n = .0557 * o + r * -.204 + 1.057 * a, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), n = Math.min(Math.max(0, n), 1), [255 * e, 255 * i, 255 * n]
            }

            function z(t) {
                var e, i, n, o = t[0],
                    r = t[1],
                    a = t[2];
                return o /= 95.047, r /= 100, a /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = 116 * r - 16, i = 500 * (o - r), n = 200 * (r - a), [e, i, n]
            }

            function F(t) {
                return N(z(t))
            }

            function R(t) {
                var e, i, n, o, r = t[0],
                    a = t[1],
                    s = t[2];
                return 8 >= r ? (i = 100 * r / 903.3, o = i / 100 * 7.787 + 16 / 116) : (i = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(i / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), n = .008859 >= n / 108.883 ? n = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3), [e, i, n]
            }

            function N(t) {
                var e, i, n, o = t[0],
                    r = t[1],
                    a = t[2];
                return e = Math.atan2(a, r), i = 360 * e / 2 / Math.PI, 0 > i && (i += 360), n = Math.sqrt(r * r + a * a), [o, n, i]
            }

            function B(t) {
                return L(R(t))
            }

            function W(t) {
                var e, i, n, o = t[0],
                    r = t[1];
                return n = t[2] / 360 * 2 * Math.PI, e = r * Math.cos(n), i = r * Math.sin(n), [o, e, i]
            }

            function j(t) {
                return R(W(t))
            }

            function H(t) {
                return B(W(t))
            }

            function V(t) {
                return K[t]
            }

            function U(t) {
                return n(V(t))
            }

            function q(t) {
                return o(V(t))
            }

            function Y(t) {
                return a(V(t))
            }

            function Q(t) {
                return s(V(t))
            }

            function X(t) {
                return c(V(t))
            }

            function G(t) {
                return d(V(t))
            }
            e.exports = {
                rgb2hsl: n,
                rgb2hsv: o,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: d,
                rgb2lab: c,
                rgb2lch: u,
                hsl2rgb: h,
                hsl2hsv: p,
                hsl2hwb: f,
                hsl2cmyk: m,
                hsl2keyword: v,
                hsv2rgb: y,
                hsv2hsl: x,
                hsv2hwb: w,
                hsv2cmyk: k,
                hsv2keyword: S,
                hwb2rgb: C,
                hwb2hsl: T,
                hwb2hsv: I,
                hwb2cmyk: _,
                hwb2keyword: M,
                cmyk2rgb: A,
                cmyk2hsl: P,
                cmyk2hsv: E,
                cmyk2hwb: D,
                cmyk2keyword: O,
                keyword2rgb: V,
                keyword2hsl: U,
                keyword2hsv: q,
                keyword2hwb: Y,
                keyword2cmyk: Q,
                keyword2lab: X,
                keyword2xyz: G,
                xyz2rgb: L,
                xyz2lab: z,
                xyz2lch: F,
                lab2xyz: R,
                lab2rgb: B,
                lab2lch: N,
                lch2lab: W,
                lch2xyz: j,
                lch2rgb: H
            };
            var K = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                Z = {};
            for (var J in K) Z[JSON.stringify(K[J])] = J
        }, {}],
        5: [function(t, e, i) {
            var n = t(4),
                o = function() {
                    return new d
                };
            for (var r in n) {
                o[r + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(r);
                var a = /(\w+)2(\w+)/.exec(r),
                    s = a[1],
                    l = a[2];
                o[s] = o[s] || {}, o[s][l] = o[r] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
                        return i
                    }
                }(r)
            }
            var d = function() {
                this.convs = {}
            };
            d.prototype.routeSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, d.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, d.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        n = this.convs[i];
                    e = o[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                d.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = o
        }, {
            4: 4
        }],
        6: [function(t, e, i) {
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        7: [function(t, e, i) {
            var n = t(28)();
            t(26)(n), t(22)(n), t(25)(n), t(21)(n), t(23)(n), t(24)(n), t(29)(n), t(33)(n), t(31)(n), t(34)(n), t(32)(n), t(35)(n), t(30)(n), t(27)(n), t(36)(n), t(37)(n), t(38)(n), t(39)(n), t(40)(n), t(43)(n), t(41)(n), t(42)(n), t(44)(n), t(45)(n), t(46)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n), window.Chart = e.exports = n
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            8: 8,
            9: 9
        }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, i) {
                    return i.type = "bar", new t(e, i)
                }
            }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, i) {
                    return i.type = "bubble", new t(e, i)
                }
            }
        }, {}],
        10: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, i) {
                    return i.type = "doughnut", new t(e, i)
                }
            }
        }, {}],
        11: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, i) {
                    return i.type = "line", new t(e, i)
                }
            }
        }, {}],
        12: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, i) {
                    return i.type = "polarArea", new t(e, i)
                }
            }
        }, {}],
        13: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, i) {
                    return i.type = "radar", new t(e, i)
                }
            }
        }, {}],
        14: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-1"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                };
                t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) {
                    return i.type = "scatter", new t(e, i)
                }
            }
        }, {}],
        15: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }, t.controllers.bar = t.DatasetController.extend({
                    dataElementType: t.elements.Rectangle,
                    initialize: function(e, i) {
                        t.DatasetController.prototype.initialize.call(this, e, i), this.getMeta().bar = !0
                    },
                    getBarCount: function() {
                        var t = this,
                            i = 0;
                        return e.each(t.chart.data.datasets, function(e, n) {
                            t.chart.getDatasetMeta(n).bar && t.chart.isDatasetVisible(n) && ++i
                        }, t), i
                    },
                    update: function(t) {
                        var i = this;
                        e.each(i.getMeta().data, function(e, n) {
                            i.updateElement(e, n, t)
                        }, i)
                    },
                    updateElement: function(t, i, n) {
                        var o = this,
                            r = o.getMeta(),
                            a = o.getScaleForId(r.xAxisID),
                            s = o.getScaleForId(r.yAxisID),
                            l = s.getBasePixel(),
                            d = o.chart.options.elements.rectangle,
                            c = t.custom || {},
                            u = o.getDataset();
                        t._xScale = a, t._yScale = s, t._datasetIndex = o.index, t._index = i;
                        var h = o.getRuler(i);
                        t._model = {
                            x: o.calculateBarX(i, o.index, h),
                            y: n ? l : o.calculateBarY(i, o.index),
                            label: o.chart.data.labels[i],
                            datasetLabel: u.label,
                            base: n ? l : o.calculateBarBase(o.index, i),
                            width: o.calculateBarWidth(h),
                            backgroundColor: c.backgroundColor ? c.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, i, d.backgroundColor),
                            borderSkipped: c.borderSkipped ? c.borderSkipped : d.borderSkipped,
                            borderColor: c.borderColor ? c.borderColor : e.getValueAtIndexOrDefault(u.borderColor, i, d.borderColor),
                            borderWidth: c.borderWidth ? c.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, i, d.borderWidth)
                        }, t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.yAxisID),
                            r = 0;
                        if (o.options.stacked) {
                            for (var a = i.chart, s = a.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                                var c = s[d],
                                    u = a.getDatasetMeta(d);
                                if (u.bar && u.yAxisID === o.id && a.isDatasetVisible(d)) {
                                    var h = Number(c.data[e]);
                                    r += 0 > l ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return o.getPixelForValue(r)
                        }
                        return o.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.xAxisID),
                            r = i.getBarCount();
                        e = "category" === o.options.type ? o.getPixelForTick(t + 1) - o.getPixelForTick(t) : o.width / o.ticks.length;
                        var a = e * o.options.categoryPercentage,
                            s = (e - e * o.options.categoryPercentage) / 2,
                            l = a / r;
                        if (o.ticks.length !== i.chart.data.labels.length) {
                            l *= o.ticks.length / i.chart.data.labels.length
                        }
                        return {
                            datasetCount: r,
                            tickWidth: e,
                            categoryWidth: a,
                            categorySpacing: s,
                            fullBarWidth: l,
                            barWidth: l * o.options.barPercentage,
                            barSpacing: l - l * o.options.barPercentage
                        }
                    },
                    calculateBarWidth: function(t) {
                        var e = this.getScaleForId(this.getMeta().xAxisID);
                        return e.options.barThickness ? e.options.barThickness : e.options.stacked ? t.categoryWidth : t.barWidth
                    },
                    getBarIndex: function(t) {
                        var e, i, n = 0;
                        for (i = 0; t > i; ++i) e = this.chart.getDatasetMeta(i), e.bar && this.chart.isDatasetVisible(i) && ++n;
                        return n
                    },
                    calculateBarX: function(t, e, i) {
                        var n = this,
                            o = n.getMeta(),
                            r = n.getScaleForId(o.xAxisID),
                            a = n.getBarIndex(e),
                            s = r.getPixelForValue(null, t, e, n.chart.isCombo);
                        return s -= n.chart.isCombo ? i.tickWidth / 2 : 0, r.options.stacked ? s + i.categoryWidth / 2 + i.categorySpacing : s + i.barWidth / 2 + i.categorySpacing + i.barWidth * a + i.barSpacing / 2 + i.barSpacing * a
                    },
                    calculateBarY: function(t, e) {
                        var i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.yAxisID),
                            r = Number(i.getDataset().data[t]);
                        if (o.options.stacked) {
                            for (var a = 0, s = 0, l = 0; e > l; l++) {
                                var d = i.chart.data.datasets[l],
                                    c = i.chart.getDatasetMeta(l);
                                if (c.bar && c.yAxisID === o.id && i.chart.isDatasetVisible(l)) {
                                    var u = Number(d.data[t]);
                                    0 > u ? s += u || 0 : a += u || 0
                                }
                            }
                            return 0 > r ? o.getPixelForValue(s + r) : o.getPixelForValue(a + r)
                        }
                        return o.getPixelForValue(r)
                    },
                    draw: function(t) {
                        var e, i, n = this,
                            o = t || 1,
                            r = n.getMeta().data,
                            a = n.getDataset();
                        for (e = 0, i = r.length; i > e; ++e) {
                            var s = a.data[e];
                            null === s || void 0 === s || isNaN(s) || r[e].transition(o).draw()
                        }
                    },
                    setHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            o = t.custom || {},
                            r = t._model;
                        r.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, n, e.getHoverColor(r.backgroundColor)), r.borderColor = o.hoverBorderColor ? o.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, n, e.getHoverColor(r.borderColor)), r.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            o = t.custom || {},
                            r = t._model,
                            a = this.chart.options.elements.rectangle;
                        r.backgroundColor = o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, n, a.backgroundColor), r.borderColor = o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(i.borderColor, n, a.borderColor), r.borderWidth = o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, n, a.borderWidth)
                    }
                }), t.defaults.horizontalBar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(t, e) {
                                var i = "";
                                return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                            },
                            label: function(t, e) {
                                return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                            }
                        }
                    }
                }, t.controllers.horizontalBar = t.controllers.bar.extend({
                    updateElement: function(t, i, n) {
                        var o = this,
                            r = o.getMeta(),
                            a = o.getScaleForId(r.xAxisID),
                            s = o.getScaleForId(r.yAxisID),
                            l = a.getBasePixel(),
                            d = t.custom || {},
                            c = o.getDataset(),
                            u = o.chart.options.elements.rectangle;
                        t._xScale = a, t._yScale = s, t._datasetIndex = o.index, t._index = i;
                        var h = o.getRuler(i);
                        t._model = {
                            x: n ? l : o.calculateBarX(i, o.index),
                            y: o.calculateBarY(i, o.index, h),
                            label: o.chart.data.labels[i],
                            datasetLabel: c.label,
                            base: n ? l : o.calculateBarBase(o.index, i),
                            height: o.calculateBarHeight(h),
                            backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, i, u.backgroundColor),
                            borderSkipped: d.borderSkipped ? d.borderSkipped : u.borderSkipped,
                            borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(c.borderColor, i, u.borderColor),
                            borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, i, u.borderWidth)
                        }, t.draw = function() {
                            function t(t) {
                                return l[(c + t) % 4]
                            }
                            var e = this._chart.ctx,
                                i = this._view,
                                n = i.height / 2,
                                o = i.y - n,
                                r = i.y + n,
                                a = i.base - (i.base - i.x),
                                s = i.borderWidth / 2;
                            i.borderWidth && (o += s, r -= s, a += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                            var l = [
                                    [i.base, r],
                                    [i.base, o],
                                    [a, o],
                                    [a, r]
                                ],
                                d = ["bottom", "left", "top", "right"],
                                c = d.indexOf(i.borderSkipped, 0); - 1 === c && (c = 0), e.moveTo.apply(e, t(0));
                            for (var u = 1; 4 > u; u++) e.lineTo.apply(e, t(u));
                            e.fill(), i.borderWidth && e.stroke()
                        }, t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.xAxisID),
                            r = 0;
                        if (o.options.stacked) {
                            for (var a = i.chart, s = a.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                                var c = s[d],
                                    u = a.getDatasetMeta(d);
                                if (u.bar && u.xAxisID === o.id && a.isDatasetVisible(d)) {
                                    var h = Number(c.data[e]);
                                    r += 0 > l ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return o.getPixelForValue(r)
                        }
                        return o.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.yAxisID),
                            r = i.getBarCount();
                        e = "category" === o.options.type ? o.getPixelForTick(t + 1) - o.getPixelForTick(t) : o.width / o.ticks.length;
                        var a = e * o.options.categoryPercentage,
                            s = (e - e * o.options.categoryPercentage) / 2,
                            l = a / r;
                        if (o.ticks.length !== i.chart.data.labels.length) {
                            l *= o.ticks.length / i.chart.data.labels.length
                        }
                        return {
                            datasetCount: r,
                            tickHeight: e,
                            categoryHeight: a,
                            categorySpacing: s,
                            fullBarHeight: l,
                            barHeight: l * o.options.barPercentage,
                            barSpacing: l - l * o.options.barPercentage
                        }
                    },
                    calculateBarHeight: function(t) {
                        var e = this,
                            i = e.getScaleForId(e.getMeta().yAxisID);
                        return i.options.barThickness ? i.options.barThickness : i.options.stacked ? t.categoryHeight : t.barHeight
                    },
                    calculateBarX: function(t, e) {
                        var i = this,
                            n = i.getMeta(),
                            o = i.getScaleForId(n.xAxisID),
                            r = Number(i.getDataset().data[t]);
                        if (o.options.stacked) {
                            for (var a = 0, s = 0, l = 0; e > l; l++) {
                                var d = i.chart.data.datasets[l],
                                    c = i.chart.getDatasetMeta(l);
                                if (c.bar && c.xAxisID === o.id && i.chart.isDatasetVisible(l)) {
                                    var u = Number(d.data[t]);
                                    0 > u ? s += u || 0 : a += u || 0
                                }
                            }
                            return 0 > r ? o.getPixelForValue(s + r) : o.getPixelForValue(a + r)
                        }
                        return o.getPixelForValue(r)
                    },
                    calculateBarY: function(t, e, i) {
                        var n = this,
                            o = n.getMeta(),
                            r = n.getScaleForId(o.yAxisID),
                            a = n.getBarIndex(e),
                            s = r.getPixelForValue(null, t, e, n.chart.isCombo);
                        return s -= n.chart.isCombo ? i.tickHeight / 2 : 0, r.options.stacked ? s + i.categoryHeight / 2 + i.categorySpacing : s + i.barHeight / 2 + i.categorySpacing + i.barHeight * a + i.barSpacing / 2 + i.barSpacing * a
                    }
                })
            }
        }, {}],
        16: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "",
                                    n = e.datasets[t.datasetIndex].data[t.index];
                                return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                            }
                        }
                    }
                }, t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var i = this,
                            n = i.getMeta(),
                            o = n.data;
                        e.each(o, function(e, n) {
                            i.updateElement(e, n, t)
                        })
                    },
                    updateElement: function(i, n, o) {
                        var r = this,
                            a = r.getMeta(),
                            s = r.getScaleForId(a.xAxisID),
                            l = r.getScaleForId(a.yAxisID),
                            d = i.custom || {},
                            c = r.getDataset(),
                            u = c.data[n],
                            h = r.chart.options.elements.point,
                            p = r.index;
                        e.extend(i, {
                            _xScale: s,
                            _yScale: l,
                            _datasetIndex: p,
                            _index: n,
                            _model: {
                                x: o ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof u ? u : NaN, n, p, r.chart.isCombo),
                                y: o ? l.getBasePixel() : l.getPixelForValue(u, n, p),
                                radius: o ? 0 : d.radius ? d.radius : r.getRadius(u),
                                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(c.hitRadius, n, h.hitRadius)
                            }
                        }), t.DatasetController.prototype.removeHoverStyle.call(r, i, h);
                        var f = i._model;
                        f.skip = d.skip ? d.skip : isNaN(f.x) || isNaN(f.y), i.pivot()
                    },
                    getRadius: function(t) {
                        return t.r || this.chart.options.elements.point.radius
                    },
                    setHoverStyle: function(i) {
                        var n = this;
                        t.DatasetController.prototype.setHoverStyle.call(n, i);
                        var o = n.chart.data.datasets[i._datasetIndex],
                            r = i._index,
                            a = i.custom || {};
                        i._model.radius = a.hoverRadius ? a.hoverRadius : e.getValueAtIndexOrDefault(o.hoverRadius, r, n.chart.options.elements.point.hoverRadius) + n.getRadius(o.data[r])
                    },
                    removeHoverStyle: function(e) {
                        var i = this;
                        t.DatasetController.prototype.removeHoverStyle.call(i, e, i.chart.options.elements.point);
                        var n = i.chart.data.datasets[e._datasetIndex].data[e._index],
                            o = e.custom || {};
                        e._model.radius = o.radius ? o.radius : i.getRadius(n)
                    }
                })
            }
        }, {}],
        17: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults;
                i.doughnut = {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    aspectRatio: 1,
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var i = t.data,
                            n = i.datasets,
                            o = i.labels;
                        if (n.length)
                            for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var i = t.data;
                                return i.labels.length && i.datasets.length ? i.labels.map(function(n, o) {
                                    var r = t.getDatasetMeta(0),
                                        a = i.datasets[0],
                                        s = r.data[o],
                                        l = s && s.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        c = t.options.elements.arc;
                                    return {
                                        text: n,
                                        fillStyle: l.backgroundColor ? l.backgroundColor : d(a.backgroundColor, o, c.backgroundColor),
                                        strokeStyle: l.borderColor ? l.borderColor : d(a.borderColor, o, c.borderColor),
                                        lineWidth: l.borderWidth ? l.borderWidth : d(a.borderWidth, o, c.borderWidth),
                                        hidden: isNaN(a.data[o]) || r.data[o].hidden,
                                        index: o
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i, n, o, r = e.index,
                                a = this.chart;
                            for (i = 0, n = (a.data.datasets || []).length; n > i; ++i) o = a.getDatasetMeta(i), o.data[r] && (o.data[r].hidden = !o.data[r].hidden);
                            a.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: Math.PI * -.5,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, i) {
                                var n = i.labels[t.index],
                                    o = ": " + i.datasets[t.datasetIndex].data[t.index];
                                return e.isArray(n) ? (n = n.slice(), n[0] += o) : n += o, n
                            }
                        }
                    }
                }, i.pie = e.clone(i.doughnut), e.extend(i.pie, {
                    cutoutPercentage: 0
                }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, i = 0; t > i; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function(t) {
                        var i = this,
                            n = i.chart,
                            o = n.chartArea,
                            r = n.options,
                            a = r.elements.arc,
                            s = o.right - o.left - a.borderWidth,
                            l = o.bottom - o.top - a.borderWidth,
                            d = Math.min(s, l),
                            c = {
                                x: 0,
                                y: 0
                            },
                            u = i.getMeta(),
                            h = r.cutoutPercentage,
                            p = r.circumference;
                        if (p < 2 * Math.PI) {
                            var f = r.rotation % (2 * Math.PI);
                            f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0);
                            var g = f + p,
                                m = {
                                    x: Math.cos(f),
                                    y: Math.sin(f)
                                },
                                v = {
                                    x: Math.cos(g),
                                    y: Math.sin(g)
                                },
                                y = 0 >= f && g >= 0 || f <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = f <= .5 * Math.PI && .5 * Math.PI <= g || f <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                x = f <= -Math.PI && -Math.PI <= g || f <= Math.PI && Math.PI <= g,
                                w = f <= .5 * -Math.PI && .5 * -Math.PI <= g || f <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                k = h / 100,
                                S = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                    y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                },
                                C = {
                                    x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                    y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                },
                                T = {
                                    width: .5 * (C.x - S.x),
                                    height: .5 * (C.y - S.y)
                                };
                            d = Math.min(s / T.width, l / T.height), c = {
                                x: (C.x + S.x) * -.5,
                                y: (C.y + S.y) * -.5
                            }
                        }
                        n.borderWidth = i.getMaxBorderWidth(u.data), n.outerRadius = Math.max((d - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, u.total = i.calculateTotal(), i.outerRadius = n.outerRadius - n.radiusLength * i.getRingIndex(i.index), i.innerRadius = i.outerRadius - n.radiusLength, e.each(u.data, function(e, n) {
                            i.updateElement(e, n, t)
                        })
                    },
                    updateElement: function(t, i, n) {
                        var o = this,
                            r = o.chart,
                            a = r.chartArea,
                            s = r.options,
                            l = s.animation,
                            d = (a.left + a.right) / 2,
                            c = (a.top + a.bottom) / 2,
                            u = s.rotation,
                            h = s.rotation,
                            p = o.getDataset(),
                            f = n && l.animateRotate ? 0 : t.hidden ? 0 : o.calculateCircumference(p.data[i]) * (s.circumference / (2 * Math.PI)),
                            g = n && l.animateScale ? 0 : o.innerRadius,
                            m = n && l.animateScale ? 0 : o.outerRadius,
                            v = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex: o.index,
                            _index: i,
                            _model: {
                                x: d + r.offsetX,
                                y: c + r.offsetY,
                                startAngle: u,
                                endAngle: h,
                                circumference: f,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(p.label, i, r.data.labels[i])
                            }
                        });
                        var y = t._model;
                        this.removeHoverStyle(t), n && l.animateRotate || (y.startAngle = 0 === i ? s.rotation : o.getMeta().data[i - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, i = this.getDataset(),
                            n = this.getMeta(),
                            o = 0;
                        return e.each(n.data, function(e, n) {
                            t = i.data[n], isNaN(t) || e.hidden || (o += Math.abs(t))
                        }), o
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, i, n = 0, o = this.index, r = t.length, a = 0; r > a; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, i = t[a]._chart ? t[a]._chart.config.data.datasets[o].hoverBorderWidth : 0, n = e > n ? e : n, n = i > n ? i : n;
                        return n
                    }
                })
            }
        }, {}],
        18: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return i.getValueOrDefault(t.showLine, e.showLines)
                }
                var i = t.helpers;
                t.defaults.line = {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                }, t.controllers.line = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var n, o, r, a = this,
                            s = a.getMeta(),
                            l = s.dataset,
                            d = s.data || [],
                            c = a.chart.options,
                            u = c.elements.line,
                            h = a.getScaleForId(s.yAxisID),
                            p = a.getDataset(),
                            f = e(p, c);
                        for (f && (r = l.custom || {}, void 0 !== p.tension && void 0 === p.lineTension && (p.lineTension = p.tension), l._scale = h, l._datasetIndex = a.index, l._children = d, l._model = {
                                spanGaps: p.spanGaps ? p.spanGaps : c.spanGaps,
                                tension: r.tension ? r.tension : i.getValueOrDefault(p.lineTension, u.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : p.backgroundColor || u.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : p.borderWidth || u.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : p.borderColor || u.borderColor,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : p.borderCapStyle || u.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : p.borderDash || u.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : p.borderDashOffset || u.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : p.borderJoinStyle || u.borderJoinStyle,
                                fill: r.fill ? r.fill : void 0 !== p.fill ? p.fill : u.fill,
                                steppedLine: r.steppedLine ? r.steppedLine : i.getValueOrDefault(p.steppedLine, u.stepped),
                                cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : i.getValueOrDefault(p.cubicInterpolationMode, u.cubicInterpolationMode),
                                scaleTop: h.top,
                                scaleBottom: h.bottom,
                                scaleZero: h.getBasePixel()
                            }, l.pivot()), n = 0, o = d.length; o > n; ++n) a.updateElement(d[n], n, t);
                        for (f && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, o = d.length; o > n; ++n) d[n].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var n = this.chart.options.elements.point.backgroundColor,
                            o = this.getDataset(),
                            r = t.custom || {};
                        return r.backgroundColor ? n = r.backgroundColor : o.pointBackgroundColor ? n = i.getValueAtIndexOrDefault(o.pointBackgroundColor, e, n) : o.backgroundColor && (n = o.backgroundColor), n
                    },
                    getPointBorderColor: function(t, e) {
                        var n = this.chart.options.elements.point.borderColor,
                            o = this.getDataset(),
                            r = t.custom || {};
                        return r.borderColor ? n = r.borderColor : o.pointBorderColor ? n = i.getValueAtIndexOrDefault(o.pointBorderColor, e, n) : o.borderColor && (n = o.borderColor), n
                    },
                    getPointBorderWidth: function(t, e) {
                        var n = this.chart.options.elements.point.borderWidth,
                            o = this.getDataset(),
                            r = t.custom || {};
                        return r.borderWidth ? n = r.borderWidth : o.pointBorderWidth ? n = i.getValueAtIndexOrDefault(o.pointBorderWidth, e, n) : o.borderWidth && (n = o.borderWidth), n
                    },
                    updateElement: function(t, e, n) {
                        var o, r, a = this,
                            s = a.getMeta(),
                            l = t.custom || {},
                            d = a.getDataset(),
                            c = a.index,
                            u = d.data[e],
                            h = a.getScaleForId(s.yAxisID),
                            p = a.getScaleForId(s.xAxisID),
                            f = a.chart.options.elements.point,
                            g = a.chart.data.labels || [],
                            m = 1 === g.length || 1 === d.data.length || a.chart.isCombo;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), o = p.getPixelForValue("object" == typeof u ? u : NaN, e, c, m), r = n ? h.getBasePixel() : a.calculatePointY(u, e, c), t._xScale = p, t._yScale = h, t._datasetIndex = c, t._index = e, t._model = {
                            x: o,
                            y: r,
                            skip: l.skip || isNaN(o) || isNaN(r),
                            radius: l.radius || i.getValueAtIndexOrDefault(d.pointRadius, e, f.radius),
                            pointStyle: l.pointStyle || i.getValueAtIndexOrDefault(d.pointStyle, e, f.pointStyle),
                            backgroundColor: a.getPointBackgroundColor(t, e),
                            borderColor: a.getPointBorderColor(t, e),
                            borderWidth: a.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || i.getValueAtIndexOrDefault(d.pointHitRadius, e, f.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, i) {
                        var n, o, r, a = this,
                            s = a.chart,
                            l = a.getMeta(),
                            d = a.getScaleForId(l.yAxisID),
                            c = 0,
                            u = 0;
                        if (d.options.stacked) {
                            for (n = 0; i > n; n++)
                                if (o = s.data.datasets[n], r = s.getDatasetMeta(n), "line" === r.type && r.yAxisID === d.id && s.isDatasetVisible(n)) {
                                    var h = Number(d.getRightValue(o.data[e]));
                                    0 > h ? u += h || 0 : c += h || 0
                                }
                            var p = Number(d.getRightValue(t));
                            return 0 > p ? d.getPixelForValue(u + p) : d.getPixelForValue(c + p)
                        }
                        return d.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        function t(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        var e, n, o, r, a, s = this,
                            l = s.getMeta(),
                            d = s.chart.chartArea,
                            c = l.data || [];
                        if (l.dataset._model.spanGaps && (c = c.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === l.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(c);
                        else
                            for (e = 0, n = c.length; n > e; ++e) o = c[e], r = o._model, a = i.splineCurve(i.previousItem(c, e)._model, r, i.nextItem(c, e)._model, l.dataset._model.tension), r.controlPointPreviousX = a.previous.x, r.controlPointPreviousY = a.previous.y, r.controlPointNextX = a.next.x, r.controlPointNextY = a.next.y;
                        if (s.chart.options.elements.line.capBezierPoints)
                            for (e = 0, n = c.length; n > e; ++e) r = c[e]._model, r.controlPointPreviousX = t(r.controlPointPreviousX, d.left, d.right), r.controlPointPreviousY = t(r.controlPointPreviousY, d.top, d.bottom), r.controlPointNextX = t(r.controlPointNextX, d.left, d.right), r.controlPointNextY = t(r.controlPointNextY, d.top, d.bottom)
                    },
                    draw: function(t) {
                        var i, n, o = this,
                            r = o.getMeta(),
                            a = r.data || [],
                            s = t || 1;
                        for (i = 0, n = a.length; n > i; ++i) a[i].transition(s);
                        for (e(o.getDataset(), o.chart.options) && r.dataset.transition(s).draw(), i = 0, n = a.length; n > i; ++i) a[i].draw()
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            o = t.custom || {},
                            r = t._model;
                        r.radius = o.hoverRadius || i.getValueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = o.hoverBackgroundColor || i.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, n, i.getHoverColor(r.backgroundColor)), r.borderColor = o.hoverBorderColor || i.getValueAtIndexOrDefault(e.pointHoverBorderColor, n, i.getHoverColor(r.borderColor)), r.borderWidth = o.hoverBorderWidth || i.getValueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            n = e.chart.data.datasets[t._datasetIndex],
                            o = t._index,
                            r = t.custom || {},
                            a = t._model;
                        void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), a.radius = r.radius || i.getValueAtIndexOrDefault(n.pointRadius, o, e.chart.options.elements.point.radius), a.backgroundColor = e.getPointBackgroundColor(t, o), a.borderColor = e.getPointBorderColor(t, o), a.borderWidth = e.getPointBorderWidth(t, o)
                    }
                })
            }
        }, {}],
        19: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale: {
                        type: "radialLinear",
                        lineArc: !0,
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    aspectRatio: 1,
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var i = t.data,
                            n = i.datasets,
                            o = i.labels;
                        if (n.length)
                            for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var i = t.data;
                                return i.labels.length && i.datasets.length ? i.labels.map(function(n, o) {
                                    var r = t.getDatasetMeta(0),
                                        a = i.datasets[0],
                                        s = r.data[o],
                                        l = s.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        c = t.options.elements.arc;
                                    return {
                                        text: n,
                                        fillStyle: l.backgroundColor ? l.backgroundColor : d(a.backgroundColor, o, c.backgroundColor),
                                        strokeStyle: l.borderColor ? l.borderColor : d(a.borderColor, o, c.borderColor),
                                        lineWidth: l.borderWidth ? l.borderWidth : d(a.borderWidth, o, c.borderWidth),
                                        hidden: isNaN(a.data[o]) || r.data[o].hidden,
                                        index: o
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i, n, o, r = e.index,
                                a = this.chart;
                            for (i = 0, n = (a.data.datasets || []).length; n > i; ++i) o = a.getDatasetMeta(i), o.data[r].hidden = !o.data[r].hidden;
                            a.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                }, t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    update: function(t) {
                        var i = this,
                            n = i.chart,
                            o = n.chartArea,
                            r = i.getMeta(),
                            a = n.options,
                            s = a.elements.arc,
                            l = Math.min(o.right - o.left, o.bottom - o.top);
                        n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(a.cutoutPercentage ? n.outerRadius / 100 * a.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), i.outerRadius = n.outerRadius - n.radiusLength * i.index, i.innerRadius = i.outerRadius - n.radiusLength, r.count = i.countVisibleElements(), e.each(r.data, function(e, n) {
                            i.updateElement(e, n, t)
                        })
                    },
                    updateElement: function(t, i, n) {
                        for (var o = this, r = o.chart, a = o.getDataset(), s = r.options, l = s.animation, d = r.scale, c = e.getValueAtIndexOrDefault, u = r.data.labels, h = o.calculateCircumference(a.data[i]), p = d.xCenter, f = d.yCenter, g = 0, m = o.getMeta(), v = 0; i > v; ++v) isNaN(a.data[v]) || m.data[v].hidden || ++g;
                        var y = s.startAngle,
                            b = t.hidden ? 0 : d.getDistanceFromCenterForValue(a.data[i]),
                            x = y + h * g,
                            w = x + (t.hidden ? 0 : h),
                            k = l.animateScale ? 0 : d.getDistanceFromCenterForValue(a.data[i]);
                        e.extend(t, {
                            _datasetIndex: o.index,
                            _index: i,
                            _scale: d,
                            _model: {
                                x: p,
                                y: f,
                                innerRadius: 0,
                                outerRadius: n ? k : b,
                                startAngle: n && l.animateRotate ? y : x,
                                endAngle: n && l.animateRotate ? y : w,
                                label: c(u, i, u[i])
                            }
                        }), o.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            i = this.getMeta(),
                            n = 0;
                        return e.each(i.data, function(e, i) {
                            isNaN(t.data[i]) || e.hidden || n++
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {}],
        20: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.radar = {
                    aspectRatio: 1,
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }, t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    linkScales: e.noop,
                    update: function(t) {
                        var i = this,
                            n = i.getMeta(),
                            o = n.dataset,
                            r = n.data,
                            a = o.custom || {},
                            s = i.getDataset(),
                            l = i.chart.options.elements.line,
                            d = i.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(n.dataset, {
                            _datasetIndex: i.index,
                            _children: r,
                            _loop: !0,
                            _model: {
                                tension: a.tension ? a.tension : e.getValueOrDefault(s.lineTension, l.tension),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                                fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                                scaleTop: d.top,
                                scaleBottom: d.bottom,
                                scaleZero: d.getBasePosition()
                            }
                        }), n.dataset.pivot(), e.each(r, function(e, n) {
                            i.updateElement(e, n, t)
                        }, i), i.updateBezierControlPoints()
                    },
                    updateElement: function(t, i, n) {
                        var o = this,
                            r = t.custom || {},
                            a = o.getDataset(),
                            s = o.chart.scale,
                            l = o.chart.options.elements.point,
                            d = s.getPointPositionForValue(i, a.data[i]);
                        e.extend(t, {
                            _datasetIndex: o.index,
                            _index: i,
                            _scale: s,
                            _model: {
                                x: n ? s.xCenter : d.x,
                                y: n ? s.yCenter : d.y,
                                tension: r.tension ? r.tension : e.getValueOrDefault(a.tension, o.chart.options.elements.line.tension),
                                radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(a.pointRadius, i, l.radius),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, i, l.backgroundColor),
                                borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, i, l.borderColor),
                                borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, i, l.borderWidth),
                                pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(a.pointStyle, i, l.pointStyle),
                                hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(a.hitRadius, i, l.hitRadius)
                            }
                        }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            i = this.getMeta();
                        e.each(i.data, function(n, o) {
                            var r = n._model,
                                a = e.splineCurve(e.previousItem(i.data, o, !0)._model, r, e.nextItem(i.data, o, !0)._model, r.tension);
                            r.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), n.pivot()
                        })
                    },
                    draw: function(t) {
                        var i = this.getMeta(),
                            n = t || 1;
                        e.each(i.data, function(t) {
                            t.transition(n)
                        }), i.dataset.transition(n).draw(), e.each(i.data, function(t) {
                            t.draw()
                        })
                    },
                    setHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            o = t._index,
                            r = t._model;
                        r.radius = n.hoverRadius ? n.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, o, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, o, e.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, o, e.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, o, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            o = t._index,
                            r = t._model,
                            a = this.chart.options.elements.point;
                        r.radius = n.radius ? n.radius : e.getValueAtIndexOrDefault(i.radius, o, a.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(i.pointBackgroundColor, o, a.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(i.pointBorderColor, o, a.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(i.pointBorderWidth, o, a.borderWidth)
                    }
                })
            }
        }, {}],
        21: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: e.noop,
                    onComplete: e.noop
                }, t.Animation = t.Element.extend({
                    currentStep: null,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, i, n) {
                        var o = this;
                        n || (t.animating = !0);
                        for (var r = 0; r < o.animations.length; ++r)
                            if (o.animations[r].chartInstance === t) return void(o.animations[r].animationObject = e);
                        o.animations.push({
                            chartInstance: t,
                            animationObject: e
                        }), 1 === o.animations.length && o.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var i = e.findIndex(this.animations, function(e) {
                            return e.chartInstance === t
                        }); - 1 !== i && (this.animations.splice(i, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            i = 0;
                        t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
                        for (var n = 0; n < t.animations.length;) null === t.animations[n].animationObject.currentStep && (t.animations[n].animationObject.currentStep = 0), t.animations[n].animationObject.currentStep += 1 + i, t.animations[n].animationObject.currentStep > t.animations[n].animationObject.numSteps && (t.animations[n].animationObject.currentStep = t.animations[n].animationObject.numSteps), t.animations[n].animationObject.render(t.animations[n].chartInstance, t.animations[n].animationObject), t.animations[n].animationObject.onAnimationProgress && t.animations[n].animationObject.onAnimationProgress.call && t.animations[n].animationObject.onAnimationProgress.call(t.animations[n].chartInstance, t.animations[n]), t.animations[n].animationObject.currentStep === t.animations[n].animationObject.numSteps ? (t.animations[n].animationObject.onAnimationComplete && t.animations[n].animationObject.onAnimationComplete.call && t.animations[n].animationObject.onAnimationComplete.call(t.animations[n].chartInstance, t.animations[n]), t.animations[n].chartInstance.animating = !1, t.animations.splice(n, 1)) : ++n;
                        var o = Date.now(),
                            r = (o - e) / t.frameDuration;
                        t.dropFrames += r, t.animations.length > 0 && t.requestAnimationFrame()
                    }
                }
            }
        }, {}],
        22: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                (t.canvasHelpers = {}).drawPoint = function(t, e, i, n, o) {
                    var r, a, s, l, d, c;
                    if ("object" == typeof e && ("[object HTMLImageElement]" === (r = e.toString()) || "[object HTMLCanvasElement]" === r)) return void t.drawImage(e, n - e.width / 2, o - e.height / 2);
                    if (!(isNaN(i) || 0 >= i)) {
                        switch (e) {
                            default: t.beginPath(),
                            t.arc(n, o, i, 0, 2 * Math.PI),
                            t.closePath(),
                            t.fill();
                            break;
                            case "triangle":
                                    t.beginPath(),
                                a = 3 * i / Math.sqrt(3),
                                d = a * Math.sqrt(3) / 2,
                                t.moveTo(n - a / 2, o + d / 3),
                                t.lineTo(n + a / 2, o + d / 3),
                                t.lineTo(n, o - 2 * d / 3),
                                t.closePath(),
                                t.fill();
                                break;
                            case "rect":
                                    c = 1 / Math.SQRT2 * i,
                                t.beginPath(),
                                t.fillRect(n - c, o - c, 2 * c, 2 * c),
                                t.strokeRect(n - c, o - c, 2 * c, 2 * c);
                                break;
                            case "rectRot":
                                    c = 1 / Math.SQRT2 * i,
                                t.beginPath(),
                                t.moveTo(n - c, o),
                                t.lineTo(n, o + c),
                                t.lineTo(n + c, o),
                                t.lineTo(n, o - c),
                                t.closePath(),
                                t.fill();
                                break;
                            case "cross":
                                    t.beginPath(),
                                t.moveTo(n, o + i),
                                t.lineTo(n, o - i),
                                t.moveTo(n - i, o),
                                t.lineTo(n + i, o),
                                t.closePath();
                                break;
                            case "crossRot":
                                    t.beginPath(),
                                s = Math.cos(Math.PI / 4) * i,
                                l = Math.sin(Math.PI / 4) * i,
                                t.moveTo(n - s, o - l),
                                t.lineTo(n + s, o + l),
                                t.moveTo(n - s, o + l),
                                t.lineTo(n + s, o - l),
                                t.closePath();
                                break;
                            case "star":
                                    t.beginPath(),
                                t.moveTo(n, o + i),
                                t.lineTo(n, o - i),
                                t.moveTo(n - i, o),
                                t.lineTo(n + i, o),
                                s = Math.cos(Math.PI / 4) * i,
                                l = Math.sin(Math.PI / 4) * i,
                                t.moveTo(n - s, o - l),
                                t.lineTo(n + s, o + l),
                                t.moveTo(n - s, o + l),
                                t.lineTo(n + s, o - l),
                                t.closePath();
                                break;
                            case "line":
                                    t.beginPath(),
                                t.moveTo(n - i, o),
                                t.lineTo(n + i, o),
                                t.closePath();
                                break;
                            case "dash":
                                    t.beginPath(),
                                t.moveTo(n, o),
                                t.lineTo(n + i, o),
                                t.closePath()
                        }
                        t.stroke()
                    }
                }
            }
        }, {}],
        23: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i = a.getStyle(t, e),
                        n = i && i.match(/(\d+)px/);
                    return n ? Number(n[1]) : void 0
                }

                function i(t, i) {
                    var n = t.style,
                        o = t.getAttribute("height"),
                        r = t.getAttribute("width");
                    if (t._chartjs = {
                            initial: {
                                height: o,
                                width: r,
                                style: {
                                    display: n.display,
                                    height: n.height,
                                    width: n.width
                                }
                            }
                        }, n.display = n.display || "block", null === r || "" === r) {
                        var a = e(t, "width");
                        void 0 !== a && (t.width = a)
                    }
                    if (null === o || "" === o)
                        if ("" === t.style.height) t.height = t.width / (i.options.aspectRatio || 2);
                        else {
                            var s = e(t, "height");
                            void 0 !== a && (t.height = s)
                        }
                    return t
                }

                function n(t) {
                    if (t._chartjs) {
                        var e = t._chartjs.initial;
                        ["height", "width"].forEach(function(i) {
                            var n = e[i];
                            void 0 === n || null === n ? t.removeAttribute(i) : t.setAttribute(i, n)
                        }), a.each(e.style || {}, function(e, i) {
                            t.style[i] = e
                        }), t.width = t.width, delete t._chartjs
                    }
                }

                function o(t, e) {
                    if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
                        var n = t.getContext && t.getContext("2d");
                        if (n instanceof CanvasRenderingContext2D) return i(t, e), n
                    }
                    return null
                }

                function r(e) {
                    e = e || {};
                    var i = e.data = e.data || {};
                    return i.datasets = i.datasets || [], i.labels = i.labels || [], e.options = a.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e
                }
                var a = t.helpers;
                t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(e, i, n) {
                    var s = this;
                    i = r(i);
                    var l = o(e, i),
                        d = l && l.canvas,
                        c = d && d.height,
                        u = d && d.width;
                    return n.ctx = l, n.canvas = d, n.config = i, n.width = u, n.height = c, n.aspectRatio = c ? u / c : null, s.id = a.uid(), s.chart = n, s.config = i, s.options = i.options, s._bufferedRender = !1, t.instances[s.id] = s, Object.defineProperty(s, "data", {
                        get: function() {
                            return s.config.data
                        }
                    }), l && d ? (a.retinaScale(n), s.options.responsive && (a.addResizeListener(d.parentNode, function() {
                        s.resize()
                    }), s.resize(!0)), s.initialize(), s) : (console.error("Failed to create chart: can't acquire context from the given item"), s)
                }, a.extend(t.Controller.prototype, {
                    initialize: function() {
                        var e = this;
                        return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e
                    },
                    clear: function() {
                        return a.clear(this.chart), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(e) {
                        var i = this,
                            n = i.chart,
                            o = i.options,
                            r = n.canvas,
                            s = o.maintainAspectRatio && n.aspectRatio || null,
                            l = Math.floor(a.getMaximumWidth(r)),
                            d = Math.floor(s ? l / s : a.getMaximumHeight(r));
                        if (n.width !== l || n.height !== d) {
                            r.width = n.width = l, r.height = n.height = d, r.style.width = l + "px", r.style.height = d + "px", a.retinaScale(n);
                            var c = {
                                width: l,
                                height: d
                            };
                            t.plugins.notify("resize", [i, c]), i.options.onResize && i.options.onResize(i, c), e || (i.stop(), i.update(i.options.responsiveAnimationDuration))
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        a.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), a.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildScales: function() {
                        var e = this,
                            i = e.options,
                            n = e.scales = {},
                            o = [];
                        i.scales && (o = o.concat((i.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category"
                            }
                        }), (i.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear"
                            }
                        }))), i.scale && o.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0
                        }), a.each(o, function(i) {
                            var o = i.options,
                                r = a.getValueOrDefault(o.type, i.dtype),
                                s = t.scaleService.getScaleConstructor(r);
                            if (s) {
                                var l = new s({
                                    id: o.id,
                                    options: o,
                                    ctx: e.chart.ctx,
                                    chart: e
                                });
                                n[l.id] = l, i.isDefault && (e.scale = l)
                            }
                        }), t.scaleService.addScalesToLayout(this)
                    },
                    updateLayout: function() {
                        t.layoutService.update(this, this.chart.width, this.chart.height)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this,
                            i = [],
                            n = [];
                        if (a.each(e.data.datasets, function(o, r) {
                                var a = e.getDatasetMeta(r);
                                a.type || (a.type = o.type || e.config.type), i.push(a.type), a.controller ? a.controller.updateIndex(r) : (a.controller = new t.controllers[a.type](e, r), n.push(a.controller))
                            }, e), i.length > 1)
                            for (var o = 1; o < i.length; o++)
                                if (i[o] !== i[o - 1]) {
                                    e.isCombo = !0;
                                    break
                                }
                        return n
                    },
                    resetElements: function() {
                        var t = this;
                        a.each(t.data.datasets, function(e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(e, i) {
                        var n = this;
                        t.plugins.notify("beforeUpdate", [n]), n.tooltip._data = n.data;
                        var o = n.buildOrUpdateControllers();
                        a.each(n.data.datasets, function(t, e) {
                            n.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, n), t.layoutService.update(n, n.chart.width, n.chart.height), t.plugins.notify("afterScaleUpdate", [n]), a.each(o, function(t) {
                            t.reset()
                        }), n.updateDatasets(), t.plugins.notify("afterUpdate", [n]), n._bufferedRender ? n._bufferedRequest = {
                            lazy: i,
                            duration: e
                        } : n.render(e, i)
                    },
                    updateDatasets: function() {
                        var e, i, n = this;
                        if (t.plugins.notify("beforeDatasetsUpdate", [n])) {
                            for (e = 0, i = n.data.datasets.length; i > e; ++e) n.getDatasetMeta(e).controller.update();
                            t.plugins.notify("afterDatasetsUpdate", [n])
                        }
                    },
                    render: function(e, i) {
                        var n = this;
                        t.plugins.notify("beforeRender", [n]);
                        var o = n.options.animation;
                        if (o && (void 0 !== e && 0 !== e || void 0 === e && 0 !== o.duration)) {
                            var r = new t.Animation;
                            r.numSteps = (e || o.duration) / 16.66, r.easing = o.easing, r.render = function(t, e) {
                                var i = a.easingEffects[e.easing],
                                    n = e.currentStep / e.numSteps,
                                    o = i(n);
                                t.draw(o, n, e.currentStep)
                            }, r.onAnimationProgress = o.onProgress, r.onAnimationComplete = o.onComplete, t.animationService.addAnimation(n, r, e, i)
                        } else n.draw(), o && o.onComplete && o.onComplete.call && o.onComplete.call(n);
                        return n
                    },
                    draw: function(e) {
                        var i = this,
                            n = e || 1;
                        i.clear(), t.plugins.notify("beforeDraw", [i, n]), a.each(i.boxes, function(t) {
                            t.draw(i.chartArea)
                        }, i), i.scale && i.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [i, n]), a.each(i.data.datasets, function(t, n) {
                            i.isDatasetVisible(n) && i.getDatasetMeta(n).controller.draw(e)
                        }, i, !0), t.plugins.notify("afterDatasetsDraw", [i, n]), i.tooltip.transition(n).draw(), t.plugins.notify("afterDraw", [i, n])
                    },
                    getElementAtEvent: function(e) {
                        return t.Interaction.modes.single(this, e)
                    },
                    getElementsAtEvent: function(e) {
                        return t.Interaction.modes.label(this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(e) {
                        return t.Interaction.modes["x-axis"](this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(e, i, n) {
                        var o = t.Interaction.modes[i];
                        return "function" == typeof o ? o(this, e, n) : []
                    },
                    getDatasetAtEvent: function(e) {
                        return t.Interaction.modes.dataset(this, e)
                    },
                    getDatasetMeta: function(t) {
                        var e = this,
                            i = e.data.datasets[t];
                        i._meta || (i._meta = {});
                        var n = i._meta[e.id];
                        return n || (n = i._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, i = this.data.datasets.length; i > e; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroy: function() {
                        var e, i, o, r = this,
                            s = r.chart.canvas;
                        for (r.stop(), i = 0, o = r.data.datasets.length; o > i; ++i) e = r.getDatasetMeta(i), e.controller && (e.controller.destroy(), e.controller = null);
                        s && (a.unbindEvents(r, r.events), a.removeResizeListener(s.parentNode), a.clear(r.chart), n(s), r.chart.canvas = null, r.chart.ctx = null), t.plugins.notify("destroy", [r]), delete t.instances[r.id]
                    },
                    toBase64Image: function() {
                        return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e.chart,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e), e.tooltip.initialize()
                    },
                    bindEvents: function() {
                        var t = this;
                        a.bindEvents(t, t.options.events, function(e) {
                            t.eventHandler(e)
                        })
                    },
                    updateHoverStyle: function(t, e, i) {
                        var n, o, r, a = i ? "setHoverStyle" : "removeHoverStyle";
                        for (o = 0, r = t.length; r > o; ++o)(n = t[o]) && this.getDatasetMeta(n._datasetIndex).controller[a](n)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            i = e.legend,
                            n = e.tooltip,
                            o = e.options.hover;
                        e._bufferedRender = !0, e._bufferedRequest = null;
                        var r = e.handleEvent(t);
                        r |= i && i.handleEvent(t), r |= n && n.handleEvent(t);
                        var a = e._bufferedRequest;
                        return a ? e.render(a.duration, a.lazy) : r && !e.animating && (e.stop(), e.render(o.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e.options || {},
                            n = i.hover,
                            o = !1;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, n.mode, n), n.onHover && n.onHover.call(e, e.active), ("mouseup" === t.type || "click" === t.type) && i.onClick && i.onClick.call(e, t, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, n.mode, !1), e.active.length && n.mode && e.updateHoverStyle(e.active, n.mode, !0), o = !a.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o
                    }
                })
            }
        }, {}],
        24: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [e]
                        }
                    }), void o.forEach(function(e) {
                        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                            o = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                    r = o.apply(this, e);
                                return n.each(t._chartjs.listeners, function(t) {
                                    "function" == typeof t[i] && t[i].apply(t, e)
                                }), r
                            }
                        })
                    }))
                }

                function i(t, e) {
                    var i = t._chartjs;
                    if (i) {
                        var n = i.listeners,
                            r = n.indexOf(e); - 1 !== r && n.splice(r, 1), n.length > 0 || (o.forEach(function(e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                var n = t.helpers,
                    o = ["push", "pop", "shift", "splice", "unshift"];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, n.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        var i = this;
                        i.chart = t, i.index = e, i.linkScales(), i.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset();
                        null === e.xAxisID && (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && i(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            i = e.dataElementType;
                        return i && new i({
                            _chart: e.chart.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, i = this,
                            n = i.getMeta(),
                            o = i.getDataset().data || [],
                            r = n.data;
                        for (t = 0, e = o.length; e > t; ++t) r[t] = r[t] || i.createMetaData(t);
                        n.dataset = n.dataset || i.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            n = t.getDataset(),
                            o = n.data || (n.data = []);
                        t._data !== o && (t._data && i(t._data, t), e(o, t), t._data = o), t.resyncElements()
                    },
                    update: n.noop,
                    draw: function(t) {
                        var e, i, n = t || 1,
                            o = this.getMeta().data;
                        for (e = 0, i = o.length; i > e; ++e) o[e].transition(n).draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            o = t._index,
                            r = t.custom || {},
                            a = n.getValueAtIndexOrDefault,
                            s = t._model;
                        s.backgroundColor = r.backgroundColor ? r.backgroundColor : a(i.backgroundColor, o, e.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : a(i.borderColor, o, e.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : a(i.borderWidth, o, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            o = t.custom || {},
                            r = n.getValueAtIndexOrDefault,
                            a = n.getHoverColor,
                            s = t._model;
                        s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(e.hoverBackgroundColor, i, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(e.hoverBorderColor, i, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(e.hoverBorderWidth, i, s.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset().data,
                            n = e.data.length,
                            o = i.length;
                        n > o ? e.data.splice(o, n - o) : o > n && t.insertElements(n, o - n)
                    },
                    insertElements: function(t, e) {
                        for (var i = 0; e > i; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = n.inherits
            }
        }, {}],
        25: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.elements = {}, t.Element = function(t) {
                    e.extend(this, t), this.initialize.apply(this, arguments)
                }, e.extend(t.Element.prototype, {
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this;
                        return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
                    },
                    transition: function(t) {
                        var i = this;
                        return i._view || (i._view = e.clone(i._model)), 1 === t ? (i._view = i._model, i._start = null, i) : (i._start || i.pivot(), e.each(i._model, function(n, o) {
                            if ("_" === o[0]);
                            else if (i._view.hasOwnProperty(o))
                                if (n === i._view[o]);
                                else if ("string" == typeof n) try {
                                var r = e.color(i._model[o]).mix(e.color(i._start[o]), t);
                                i._view[o] = r.rgbString()
                            } catch (t) {
                                i._view[o] = n
                            } else if ("number" == typeof n) {
                                var a = void 0 !== i._start[o] && isNaN(i._start[o]) === !1 ? i._start[o] : 0;
                                i._view[o] = (i._model[o] - a) * t + a
                            } else i._view[o] = n;
                            else "number" != typeof n || isNaN(i._view[o]) ? i._view[o] = n : i._view[o] = n * t
                        }, i), i)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                    }
                }), t.Element.extend = e.inherits
            }
        }, {}],
        26: [function(t, e, i) {
            "use strict";
            var n = t(3);
            e.exports = function(t) {
                function e(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function i(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }

                function o(t, n, o) {
                    var r = document.defaultView,
                        a = t.parentNode,
                        s = r.getComputedStyle(t)[n],
                        l = r.getComputedStyle(a)[n],
                        d = i(s),
                        c = i(l),
                        u = Number.POSITIVE_INFINITY;
                    return d || c ? Math.min(d ? e(s, t, o) : u, c ? e(l, a, o) : u) : "none"
                }
                var r = t.helpers = {};
                r.each = function(t, e, i, n) {
                    var o, a;
                    if (r.isArray(t))
                        if (a = t.length, n)
                            for (o = a - 1; o >= 0; o--) e.call(i, t[o], o);
                        else
                            for (o = 0; a > o; o++) e.call(i, t[o], o);
                    else if ("object" == typeof t) {
                        var s = Object.keys(t);
                        for (a = s.length, o = 0; a > o; o++) e.call(i, t[s[o]], s[o])
                    }
                }, r.clone = function(t) {
                    var e = {};
                    return r.each(t, function(t, i) {
                        r.isArray(t) ? e[i] = t.slice(0) : e[i] = "object" == typeof t && null !== t ? r.clone(t) : t
                    }), e
                }, r.extend = function(t) {
                    for (var e = function(e, i) {
                            t[i] = e
                        }, i = 1, n = arguments.length; n > i; i++) r.each(arguments[i], e);
                    return t
                }, r.configMerge = function(e) {
                    var i = r.clone(e);
                    return r.each(Array.prototype.slice.call(arguments, 1), function(e) {
                        r.each(e, function(e, n) {
                            var o = i.hasOwnProperty(n),
                                a = o ? i[n] : {};
                            "scales" === n ? i[n] = r.scaleMerge(a, e) : "scale" === n ? i[n] = r.configMerge(a, t.scaleService.getScaleDefaults(e.type), e) : !o || "object" != typeof a || r.isArray(a) || null === a || "object" != typeof e || r.isArray(e) ? i[n] = e : i[n] = r.configMerge(a, e)
                        })
                    }), i
                }, r.scaleMerge = function(e, i) {
                    var n = r.clone(e);
                    return r.each(i, function(e, i) {
                        "xAxes" === i || "yAxes" === i ? n.hasOwnProperty(i) ? r.each(e, function(e, o) {
                            var a = r.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear"),
                                s = t.scaleService.getScaleDefaults(a);
                            o >= n[i].length || !n[i][o].type ? n[i].push(r.configMerge(s, e)) : e.type && e.type !== n[i][o].type ? n[i][o] = r.configMerge(n[i][o], s, e) : n[i][o] = r.configMerge(n[i][o], e)
                        }) : (n[i] = [], r.each(e, function(e) {
                            var o = r.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear");
                            n[i].push(r.configMerge(t.scaleService.getScaleDefaults(o), e))
                        })) : n.hasOwnProperty(i) && "object" == typeof n[i] && null !== n[i] && "object" == typeof e ? n[i] = r.configMerge(n[i], e) : n[i] = e
                    }), n
                }, r.getValueAtIndexOrDefault = function(t, e, i) {
                    return void 0 === t || null === t ? i : r.isArray(t) ? e < t.length ? t[e] : i : t
                }, r.getValueOrDefault = function(t, e) {
                    return void 0 === t ? e : t
                }, r.indexOf = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                } : function(t, e) {
                    for (var i = 0, n = t.length; n > i; ++i)
                        if (t[i] === e) return i;
                    return -1
                }, r.where = function(t, e) {
                    if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return r.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, r.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                    return t.findIndex(e, i)
                } : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, o = t.length; o > n; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, r.findNextWhere = function(t, e, i) {
                    (void 0 === i || null === i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, r.findPreviousWhere = function(t, e, i) {
                    (void 0 === i || null === i) && (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, r.inherits = function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        n = function() {
                            this.constructor = i
                        };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = r.inherits, t && r.extend(i.prototype, t), i.__super__ = e.prototype, i
                }, r.noop = function() {}, r.uid = function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(), r.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, r.almostEquals = function(t, e, i) {
                    return Math.abs(t - e) < i
                }, r.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, r.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, r.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                }, r.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    return Math.log(t) / Math.LN10
                }, r.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, r.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, r.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        o = Math.sqrt(i * i + n * n),
                        r = Math.atan2(n, i);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                        angle: r,
                        distance: o
                    }
                }, r.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, r.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, r.splineCurve = function(t, e, i, n) {
                    var o = t.skip ? e : t,
                        r = e,
                        a = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                        d = s / (s + l),
                        c = l / (s + l);
                    d = isNaN(d) ? 0 : d, c = isNaN(c) ? 0 : c;
                    var u = n * d,
                        h = n * c;
                    return {
                        previous: {
                            x: r.x - u * (a.x - o.x),
                            y: r.y - u * (a.y - o.y)
                        },
                        next: {
                            x: r.x + h * (a.x - o.x),
                            y: r.y + h * (a.y - o.y)
                        }
                    }
                }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(t) {
                    var e, i, n, o, a = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        s = a.length;
                    for (e = 0; s > e; ++e) n = a[e], n.model.skip || (i = e > 0 ? a[e - 1] : null, o = s - 1 > e ? a[e + 1] : null, o && !o.model.skip && (n.deltaK = (o.model.y - n.model.y) / (o.model.x - n.model.x)), !i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2);
                    var l, d, c, u;
                    for (e = 0; s - 1 > e; ++e) n = a[e], o = a[e + 1], n.model.skip || o.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (l = n.mK / n.deltaK, d = o.mK / n.deltaK, 9 >= (u = Math.pow(l, 2) + Math.pow(d, 2)) || (c = 3 / Math.sqrt(u), n.mK = l * c * n.deltaK, o.mK = d * c * n.deltaK)));
                    var h;
                    for (e = 0; s > e; ++e) n = a[e], n.model.skip || (i = e > 0 ? a[e - 1] : null, o = s - 1 > e ? a[e + 1] : null, i && !i.model.skip && (h = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - h, n.model.controlPointPreviousY = n.model.y - h * n.mK), o && !o.model.skip && (h = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + h, n.model.controlPointNextY = n.model.y + h * n.mK))
                }, r.nextItem = function(t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, r.previousItem = function(t, e, i) {
                    return i ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
                }, r.niceNum = function(t, e) {
                    var i, n = Math.floor(r.log10(t)),
                        o = t / Math.pow(10, n);
                    return (i = e ? 1.5 > o ? 1 : 3 > o ? 2 : 7 > o ? 5 : 10 : 1 >= o ? 1 : 2 >= o ? 2 : 5 >= o ? 5 : 10) * Math.pow(10, n)
                };
                var a = r.easingEffects = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -1 * t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return 1 * (t /= 1) * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1))
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5 * 1), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - a.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeInOutBounce: function(t) {
                        return .5 > t ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                    }
                };
                r.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                }(), r.cancelAnimFrame = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                        return window.clearTimeout(t, 1e3 / 60)
                    }
                }(), r.getRelativePosition = function(t, e) {
                    var i, n, o = t.originalEvent || t,
                        a = t.currentTarget || t.srcElement,
                        s = a.getBoundingClientRect(),
                        l = o.touches;
                    l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = o.clientX, n = o.clientY);
                    var d = parseFloat(r.getStyle(a, "padding-left")),
                        c = parseFloat(r.getStyle(a, "padding-top")),
                        u = parseFloat(r.getStyle(a, "padding-right")),
                        h = parseFloat(r.getStyle(a, "padding-bottom")),
                        p = s.right - s.left - d - u,
                        f = s.bottom - s.top - c - h;
                    return i = Math.round((i - s.left - d) / p * a.width / e.currentDevicePixelRatio), n = Math.round((n - s.top - c) / f * a.height / e.currentDevicePixelRatio), {
                        x: i,
                        y: n
                    }
                }, r.addEvent = function(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
                }, r.removeEvent = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = r.noop
                }, r.bindEvents = function(t, e, i) {
                    var n = t.events = t.events || {};
                    r.each(e, function(e) {
                        n[e] = function() {
                            i.apply(t, arguments)
                        }, r.addEvent(t.chart.canvas, e, n[e])
                    })
                }, r.unbindEvents = function(t, e) {
                    var i = t.chart.canvas;
                    r.each(e, function(t, e) {
                        r.removeEvent(i, e, t)
                    })
                }, r.getConstraintWidth = function(t) {
                    return o(t, "max-width", "clientWidth")
                }, r.getConstraintHeight = function(t) {
                    return o(t, "max-height", "clientHeight")
                }, r.getMaximumWidth = function(t) {
                    var e = t.parentNode,
                        i = parseInt(r.getStyle(e, "padding-left"), 10),
                        n = parseInt(r.getStyle(e, "padding-right"), 10),
                        o = e.clientWidth - i - n,
                        a = r.getConstraintWidth(t);
                    return isNaN(a) ? o : Math.min(o, a)
                }, r.getMaximumHeight = function(t) {
                    var e = t.parentNode,
                        i = parseInt(r.getStyle(e, "padding-top"), 10),
                        n = parseInt(r.getStyle(e, "padding-bottom"), 10),
                        o = e.clientHeight - i - n,
                        a = r.getConstraintHeight(t);
                    return isNaN(a) ? o : Math.min(o, a)
                }, r.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, r.retinaScale = function(t) {
                    var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                    if (1 !== e) {
                        var i = t.canvas,
                            n = t.height,
                            o = t.width;
                        i.height = n * e, i.width = o * e, t.ctx.scale(e, e), i.style.height = n + "px", i.style.width = o + "px"
                    }
                }, r.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, r.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                }, r.longestText = function(t, e, i, n) {
                    n = n || {};
                    var o = n.data = n.data || {},
                        a = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (o = n.data = {}, a = n.garbageCollect = [], n.font = e), t.font = e;
                    var s = 0;
                    r.each(i, function(e) {
                        void 0 !== e && null !== e && r.isArray(e) !== !0 ? s = r.measureText(t, o, a, s, e) : r.isArray(e) && r.each(e, function(e) {
                            void 0 === e || null === e || r.isArray(e) || (s = r.measureText(t, o, a, s, e))
                        })
                    });
                    var l = a.length / 2;
                    if (l > i.length) {
                        for (var d = 0; l > d; d++) delete o[a[d]];
                        a.splice(0, l)
                    }
                    return s
                }, r.measureText = function(t, e, i, n, o) {
                    var r = e[o];
                    return r || (r = e[o] = t.measureText(o).width, i.push(o)), r > n && (n = r), n
                }, r.numberOfLabelLines = function(t) {
                    var e = 1;
                    return r.each(t, function(t) {
                        r.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, r.drawRoundedRectangle = function(t, e, i, n, o, r) {
                    t.beginPath(), t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + r), t.lineTo(e + n, i + o - r), t.quadraticCurveTo(e + n, i + o, e + n - r, i + o), t.lineTo(e + r, i + o), t.quadraticCurveTo(e, i + o, e, i + o - r), t.lineTo(e, i + r), t.quadraticCurveTo(e, i, e + r, i), t.closePath()
                }, r.color = function(e) {
                    return n ? n(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e)
                }, r.addResizeListener = function(t, e) {
                    var i = document.createElement("iframe");
                    i.className = "chartjs-hidden-iframe", i.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", i.tabIndex = -1;
                    var n = t._chartjs = {
                            resizer: i,
                            ticking: !1
                        },
                        o = function() {
                            n.ticking || (n.ticking = !0, r.requestAnimFrame.call(window, function() {
                                return n.resizer ? (n.ticking = !1, e()) : void 0
                            }))
                        };
                    r.addEvent(i, "load", function() {
                        r.addEvent(i.contentWindow || i, "resize", o), o()
                    }), t.insertBefore(i, t.firstChild)
                }, r.removeResizeListener = function(t) {
                    if (t && t._chartjs) {
                        var e = t._chartjs.resizer;
                        e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs
                    }
                }, r.isArray = Array.isArray ? function(t) {
                    return Array.isArray(t)
                } : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, r.arrayEquals = function(t, e) {
                    var i, n, o, a;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; n > i; ++i)
                        if (o = t[i], a = e[i], o instanceof Array && a instanceof Array) {
                            if (!r.arrayEquals(o, a)) return !1
                        } else if (o !== a) return !1;
                    return !0
                }, r.callCallback = function(t, e, i) {
                    t && "function" == typeof t.call && t.apply(i, e)
                }, r.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            3: 3
        }],
        27: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i, n, o, r, a, s = t.data.datasets;
                    for (n = 0, r = s.length; r > n; ++n)
                        if (t.isDatasetVisible(n))
                            for (i = t.getDatasetMeta(n), o = 0, a = i.data.length; a > o; ++o) {
                                var l = i.data[o];
                                l._view.skip || e(l)
                            }
                }

                function i(t, i) {
                    var n = [];
                    return e(t, function(t) {
                        t.inRange(i.x, i.y) && n.push(t)
                    }), n
                }

                function n(t, i, n, o) {
                    var a = Number.POSITIVE_INFINITY,
                        s = [];
                    return o || (o = r.distanceBetweenPoints), e(t, function(t) {
                        if (!n || t.inRange(i.x, i.y)) {
                            var e = t.getCenterPoint(),
                                r = o(i, e);
                            a > r ? (s = [t], a = r) : r === a && s.push(t)
                        }
                    }), s
                }

                function o(t, e, o) {
                    var a = r.getRelativePosition(e, t.chart),
                        s = function(t, e) {
                            return Math.abs(t.x - e.x)
                        },
                        l = o.intersect ? i(t, a) : n(t, a, !1, s),
                        d = [];
                    return l.length ? (t.data.datasets.forEach(function(e, i) {
                        if (t.isDatasetVisible(i)) {
                            var n = t.getDatasetMeta(i),
                                o = n.data[l[0]._index];
                            o && !o._view.skip && d.push(o)
                        }
                    }), d) : []
                }
                var r = t.helpers;
                t.Interaction = {
                    modes: {
                        single: function(t, i) {
                            var n = r.getRelativePosition(i, t.chart),
                                o = [];
                            return e(t, function(t) {
                                return t.inRange(n.x, n.y) ? (o.push(t), o) : void 0
                            }), o.slice(0, 1)
                        },
                        label: o,
                        index: o,
                        dataset: function(t, e, o) {
                            var a = r.getRelativePosition(e, t.chart),
                                s = o.intersect ? i(t, a) : n(t, a, !1);
                            return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
                        },
                        "x-axis": function(t, e) {
                            return o(t, e, !0)
                        },
                        point: function(t, e) {
                            return i(t, r.getRelativePosition(e, t.chart))
                        },
                        nearest: function(t, e, i) {
                            var o = r.getRelativePosition(e, t.chart),
                                a = n(t, o, i.intersect);
                            return a.length > 1 && a.sort(function(t, e) {
                                var i = t.getArea(),
                                    n = e.getArea(),
                                    o = i - n;
                                return 0 === o && (o = t._datasetIndex - e._datasetIndex), o
                            }), a.slice(0, 1)
                        },
                        x: function(t, i, n) {
                            var o = r.getRelativePosition(i, t.chart),
                                a = [],
                                s = !1;
                            return e(t, function(t) {
                                t.inXRange(o.x) && a.push(t), t.inRange(o.x, o.y) && (s = !0)
                            }), n.intersect && !s && (a = []), a
                        },
                        y: function(t, i, n) {
                            var o = r.getRelativePosition(i, t.chart),
                                a = [],
                                s = !1;
                            return e(t, function(t) {
                                t.inYRange(o.y) && a.push(t), t.inRange(o.x, o.y) && (s = !0)
                            }), n.intersect && !s && (a = []), a
                        }
                    }
                }
            }
        }, {}],
        28: [function(t, e, i) {
            "use strict";
            e.exports = function() {
                var t = function(e, i) {
                    return this.controller = new t.Controller(e, i, this), this.controller
                };
                return t.defaults = {
                    global: {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    }
                }, t.Chart = t, t
            }
        }, {}],
        29: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []), t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                    },
                    update: function(t, i, n) {
                        function o(t) {
                            var e, i = t.isHorizontal();
                            i ? (e = t.update(t.options.fullWidth ? b : T, C), I -= e.height) : (e = t.update(S, k), T -= e.width), _.push({
                                horizontal: i,
                                minSize: e,
                                box: t
                            })
                        }

                        function r(t) {
                            var i = e.findNextWhere(_, function(e) {
                                return e.box === t
                            });
                            if (i)
                                if (t.isHorizontal()) {
                                    var n = {
                                        left: M,
                                        right: A,
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.options.fullWidth ? b : T, x / 2, n)
                                } else t.update(i.minSize.width, I)
                        }

                        function a(t) {
                            var i = e.findNextWhere(_, function(e) {
                                    return e.box === t
                                }),
                                n = {
                                    left: 0,
                                    right: 0,
                                    top: P,
                                    bottom: E
                                };
                            i && t.update(i.minSize.width, I, n)
                        }

                        function s(t) {
                            t.isHorizontal() ? (t.left = t.options.fullWidth ? c : M, t.right = t.options.fullWidth ? i - u : M + T, t.top = z, t.bottom = z + t.height, z = t.bottom) : (t.left = L, t.right = L + t.width, t.top = P, t.bottom = P + I, L = t.right)
                        }
                        if (t) {
                            var l = t.options.layout,
                                d = l ? l.padding : null,
                                c = 0,
                                u = 0,
                                h = 0,
                                p = 0;
                            isNaN(d) ? (c = d.left || 0, u = d.right || 0, h = d.top || 0, p = d.bottom || 0) : (c = d, u = d, h = d, p = d);
                            var f = e.where(t.boxes, function(t) {
                                    return "left" === t.options.position
                                }),
                                g = e.where(t.boxes, function(t) {
                                    return "right" === t.options.position
                                }),
                                m = e.where(t.boxes, function(t) {
                                    return "top" === t.options.position
                                }),
                                v = e.where(t.boxes, function(t) {
                                    return "bottom" === t.options.position
                                }),
                                y = e.where(t.boxes, function(t) {
                                    return "chartArea" === t.options.position
                                });
                            m.sort(function(t, e) {
                                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                            }), v.sort(function(t, e) {
                                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                            });
                            var b = i - c - u,
                                x = n - h - p,
                                w = b / 2,
                                k = x / 2,
                                S = (i - w) / (f.length + g.length),
                                C = (n - k) / (m.length + v.length),
                                T = b,
                                I = x,
                                _ = [];
                            e.each(f.concat(g, m, v), o);
                            var M = c,
                                A = u,
                                P = h,
                                E = p;
                            e.each(f.concat(g), r), e.each(f, function(t) {
                                M += t.width
                            }), e.each(g, function(t) {
                                A += t.width
                            }), e.each(m.concat(v), r), e.each(m, function(t) {
                                P += t.height
                            }), e.each(v, function(t) {
                                E += t.height
                            }), e.each(f.concat(g), a), M = c, A = u, P = h, E = p, e.each(f, function(t) {
                                M += t.width
                            }), e.each(g, function(t) {
                                A += t.width
                            }), e.each(m, function(t) {
                                P += t.height
                            }), e.each(v, function(t) {
                                E += t.height
                            });
                            var D = n - P - E,
                                O = i - M - A;
                            (O !== T || D !== I) && (e.each(f, function(t) {
                                t.height = D
                            }), e.each(g, function(t) {
                                t.height = D
                            }), e.each(m, function(t) {
                                t.options.fullWidth || (t.width = O)
                            }), e.each(v, function(t) {
                                t.options.fullWidth || (t.width = O)
                            }), I = D, T = O);
                            var L = c,
                                z = h;
                            e.each(f.concat(m), s), L += T, z += I, e.each(g, s), e.each(v, s), t.chartArea = {
                                left: M,
                                top: P,
                                right: M + T,
                                bottom: P + I
                            }, e.each(y, function(e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(T, I)
                            })
                        }
                    }
                }
            }
        }, {}],
        30: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }
                var i = t.helpers,
                    n = i.noop;
                t.defaults.global.legend = {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    onClick: function(t, e) {
                        var i = e.datasetIndex,
                            n = this.chart,
                            o = n.getDatasetMeta(i);
                        o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return i.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                                return {
                                    text: e.label,
                                    fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(n),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                }, t.Legend = t.Element.extend({
                    initialize: function(t) {
                        i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: n,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: n,
                    beforeSetDimensions: n,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: n,
                    beforeBuildLabels: n,
                    buildLabels: function() {
                        var t = this;
                        t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse()
                    },
                    afterBuildLabels: n,
                    beforeFit: n,
                    fit: function() {
                        var n = this,
                            o = n.options,
                            r = o.labels,
                            a = o.display,
                            s = n.ctx,
                            l = t.defaults.global,
                            d = i.getValueOrDefault,
                            c = d(r.fontSize, l.defaultFontSize),
                            u = d(r.fontStyle, l.defaultFontStyle),
                            h = d(r.fontFamily, l.defaultFontFamily),
                            p = i.fontString(c, u, h),
                            f = n.legendHitBoxes = [],
                            g = n.minSize,
                            m = n.isHorizontal();
                        if (m ? (g.width = n.maxWidth, g.height = a ? 10 : 0) : (g.width = a ? 10 : 0, g.height = n.maxHeight), a)
                            if (s.font = p, m) {
                                var v = n.lineWidths = [0],
                                    y = n.legendItems.length ? c + r.padding : 0;
                                s.textAlign = "left", s.textBaseline = "top", i.each(n.legendItems, function(t, i) {
                                    var o = e(r, c),
                                        a = o + c / 2 + s.measureText(t.text).width;
                                    v[v.length - 1] + a + r.padding >= n.width && (y += c + r.padding, v[v.length] = n.left), f[i] = {
                                        left: 0,
                                        top: 0,
                                        width: a,
                                        height: c
                                    }, v[v.length - 1] += a + r.padding
                                }), g.height += y
                            } else {
                                var b = r.padding,
                                    x = n.columnWidths = [],
                                    w = r.padding,
                                    k = 0,
                                    S = 0,
                                    C = c + b;
                                i.each(n.legendItems, function(t, i) {
                                    var n = e(r, c),
                                        o = n + c / 2 + s.measureText(t.text).width;
                                    S + C > g.height && (w += k + r.padding, x.push(k), k = 0, S = 0), k = Math.max(k, o), S += C, f[i] = {
                                        left: 0,
                                        top: 0,
                                        width: o,
                                        height: c
                                    }
                                }), w += k, x.push(k), g.width += w
                            }
                        n.width = g.width, n.height = g.height
                    },
                    afterFit: n,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var n = this,
                            o = n.options,
                            r = o.labels,
                            a = t.defaults.global,
                            s = a.elements.line,
                            l = n.width,
                            d = n.lineWidths;
                        if (o.display) {
                            var c, u = n.ctx,
                                h = i.getValueOrDefault,
                                p = h(r.fontColor, a.defaultFontColor),
                                f = h(r.fontSize, a.defaultFontSize),
                                g = h(r.fontStyle, a.defaultFontStyle),
                                m = h(r.fontFamily, a.defaultFontFamily),
                                v = i.fontString(f, g, m);
                            u.textAlign = "left", u.textBaseline = "top", u.lineWidth = .5, u.strokeStyle = p, u.fillStyle = p, u.font = v;
                            var y = e(r, f),
                                b = n.legendHitBoxes,
                                x = function(e, i, n) {
                                    if (!(isNaN(y) || 0 >= y)) {
                                        u.save(), u.fillStyle = h(n.fillStyle, a.defaultColor), u.lineCap = h(n.lineCap, s.borderCapStyle), u.lineDashOffset = h(n.lineDashOffset, s.borderDashOffset), u.lineJoin = h(n.lineJoin, s.borderJoinStyle), u.lineWidth = h(n.lineWidth, s.borderWidth), u.strokeStyle = h(n.strokeStyle, a.defaultColor);
                                        var r = 0 === h(n.lineWidth, s.borderWidth);
                                        if (u.setLineDash && u.setLineDash(h(n.lineDash, s.borderDash)), o.labels && o.labels.usePointStyle) {
                                            var l = f * Math.SQRT2 / 2,
                                                d = l / Math.SQRT2,
                                                c = e + d,
                                                p = i + d;
                                            t.canvasHelpers.drawPoint(u, n.pointStyle, l, c, p)
                                        } else r || u.strokeRect(e, i, y, f), u.fillRect(e, i, y, f);
                                        u.restore()
                                    }
                                },
                                w = function(t, e, i, n) {
                                    u.fillText(i.text, y + f / 2 + t, e), i.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(y + f / 2 + t, e + f / 2), u.lineTo(y + f / 2 + t + n, e + f / 2), u.stroke())
                                },
                                k = n.isHorizontal();
                            c = k ? {
                                x: n.left + (l - d[0]) / 2,
                                y: n.top + r.padding,
                                line: 0
                            } : {
                                x: n.left + r.padding,
                                y: n.top + r.padding,
                                line: 0
                            };
                            var S = f + r.padding;
                            i.each(n.legendItems, function(t, e) {
                                var i = u.measureText(t.text).width,
                                    o = y + f / 2 + i,
                                    a = c.x,
                                    s = c.y;
                                k ? a + o >= l && (s = c.y += S, c.line++, a = c.x = n.left + (l - d[c.line]) / 2) : s + S > n.bottom && (a = c.x = a + n.columnWidths[c.line] + r.padding, s = c.y = n.top, c.line++), x(a, s, t), b[e].left = a, b[e].top = s, w(a, s, t, i), k ? c.x += o + r.padding : c.y += S
                            })
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            n = e.options,
                            o = "mouseup" === t.type ? "click" : t.type,
                            r = !1;
                        if ("mousemove" === o) {
                            if (!n.onHover) return
                        } else {
                            if ("click" !== o) return;
                            if (!n.onClick) return
                        }
                        var a = i.getRelativePosition(t, e.chart.chart),
                            s = a.x,
                            l = a.y;
                        if (s >= e.left && s <= e.right && l >= e.top && l <= e.bottom)
                            for (var d = e.legendHitBoxes, c = 0; c < d.length; ++c) {
                                var u = d[c];
                                if (s >= u.left && s <= u.left + u.width && l >= u.top && l <= u.top + u.height) {
                                    if ("click" === o) {
                                        n.onClick.call(e, t, e.legendItems[c]), r = !0;
                                        break
                                    }
                                    if ("mousemove" === o) {
                                        n.onHover.call(e, t, e.legendItems[c]), r = !0;
                                        break
                                    }
                                }
                            }
                        return r
                    }
                }), t.plugins.register({
                    beforeInit: function(e) {
                        var i = e.options,
                            n = i.legend;
                        n && (e.legend = new t.Legend({
                            ctx: e.chart.ctx,
                            options: n,
                            chart: e
                        }), t.layoutService.addBox(e, e.legend))
                    }
                })
            }
        }, {}],
        31: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers.noop;
                t.plugins = {
                    _plugins: [],
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t)
                        })
                    },
                    unregister: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                        })
                    },
                    clear: function() {
                        this._plugins = []
                    },
                    count: function() {
                        return this._plugins.length
                    },
                    getAll: function() {
                        return this._plugins
                    },
                    notify: function(t, e) {
                        var i, n, o = this._plugins,
                            r = o.length;
                        for (i = 0; r > i; ++i)
                            if (n = o[i], "function" == typeof n[t] && n[t].apply(n, e || []) === !1) return !1;
                        return !0
                    }
                }, t.PluginBase = t.Element.extend({
                    beforeInit: e,
                    afterInit: e,
                    beforeUpdate: e,
                    afterUpdate: e,
                    beforeDraw: e,
                    afterDraw: e,
                    destroy: e
                }), t.pluginService = t.plugins
            }
        }, {}],
        32: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.scale = {
                    display: !0,
                    position: "left",
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        labelString: "",
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 10,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: t.Ticks.formatters.values
                    }
                }, t.Scale = t.Element.extend({
                    beforeUpdate: function() {
                        e.callCallback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, i, n) {
                        var o = this;
                        return o.beforeUpdate(), o.maxWidth = t, o.maxHeight = i, o.margins = e.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), o.beforeSetDimensions(), o.setDimensions(), o.afterSetDimensions(), o.beforeDataLimits(), o.determineDataLimits(), o.afterDataLimits(), o.beforeBuildTicks(), o.buildTicks(), o.afterBuildTicks(), o.beforeTickToLabelConversion(), o.convertTicksToLabels(), o.afterTickToLabelConversion(), o.beforeCalculateTickRotation(), o.calculateTickRotation(), o.afterCalculateTickRotation(), o.beforeFit(), o.fit(), o.afterFit(), o.afterUpdate(), o.minSize
                    },
                    afterUpdate: function() {
                        e.callCallback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        e.callCallback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        e.callCallback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        e.callCallback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: e.noop,
                    afterDataLimits: function() {
                        e.callCallback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        e.callCallback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: e.noop,
                    afterBuildTicks: function() {
                        e.callCallback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        e.callCallback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback)
                    },
                    afterTickToLabelConversion: function() {
                        e.callCallback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        e.callCallback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var i = this,
                            n = i.ctx,
                            o = t.defaults.global,
                            r = i.options.ticks,
                            a = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                            s = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                            l = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                            d = e.fontString(a, s, l);
                        n.font = d;
                        var c, u = n.measureText(i.ticks[0]).width,
                            h = n.measureText(i.ticks[i.ticks.length - 1]).width;
                        if (i.labelRotation = r.minRotation || 0, i.paddingRight = 0, i.paddingLeft = 0, i.options.display && i.isHorizontal()) {
                            i.paddingRight = h / 2 + 3, i.paddingLeft = u / 2 + 3, i.longestTextCache || (i.longestTextCache = {});
                            for (var p, f, g = e.longestText(n, d, i.ticks, i.longestTextCache), m = g, v = i.getPixelForTick(1) - i.getPixelForTick(0) - 6; m > v && i.labelRotation < r.maxRotation;) {
                                if (p = Math.cos(e.toRadians(i.labelRotation)), f = Math.sin(e.toRadians(i.labelRotation)), c = p * u, c + a / 2 > i.yLabelWidth && (i.paddingLeft = c + a / 2), i.paddingRight = a / 2, f * g > i.maxHeight) {
                                    i.labelRotation--;
                                    break
                                }
                                i.labelRotation++, m = p * g
                            }
                        }
                        i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0))
                    },
                    afterCalculateTickRotation: function() {
                        e.callCallback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        e.callCallback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var i = this,
                            n = i.minSize = {
                                width: 0,
                                height: 0
                            },
                            o = i.options,
                            r = t.defaults.global,
                            a = o.ticks,
                            s = o.scaleLabel,
                            l = o.gridLines,
                            d = o.display,
                            c = i.isHorizontal(),
                            u = e.getValueOrDefault(a.fontSize, r.defaultFontSize),
                            h = e.getValueOrDefault(a.fontStyle, r.defaultFontStyle),
                            p = e.getValueOrDefault(a.fontFamily, r.defaultFontFamily),
                            f = e.fontString(u, h, p),
                            g = e.getValueOrDefault(s.fontSize, r.defaultFontSize),
                            m = o.gridLines.tickMarkLength;
                        if (n.width = c ? i.isFullWidth() ? i.maxWidth - i.margins.left - i.margins.right : i.maxWidth : d && l.drawTicks ? m : 0, n.height = c ? d && l.drawTicks ? m : 0 : i.maxHeight, s.display && d && (c ? n.height += 1.5 * g : n.width += 1.5 * g), a.display && d) {
                            i.longestTextCache || (i.longestTextCache = {});
                            var v = e.longestText(i.ctx, f, i.ticks, i.longestTextCache),
                                y = e.numberOfLabelLines(i.ticks),
                                b = .5 * u;
                            if (c) {
                                i.longestLabelWidth = v;
                                var x = Math.sin(e.toRadians(i.labelRotation)) * i.longestLabelWidth + u * y + b * y;
                                n.height = Math.min(i.maxHeight, n.height + x), i.ctx.font = f;
                                var w = i.ctx.measureText(i.ticks[0]).width,
                                    k = i.ctx.measureText(i.ticks[i.ticks.length - 1]).width,
                                    S = Math.cos(e.toRadians(i.labelRotation)),
                                    C = Math.sin(e.toRadians(i.labelRotation));
                                i.paddingLeft = 0 !== i.labelRotation ? S * w + 3 : w / 2 + 3, i.paddingRight = 0 !== i.labelRotation ? C * (u / 2) + 3 : k / 2 + 3
                            } else {
                                var T = i.maxWidth - n.width;
                                a.mirror ? v = 0 : v += i.options.ticks.padding, T > v ? n.width += v : n.width = i.maxWidth, i.paddingTop = u / 2, i.paddingBottom = u / 2
                            }
                        }
                        i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingTop = Math.max(i.paddingTop - i.margins.top, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0), i.paddingBottom = Math.max(i.paddingBottom - i.margins.bottom, 0)), i.width = n.width, i.height = n.height
                    },
                    afterFit: function() {
                        e.callCallback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        return null === t || void 0 === t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
                    },
                    getLabelForIndex: e.noop,
                    getPixelForValue: e.noop,
                    getValueForPixel: e.noop,
                    getPixelForTick: function(t, e) {
                        var i = this;
                        if (i.isHorizontal()) {
                            var n = i.width - (i.paddingLeft + i.paddingRight),
                                o = n / Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                r = o * t + i.paddingLeft;
                            e && (r += o / 2);
                            var a = i.left + Math.round(r);
                            return a += i.isFullWidth() ? i.margins.left : 0
                        }
                        var s = i.height - (i.paddingTop + i.paddingBottom);
                        return i.top + t * (s / (i.ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = e.width - (e.paddingLeft + e.paddingRight),
                                n = i * t + e.paddingLeft,
                                o = e.left + Math.round(n);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        var t = this,
                            e = t.min,
                            i = t.max;
                        return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
                    },
                    draw: function(i) {
                        var n = this,
                            o = n.options;
                        if (o.display) {
                            var r, a, s = n.ctx,
                                l = t.defaults.global,
                                d = o.ticks,
                                c = o.gridLines,
                                u = o.scaleLabel,
                                h = 0 !== n.labelRotation,
                                p = d.autoSkip,
                                f = n.isHorizontal();
                            d.maxTicksLimit && (a = d.maxTicksLimit);
                            var g = e.getValueOrDefault(d.fontColor, l.defaultFontColor),
                                m = e.getValueOrDefault(d.fontSize, l.defaultFontSize),
                                v = e.getValueOrDefault(d.fontStyle, l.defaultFontStyle),
                                y = e.getValueOrDefault(d.fontFamily, l.defaultFontFamily),
                                b = e.fontString(m, v, y),
                                x = c.tickMarkLength,
                                w = e.getValueOrDefault(c.borderDash, l.borderDash),
                                k = e.getValueOrDefault(c.borderDashOffset, l.borderDashOffset),
                                S = e.getValueOrDefault(u.fontColor, l.defaultFontColor),
                                C = e.getValueOrDefault(u.fontSize, l.defaultFontSize),
                                T = e.getValueOrDefault(u.fontStyle, l.defaultFontStyle),
                                I = e.getValueOrDefault(u.fontFamily, l.defaultFontFamily),
                                _ = e.fontString(C, T, I),
                                M = e.toRadians(n.labelRotation),
                                A = Math.cos(M),
                                P = n.longestLabelWidth * A;
                            s.fillStyle = g;
                            var E = [];
                            if (f) {
                                if (r = !1, h && (P /= 2), (P + d.autoSkipPadding) * n.ticks.length > n.width - (n.paddingLeft + n.paddingRight) && (r = 1 + Math.floor((P + d.autoSkipPadding) * n.ticks.length / (n.width - (n.paddingLeft + n.paddingRight)))), a && n.ticks.length > a)
                                    for (; !r || n.ticks.length / (r || 1) > a;) r || (r = 1), r += 1;
                                p || (r = !1)
                            }
                            var D = "right" === o.position ? n.left : n.right - x,
                                O = "right" === o.position ? n.left + x : n.right,
                                L = "bottom" === o.position ? n.top : n.bottom - x,
                                z = "bottom" === o.position ? n.top + x : n.bottom;
                            if (e.each(n.ticks, function(t, a) {
                                    if (void 0 !== t && null !== t) {
                                        var s = n.ticks.length === a + 1;
                                        if ((!(r > 1 && a % r > 0 || a % r == 0 && a + r >= n.ticks.length) || s) && void 0 !== t && null !== t) {
                                            var l, u;
                                            a === (void 0 !== n.zeroLineIndex ? n.zeroLineIndex : 0) ? (l = c.zeroLineWidth, u = c.zeroLineColor) : (l = e.getValueAtIndexOrDefault(c.lineWidth, a), u = e.getValueAtIndexOrDefault(c.color, a));
                                            var p, g, m, v, y, b, S, C, T, I, _ = "middle",
                                                A = "middle";
                                            if (f) {
                                                h || (A = "top" === o.position ? "bottom" : "top"), _ = h ? "right" : "center";
                                                var P = n.getPixelForTick(a) + e.aliasPixel(l);
                                                T = n.getPixelForTick(a, c.offsetGridLines) + d.labelOffset, I = h ? n.top + 12 : "top" === o.position ? n.bottom - x : n.top + x, p = m = y = S = P, g = L, v = z, b = i.top, C = i.bottom
                                            } else {
                                                "left" === o.position ? d.mirror ? (T = n.right + d.padding, _ = "left") : (T = n.right - d.padding, _ = "right") : d.mirror ? (T = n.left - d.padding, _ = "right") : (T = n.left + d.padding, _ = "left");
                                                var F = n.getPixelForTick(a);
                                                F += e.aliasPixel(l), I = n.getPixelForTick(a, c.offsetGridLines), p = D, m = O, y = i.left, S = i.right, g = v = b = C = F
                                            }
                                            E.push({
                                                tx1: p,
                                                ty1: g,
                                                tx2: m,
                                                ty2: v,
                                                x1: y,
                                                y1: b,
                                                x2: S,
                                                y2: C,
                                                labelX: T,
                                                labelY: I,
                                                glWidth: l,
                                                glColor: u,
                                                glBorderDash: w,
                                                glBorderDashOffset: k,
                                                rotation: -1 * M,
                                                label: t,
                                                textBaseline: A,
                                                textAlign: _
                                            })
                                        }
                                    }
                                }), e.each(E, function(t) {
                                    if (c.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                        s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = b, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                        var i = t.label;
                                        if (e.isArray(i))
                                            for (var n = 0, o = -(i.length - 1) * m * .75; n < i.length; ++n) s.fillText("" + i[n], 0, o), o += 1.5 * m;
                                        else s.fillText(i, 0, 0);
                                        s.restore()
                                    }
                                }), u.display) {
                                var F, R, N = 0;
                                if (f) F = n.left + (n.right - n.left) / 2, R = "bottom" === o.position ? n.bottom - C / 2 : n.top + C / 2;
                                else {
                                    var B = "left" === o.position;
                                    F = B ? n.left + C / 2 : n.right - C / 2, R = n.top + (n.bottom - n.top) / 2, N = B ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(F, R), s.rotate(N), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = S, s.font = _, s.fillText(u.labelString, 0, 0), s.restore()
                            }
                            if (c.drawBorder) {
                                s.lineWidth = e.getValueAtIndexOrDefault(c.lineWidth, 0), s.strokeStyle = e.getValueAtIndexOrDefault(c.color, 0);
                                var W = n.left,
                                    j = n.right,
                                    H = n.top,
                                    V = n.bottom,
                                    U = e.aliasPixel(s.lineWidth);
                                f ? (H = V = "top" === o.position ? n.bottom : n.top, H += U, V += U) : (W = j = "left" === o.position ? n.right : n.left, W += U, j += U), s.beginPath(), s.moveTo(W, H), s.lineTo(j, V), s.stroke()
                            }
                        }
                    }
                })
            }
        }, {}],
        33: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, i, n) {
                        this.constructors[t] = i, this.defaults[t] = e.clone(n)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(i) {
                        return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
                    },
                    updateScaleDefaults: function(t, i) {
                        var n = this.defaults;
                        n.hasOwnProperty(t) && (n[t] = e.extend(n[t], i))
                    },
                    addScalesToLayout: function(i) {
                        e.each(i.scales, function(e) {
                            t.layoutService.addBox(i, e)
                        })
                    }
                }
            }
        }, {}],
        34: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.Ticks = {
                    generators: {
                        linear: function(t, i) {
                            var n, o = [];
                            if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                            else {
                                var r = e.niceNum(i.max - i.min, !1);
                                n = e.niceNum(r / (t.maxTicks - 1), !0)
                            }
                            var a = Math.floor(i.min / n) * n,
                                s = Math.ceil(i.max / n) * n;
                            if (t.min && t.max && t.stepSize) {
                                (t.max - t.min) % t.stepSize == 0 && (a = t.min, s = t.max)
                            }
                            var l = (s - a) / n;
                            l = e.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l), o.push(void 0 !== t.min ? t.min : a);
                            for (var d = 1; l > d; ++d) o.push(a + d * n);
                            return o.push(void 0 !== t.max ? t.max : s), o
                        },
                        logarithmic: function(t, i) {
                            for (var n = [], o = e.getValueOrDefault, r = o(t.min, Math.pow(10, Math.floor(e.log10(i.min)))); r < i.max;) {
                                n.push(r);
                                var a, s;
                                0 === r ? (a = Math.floor(e.log10(i.minNotZero)), s = Math.round(i.minNotZero / Math.pow(10, a))) : (a = Math.floor(e.log10(r)), s = Math.floor(r / Math.pow(10, a)) + 1), 10 === s && (s = 1, ++a), r = s * Math.pow(10, a)
                            }
                            var l = o(t.max, r);
                            return n.push(l), n
                        }
                    },
                    formatters: {
                        values: function(t) {
                            return e.isArray(t) ? t : "" + t
                        },
                        linear: function(t, i, n) {
                            var o = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                            Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
                            var r = e.log10(Math.abs(o)),
                                a = "";
                            if (0 !== t) {
                                var s = -1 * Math.floor(r);
                                s = Math.max(Math.min(s, 20), 0), a = t.toFixed(s)
                            } else a = "0";
                            return a
                        },
                        logarithmic: function(t, i, n) {
                            var o = t / Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === i || i === n.length - 1 ? t.toExponential() : ""
                        }
                    }
                }
            }
        }, {}],
        35: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.title = {
                    display: !1,
                    position: "top",
                    fullWidth: !0,
                    fontStyle: "bold",
                    padding: 10,
                    text: ""
                };
                var i = e.noop;
                t.Title = t.Element.extend({
                    initialize: function(i) {
                        var n = this;
                        e.extend(n, i), n.options = e.configMerge(t.defaults.global.title, i.options), n.legendHitBoxes = []
                    },
                    beforeUpdate: function() {
                        var i = this.chart.options;
                        i && i.title && (this.options = e.configMerge(t.defaults.global.title, i.title))
                    },
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: i,
                    beforeSetDimensions: i,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: i,
                    beforeBuildLabels: i,
                    buildLabels: i,
                    afterBuildLabels: i,
                    beforeFit: i,
                    fit: function() {
                        var i = this,
                            n = e.getValueOrDefault,
                            o = i.options,
                            r = t.defaults.global,
                            a = o.display,
                            s = n(o.fontSize, r.defaultFontSize),
                            l = i.minSize;
                        i.isHorizontal() ? (l.width = i.maxWidth, l.height = a ? s + 2 * o.padding : 0) : (l.width = a ? s + 2 * o.padding : 0, l.height = i.maxHeight), i.width = l.width, i.height = l.height
                    },
                    afterFit: i,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var i = this,
                            n = i.ctx,
                            o = e.getValueOrDefault,
                            r = i.options,
                            a = t.defaults.global;
                        if (r.display) {
                            var s, l, d, c = o(r.fontSize, a.defaultFontSize),
                                u = o(r.fontStyle, a.defaultFontStyle),
                                h = o(r.fontFamily, a.defaultFontFamily),
                                p = e.fontString(c, u, h),
                                f = 0,
                                g = i.top,
                                m = i.left,
                                v = i.bottom,
                                y = i.right;
                            n.fillStyle = o(r.fontColor, a.defaultFontColor), n.font = p, i.isHorizontal() ? (s = m + (y - m) / 2, l = g + (v - g) / 2, d = y - m) : (s = "left" === r.position ? m + c / 2 : y - c / 2, l = g + (v - g) / 2, d = v - g, f = Math.PI * ("left" === r.position ? -.5 : .5)), n.save(), n.translate(s, l), n.rotate(f), n.textAlign = "center", n.textBaseline = "middle", n.fillText(r.text, 0, 0, d), n.restore()
                        }
                    }
                }), t.plugins.register({
                    beforeInit: function(e) {
                        var i = e.options,
                            n = i.title;
                        n && (e.titleBlock = new t.Title({
                            ctx: e.chart.ctx,
                            options: n,
                            chart: e
                        }), t.layoutService.addBox(e, e.titleBlock))
                    }
                })
            }
        }, {}],
        36: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i = l.color(t);
                    return i.alpha(e * i.alpha()).rgbaString()
                }

                function i(t, e) {
                    return e && (l.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function n(t) {
                    var e = t._xScale,
                        i = t._yScale || t._scale,
                        n = t._index,
                        o = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(n, o) : "",
                        yLabel: i ? i.getLabelForIndex(n, o) : "",
                        index: n,
                        datasetIndex: o,
                        x: t._model.x,
                        y: t._model.y
                    }
                }

                function o(e) {
                    var i = t.defaults.global,
                        n = l.getValueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: n(e.bodyFontFamily, i.defaultFontFamily),
                        _bodyFontStyle: n(e.bodyFontStyle, i.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: n(e.bodyFontSize, i.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: n(e.titleFontFamily, i.defaultFontFamily),
                        _titleFontStyle: n(e.titleFontStyle, i.defaultFontStyle),
                        titleFontSize: n(e.titleFontSize, i.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: n(e.footerFontFamily, i.defaultFontFamily),
                        _footerFontStyle: n(e.footerFontStyle, i.defaultFontStyle),
                        footerFontSize: n(e.footerFontSize, i.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors
                    }
                }

                function r(t, e) {
                    var i = t._chart.ctx,
                        n = 2 * e.yPadding,
                        o = 0,
                        r = e.body,
                        a = r.reduce(function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                    a += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length,
                        d = e.footer.length,
                        c = e.titleFontSize,
                        u = e.bodyFontSize,
                        h = e.footerFontSize;
                    n += s * c, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += a * u, n += a ? (a - 1) * e.bodySpacing : 0, n += d ? e.footerMarginTop : 0, n += d * h, n += d ? (d - 1) * e.footerSpacing : 0;
                    var p = 0,
                        f = function(t) {
                            o = Math.max(o, i.measureText(t).width + p)
                        };
                    return i.font = l.fontString(c, e._titleFontStyle, e._titleFontFamily), l.each(e.title, f), i.font = l.fontString(u, e._bodyFontStyle, e._bodyFontFamily), l.each(e.beforeBody.concat(e.afterBody), f), p = e.displayColors ? u + 2 : 0, l.each(r, function(t) {
                        l.each(t.before, f), l.each(t.lines, f), l.each(t.after, f)
                    }), p = 0, i.font = l.fontString(h, e._footerFontStyle, e._footerFontFamily), l.each(e.footer, f), o += 2 * e.xPadding, {
                        width: o,
                        height: n
                    }
                }

                function a(t, e) {
                    var i = t._model,
                        n = t._chart,
                        o = t._chartInstance.chartArea,
                        r = "center",
                        a = "center";
                    i.y < e.height ? a = "top" : i.y > n.height - e.height && (a = "bottom");
                    var s, l, d, c, u, h = (o.left + o.right) / 2,
                        p = (o.top + o.bottom) / 2;
                    "center" === a ? (s = function(t) {
                        return h >= t
                    }, l = function(t) {
                        return t > h
                    }) : (s = function(t) {
                        return t <= e.width / 2
                    }, l = function(t) {
                        return t >= n.width - e.width / 2
                    }), d = function(t) {
                        return t + e.width > n.width
                    }, c = function(t) {
                        return t - e.width < 0
                    }, u = function(t) {
                        return p >= t ? "top" : "bottom"
                    }, s(i.x) ? (r = "left", d(i.x) && (r = "center", a = u(i.y))) : l(i.x) && (r = "right", c(i.x) && (r = "center", a = u(i.y)));
                    var f = t._options;
                    return {
                        xAlign: f.xAlign ? f.xAlign : r,
                        yAlign: f.yAlign ? f.yAlign : a
                    }
                }

                function s(t, e, i) {
                    var n = t.x,
                        o = t.y,
                        r = t.caretSize,
                        a = t.caretPadding,
                        s = t.cornerRadius,
                        l = i.xAlign,
                        d = i.yAlign,
                        c = r + a,
                        u = s + a;
                    return "right" === l ? n -= e.width : "center" === l && (n -= e.width / 2), "top" === d ? o += c : o -= "bottom" === d ? e.height + c : e.height / 2, "center" === d ? "left" === l ? n += c : "right" === l && (n -= c) : "left" === l ? n -= u : "right" === l && (n += u), {
                        x: n,
                        y: o
                    }
                }
                var l = t.helpers;
                t.defaults.global.tooltips = {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    callbacks: {
                        beforeTitle: l.noop,
                        title: function(t, e) {
                            var i = "",
                                n = e.labels,
                                o = n ? n.length : 0;
                            if (t.length > 0) {
                                var r = t[0];
                                r.xLabel ? i = r.xLabel : o > 0 && r.index < o && (i = n[r.index])
                            }
                            return i
                        },
                        afterTitle: l.noop,
                        beforeBody: l.noop,
                        beforeLabel: l.noop,
                        label: function(t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.yLabel
                        },
                        labelColor: function(t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex),
                                n = i.data[t.index],
                                o = n._view;
                            return {
                                borderColor: o.borderColor,
                                backgroundColor: o.backgroundColor
                            }
                        },
                        afterLabel: l.noop,
                        afterBody: l.noop,
                        beforeFooter: l.noop,
                        footer: l.noop,
                        afterFooter: l.noop
                    }
                }, t.Tooltip = t.Element.extend({
                    initialize: function() {
                        this._model = o(this._options)
                    },
                    getTitle: function() {
                        var t = this,
                            e = t._options,
                            n = e.callbacks,
                            o = n.beforeTitle.apply(t, arguments),
                            r = n.title.apply(t, arguments),
                            a = n.afterTitle.apply(t, arguments),
                            s = [];
                        return s = i(s, o), s = i(s, r), s = i(s, a)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return l.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var n = this,
                            o = n._options.callbacks,
                            r = [];
                        return l.each(t, function(t) {
                            var a = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            i(a.before, o.beforeLabel.call(n, t, e)), i(a.lines, o.label.call(n, t, e)), i(a.after, o.afterLabel.call(n, t, e)), r.push(a)
                        }), r
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return l.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this,
                            e = t._options.callbacks,
                            n = e.beforeFooter.apply(t, arguments),
                            o = e.footer.apply(t, arguments),
                            r = e.afterFooter.apply(t, arguments),
                            a = [];
                        return a = i(a, n), a = i(a, o), a = i(a, r)
                    },
                    update: function(e) {
                        var i, d, c = this,
                            u = c._options,
                            h = c._model,
                            p = c._model = o(u),
                            f = c._active,
                            g = c._data,
                            m = c._chartInstance,
                            v = {
                                xAlign: h.xAlign,
                                yAlign: h.yAlign
                            },
                            y = {
                                x: h.x,
                                y: h.y
                            },
                            b = {
                                width: h.width,
                                height: h.height
                            },
                            x = {
                                x: h.caretX,
                                y: h.caretY
                            };
                        if (f.length) {
                            p.opacity = 1;
                            var w = [];
                            x = t.Tooltip.positioners[u.position](f, c._eventPosition);
                            var k = [];
                            for (i = 0, d = f.length; d > i; ++i) k.push(n(f[i]));
                            u.filter && (k = k.filter(function(t) {
                                return u.filter(t, g)
                            })), u.itemSort && (k = k.sort(function(t, e) {
                                return u.itemSort(t, e, g)
                            })), l.each(k, function(t) {
                                w.push(u.callbacks.labelColor.call(c, t, m))
                            }), p.title = c.getTitle(k, g), p.beforeBody = c.getBeforeBody(k, g), p.body = c.getBody(k, g), p.afterBody = c.getAfterBody(k, g), p.footer = c.getFooter(k, g), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = l.getValueOrDefault(x.padding, 2), p.labelColors = w, p.dataPoints = k, b = r(this, p), v = a(this, b), y = s(p, b, v)
                        } else p.opacity = 0;
                        return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, c._model = p, e && u.custom && u.custom.call(c, p), c
                    },
                    drawCaret: function(t, i, n) {
                        var o, r, a, s, l, d, c = this._view,
                            u = this._chart.ctx,
                            h = c.caretSize,
                            p = c.cornerRadius,
                            f = c.xAlign,
                            g = c.yAlign,
                            m = t.x,
                            v = t.y,
                            y = i.width,
                            b = i.height;
                        "center" === g ? ("left" === f ? (o = m, r = o - h, a = o) : (o = m + y, r = o + h, a = o), l = v + b / 2, s = l - h, d = l + h) : ("left" === f ? (o = m + p, r = o + h, a = r + h) : "right" === f ? (o = m + y - p, r = o - h, a = r - h) : (r = m + y / 2, o = r - h, a = r + h), "top" === g ? (s = v, l = s - h, d = s) : (s = v + b, l = s + h, d = s)), u.fillStyle = e(c.backgroundColor, n), u.beginPath(), u.moveTo(o, s), u.lineTo(r, l), u.lineTo(a, d), u.closePath(), u.fill()
                    },
                    drawTitle: function(t, i, n, o) {
                        var r = i.title;
                        if (r.length) {
                            n.textAlign = i._titleAlign, n.textBaseline = "top";
                            var a = i.titleFontSize,
                                s = i.titleSpacing;
                            n.fillStyle = e(i.titleFontColor, o), n.font = l.fontString(a, i._titleFontStyle, i._titleFontFamily);
                            var d, c;
                            for (d = 0, c = r.length; c > d; ++d) n.fillText(r[d], t.x, t.y), t.y += a + s, d + 1 === r.length && (t.y += i.titleMarginBottom - s)
                        }
                    },
                    drawBody: function(t, i, n, o) {
                        var r = i.bodyFontSize,
                            a = i.bodySpacing,
                            s = i.body;
                        n.textAlign = i._bodyAlign, n.textBaseline = "top";
                        var d = e(i.bodyFontColor, o);
                        n.fillStyle = d, n.font = l.fontString(r, i._bodyFontStyle, i._bodyFontFamily);
                        var c = 0,
                            u = function(e) {
                                n.fillText(e, t.x + c, t.y), t.y += r + a
                            };
                        l.each(i.beforeBody, u);
                        var h = i.displayColors;
                        c = h ? r + 2 : 0, l.each(s, function(a, s) {
                            l.each(a.before, u), l.each(a.lines, function(a) {
                                h && (n.fillStyle = e(i.legendColorBackground, o), n.fillRect(t.x, t.y, r, r), n.strokeStyle = e(i.labelColors[s].borderColor, o), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[s].backgroundColor, o), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = d), u(a)
                            }), l.each(a.after, u)
                        }), c = 0, l.each(i.afterBody, u), t.y -= a
                    },
                    drawFooter: function(t, i, n, o) {
                        var r = i.footer;
                        r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, o), n.font = l.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), l.each(r, function(e) {
                            n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing
                        }))
                    },
                    drawBackground: function(t, i, n, o, r) {
                        n.fillStyle = e(i.backgroundColor, r), l.drawRoundedRectangle(n, t.x, t.y, o.width, o.height, i.cornerRadius), n.fill()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var i = {
                                    width: e.width,
                                    height: e.height
                                },
                                n = {
                                    x: e.x,
                                    y: e.y
                                },
                                o = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            this._options.enabled && (this.drawBackground(n, e, t, i, o), this.drawCaret(n, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e._options,
                            n = !1;
                        if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, i.mode, i), n = !l.arrayEquals(e._active, e._lastActive), e._lastActive = e._active, i.enabled || i.custom) {
                            e._eventPosition = l.getRelativePosition(t, e._chart);
                            var o = e._model;
                            e.update(!0), e.pivot(), n |= o.x !== e._model.x || o.y !== e._model.y
                        }
                        return n
                    }
                }), t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, i, n = 0,
                            o = 0,
                            r = 0;
                        for (e = 0, i = t.length; i > e; ++e) {
                            var a = t[e];
                            if (a && a.hasValue()) {
                                var s = a.tooltipPosition();
                                n += s.x, o += s.y, ++r
                            }
                        }
                        return {
                            x: Math.round(n / r),
                            y: Math.round(o / r)
                        }
                    },
                    nearest: function(t, e) {
                        var i, n, o, r = e.x,
                            a = e.y,
                            s = Number.POSITIVE_INFINITY;
                        for (n = 0, o = t.length; o > n; ++n) {
                            var d = t[n];
                            if (d && d.hasValue()) {
                                var c = d.getCenterPoint(),
                                    u = l.distanceBetweenPoints(e, c);
                                s > u && (s = u, i = d)
                            }
                        }
                        if (i) {
                            var h = i.tooltipPosition();
                            r = h.x, a = h.y
                        }
                        return {
                            x: r,
                            y: a
                        }
                    }
                }
            }
        }, {}],
        37: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global;
                i.elements.arc = {
                    backgroundColor: i.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }, t.elements.Arc = t.Element.extend({
                    inLabelRange: function(t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    },
                    inRange: function(t, i) {
                        var n = this._view;
                        if (n) {
                            for (var o = e.getAngleFromPoint(n, {
                                    x: t,
                                    y: i
                                }), r = o.angle, a = o.distance, s = n.startAngle, l = n.endAngle; s > l;) l += 2 * Math.PI;
                            for (; r > l;) r -= 2 * Math.PI;
                            for (; s > r;) r += 2 * Math.PI;
                            var d = r >= s && l >= r,
                                c = a >= n.innerRadius && a <= n.outerRadius;
                            return d && c
                        }
                        return !1
                    },
                    getCenterPoint: function() {
                        var t = this._view,
                            e = (t.startAngle + t.endAngle) / 2,
                            i = (t.innerRadius + t.outerRadius) / 2;
                        return {
                            x: t.x + Math.cos(e) * i,
                            y: t.y + Math.sin(e) * i
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition: function() {
                        var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * i,
                            y: t.y + Math.sin(e) * i
                        }
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view,
                            i = e.startAngle,
                            n = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }
        }, {}],
        38: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension: .4,
                    backgroundColor: i.defaultColor,
                    borderWidth: 3,
                    borderColor: i.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }, t.elements.Line = t.Element.extend({
                    draw: function() {
                        function t(t, e) {
                            var i = e._view;
                            e._view.steppedLine === !0 ? (l.lineTo(i.x, t._view.y), l.lineTo(i.x, i.y)) : 0 === e._view.tension ? l.lineTo(i.x, i.y) : l.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, i.controlPointPreviousX, i.controlPointPreviousY, i.x, i.y)
                        }
                        var n = this,
                            o = n._view,
                            r = o.spanGaps,
                            a = o.scaleZero,
                            s = n._loop;
                        s || ("top" === o.fill ? a = o.scaleTop : "bottom" === o.fill && (a = o.scaleBottom));
                        var l = n._chart.ctx;
                        l.save();
                        var d = n._children.slice(),
                            c = -1;
                        s && d.length && d.push(d[0]);
                        var u, h, p, f;
                        if (d.length && o.fill) {
                            for (l.beginPath(), u = 0; u < d.length; ++u) h = d[u], p = e.previousItem(d, u), f = h._view, 0 === u ? (s ? l.moveTo(a.x, a.y) : l.moveTo(f.x, a), f.skip || (c = u, l.lineTo(f.x, f.y))) : (p = -1 === c ? p : d[c], f.skip ? r || c !== u - 1 || (s ? l.lineTo(a.x, a.y) : l.lineTo(p._view.x, a)) : (c !== u - 1 ? r && -1 !== c ? t(p, h) : s ? l.lineTo(f.x, f.y) : (l.lineTo(f.x, a), l.lineTo(f.x, f.y)) : t(p, h), c = u));
                            s || -1 === c || l.lineTo(d[c]._view.x, a), l.fillStyle = o.backgroundColor || i.defaultColor, l.closePath(), l.fill()
                        }
                        var g = i.elements.line;
                        for (l.lineCap = o.borderCapStyle || g.borderCapStyle, l.setLineDash && l.setLineDash(o.borderDash || g.borderDash), l.lineDashOffset = o.borderDashOffset || g.borderDashOffset, l.lineJoin = o.borderJoinStyle || g.borderJoinStyle, l.lineWidth = o.borderWidth || g.borderWidth, l.strokeStyle = o.borderColor || i.defaultColor, l.beginPath(), c = -1, u = 0; u < d.length; ++u) h = d[u], p = e.previousItem(d, u), f = h._view, 0 === u ? f.skip || (l.moveTo(f.x, f.y), c = u) : (p = -1 === c ? p : d[c], f.skip || (c !== u - 1 && !r || -1 === c ? l.moveTo(f.x, f.y) : t(p, h), c = u));
                        l.stroke(), l.restore()
                    }
                })
            }
        }, {}],
        39: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }

                function i(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }
                var n = t.helpers,
                    o = t.defaults.global,
                    r = o.defaultColor;
                o.elements.point = {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: r,
                    borderWidth: 1,
                    borderColor: r,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }, t.elements.Point = t.Element.extend({
                    inRange: function(t, e) {
                        var i = this._view;
                        return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                    },
                    inLabelRange: e,
                    inXRange: e,
                    inYRange: i,
                    getCenterPoint: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    },
                    getArea: function() {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function() {
                        var e = this._view,
                            i = this._chart.ctx,
                            a = e.pointStyle,
                            s = e.radius,
                            l = e.x,
                            d = e.y;
                        e.skip || (i.strokeStyle = e.borderColor || r, i.lineWidth = n.getValueOrDefault(e.borderWidth, o.elements.point.borderWidth), i.fillStyle = e.backgroundColor || r, t.canvasHelpers.drawPoint(i, a, s, l, d))
                    }
                })
            }
        }, {}],
        40: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    return void 0 !== t._view.width
                }

                function i(t) {
                    var i, n, o, r, a = t._view;
                    if (e(t)) {
                        var s = a.width / 2;
                        i = a.x - s, n = a.x + s, o = Math.min(a.y, a.base), r = Math.max(a.y, a.base)
                    } else {
                        var l = a.height / 2;
                        i = Math.min(a.x, a.base), n = Math.max(a.x, a.base), o = a.y - l, r = a.y + l
                    }
                    return {
                        left: i,
                        top: o,
                        right: n,
                        bottom: r
                    }
                }
                var n = t.defaults.global;
                n.elements.rectangle = {
                    backgroundColor: n.defaultColor,
                    borderWidth: 0,
                    borderColor: n.defaultColor,
                    borderSkipped: "bottom"
                }, t.elements.Rectangle = t.Element.extend({
                    draw: function() {
                        function t(t) {
                            return l[(c + t) % 4]
                        }
                        var e = this._chart.ctx,
                            i = this._view,
                            n = i.width / 2,
                            o = i.x - n,
                            r = i.x + n,
                            a = i.base - (i.base - i.y),
                            s = i.borderWidth / 2;
                        i.borderWidth && (o += s, r -= s, a += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                        var l = [
                                [o, i.base],
                                [o, a],
                                [r, a],
                                [r, i.base]
                            ],
                            d = ["bottom", "left", "top", "right"],
                            c = d.indexOf(i.borderSkipped, 0); - 1 === c && (c = 0);
                        var u = t(0);
                        e.moveTo(u[0], u[1]);
                        for (var h = 1; 4 > h; h++) u = t(h), e.lineTo(u[0], u[1]);
                        e.fill(), i.borderWidth && e.stroke()
                    },
                    height: function() {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function(t, e) {
                        var n = !1;
                        if (this._view) {
                            var o = i(this);
                            n = t >= o.left && t <= o.right && e >= o.top && e <= o.bottom
                        }
                        return n
                    },
                    inLabelRange: function(t, n) {
                        var o = this;
                        if (!o._view) return !1;
                        var r = !1,
                            a = i(o);
                        return r = e(o) ? t >= a.left && t <= a.right : n >= a.top && n <= a.bottom
                    },
                    inXRange: function(t) {
                        var e = i(this);
                        return t >= e.left && t <= e.right
                    },
                    inYRange: function(t) {
                        var e = i(this);
                        return t >= e.top && t <= e.bottom
                    },
                    getCenterPoint: function() {
                        var t, i, n = this._view;
                        return e(this) ? (t = n.x, i = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, i = n.y), {
                            x: t,
                            y: i
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return t.width * Math.abs(t.y - t.base)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                })
            }
        }, {}],
        41: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "bottom"
                    },
                    n = t.Scale.extend({
                        getLabels: function() {
                            var t = this.chart.data;
                            return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        },
                        determineDataLimits: function() {
                            var t = this,
                                i = t.getLabels();
                            t.minIndex = 0, t.maxIndex = i.length - 1;
                            var n;
                            void 0 !== t.options.ticks.min && (n = e.indexOf(i, t.options.ticks.min), t.minIndex = -1 !== n ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(i, t.options.ticks.max), t.maxIndex = -1 !== n ? n : t.maxIndex), t.min = i[t.minIndex], t.max = i[t.maxIndex]
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                n = i.chart.data,
                                o = i.isHorizontal();
                            return n.xLabels && o || n.yLabels && !o ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t]
                        },
                        getPixelForValue: function(t, e, i, n) {
                            var o = this,
                                r = Math.max(o.maxIndex + 1 - o.minIndex - (o.options.gridLines.offsetGridLines ? 0 : 1), 1);
                            if (void 0 !== t && isNaN(e)) {
                                var a = o.getLabels(),
                                    s = a.indexOf(t);
                                e = -1 !== s ? s : e
                            }
                            if (o.isHorizontal()) {
                                var l = o.width - (o.paddingLeft + o.paddingRight),
                                    d = l / r,
                                    c = d * (e - o.minIndex) + o.paddingLeft;
                                return (o.options.gridLines.offsetGridLines && n || o.maxIndex === o.minIndex && n) && (c += d / 2), o.left + Math.round(c)
                            }
                            var u = o.height - (o.paddingTop + o.paddingBottom),
                                h = u / r,
                                p = h * (e - o.minIndex) + o.paddingTop;
                            return o.options.gridLines.offsetGridLines && n && (p += h / 2), o.top + Math.round(p)
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                        },
                        getValueForPixel: function(t) {
                            var e, i = this,
                                n = Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                o = i.isHorizontal(),
                                r = o ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                                a = r / n;
                            return t -= o ? i.left : i.top, i.options.gridLines.offsetGridLines && (t -= a / 2), t -= o ? i.paddingLeft : i.paddingTop, e = 0 >= t ? 0 : Math.round(t / a)
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    });
                t.scaleService.registerScaleType("category", n, i)
            }
        }, {}],
        42: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "left",
                        ticks: {
                            callback: t.Ticks.formatters.linear
                        }
                    },
                    n = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return s ? t.xAxisID === i.id : t.yAxisID === i.id
                            }
                            var i = this,
                                n = i.options,
                                o = i.chart,
                                r = o.data,
                                a = r.datasets,
                                s = i.isHorizontal();
                            if (i.min = null, i.max = null, n.stacked) {
                                var l = {};
                                e.each(a, function(r, a) {
                                    var s = o.getDatasetMeta(a);
                                    void 0 === l[s.type] && (l[s.type] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var d = l[s.type].positiveValues,
                                        c = l[s.type].negativeValues;
                                    o.isDatasetVisible(a) && t(s) && e.each(r.data, function(t, e) {
                                        var o = +i.getRightValue(t);
                                        isNaN(o) || s.data[e].hidden || (d[e] = d[e] || 0, c[e] = c[e] || 0, n.relativePoints ? d[e] = 100 : 0 > o ? c[e] += o : d[e] += o)
                                    })
                                }), e.each(l, function(t) {
                                    var n = t.positiveValues.concat(t.negativeValues),
                                        o = e.min(n),
                                        r = e.max(n);
                                    i.min = null === i.min ? o : Math.min(i.min, o), i.max = null === i.max ? r : Math.max(i.max, r)
                                })
                            } else e.each(a, function(n, r) {
                                var a = o.getDatasetMeta(r);
                                o.isDatasetVisible(r) && t(a) && e.each(n.data, function(t, e) {
                                    var n = +i.getRightValue(t);
                                    isNaN(n) || a.data[e].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var i, n = this,
                                o = n.options.ticks;
                            if (n.isHorizontal()) i = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(n.width / 50));
                            else {
                                var r = e.getValueOrDefault(o.fontSize, t.defaults.global.defaultFontSize);
                                i = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(n.height / (2 * r)))
                            }
                            return i
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e, i, n = this,
                                o = n.paddingLeft,
                                r = n.paddingBottom,
                                a = n.start,
                                s = +n.getRightValue(t),
                                l = n.end - a;
                            return n.isHorizontal() ? (i = n.width - (o + n.paddingRight), e = n.left + i / l * (s - a), Math.round(e + o)) : (i = n.height - (n.paddingTop + r), e = n.bottom - r - i / l * (s - a), Math.round(e))
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal(),
                                n = e.paddingLeft,
                                o = e.paddingBottom,
                                r = i ? e.width - (n + e.paddingRight) : e.height - (e.paddingTop + o),
                                a = (i ? t - e.left - n : e.bottom - o - t) / r;
                            return e.start + (e.end - e.start) * a
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", n, i)
            }
        }, {}],
        43: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = e.noop;
                t.LinearScaleBase = t.Scale.extend({
                    handleTickRangeOptions: function() {
                        var t = this,
                            i = t.options,
                            n = i.ticks;
                        if (n.beginAtZero) {
                            var o = e.sign(t.min),
                                r = e.sign(t.max);
                            0 > o && 0 > r ? t.max = 0 : o > 0 && r > 0 && (t.min = 0)
                        }
                        void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (t.max = Math.max(t.max, n.suggestedMax)), t.min === t.max && (t.max++, n.beginAtZero || t.min--)
                    },
                    getTickLimit: i,
                    handleDirectionalChanges: i,
                    buildTicks: function() {
                        var i = this,
                            n = i.options,
                            o = n.ticks,
                            r = i.getTickLimit();
                        r = Math.max(2, r);
                        var a = {
                                maxTicks: r,
                                min: o.min,
                                max: o.max,
                                stepSize: e.getValueOrDefault(o.fixedStepSize, o.stepSize)
                            },
                            s = i.ticks = t.Ticks.generators.linear(a, i);
                        i.handleDirectionalChanges(), i.max = e.max(s), i.min = e.min(s), o.reverse ? (s.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {}],
        44: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "left",
                        ticks: {
                            callback: t.Ticks.formatters.logarithmic
                        }
                    },
                    n = t.Scale.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return d ? t.xAxisID === i.id : t.yAxisID === i.id
                            }
                            var i = this,
                                n = i.options,
                                o = n.ticks,
                                r = i.chart,
                                a = r.data,
                                s = a.datasets,
                                l = e.getValueOrDefault,
                                d = i.isHorizontal();
                            if (i.min = null, i.max = null, i.minNotZero = null, n.stacked) {
                                var c = {};
                                e.each(s, function(o, a) {
                                    var s = r.getDatasetMeta(a);
                                    r.isDatasetVisible(a) && t(s) && (void 0 === c[s.type] && (c[s.type] = []), e.each(o.data, function(t, e) {
                                        var o = c[s.type],
                                            r = +i.getRightValue(t);
                                        isNaN(r) || s.data[e].hidden || (o[e] = o[e] || 0, n.relativePoints ? o[e] = 100 : o[e] += r)
                                    }))
                                }), e.each(c, function(t) {
                                    var n = e.min(t),
                                        o = e.max(t);
                                    i.min = null === i.min ? n : Math.min(i.min, n), i.max = null === i.max ? o : Math.max(i.max, o)
                                })
                            } else e.each(s, function(n, o) {
                                var a = r.getDatasetMeta(o);
                                r.isDatasetVisible(o) && t(a) && e.each(n.data, function(t, e) {
                                    var n = +i.getRightValue(t);
                                    isNaN(n) || a.data[e].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n), 0 !== n && (null === i.minNotZero || n < i.minNotZero) && (i.minNotZero = n))
                                })
                            });
                            i.min = l(o.min, i.min), i.max = l(o.max, i.max), i.min === i.max && (0 !== i.min && null !== i.min ? (i.min = Math.pow(10, Math.floor(e.log10(i.min)) - 1), i.max = Math.pow(10, Math.floor(e.log10(i.max)) + 1)) : (i.min = 1, i.max = 10))
                        },
                        buildTicks: function() {
                            var i = this,
                                n = i.options,
                                o = n.ticks,
                                r = {
                                    min: o.min,
                                    max: o.max
                                },
                                a = i.ticks = t.Ticks.generators.logarithmic(r, i);
                            i.isHorizontal() || a.reverse(), i.max = e.max(a), i.min = e.min(a), o.reverse ? (a.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        getPixelForValue: function(t) {
                            var i, n, o, r = this,
                                a = r.start,
                                s = +r.getRightValue(t),
                                l = r.paddingTop,
                                d = r.paddingBottom,
                                c = r.paddingLeft,
                                u = r.options,
                                h = u.ticks;
                            return r.isHorizontal() ? (o = e.log10(r.end) - e.log10(a), 0 === s ? n = r.left + c : (i = r.width - (c + r.paddingRight), n = r.left + i / o * (e.log10(s) - e.log10(a)), n += c)) : (i = r.height - (l + d), 0 !== a || h.reverse ? 0 === r.end && h.reverse ? (o = e.log10(r.start) - e.log10(r.minNotZero), n = s === r.end ? r.top + l : s === r.minNotZero ? r.top + l + .02 * i : r.top + l + .02 * i + .98 * i / o * (e.log10(s) - e.log10(r.minNotZero))) : (o = e.log10(r.end) - e.log10(a), i = r.height - (l + d), n = r.bottom - d - i / o * (e.log10(s) - e.log10(a))) : (o = e.log10(r.end) - e.log10(r.minNotZero), n = s === a ? r.bottom - d : s === r.minNotZero ? r.bottom - d - .02 * i : r.bottom - d - .02 * i - .98 * i / o * (e.log10(s) - e.log10(r.minNotZero)))), n
                        },
                        getValueForPixel: function(t) {
                            var i, n, o = this,
                                r = e.log10(o.end) - e.log10(o.start);
                            return o.isHorizontal() ? (n = o.width - (o.paddingLeft + o.paddingRight), i = o.start * Math.pow(10, (t - o.left - o.paddingLeft) * r / n)) : (n = o.height - (o.paddingTop + o.paddingBottom), i = Math.pow(10, (o.bottom - o.paddingBottom - t) * r / n) / o.start), i
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", n, i)
            }
        }, {}],
        45: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global,
                    n = {
                        display: !0,
                        animate: !0,
                        lineArc: !1,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: t.Ticks.formatters.linear
                        },
                        pointLabels: {
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    },
                    o = t.LinearScaleBase.extend({
                        getValueCount: function() {
                            return this.chart.data.labels.length
                        },
                        setDimensions: function() {
                            var t = this,
                                n = t.options,
                                o = n.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var r = e.min([t.height, t.width]),
                                a = e.getValueOrDefault(o.fontSize, i.defaultFontSize);
                            t.drawingArea = n.display ? r / 2 - (a / 2 + o.backdropPaddingY) : r / 2
                        },
                        determineDataLimits: function() {
                            var t = this,
                                i = t.chart;
                            t.min = null, t.max = null, e.each(i.data.datasets, function(n, o) {
                                if (i.isDatasetVisible(o)) {
                                    var r = i.getDatasetMeta(o);
                                    e.each(n.data, function(e, i) {
                                        var n = +t.getRightValue(e);
                                        isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                                    })
                                }
                            }), t.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t = this.options.ticks,
                                n = e.getValueOrDefault(t.fontSize, i.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t, n, o, r, a, s, l, d, c, u, h, p, f = this.options.pointLabels,
                                g = e.getValueOrDefault(f.fontSize, i.defaultFontSize),
                                m = e.getValueOrDefault(f.fontStyle, i.defaultFontStyle),
                                v = e.getValueOrDefault(f.fontFamily, i.defaultFontFamily),
                                y = e.fontString(g, m, v),
                                b = e.min([this.height / 2 - g - 5, this.width / 2]),
                                x = this.width,
                                w = 0;
                            for (this.ctx.font = y, n = 0; n < this.getValueCount(); n++) {
                                t = this.getPointPosition(n, b), o = this.ctx.measureText(this.pointLabels[n] ? this.pointLabels[n] : "").width + 5;
                                var k = this.getIndexAngle(n) + Math.PI / 2,
                                    S = 360 * k / (2 * Math.PI) % 360;
                                0 === S || 180 === S ? (r = o / 2, t.x + r > x && (x = t.x + r, a = n), t.x - r < w && (w = t.x - r, l = n)) : 180 > S ? t.x + o > x && (x = t.x + o, a = n) : t.x - o < w && (w = t.x - o, l = n)
                            }
                            c = w, u = Math.ceil(x - this.width), s = this.getIndexAngle(a), d = this.getIndexAngle(l), h = u / Math.sin(s + Math.PI / 2), p = c / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, p = e.isNumber(p) ? p : 0, this.drawingArea = Math.round(b - (p + h) / 2), this.setCenterPoint(p, h)
                        },
                        setCenterPoint: function(t, e) {
                            var i = this,
                                n = i.width - e - i.drawingArea,
                                o = t + i.drawingArea;
                            i.xCenter = Math.round((o + n) / 2 + i.left), i.yCenter = Math.round(i.height / 2 + i.top)
                        },
                        getIndexAngle: function(t) {
                            var e = 2 * Math.PI / this.getValueCount(),
                                i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                                n = i * Math.PI * 2 / 360;
                            return t * e - Math.PI / 2 + n
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (null === t) return 0;
                            var i = e.drawingArea / (e.max - e.min);
                            return e.options.reverse ? (e.max - t) * i : (t - e.min) * i
                        },
                        getPointPosition: function(t, e) {
                            var i = this,
                                n = i.getIndexAngle(t);
                            return {
                                x: Math.round(Math.cos(n) * e) + i.xCenter,
                                y: Math.round(Math.sin(n) * e) + i.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this,
                                e = t.min,
                                i = t.max;
                            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
                        },
                        draw: function() {
                            var t = this,
                                n = t.options,
                                o = n.gridLines,
                                r = n.ticks,
                                a = n.angleLines,
                                s = n.pointLabels,
                                l = e.getValueOrDefault;
                            if (n.display) {
                                var d = t.ctx,
                                    c = l(r.fontSize, i.defaultFontSize),
                                    u = l(r.fontStyle, i.defaultFontStyle),
                                    h = l(r.fontFamily, i.defaultFontFamily),
                                    p = e.fontString(c, u, h);
                                if (e.each(t.ticks, function(a, s) {
                                        if (s > 0 || n.reverse) {
                                            var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
                                                h = t.yCenter - u;
                                            if (o.display && 0 !== s)
                                                if (d.strokeStyle = e.getValueAtIndexOrDefault(o.color, s - 1), d.lineWidth = e.getValueAtIndexOrDefault(o.lineWidth, s - 1), n.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, u, 0, 2 * Math.PI), d.closePath(), d.stroke();
                                                else {
                                                    d.beginPath();
                                                    for (var f = 0; f < t.getValueCount(); f++) {
                                                        var g = t.getPointPosition(f, u);
                                                        0 === f ? d.moveTo(g.x, g.y) : d.lineTo(g.x, g.y)
                                                    }
                                                    d.closePath(), d.stroke()
                                                }
                                            if (r.display) {
                                                var m = l(r.fontColor, i.defaultFontColor);
                                                if (d.font = p, r.showLabelBackdrop) {
                                                    var v = d.measureText(a).width;
                                                    d.fillStyle = r.backdropColor, d.fillRect(t.xCenter - v / 2 - r.backdropPaddingX, h - c / 2 - r.backdropPaddingY, v + 2 * r.backdropPaddingX, c + 2 * r.backdropPaddingY)
                                                }
                                                d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(a, t.xCenter, h)
                                            }
                                        }
                                    }), !n.lineArc) {
                                    d.lineWidth = a.lineWidth, d.strokeStyle = a.color;
                                    for (var f = t.getDistanceFromCenterForValue(n.reverse ? t.min : t.max), g = l(s.fontSize, i.defaultFontSize), m = l(s.fontStyle, i.defaultFontStyle), v = l(s.fontFamily, i.defaultFontFamily), y = e.fontString(g, m, v), b = t.getValueCount() - 1; b >= 0; b--) {
                                        if (a.display) {
                                            var x = t.getPointPosition(b, f);
                                            d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(x.x, x.y), d.stroke(), d.closePath()
                                        }
                                        var w = t.getPointPosition(b, f + 5),
                                            k = l(s.fontColor, i.defaultFontColor);
                                        d.font = y, d.fillStyle = k;
                                        var S = t.pointLabels,
                                            C = this.getIndexAngle(b) + Math.PI / 2,
                                            T = 360 * C / (2 * Math.PI) % 360;
                                        d.textAlign = 0 === T || 180 === T ? "center" : 180 > T ? "left" : "right", d.textBaseline = 90 === T || 270 === T ? "middle" : T > 270 || 90 > T ? "bottom" : "top", d.fillText(S[b] ? S[b] : "", w.x, w.y)
                                    }
                                }
                            }
                        }
                    });
                t.scaleService.registerScaleType("radialLinear", o, n)
            }
        }, {}],
        46: [function(t, e, i) {
            "use strict";
            var n = t(1);
            n = "function" == typeof n ? n : window.moment, e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        units: [{
                            name: "millisecond",
                            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                        }, {
                            name: "second",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "minute",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "hour",
                            steps: [1, 2, 3, 6, 12]
                        }, {
                            name: "day",
                            steps: [1, 2, 5]
                        }, {
                            name: "week",
                            maxStep: 4
                        }, {
                            name: "month",
                            maxStep: 3
                        }, {
                            name: "quarter",
                            maxStep: 4
                        }, {
                            name: "year",
                            maxStep: !1
                        }]
                    },
                    o = {
                        position: "bottom",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm:ss a",
                                hour: "MMM D, hA",
                                day: "ll",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1
                        }
                    },
                    r = t.Scale.extend({
                        initialize: function() {
                            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            t.Scale.prototype.initialize.call(this)
                        },
                        getLabelMoment: function(t, e) {
                            return null === t || null === e ? null : void 0 !== this.labelMoments[t] ? this.labelMoments[t][e] : null
                        },
                        getLabelDiff: function(t, e) {
                            var i = this;
                            return null === t || null === e ? null : (void 0 === i.labelDiffs && i.buildLabelDiffs(), void 0 !== i.labelDiffs[t] ? i.labelDiffs[t][e] : null)
                        },
                        getMomentStartOf: function(t) {
                            var e = this;
                            return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
                        },
                        determineDataLimits: function() {
                            var t = this;
                            t.labelMoments = [];
                            var i = [];
                            t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function(e) {
                                var n = t.parseTime(e);
                                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), i.push(n))
                            }, t), t.firstTick = n.min.call(t, i), t.lastTick = n.max.call(t, i)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function(o, r) {
                                var a = [],
                                    s = t.chart.isDatasetVisible(r);
                                "object" == typeof o.data[0] && null !== o.data[0] ? e.each(o.data, function(e) {
                                    var i = t.parseTime(t.getRightValue(e));
                                    i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i), s && (t.firstTick = null !== t.firstTick ? n.min(t.firstTick, i) : i, t.lastTick = null !== t.lastTick ? n.max(t.lastTick, i) : i))
                                }, t) : a = i, t.labelMoments.push(a)
                            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || n()).clone(), t.lastTick = (t.lastTick || n()).clone()
                        },
                        buildLabelDiffs: function() {
                            var t = this;
                            t.labelDiffs = [];
                            var i = [];
                            t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function(e) {
                                var n = t.parseTime(e);
                                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), i.push(n.diff(t.firstTick, t.tickUnit, !0)))
                            }, t), e.each(t.chart.data.datasets, function(n) {
                                var o = [];
                                "object" == typeof n.data[0] && null !== n.data[0] ? e.each(n.data, function(e) {
                                    var i = t.parseTime(t.getRightValue(e));
                                    i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), o.push(i.diff(t.firstTick, t.tickUnit, !0)))
                                }, t) : o = i, t.labelDiffs.push(o)
                            }, t)
                        },
                        buildTicks: function() {
                            var n = this;
                            n.ctx.save();
                            var o = e.getValueOrDefault(n.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                                r = e.getValueOrDefault(n.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                                a = e.getValueOrDefault(n.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                                s = e.fontString(o, r, a);
                            if (n.ctx.font = s, n.ticks = [], n.unitScale = 1, n.scaleSizeInUnits = 0, n.options.time.unit) n.tickUnit = n.options.time.unit || "day", n.displayFormat = n.options.time.displayFormats[n.tickUnit], n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0), n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, 1);
                            else {
                                var l = n.isHorizontal() ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.paddingBottom),
                                    d = n.tickFormatFunction(n.firstTick, 0, []),
                                    c = n.ctx.measureText(d).width;
                                c = c * Math.cos(e.toRadians(n.options.ticks.maxRotation)) + o * Math.sin(e.toRadians(n.options.ticks.maxRotation));
                                var u = l / c;
                                n.tickUnit = n.options.time.minUnit, n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0), n.displayFormat = n.options.time.displayFormats[n.tickUnit];
                                for (var h = 0, p = i.units[h]; h < i.units.length;) {
                                    if (n.unitScale = 1, e.isArray(p.steps) && Math.ceil(n.scaleSizeInUnits / u) < e.max(p.steps)) {
                                        for (var f = 0; f < p.steps.length; ++f)
                                            if (p.steps[f] >= Math.ceil(n.scaleSizeInUnits / u)) {
                                                n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, p.steps[f]);
                                                break
                                            }
                                        break
                                    }
                                    if (p.maxStep === !1 || Math.ceil(n.scaleSizeInUnits / u) < p.maxStep) {
                                        n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, Math.ceil(n.scaleSizeInUnits / u));
                                        break
                                    }++h, p = i.units[h], n.tickUnit = p.name;
                                    var g = n.firstTick.diff(n.getMomentStartOf(n.firstTick), n.tickUnit, !0),
                                        m = n.getMomentStartOf(n.lastTick.clone().add(1, n.tickUnit)).diff(n.lastTick, n.tickUnit, !0);
                                    n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0) + g + m, n.displayFormat = n.options.time.displayFormats[p.name]
                                }
                            }
                            var v;
                            if (n.options.time.min ? v = n.getMomentStartOf(n.firstTick) : (n.firstTick = n.getMomentStartOf(n.firstTick), v = n.firstTick), !n.options.time.max) {
                                var y = n.getMomentStartOf(n.lastTick),
                                    b = y.diff(n.lastTick, n.tickUnit, !0);
                                0 > b ? n.lastTick = n.getMomentStartOf(n.lastTick.add(1, n.tickUnit)) : b >= 0 && (n.lastTick = y), n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0)
                            }
                            n.options.time.displayFormat && (n.displayFormat = n.options.time.displayFormat), n.ticks.push(n.firstTick.clone());
                            for (var x = 1; x <= n.scaleSizeInUnits; ++x) {
                                var w = v.clone().add(x, n.tickUnit);
                                if (n.options.time.max && w.diff(n.lastTick, n.tickUnit, !0) >= 0) break;
                                x % n.unitScale == 0 && n.ticks.push(w)
                            }(0 !== n.ticks[n.ticks.length - 1].diff(n.lastTick, n.tickUnit) || 0 === n.scaleSizeInUnits) && (n.options.time.max ? (n.ticks.push(n.lastTick.clone()), n.scaleSizeInUnits = n.lastTick.diff(n.ticks[0], n.tickUnit, !0)) : (n.ticks.push(n.lastTick.clone()), n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0))), n.ctx.restore(), n.labelDiffs = void 0
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                n = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "";
                            return "object" == typeof i.chart.data.datasets[e].data[0] && (n = i.getRightValue(i.chart.data.datasets[e].data[t])), i.options.time.tooltipFormat && (n = i.parseTime(n).format(i.options.time.tooltipFormat)), n
                        },
                        tickFormatFunction: function(t, i, n) {
                            var o = t.format(this.displayFormat),
                                r = this.options.ticks,
                                a = e.getValueOrDefault(r.callback, r.userCallback);
                            return a ? a(o, i, n) : o
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
                        },
                        getPixelForValue: function(t, e, i) {
                            var n = this,
                                o = null;
                            if (void 0 !== e && void 0 !== i && (o = n.getLabelDiff(i, e)), null === o && (t && t.isValid || (t = n.parseTime(n.getRightValue(t))), t && t.isValid && t.isValid() && (o = t.diff(n.firstTick, n.tickUnit, !0))), null !== o) {
                                var r = 0 !== o ? o / n.scaleSizeInUnits : o;
                                if (n.isHorizontal()) {
                                    var a = n.width - (n.paddingLeft + n.paddingRight),
                                        s = a * r + n.paddingLeft;
                                    return n.left + Math.round(s)
                                }
                                var l = n.height - (n.paddingTop + n.paddingBottom),
                                    d = l * r + n.paddingTop;
                                return n.top + Math.round(d)
                            }
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickMoments[t], null, null)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                                o = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / i;
                            return o *= e.scaleSizeInUnits, e.firstTick.clone().add(n.duration(o, e.tickUnit).asSeconds(), "seconds")
                        },
                        parseTime: function(t) {
                            var e = this;
                            return "string" == typeof e.options.time.parser ? n(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? n(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : n(t, e.options.time.format)
                        }
                    });
                t.scaleService.registerScaleType("time", r, o)
            }
        }, {
            1: 1
        }]
    }, {}, [7])(7)
}),
function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";

    function t(t, e) {
        var i = document.createElement("div");
        return d(i, e), t.appendChild(i), i
    }

    function e(t) {
        return t.filter(function(t) {
            return !this[t] && (this[t] = !0)
        }, {})
    }

    function i(t, e) {
        return Math.round(t / e) * e
    }

    function n(t, e) {
        var i = t.getBoundingClientRect(),
            n = t.ownerDocument,
            o = n.documentElement,
            r = h();
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0), e ? i.top + r.y - o.clientTop : i.left + r.x - o.clientLeft
    }

    function o(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function r(t, e, i) {
        i > 0 && (d(t, e), setTimeout(function() {
            c(t, e)
        }, i))
    }

    function a(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function s(t) {
        return Array.isArray(t) ? t : [t]
    }

    function l(t) {
        t = String(t);
        var e = t.split(".");
        return e.length > 1 ? e[1].length : 0
    }

    function d(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function c(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function u(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
    }

    function h() {
        var t = void 0 !== window.pageXOffset,
            e = "CSS1Compat" === (document.compatMode || "");
        return {
            x: t ? window.pageXOffset : e ? document.documentElement.scrollLeft : document.body.scrollLeft,
            y: t ? window.pageYOffset : e ? document.documentElement.scrollTop : document.body.scrollTop
        }
    }

    function p() {
        return window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        }
    }

    function f(t, e) {
        return 100 / (e - t)
    }

    function g(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function m(t, e) {
        return g(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
    }

    function v(t, e) {
        return e * (t[1] - t[0]) / 100 + t[0]
    }

    function y(t, e) {
        for (var i = 1; t >= e[i];) i += 1;
        return i
    }

    function b(t, e, i) {
        if (i >= t.slice(-1)[0]) return 100;
        var n, o, r, a, s = y(i, t);
        return n = t[s - 1], o = t[s], r = e[s - 1], a = e[s], r + m([n, o], i) / f(r, a)
    }

    function x(t, e, i) {
        if (i >= 100) return t.slice(-1)[0];
        var n, o, r, a, s = y(i, e);
        return n = t[s - 1], o = t[s], r = e[s - 1], a = e[s], v([n, o], (i - r) * f(r, a))
    }

    function w(t, e, n, o) {
        if (100 === o) return o;
        var r, a, s = y(o, t);
        return n ? (r = t[s - 1], a = t[s], o - r > (a - r) / 2 ? a : r) : e[s - 1] ? t[s - 1] + i(o - t[s - 1], e[s - 1]) : o
    }

    function k(t, e, i) {
        var n;
        if ("number" == typeof e && (e = [e]), "[object Array]" !== Object.prototype.toString.call(e)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !o(n) || !o(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        i.xPct.push(n), i.xVal.push(e[0]), n ? i.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (i.xSteps[0] = e[1]), i.xHighestCompleteStep.push(0)
    }

    function S(t, e, i) {
        if (!e) return !0;
        i.xSteps[t] = g([i.xVal[t], i.xVal[t + 1]], e) / f(i.xPct[t], i.xPct[t + 1]);
        var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
            o = Math.ceil(Number(n.toFixed(3)) - 1),
            r = i.xVal[t] + i.xNumSteps[t] * o;
        i.xHighestCompleteStep[t] = r
    }

    function C(t, e, i, n) {
        this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e, this.direction = i;
        var o, r = [];
        for (o in t) t.hasOwnProperty(o) && r.push([t[o], o]);
        for (r.length && "object" == typeof r[0][0] ? r.sort(function(t, e) {
                return t[0][0] - e[0][0]
            }) : r.sort(function(t, e) {
                return t[0] - e[0]
            }), o = 0; o < r.length; o++) k(r[o][1], r[o][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), o = 0; o < this.xNumSteps.length; o++) S(o, this.xNumSteps[o], this)
    }

    function T(t, e) {
        if (!o(e)) throw new Error("noUiSlider: 'step' is not numeric.");
        t.singleStep = e
    }

    function I(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new C(e, t.snap, t.dir, t.singleStep)
    }

    function _(t, e) {
        if (e = s(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function M(t, e) {
        if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function A(t, e) {
        if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function P(t, e) {
        if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider: 'animationDuration' option must be a number.")
    }

    function E(t, e) {
        var i, n = [!1];
        if (e === !0 || e === !1) {
            for (i = 1; i < t.handles; i++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function D(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function O(t, e) {
        if (!o(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function L(t, e) {
        if (!o(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function z(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function F(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var i = e.indexOf("tap") >= 0,
            n = e.indexOf("drag") >= 0,
            o = e.indexOf("fixed") >= 0,
            r = e.indexOf("snap") >= 0,
            a = e.indexOf("hover") >= 0;
        if (o) {
            if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            O(t, t.start[1] - t.start[0])
        }
        t.events = {
            tap: i || r,
            drag: n,
            fixed: o,
            snap: r,
            hover: a
        }
    }

    function R(t, e) {
        if (e !== !1)
            if (e === !0) {
                t.tooltips = [];
                for (var i = 0; i < t.handles; i++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = s(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function N(t, e) {
        if (t.format = e, "function" == typeof e.to && "function" == typeof e.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function B(t, e) {
        if (void 0 !== e && "string" != typeof e && e !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function W(t, e) {
        if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix) {
            t.cssClasses = {};
            for (var i in e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i])
        } else t.cssClasses = e
    }

    function j(t, e) {
        if (e !== !0 && e !== !1) throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
        t.useRequestAnimationFrame = e
    }

    function H(t) {
        var e, i = {
            margin: 0,
            limit: 0,
            animate: !0,
            animationDuration: 300,
            format: q
        };
        e = {
            step: {
                r: !1,
                t: T
            },
            start: {
                r: !0,
                t: _
            },
            connect: {
                r: !0,
                t: E
            },
            direction: {
                r: !0,
                t: z
            },
            snap: {
                r: !1,
                t: M
            },
            animate: {
                r: !1,
                t: A
            },
            animationDuration: {
                r: !1,
                t: P
            },
            range: {
                r: !0,
                t: I
            },
            orientation: {
                r: !1,
                t: D
            },
            margin: {
                r: !1,
                t: O
            },
            limit: {
                r: !1,
                t: L
            },
            behaviour: {
                r: !0,
                t: F
            },
            format: {
                r: !1,
                t: N
            },
            tooltips: {
                r: !1,
                t: R
            },
            cssPrefix: {
                r: !1,
                t: B
            },
            cssClasses: {
                r: !1,
                t: W
            },
            useRequestAnimationFrame: {
                r: !1,
                t: j
            }
        };
        var n = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            },
            useRequestAnimationFrame: !0
        };
        Object.keys(e).forEach(function(o) {
            if (void 0 === t[o] && void 0 === n[o]) {
                if (e[o].r) throw new Error("noUiSlider: '" + o + "' is required.");
                return !0
            }
            e[o].t(i, void 0 === t[o] ? n[o] : t[o])
        }), i.pips = t.pips;
        var o = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        return i.style = o[i.dir][i.ort], i.styleOposite = o[i.dir ? 0 : 1][i.ort], i
    }

    function V(i, o, l) {
        function f(e, i) {
            var n = t(e, o.cssClasses.origin);
            return t(n, o.cssClasses.handle).setAttribute("data-handle", i), n
        }

        function g(e, i) {
            return !!i && t(e, o.cssClasses.connect)
        }

        function m(t, e) {
            et = [], it = [], it.push(g(e, t[0]));
            for (var i = 0; i < o.handles; i++) et.push(f(e, i)), st[i] = i, it.push(g(e, t[i + 1]))
        }

        function v(e) {
            d(e, o.cssClasses.target), 0 === o.dir ? d(e, o.cssClasses.ltr) : d(e, o.cssClasses.rtl), 0 === o.ort ? d(e, o.cssClasses.horizontal) : d(e, o.cssClasses.vertical), tt = t(e, o.cssClasses.base)
        }

        function y(e, i) {
            return !!o.tooltips[i] && t(e.firstChild, o.cssClasses.tooltip)
        }

        function b() {
            var t = et.map(y);
            Z("update", function(e, i, n) {
                if (t[i]) {
                    var r = e[i];
                    o.tooltips[i] !== !0 && (r = o.tooltips[i].to(n[i])), t[i].innerHTML = r
                }
            })
        }

        function x(t, e, i) {
            if ("range" === t || "steps" === t) return lt.xVal;
            if ("count" === t) {
                var n, o = 100 / (e - 1),
                    r = 0;
                for (e = [];
                    (n = r++ * o) <= 100;) e.push(n);
                t = "positions"
            }
            return "positions" === t ? e.map(function(t) {
                return lt.fromStepping(i ? lt.getStep(t) : t)
            }) : "values" === t ? i ? e.map(function(t) {
                return lt.fromStepping(lt.getStep(lt.toStepping(t)))
            }) : e : void 0
        }

        function w(t, i, n) {
            function o(t, e) {
                return (t + e).toFixed(7) / 1
            }
            var r = {},
                a = lt.xVal[0],
                s = lt.xVal[lt.xVal.length - 1],
                l = !1,
                d = !1,
                c = 0;
            return n = e(n.slice().sort(function(t, e) {
                return t - e
            })), n[0] !== a && (n.unshift(a), l = !0), n[n.length - 1] !== s && (n.push(s), d = !0), n.forEach(function(e, a) {
                var s, u, h, p, f, g, m, v, y, b, x = e,
                    w = n[a + 1];
                if ("steps" === i && (s = lt.xNumSteps[a]), s || (s = w - x), x !== !1 && void 0 !== w)
                    for (s = Math.max(s, 1e-7), u = x; u <= w; u = o(u, s)) {
                        for (p = lt.toStepping(u), f = p - c, v = f / t, y = Math.round(v), b = f / y, h = 1; h <= y; h += 1) g = c + h * b, r[g.toFixed(5)] = ["x", 0];
                        m = n.indexOf(u) > -1 ? 1 : "steps" === i ? 2 : 0, !a && l && (m = 0), u === w && d || (r[p.toFixed(5)] = [u, m]), c = p
                    }
            }), r
        }

        function k(t, e, i) {
            function n(t, e) {
                var i = e === o.cssClasses.value,
                    n = i ? h : p,
                    r = i ? c : u;
                return e + " " + n[o.ort] + " " + r[t]
            }

            function r(t, e, i) {
                return 'class="' + n(i[1], e) + '" style="' + o.style + ": " + t + '%"'
            }

            function a(t, n) {
                n[1] = n[1] && e ? e(n[0], n[1]) : n[1], l += "<div " + r(t, o.cssClasses.marker, n) + "></div>", n[1] && (l += "<div " + r(t, o.cssClasses.value, n) + ">" + i.to(n[0]) + "</div>")
            }
            var s = document.createElement("div"),
                l = "",
                c = [o.cssClasses.valueNormal, o.cssClasses.valueLarge, o.cssClasses.valueSub],
                u = [o.cssClasses.markerNormal, o.cssClasses.markerLarge, o.cssClasses.markerSub],
                h = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
                p = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
            return d(s, o.cssClasses.pips), d(s, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical), Object.keys(t).forEach(function(e) {
                a(e, t[e])
            }), s.innerHTML = l, s
        }

        function S(t) {
            var e = t.mode,
                i = t.density || 1,
                n = t.filter || !1,
                o = t.values || !1,
                r = t.stepped || !1,
                a = x(e, o, r),
                s = w(i, e, a),
                l = t.format || {
                    to: Math.round
                };
            return rt.appendChild(k(s, n, l))
        }

        function C() {
            var t = tt.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][o.ort];
            return 0 === o.ort ? t.width || tt[e] : t.height || tt[e]
        }

        function T(t, e, i, n) {
            var r = function(e) {
                    return !rt.hasAttribute("disabled") && !u(rt, o.cssClasses.tap) && (e = I(e, n.pageOffset), !(t === ot.start && void 0 !== e.buttons && e.buttons > 1) && (!n.hover || !e.buttons) && (e.calcPoint = e.points[o.ort], void i(e, n)))
                },
                a = [];
            return t.split(" ").forEach(function(t) {
                e.addEventListener(t, r, !1), a.push([t, r])
            }), a
        }

        function I(t, e) {
            t.preventDefault();
            var i, n, o = 0 === t.type.indexOf("touch"),
                r = 0 === t.type.indexOf("mouse"),
                a = 0 === t.type.indexOf("pointer"),
                s = t;
            if (0 === t.type.indexOf("MSPointer") && (a = !0), o) {
                if (s.touches.length > 1) return !1;
                i = t.changedTouches[0].pageX, n = t.changedTouches[0].pageY
            }
            return e = e || h(), (r || a) && (i = t.clientX + e.x, n = t.clientY + e.y), s.pageOffset = e, s.points = [i, n], s.cursor = r || a, s
        }

        function _(t) {
            var e = t - n(tt, o.ort),
                i = 100 * e / C();
            return o.dir ? 100 - i : i
        }

        function M(t) {
            var e = 100,
                i = !1;
            return et.forEach(function(n, o) {
                if (!n.hasAttribute("disabled")) {
                    var r = Math.abs(at[o] - t);
                    r < e && (i = o, e = r)
                }
            }), i
        }

        function A(t, e, i, n) {
            var o = i.slice(),
                r = [!t, t],
                a = [t, !t];
            n = n.slice(), t && n.reverse(), n.length > 1 ? n.forEach(function(t, i) {
                var n = N(o, t, o[t] + e, r[i], a[i]);
                n === !1 ? e = 0 : (e = n - o[t], o[t] = n)
            }) : r = a = [!0];
            var s = !1;
            n.forEach(function(t, n) {
                s = V(t, i[t] + e, r[n], a[n]) || s
            }), s && n.forEach(function(t) {
                P("update", t), P("slide", t)
            })
        }

        function P(t, e, i) {
            Object.keys(ct).forEach(function(n) {
                t === n.split(".")[0] && ct[n].forEach(function(t) {
                    t.call(nt, dt.map(o.format.to), e, dt.slice(), i || !1, at.slice())
                })
            })
        }

        function E(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && O(t, e)
        }

        function D(t, e) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === t.buttons && 0 !== e.buttonsProperty) return O(t, e);
            var i = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            A(i > 0, 100 * i / e.baseSize, e.locations, e.handleNumbers)
        }

        function O(t, e) {
            var i = tt.querySelector("." + o.cssClasses.active);
            null !== i && c(i, o.cssClasses.active), t.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function(t) {
                document.documentElement.removeEventListener(t[0], t[1])
            }), c(rt, o.cssClasses.drag), j(), e.handleNumbers.forEach(function(t) {
                P("set", t), P("change", t), P("end", t)
            })
        }

        function L(t, e) {
            if (1 === e.handleNumbers.length) {
                var i = et[e.handleNumbers[0]];
                if (i.hasAttribute("disabled")) return !1;
                d(i.children[0], o.cssClasses.active)
            }
            t.preventDefault(), t.stopPropagation();
            var n = T(ot.move, document.documentElement, D, {
                    startCalcPoint: t.calcPoint,
                    baseSize: C(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: at.slice()
                }),
                r = T(ot.end, document.documentElement, O, {
                    handleNumbers: e.handleNumbers
                }),
                a = T("mouseout", document.documentElement, E, {
                    handleNumbers: e.handleNumbers
                });
            if (document.documentElement.noUiListeners = n.concat(r, a), t.cursor) {
                document.body.style.cursor = getComputedStyle(t.target).cursor, et.length > 1 && d(rt, o.cssClasses.drag);
                var s = function() {
                    return !1
                };
                document.body.noUiListener = s, document.body.addEventListener("selectstart", s, !1)
            }
            e.handleNumbers.forEach(function(t) {
                P("start", t)
            })
        }

        function z(t) {
            t.stopPropagation();
            var e = _(t.calcPoint),
                i = M(e);
            return i !== !1 && (o.events.snap || r(rt, o.cssClasses.tap, o.animationDuration), V(i, e, !0, !0), j(), P("slide", i, !0), P("set", i, !0), P("change", i, !0), P("update", i, !0), void(o.events.snap && L(t, {
                handleNumbers: [i]
            })))
        }

        function F(t) {
            var e = _(t.calcPoint),
                i = lt.getStep(e),
                n = lt.fromStepping(i);
            Object.keys(ct).forEach(function(t) {
                "hover" === t.split(".")[0] && ct[t].forEach(function(t) {
                    t.call(nt, n)
                })
            })
        }

        function R(t) {
            t.fixed || et.forEach(function(t, e) {
                T(ot.start, t.children[0], L, {
                    handleNumbers: [e]
                })
            }), t.tap && T(ot.start, tt, z, {}), t.hover && T(ot.move, tt, F, {
                hover: !0
            }), t.drag && it.forEach(function(e, i) {
                if (e !== !1 && 0 !== i && i !== it.length - 1) {
                    var n = et[i - 1],
                        r = et[i],
                        a = [e];
                    d(e, o.cssClasses.draggable), t.fixed && (a.push(n.children[0]), a.push(r.children[0])), a.forEach(function(t) {
                        T(ot.start, t, L, {
                            handles: [n, r],
                            handleNumbers: [i - 1, i]
                        })
                    })
                }
            })
        }

        function N(t, e, i, n, r) {
            return et.length > 1 && (n && e > 0 && (i = Math.max(i, t[e - 1] + o.margin)), r && e < et.length - 1 && (i = Math.min(i, t[e + 1] - o.margin))), et.length > 1 && o.limit && (n && e > 0 && (i = Math.min(i, t[e - 1] + o.limit)), r && e < et.length - 1 && (i = Math.max(i, t[e + 1] - o.limit))), i = lt.getStep(i), (i = a(i)) !== t[e] && i
        }

        function B(t) {
            return t + "%"
        }

        function W(t, e) {
            at[t] = e, dt[t] = lt.fromStepping(e);
            var i = function() {
                et[t].style[o.style] = B(e), U(t), U(t + 1)
            };
            window.requestAnimationFrame && o.useRequestAnimationFrame ? window.requestAnimationFrame(i) : i()
        }

        function j() {
            st.forEach(function(t) {
                var e = at[t] > 50 ? -1 : 1,
                    i = 3 + (et.length + e * t);
                et[t].childNodes[0].style.zIndex = i
            })
        }

        function V(t, e, i, n) {
            return (e = N(at, t, e, i, n)) !== !1 && (W(t, e), !0)
        }

        function U(t) {
            if (it[t]) {
                var e = 0,
                    i = 100;
                0 !== t && (e = at[t - 1]), t !== it.length - 1 && (i = at[t]), it[t].style[o.style] = B(e), it[t].style[o.styleOposite] = B(100 - i)
            }
        }

        function q(t, e) {
            null !== t && t !== !1 && ("number" == typeof t && (t = String(t)), (t = o.format.from(t)) === !1 || isNaN(t) || V(e, lt.toStepping(t), !1, !1))
        }

        function Y(t, e) {
            var i = s(t),
                n = void 0 === at[0];
            e = void 0 === e || !!e, i.forEach(q), o.animate && !n && r(rt, o.cssClasses.tap, o.animationDuration), st.forEach(function(t) {
                V(t, at[t], !0, !1)
            }), j(), st.forEach(function(t) {
                P("update", t), null !== i[t] && e && P("set", t)
            })
        }

        function Q(t) {
            Y(o.start, t)
        }

        function X() {
            var t = dt.map(o.format.to);
            return 1 === t.length ? t[0] : t
        }

        function G() {
            for (var t in o.cssClasses) o.cssClasses.hasOwnProperty(t) && c(rt, o.cssClasses[t]);
            for (; rt.firstChild;) rt.removeChild(rt.firstChild);
            delete rt.noUiSlider
        }

        function K() {
            return at.map(function(t, e) {
                var i = lt.getNearbySteps(t),
                    n = dt[e],
                    o = i.thisStep.step,
                    r = null;
                o !== !1 && n + o > i.stepAfter.startValue && (o = i.stepAfter.startValue - n), r = n > i.thisStep.startValue ? i.thisStep.step : i.stepBefore.step !== !1 && n - i.stepBefore.highestStep, 100 === t ? o = null : 0 === t && (r = null);
                var a = lt.countStepDecimals();
                return null !== o && o !== !1 && (o = Number(o.toFixed(a))), null !== r && r !== !1 && (r = Number(r.toFixed(a))), [r, o]
            })
        }

        function Z(t, e) {
            ct[t] = ct[t] || [], ct[t].push(e), "update" === t.split(".")[0] && et.forEach(function(t, e) {
                P("update", e)
            })
        }

        function $(t) {
            var e = t && t.split(".")[0],
                i = e && t.substring(e.length);
            Object.keys(ct).forEach(function(t) {
                var n = t.split(".")[0],
                    o = t.substring(n.length);
                e && e !== n || i && i !== o || delete ct[t]
            })
        }

        function J(t, e) {
            var i = X(),
                n = ["margin", "limit", "range", "animate", "snap", "step", "format"];
            n.forEach(function(e) {
                void 0 !== t[e] && (l[e] = t[e])
            });
            var r = H(l);
            n.forEach(function(e) {
                void 0 !== t[e] && (o[e] = r[e])
            }), r.spectrum.direction = lt.direction, lt = r.spectrum, o.margin = r.margin, o.limit = r.limit, at = [], Y(t.start || i, e)
        }
        var tt, et, it, nt, ot = p(),
            rt = i,
            at = [],
            st = [],
            lt = o.spectrum,
            dt = [],
            ct = {};
        if (rt.noUiSlider) throw new Error("Slider was already initialized.");
        return v(rt), m(o.connect, tt), nt = {
            destroy: G,
            steps: K,
            on: Z,
            off: $,
            get: X,
            set: Y,
            reset: Q,
            __moveHandles: function(t, e, i) {
                A(t, e, at, i)
            },
            options: l,
            updateOptions: J,
            target: rt,
            pips: S
        }, R(o.events), Y(o.start), o.pips && S(o.pips), o.tooltips && b(), nt
    }

    function U(t, e) {
        if (!t.nodeName) throw new Error("noUiSlider.create requires a single element.");
        var i = H(e, t),
            n = V(t, i, e);
        return t.noUiSlider = n, n
    }
    C.prototype.getMargin = function(t) {
        var e = this.xNumSteps[0];
        if (e && t % e) throw new Error("noUiSlider: 'limit' and 'margin' must be divisible by step.");
        return 2 === this.xPct.length && g(this.xVal, t)
    }, C.prototype.toStepping = function(t) {
        return t = b(this.xVal, this.xPct, t)
    }, C.prototype.fromStepping = function(t) {
        return x(this.xVal, this.xPct, t)
    }, C.prototype.getStep = function(t) {
        return t = w(this.xPct, this.xSteps, this.snap, t)
    }, C.prototype.getNearbySteps = function(t) {
        var e = y(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e - 0],
                step: this.xNumSteps[e - 0],
                highestStep: this.xHighestCompleteStep[e - 0]
            }
        }
    }, C.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(l);
        return Math.max.apply(null, t)
    }, C.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var q = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };
    return {
        create: U
    }
}),
function() {
    var t;
    t = function() {
            function t(t, e) {
                var i, n;
                if (this.options = {
                        target: "instafeed",
                        get: "popular",
                        resolution: "thumbnail",
                        sortBy: "none",
                        links: !0,
                        mock: !1,
                        useHttp: !1
                    }, "object" == typeof t)
                    for (i in t) n = t[i], this.options[i] = n;
                this.context = null != e ? e : this, this.unique = this._genKey()
            }
            return t.prototype.hasNext = function() {
                return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
            }, t.prototype.next = function() {
                return !!this.hasNext() && this.run(this.context.nextUrl)
            }, t.prototype.run = function(e) {
                var i, n, o;
                if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = e || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(o), n = "instafeedCache" + this.unique, window[n] = new t(this.options, this), window[n].unique = this.unique), !0
            }, t.prototype.parse = function(t) {
                var e, i, n, o, r, a, s, l, d, c, u, h, p, f, g, m, v, y, b, x, w, k, S, C, T, I, _, M, A, P, E, D, O;
                if ("object" != typeof t) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                    throw new Error("Invalid JSON response")
                }
                if (200 !== t.meta.code) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                    throw new Error("Error from Instagram: " + t.meta.error_message)
                }
                if (0 === t.data.length) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                    throw new Error("No images were returned from Instagram")
                }
                if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (E = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), P = "least" === E[0], E[1]) {
                    case "random":
                        t.data.sort(function() {
                            return .5 - Math.random()
                        });
                        break;
                    case "recent":
                        t.data = this._sortBy(t.data, "created_time", P);
                        break;
                    case "liked":
                        t.data = this._sortBy(t.data, "likes.count", P);
                        break;
                    case "commented":
                        t.data = this._sortBy(t.data, "comments.count", P);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
                if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                    if (m = t.data, A = parseInt(this.options.limit, 10), null != this.options.limit && m.length > A && (m = m.slice(0, A)), s = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (m = this._filter(m, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                        for (d = "", f = "", x = "", O = document.createElement("div"), u = 0, T = m.length; u < T; u++) {
                            if (h = m[u], "object" != typeof(p = h.images[this.options.resolution])) throw a = "No image found for resolution: " + this.options.resolution + ".", new Error(a);
                            w = p.width, y = p.height, b = "square", w > y && (b = "landscape"), w < y && (b = "portrait"), g = p.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (g = g.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, {
                                model: h,
                                id: h.id,
                                link: h.link,
                                type: h.type,
                                image: g,
                                width: w,
                                height: y,
                                orientation: b,
                                caption: this._getObjectProperty(h, "caption.text"),
                                likes: h.likes.count,
                                comments: h.comments.count,
                                location: this._getObjectProperty(h, "location.name")
                            }), d += f
                        }
                        for (O.innerHTML = d, o = [], n = 0, i = O.childNodes.length; n < i;) o.push(O.childNodes[n]), n += 1;
                        for (S = 0, I = o.length; S < I; S++) M = o[S], s.appendChild(M)
                    } else
                        for (C = 0, _ = m.length; C < _; C++) {
                            if (h = m[C], v = document.createElement("img"), "object" != typeof(p = h.images[this.options.resolution])) throw a = "No image found for resolution: " + this.options.resolution + ".", new Error(a);
                            g = p.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (g = g.replace(/https?:\/\//, "//")), v.src = g, this.options.links === !0 ? (e = document.createElement("a"), e.href = h.link, e.appendChild(v), s.appendChild(e)) : s.appendChild(v)
                        }
                    if (D = this.options.target, "string" == typeof D && (D = document.getElementById(D)), null == D) throw a = 'No element with id="' + this.options.target + '" on page.', new Error(a);
                    D.appendChild(s), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), k = "instafeedCache" + this.unique, window[k] = void 0;
                    try {
                        delete window[k]
                    } catch (t) {
                        r = t
                    }
                }
                return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
            }, t.prototype._buildUrl = function() {
                var t, e, i;
                switch (t = "https://api.instagram.com/v1", this.options.get) {
                    case "popular":
                        e = "media/popular";
                        break;
                    case "tagged":
                        if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                        e = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                        e = "locations/" + this.options.locationId + "/media/recent";
                        break;
                    case "user":
                        if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                        e = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error("Invalid option for get: '" + this.options.get + "'.")
                }
                return i = t + "/" + e, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
            }, t.prototype._genKey = function() {
                var t;
                return "" + (t = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                })() + t() + t() + t()
            }, t.prototype._makeTemplate = function(t, e) {
                var i, n, o, r, a;
                for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) r = i.match(n)[1], a = null != (o = this._getObjectProperty(e, r)) ? o : "", i = i.replace(n, function() {
                    return "" + a
                });
                return i
            }, t.prototype._getObjectProperty = function(t, e) {
                var i, n;
                for (e = e.replace(/\[(\w+)\]/g, ".$1"), n = e.split("."); n.length;) {
                    if (i = n.shift(), !(null != t && i in t)) return null;
                    t = t[i]
                }
                return t
            }, t.prototype._sortBy = function(t, e, i) {
                var n;
                return n = function(t, n) {
                    var o, r;
                    return o = this._getObjectProperty(t, e), r = this._getObjectProperty(n, e), i ? o > r ? 1 : -1 : o < r ? 1 : -1
                }, t.sort(n.bind(this)), t
            }, t.prototype._filter = function(t, e) {
                var i, n, o, r, a;
                for (i = [], n = function(t) {
                        if (e(t)) return i.push(t)
                    }, o = 0, a = t.length; o < a; o++) r = t[o], n(r);
                return i
            }, t
        }(),
        function(t, e) {
            "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Instafeed = e()
        }(this, function() {
            return t
        })
}.call(this),
    function($) {
        $.fn.SocialCounter = function(t) {
            function e() {
                $.ajax({
                    url: "https://graph.facebook.com/v2.8/" + s.facebook_user,
                    dataType: "json",
                    type: "GET",
                    data: {
                        access_token: s.facebook_token,
                        fields: "fan_count"
                    },
                    success: function(t) {
                        var e = parseInt(t.fan_count),
                            i = a(e);
                        $(".btn-social-counter--fb .btn-social-counter__count-num").append(i), $(".btn-social-counter--fb").attr("href", "https://facebook.com/" + s.facebook_user)
                    }
                })
            }

            function i() {
                $.ajax({
                    url: "https://api.instagram.com/v1/users/self/",
                    dataType: "jsonp",
                    type: "GET",
                    data: {
                        access_token: s.instagram_token
                    },
                    success: function(t) {
                        var e = parseInt(t.data.counts.followed_by),
                            i = a(e);
                        $(".btn-social-counter--instagram .btn-social-counter__count-num").append(i), $(".btn-social-counter--instagram").attr("href", "https://instagram.com/" + s.instagram_user)
                    }
                })
            }

            function n() {
                $.ajax({
                    url: "https://api.instagram.com/v1/users/search?q=" + s.instagram_user_sandbox,
                    dataType: "jsonp",
                    type: "GET",
                    data: {
                        access_token: s.instagram_token
                    },
                    success: function(t) {
                        $.each(t.data, function(t, e) {
                            s.instagram_user_sandbox == e.username && $.ajax({
                                url: "https://api.instagram.com/v1/users/" + e.id,
                                dataType: "jsonp",
                                type: "GET",
                                data: {
                                    access_token: s.instagram_token
                                },
                                success: function(t) {
                                    var e = parseInt(t.data.counts.followed_by),
                                        i = a(e);
                                    $(".btn-social-counter--instagram .btn-social-counter__count-num").append(i), $(".btn-social-counter--instagram").attr("href", "https://instagram.com/" + s.instagram_user_sandbox)
                                }
                            })
                        })
                    }
                })
            }

            function o() {
                $.ajax({
                    url: "https://www.googleapis.com/plus/v1/people/" + s.google_plus_id,
                    type: "GET",
                    dataType: "json",
                    data: {
                        key: s.google_plus_key
                    },
                    success: function(t) {
                        var e = parseInt(t.circledByCount),
                            i = a(e);
                        $(".btn-social-counter--gplus .btn-social-counter__count-num").append(i), $(".btn-social-counter--gplus").attr("href", "https://plus.google.com/" + s.google_plus_id)
                    }
                })
            }

            function r() {
                $.ajax({
                    url: "static/php/twitter/index.php",
                    dataType: "json",
                    type: "GET",
                    data: {
                        user: s.twitter_user
                    },
                    success: function(t) {
                        var e = parseInt(t.followers);
                        $(".btn-social-counter--twitter .btn-social-counter__count-num").append(e).digits(), $(".btn-social-counter--twitter").attr("href", "https://twitter.com/" + s.twitter_user)
                    }
                })
            }

            function a(t) {
                return t > 999 ? (t / 1e3).toFixed(1) + "k" : t
            }
            var s = $.extend({
                facebook_user: "",
                facebook_token: "",
                instagram_user: "",
                instagram_user_sandbox: "",
                instagram_token: "",
                google_plus_id: "",
                google_plus_key: ""
            }, t);
            $.fn.digits = function() {
                return this.each(function() {
                    $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                })
            }, "" != s.facebook_user && "" != s.facebook_token && e(), "" != s.instagram_user && "" != s.instagram_token && i(), "" != s.twitter_user && r(), "" != s.instagram_user_sandbox && "" != s.instagram_token && n(), "" != s.google_plus_id && "" != s.google_plus_key && o()
        }
    }(jQuery);