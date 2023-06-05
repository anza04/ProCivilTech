!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).lightGallery = e());
})(this, function () {
  "use strict";
  var e = function () {
      return (e =
        Object.assign ||
        function (t) {
          for (var e, i = 1, s = arguments.length; i < s; i++)
            for (var o in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
    },
    o = "lgUpdateSlides",
    l = "lgPosterClick",
    s = "lgBeforeNextSlide",
    n = "lgBeforePrevSlide",
    i = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: !0,
      hideScrollbar: !1,
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      trapFocus: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    },
    r =
      ((a.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ("x" == t ? e : (3 & e) | 8).toString(16);
          }
        );
      }),
      (a.prototype._getSelector = function (t, e) {
        return (
          void 0 === e && (e = document),
          "string" != typeof t
            ? t
            : ((e = e || document),
              "#" === t.substring(0, 1)
                ? e.querySelector(t)
                : e.querySelectorAll(t))
        );
      }),
      (a.prototype._each = function (t) {
        return (
          this.selector &&
            (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, t)
              : t(this.selector, 0)),
          this
        );
      }),
      (a.prototype._setCssVendorPrefix = function (t, e, i) {
        e = e.replace(/-([a-z])/gi, function (t, e) {
          return e.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(e)
          ? ((t.style[e.charAt(0).toLowerCase() + e.slice(1)] = i),
            (t.style["webkit" + e] = i),
            (t.style["moz" + e] = i),
            (t.style["ms" + e] = i),
            (t.style["o" + e] = i))
          : (t.style[e] = i);
      }),
      (a.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (a.prototype.isEventMatched = function (t, e) {
        var i = e.split(".");
        return t
          .split(".")
          .filter(function (t) {
            return t;
          })
          .every(function (t) {
            return -1 !== i.indexOf(t);
          });
      }),
      (a.prototype.attr = function (e, i) {
        return void 0 === i
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (t) {
              t.setAttribute(e, i);
            }),
            this);
      }),
      (a.prototype.find = function (t) {
        return T(this._getSelector(t, this.selector));
      }),
      (a.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? T(this.selector[0])
          : T(this.selector);
      }),
      (a.prototype.eq = function (t) {
        return T(this.selector[t]);
      }),
      (a.prototype.parent = function () {
        return T(this.selector.parentElement);
      }),
      (a.prototype.get = function () {
        return this._getFirstEl();
      }),
      (a.prototype.removeAttr = function (t) {
        var i = t.split(" ");
        return (
          this._each(function (e) {
            i.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (a.prototype.wrap = function (t) {
        if (!this.firstElement) return this;
        var e = document.createElement("div");
        return (
          (e.className = t),
          this.firstElement.parentNode.insertBefore(e, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          e.appendChild(this.firstElement),
          this
        );
      }),
      (a.prototype.addClass = function (t) {
        return (
          void 0 === t && (t = ""),
          this._each(function (e) {
            t.split(" ").forEach(function (t) {
              t && e.classList.add(t);
            });
          }),
          this
        );
      }),
      (a.prototype.removeClass = function (t) {
        return (
          this._each(function (e) {
            t.split(" ").forEach(function (t) {
              t && e.classList.remove(t);
            });
          }),
          this
        );
      }),
      (a.prototype.hasClass = function (t) {
        return !!this.firstElement && this.firstElement.classList.contains(t);
      }),
      (a.prototype.hasAttribute = function (t) {
        return !!this.firstElement && this.firstElement.hasAttribute(t);
      }),
      (a.prototype.toggleClass = function (t) {
        return (
          this.firstElement &&
            (this.hasClass(t) ? this.removeClass(t) : this.addClass(t)),
          this
        );
      }),
      (a.prototype.css = function (e, i) {
        var s = this;
        return (
          this._each(function (t) {
            s._setCssVendorPrefix(t, e, i);
          }),
          this
        );
      }),
      (a.prototype.on = function (t, e) {
        var i = this;
        return (
          this.selector &&
            t.split(" ").forEach(function (t) {
              Array.isArray(a.eventListeners[t]) || (a.eventListeners[t] = []),
                a.eventListeners[t].push(e),
                i.selector.addEventListener(t.split(".")[0], e);
            }),
          this
        );
      }),
      (a.prototype.once = function (t, e) {
        var i = this;
        return (
          this.on(t, function () {
            i.off(t), e(t);
          }),
          this
        );
      }),
      (a.prototype.off = function (t) {
        var i = this;
        return (
          this.selector &&
            Object.keys(a.eventListeners).forEach(function (e) {
              i.isEventMatched(t, e) &&
                (a.eventListeners[e].forEach(function (t) {
                  i.selector.removeEventListener(e.split(".")[0], t);
                }),
                (a.eventListeners[e] = []));
            }),
          this
        );
      }),
      (a.prototype.trigger = function (t, e) {
        if (!this.firstElement) return this;
        e = new CustomEvent(t.split(".")[0], { detail: e || null });
        return this.firstElement.dispatchEvent(e), this;
      }),
      (a.prototype.load = function (t) {
        var e = this;
        return (
          fetch(t)
            .then(function (t) {
              return t.text();
            })
            .then(function (t) {
              e.selector.innerHTML = t;
            }),
          this
        );
      }),
      (a.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (a.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (a.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (a.prototype.remove = function () {
        return (
          this._each(function (t) {
            t.parentNode.removeChild(t);
          }),
          this
        );
      }),
      (a.prototype.empty = function () {
        return (
          this._each(function (t) {
            t.innerHTML = "";
          }),
          this
        );
      }),
      (a.prototype.scrollTop = function (t) {
        return void 0 !== t
          ? ((document.body.scrollTop = t),
            (document.documentElement.scrollTop = t),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (a.prototype.scrollLeft = function (t) {
        return void 0 !== t
          ? ((document.body.scrollLeft = t),
            (document.documentElement.scrollLeft = t),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (a.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var t = this.firstElement.getBoundingClientRect(),
          e = T("body").style().marginLeft;
        return {
          left: t.left - parseFloat(e) + this.scrollLeft(),
          top: t.top + this.scrollTop(),
        };
      }),
      (a.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (a.prototype.width = function () {
        var t = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(t.paddingLeft) -
          parseFloat(t.paddingRight)
        );
      }),
      (a.prototype.height = function () {
        var t = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(t.paddingTop) -
          parseFloat(t.paddingBottom)
        );
      }),
      (a.eventListeners = {}),
      a);
  function a(t) {
    return (
      (this.cssVenderPrefixes = [
        "TransitionDuration",
        "TransitionTimingFunction",
        "Transform",
        "Transition",
      ]),
      (this.selector = this._getSelector(t)),
      (this.firstElement = this._getFirstEl()),
      this
    );
  }
  function T(t) {
    return (
      "function" != typeof window.CustomEvent &&
        (window.CustomEvent = function (t, e) {
          e = e || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
        }),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new r(t)
    );
  }
  var u = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function E(t, e, i, s) {
    void 0 === i && (i = 0);
    var o = T(t).attr("data-lg-size") || s;
    if (o) {
      var n = o.split(",");
      if (n[1])
        for (var r = window.innerWidth, l = 0; l < n.length; l++) {
          var a = n[l];
          if (parseInt(a.split("-")[2], 10) > r) {
            o = a;
            break;
          }
          l === n.length - 1 && (o = a);
        }
      var d = o.split("-"),
        t = parseInt(d[0], 10),
        s = parseInt(d[1], 10),
        d = e.width(),
        i = e.height() - i,
        d = Math.min(d, t),
        i = Math.min(i, s),
        i = Math.min(d / t, i / s);
      return { width: t * i, height: s * i };
    }
  }
  function d(t, e, i, s, o) {
    if (o) {
      var n = T(t).find("img").first();
      if (n.get()) {
        var r = e.get().getBoundingClientRect(),
          l = r.width,
          a = e.height() - (i + s),
          t = n.width(),
          e = n.height(),
          s = n.style(),
          r =
            (l - t) / 2 -
            n.offset().left +
            (parseFloat(s.paddingLeft) || 0) +
            (parseFloat(s.borderLeft) || 0) +
            T(window).scrollLeft() +
            r.left,
          i =
            (a - e) / 2 -
            n.offset().top +
            (parseFloat(s.paddingTop) || 0) +
            (parseFloat(s.borderTop) || 0) +
            T(window).scrollTop() +
            i;
        return (
          "translate3d(" +
          (r *= -1) +
          "px, " +
          (i *= -1) +
          "px, 0) scale3d(" +
          t / o.width +
          ", " +
          e / o.height +
          ", 1)"
        );
      }
    }
  }
  function O(t, e, i, s, o, n) {
    return (
      (t =
        "<img " +
        i +
        " " +
        (s ? 'srcset="' + s + '"' : "") +
        "  " +
        (o ? 'sizes="' + o + '"' : "") +
        ' class="lg-object lg-image" data-index="' +
        t +
        '" src="' +
        e +
        '" />'),
      (e = ""),
      n &&
        (e = ("string" == typeof n ? JSON.parse(n) : n).map(function (e) {
          var i = "";
          return (
            Object.keys(e).forEach(function (t) {
              i += " " + t + '="' + e[t] + '"';
            }),
            "<source " + i + "></source>"
          );
        })),
      e + t
    );
  }
  var g = 0,
    h =
      ((t.prototype.generateSettings = function (t) {
        (this.settings = e(e({}, i), t)),
          (this.settings.isMobile && "function" == typeof this.settings.isMobile
            ? this.settings.isMobile()
            : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) &&
            ((t = e(
              e({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            )),
            (this.settings = e(e({}, this.settings), t)));
      }),
      (t.prototype.normalizeSettings = function () {
        this.settings.slideEndAnimation &&
          (this.settings.hideControlOnEnd = !1),
          this.settings.closable || (this.settings.swipeToClose = !1),
          (this.zoomFromOrigin = this.settings.zoomFromOrigin),
          this.settings.dynamic && (this.zoomFromOrigin = !1),
          this.settings.container || (this.settings.container = document.body),
          (this.settings.preload = Math.min(
            this.settings.preload,
            this.galleryItems.length
          ));
      }),
      (t.prototype.init = function () {
        var t = this;
        this.addSlideVideoInfo(this.galleryItems),
          this.buildStructure(),
          this.LGel.trigger("lgInit", { instance: this }),
          this.settings.keyPress && this.keyPress(),
          setTimeout(function () {
            t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
          }, 50),
          this.arrow(),
          this.settings.mousewheel && this.mousewheel(),
          this.settings.dynamic || this.openGalleryOnItemClick();
      }),
      (t.prototype.openGalleryOnItemClick = function () {
        for (var o = this, n = this, t = 0; t < this.items.length; t++)
          !(function (e) {
            var i = n.items[e],
              t = T(i),
              s = r.generateUUID();
            t.attr("data-lg-id", s).on(
              "click.lgcustom-item-" + s,
              function (t) {
                t.preventDefault();
                t = o.settings.index || e;
                o.openGallery(t, i);
              }
            );
          })(t);
      }),
      (t.prototype.buildModules = function () {
        var e = this;
        this.settings.plugins.forEach(function (t) {
          e.plugins.push(new t(e, T));
        });
      }),
      (t.prototype.getSlideItem = function (t) {
        return T(this.getSlideItemId(t));
      }),
      (t.prototype.getSlideItemId = function (t) {
        return "#lg-item-" + this.lgId + "-" + t;
      }),
      (t.prototype.getIdName = function (t) {
        return t + "-" + this.lgId;
      }),
      (t.prototype.getElementById = function (t) {
        return T("#" + this.getIdName(t));
      }),
      (t.prototype.manageSingleSlideClassName = function () {
        this.galleryItems.length < 2
          ? this.outer.addClass("lg-single-item")
          : this.outer.removeClass("lg-single-item");
      }),
      (t.prototype.buildStructure = function () {
        var t,
          e,
          i,
          s,
          o,
          n,
          r,
          l,
          a = this;
        (this.$container && this.$container.get()) ||
          ((l = t = ""),
          this.settings.controls &&
            (t =
              '<button type="button" id="' +
              this.getIdName("lg-prev") +
              '" aria-label="' +
              this.settings.strings.previousSlide +
              '" class="lg-prev lg-icon"> ' +
              this.settings.prevHtml +
              ' </button>\n                <button type="button" id="' +
              this.getIdName("lg-next") +
              '" aria-label="' +
              this.settings.strings.nextSlide +
              '" class="lg-next lg-icon"> ' +
              this.settings.nextHtml +
              " </button>"),
          ".lg-item" !== this.settings.appendSubHtmlTo &&
            (l =
              '<div class="lg-sub-html" role="status" aria-live="polite"></div>'),
          (e = ""),
          this.settings.allowMediaOverlap && (e += "lg-media-overlap "),
          (i = this.settings.ariaLabelledby
            ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
            : ""),
          (s = this.settings.ariaDescribedby
            ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
            : ""),
          (o =
            "lg-container " +
            this.settings.addClass +
            " " +
            (document.body !== this.settings.container ? "lg-inline" : "")),
          (n =
            this.settings.closable && this.settings.showCloseIcon
              ? '<button type="button" aria-label="' +
                this.settings.strings.closeGallery +
                '" id="' +
                this.getIdName("lg-close") +
                '" class="lg-close lg-icon"></button>'
              : ""),
          (r = this.settings.showMaximizeIcon
            ? '<button type="button" aria-label="' +
              this.settings.strings.toggleMaximize +
              '" id="' +
              this.getIdName("lg-maximize") +
              '" class="lg-maximize lg-icon"></button>'
            : ""),
          (l =
            '\n        <div class="' +
            o +
            '" id="' +
            this.getIdName("lg-container") +
            '" tabindex="-1" aria-modal="true" ' +
            i +
            " " +
            s +
            ' role="dialog"\n        >\n            <div id="' +
            this.getIdName("lg-backdrop") +
            '" class="lg-backdrop"></div>\n\n            <div id="' +
            this.getIdName("lg-outer") +
            '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
            e +
            ' ">\n\n              <div id="' +
            this.getIdName("lg-content") +
            '" class="lg-content">\n                <div id="' +
            this.getIdName("lg-inner") +
            '" class="lg-inner">\n                </div>\n                ' +
            t +
            '\n              </div>\n                <div id="' +
            this.getIdName("lg-toolbar") +
            '" class="lg-toolbar lg-group">\n                    ' +
            r +
            "\n                    " +
            n +
            "\n                    </div>\n                    " +
            (".lg-outer" === this.settings.appendSubHtmlTo ? l : "") +
            '\n                <div id="' +
            this.getIdName("lg-components") +
            '" class="lg-components">\n                    ' +
            (".lg-sub-html" === this.settings.appendSubHtmlTo ? l : "") +
            "\n                </div>\n            </div>\n        </div>\n        "),
          T(this.settings.container).append(l),
          document.body !== this.settings.container &&
            T(this.settings.container).css("position", "relative"),
          (this.outer = this.getElementById("lg-outer")),
          (this.$lgComponents = this.getElementById("lg-components")),
          (this.$backdrop = this.getElementById("lg-backdrop")),
          (this.$container = this.getElementById("lg-container")),
          (this.$inner = this.getElementById("lg-inner")),
          (this.$content = this.getElementById("lg-content")),
          (this.$toolbar = this.getElementById("lg-toolbar")),
          this.$backdrop.css(
            "transition-duration",
            this.settings.backdropDuration + "ms"
          ),
          (l = this.settings.mode + " "),
          this.manageSingleSlideClassName(),
          this.settings.enableDrag && (l += "lg-grab "),
          this.outer.addClass(l),
          this.$inner.css("transition-timing-function", this.settings.easing),
          this.$inner.css("transition-duration", this.settings.speed + "ms"),
          this.settings.download &&
            this.$toolbar.append(
              '<a id="' +
                this.getIdName("lg-download") +
                '" target="_blank" rel="noopener" aria-label="' +
                this.settings.strings.download +
                '" download class="lg-download lg-icon"></a>'
            ),
          this.counter(),
          T(window).on(
            "resize.lg.global" +
              this.lgId +
              " orientationchange.lg.global" +
              this.lgId,
            function () {
              a.refreshOnResize();
            }
          ),
          this.hideBars(),
          this.manageCloseGallery(),
          this.toggleMaximize(),
          this.initModules());
      }),
      (t.prototype.refreshOnResize = function () {
        var t, e, i;
        this.lgOpened &&
          ((i = this.galleryItems[this.index].__slideVideoInfo),
          (this.mediaContainerPosition = this.getMediaContainerPosition()),
          (t = (e = this.mediaContainerPosition).top),
          (e = e.bottom),
          (this.currentImageSize = E(
            this.items[this.index],
            this.outer,
            t + e,
            i && this.settings.videoMaxSize
          )),
          i && this.resizeVideoSlide(this.index, this.currentImageSize),
          this.zoomFromOrigin &&
            !this.isDummyImageRemoved &&
            ((i = this.getDummyImgStyles(this.currentImageSize)),
            this.outer
              .find(".lg-current .lg-dummy-img")
              .first()
              .attr("style", i)),
          this.LGel.trigger("lgContainerResize"));
      }),
      (t.prototype.resizeVideoSlide = function (t, e) {
        e = this.getVideoContStyle(e);
        this.getSlideItem(t).find(".lg-video-cont").attr("style", e);
      }),
      (t.prototype.updateSlides = function (t, e) {
        var i, s;
        this.index > t.length - 1 && (this.index = t.length - 1),
          1 === t.length && (this.index = 0),
          t.length
            ? ((i = this.galleryItems[e].src),
              (this.galleryItems = t),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []),
              (s = 0),
              this.galleryItems.some(function (t, e) {
                return t.src === i && ((s = e), !0);
              }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(o))
            : this.closeGallery();
      }),
      (t.prototype.getItems = function () {
        return (
          (this.items = []),
          this.settings.dynamic
            ? this.settings.dynamicEl || []
            : ("this" === this.settings.selector
                ? this.items.push(this.el)
                : this.settings.selector
                ? "string" == typeof this.settings.selector
                  ? this.settings.selectWithin
                    ? ((e = T(this.settings.selectWithin)),
                      (this.items = e.find(this.settings.selector).get()))
                    : (this.items = this.el.querySelectorAll(
                        this.settings.selector
                      ))
                  : (this.items = this.settings.selector)
                : (this.items = this.el.children),
              (t = this.items),
              (e = this.settings.extraProps),
              (d = this.settings.getCaptionFromTitleOrAlt),
              (g = this.settings.exThumbImage),
              (h = []),
              (c = (function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++)
                  t += arguments[e].length;
                for (var s = Array(t), o = 0, e = 0; e < i; e++)
                  for (
                    var n = arguments[e], r = 0, l = n.length;
                    r < l;
                    r++, o++
                  )
                    s[o] = n[r];
                return s;
              })(u, e)),
              [].forEach.call(t, function (t) {
                for (var e = {}, i = 0; i < t.attributes.length; i++) {
                  var s,
                    o,
                    n = t.attributes[i];
                  n.specified &&
                    ((s =
                      "href" === (o = n.name)
                        ? "src"
                        : (o = (o =
                            (o = o.replace("data-", ""))
                              .charAt(0)
                              .toLowerCase() + o.slice(1)).replace(
                            /-([a-z])/g,
                            function (t) {
                              return t[1].toUpperCase();
                            }
                          ))),
                    (o = ""),
                    -1 < c.indexOf(s) && (o = s),
                    o && (e[o] = n.value));
                }
                var r = T(t),
                  l = r.find("img").first().attr("alt"),
                  a = r.attr("title"),
                  r = g ? r.attr(g) : r.find("img").first().attr("src");
                (e.thumb = r),
                  d && !e.subHtml && (e.subHtml = a || l || ""),
                  (e.alt = l || a || ""),
                  h.push(e);
              }),
              h)
        );
        var t, e, d, g, h, c;
      }),
      (t.prototype.shouldHideScrollbar = function () {
        return (
          this.settings.hideScrollbar &&
          document.body === this.settings.container
        );
      }),
      (t.prototype.hideScrollbar = function () {
        var t;
        this.shouldHideScrollbar() &&
          ((this.bodyPaddingRight = parseFloat(T("body").style().paddingRight)),
          (t = document.documentElement.getBoundingClientRect()),
          (t = window.innerWidth - t.width),
          T(document.body).css(
            "padding-right",
            t + this.bodyPaddingRight + "px"
          ),
          T(document.body).addClass("lg-overlay-open"));
      }),
      (t.prototype.resetScrollBar = function () {
        this.shouldHideScrollbar() &&
          (T(document.body).css("padding-right", this.bodyPaddingRight + "px"),
          T(document.body).removeClass("lg-overlay-open"));
      }),
      (t.prototype.openGallery = function (e, t) {
        var i,
          s,
          o,
          n,
          r,
          l = this;
        void 0 === e && (e = this.settings.index),
          this.lgOpened ||
            ((this.lgOpened = !0),
            this.outer.removeClass("lg-hide-items"),
            this.hideScrollbar(),
            this.$container.addClass("lg-show"),
            (r = this.getItemsToBeInsertedToDom(e, e)),
            (this.currentItemsInDom = r),
            (i = ""),
            r.forEach(function (t) {
              i = i + '<div id="' + t + '" class="lg-item"></div>';
            }),
            this.$inner.append(i),
            this.addHtml(e),
            (s = ""),
            (this.mediaContainerPosition = this.getMediaContainerPosition()),
            (o = (n = this.mediaContainerPosition).top),
            (r = n.bottom),
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(o, r),
            (n = this.galleryItems[e].__slideVideoInfo),
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = E(
                t,
                this.outer,
                o + r,
                n && this.settings.videoMaxSize
              )),
              (s = d(t, this.outer, o, r, this.currentImageSize))),
            (this.zoomFromOrigin && s) ||
              (this.outer.addClass(this.settings.startClass),
              this.getSlideItem(e).removeClass("lg-complete")),
            (r = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration),
            setTimeout(function () {
              l.outer.addClass("lg-components-open");
            }, r),
            (this.index = e),
            this.LGel.trigger("lgBeforeOpen"),
            this.getSlideItem(e).addClass("lg-current"),
            (this.lGalleryOn = !1),
            (this.prevScrollTop = T(window).scrollTop()),
            setTimeout(function () {
              var t;
              l.zoomFromOrigin &&
                s &&
                ((t = l.getSlideItem(e)).css("transform", s),
                setTimeout(function () {
                  t
                    .addClass("lg-start-progress lg-start-end-progress")
                    .css(
                      "transition-duration",
                      l.settings.startAnimationDuration + "ms"
                    ),
                    l.outer.addClass("lg-zoom-from-image");
                }),
                setTimeout(function () {
                  t.css("transform", "translate3d(0, 0, 0)");
                }, 100)),
                setTimeout(function () {
                  l.$backdrop.addClass("in"),
                    l.$container.addClass("lg-show-in");
                }, 10),
                setTimeout(function () {
                  l.settings.trapFocus &&
                    document.body === l.settings.container &&
                    l.trapFocus();
                }, l.settings.backdropDuration + 50),
                (l.zoomFromOrigin && s) ||
                  setTimeout(function () {
                    l.outer.addClass("lg-visible");
                  }, l.settings.backdropDuration),
                l.slide(e, !1, !1, !1),
                l.LGel.trigger("lgAfterOpen");
            }),
            document.body === this.settings.container &&
              T("html").addClass("lg-on"));
      }),
      (t.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
        var t = this.$toolbar.get().clientHeight || 0,
          e = this.outer.find(".lg-components .lg-sub-html").get(),
          i = this.settings.defaultCaptionHeight || (e && e.clientHeight) || 0,
          e = this.outer.find(".lg-thumb-outer").get();
        return { top: t, bottom: (e ? e.clientHeight : 0) + i };
      }),
      (t.prototype.setMediaContainerPosition = function (t, e) {
        void 0 === t && (t = 0),
          void 0 === e && (e = 0),
          this.$content.css("top", t + "px").css("bottom", e + "px");
      }),
      (t.prototype.hideBars = function () {
        var t = this;
        setTimeout(function () {
          t.outer.removeClass("lg-hide-items"),
            0 < t.settings.hideBarsDelay &&
              (t.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                t.outer.removeClass("lg-hide-items"),
                  clearTimeout(t.hideBarTimeout),
                  (t.hideBarTimeout = setTimeout(function () {
                    t.outer.addClass("lg-hide-items");
                  }, t.settings.hideBarsDelay));
              }),
              t.outer.trigger("mousemove.lg"));
        }, this.settings.showBarsAfter);
      }),
      (t.prototype.initPictureFill = function (t) {
        if (this.settings.supportLegacyBrowser)
          try {
            picturefill({ elements: [t.get()] });
          } catch (t) {
            console.warn(
              "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
            );
          }
      }),
      (t.prototype.counter = function () {
        var t;
        this.settings.counter &&
          ((t =
            '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
            this.getIdName("lg-counter-current") +
            '" class="lg-counter-current">' +
            (this.index + 1) +
            ' </span> /\n                <span id="' +
            this.getIdName("lg-counter-all") +
            '" class="lg-counter-all">' +
            this.galleryItems.length +
            " </span></div>"),
          this.outer.find(this.settings.appendCounterTo).append(t));
      }),
      (t.prototype.addHtml = function (t) {
        var e, i, s;
        this.galleryItems[t].subHtmlUrl
          ? (i = this.galleryItems[t].subHtmlUrl)
          : (e = this.galleryItems[t].subHtml),
          i ||
            (e
              ? ("." !== (s = e.substring(0, 1)) && "#" !== s) ||
                (e = (
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? T(this.items).eq(t).find(e)
                    : T(e)
                )
                  .first()
                  .html())
              : (e = "")),
          ".lg-item" !== this.settings.appendSubHtmlTo
            ? i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(e)
            : ((s = T(this.getSlideItemId(t))),
              i
                ? s.load(i)
                : s.append('<div class="lg-sub-html">' + e + "</div>")),
          null != e &&
            ("" === e
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.LGel.trigger("lgAfterAppendSubHtml", { index: t });
      }),
      (t.prototype.preload = function (t) {
        for (
          var e = 1;
          e <= this.settings.preload && !(e >= this.galleryItems.length - t);
          e++
        )
          this.loadContent(t + e, !1);
        for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
          this.loadContent(t - i, !1);
      }),
      (t.prototype.getDummyImgStyles = function (t) {
        return t
          ? "width:" +
              t.width +
              "px;\n                margin-left: -" +
              t.width / 2 +
              "px;\n                margin-top: -" +
              t.height / 2 +
              "px;\n                height:" +
              t.height +
              "px"
          : "";
      }),
      (t.prototype.getVideoContStyle = function (t) {
        return t
          ? "width:" +
              t.width +
              "px;\n                height:" +
              t.height +
              "px"
          : "";
      }),
      (t.prototype.getDummyImageContent = function (t, e, i) {
        var s;
        if ((this.settings.dynamic || (s = T(this.items).eq(e)), s)) {
          e = void 0;
          if (
            !(e = this.settings.exThumbImage
              ? s.attr(this.settings.exThumbImage)
              : s.find("img").first().attr("src"))
          )
            return "";
          e =
            "<img " +
            i +
            ' style="' +
            this.getDummyImgStyles(this.currentImageSize) +
            '" class="lg-dummy-img" src="' +
            e +
            '" />';
          return (
            t.addClass("lg-first-slide"),
            this.outer.addClass("lg-first-slide-loading"),
            e
          );
        }
        return "";
      }),
      (t.prototype.setImgMarkup = function (t, e, i) {
        var s = this.galleryItems[i],
          o = s.alt,
          n = s.srcset,
          r = s.sizes,
          s = s.sources,
          o = o ? 'alt="' + o + '"' : "",
          s =
            '<picture class="lg-img-wrap"> ' +
            (this.isFirstSlideWithZoomAnimation()
              ? this.getDummyImageContent(e, i, o)
              : O(i, t, o, n, r, s)) +
            "</picture>";
        e.prepend(s);
      }),
      (t.prototype.onSlideObjectLoad = function (t, e, i, s) {
        var o = t.find(".lg-object").first();
        (!!(t = o.get()) && !!t.complete && 0 !== t.naturalWidth) || e
          ? i()
          : (o.on("load.lg error.lg", function () {
              i && i();
            }),
            o.on("error.lg", function () {
              s && s();
            }));
      }),
      (t.prototype.onLgObjectLoad = function (t, e, i, s, o, n) {
        var r = this;
        this.onSlideObjectLoad(
          t,
          n,
          function () {
            r.triggerSlideItemLoad(t, e, i, s, o);
          },
          function () {
            t.addClass("lg-complete lg-complete_"),
              t.html(
                '<span class="lg-error-msg">Oops... Failed to load content...</span>'
              );
          }
        );
      }),
      (t.prototype.triggerSlideItemLoad = function (t, e, i, s, o) {
        var n = this,
          r = this.galleryItems[e],
          s = o && "video" === this.getSlideType(r) && !r.poster ? s : 0;
        setTimeout(function () {
          t.addClass("lg-complete lg-complete_"),
            n.LGel.trigger("lgSlideItemLoad", {
              index: e,
              delay: i || 0,
              isFirstSlide: o,
            });
        }, s);
      }),
      (t.prototype.isFirstSlideWithZoomAnimation = function () {
        return !(
          this.lGalleryOn ||
          !this.zoomFromOrigin ||
          !this.currentImageSize
        );
      }),
      (t.prototype.addSlideVideoInfo = function (t) {
        var i = this;
        t.forEach(function (t, e) {
          (t.__slideVideoInfo = (function (t, e, i) {
            if (!t)
              return e
                ? { html5: !0 }
                : void console.error(
                    "lightGallery :- data-src is not provided on slide item " +
                      (i + 1) +
                      ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                  );
            (e = t.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            )),
              (i = t.match(
                /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
              )),
              (t = t.match(
                /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
              ));
            return e
              ? { youtube: e }
              : i
              ? { vimeo: i }
              : t
              ? { wistia: t }
              : void 0;
          })(t.src, !!t.video, e)),
            t.__slideVideoInfo &&
              i.settings.loadYouTubePoster &&
              !t.poster &&
              t.__slideVideoInfo.youtube &&
              (t.poster =
                "//img.youtube.com/vi/" +
                t.__slideVideoInfo.youtube[1] +
                "/maxresdefault.jpg");
        });
      }),
      (t.prototype.loadContent = function (e, t) {
        var i = this,
          s = this.galleryItems[e],
          o = T(this.getSlideItemId(e)),
          n = s.poster,
          r = s.srcset,
          l = s.sizes,
          a = s.sources,
          d = s.src,
          g = s.video,
          h = g && "string" == typeof g ? JSON.parse(g) : g;
        s.responsive &&
          (d =
            (function (t) {
              for (var e = [], i = [], s = "", o = 0; o < t.length; o++) {
                var n = t[o].split(" ");
                "" === n[0] && n.splice(0, 1), i.push(n[0]), e.push(n[1]);
              }
              for (var r = window.innerWidth, l = 0; l < e.length; l++)
                if (parseInt(e[l], 10) > r) {
                  s = i[l];
                  break;
                }
              return s;
            })(s.responsive.split(",")) || d);
        var c,
          u,
          m,
          p,
          f,
          y,
          v,
          b = s.__slideVideoInfo,
          I = "",
          C = !!s.iframe,
          x = !this.lGalleryOn,
          w = 0;
        x &&
          (w =
            this.zoomFromOrigin && this.currentImageSize
              ? this.settings.startAnimationDuration + 10
              : this.settings.backdropDuration + 10),
          o.hasClass("lg-loaded") ||
            (b &&
              ((g = (c = this.mediaContainerPosition).top),
              (c = c.bottom),
              (c = E(
                this.items[e],
                this.outer,
                g + c,
                b && this.settings.videoMaxSize
              )),
              (I = this.getVideoContStyle(c))),
            C
              ? ((u = this.settings.iframeWidth),
                (m = this.settings.iframeHeight),
                (p = this.settings.iframeMaxWidth),
                (f = this.settings.iframeMaxHeight),
                (y = d),
                (v = s.iframeTitle),
                (u =
                  '<div class="lg-video-cont lg-has-iframe" style="width:' +
                  u +
                  "; max-width:" +
                  p +
                  "; height: " +
                  m +
                  "; max-height:" +
                  f +
                  '">\n                    <iframe class="lg-object" frameborder="0" ' +
                  (v ? 'title="' + v + '"' : "") +
                  ' src="' +
                  y +
                  '"  allowfullscreen="true"></iframe>\n                </div>'),
                o.prepend(u))
              : n
              ? ((p = ""),
                x &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (p = this.getDummyImageContent(o, e, "")),
                (m = n),
                (f = p || ""),
                (v = I),
                (y = this.settings.strings.playVideo),
                (u =
                  '<div class="lg-video-cont ' +
                  ((p = b) && p.youtube
                    ? "lg-has-youtube"
                    : p && p.vimeo
                    ? "lg-has-vimeo"
                    : "lg-has-html5") +
                  '" style="' +
                  v +
                  '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
                  y +
                  '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
                  y +
                  '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
                  (f || "") +
                  '\n            <img class="lg-object lg-video-poster" src="' +
                  m +
                  '" />\n        </div>'),
                o.prepend(u))
              : b
              ? ((u = '<div class="lg-video-cont " style="' + I + '"></div>'),
                o.prepend(u))
              : (this.setImgMarkup(d, o, e),
                (r || a) &&
                  ((u = o.find(".lg-object")), this.initPictureFill(u))),
            (n || b) &&
              this.LGel.trigger("lgHasVideo", {
                index: e,
                src: d,
                html5Video: h,
                hasPoster: !!n,
              }),
            this.LGel.trigger("lgAfterAppendSlide", { index: e }),
            this.lGalleryOn &&
              ".lg-item" === this.settings.appendSubHtmlTo &&
              this.addHtml(e));
        var S = 0;
        w && !T(document.body).hasClass("lg-from-hash") && (S = w),
          this.isFirstSlideWithZoomAnimation() &&
            (setTimeout(function () {
              o.removeClass(
                "lg-start-end-progress lg-start-progress"
              ).removeAttr("style");
            }, this.settings.startAnimationDuration + 100),
            o.hasClass("lg-loaded") ||
              setTimeout(function () {
                var t;
                "image" === i.getSlideType(s) &&
                  ((t = (t = s.alt) ? 'alt="' + t + '"' : ""),
                  o.find(".lg-img-wrap").append(O(e, d, t, r, l, s.sources)),
                  (r || a) &&
                    ((t = o.find(".lg-object")), i.initPictureFill(t))),
                  ("image" === i.getSlideType(s) ||
                    ("video" === i.getSlideType(s) && n)) &&
                    (i.onLgObjectLoad(o, e, w, S, !0, !1),
                    i.onSlideObjectLoad(
                      o,
                      !(!b || !b.html5 || n),
                      function () {
                        i.loadContentOnFirstSlideLoad(e, o, S);
                      },
                      function () {
                        i.loadContentOnFirstSlideLoad(e, o, S);
                      }
                    ));
              }, this.settings.startAnimationDuration + 100)),
          o.addClass("lg-loaded"),
          (this.isFirstSlideWithZoomAnimation() &&
            ("video" !== this.getSlideType(s) || n)) ||
            this.onLgObjectLoad(o, e, w, S, x, !(!b || !b.html5 || n)),
          (this.zoomFromOrigin && this.currentImageSize) ||
            !o.hasClass("lg-complete_") ||
            this.lGalleryOn ||
            setTimeout(function () {
              o.addClass("lg-complete");
            }, this.settings.backdropDuration),
          (this.lGalleryOn = !0) === t &&
            (o.hasClass("lg-complete_")
              ? this.preload(e)
              : o
                  .find(".lg-object")
                  .first()
                  .on("load.lg error.lg", function () {
                    i.preload(e);
                  }));
      }),
      (t.prototype.loadContentOnFirstSlideLoad = function (t, e, i) {
        var s = this;
        setTimeout(function () {
          e.find(".lg-dummy-img").remove(),
            e.removeClass("lg-first-slide"),
            s.outer.removeClass("lg-first-slide-loading"),
            (s.isDummyImageRemoved = !0),
            s.preload(t);
        }, i + 300);
      }),
      (t.prototype.getItemsToBeInsertedToDom = function (t, e, i) {
        var s = this;
        void 0 === i && (i = 0);
        var o = [],
          n = Math.max(i, 3),
          n = Math.min(n, this.galleryItems.length),
          i = "lg-item-" + this.lgId + "-" + e;
        if (this.galleryItems.length <= 3)
          return (
            this.galleryItems.forEach(function (t, e) {
              o.push("lg-item-" + s.lgId + "-" + e);
            }),
            o
          );
        if (t < (this.galleryItems.length - 1) / 2) {
          for (var r = t; t - n / 2 < r && 0 <= r; r--)
            o.push("lg-item-" + this.lgId + "-" + r);
          for (var l = o.length, r = 0; r < n - l; r++)
            o.push("lg-item-" + this.lgId + "-" + (t + r + 1));
        } else {
          for (r = t; r <= this.galleryItems.length - 1 && r < t + n / 2; r++)
            o.push("lg-item-" + this.lgId + "-" + r);
          for (l = o.length, r = 0; r < n - l; r++)
            o.push("lg-item-" + this.lgId + "-" + (t - r - 1));
        }
        return (
          this.settings.loop &&
            (t === this.galleryItems.length - 1
              ? o.push("lg-item-" + this.lgId + "-0")
              : 0 === t &&
                o.push(
                  "lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1)
                )),
          -1 === o.indexOf(i) && o.push("lg-item-" + this.lgId + "-" + e),
          o
        );
      }),
      (t.prototype.organizeSlideItems = function (t, e) {
        var i = this,
          s = this.getItemsToBeInsertedToDom(
            t,
            e,
            this.settings.numberOfSlideItemsInDom
          );
        return (
          s.forEach(function (t) {
            -1 === i.currentItemsInDom.indexOf(t) &&
              i.$inner.append('<div id="' + t + '" class="lg-item"></div>');
          }),
          this.currentItemsInDom.forEach(function (t) {
            -1 === s.indexOf(t) && T("#" + t).remove();
          }),
          s
        );
      }),
      (t.prototype.getPreviousSlideIndex = function () {
        var t = 0;
        try {
          var e = this.outer.find(".lg-current").first().attr("id"),
            t = parseInt(e.split("-")[3]) || 0;
        } catch (e) {
          t = 0;
        }
        return t;
      }),
      (t.prototype.setDownloadValue = function (t) {
        var e;
        this.settings.download &&
          (!1 === (e = this.galleryItems[t]).downloadUrl ||
          "false" === e.downloadUrl
            ? this.outer.addClass("lg-hide-download")
            : ((t = this.getElementById("lg-download")),
              this.outer.removeClass("lg-hide-download"),
              t.attr("href", e.downloadUrl || e.src),
              e.download && t.attr("download", e.download)));
      }),
      (t.prototype.makeSlideAnimation = function (t, e, i) {
        var s = this;
        this.lGalleryOn && i.addClass("lg-slide-progress"),
          setTimeout(
            function () {
              s.outer.addClass("lg-no-trans"),
                s.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-next-slide"),
                "prev" === t
                  ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                  : (e.addClass("lg-next-slide"), i.addClass("lg-prev-slide")),
                setTimeout(function () {
                  s.outer.find(".lg-item").removeClass("lg-current"),
                    e.addClass("lg-current"),
                    s.outer.removeClass("lg-no-trans");
                }, 50);
            },
            this.lGalleryOn ? this.settings.slideDelay : 0
          );
      }),
      (t.prototype.slide = function (t, e, i, s) {
        var o,
          n,
          r,
          l,
          a,
          d,
          g = this,
          h = this.getPreviousSlideIndex();
        (this.currentItemsInDom = this.organizeSlideItems(t, h)),
          (this.lGalleryOn && h === t) ||
            ((o = this.galleryItems.length),
            this.lgBusy ||
              (this.settings.counter && this.updateCurrentCounter(t),
              (n = this.getSlideItem(t)),
              (r = this.getSlideItem(h)),
              (a = (l = this.galleryItems[t]).__slideVideoInfo),
              this.outer.attr("data-lg-slide-type", this.getSlideType(l)),
              this.setDownloadValue(t),
              a &&
                ((l = (d = this.mediaContainerPosition).top),
                (d = d.bottom),
                (d = E(
                  this.items[t],
                  this.outer,
                  l + d,
                  a && this.settings.videoMaxSize
                )),
                this.resizeVideoSlide(t, d)),
              this.LGel.trigger("lgBeforeSlide", {
                prevIndex: h,
                index: t,
                fromTouch: !!e,
                fromThumb: !!i,
              }),
              (this.lgBusy = !0),
              clearTimeout(this.hideBarTimeout),
              this.arrowDisable(t),
              s || (t < h ? (s = "prev") : h < t && (s = "next")),
              e
                ? (this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide"),
                  (d = a = void 0),
                  2 < o
                    ? ((a = t - 1),
                      (d = t + 1),
                      ((0 === t && h === o - 1) || (t === o - 1 && 0 === h)) &&
                        ((d = 0), (a = o - 1)))
                    : ((a = 0), (d = 1)),
                  "prev" === s
                    ? this.getSlideItem(d).addClass("lg-next-slide")
                    : this.getSlideItem(a).addClass("lg-prev-slide"),
                  n.addClass("lg-current"))
                : this.makeSlideAnimation(s, n, r),
              this.lGalleryOn
                ? setTimeout(function () {
                    g.loadContent(t, !0),
                      ".lg-item" !== g.settings.appendSubHtmlTo && g.addHtml(t);
                  }, this.settings.speed +
                    50 +
                    (e ? 0 : this.settings.slideDelay))
                : this.loadContent(t, !0),
              setTimeout(function () {
                (g.lgBusy = !1),
                  r.removeClass("lg-slide-progress"),
                  g.LGel.trigger("lgAfterSlide", {
                    prevIndex: h,
                    index: t,
                    fromTouch: e,
                    fromThumb: i,
                  });
              }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                (e ? 0 : this.settings.slideDelay))),
            (this.index = t));
      }),
      (t.prototype.updateCurrentCounter = function (t) {
        this.getElementById("lg-counter-current").html(t + 1 + "");
      }),
      (t.prototype.updateCounterTotal = function () {
        this.getElementById("lg-counter-all").html(
          this.galleryItems.length + ""
        );
      }),
      (t.prototype.getSlideType = function (t) {
        return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image";
      }),
      (t.prototype.touchMove = function (t, e, i) {
        var s = e.pageX - t.pageX,
          o = e.pageY - t.pageY,
          n = !1;
        this.swipeDirection
          ? (n = !0)
          : 15 < Math.abs(s)
          ? ((this.swipeDirection = "horizontal"), (n = !0))
          : 15 < Math.abs(o) && ((this.swipeDirection = "vertical"), (n = !0)),
          n &&
            ((e = this.getSlideItem(this.index)),
            "horizontal" === this.swipeDirection
              ? (null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(e, s, 0),
                (n =
                  (15 * (t = e.get().offsetWidth)) / 100 -
                  Math.abs((10 * s) / 100)),
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  s - t - n,
                  0
                ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  t + s + n,
                  0
                ))
              : "vertical" === this.swipeDirection &&
                this.settings.swipeToClose &&
                (null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical"),
                (i = 1 - Math.abs(o) / window.innerHeight),
                this.$backdrop.css("opacity", i),
                (i = 1 - Math.abs(o) / (2 * window.innerWidth)),
                this.setTranslate(e, 0, o, i, i),
                100 < Math.abs(o) &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open")));
      }),
      (t.prototype.touchEnd = function (i, s, o) {
        var n,
          r = this;
        "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
          setTimeout(function () {
            r.$container.removeClass("lg-dragging-vertical"),
              r.outer
                .removeClass("lg-dragging lg-hide-items")
                .addClass("lg-components-open");
            var t = !0;
            if ("horizontal" === r.swipeDirection) {
              n = i.pageX - s.pageX;
              var e = Math.abs(i.pageX - s.pageX);
              n < 0 && e > r.settings.swipeThreshold
                ? (r.goToNextSlide(!0), (t = !1))
                : 0 < n &&
                  e > r.settings.swipeThreshold &&
                  (r.goToPrevSlide(!0), (t = !1));
            } else if ("vertical" === r.swipeDirection) {
              if (
                ((n = Math.abs(i.pageY - s.pageY)),
                r.settings.closable && r.settings.swipeToClose && 100 < n)
              )
                return void r.closeGallery();
              r.$backdrop.css("opacity", 1);
            }
            r.outer.find(".lg-item").removeAttr("style"),
              t &&
                Math.abs(i.pageX - s.pageX) < 5 &&
                ((t = T(o.target)), r.isPosterElement(t) && r.LGel.trigger(l)),
              (r.swipeDirection = void 0);
          }),
          setTimeout(function () {
            r.outer.hasClass("lg-dragging") ||
              "lg-slide" === r.settings.mode ||
              r.outer.removeClass("lg-slide");
          }, this.settings.speed + 100);
      }),
      (t.prototype.enableSwipe = function () {
        var i = this,
          s = {},
          e = {},
          o = !1,
          n = !1;
        this.settings.enableSwipe &&
          (this.$inner.on("touchstart.lg", function (t) {
            i.dragOrSwipeEnabled = !0;
            var e = i.getSlideItem(i.index);
            (!T(t.target).hasClass("lg-item") && !e.get().contains(t.target)) ||
              i.outer.hasClass("lg-zoomed") ||
              i.lgBusy ||
              1 !== t.touches.length ||
              ((n = !0),
              (i.touchAction = "swipe"),
              i.manageSwipeClass(),
              (s = { pageX: t.touches[0].pageX, pageY: t.touches[0].pageY }));
          }),
          this.$inner.on("touchmove.lg", function (t) {
            n &&
              "swipe" === i.touchAction &&
              1 === t.touches.length &&
              ((e = { pageX: t.touches[0].pageX, pageY: t.touches[0].pageY }),
              i.touchMove(s, e, t),
              (o = !0));
          }),
          this.$inner.on("touchend.lg", function (t) {
            "swipe" === i.touchAction &&
              (o
                ? ((o = !1), i.touchEnd(e, s, t))
                : n &&
                  ((t = T(t.target)),
                  i.isPosterElement(t) && i.LGel.trigger(l)),
              (i.touchAction = void 0),
              (n = !1));
          }));
      }),
      (t.prototype.enableDrag = function () {
        var i = this,
          s = {},
          o = {},
          n = !1,
          r = !1;
        this.settings.enableDrag &&
          (this.outer.on("mousedown.lg", function (t) {
            i.dragOrSwipeEnabled = !0;
            var e = i.getSlideItem(i.index);
            (T(t.target).hasClass("lg-item") || e.get().contains(t.target)) &&
              (i.outer.hasClass("lg-zoomed") ||
                i.lgBusy ||
                (t.preventDefault(),
                i.lgBusy ||
                  (i.manageSwipeClass(),
                  (s = { pageX: t.pageX, pageY: t.pageY }),
                  (n = !0),
                  (i.outer.get().scrollLeft += 1),
                  --i.outer.get().scrollLeft,
                  i.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                  i.LGel.trigger("lgDragStart"))));
          }),
          T(window).on("mousemove.lg.global" + this.lgId, function (t) {
            n &&
              i.lgOpened &&
              ((r = !0),
              (o = { pageX: t.pageX, pageY: t.pageY }),
              i.touchMove(s, o),
              i.LGel.trigger("lgDragMove"));
          }),
          T(window).on("mouseup.lg.global" + this.lgId, function (t) {
            var e;
            i.lgOpened &&
              ((e = T(t.target)),
              r
                ? ((r = !1), i.touchEnd(o, s, t), i.LGel.trigger("lgDragEnd"))
                : i.isPosterElement(e) && i.LGel.trigger(l),
              n &&
                ((n = !1),
                i.outer.removeClass("lg-grabbing").addClass("lg-grab")));
          }));
      }),
      (t.prototype.triggerPosterClick = function () {
        var e = this;
        this.$inner.on("click.lg", function (t) {
          !e.dragOrSwipeEnabled &&
            e.isPosterElement(T(t.target)) &&
            e.LGel.trigger(l);
        });
      }),
      (t.prototype.manageSwipeClass = function () {
        var t = this.index + 1,
          e = this.index - 1;
        this.settings.loop &&
          2 < this.galleryItems.length &&
          (0 === this.index
            ? (e = this.galleryItems.length - 1)
            : this.index === this.galleryItems.length - 1 && (t = 0)),
          this.outer
            .find(".lg-item")
            .removeClass("lg-next-slide lg-prev-slide"),
          -1 < e && this.getSlideItem(e).addClass("lg-prev-slide"),
          this.getSlideItem(t).addClass("lg-next-slide");
      }),
      (t.prototype.goToNextSlide = function (t) {
        var e = this,
          i = this.settings.loop;
        t && this.galleryItems.length < 3 && (i = !1),
          this.lgBusy ||
            (this.index + 1 < this.galleryItems.length
              ? (this.index++,
                this.LGel.trigger(s, { index: this.index }),
                this.slide(this.index, !!t, !1, "next"))
              : i
              ? ((this.index = 0),
                this.LGel.trigger(s, { index: this.index }),
                this.slide(this.index, !!t, !1, "next"))
              : this.settings.slideEndAnimation &&
                !t &&
                (this.outer.addClass("lg-right-end"),
                setTimeout(function () {
                  e.outer.removeClass("lg-right-end");
                }, 400)));
      }),
      (t.prototype.goToPrevSlide = function (t) {
        var e = this,
          i = this.settings.loop;
        t && this.galleryItems.length < 3 && (i = !1),
          this.lgBusy ||
            (0 < this.index
              ? (this.index--,
                this.LGel.trigger(n, { index: this.index, fromTouch: t }),
                this.slide(this.index, !!t, !1, "prev"))
              : i
              ? ((this.index = this.galleryItems.length - 1),
                this.LGel.trigger(n, { index: this.index, fromTouch: t }),
                this.slide(this.index, !!t, !1, "prev"))
              : this.settings.slideEndAnimation &&
                !t &&
                (this.outer.addClass("lg-left-end"),
                setTimeout(function () {
                  e.outer.removeClass("lg-left-end");
                }, 400)));
      }),
      (t.prototype.keyPress = function () {
        var e = this;
        T(window).on("keydown.lg.global" + this.lgId, function (t) {
          e.lgOpened &&
            !0 === e.settings.escKey &&
            27 === t.keyCode &&
            (t.preventDefault(),
            e.settings.allowMediaOverlap &&
            e.outer.hasClass("lg-can-toggle") &&
            e.outer.hasClass("lg-components-open")
              ? e.outer.removeClass("lg-components-open")
              : e.closeGallery()),
            e.lgOpened &&
              1 < e.galleryItems.length &&
              (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
              39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
        });
      }),
      (t.prototype.arrow = function () {
        var t = this;
        this.getElementById("lg-prev").on("click.lg", function () {
          t.goToPrevSlide();
        }),
          this.getElementById("lg-next").on("click.lg", function () {
            t.goToNextSlide();
          });
      }),
      (t.prototype.arrowDisable = function (t) {
        var e, i;
        !this.settings.loop &&
          this.settings.hideControlOnEnd &&
          ((e = this.getElementById("lg-prev")),
          (i = this.getElementById("lg-next")),
          t + 1 === this.galleryItems.length
            ? i.attr("disabled", "disabled").addClass("disabled")
            : i.removeAttr("disabled").removeClass("disabled"),
          0 === t
            ? e.attr("disabled", "disabled").addClass("disabled")
            : e.removeAttr("disabled").removeClass("disabled"));
      }),
      (t.prototype.setTranslate = function (t, e, i, s, o) {
        void 0 === s && (s = 1),
          void 0 === o && (o = 1),
          t.css(
            "transform",
            "translate3d(" +
              e +
              "px, " +
              i +
              "px, 0px) scale3d(" +
              s +
              ", " +
              o +
              ", 1)"
          );
      }),
      (t.prototype.mousewheel = function () {
        var i = this,
          s = 0;
        this.outer.on("wheel.lg", function (t) {
          var e;
          !t.deltaY ||
            i.galleryItems.length < 2 ||
            (t.preventDefault(),
            (e = new Date().getTime()) - s < 1e3 ||
              ((s = e),
              0 < t.deltaY
                ? i.goToNextSlide()
                : t.deltaY < 0 && i.goToPrevSlide()));
        });
      }),
      (t.prototype.isSlideElement = function (t) {
        return (
          t.hasClass("lg-outer") ||
          t.hasClass("lg-item") ||
          t.hasClass("lg-img-wrap")
        );
      }),
      (t.prototype.isPosterElement = function (t) {
        var e = this.getSlideItem(this.index)
          .find(".lg-video-play-button")
          .get();
        return (
          t.hasClass("lg-video-poster") ||
          t.hasClass("lg-video-play-button") ||
          (e && e.contains(t.get()))
        );
      }),
      (t.prototype.toggleMaximize = function () {
        var t = this;
        this.getElementById("lg-maximize").on("click.lg", function () {
          t.$container.toggleClass("lg-inline"), t.refreshOnResize();
        });
      }),
      (t.prototype.invalidateItems = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = T(this.items[t]);
          e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
        }
      }),
      (t.prototype.trapFocus = function () {
        var s = this;
        this.$container.get().focus({ preventScroll: !0 }),
          T(window).on("keydown.lg.global" + this.lgId, function (t) {
            var e, i;
            !s.lgOpened ||
              ("Tab" !== t.key && 9 !== t.keyCode) ||
              ((e = (i = (function (t) {
                t = t.querySelectorAll(
                  'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
                );
                return [].filter.call(t, function (t) {
                  t = window.getComputedStyle(t);
                  return "none" !== t.display && "hidden" !== t.visibility;
                });
              })(s.$container.get()))[0]),
              (i = i[i.length - 1]),
              t.shiftKey
                ? document.activeElement === e &&
                  (i.focus(), t.preventDefault())
                : document.activeElement === i &&
                  (e.focus(), t.preventDefault()));
          });
      }),
      (t.prototype.manageCloseGallery = function () {
        var e,
          i = this;
        this.settings.closable &&
          ((e = !1),
          this.getElementById("lg-close").on("click.lg", function () {
            i.closeGallery();
          }),
          this.settings.closeOnTap &&
            (this.outer.on("mousedown.lg", function (t) {
              t = T(t.target);
              e = !!i.isSlideElement(t);
            }),
            this.outer.on("mousemove.lg", function () {
              e = !1;
            }),
            this.outer.on("mouseup.lg", function (t) {
              t = T(t.target);
              i.isSlideElement(t) &&
                e &&
                (i.outer.hasClass("lg-dragging") || i.closeGallery());
            })));
      }),
      (t.prototype.closeGallery = function (t) {
        var e = this;
        if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
        this.LGel.trigger("lgBeforeClose"),
          this.settings.resetScrollPosition &&
            !this.settings.hideScrollbar &&
            T(window).scrollTop(this.prevScrollTop);
        var i,
          s,
          o,
          n = this.items[this.index];
        this.zoomFromOrigin &&
          n &&
          ((i = (s = this.mediaContainerPosition).top),
          (t = s.bottom),
          (s = (r = this.galleryItems[this.index]).__slideVideoInfo),
          (r = r.poster),
          (r = E(n, this.outer, i + t, s && r && this.settings.videoMaxSize)),
          (o = d(n, this.outer, i, t, r))),
          this.zoomFromOrigin && o
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", o))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
          this.destroyModules(),
          (this.lGalleryOn = !1),
          (this.isDummyImageRemoved = !1),
          (this.zoomFromOrigin = this.settings.zoomFromOrigin),
          clearTimeout(this.hideBarTimeout),
          (this.hideBarTimeout = !1),
          T("html").removeClass("lg-on"),
          this.outer.removeClass("lg-visible lg-components-open"),
          this.$backdrop.removeClass("in").css("opacity", 0);
        var r =
          this.zoomFromOrigin && o
            ? Math.max(
                this.settings.startAnimationDuration,
                this.settings.backdropDuration
              )
            : this.settings.backdropDuration;
        return (
          this.$container.removeClass("lg-show-in"),
          setTimeout(function () {
            e.zoomFromOrigin && o && e.outer.removeClass("lg-zoom-from-image"),
              e.$container.removeClass("lg-show"),
              e.resetScrollBar(),
              e.$backdrop
                .removeAttr("style")
                .css("transition-duration", e.settings.backdropDuration + "ms"),
              e.outer.removeClass("lg-closing " + e.settings.startClass),
              e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
              e.$inner.empty(),
              e.lgOpened && e.LGel.trigger("lgAfterClose", { instance: e }),
              e.$container.get() && e.$container.get().blur(),
              (e.lgOpened = !1);
          }, r + 100),
          r + 100
        );
      }),
      (t.prototype.initModules = function () {
        this.plugins.forEach(function (t) {
          try {
            t.init();
          } catch (t) {
            console.warn(
              "lightGallery:- make sure lightGallery module is properly initiated"
            );
          }
        });
      }),
      (t.prototype.destroyModules = function (e) {
        this.plugins.forEach(function (t) {
          try {
            e ? t.destroy() : t.closeGallery && t.closeGallery();
          } catch (t) {
            console.warn(
              "lightGallery:- make sure lightGallery module is properly destroyed"
            );
          }
        });
      }),
      (t.prototype.refresh = function (t) {
        this.settings.dynamic || this.invalidateItems(),
          (this.galleryItems = t || this.getItems()),
          this.updateControls(),
          this.openGalleryOnItemClick(),
          this.LGel.trigger(o);
      }),
      (t.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems),
          this.updateCounterTotal(),
          this.manageSingleSlideClassName();
      }),
      (t.prototype.destroyGallery = function () {
        this.destroyModules(!0),
          this.settings.dynamic || this.invalidateItems(),
          T(window).off(".lg.global" + this.lgId),
          this.LGel.off(".lg"),
          this.$container.remove();
      }),
      (t.prototype.destroy = function () {
        var t = this.closeGallery(!0);
        return (
          t
            ? setTimeout(this.destroyGallery.bind(this), t)
            : this.destroyGallery(),
          t
        );
      }),
      t);
  function t(t, e) {
    if (
      ((this.lgOpened = !1),
      (this.index = 0),
      (this.plugins = []),
      (this.lGalleryOn = !1),
      (this.lgBusy = !1),
      (this.currentItemsInDom = []),
      (this.prevScrollTop = 0),
      (this.bodyPaddingRight = 0),
      (this.isDummyImageRemoved = !1),
      (this.dragOrSwipeEnabled = !1),
      (this.mediaContainerPosition = { top: 0, bottom: 0 }),
      !t)
    )
      return this;
    if (
      (g++,
      (this.lgId = g),
      (this.el = t),
      (this.LGel = T(t)),
      this.generateSettings(e),
      this.buildModules(),
      this.settings.dynamic &&
        void 0 !== this.settings.dynamicEl &&
        !Array.isArray(this.settings.dynamicEl))
    )
      throw "When using dynamic mode, you must also define dynamicEl as an Array.";
    return (
      (this.galleryItems = this.getItems()),
      this.normalizeSettings(),
      this.init(),
      this
    );
  }
  return function (t, e) {
    return new h(t, e);
  };
});
