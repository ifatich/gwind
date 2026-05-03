import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Gwind","text":"Vue 3 Design System","tagline":"Accessible • Consistent • Performant — Source-code distribution for Micro Frontend teams.","actions":[{"theme":"brand","text":"Get Started","link":"/guide/getting-started"},{"theme":"alt","text":"View Components","link":"/components/button"}]},"features":[{"icon":"🧩","title":"Reka UI Powered","details":"Built on top of Reka UI headless primitives — keyboard navigation, screen reader support, and WAI-ARIA compliance out of the box."},{"icon":"🎨","title":"Tailwind CSS v4","details":"Leverages the new CSS-first design token system. One @theme block to customize colors, spacing, and typography across your entire app."},{"icon":"📋","title":"Copy & Paste","details":"Following the shadcn/ui model — components are distributed as source code you own. Full control, zero lock-in."},{"icon":"🏗️","title":"MFE Ready","details":"Designed for Micro Frontend architectures. Consistent UI across multiple independent teams and applications."},{"icon":"📱","title":"Responsive by Default","details":"Every component ships with built-in responsive breakpoints. Mobile, tablet, desktop — handled automatically."},{"icon":"⚡","title":"Tree-Shakeable","details":"Import only what you use. Each component is independently tree-shakeable for minimal bundle impact."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
