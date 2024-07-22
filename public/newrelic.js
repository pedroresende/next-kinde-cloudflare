window.NREUM || (NREUM = {})
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ["bam.nr-data.net"] }
}

NREUM.loader_config = {
  accountID: "494547",
  trustKey: "494547",
  agentID: "1103344890",
  licenseKey: "614a8a5c14",
  applicationID: "1103344890"
}
NREUM.info = {
  beacon: "bam.nr-data.net",
  errorBeacon: "bam.nr-data.net",
  licenseKey: "614a8a5c14",
  applicationID: "1103344890",
  sa: 1
} /*! For license information please see nr-loader-spa-1.261.1.min.js.LICENSE.txt */
;(() => {
  var e,
    t,
    r = {
      2983: (e, t, r) => {
        "use strict"
        r.d(t, {
          D0: () => v,
          gD: () => y,
          Vp: () => s,
          oC: () => x,
          fr: () => _,
          jD: () => C,
          hR: () => T,
          xN: () => b,
          x1: () => c,
          aN: () => A,
          V: () => j
        })
        var n = r(384),
          i = r(7864)
        const o = {
            beacon: n.NT.beacon,
            errorBeacon: n.NT.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0
          },
          a = {}
        function s(e) {
          if (!e)
            throw new Error("All info objects require an agent identifier!")
          if (!a[e]) throw new Error("Info for ".concat(e, " was never set"))
          return a[e]
        }
        function c(e, t) {
          if (!e)
            throw new Error("All info objects require an agent identifier!")
          a[e] = (0, i.a)(t, o)
          const r = (0, n.nY)(e)
          r && (r.info = a[e])
        }
        var u = r(993)
        const d = (e) => {
          if (!e || "string" != typeof e) return !1
          try {
            document.createDocumentFragment().querySelector(e)
          } catch {
            return !1
          }
          return !0
        }
        var l = r(2614),
          f = r(944)
        const h = "[data-nr-mask]",
          g = () => {
            const e = {
              mask_selector: "*",
              block_selector: "[data-nr-block]",
              mask_input_options: {
                color: !1,
                date: !1,
                "datetime-local": !1,
                email: !1,
                month: !1,
                number: !1,
                range: !1,
                search: !1,
                tel: !1,
                text: !1,
                time: !1,
                url: !1,
                week: !1,
                textarea: !1,
                select: !1,
                password: !0
              }
            }
            return {
              ajax: {
                deny_list: void 0,
                block_internal: !0,
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              },
              distributed_tracing: {
                enabled: void 0,
                exclude_newrelic_header: void 0,
                cors_use_newrelic_header: void 0,
                cors_use_tracecontext_headers: void 0,
                allowed_origins: void 0
              },
              feature_flags: [],
              harvest: { tooManyRequestsDelay: 60 },
              jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              logging: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0,
                level: u.p_.INFO
              },
              metrics: { enabled: !0, autoStart: !0 },
              obfuscate: void 0,
              page_action: {
                enabled: !0,
                harvestTimeSeconds: 30,
                autoStart: !0
              },
              page_view_event: { enabled: !0, autoStart: !0 },
              page_view_timing: {
                enabled: !0,
                harvestTimeSeconds: 30,
                long_task: !1,
                autoStart: !0
              },
              privacy: { cookies_enabled: !0 },
              proxy: { assets: void 0, beacon: void 0 },
              session: { expiresMs: l.wk, inactiveMs: l.BB },
              session_replay: {
                autoStart: !0,
                enabled: !1,
                harvestTimeSeconds: 60,
                preload: !1,
                sampling_rate: 10,
                error_sampling_rate: 100,
                collect_fonts: !1,
                inline_images: !1,
                inline_stylesheet: !0,
                mask_all_inputs: !0,
                get mask_text_selector() {
                  return e.mask_selector
                },
                set mask_text_selector(t) {
                  d(t)
                    ? (e.mask_selector = "".concat(t, ",").concat(h))
                    : "" === t || null === t
                      ? (e.mask_selector = h)
                      : (0, f.R)(
                          "An invalid session_replay.mask_selector was provided. '*' will be used.",
                          t
                        )
                },
                get block_class() {
                  return "nr-block"
                },
                get ignore_class() {
                  return "nr-ignore"
                },
                get mask_text_class() {
                  return "nr-mask"
                },
                get block_selector() {
                  return e.block_selector
                },
                set block_selector(t) {
                  d(t)
                    ? (e.block_selector += ",".concat(t))
                    : "" !== t &&
                      (0, f.R)(
                        "An invalid session_replay.block_selector was provided and will not be used",
                        t
                      )
                },
                get mask_input_options() {
                  return e.mask_input_options
                },
                set mask_input_options(t) {
                  t && "object" == typeof t
                    ? (e.mask_input_options = { ...t, password: !0 })
                    : (0, f.R)(
                        "An invalid session_replay.mask_input_option was provided and will not be used",
                        t
                      )
                }
              },
              session_trace: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              },
              soft_navigations: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0
              },
              spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              ssl: void 0
            }
          },
          p = {},
          m = "All configuration objects require an agent identifier!"
        function v(e) {
          if (!e) throw new Error(m)
          if (!p[e])
            throw new Error("Configuration for ".concat(e, " was never set"))
          return p[e]
        }
        function b(e, t) {
          if (!e) throw new Error(m)
          p[e] = (0, i.a)(t, g())
          const r = (0, n.nY)(e)
          r && (r.init = p[e])
        }
        function y(e, t) {
          if (!e) throw new Error(m)
          var r = v(e)
          if (r) {
            for (var n = t.split("."), i = 0; i < n.length - 1; i++)
              if ("object" != typeof (r = r[n[i]])) return
            r = r[n[n.length - 1]]
          }
          return r
        }
        const w = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0
          },
          R = {}
        function x(e) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            )
          if (!R[e])
            throw new Error("LoaderConfig for ".concat(e, " was never set"))
          return R[e]
        }
        function A(e, t) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            )
          R[e] = (0, i.a)(t, w)
          const r = (0, n.nY)(e)
          r && (r.loader_config = R[e])
        }
        const T = (0, n.dV)().o
        var E = r(6154),
          N = r(9324)
        const S = {
            buildEnv: N.F3,
            distMethod: N.Xs,
            version: N.xv,
            originTime: E.WN
          },
          O = {
            customTransaction: void 0,
            disabled: !1,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            onerror: void 0,
            origin: "" + E.gm.location,
            ptid: void 0,
            releaseIds: {},
            appMetadata: {},
            session: void 0,
            denyList: void 0,
            harvestCount: 0,
            timeKeeper: void 0
          },
          I = {}
        function _(e) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!")
          if (!I[e]) throw new Error("Runtime for ".concat(e, " was never set"))
          return I[e]
        }
        function j(e, t) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!")
          I[e] = { ...(0, i.a)(t, O), ...S }
          const r = (0, n.nY)(e)
          r && (r.runtime = I[e])
        }
        function C(e) {
          return (function (e) {
            try {
              const t = s(e)
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
            } catch (e) {
              return !1
            }
          })(e)
        }
      },
      7864: (e, t, r) => {
        "use strict"
        r.d(t, { a: () => i })
        var n = r(944)
        function i(e, t) {
          try {
            if (!e || "object" != typeof e)
              return (0, n.R)(
                "Setting a Configurable requires an object as input"
              )
            if (!t || "object" != typeof t)
              return (0, n.R)(
                "Setting a Configurable requires a model to set its initial properties"
              )
            const r = Object.create(
                Object.getPrototypeOf(t),
                Object.getOwnPropertyDescriptors(t)
              ),
              o = 0 === Object.keys(r).length ? e : r
            for (let a in o)
              if (void 0 !== e[a])
                try {
                  if (null === e[a]) {
                    r[a] = null
                    continue
                  }
                  Array.isArray(e[a]) && Array.isArray(t[a])
                    ? (r[a] = Array.from(new Set([...e[a], ...t[a]])))
                    : "object" == typeof e[a] && "object" == typeof t[a]
                      ? (r[a] = i(e[a], t[a]))
                      : (r[a] = e[a])
                } catch (e) {
                  ;(0, n.R)(
                    "An error occurred while setting a property of a Configurable",
                    e
                  )
                }
            return r
          } catch (e) {
            ;(0, n.R)("An error occured while setting a Configurable", e)
          }
        }
      },
      9324: (e, t, r) => {
        "use strict"
        r.d(t, { F3: () => i, Xs: () => o, Yq: () => a, xv: () => n })
        const n = "1.261.1",
          i = "PROD",
          o = "CDN",
          a = "2.0.0-alpha.12"
      },
      6154: (e, t, r) => {
        "use strict"
        r.d(t, {
          A4: () => s,
          OF: () => d,
          RI: () => i,
          Vr: () => g,
          WN: () => p,
          bv: () => o,
          gm: () => a,
          lR: () => f,
          lT: () => h,
          m: () => u,
          mw: () => c,
          sb: () => l
        })
        var n = r(1863)
        const i = "undefined" != typeof window && !!window.document,
          o =
            "undefined" != typeof WorkerGlobalScope &&
            (("undefined" != typeof self &&
              self instanceof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator) ||
              ("undefined" != typeof globalThis &&
                globalThis instanceof WorkerGlobalScope &&
                globalThis.navigator instanceof WorkerNavigator)),
          a = i
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              (("undefined" != typeof self &&
                self instanceof WorkerGlobalScope &&
                self) ||
                ("undefined" != typeof globalThis &&
                  globalThis instanceof WorkerGlobalScope &&
                  globalThis)),
          s = "complete" === a?.document?.readyState,
          c = Boolean("hidden" === a?.document?.visibilityState),
          u = "" + a?.location,
          d = /iPad|iPhone|iPod/.test(a.navigator?.userAgent),
          l = d && "undefined" == typeof SharedWorker,
          f = (() => {
            const e = a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/)
            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
          })(),
          h = Boolean(i && window.document.documentMode),
          g = !!a.navigator?.sendBeacon,
          p = Date.now() - (0, n.t)()
      },
      4777: (e, t, r) => {
        "use strict"
        r.d(t, { J: () => o })
        var n = r(944)
        const i = { agentIdentifier: "", ee: void 0 }
        class o {
          constructor(e) {
            try {
              if ("object" != typeof e)
                return (0, n.R)("shared context requires an object as input")
              ;(this.sharedContext = {}),
                Object.assign(this.sharedContext, i),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e
                  Object.keys(i).includes(t) && (this.sharedContext[t] = r)
                })
            } catch (e) {
              ;(0, n.R)("An error occurred while setting SharedContext", e)
            }
          }
        }
      },
      7295: (e, t, r) => {
        "use strict"
        r.d(t, { Xv: () => a, gX: () => i, iW: () => o })
        var n = []
        function i(e) {
          if (!e || o(e)) return !1
          if (0 === n.length) return !0
          for (var t = 0; t < n.length; t++) {
            var r = n[t]
            if ("*" === r.hostname) return !1
            if (s(r.hostname, e.hostname) && c(r.pathname, e.pathname))
              return !1
          }
          return !0
        }
        function o(e) {
          return void 0 === e.hostname
        }
        function a(e) {
          if (((n = []), e && e.length))
            for (var t = 0; t < e.length; t++) {
              let r = e[t]
              if (!r) continue
              0 === r.indexOf("http://")
                ? (r = r.substring(7))
                : 0 === r.indexOf("https://") && (r = r.substring(8))
              const i = r.indexOf("/")
              let o, a
              i > 0
                ? ((o = r.substring(0, i)), (a = r.substring(i)))
                : ((o = r), (a = ""))
              let [s] = o.split(":")
              n.push({ hostname: s, pathname: a })
            }
        }
        function s(e, t) {
          return !(e.length > t.length) && t.indexOf(e) === t.length - e.length
        }
        function c(e, t) {
          return (
            0 === e.indexOf("/") && (e = e.substring(1)),
            0 === t.indexOf("/") && (t = t.substring(1)),
            "" === e || e === t
          )
        }
      },
      1687: (e, t, r) => {
        "use strict"
        r.d(t, { Ak: () => c, Ze: () => l, x3: () => u })
        var n = r(7836),
          i = r(1478),
          o = r(3606),
          a = r(860)
        const s = {}
        function c(e, t) {
          const r = { staged: !1, priority: a.P[t] || 0 }
          d(e), s[e].get(t) || s[e].set(t, r)
        }
        function u(e, t) {
          d(e), s[e].get(t) && s[e].delete(t), s[e].size && f(e)
        }
        function d(e) {
          if (!e) throw new Error("agentIdentifier required")
          s[e] || (s[e] = new Map())
        }
        function l() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "feature",
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if ((d(e), !e || !s[e].get(t) || r)) return h(e, t)
          ;(s[e].get(t).staged = !0), f(e)
        }
        function f(e) {
          const t = Array.from(s[e])
          t.every((e) => {
            let [t, r] = e
            return r.staged
          }) &&
            (t.sort((e, t) => e[1].priority - t[1].priority),
            t.forEach((t) => {
              let [r] = t
              s[e].delete(r), h(e, r)
            }))
        }
        function h(e, t) {
          const r = e ? n.ee.get(e) : n.ee,
            a = o.i.handlers
          if (r.backlog && a) {
            var s = r.backlog[t],
              c = a[t]
            if (c) {
              for (var u = 0; s && u < s.length; ++u) g(s[u], c)
              ;(0, i.$)(c, function (e, t) {
                ;(0, i.$)(t, function (t, r) {
                  r[0].on(e, r[1])
                })
              })
            }
            r.isolatedBacklog || delete a[t],
              (r.backlog[t] = null),
              r.emit("drain-" + t, [])
          }
        }
        function g(e, t) {
          var r = e[1]
          ;(0, i.$)(t[r], function (t, r) {
            var n = e[0]
            if (r[0] === n) {
              var i = r[1],
                o = e[3],
                a = e[2]
              i.apply(o, a)
            }
          })
        }
      },
      7836: (e, t, r) => {
        "use strict"
        r.d(t, { P: () => c, ee: () => u })
        var n = r(384),
          i = r(8990),
          o = r(2983),
          a = r(2646),
          s = r(5607)
        const c = "nr@context:".concat(s.W),
          u = (function e(t, r) {
            var n = {},
              s = {},
              d = {},
              l = !1
            try {
              l = 16 === r.length && (0, o.fr)(r).isolatedBacklog
            } catch (e) {}
            var f = {
              on: g,
              addEventListener: g,
              removeEventListener: function (e, t) {
                var r = n[e]
                if (!r) return
                for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
              },
              emit: function (e, r, n, i, o) {
                !1 !== o && (o = !0)
                if (u.aborted && !i) return
                t && o && t.emit(e, r, n)
                for (var a = h(n), c = p(e), d = c.length, l = 0; l < d; l++)
                  c[l].apply(a, r)
                var g = v()[s[e]]
                g && g.push([f, e, r, a])
                return a
              },
              get: m,
              listeners: p,
              context: h,
              buffer: function (e, t) {
                const r = v()
                if (((t = t || "feature"), f.aborted)) return
                Object.entries(e || {}).forEach((e) => {
                  let [n, i] = e
                  ;(s[i] = t), t in r || (r[t] = [])
                })
              },
              abort: function () {
                ;(f._aborted = !0),
                  Object.keys(f.backlog).forEach((e) => {
                    delete f.backlog[e]
                  })
              },
              isBuffering: function (e) {
                return !!v()[s[e]]
              },
              debugId: r,
              backlog: l
                ? {}
                : t && "object" == typeof t.backlog
                  ? t.backlog
                  : {},
              isolatedBacklog: l
            }
            return (
              Object.defineProperty(f, "aborted", {
                get: () => {
                  let e = f._aborted || !1
                  return e || (t && (e = t.aborted), e)
                }
              }),
              f
            )
            function h(e) {
              return e && e instanceof a.y
                ? e
                : e
                  ? (0, i.I)(e, c, () => new a.y(c))
                  : new a.y(c)
            }
            function g(e, t) {
              n[e] = p(e).concat(t)
            }
            function p(e) {
              return n[e] || []
            }
            function m(t) {
              return (d[t] = d[t] || e(f, t))
            }
            function v() {
              return f.backlog
            }
          })(void 0, "globalEE"),
          d = (0, n.Zm)()
        d.ee || (d.ee = u)
      },
      2646: (e, t, r) => {
        "use strict"
        r.d(t, { y: () => n })
        class n {
          constructor(e) {
            this.contextId = e
          }
        }
      },
      9908: (e, t, r) => {
        "use strict"
        r.d(t, { d: () => n, p: () => i })
        var n = r(7836).ee.get("handle")
        function i(e, t, r, i, o) {
          o
            ? (o.buffer([e], i), o.emit(e, t, r))
            : (n.buffer([e], i), n.emit(e, t, r))
        }
      },
      3606: (e, t, r) => {
        "use strict"
        r.d(t, { i: () => o })
        var n = r(9908)
        o.on = a
        var i = (o.handlers = {})
        function o(e, t, r, o) {
          a(o || n.d, i, e, t, r)
        }
        function a(e, t, r, i, o) {
          o || (o = "feature"), e || (e = n.d)
          var a = (t[o] = t[o] || {})
          ;(a[r] = a[r] || []).push([e, i])
        }
      },
      3878: (e, t, r) => {
        "use strict"
        r.d(t, { DD: () => c, jT: () => a, sp: () => s })
        var n = r(6154)
        let i = !1,
          o = !1
        try {
          const e = {
            get passive() {
              return (i = !0), !1
            },
            get signal() {
              return (o = !0), !1
            }
          }
          n.gm.addEventListener("test", null, e),
            n.gm.removeEventListener("test", null, e)
        } catch (e) {}
        function a(e, t) {
          return i || o ? { capture: !!e, passive: i, signal: t } : !!e
        }
        function s(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0
          window.addEventListener(e, t, a(r, n))
        }
        function c(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0
          document.addEventListener(e, t, a(r, n))
        }
      },
      5607: (e, t, r) => {
        "use strict"
        r.d(t, { W: () => n })
        const n = (0, r(9566).bz)()
      },
      9566: (e, t, r) => {
        "use strict"
        r.d(t, { LA: () => s, ZF: () => c, bz: () => a, el: () => u })
        var n = r(6154)
        const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        function o(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0
        }
        function a() {
          const e = n.gm?.crypto || n.gm?.msCrypto
          let t,
            r = 0
          return (
            e &&
              e.getRandomValues &&
              (t = e.getRandomValues(new Uint8Array(30))),
            i
              .split("")
              .map((e) =>
                "x" === e
                  ? o(t, r++).toString(16)
                  : "y" === e
                    ? ((3 & o()) | 8).toString(16)
                    : e
              )
              .join("")
          )
        }
        function s(e) {
          const t = n.gm?.crypto || n.gm?.msCrypto
          let r,
            i = 0
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)))
          const a = []
          for (var s = 0; s < e; s++) a.push(o(r, i++).toString(16))
          return a.join("")
        }
        function c() {
          return s(16)
        }
        function u() {
          return s(32)
        }
      },
      2614: (e, t, r) => {
        "use strict"
        r.d(t, {
          BB: () => a,
          H3: () => n,
          g: () => u,
          iL: () => c,
          tS: () => s,
          uh: () => i,
          wk: () => o
        })
        const n = "NRBA",
          i = "SESSION",
          o = 144e5,
          a = 18e5,
          s = {
            STARTED: "session-started",
            PAUSE: "session-pause",
            RESET: "session-reset",
            RESUME: "session-resume",
            UPDATE: "session-update"
          },
          c = { SAME_TAB: "same-tab", CROSS_TAB: "cross-tab" },
          u = { OFF: 0, FULL: 1, ERROR: 2 }
      },
      1863: (e, t, r) => {
        "use strict"
        function n() {
          return Math.floor(performance.now())
        }
        r.d(t, { t: () => n })
      },
      7485: (e, t, r) => {
        "use strict"
        r.d(t, { D: () => i })
        var n = r(6154)
        function i(e) {
          if (0 === (e || "").indexOf("data:")) return { protocol: "data" }
          try {
            const t = new URL(e, location.href),
              r = {
                port: t.port,
                hostname: t.hostname,
                pathname: t.pathname,
                search: t.search,
                protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
                sameOrigin:
                  t.protocol === n.gm?.location?.protocol &&
                  t.host === n.gm?.location?.host
              }
            return (
              (r.port && "" !== r.port) ||
                ("http:" === t.protocol && (r.port = "80"),
                "https:" === t.protocol && (r.port = "443")),
              r.pathname && "" !== r.pathname
                ? r.pathname.startsWith("/") ||
                  (r.pathname = "/".concat(r.pathname))
                : (r.pathname = "/"),
              r
            )
          } catch (e) {
            return {}
          }
        }
      },
      944: (e, t, r) => {
        "use strict"
        function n(e, t) {
          "function" == typeof console.warn &&
            (console.warn("New Relic: ".concat(e)), t && console.warn(t))
        }
        r.d(t, { R: () => n })
      },
      5284: (e, t, r) => {
        "use strict"
        r.d(t, { t: () => c, B: () => s })
        var n = r(7836),
          i = r(6154)
        const o = "newrelic"
        const a = new Set(),
          s = {}
        function c(e, t) {
          const r = n.ee.get(t)
          ;(s[t] ??= {}),
            e &&
              "object" == typeof e &&
              (a.has(t) ||
                (r.emit("rumresp", [e]),
                (s[t] = e),
                a.add(t),
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  try {
                    i.gm.dispatchEvent(new CustomEvent(o, { detail: e }))
                  } catch (e) {}
                })({ loaded: !0 })))
        }
      },
      8990: (e, t, r) => {
        "use strict"
        r.d(t, { I: () => i })
        var n = Object.prototype.hasOwnProperty
        function i(e, t, r) {
          if (n.call(e, t)) return e[t]
          var i = r()
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.defineProperty(e, t, {
                  value: i,
                  writable: !0,
                  enumerable: !1
                }),
                i
              )
            } catch (e) {}
          return (e[t] = i), i
        }
      },
      6389: (e, t, r) => {
        "use strict"
        function n(e) {
          var t = this
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
          const i = n?.leading || !1
          let o
          return function () {
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s]
            i &&
              void 0 === o &&
              (e.apply(t, a),
              (o = setTimeout(() => {
                o = clearTimeout(o)
              }, r))),
              i ||
                (clearTimeout(o),
                (o = setTimeout(() => {
                  e.apply(t, a)
                }, r)))
          }
        }
        function i(e) {
          var t = this
          let r = !1
          return function () {
            if (!r) {
              r = !0
              for (
                var n = arguments.length, i = new Array(n), o = 0;
                o < n;
                o++
              )
                i[o] = arguments[o]
              e.apply(t, i)
            }
          }
        }
        r.d(t, { J: () => i, s: () => n })
      },
      1478: (e, t, r) => {
        "use strict"
        r.d(t, { $: () => n })
        const n = (e, t) =>
          Object.entries(e || {}).map((e) => {
            let [r, n] = e
            return t(r, n)
          })
      },
      3304: (e, t, r) => {
        "use strict"
        r.d(t, { A: () => o })
        var n = r(7836)
        const i = () => {
          const e = new WeakSet()
          return (t, r) => {
            if ("object" == typeof r && null !== r) {
              if (e.has(r)) return
              e.add(r)
            }
            return r
          }
        }
        function o(e) {
          try {
            return JSON.stringify(e, i())
          } catch (e) {
            try {
              n.ee.emit("internal-error", [e])
            } catch (e) {}
          }
        }
      },
      5289: (e, t, r) => {
        "use strict"
        r.d(t, { GG: () => o, sB: () => a })
        var n = r(3878)
        function i() {
          return (
            "undefined" == typeof document || "complete" === document.readyState
          )
        }
        function o(e, t) {
          if (i()) return e()
          ;(0, n.sp)("load", e, t)
        }
        function a(e) {
          if (i()) return e()
          ;(0, n.DD)("DOMContentLoaded", e)
        }
      },
      384: (e, t, r) => {
        "use strict"
        r.d(t, {
          NT: () => o,
          US: () => d,
          Zm: () => a,
          bQ: () => c,
          dV: () => s,
          nY: () => u,
          pV: () => l
        })
        var n = r(6154),
          i = r(1863)
        const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" }
        function a() {
          return (
            n.gm.NREUM || (n.gm.NREUM = {}),
            void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM),
            n.gm.NREUM
          )
        }
        function s() {
          let e = a()
          return (
            e.o ||
              (e.o = {
                ST: n.gm.setTimeout,
                SI: n.gm.setImmediate,
                CT: n.gm.clearTimeout,
                XHR: n.gm.XMLHttpRequest,
                REQ: n.gm.Request,
                EV: n.gm.Event,
                PR: n.gm.Promise,
                MO: n.gm.MutationObserver,
                FETCH: n.gm.fetch
              }),
            e
          )
        }
        function c(e, t) {
          let r = a()
          ;(r.initializedAgents ??= {}),
            (t.initializedAt = { ms: (0, i.t)(), date: new Date() }),
            (r.initializedAgents[e] = t)
        }
        function u(e) {
          let t = a()
          return t.initializedAgents?.[e]
        }
        function d(e, t) {
          a()[e] = t
        }
        function l() {
          return (
            (function () {
              let e = a()
              const t = e.info || {}
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t }
            })(),
            (function () {
              let e = a()
              const t = e.init || {}
              e.init = { ...t }
            })(),
            s(),
            (function () {
              let e = a()
              const t = e.loader_config || {}
              e.loader_config = { ...t }
            })(),
            a()
          )
        }
      },
      2843: (e, t, r) => {
        "use strict"
        r.d(t, { u: () => i })
        var n = r(3878)
        function i(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0
          ;(0, n.DD)(
            "visibilitychange",
            function () {
              if (t) return void ("hidden" === document.visibilityState && e())
              e(document.visibilityState)
            },
            r,
            i
          )
        }
      },
      8941: (e, t, r) => {
        "use strict"
        r.d(t, {
          um: () => f,
          NZ: () => R,
          vC: () => T,
          Ri: () => O,
          Ak: () => _,
          o8: () => C,
          MO: () => U,
          bX: () => V
        })
        var n = r(7836),
          i = r(3434),
          o = r(8990),
          a = r(6154)
        const s = {},
          c = a.gm.XMLHttpRequest,
          u = "addEventListener",
          d = "removeEventListener",
          l = "nr@wrapped:".concat(n.P)
        function f(e) {
          var t = (function (e) {
            return (e || n.ee).get("events")
          })(e)
          if (s[t.debugId]++) return t
          s[t.debugId] = 1
          var r = (0, i.YM)(t, !0)
          function f(e) {
            r.inPlace(e, [u, d], "-", g)
          }
          function g(e, t) {
            return e[1]
          }
          return (
            "getPrototypeOf" in Object &&
              (a.RI && h(document, f), h(a.gm, f), h(c.prototype, f)),
            t.on(u + "-start", function (e, t) {
              var n = e[1]
              if (
                null !== n &&
                ("function" == typeof n || "object" == typeof n)
              ) {
                var i = (0, o.I)(n, l, function () {
                  var e = {
                    object: function () {
                      if ("function" != typeof n.handleEvent) return
                      return n.handleEvent.apply(n, arguments)
                    },
                    function: n
                  }[typeof n]
                  return e ? r(e, "fn-", null, e.name || "anonymous") : n
                })
                this.wrapped = e[1] = i
              }
            }),
            t.on(d + "-start", function (e) {
              e[1] = this.wrapped || e[1]
            }),
            t
          )
        }
        function h(e, t) {
          let r = e
          for (
            ;
            "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, u);

          )
            r = Object.getPrototypeOf(r)
          for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            i[o - 2] = arguments[o]
          r && t(r, ...i)
        }
        var g = "fetch-",
          p = g + "body-",
          m = ["arrayBuffer", "blob", "json", "text", "formData"],
          v = a.gm.Request,
          b = a.gm.Response,
          y = "prototype"
        const w = {}
        function R(e) {
          const t = (function (e) {
            return (e || n.ee).get("fetch")
          })(e)
          if (!(v && b && a.gm.fetch)) return t
          if (w[t.debugId]++) return t
          function r(e, r, i) {
            var o = e[r]
            "function" == typeof o &&
              (e[r] = function () {
                var e,
                  r = [...arguments],
                  a = {}
                t.emit(i + "before-start", [r], a),
                  a[n.P] && a[n.P].dt && (e = a[n.P].dt)
                var s = o.apply(this, r)
                return (
                  t.emit(i + "start", [r, e], s),
                  s.then(
                    function (e) {
                      return t.emit(i + "end", [null, e], s), e
                    },
                    function (e) {
                      throw (t.emit(i + "end", [e], s), e)
                    }
                  )
                )
              })
          }
          return (
            (w[t.debugId] = 1),
            m.forEach((e) => {
              r(v[y], e, p), r(b[y], e, p)
            }),
            r(a.gm, "fetch", g),
            t.on(g + "end", function (e, r) {
              var n = this
              if (r) {
                var i = r.headers.get("content-length")
                null !== i && (n.rxSize = i), t.emit(g + "done", [null, r], n)
              } else t.emit(g + "done", [e], n)
            }),
            t
          )
        }
        const x = {},
          A = ["pushState", "replaceState"]
        function T(e) {
          const t = (function (e) {
            return (e || n.ee).get("history")
          })(e)
          return (
            !a.RI ||
              x[t.debugId]++ ||
              ((x[t.debugId] = 1),
              (0, i.YM)(t).inPlace(window.history, A, "-")),
            t
          )
        }
        var E = r(3878)
        const N = {},
          S = ["appendChild", "insertBefore", "replaceChild"]
        function O(e) {
          const t = (function (e) {
            return (e || n.ee).get("jsonp")
          })(e)
          if (!a.RI || N[t.debugId]) return t
          N[t.debugId] = !0
          var r = (0, i.YM)(t),
            o = /[?&](?:callback|cb)=([^&#]+)/,
            s = /(.*)\.([^.]+)/,
            c = /^(\w+)(\.|$)(.*)$/
          function u(e, t) {
            if (!e) return t
            const r = e.match(c),
              n = r[1]
            return u(r[3], t[n])
          }
          return (
            r.inPlace(Node.prototype, S, "dom-"),
            t.on("dom-start", function (e) {
              !(function (e) {
                if (
                  !e ||
                  "string" != typeof e.nodeName ||
                  "script" !== e.nodeName.toLowerCase()
                )
                  return
                if ("function" != typeof e.addEventListener) return
                var n = ((i = e.src), (a = i.match(o)), a ? a[1] : null)
                var i, a
                if (!n) return
                var c = (function (e) {
                  var t = e.match(s)
                  if (t && t.length >= 3)
                    return { key: t[2], parent: u(t[1], window) }
                  return { key: e, parent: window }
                })(n)
                if ("function" != typeof c.parent[c.key]) return
                var d = {}
                function l() {
                  t.emit("jsonp-end", [], d),
                    e.removeEventListener("load", l, (0, E.jT)(!1)),
                    e.removeEventListener("error", f, (0, E.jT)(!1))
                }
                function f() {
                  t.emit("jsonp-error", [], d),
                    t.emit("jsonp-end", [], d),
                    e.removeEventListener("load", l, (0, E.jT)(!1)),
                    e.removeEventListener("error", f, (0, E.jT)(!1))
                }
                r.inPlace(c.parent, [c.key], "cb-", d),
                  e.addEventListener("load", l, (0, E.jT)(!1)),
                  e.addEventListener("error", f, (0, E.jT)(!1)),
                  t.emit("new-jsonp", [e.src], d)
              })(e[0])
            }),
            t
          )
        }
        const I = {}
        function _(e) {
          const t = (function (e) {
            return (e || n.ee).get("mutation")
          })(e)
          if (!a.RI || I[t.debugId]) return t
          I[t.debugId] = !0
          var r = (0, i.YM)(t),
            o = a.gm.MutationObserver
          return (
            o &&
              ((window.MutationObserver = function (e) {
                return this instanceof o
                  ? new o(r(e, "fn-"))
                  : o.apply(this, arguments)
              }),
              (MutationObserver.prototype = o.prototype)),
            t
          )
        }
        const j = {}
        function C(e) {
          const t = (function (e) {
            return (e || n.ee).get("promise")
          })(e)
          if (j[t.debugId]) return t
          j[t.debugId] = !0
          var r = t.context,
            o = (0, i.YM)(t),
            s = a.gm.Promise
          return (
            s &&
              (function () {
                function e(r) {
                  var n = t.context(),
                    i = o(r, "executor-", n, null, !1)
                  const a = Reflect.construct(s, [i], e)
                  return (
                    (t.context(a).getCtx = function () {
                      return n
                    }),
                    a
                  )
                }
                ;(a.gm.Promise = e),
                  Object.defineProperty(e, "name", { value: "Promise" }),
                  (e.toString = function () {
                    return s.toString()
                  }),
                  Object.setPrototypeOf(e, s),
                  ["all", "race"].forEach(function (r) {
                    const n = s[r]
                    e[r] = function (e) {
                      let i = !1
                      ;[...(e || [])].forEach((e) => {
                        this.resolve(e).then(a("all" === r), a(!1))
                      })
                      const o = n.apply(this, arguments)
                      return o
                      function a(e) {
                        return function () {
                          t.emit("propagate", [null, !i], o, !1, !1),
                            (i = i || !e)
                        }
                      }
                    }
                  }),
                  ["resolve", "reject"].forEach(function (r) {
                    const n = s[r]
                    e[r] = function (e) {
                      const r = n.apply(this, arguments)
                      return (
                        e !== r && t.emit("propagate", [e, !0], r, !1, !1), r
                      )
                    }
                  }),
                  (e.prototype = s.prototype)
                const n = s.prototype.then
                ;(s.prototype.then = function () {
                  var e = this,
                    i = r(e)
                  i.promise = e
                  for (
                    var a = arguments.length, s = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    s[c] = arguments[c]
                  ;(s[0] = o(s[0], "cb-", i, null, !1)),
                    (s[1] = o(s[1], "cb-", i, null, !1))
                  const u = n.apply(this, s)
                  return (
                    (i.nextPromise = u),
                    t.emit("propagate", [e, !0], u, !1, !1),
                    u
                  )
                }),
                  (s.prototype.then[i.Jt] = n),
                  t.on("executor-start", function (e) {
                    ;(e[0] = o(e[0], "resolve-", this, null, !1)),
                      (e[1] = o(e[1], "resolve-", this, null, !1))
                  }),
                  t.on("executor-err", function (e, t, r) {
                    e[1](r)
                  }),
                  t.on("cb-end", function (e, r, n) {
                    t.emit("propagate", [n, !0], this.nextPromise, !1, !1)
                  }),
                  t.on("propagate", function (e, r, n) {
                    ;(this.getCtx && !r) ||
                      (this.getCtx = function () {
                        if (e instanceof Promise) var r = t.context(e)
                        return r && r.getCtx ? r.getCtx() : this
                      })
                  })
              })(),
            t
          )
        }
        const P = {},
          k = "setTimeout",
          L = "setInterval",
          D = "clearTimeout",
          H = "-start",
          M = "-",
          K = [k, "setImmediate", L, D, "clearImmediate"]
        function U(e) {
          const t = (function (e) {
            return (e || n.ee).get("timer")
          })(e)
          if (P[t.debugId]++) return t
          P[t.debugId] = 1
          var r = (0, i.YM)(t)
          return (
            r.inPlace(a.gm, K.slice(0, 2), k + M),
            r.inPlace(a.gm, K.slice(2, 3), L + M),
            r.inPlace(a.gm, K.slice(3), D + M),
            t.on(L + H, function (e, t, n) {
              e[0] = r(e[0], "fn-", null, n)
            }),
            t.on(k + H, function (e, t, n) {
              ;(this.method = n),
                (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]),
                (e[0] = r(e[0], "fn-", this, n))
            }),
            t
          )
        }
        var F = r(944)
        const B = {},
          G = ["open", "send"]
        function V(e) {
          var t = e || n.ee
          const r = (function (e) {
            return (e || n.ee).get("xhr")
          })(t)
          if (B[r.debugId]++) return r
          ;(B[r.debugId] = 1), f(t)
          var o = (0, i.YM)(r),
            s = a.gm.XMLHttpRequest,
            c = a.gm.MutationObserver,
            u = a.gm.Promise,
            d = a.gm.setInterval,
            l = "readystatechange",
            h = [
              "onload",
              "onerror",
              "onabort",
              "onloadstart",
              "onloadend",
              "onprogress",
              "ontimeout"
            ],
            g = [],
            p = (a.gm.XMLHttpRequest = function (e) {
              const t = new s(e),
                n = r.context(t)
              try {
                r.emit("new-xhr", [t], n),
                  t.addEventListener(
                    l,
                    ((i = n),
                    function () {
                      var e = this
                      e.readyState > 3 &&
                        !i.resolved &&
                        ((i.resolved = !0), r.emit("xhr-resolved", [], e)),
                        o.inPlace(e, h, "fn-", R)
                    }),
                    (0, E.jT)(!1)
                  )
              } catch (e) {
                ;(0, F.R)("An error occurred while intercepting XHR", e)
                try {
                  r.emit("internal-error", [e])
                } catch (e) {}
              }
              var i
              return t
            })
          function m(e, t) {
            o.inPlace(t, ["onreadystatechange"], "fn-", R)
          }
          if (
            ((function (e, t) {
              for (var r in e) t[r] = e[r]
            })(s, p),
            (p.prototype = s.prototype),
            o.inPlace(p.prototype, G, "-xhr-", R),
            r.on("send-xhr-start", function (e, t) {
              m(e, t),
                (function (e) {
                  g.push(e),
                    c && (v ? v.then(w) : d ? d(w) : ((b = -b), (y.data = b)))
                })(t)
            }),
            r.on("open-xhr-start", m),
            c)
          ) {
            var v = u && u.resolve()
            if (!d && !u) {
              var b = 1,
                y = document.createTextNode(b)
              new c(w).observe(y, { characterData: !0 })
            }
          } else
            t.on("fn-end", function (e) {
              ;(e[0] && e[0].type === l) || w()
            })
          function w() {
            for (var e = 0; e < g.length; e++) m(0, g[e])
            g.length && (g = [])
          }
          function R(e, t) {
            return t
          }
          return r
        }
      },
      3434: (e, t, r) => {
        "use strict"
        r.d(t, { Jt: () => o, YM: () => c })
        var n = r(7836),
          i = r(5607)
        const o = "nr@original:".concat(i.W)
        var a = Object.prototype.hasOwnProperty,
          s = !1
        function c(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, i, o) {
              n || (n = "")
              const a = "-" === n.charAt(0)
              for (let s = 0; s < t.length; s++) {
                const c = t[s],
                  u = e[c]
                d(u) || (e[c] = r(u, a ? c + n : n, i, c, o))
              }
            }),
            (r.flag = o),
            r
          )
          function r(t, r, n, s, c) {
            return d(t)
              ? t
              : (r || (r = ""),
                (nrWrapper[o] = t),
                (function (e, t, r) {
                  if (Object.defineProperty && Object.keys)
                    try {
                      return (
                        Object.keys(e).forEach(function (r) {
                          Object.defineProperty(t, r, {
                            get: function () {
                              return e[r]
                            },
                            set: function (t) {
                              return (e[r] = t), t
                            }
                          })
                        }),
                        t
                      )
                    } catch (e) {
                      u([e], r)
                    }
                  for (var n in e) a.call(e, n) && (t[n] = e[n])
                })(t, nrWrapper, e),
                nrWrapper)
            function nrWrapper() {
              var o, a, d, l
              try {
                ;(a = this),
                  (o = [...arguments]),
                  (d = "function" == typeof n ? n(o, a) : n || {})
              } catch (t) {
                u([t, "", [o, a, s], d], e)
              }
              i(r + "start", [o, a, s], d, c)
              try {
                return (l = t.apply(a, o))
              } catch (e) {
                throw (i(r + "err", [o, a, e], d, c), e)
              } finally {
                i(r + "end", [o, a, l], d, c)
              }
            }
          }
          function i(r, n, i, o) {
            if (!s || t) {
              var a = s
              s = !0
              try {
                e.emit(r, n, i, t, o)
              } catch (t) {
                u([t, r, n, i], e)
              }
              s = a
            }
          }
        }
        function u(e, t) {
          t || (t = n.ee)
          try {
            t.emit("internal-error", e)
          } catch (e) {}
        }
        function d(e) {
          return !(e && "function" == typeof e && e.apply && !e[o])
        }
      },
      9300: (e, t, r) => {
        "use strict"
        r.d(t, { T: () => n })
        const n = r(860).K.ajax
      },
      6774: (e, t, r) => {
        "use strict"
        r.d(t, { T: () => n })
        const n = r(860).K.jserrors
      },
      993: (e, t, r) => {
        "use strict"
        r.d(t, {
          ET: () => o,
          It: () => s,
          TZ: () => a,
          YY: () => u,
          bu: () => c,
          p_: () => i,
          zk: () => d
        })
        var n = r(860)
        const i = {
            ERROR: "ERROR",
            WARN: "WARN",
            INFO: "INFO",
            DEBUG: "DEBUG",
            TRACE: "TRACE"
          },
          o = "log",
          a = n.K.logging,
          s = 1e6,
          c = "failed to wrap logger: ",
          u = "invalid log level: ",
          d = "ignored log: "
      },
      3785: (e, t, r) => {
        "use strict"
        r.d(t, { R: () => d, b: () => l })
        var n = r(9908),
          i = r(1863),
          o = r(944),
          a = r(3304),
          s = r(860),
          c = r(3969),
          u = r(993)
        function d(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            d =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : u.p_.INFO
          try {
            if ("string" != typeof t) {
              const e = (0, a.A)(t)
              t = e && "{}" !== e ? e : String(t)
            }
          } catch (e) {
            return void (0, o.R)("could not cast log message to string", t)
          }
          ;(0, n.p)(
            c.xV,
            ["API/logging/".concat(d.toLowerCase(), "/called")],
            void 0,
            s.K.metrics,
            e
          ),
            (0, n.p)(u.ET, [(0, i.t)(), t, r, d], void 0, s.K.logging, e)
        }
        function l(e) {
          return (
            "string" == typeof e &&
            Object.values(u.p_).some((t) => t.toUpperCase() === e.toUpperCase())
          )
        }
      },
      3969: (e, t, r) => {
        "use strict"
        r.d(t, {
          TZ: () => n,
          XG: () => s,
          rs: () => i,
          xV: () => a,
          z_: () => o
        })
        const n = r(860).K.metrics,
          i = "sm",
          o = "cm",
          a = "storeSupportabilityMetrics",
          s = "storeEventMetrics"
      },
      8166: (e, t, r) => {
        "use strict"
        r.d(t, { T: () => n })
        const n = r(860).K.pageAction
      },
      6630: (e, t, r) => {
        "use strict"
        r.d(t, { T: () => n })
        const n = r(860).K.pageViewEvent
      },
      782: (e, t, r) => {
        "use strict"
        r.d(t, { T: () => n })
        const n = r(860).K.pageViewTiming
      },
      6344: (e, t, r) => {
        "use strict"
        r.d(t, {
          BB: () => f,
          G4: () => o,
          It: () => c,
          No: () => u,
          Qb: () => h,
          TZ: () => i,
          Ug: () => a,
          _s: () => s,
          bc: () => l,
          yP: () => d
        })
        var n = r(2614)
        const i = r(860).K.sessionReplay,
          o = {
            RECORD: "recordReplay",
            PAUSE: "pauseReplay",
            REPLAY_RUNNING: "replayRunning",
            ERROR_DURING_REPLAY: "errorDuringReplay"
          },
          a = 0.12,
          s = {
            DomContentLoaded: 0,
            Load: 1,
            FullSnapshot: 2,
            IncrementalSnapshot: 3,
            Meta: 4,
            Custom: 5
          },
          c = 1e6,
          u = 64e3,
          d = { [n.g.ERROR]: 15e3, [n.g.FULL]: 3e5, [n.g.OFF]: 0 },
          l = {
            RESET: { message: "Session was reset", sm: "Reset" },
            IMPORT: { message: "Recorder failed to import", sm: "Import" },
            TOO_MANY: { message: "429: Too Many Requests", sm: "Too-Many" },
            TOO_BIG: { message: "Payload was too large", sm: "Too-Big" },
            CROSS_TAB: {
              message: "Session Entity was set to OFF on another tab",
              sm: "Cross-Tab"
            },
            ENTITLEMENTS: {
              message: "Session Replay is not allowed and will not be started",
              sm: "Entitlement"
            }
          },
          f = 5e3,
          h = { API: "api" }
      },
      5270: (e, t, r) => {
        "use strict"
        r.d(t, { Aw: () => s, CT: () => u, K4: () => c, SR: () => a })
        var n = r(2983),
          i = r(7767),
          o = r(6154)
        function a(e) {
          return (
            !!n.hR.MO &&
            (0, i.V)(e) &&
            !0 === (0, n.gD)(e, "session_trace.enabled")
          )
        }
        function s(e) {
          return !0 === (0, n.gD)(e, "session_replay.preload") && a(e)
        }
        function c(e, t) {
          return !!a(e) && (!!t?.isNew || !!t?.state.sessionReplayMode)
        }
        function u(e, t) {
          const r = t.correctAbsoluteTimestamp(e)
          return {
            originalTimestamp: e,
            correctedTimestamp: r,
            timestampDiff: e - r,
            originTime: o.WN,
            correctedOriginTime: t.correctedOriginTime,
            originTimeDiff: Math.floor(o.WN - t.correctedOriginTime)
          }
        }
      },
      3738: (e, t, r) => {
        "use strict"
        r.d(t, {
          He: () => i,
          Kp: () => s,
          Lc: () => u,
          Rz: () => d,
          TZ: () => n,
          bD: () => o,
          d3: () => a,
          jx: () => l,
          uP: () => c
        })
        const n = r(860).K.sessionTrace,
          i = "bstResource",
          o = "resource",
          a = "-start",
          s = "-end",
          c = "fn" + a,
          u = "fn" + s,
          d = "pushState",
          l = 1e3
      },
      3962: (e, t, r) => {
        "use strict"
        r.d(t, {
          AM: () => o,
          O2: () => s,
          Qu: () => c,
          TZ: () => a,
          ih: () => u,
          tC: () => i
        })
        var n = r(860)
        const i = ["click", "keydown", "submit"],
          o = "api",
          a = n.K.softNav,
          s = { INITIAL_PAGE_LOAD: "", ROUTE_CHANGE: 1, UNSPECIFIED: 2 },
          c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 },
          u = { IP: "in progress", FIN: "finished", CAN: "cancelled" }
      },
      7378: (e, t, r) => {
        "use strict"
        r.d(t, {
          $p: () => x,
          BR: () => b,
          Kp: () => R,
          L3: () => y,
          Lc: () => c,
          NC: () => o,
          SG: () => d,
          TZ: () => i,
          U6: () => g,
          UT: () => m,
          d3: () => w,
          dT: () => f,
          e5: () => T,
          gx: () => v,
          l9: () => l,
          oW: () => h,
          op: () => p,
          rw: () => u,
          tH: () => E,
          uP: () => s,
          wW: () => A,
          xq: () => a
        })
        var n = r(2983)
        const i = r(860).K.spa,
          o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
          a = 999,
          s = "fn-start",
          c = "fn-end",
          u = "cb-start",
          d = "api-ixn-",
          l = "remaining",
          f = "interaction",
          h = "spaNode",
          g = "jsonpNode",
          p = "fetch-start",
          m = "fetch-done",
          v = "fetch-body-",
          b = "jsonp-end",
          y = n.hR.ST,
          w = "-start",
          R = "-end",
          x = "-body",
          A = "cb" + R,
          T = "jsTime",
          E = "fetch"
      },
      4234: (e, t, r) => {
        "use strict"
        r.d(t, { W: () => i })
        var n = r(7836)
        class i {
          constructor(e, t, r) {
            ;(this.agentIdentifier = e),
              (this.aggregator = t),
              (this.ee = n.ee.get(e)),
              (this.featureName = r),
              (this.blocked = !1)
          }
        }
      },
      7767: (e, t, r) => {
        "use strict"
        r.d(t, { V: () => o })
        var n = r(2983),
          i = r(6154)
        const o = (e) => i.RI && !0 === (0, n.gD)(e, "privacy.cookies_enabled")
      },
      425: (e, t, r) => {
        "use strict"
        r.d(t, { j: () => O })
        var n = r(860),
          i = r(2983),
          o = r(9908),
          a = r(7836),
          s = r(1687),
          c = r(5289),
          u = r(6154),
          d = r(944),
          l = r(3969),
          f = r(384),
          h = r(6344)
        const g = [
            "setErrorHandler",
            "finished",
            "addToTrace",
            "addRelease",
            "addPageAction",
            "setCurrentRouteName",
            "setPageViewName",
            "setCustomAttribute",
            "interaction",
            "noticeError",
            "setUserId",
            "setApplicationVersion",
            "start",
            h.G4.RECORD,
            h.G4.PAUSE,
            "log",
            "wrapLogger"
          ],
          p = ["setErrorHandler", "finished", "addToTrace", "addRelease"]
        var m = r(1863),
          v = r(2614),
          b = r(993),
          y = r(3785),
          w = r(2646),
          R = r(3434)
        function x(e, t, r, n) {
          const i = (function (e) {
              return (e || a.ee).get("logger")
            })(e),
            o = (0, R.YM)(i),
            s = new w.y(a.P)
          return (
            (s.level = n.level),
            (s.customAttributes = n.customAttributes),
            o.inPlace(t, [r], "wrap-logger-", s),
            i
          )
        }
        function A() {
          const e = (0, f.pV)()
          g.forEach((t) => {
            e[t] = function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i]
              return (function (t) {
                for (
                  var r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i]
                let o = []
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e.exposed && e.api[t] && o.push(e.api[t](...n))
                  }),
                  o.length > 1 ? o : o[0]
                )
              })(t, ...n)
            }
          })
        }
        const T = {}
        var E = r(5284)
        const N = (e) => {
          const t = e.startsWith("http")
          ;(e += "/"), (r.p = t ? e : "https://" + e)
        }
        let S = !1
        function O(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            g = arguments.length > 2 ? arguments[2] : void 0,
            w = arguments.length > 3 ? arguments[3] : void 0,
            {
              init: R,
              info: O,
              loader_config: I,
              runtime: _ = { loaderType: g },
              exposed: j = !0
            } = t
          const C = (0, f.pV)()
          O || ((R = C.init), (O = C.info), (I = C.loader_config)),
            (0, i.xN)(e.agentIdentifier, R || {}),
            (0, i.aN)(e.agentIdentifier, I || {}),
            (O.jsAttributes ??= {}),
            u.bv && (O.jsAttributes.isWorker = !0),
            (0, i.x1)(e.agentIdentifier, O)
          const P = (0, i.D0)(e.agentIdentifier),
            k = [O.beacon, O.errorBeacon]
          S ||
            (P.proxy.assets && (N(P.proxy.assets), k.push(P.proxy.assets)),
            P.proxy.beacon && k.push(P.proxy.beacon),
            A(),
            (0, f.US)("activatedFeatures", E.B),
            (e.runSoftNavOverSpa &&=
              !0 === P.soft_navigations.enabled &&
              P.feature_flags.includes("soft_nav"))),
            (_.denyList = [
              ...(P.ajax.deny_list || []),
              ...(P.ajax.block_internal ? k : [])
            ]),
            (_.ptid = e.agentIdentifier),
            (0, i.V)(e.agentIdentifier, _),
            void 0 === e.api &&
              (e.api = (function (e, t) {
                let f =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2]
                t || (0, s.Ak)(e, "api")
                const g = {}
                var w = a.ee.get(e),
                  R = w.get("tracer")
                ;(T[e] = v.g.OFF),
                  w.on(h.G4.REPLAY_RUNNING, (t) => {
                    T[e] = t
                  })
                var A = "api-",
                  E = A + "ixn-"
                function N(t, r, n, o) {
                  const a = (0, i.Vp)(e)
                  return (
                    null === r
                      ? delete a.jsAttributes[t]
                      : (0, i.x1)(e, {
                          ...a,
                          jsAttributes: { ...a.jsAttributes, [t]: r }
                        }),
                    I(A, n, !0, o || null === r ? "session" : void 0)(t, r)
                  )
                }
                function S() {}
                ;(g.log = function (e) {
                  let { customAttributes: t = {}, level: r = b.p_.INFO } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  return (
                    (t && "object" == typeof t) || (t = {}),
                    "string" == typeof e && e
                      ? (0, y.b)(r)
                        ? e.length > b.It
                          ? (0, d.R)(
                              b.zk + "> " + b.It + " bytes: ",
                              e.slice(0, 25) + "..."
                            )
                          : void (0, y.R)(w, e, t, r.toUpperCase())
                        : (0, d.R)(b.YY + r, b.p_)
                      : (0, d.R)(b.zk + "invalid message")
                  )
                }),
                  (g.wrapLogger = function (e, t) {
                    let { customAttributes: r = {}, level: n = b.p_.INFO } =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    return (
                      (r && "object" == typeof r) || (r = {}),
                      "object" == typeof e &&
                      e &&
                      "string" == typeof t &&
                      t &&
                      "function" == typeof e[t] &&
                      "object" == typeof r
                        ? (0, y.b)(n)
                          ? void x(w, e, t, {
                              customAttributes: r,
                              level: n.toUpperCase()
                            })
                          : (0, d.R)(b.bu + b.YY + n, b.p_)
                        : (0, d.R)(b.bu + "invalid argument(s)")
                    )
                  }),
                  p.forEach((e) => {
                    g[e] = I(A, e, !0, "api")
                  }),
                  (g.addPageAction = I(A, "addPageAction", !0, n.K.pageAction)),
                  (g.setPageViewName = function (t, r) {
                    if ("string" == typeof t)
                      return (
                        "/" !== t.charAt(0) && (t = "/" + t),
                        ((0, i.fr)(e).customTransaction =
                          (r || "http://custom.transaction") + t),
                        I(A, "setPageViewName", !0)()
                      )
                  }),
                  (g.setCustomAttribute = function (e, t) {
                    let r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2]
                    if ("string" == typeof e) {
                      if (
                        ["string", "number", "boolean"].includes(typeof t) ||
                        null === t
                      )
                        return N(e, t, "setCustomAttribute", r)
                      ;(0, d.R)(
                        "Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(
                          typeof t,
                          "> was provided."
                        )
                      )
                    } else
                      (0, d.R)(
                        "Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(
                          typeof e,
                          "> was provided."
                        )
                      )
                  }),
                  (g.setUserId = function (e) {
                    if ("string" == typeof e || null === e)
                      return N("enduser.id", e, "setUserId", !0)
                    ;(0, d.R)(
                      "Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(
                        typeof e,
                        "> was provided."
                      )
                    )
                  }),
                  (g.setApplicationVersion = function (e) {
                    if ("string" == typeof e || null === e)
                      return N(
                        "application.version",
                        e,
                        "setApplicationVersion",
                        !1
                      )
                    ;(0, d.R)(
                      "Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(
                        typeof e,
                        ">."
                      )
                    )
                  }),
                  (g.start = () => {
                    try {
                      ;(0, o.p)(
                        l.xV,
                        ["API/start/called"],
                        void 0,
                        n.K.metrics,
                        w
                      ),
                        w.emit("manual-start-all")
                    } catch (e) {
                      ;(0, d.R)("An unexpected issue occurred", e)
                    }
                  }),
                  (g[h.G4.RECORD] = function () {
                    ;(0, o.p)(
                      l.xV,
                      ["API/recordReplay/called"],
                      void 0,
                      n.K.metrics,
                      w
                    ),
                      (0, o.p)(h.G4.RECORD, [], void 0, n.K.sessionReplay, w)
                  }),
                  (g[h.G4.PAUSE] = function () {
                    ;(0, o.p)(
                      l.xV,
                      ["API/pauseReplay/called"],
                      void 0,
                      n.K.metrics,
                      w
                    ),
                      (0, o.p)(h.G4.PAUSE, [], void 0, n.K.sessionReplay, w)
                  }),
                  (g.interaction = function (e) {
                    return new S().get("object" == typeof e ? e : {})
                  })
                const O = (S.prototype = {
                  createTracer: function (e, t) {
                    var r = {},
                      i = this,
                      a = "function" == typeof t
                    return (
                      (0, o.p)(
                        l.xV,
                        ["API/createTracer/called"],
                        void 0,
                        n.K.metrics,
                        w
                      ),
                      f ||
                        (0, o.p)(
                          E + "tracer",
                          [(0, m.t)(), e, r],
                          i,
                          n.K.spa,
                          w
                        ),
                      function () {
                        if (
                          (R.emit(
                            (a ? "" : "no-") + "fn-start",
                            [(0, m.t)(), i, a],
                            r
                          ),
                          a)
                        )
                          try {
                            return t.apply(this, arguments)
                          } catch (e) {
                            const t = "string" == typeof e ? new Error(e) : e
                            throw (R.emit("fn-err", [arguments, this, t], r), t)
                          } finally {
                            R.emit("fn-end", [(0, m.t)()], r)
                          }
                      }
                    )
                  }
                })
                function I(e, t, r, i) {
                  return function () {
                    return (
                      (0, o.p)(
                        l.xV,
                        ["API/" + t + "/called"],
                        void 0,
                        n.K.metrics,
                        w
                      ),
                      i &&
                        (0, o.p)(
                          e + t,
                          [(0, m.t)(), ...arguments],
                          r ? null : this,
                          i,
                          w
                        ),
                      r ? void 0 : this
                    )
                  }
                }
                function _() {
                  r.e(478)
                    .then(r.bind(r, 8778))
                    .then((t) => {
                      let { setAPI: r } = t
                      r(e), (0, s.Ze)(e, "api")
                    })
                    .catch((e) => {
                      ;(0, d.R)("Downloading runtime APIs failed...", e),
                        w.abort()
                    })
                }
                return (
                  [
                    "actionText",
                    "setName",
                    "setAttribute",
                    "save",
                    "ignore",
                    "onEnd",
                    "getContext",
                    "end",
                    "get"
                  ].forEach((e) => {
                    O[e] = I(E, e, void 0, f ? n.K.softNav : n.K.spa)
                  }),
                  (g.setCurrentRouteName = f
                    ? I(E, "routeName", void 0, n.K.softNav)
                    : I(A, "routeName", !0, n.K.spa)),
                  (g.noticeError = function (t, r) {
                    "string" == typeof t && (t = new Error(t)),
                      (0, o.p)(
                        l.xV,
                        ["API/noticeError/called"],
                        void 0,
                        n.K.metrics,
                        w
                      ),
                      (0, o.p)(
                        "err",
                        [t, (0, m.t)(), !1, r, !!T[e]],
                        void 0,
                        n.K.jserrors,
                        w
                      )
                  }),
                  u.RI ? (0, c.GG)(() => _(), !0) : _(),
                  g
                )
              })(e.agentIdentifier, w, e.runSoftNavOverSpa)),
            void 0 === e.exposed && (e.exposed = j),
            (S = !0)
        }
      },
      8374: (e, t, r) => {
        r.nc = (() => {
          try {
            return document?.currentScript?.nonce
          } catch (e) {}
          return ""
        })()
      },
      860: (e, t, r) => {
        "use strict"
        r.d(t, { K: () => n, P: () => i })
        const n = {
            ajax: "ajax",
            jserrors: "jserrors",
            logging: "logging",
            metrics: "metrics",
            pageAction: "page_action",
            pageViewEvent: "page_view_event",
            pageViewTiming: "page_view_timing",
            sessionReplay: "session_replay",
            sessionTrace: "session_trace",
            softNav: "soft_navigations",
            spa: "spa"
          },
          i = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.spa]: 5,
            [n.ajax]: 6,
            [n.sessionTrace]: 7,
            [n.pageAction]: 8,
            [n.softNav]: 9,
            [n.sessionReplay]: 10,
            [n.logging]: 11
          }
      }
    },
    n = {}
  function i(e) {
    var t = n[e]
    if (void 0 !== t) return t.exports
    var o = (n[e] = { exports: {} })
    return r[e](o, o.exports, i), o.exports
  }
  ;(i.m = r),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      ({ 212: "nr-spa-compressor", 249: "nr-spa-recorder", 478: "nr-spa" })[e] +
      "-1.261.1.min.js"),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "NRBA-1.261.1.PROD:"),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n)
      else {
        var s, c
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var l = u[d]
            if (
              l.getAttribute("src") == r ||
              l.getAttribute("data-webpack") == t + o
            ) {
              s = l
              break
            }
          }
        if (!s) {
          c = !0
          var f = {
            478: "sha512-ZbWStv7fkkK7+yqsn6eqoJlW+CghM7PjpfFcByMPYTJNLGVARAKXxpvMO9e+qfP03BE0awcG0qpVyS4eHLiDAA==",
            249: "sha512-K6eKbQfHoHK8eJ87nEMTz0eRYryCQpILJVfa9zwG9mwzZcVq+S9l8jGY67o+9iobuZvlIfyfhnkxONwFHdop0w==",
            212: "sha512-sDN2MQL8shzPkVcH8febZBLdnIXFgQQEF6gXsFvid8MHLAv3BJKAhS5NSTP6xinVWTTk+SXb+DC7o2z4WGANsQ=="
          }
          ;((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            i.nc && s.setAttribute("nonce", i.nc),
            s.setAttribute("data-webpack", t + o),
            (s.src = r),
            0 !== s.src.indexOf(window.location.origin + "/") &&
              (s.crossOrigin = "anonymous"),
            f[a] && (s.integrity = f[a])
        }
        e[r] = [n]
        var h = (t, n) => {
            ;(s.onerror = s.onload = null), clearTimeout(g)
            var i = e[r]
            if (
              (delete e[r],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n)
          },
          g = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          )
        ;(s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s)
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (i.p = "https://js-agent.newrelic.com/"),
    (() => {
      var e = { 38: 0, 788: 0 }
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0
        if (0 !== n)
          if (n) r.push(n[2])
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]))
            r.push((n[2] = o))
            var a = i.p + i.u(t),
              s = new Error()
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src
                  ;(s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    n[1](s)
                }
              },
              "chunk-" + t,
              t
            )
          }
      }
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            u = 0
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n])
            if (c) c(i)
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
        },
        r = (self["webpackChunk:NRBA-1.261.1.PROD"] =
          self["webpackChunk:NRBA-1.261.1.PROD"] || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })(),
    (() => {
      "use strict"
      i(8374)
      var e = i(944),
        t = i(6344),
        r = i(9566),
        n = i(7836)
      class o {
        agentIdentifier
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, r.LA)(16)
          ;(this.agentIdentifier = e), (this.ee = n.ee.get(e))
        }
        #e(t) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i]
          if ("function" == typeof this.api?.[t]) return this.api[t](...n)
          ;(0, e.R)(
            "Call to agent api ".concat(
              t,
              " failed. The API is not currently initialized."
            )
          )
        }
        addPageAction(e, t) {
          return this.#e("addPageAction", e, t)
        }
        setPageViewName(e, t) {
          return this.#e("setPageViewName", e, t)
        }
        setCustomAttribute(e, t, r) {
          return this.#e("setCustomAttribute", e, t, r)
        }
        noticeError(e, t) {
          return this.#e("noticeError", e, t)
        }
        setUserId(e) {
          return this.#e("setUserId", e)
        }
        setApplicationVersion(e) {
          return this.#e("setApplicationVersion", e)
        }
        setErrorHandler(e) {
          return this.#e("setErrorHandler", e)
        }
        finished(e) {
          return this.#e("finished", e)
        }
        addRelease(e, t) {
          return this.#e("addRelease", e, t)
        }
        start(e) {
          return this.#e("start", e)
        }
        recordReplay() {
          return this.#e(t.G4.RECORD)
        }
        pauseReplay() {
          return this.#e(t.G4.PAUSE)
        }
        addToTrace(e) {
          return this.#e("addToTrace", e)
        }
        setCurrentRouteName(e) {
          return this.#e("setCurrentRouteName", e)
        }
        interaction() {
          return this.#e("interaction")
        }
        log(e, t) {
          return this.#e("logInfo", e, t)
        }
        wrapLogger(e, t, r) {
          return this.#e("wrapLogger", e, t, r)
        }
      }
      var a = i(860),
        s = i(2983)
      const c = Object.values(a.K)
      function u(e) {
        const t = {}
        return (
          c.forEach((r) => {
            t[r] = (function (e, t) {
              return !0 === (0, s.gD)(t, "".concat(e, ".enabled"))
            })(r, e)
          }),
          t
        )
      }
      var d = i(425)
      var l = i(1687),
        f = i(4234),
        h = i(5289),
        g = i(6154),
        p = i(5270),
        m = i(7767),
        v = i(6389)
      class b extends f.W {
        constructor(e, t, r) {
          let n =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          super(e, t, r),
            (this.auto = n),
            (this.abortHandler = void 0),
            (this.featAggregate = void 0),
            (this.onAggregateImported = void 0),
            !1 ===
              (0, s.gD)(
                this.agentIdentifier,
                "".concat(this.featureName, ".autoStart")
              ) && (this.auto = !1),
            this.auto
              ? (0, l.Ak)(e, r)
              : this.ee.on(
                  "manual-start-all",
                  (0, v.J)(() => {
                    ;(0, l.Ak)(this.agentIdentifier, this.featureName),
                      (this.auto = !0),
                      this.importAggregator()
                  })
                )
        }
        importAggregator() {
          let t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
          if (this.featAggregate || !this.auto) return
          this.onAggregateImported = new Promise((e) => {
            t = e
          })
          const n = async () => {
            let n
            try {
              if ((0, m.V)(this.agentIdentifier)) {
                const { setupAgentSession: e } = await i
                  .e(478)
                  .then(i.bind(i, 6526))
                n = e(this.agentIdentifier)
              }
            } catch (t) {
              ;(0, e.R)(
                "A problem occurred when starting up session manager. This page will not start or extend any session.",
                t
              ),
                this.ee.emit("internal-error", [t]),
                this.featureName === a.K.sessionReplay && this.abortHandler?.()
            }
            try {
              if (!this.#t(this.featureName, n))
                return (
                  (0, l.Ze)(this.agentIdentifier, this.featureName), void t(!1)
                )
              const { lazyFeatureLoader: e } = await i
                  .e(478)
                  .then(i.bind(i, 6103)),
                { Aggregate: o } = await e(this.featureName, "aggregate")
              ;(this.featAggregate = new o(
                this.agentIdentifier,
                this.aggregator,
                r
              )),
                t(!0)
            } catch (r) {
              ;(0, e.R)(
                "Downloading and initializing ".concat(
                  this.featureName,
                  " failed..."
                ),
                r
              ),
                this.abortHandler?.(),
                (0, l.Ze)(this.agentIdentifier, this.featureName, !0),
                t(!1),
                this.ee && this.ee.abort()
            }
          }
          g.RI ? (0, h.GG)(() => n(), !0) : n()
        }
        #t(e, t) {
          return e === a.K.sessionReplay
            ? (0, p.K4)(this.agentIdentifier, t)
            : !(e === a.K.sessionTrace && !t)
        }
      }
      var y = i(6630)
      class w extends b {
        static featureName = y.T
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, y.T, r), this.importAggregator()
        }
      }
      var R = i(4777),
        x = i(1478)
      class A extends R.J {
        constructor(e) {
          super(e), (this.aggregatedData = {})
        }
        store(e, t, r, n, i) {
          var o = this.getBucket(e, t, r, i)
          return (
            (o.metrics = (function (e, t) {
              t || (t = { count: 0 })
              return (
                (t.count += 1),
                (0, x.$)(e, function (e, r) {
                  t[e] = T(r, t[e])
                }),
                t
              )
            })(n, o.metrics)),
            o
          )
        }
        merge(e, t, r, n, i) {
          var o = this.getBucket(e, t, n, i)
          if (o.metrics) {
            var a = o.metrics
            ;(a.count += r.count),
              (0, x.$)(r, function (e, t) {
                if ("count" !== e) {
                  var n = a[e],
                    i = r[e]
                  i && !i.c
                    ? (a[e] = T(i.t, n))
                    : (a[e] = (function (e, t) {
                        if (!t) return e
                        t.c || (t = E(t.t))
                        return (
                          (t.min = Math.min(e.min, t.min)),
                          (t.max = Math.max(e.max, t.max)),
                          (t.t += e.t),
                          (t.sos += e.sos),
                          (t.c += e.c),
                          t
                        )
                      })(i, a[e]))
                }
              })
          } else o.metrics = r
        }
        storeMetric(e, t, r, n) {
          var i = this.getBucket(e, t, r)
          return (i.stats = T(n, i.stats)), i
        }
        getBucket(e, t, r, n) {
          this.aggregatedData[e] || (this.aggregatedData[e] = {})
          var i = this.aggregatedData[e][t]
          return (
            i ||
              ((i = this.aggregatedData[e][t] = { params: r || {} }),
              n && (i.custom = n)),
            i
          )
        }
        get(e, t) {
          return t
            ? this.aggregatedData[e] && this.aggregatedData[e][t]
            : this.aggregatedData[e]
        }
        take(e) {
          for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++)
            (t[(r = e[i])] = Object.values(this.aggregatedData[r] || {})),
              t[r].length && (n = !0),
              delete this.aggregatedData[r]
          return n ? t : null
        }
      }
      function T(e, t) {
        return null == e
          ? (function (e) {
              e ? e.c++ : (e = { c: 1 })
              return e
            })(t)
          : t
            ? (t.c || (t = E(t.t)),
              (t.c += 1),
              (t.t += e),
              (t.sos += e * e),
              e > t.max && (t.max = e),
              e < t.min && (t.min = e),
              t)
            : { t: e }
      }
      function E(e) {
        return { t: e, min: e, max: e, sos: e * e, c: 1 }
      }
      var N = i(384),
        S = i(3304)
      var O = i(9908),
        I = i(2843),
        _ = i(3878),
        j = i(782),
        C = i(1863)
      class P extends b {
        static featureName = j.T
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, j.T, r),
            g.RI &&
              ((0, I.u)(
                () => (0, O.p)("docHidden", [(0, C.t)()], void 0, j.T, this.ee),
                !0
              ),
              (0, _.sp)("pagehide", () =>
                (0, O.p)("winPagehide", [(0, C.t)()], void 0, j.T, this.ee)
              ),
              this.importAggregator())
        }
      }
      var k = i(3969)
      class L extends b {
        static featureName = k.TZ
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, k.TZ, r), this.importAggregator()
        }
      }
      var D = i(6774)
      class H {
        constructor(e, t, r, n, i) {
          ;(this.name = "UncaughtError"),
            (this.message = "string" == typeof e ? e : (0, S.A)(e)),
            (this.sourceURL = t),
            (this.line = r),
            (this.column = n),
            (this.__newrelic = i)
        }
      }
      function M(e) {
        return F(e)
          ? e
          : new H(
              void 0 !== e?.message ? e.message : e,
              e?.filename || e?.sourceURL,
              e?.lineno || e?.line,
              e?.colno || e?.col,
              e?.__newrelic
            )
      }
      function K(e) {
        let t = "Unhandled Promise Rejection"
        if (F(e?.reason))
          try {
            return (e.reason.message = t + ": " + e.reason.message), M(e.reason)
          } catch (t) {
            return M(e.reason)
          }
        if (void 0 === e.reason) return M(t)
        const r = M(e.reason)
        return (r.message = t + ": " + r?.message), r
      }
      function U(e) {
        if (
          e.error instanceof SyntaxError &&
          !/:\d+$/.test(e.error.stack?.trim())
        ) {
          const t = new H(
            e.message,
            e.filename,
            e.lineno,
            e.colno,
            e.error.__newrelic
          )
          return (t.name = SyntaxError.name), t
        }
        return F(e.error) ? e.error : M(e)
      }
      function F(e) {
        return e instanceof Error && !!e.stack
      }
      class B extends b {
        static featureName = D.T
        #r = !1
        constructor(e, r) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, r, D.T, n)
          try {
            this.removeOnAbort = new AbortController()
          } catch (e) {}
          this.ee.on("internal-error", (e) => {
            this.abortHandler &&
              (0, O.p)(
                "ierr",
                [M(e), (0, C.t)(), !0, {}, this.#r],
                void 0,
                this.featureName,
                this.ee
              )
          }),
            this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
              this.#r = e
            }),
            g.gm.addEventListener(
              "unhandledrejection",
              (e) => {
                this.abortHandler &&
                  (0, O.p)(
                    "err",
                    [
                      K(e),
                      (0, C.t)(),
                      !1,
                      { unhandledPromiseRejection: 1 },
                      this.#r
                    ],
                    void 0,
                    this.featureName,
                    this.ee
                  )
              },
              (0, _.jT)(!1, this.removeOnAbort?.signal)
            ),
            g.gm.addEventListener(
              "error",
              (e) => {
                this.abortHandler &&
                  (0, O.p)(
                    "err",
                    [U(e), (0, C.t)(), !1, {}, this.#r],
                    void 0,
                    this.featureName,
                    this.ee
                  )
              },
              (0, _.jT)(!1, this.removeOnAbort?.signal)
            ),
            (this.abortHandler = this.#n),
            this.importAggregator()
        }
        #n() {
          this.removeOnAbort?.abort(), (this.abortHandler = void 0)
        }
      }
      var G = i(8990)
      let V = 1
      const z = "nr@id"
      function W(e) {
        const t = typeof e
        return !e || ("object" !== t && "function" !== t)
          ? -1
          : e === g.gm
            ? 0
            : (0, G.I)(e, z, function () {
                return V++
              })
      }
      function q(e) {
        if ("string" == typeof e && e.length) return e.length
        if ("object" == typeof e) {
          if (
            "undefined" != typeof ArrayBuffer &&
            e instanceof ArrayBuffer &&
            e.byteLength
          )
            return e.byteLength
          if ("undefined" != typeof Blob && e instanceof Blob && e.size)
            return e.size
          if (!("undefined" != typeof FormData && e instanceof FormData))
            try {
              return (0, S.A)(e).length
            } catch (e) {
              return
            }
        }
      }
      var Y = i(8941),
        Z = i(7485)
      class X {
        constructor(e) {
          this.agentIdentifier = e
        }
        generateTracePayload(e) {
          if (!this.shouldGenerateTrace(e)) return null
          var t = (0, s.oC)(this.agentIdentifier)
          if (!t) return null
          var n = (t.accountID || "").toString() || null,
            i = (t.agentID || "").toString() || null,
            o = (t.trustKey || "").toString() || null
          if (!n || !i) return null
          var a = (0, r.ZF)(),
            c = (0, r.el)(),
            u = Date.now(),
            d = { spanId: a, traceId: c, timestamp: u }
          return (
            (e.sameOrigin ||
              (this.isAllowedOrigin(e) &&
                this.useTraceContextHeadersForCors())) &&
              ((d.traceContextParentHeader =
                this.generateTraceContextParentHeader(a, c)),
              (d.traceContextStateHeader = this.generateTraceContextStateHeader(
                a,
                u,
                n,
                i,
                o
              ))),
            ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
              (!e.sameOrigin &&
                this.isAllowedOrigin(e) &&
                this.useNewrelicHeaderForCors())) &&
              (d.newrelicHeader = this.generateTraceHeader(a, c, u, n, i, o)),
            d
          )
        }
        generateTraceContextParentHeader(e, t) {
          return "00-" + t + "-" + e + "-01"
        }
        generateTraceContextStateHeader(e, t, r, n, i) {
          return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t
        }
        generateTraceHeader(e, t, r, n, i, o) {
          if (!("function" == typeof g.gm?.btoa)) return null
          var a = {
            v: [0, 1],
            d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r }
          }
          return o && n !== o && (a.d.tk = o), btoa((0, S.A)(a))
        }
        shouldGenerateTrace(e) {
          return this.isDtEnabled() && this.isAllowedOrigin(e)
        }
        isAllowedOrigin(e) {
          var t = !1,
            r = {}
          if (
            ((0, s.gD)(this.agentIdentifier, "distributed_tracing") &&
              (r = (0, s.D0)(this.agentIdentifier).distributed_tracing),
            e.sameOrigin)
          )
            t = !0
          else if (r.allowed_origins instanceof Array)
            for (var n = 0; n < r.allowed_origins.length; n++) {
              var i = (0, Z.D)(r.allowed_origins[n])
              if (
                e.hostname === i.hostname &&
                e.protocol === i.protocol &&
                e.port === i.port
              ) {
                t = !0
                break
              }
            }
          return t
        }
        isDtEnabled() {
          var e = (0, s.gD)(this.agentIdentifier, "distributed_tracing")
          return !!e && !!e.enabled
        }
        excludeNewrelicHeader() {
          var e = (0, s.gD)(this.agentIdentifier, "distributed_tracing")
          return !!e && !!e.exclude_newrelic_header
        }
        useNewrelicHeaderForCors() {
          var e = (0, s.gD)(this.agentIdentifier, "distributed_tracing")
          return !!e && !1 !== e.cors_use_newrelic_header
        }
        useTraceContextHeadersForCors() {
          var e = (0, s.gD)(this.agentIdentifier, "distributed_tracing")
          return !!e && !!e.cors_use_tracecontext_headers
        }
      }
      var J = i(9300),
        Q = i(7295),
        ee = ["load", "error", "abort", "timeout"],
        te = ee.length,
        re = s.hR.REQ,
        ne = s.hR.XHR
      class ie extends b {
        static featureName = J.T
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, J.T, r),
            (this.dt = new X(e)),
            (this.handler = (e, t, r, n) => (0, O.p)(e, t, r, n, this.ee))
          try {
            const e = {
              xmlhttprequest: "xhr",
              fetch: "fetch",
              beacon: "beacon"
            }
            g.gm?.performance?.getEntriesByType("resource").forEach((t) => {
              if (t.initiatorType in e && 0 !== t.responseStatus) {
                const r = { status: t.responseStatus },
                  n = {
                    rxSize: t.transferSize,
                    duration: Math.floor(t.duration),
                    cbTime: 0
                  }
                oe(r, t.name),
                  this.handler(
                    "xhr",
                    [r, n, t.startTime, t.responseEnd, e[t.initiatorType]],
                    void 0,
                    a.K.ajax
                  )
              }
            })
          } catch (e) {}
          ;(0, Y.NZ)(this.ee),
            (0, Y.bX)(this.ee),
            (function (e, t, r, n) {
              function i(e) {
                var t = this
                ;(t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = x),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    "load",
                    function (r) {
                      A(t, e)
                    },
                    (0, _.jT)(!1)
                  ),
                  g.lR ||
                    e.addEventListener(
                      "progress",
                      function (e) {
                        t.lastSize = e.loaded
                      },
                      (0, _.jT)(!1)
                    )
              }
              function o(e) {
                ;(this.params = { method: e[0] }),
                  oe(this, e[1]),
                  (this.metrics = {})
              }
              function c(t, r) {
                var i = (0, s.oC)(e)
                i.xpid &&
                  this.sameOrigin &&
                  r.setRequestHeader("X-NewRelic-ID", i.xpid)
                var o = n.generateTracePayload(this.parsedOrigin)
                if (o) {
                  var a = !1
                  o.newrelicHeader &&
                    (r.setRequestHeader("newrelic", o.newrelicHeader),
                    (a = !0)),
                    o.traceContextParentHeader &&
                      (r.setRequestHeader(
                        "traceparent",
                        o.traceContextParentHeader
                      ),
                      o.traceContextStateHeader &&
                        r.setRequestHeader(
                          "tracestate",
                          o.traceContextStateHeader
                        ),
                      (a = !0)),
                    a && (this.dt = o)
                }
              }
              function u(e, r) {
                var n = this.metrics,
                  i = e[0],
                  o = this
                if (n && i) {
                  var a = q(i)
                  a && (n.txSize = a)
                }
                ;(this.startTime = (0, C.t)()),
                  (this.body = i),
                  (this.listener = function (e) {
                    try {
                      "abort" !== e.type ||
                        o.loadCaptureCalled ||
                        (o.params.aborted = !0),
                        ("load" !== e.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || "function" != typeof r.onload) &&
                            "function" == typeof o.end)) &&
                          o.end(r)
                    } catch (e) {
                      try {
                        t.emit("internal-error", [e])
                      } catch (e) {}
                    }
                  })
                for (var s = 0; s < te; s++)
                  r.addEventListener(ee[s], this.listener, (0, _.jT)(!1))
              }
              function d(e, t, r) {
                ;(this.cbTime += e),
                  t ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && "function" == typeof r.onload) ||
                    "function" != typeof this.end ||
                    this.end(r)
              }
              function l(e, t) {
                var r = "" + W(e) + !!t
                this.xhrGuids &&
                  !this.xhrGuids[r] &&
                  ((this.xhrGuids[r] = !0), (this.totalCbs += 1))
              }
              function f(e, t) {
                var r = "" + W(e) + !!t
                this.xhrGuids &&
                  this.xhrGuids[r] &&
                  (delete this.xhrGuids[r], (this.totalCbs -= 1))
              }
              function h() {
                this.endTime = (0, C.t)()
              }
              function p(e, r) {
                r instanceof ne &&
                  "load" === e[0] &&
                  t.emit("xhr-load-added", [e[1], e[2]], r)
              }
              function m(e, r) {
                r instanceof ne &&
                  "load" === e[0] &&
                  t.emit("xhr-load-removed", [e[1], e[2]], r)
              }
              function v(e, t, r) {
                t instanceof ne &&
                  ("onload" === r && (this.onload = !0),
                  ("load" === (e[0] && e[0].type) || this.onload) &&
                    (this.xhrCbStart = (0, C.t)()))
              }
              function b(e, r) {
                this.xhrCbStart &&
                  t.emit(
                    "xhr-cb-time",
                    [(0, C.t)() - this.xhrCbStart, this.onload, r],
                    r
                  )
              }
              function y(e) {
                var t,
                  r = e[1] || {}
                if (
                  ("string" == typeof e[0]
                    ? 0 === (t = e[0]).length &&
                      g.RI &&
                      (t = "" + g.gm.location.href)
                    : e[0] && e[0].url
                      ? (t = e[0].url)
                      : g.gm?.URL && e[0] && e[0] instanceof URL
                        ? (t = e[0].href)
                        : "function" == typeof e[0].toString &&
                          (t = e[0].toString()),
                  "string" == typeof t && 0 !== t.length)
                ) {
                  t &&
                    ((this.parsedOrigin = (0, Z.D)(t)),
                    (this.sameOrigin = this.parsedOrigin.sameOrigin))
                  var i = n.generateTracePayload(this.parsedOrigin)
                  if (i && (i.newrelicHeader || i.traceContextParentHeader))
                    if (e[0] && e[0].headers)
                      s(e[0].headers, i) && (this.dt = i)
                    else {
                      var o = {}
                      for (var a in r) o[a] = r[a]
                      ;(o.headers = new Headers(r.headers || {})),
                        s(o.headers, i) && (this.dt = i),
                        e.length > 1 ? (e[1] = o) : e.push(o)
                    }
                }
                function s(e, t) {
                  var r = !1
                  return (
                    t.newrelicHeader &&
                      (e.set("newrelic", t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader &&
                      (e.set("traceparent", t.traceContextParentHeader),
                      t.traceContextStateHeader &&
                        e.set("tracestate", t.traceContextStateHeader),
                      (r = !0)),
                    r
                  )
                }
              }
              function w(e, t) {
                ;(this.params = {}),
                  (this.metrics = {}),
                  (this.startTime = (0, C.t)()),
                  (this.dt = t),
                  e.length >= 1 && (this.target = e[0]),
                  e.length >= 2 && (this.opts = e[1])
                var r,
                  n = this.opts || {},
                  i = this.target
                "string" == typeof i
                  ? (r = i)
                  : "object" == typeof i && i instanceof re
                    ? (r = i.url)
                    : g.gm?.URL &&
                      "object" == typeof i &&
                      i instanceof URL &&
                      (r = i.href),
                  oe(this, r)
                var o = (
                  "" + ((i && i instanceof re && i.method) || n.method || "GET")
                ).toUpperCase()
                ;(this.params.method = o),
                  (this.body = n.body),
                  (this.txSize = q(n.body) || 0)
              }
              function R(e, t) {
                if (
                  ((this.endTime = (0, C.t)()),
                  this.params || (this.params = {}),
                  (0, Q.iW)(this.params))
                )
                  return
                let n
                ;(this.params.status = t ? t.status : 0),
                  "string" == typeof this.rxSize &&
                    this.rxSize.length > 0 &&
                    (n = +this.rxSize)
                const i = {
                  txSize: this.txSize,
                  rxSize: n,
                  duration: (0, C.t)() - this.startTime
                }
                r(
                  "xhr",
                  [this.params, i, this.startTime, this.endTime, "fetch"],
                  this,
                  a.K.ajax
                )
              }
              function x(e) {
                const t = this.params,
                  n = this.metrics
                if (!this.ended) {
                  this.ended = !0
                  for (let t = 0; t < te; t++)
                    e.removeEventListener(ee[t], this.listener, !1)
                  t.aborted ||
                    (0, Q.iW)(t) ||
                    ((n.duration = (0, C.t)() - this.startTime),
                    this.loadCaptureCalled || 4 !== e.readyState
                      ? null == t.status && (t.status = 0)
                      : A(this, e),
                    (n.cbTime = this.cbTime),
                    r(
                      "xhr",
                      [t, n, this.startTime, this.endTime, "xhr"],
                      this,
                      a.K.ajax
                    ))
                }
              }
              function A(e, r) {
                e.params.status = r.status
                var n = (function (e, t) {
                  var r = e.responseType
                  return "json" === r && null !== t
                    ? t
                    : "arraybuffer" === r || "blob" === r || "json" === r
                      ? q(e.response)
                      : "text" === r || "" === r || void 0 === r
                        ? q(e.responseText)
                        : void 0
                })(r, e.lastSize)
                if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
                  var i = r.getResponseHeader("X-NewRelic-App-Data")
                  i &&
                    ((0, O.p)(
                      k.rs,
                      ["Ajax/CrossApplicationTracing/Header/Seen"],
                      void 0,
                      a.K.metrics,
                      t
                    ),
                    (e.params.cat = i.split(", ").pop()))
                }
                e.loadCaptureCalled = !0
              }
              t.on("new-xhr", i),
                t.on("open-xhr-start", o),
                t.on("open-xhr-end", c),
                t.on("send-xhr-start", u),
                t.on("xhr-cb-time", d),
                t.on("xhr-load-added", l),
                t.on("xhr-load-removed", f),
                t.on("xhr-resolved", h),
                t.on("addEventListener-end", p),
                t.on("removeEventListener-end", m),
                t.on("fn-end", b),
                t.on("fetch-before-start", y),
                t.on("fetch-start", w),
                t.on("fn-start", v),
                t.on("fetch-done", R)
            })(e, this.ee, this.handler, this.dt),
            this.importAggregator()
        }
      }
      function oe(e, t) {
        var r = (0, Z.D)(t),
          n = e.params || e
        ;(n.hostname = r.hostname),
          (n.port = r.port),
          (n.protocol = r.protocol),
          (n.host = r.hostname + ":" + r.port),
          (n.pathname = r.pathname),
          (e.parsedOrigin = r),
          (e.sameOrigin = r.sameOrigin)
      }
      var ae = i(3738)
      const {
        He: se,
        bD: ce,
        d3: ue,
        Kp: de,
        TZ: le,
        Lc: fe,
        uP: he,
        Rz: ge
      } = ae
      var pe = i(2614)
      class me extends b {
        static featureName = t.TZ
        #i
        constructor(e, r) {
          let n,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, r, t.TZ, i), (this.replayRunning = !1)
          try {
            n = JSON.parse(
              localStorage.getItem("".concat(pe.H3, "_").concat(pe.uh))
            )
          } catch (e) {}
          ;(0, p.SR)(e) && this.ee.on("recordReplay", () => this.#o()),
            this.#a(n)
              ? ((this.#i = n?.sessionReplayMode), this.#s())
              : this.importAggregator(),
            this.ee.on("err", (e) => {
              this.replayRunning &&
                ((this.errorNoticed = !0),
                (0, O.p)(
                  t.G4.ERROR_DURING_REPLAY,
                  [e],
                  void 0,
                  this.featureName,
                  this.ee
                ))
            }),
            this.ee.on(t.G4.REPLAY_RUNNING, (e) => {
              this.replayRunning = e
            })
        }
        #a(e) {
          return (
            (e &&
              (e.sessionReplayMode === pe.g.FULL ||
                e.sessionReplayMode === pe.g.ERROR)) ||
            (0, p.Aw)(this.agentIdentifier)
          )
        }
        #c = !1
        async #s(e) {
          if (!this.#c) {
            this.#c = !0
            try {
              const { Recorder: t } = await Promise.all([
                i.e(478),
                i.e(249)
              ]).then(i.bind(i, 2496))
              ;(this.recorder ??= new t({
                mode: this.#i,
                agentIdentifier: this.agentIdentifier,
                trigger: e,
                ee: this.ee
              })),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording)
            } catch (e) {}
            this.importAggregator({
              recorder: this.recorder,
              errorNoticed: this.errorNoticed
            })
          }
        }
        #o() {
          this.featAggregate
            ? this.featAggregate.mode !== pe.g.FULL &&
              this.featAggregate.initializeRecording(pe.g.FULL, !0)
            : ((this.#i = pe.g.FULL),
              this.#s(t.Qb.API),
              this.recorder &&
                this.recorder.parent.mode !== pe.g.FULL &&
                ((this.recorder.parent.mode = pe.g.FULL),
                this.recorder.stopRecording(),
                this.recorder.startRecording(),
                (this.abortHandler = this.recorder.stopRecording)))
        }
      }
      var ve = i(3962)
      class be extends b {
        static featureName = ve.TZ
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          if ((super(e, t, ve.TZ, r), !g.RI || !s.hR.MO)) return
          const n = (0, Y.vC)(this.ee),
            i = (0, Y.um)(this.ee),
            o = () =>
              (0, O.p)(
                "newURL",
                [(0, C.t)(), "" + window.location],
                void 0,
                this.featureName,
                this.ee
              )
          n.on("pushState-end", o), n.on("replaceState-end", o)
          try {
            this.removeOnAbort = new AbortController()
          } catch (e) {}
          ;(0, _.sp)(
            "popstate",
            (e) =>
              (0, O.p)(
                "newURL",
                [e.timeStamp, "" + window.location],
                void 0,
                this.featureName,
                this.ee
              ),
            !0,
            this.removeOnAbort?.signal
          )
          let a = !1
          const c = new s.hR.MO((e, t) => {
              a ||
                ((a = !0),
                requestAnimationFrame(() => {
                  ;(0, O.p)(
                    "newDom",
                    [(0, C.t)()],
                    void 0,
                    this.featureName,
                    this.ee
                  ),
                    (a = !1)
                }))
            }),
            u = (0, v.s)(
              (e) => {
                ;(0, O.p)("newUIEvent", [e], void 0, this.featureName, this.ee),
                  c.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                  })
              },
              100,
              { leading: !0 }
            )
          i.on("fn-start", (e) => {
            let [t] = e
            ve.tC.includes(t?.type) && u(t)
          })
          for (let e of ve.tC) document.addEventListener(e, () => {})
          ;(this.abortHandler = function () {
            this.removeOnAbort?.abort(),
              c.disconnect(),
              (this.abortHandler = void 0)
          }),
            this.importAggregator({ domObserver: c })
        }
      }
      var ye = i(7378)
      const {
        TZ: we,
        d3: Re,
        Kp: xe,
        $p: Ae,
        wW: Te,
        e5: Ee,
        tH: Ne,
        uP: Se,
        rw: Oe,
        Lc: Ie
      } = ye
      var _e = i(8166)
      class je extends b {
        static featureName = _e.T
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, _e.T, r), this.importAggregator()
        }
      }
      var Ce = i(993),
        Pe = i(3785)
      class ke extends b {
        static featureName = Ce.TZ
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          super(e, t, Ce.TZ, r)
          const n = this.ee
          this.ee.on("wrap-logger-end", function (e) {
            let [t] = e
            const { level: r, customAttributes: i } = this
            ;(0, Pe.R)(n, t, i, r)
          }),
            this.importAggregator()
        }
      }
      new (class extends o {
        constructor(t, r) {
          super(r),
            g.gm
              ? ((this.sharedAggregator = new A({
                  agentIdentifier: this.agentIdentifier
                })),
                (this.features = {}),
                (0, N.bQ)(this.agentIdentifier, this),
                (this.desiredFeatures = new Set(t.features || [])),
                this.desiredFeatures.add(w),
                (this.runSoftNavOverSpa = [...this.desiredFeatures].some(
                  (e) => e.featureName === a.K.softNav
                )),
                (0, d.j)(this, t, t.loaderType || "agent"),
                this.run())
              : (0, e.R)(
                  "Failed to initialize the agent. Could not determine the runtime environment."
                )
        }
        get config() {
          return {
            info: this.info,
            init: this.init,
            loader_config: this.loader_config,
            runtime: this.runtime
          }
        }
        run() {
          try {
            const t = u(this.agentIdentifier),
              r = [...this.desiredFeatures]
            r.sort((e, t) => a.P[e.featureName] - a.P[t.featureName]),
              r.forEach((r) => {
                if (!t[r.featureName] && r.featureName !== a.K.pageViewEvent)
                  return
                if (this.runSoftNavOverSpa && r.featureName === a.K.spa) return
                if (!this.runSoftNavOverSpa && r.featureName === a.K.softNav)
                  return
                const n = (function (e) {
                  switch (e) {
                    case a.K.ajax:
                      return [a.K.jserrors]
                    case a.K.sessionTrace:
                      return [a.K.ajax, a.K.pageViewEvent]
                    case a.K.sessionReplay:
                      return [a.K.sessionTrace]
                    case a.K.pageViewTiming:
                      return [a.K.pageViewEvent]
                    default:
                      return []
                  }
                })(r.featureName)
                n.every((e) => e in this.features) ||
                  (0, e.R)(
                    ""
                      .concat(
                        r.featureName,
                        " is enabled but one or more dependent features has not been initialized ("
                      )
                      .concat(
                        (0, S.A)(n),
                        "). This may cause unintended consequences or missing data..."
                      )
                  ),
                  (this.features[r.featureName] = new r(
                    this.agentIdentifier,
                    this.sharedAggregator
                  ))
              })
          } catch (t) {
            ;(0, e.R)(
              "Failed to initialize all enabled instrument classes (agent aborted) -",
              t
            )
            for (const e in this.features) this.features[e].abortHandler?.()
            const r = (0, N.Zm)()
            delete r.initializedAgents[this.agentIdentifier]?.api,
              delete r.initializedAgents[this.agentIdentifier]?.features,
              delete this.sharedAggregator
            return r.ee.get(this.agentIdentifier).abort(), !1
          }
        }
      })({
        features: [
          ie,
          w,
          P,
          class extends b {
            static featureName = le
            constructor(e, t) {
              super(
                e,
                t,
                le,
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              )
              if (!(0, m.V)(this.agentIdentifier))
                return void (0, l.x3)(this.agentIdentifier, this.featureName)
              const r = this.ee
              let n
              ;(0, Y.vC)(r),
                (this.eventsEE = (0, Y.um)(r)),
                this.eventsEE.on(he, function (e, t) {
                  this.bstStart = (0, C.t)()
                }),
                this.eventsEE.on(fe, function (e, t) {
                  ;(0, O.p)(
                    "bst",
                    [e[0], t, this.bstStart, (0, C.t)()],
                    void 0,
                    a.K.sessionTrace,
                    r
                  )
                }),
                r.on(ge + ue, function (e) {
                  ;(this.time = (0, C.t)()),
                    (this.startPath = location.pathname + location.hash)
                }),
                r.on(ge + de, function (e) {
                  ;(0, O.p)(
                    "bstHist",
                    [
                      location.pathname + location.hash,
                      this.startPath,
                      this.time
                    ],
                    void 0,
                    a.K.sessionTrace,
                    r
                  )
                })
              try {
                ;(n = new PerformanceObserver((e) => {
                  const t = e.getEntries()
                  ;(0, O.p)(se, [t], void 0, a.K.sessionTrace, r)
                })),
                  n.observe({ type: ce, buffered: !0 })
              } catch (e) {}
              this.importAggregator({ resourceObserver: n })
            }
          },
          me,
          L,
          je,
          B,
          ke,
          be,
          class extends b {
            static featureName = we
            constructor(e, t) {
              var r
              if (
                (super(
                  e,
                  t,
                  we,
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2]
                ),
                (r = this),
                !g.RI)
              )
                return
              try {
                this.removeOnAbort = new AbortController()
              } catch (e) {}
              let n,
                i = 0
              const o = this.ee.get("tracer"),
                a = (0, Y.Ri)(this.ee),
                s = (0, Y.o8)(this.ee),
                c = (0, Y.MO)(this.ee),
                u = (0, Y.bX)(this.ee),
                d = this.ee.get("events"),
                l = (0, Y.NZ)(this.ee),
                f = (0, Y.vC)(this.ee),
                h = (0, Y.Ak)(this.ee)
              function p(e, t) {
                f.emit("newURL", ["" + window.location, t])
              }
              function m() {
                i++, (n = window.location.hash), (this[Se] = (0, C.t)())
              }
              function v() {
                i--, window.location.hash !== n && p(0, !0)
                var e = (0, C.t)()
                ;(this[Ee] = ~~this[Ee] + e - this[Se]), (this[Ie] = e)
              }
              function b(e, t) {
                e.on(t, function () {
                  this[t] = (0, C.t)()
                })
              }
              this.ee.on(Se, m),
                s.on(Oe, m),
                a.on(Oe, m),
                this.ee.on(Ie, v),
                s.on(Te, v),
                a.on(Te, v),
                this.ee.on("fn-err", function () {
                  for (
                    var t = arguments.length, n = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    n[i] = arguments[i]
                  n[2]?.__newrelic?.[e] ||
                    (0, O.p)(
                      "function-err",
                      [...n],
                      void 0,
                      r.featureName,
                      r.ee
                    )
                }),
                this.ee.buffer([Se, Ie, "xhr-resolved"], this.featureName),
                d.buffer([Se], this.featureName),
                c.buffer(
                  ["setTimeout" + xe, "clearTimeout" + Re, Se],
                  this.featureName
                ),
                u.buffer([Se, "new-xhr", "send-xhr" + Re], this.featureName),
                l.buffer(
                  [Ne + Re, Ne + "-done", Ne + Ae + Re, Ne + Ae + xe],
                  this.featureName
                ),
                f.buffer(["newURL"], this.featureName),
                h.buffer([Se], this.featureName),
                s.buffer(
                  ["propagate", Oe, Te, "executor-err", "resolve" + Re],
                  this.featureName
                ),
                o.buffer([Se, "no-" + Se], this.featureName),
                a.buffer(
                  ["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"],
                  this.featureName
                ),
                b(l, Ne + Re),
                b(l, Ne + "-done"),
                b(a, "new-jsonp"),
                b(a, "jsonp-end"),
                b(a, "cb-start"),
                f.on("pushState-end", p),
                f.on("replaceState-end", p),
                window.addEventListener(
                  "hashchange",
                  p,
                  (0, _.jT)(!0, this.removeOnAbort?.signal)
                ),
                window.addEventListener(
                  "load",
                  p,
                  (0, _.jT)(!0, this.removeOnAbort?.signal)
                ),
                window.addEventListener(
                  "popstate",
                  function () {
                    p(0, i > 1)
                  },
                  (0, _.jT)(!0, this.removeOnAbort?.signal)
                ),
                (this.abortHandler = this.#n),
                this.importAggregator()
            }
            #n() {
              this.removeOnAbort?.abort(), (this.abortHandler = void 0)
            }
          }
        ],
        loaderType: "spa"
      })
    })()
})()
