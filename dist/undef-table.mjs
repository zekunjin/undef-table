import { defineComponent as a, openBlock as o, createElementBlock as c, toDisplayString as d } from "vue";
const l = /* @__PURE__ */ a({
  __name: "Table",
  props: {
    columns: { default: () => [] }
  },
  setup(n) {
    const e = n;
    return (t, r) => (o(), c("div", null, d(e)));
  }
}), s = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, _] of e)
    t[r] = _;
  return t;
}, f = {};
function p(n, e) {
  return o(), c("div", null, "theader");
}
const i = /* @__PURE__ */ s(f, [["render", p]]), m = {};
function u(n, e) {
  return o(), c("div", null, "tbody");
}
const h = /* @__PURE__ */ s(m, [["render", u]]), T = {
  install(n) {
    n.component("UndefTable", l), n.component("UndefTheader", i), n.component("UndefTbody", h);
  }
};
export {
  T as default
};
