import { _ as d } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  resolveComponent,
  openBlock,
  createElementBlock,
  Fragment,
  renderList,
  unref,
  createElementVNode,
  toDisplayString,
  createBlock,
  withCtx,
  createTextVNode,
} from "./vue-cdn.js";
const v = { class: "home-list" },
  g = {
    __name: "index",
    setup(y) {
      let l = localStorage.getItem("appRoute"),
        _ = JSON.parse(l);
      return (B, S) => {
        const c = resolveComponent("router-link");
        return (
          openBlock(),
          createElementBlock("div", v, [
            (openBlock(!0),
            createElementBlock(
              Fragment,
              null,
              renderList(
                unref(_),
                (a, u) => (
                  openBlock(),
                  createElementBlock(
                    "div",
                    { class: "home-list-column", key: u },
                    [
                      createElementVNode(
                        "h1",
                        null,
                        toDisplayString(a.name),
                        1
                      ),
                      (openBlock(!0),
                      createElementBlock(
                        Fragment,
                        null,
                        renderList(
                          a.children,
                          (o, p) => (
                            openBlock(),
                            createBlock(
                              c,
                              { to: { name: o.name }, key: p },
                              {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(o.name), 1),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["to"]
                            )
                          )
                        ),
                        128
                      )),
                    ]
                  )
                )
              ),
              128
            )),
          ])
        );
      };
    },
  },
  w = d(g, [["__scopeId", "data-v-63d6d531"]]);
export { w as default };
