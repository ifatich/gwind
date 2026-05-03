import { useSSRContext, ref, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md"}');
const __default__ = { name: "components/tabs.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("account");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GwTabs = resolveComponent("GwTabs");
      const _component_GwCard = resolveComponent("GwCard");
      const _component_GwCardHeader = resolveComponent("GwCardHeader");
      const _component_GwCardTitle = resolveComponent("GwCardTitle");
      const _component_GwCardDescription = resolveComponent("GwCardDescription");
      const _component_GwCardContent = resolveComponent("GwCardContent");
      const _component_GwInput = resolveComponent("GwInput");
      const _component_GwCardFooter = resolveComponent("GwCardFooter");
      const _component_GwButton = resolveComponent("GwButton");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h1><p>A set of layered sections of content, known as tab panels, that are displayed one at a time.</p><h2 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;Preview&quot;">​</a></h2><div class="gw-preview">`);
      _push(ssrRenderComponent(_component_GwTabs, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        tabs: [
          { value: "account", label: "Account" },
          { value: "password", label: "Password" },
          { value: "notifications", label: "Notifications" }
        ]
      }, {
        account: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GwCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_GwCardHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_GwCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Account`);
                            } else {
                              return [
                                createTextVNode("Account")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_GwCardDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Make changes to your account here. Click save when you&#39;re done.`);
                            } else {
                              return [
                                createTextVNode("Make changes to your account here. Click save when you're done.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_GwCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Account")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_GwCardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Make changes to your account here. Click save when you're done.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_GwCardContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-4"${_scopeId3}><div${_scopeId3}><label class="text-sm font-medium mb-1.5 block"${_scopeId3}>Name</label>`);
                        _push4(ssrRenderComponent(_component_GwInput, { "default-value": "Pedro Duarte" }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><label class="text-sm font-medium mb-1.5 block"${_scopeId3}>Username</label>`);
                        _push4(ssrRenderComponent(_component_GwInput, { "default-value": "@peduarte" }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-4" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Name"),
                              createVNode(_component_GwInput, { "default-value": "Pedro Duarte" })
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Username"),
                              createVNode(_component_GwInput, { "default-value": "@peduarte" })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_GwCardFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_GwButton, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save changes`);
                            } else {
                              return [
                                createTextVNode("Save changes")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_GwButton, null, {
                            default: withCtx(() => [
                              createTextVNode("Save changes")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_GwCardHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_GwCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Account")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_GwCardDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Make changes to your account here. Click save when you're done.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_GwCardContent, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-4" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Name"),
                            createVNode(_component_GwInput, { "default-value": "Pedro Duarte" })
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Username"),
                            createVNode(_component_GwInput, { "default-value": "@peduarte" })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_GwCardFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_GwButton, null, {
                          default: withCtx(() => [
                            createTextVNode("Save changes")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GwCard, null, {
                default: withCtx(() => [
                  createVNode(_component_GwCardHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_GwCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Account")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_GwCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Make changes to your account here. Click save when you're done.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_GwCardContent, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Name"),
                          createVNode(_component_GwInput, { "default-value": "Pedro Duarte" })
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium mb-1.5 block" }, "Username"),
                          createVNode(_component_GwInput, { "default-value": "@peduarte" })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_GwCardFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_GwButton, null, {
                        default: withCtx(() => [
                          createTextVNode("Save changes")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<pre${_scopeId}><code${_scopeId}>&lt;template #password&gt;
  &lt;GwCard&gt;
    &lt;GwCardHeader&gt;
      &lt;GwCardTitle&gt;Password&lt;/GwCardTitle&gt;
      &lt;GwCardDescription&gt;Change your password here. After saving, you&#39;ll be logged out.&lt;/GwCardDescription&gt;
    &lt;/GwCardHeader&gt;
    &lt;GwCardContent&gt;
      &lt;div class=&quot;flex flex-col gap-4&quot;&gt;
        &lt;div&gt;
          &lt;label class=&quot;text-sm font-medium mb-1.5 block&quot;&gt;Current password&lt;/label&gt;
          &lt;GwInput type=&quot;password&quot; /&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;label class=&quot;text-sm font-medium mb-1.5 block&quot;&gt;New password&lt;/label&gt;
          &lt;GwInput type=&quot;password&quot; /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/GwCardContent&gt;
    &lt;GwCardFooter&gt;
      &lt;GwButton&gt;Update password&lt;/GwButton&gt;
    &lt;/GwCardFooter&gt;
  &lt;/GwCard&gt;
&lt;/template&gt;

&lt;template #notifications&gt;
  &lt;GwCard&gt;
    &lt;GwCardHeader&gt;
      &lt;GwCardTitle&gt;Notifications&lt;/GwCardTitle&gt;
      &lt;GwCardDescription&gt;Configure how you receive notifications.&lt;/GwCardDescription&gt;
    &lt;/GwCardHeader&gt;
    &lt;GwCardContent&gt;
      &lt;div class=&quot;flex flex-col gap-3&quot;&gt;
        &lt;div class=&quot;flex items-center justify-between&quot;&gt;
          &lt;span class=&quot;text-sm&quot;&gt;Email notifications&lt;/span&gt;
          &lt;GwBadge variant=&quot;success&quot;&gt;Enabled&lt;/GwBadge&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex items-center justify-between&quot;&gt;
          &lt;span class=&quot;text-sm&quot;&gt;Push notifications&lt;/span&gt;
          &lt;GwBadge variant=&quot;outline&quot;&gt;Disabled&lt;/GwBadge&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex items-center justify-between&quot;&gt;
          &lt;span class=&quot;text-sm&quot;&gt;SMS notifications&lt;/span&gt;
          &lt;GwBadge variant=&quot;outline&quot;&gt;Disabled&lt;/GwBadge&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/GwCardContent&gt;
  &lt;/GwCard&gt;
&lt;/template&gt;
</code></pre>`);
          } else {
            return [
              createVNode("pre", null, [
                createVNode("code", null, `<template #password>
  <GwCard>
    <GwCardHeader>
      <GwCardTitle>Password</GwCardTitle>
      <GwCardDescription>Change your password here. After saving, you'll be logged out.</GwCardDescription>
    </GwCardHeader>
    <GwCardContent>
      <div class="flex flex-col gap-4">
        <div>
          <label class="text-sm font-medium mb-1.5 block">Current password</label>
          <GwInput type="password" />
        </div>
        <div>
          <label class="text-sm font-medium mb-1.5 block">New password</label>
          <GwInput type="password" />
        </div>
      </div>
    </GwCardContent>
    <GwCardFooter>
      <GwButton>Update password</GwButton>
    </GwCardFooter>
  </GwCard>
</template>

<template #notifications>
  <GwCard>
    <GwCardHeader>
      <GwCardTitle>Notifications</GwCardTitle>
      <GwCardDescription>Configure how you receive notifications.</GwCardDescription>
    </GwCardHeader>
    <GwCardContent>
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="text-sm">Email notifications</span>
          <GwBadge variant="success">Enabled</GwBadge>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">Push notifications</span>
          <GwBadge variant="outline">Disabled</GwBadge>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">SMS notifications</span>
          <GwBadge variant="outline">Disabled</GwBadge>
        </div>
      </div>
    </GwCardContent>
  </GwCard>
</template>
`)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { Tabs, Card, CardHeader, CardTitle, CardContent } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@/components/ui&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> activeTab</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;tab1&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Tabs</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">    v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">activeTab</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">tabs</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">[</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      { value: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;tab1&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, label: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;Tab 1&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      { value: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;tab2&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, label: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;Tab 2&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    ]</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">tab1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">p</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Content for Tab 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">p</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">tab2</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">p</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Content for Tab 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">p</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Tabs</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td><code>string</code></td><td>—</td><td>Active tab value (v-model)</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>First tab&#39;s value</td><td>Initially active tab</td></tr><tr><td><code>tabs</code></td><td><code>{ value: string, label: string, disabled?: boolean }[]</code></td><td>—</td><td>Tab definitions</td></tr><tr><td><code>class</code></td><td><code>string</code></td><td>—</td><td>Additional CSS classes</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Arrow keys navigate between tabs</li><li><code>Home</code> / <code>End</code> jump to first/last tab</li><li>Tab panels are properly associated with their triggers via <code>aria-controls</code></li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
