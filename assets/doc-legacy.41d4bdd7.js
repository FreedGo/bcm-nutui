System.register(["./index-legacy.579cfc3c.js"],(function(t){"use strict";var e,o,c;return{setters:[function(t){e=t.c,o=t.o,c=t.D}],execute:function(){const n={class:"markdown-body"},u=c('<h1>Checkbox 复选按钮</h1><h3>介绍</h3><p>多选按钮用于选择。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Checkbox } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Checkbox);\n</code></pre><h2>基本用法</h2><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox&quot;&gt;选项&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkbox: false,\n  };\n}\n</code></pre><h2>CheckboxGroup基本用法</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxGroup&quot;&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkboxGroup: [&#39;选项一&#39;],\n  };\n}\n</code></pre><h2>禁用状态</h2><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox1&quot; disabled&gt;未选时禁用状态&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox2&quot; disabled&gt;已选时禁用状态&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkbox1: false,\n    checkbox2: true,\n  };\n}\n</code></pre><h2>CheckboxGroup整体禁用</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxGroup&quot; disabled&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkboxGroup: [&#39;选项一&#39;],\n  };\n}\n</code></pre><h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>normal</strong>，<strong>large</strong> 三种规格供使用。</p><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox1&quot; size=&quot;small&quot;&gt;小号1&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox2&quot; size=&quot;normal&quot;&gt;默认&lt;/nut-checkbox&gt;\n&lt;nut-checkbox v-model=&quot;checkbox3&quot; size=&quot;large&quot;&gt;大号&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkbox1: true,\n    checkbox2: true,\n    checkbox3: true,\n  };\n}\n\n</code></pre><h2>CheckboxGroup整体尺寸</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxGroup&quot; size=&quot;small&quot;&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkboxGroup: [],\n  };\n}\n</code></pre><h2>禁用动效</h2><p>is-animation属性值为false时，禁用自带动效</p><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox&quot; :is-animation=&quot;false&quot;&gt;没有动效&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkbox: false,\n  };\n}\n</code></pre><h2>CheckboxGroup整体禁用动效</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxGroup&quot; :is-animation=&quot;false&quot;&gt;\n  &lt;nut-checkbox label=&quot;没有动效1&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;没有动效2&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    checkboxGroup: [&#39;没有动效1&#39;],\n  };\n}\n</code></pre><h2>事件</h2><p>值发生变化时，将触发change事件</p><pre><code class="language-html">&lt;nut-checkbox v-model=&quot;checkbox&quot; @change=&quot;checkboxChange&quot;&gt;\n  change事件\n&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const checkbox = ref(false);\n  const checkboxChange= (checked) =&gt; {\n    console.log(&#39;change事件触发&#39; + checked);\n\t}  \n  return {\n    checkbox,\n    checkboxChange\n  };\n}\n</code></pre><h2>CheckboxGroup整体事件</h2><pre><code class="language-html">&lt;nut-checkboxgroup v-model=&quot;checkboxGroup&quot; @change=&quot;getChange&quot;&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const checkboxGroup = reactive([&#39;选项一&#39;]);\n  const getChange= (val) =&gt; {\n    console.log(&#39;选中状态选项：&#39; + val);\n\t}  \n  return {\n    checkboxGroup,\n    getChange\n  };\n}\n</code></pre><h2>自定义class</h2><pre><code class="language-html">&lt;nut-checkbox class=&quot;my-checkbox&quot; v-model=&quot;checkbox&quot;&gt;自定义Class:&quot;my-checkbox&quot;&lt;/nut-checkbox&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const checkbox = ref(false);\n  return {\n    checkbox,\n  };\n}\n</code></pre><h2>全选与反选</h2><pre><code class="language-html">&lt;nut-checkboxgroup\n  ref=&quot;checkboxGroupDemo&quot;\n  v-model=&quot;checkboxGroup&quot;\n  @change=&quot;getChange&quot;\n&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项三&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n&lt;nut-button size=&quot;small&quot; type=&quot;primary&quot; @click=&quot;chooseAll(true)&quot;&gt;全选&lt;/nut-button&gt;\n&lt;nut-button size=&quot;small&quot; type=&quot;primary&quot; @click=&quot;chooseAll()&quot;&gt;反选&lt;/nut-button&gt;\n&lt;nut-button size=&quot;small&quot; type=&quot;primary&quot; @click=&quot;chooseAll(false)&quot;&gt;取消&lt;/nut-button&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const checkboxGroup = ref([]);\n  const getChange = (val: string) =&gt; {\n    console.log(&#39;选中状态选项：&#39; + val);\n  };\n  const checkboxGroupDemo = ref(null);\n  const chooseAll = (val: boolean | string) =&gt; {\n    (checkboxGroupDemo.value as any).toggleAll(val);\n  };\n  return {\n    checkboxGroup,\n    getChange,\n    chooseAll\n  };\n}\n</code></pre><h2>CheckboxGroup排列方向</h2><pre><code class="language-html">&lt;nut-checkboxgroup\n  v-model=&quot;checkboxGroup&quot;\n  direction=&quot;vertical&quot;\n  @change=&quot;getChange&quot;\n&gt;\n  &lt;nut-checkbox label=&quot;选项一&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项二&quot;&gt;&lt;/nut-checkbox&gt;\n  &lt;nut-checkbox label=&quot;选项三&quot;&gt;&lt;/nut-checkbox&gt;\n&lt;/nut-checkboxgroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  const checkboxGroup = ref([]);\n  const getChange = (val: string) =&gt; {\n    console.log(&#39;选中状态选项：&#39; + val);\n  };\n  return {\n    checkboxGroup,\n    getChange,\n  };\n}\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>checkbox的name属性</td><td>String</td><td>-</td></tr><tr><td>v-model</td><td>必填项，当前选中项的选中状态,同步value</td><td>Boolean</td><td>false</td></tr><tr><td>label</td><td>当前选中项的label值，（可不设，设置后label有值，替换插值内容）</td><td>String</td><td>-</td></tr><tr><td>checked</td><td>checkbox的checked属性</td><td>Boolean</td><td>false</td></tr><tr><td>size</td><td>尺寸，可选值small/normal/large</td><td>String</td><td>normal</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>is-animation</td><td>是否需要动效</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>CheckGroup</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>必填项，当前选中项的选中状态,同步value</td><td>Boolean</td><td>false</td></tr><tr><td>size</td><td>尺寸，可选值small/normal/large</td><td>String</td><td>normal</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>is-animation</td><td>是否需要动效</td><td>Boolean</td><td>true</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>当前选中项状态（checked），当前选中项值（label）【设置label后有值、默认为空】,event</td></tr></tbody></table>',53);t("default",{expose:[],setup:t=>(t,c)=>(o(),e("div",n,[u]))})}}}));
