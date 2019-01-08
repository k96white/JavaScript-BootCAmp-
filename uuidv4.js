! function(n) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).uuidv4 = n()
    }
}(function() {
    return function i(u, f, a) {
        function s(r, n) {
            if (!f[r]) {
                if (!u[r]) {
                    var t = "function" == typeof require && require;
                    if (!n && t) return t(r, !0);
                    if (c) return c(r, !0);
                    var e = new Error("Cannot find module '" + r + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                var o = f[r] = {
                    exports: {}
                };
                u[r][0].call(o.exports, function(n) {
                    return s(u[r][1][n] || n)
                }, o, o.exports, i, u, f, a)
            }
            return f[r].exports
        }
        for (var c = "function" == typeof require && require, n = 0; n < a.length; n++) s(a[n]);
        return s
    }({
        1: [function(n, r, t) {
            "use strict";
            var e = n("sha-1"),
                o = n("uuid/v4"),
                i = function() {
                    return o()
                };
            i.regex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/, i.is = function(n) {
                return !!n && i.regex.test(n)
            }, i.empty = function() {
                return "00000000-0000-0000-0000-000000000000"
            }, i.fromString = function(n) {
                if (!n) throw new Error("Text is missing.");
                var r = e(n);
                return r.substring(0, 8) + "-" + r.substring(8, 12) + "-4" + r.substring(13, 16) + "-8" + r.substring(17, 20) + "-" + r.substring(20, 32)
            }, r.exports = i
        }, {
            "sha-1": 2,
            "uuid/v4": 5
        }],
        2: [function(n, r, t) {
            (function() {
                function x(n, r) {
                    var t = (65535 & n) + (65535 & r);
                    return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t
                }

                function w(n, r) {
                    return n << r | n >>> 32 - r
                }

                function n(n) {
                    return function(n) {
                        var r, t = "0123456789abcdef",
                            e = "";
                        for (r = 0; r < 4 * n.length; r++) e += t.charAt(n[r >> 2] >> 8 * (3 - r % 4) + 4 & 15) + t.charAt(n[r >> 2] >> 8 * (3 - r % 4) & 15);
                        return e
                    }(function(n) {
                        var r, t, e, o, i, u, f, a, s, c = [],
                            d = 1732584193,
                            l = 4023233417,
                            p = 2562383102,
                            y = 271733878,
                            g = 3285377520;
                        for (f = 0; f < n.length; f += 16) {
                            for (r = d, t = l, e = p, o = y, i = g, a = 0; a < 80; a++) c[a] = a < 16 ? n[f + a] : w(c[a - 3] ^ c[a - 8] ^ c[a - 14] ^ c[a - 16], 1), u = x(x(w(d, 5), (b = l, h = p, m = y, (v = a) < 20 ? b & h | ~b & m : v < 40 ? b ^ h ^ m : v < 60 ? b & h | b & m | h & m : b ^ h ^ m)), x(x(g, c[a]), (s = a) < 20 ? 1518500249 : s < 40 ? 1859775393 : s < 60 ? 2400959708 : 3395469782)), g = y, y = p, p = w(l, 30), l = d, d = u;
                            d = x(d, r), l = x(l, t), p = x(p, e), y = x(y, o), g = x(g, i)
                        }
                        var v, b, h, m;
                        return [d, l, p, y, g]
                    }(function(n) {
                        var r, t = 1 + (n.length + 8 >> 6),
                            e = [];
                        for (r = 0; r < 16 * t; r++) e[r] = 0;
                        for (r = 0; r < n.length; r++) e[r >> 2] |= n.charCodeAt(r) << 24 - 8 * (3 & r);
                        return e[r >> 2] |= 128 << 24 - 8 * (3 & r), e[16 * t - 1] = 8 * n.length, e
                    }(n)))
                }
                void 0 !== t ? (void 0 !== r && r.exports && (t = r.exports = n), t.sha1 = n) : this.sha1 = n
            }).call(this)
        }, {}],
        3: [function(n, r, t) {
            for (var o = [], e = 0; e < 256; ++e) o[e] = (e + 256).toString(16).substr(1);
            r.exports = function(n, r) {
                var t = r || 0,
                    e = o;
                return [e[n[t++]], e[n[t++]], e[n[t++]], e[n[t++]], "-", e[n[t++]], e[n[t++]], "-", e[n[t++]], e[n[t++]], "-", e[n[t++]], e[n[t++]], "-", e[n[t++]], e[n[t++]], e[n[t++]], e[n[t++]], e[n[t++]], e[n[t++]]].join("")
            }
        }, {}],
        4: [function(n, r, t) {
            var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (e) {
                var o = new Uint8Array(16);
                r.exports = function() {
                    return e(o), o
                }
            } else {
                var i = new Array(16);
                r.exports = function() {
                    for (var n, r = 0; r < 16; r++) 0 == (3 & r) && (n = 4294967296 * Math.random()), i[r] = n >>> ((3 & r) << 3) & 255;
                    return i
                }
            }
        }, {}],
        5: [function(n, r, t) {
            var u = n("./lib/rng"),
                f = n("./lib/bytesToUuid");
            r.exports = function(n, r, t) {
                var e = r && t || 0;
                "string" == typeof n && (r = "binary" === n ? new Array(16) : null, n = null);
                var o = (n = n || {}).random || (n.rng || u)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, r)
                    for (var i = 0; i < 16; ++i) r[e + i] = o[i];
                return r || f(o)
            }
        }, {
            "./lib/bytesToUuid": 3,
            "./lib/rng": 4
        }]
    }, {}, [1])(1)
});