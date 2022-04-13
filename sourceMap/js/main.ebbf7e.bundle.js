"use strict";(self.webpackChunktest_library=self.webpackChunktest_library||[]).push([["main"],{648:function(){var s=document.createElement("div");s.className="markdown-body",s.innerHTML='<h2 id="devtool">devtool</h2>\n<p>此选项控制是否生成，以及如何生成<code>source map</code>。<code>source map</code>是什么呢，在我们生产环境上，当产生报错时我们很难去定位报错的具体位置，因为生产环境下代码已经被一些babel，loader，压缩工具给丑化和压缩了，此时调试就特别困难，即使在开发环境，代码就是被编译过了的与源代码也是有很多不一致的地方。那如何让报错能够指定到对应的源文件且能准确的对应到具体的错行那行代码上，那答案就是source map，它能够将编译后的代码映射到源文件上。那如何使用source map呢，很简单，首先会根据源文件生成source map文件，我们可以通过webpack配置生成source map文件，之后在编译后的代码最后加入一行注释，指向source-map文件，注释内容为 <code>//# sourceMappingURL=bundle.js.map</code> 。浏览器会根据我们的注释，寻找soure map文件，并根据source map文件还原源代码，便于我们去调试。</p>\n<p>在我们浏览器中读取soure map功能是默认开启的，在chrome中，在如下图位置开启</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78616c2917ea4e709049b4a6e039b594~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>那source map是怎么样的呢，我们通过webpack配置<code>devtool</code> 属性为 <code>&#39;source-map&#39;</code></p>\n<pre><code class="language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-comment">//...</span>\n  <span class="hljs-attr">mode</span>: <span class="hljs-string">&#x27;development&#x27;</span>,\n  <span class="hljs-attr">devtool</span>: <span class="hljs-string">&#x27;source-map&#x27;</span>\n  <span class="hljs-comment">//...</span>\n}\n</code></pre>\n<p>重新打包后我们在打包输出文件除了<strong>bundle.js</strong>以外多了一个<strong>bundle.js.map</strong>文件</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20d1af6cfa93450182234f04943848b7~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>查看bundle.js文件我们可以看到文件最后注释 <code>sourceMappingURL</code> 指向了<code>bundle.js.map</code> 文件</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8142edc62f9e40fe8c0ebb461281678d~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>那我们就可以肯定这个<strong>bundle.js.map</strong>文件就是我们要的<strong>source map</strong>文件，那这个source map文件长什么样，我们对它做一个格式化</p>\n<pre><code class="language-json"><span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;file&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;js/bundle.js&quot;</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;mappings&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;yBAIAA,QAAQC,IAAIC,KACZF,QAAQC,ICJCE,GDKTH,QAAQC,ICDCE,G&quot;</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;sources&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n    <span class="hljs-string">&quot;webpack://lyj-test-library/./src/main.js&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;webpack://lyj-test-library/./src/js/priceFormat.js&quot;</span>\n  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;sourcesContent&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n    <span class="hljs-string">&quot;// import { createComponent } from &#x27;./js/component&#x27;\n// createComponent()\n\nimport { add, minus } from &#x27;./js/priceFormat&#x27;\nconsole.log(abc)\nconsole.log(add(2, 3))\nconsole.log(minus(5, 3))\n&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;const add = (a, b) =&gt; {\n  return a + b\n}\n\nconst minus = (a, b) =&gt; {\n  return a - b\n}\n\nexport {\n  add,\n  minus\n}&quot;</span>\n  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;names&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n    <span class="hljs-string">&quot;console&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;log&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;abc&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;a&quot;</span>\n  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;sourceRoot&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n<p>对里面每一个属性说明</p>\n<ul>\n<li><code>version</code>: 当前使用的版本，也是最新的第三版</li>\n<li><code>sources</code>: 从哪些文件转换过来的source-map和打包的代码(最初始的文件)</li>\n<li><code>names</code>: 转换前的变量和属性名称(如果使用的是development模式，就为空数组，也就不需要保留转换前的名称</li>\n<li><code>mappings</code>: source-map用来和源文件映射的信息(比如位置信息等)，一串base64 VLQ(veriable- length quantity可变长度值)编码</li>\n<li><code>file</code>: 打包后的文件(浏览器加载的文件)</li>\n<li><code>sourceContent</code>: 转换前的具体代码信息(和sources是对应的关系)</li>\n<li><code>sourceRoot</code>: 所有的sources相对的根目录</li>\n</ul>\n<p>目前webpack5为处理source map给我们提供了26种选项，我们可以查看官网<a href="https://webpack.docschina.org/configuration/devtool/">https://webpack.docschina.org/configuration/devtool/</a>，官网为处理source map的每一个选项都做了快慢比较和区别，下么我们介绍下几种在我们开发测试发布中主要用到的选项。</p>\n<p>首先介绍下三种不会出现source map的配置</p>\n<ul>\n<li><code>(none)</code> : devtool属性缺省，为production默认配置，不会生成source map</li>\n<li><code>eval</code> : 为development默认配置，它不会生成source map，但是在eval最后面添加 //# sourceURL= 注释，在我们调试时浏览器会跟给我们生成一些目录，方便我们调试</li>\n<li><code>false</code> : 不生产source map文件，也不会生成跟source map有关的一些内容</li>\n</ul>\n<p>下面再介绍能生成source map的选项</p>\n<h3 id="source-map">source-map</h3>\n<p>会生成一个bundle.js.map的source-map文件，在打包文件bundle.js最下面会有 <code>//# sourceMappingURL=bundle.js.map</code> 这样一条注释，它会帮我们指向source-map文件。并且在浏览器中打开错误能够定位到源代码的具体报错那一行，而且那一列开始报错也给我们指定出来了。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ed9f45ea21f420d9b8e3fc599327935~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<h3 id="eval-source-map">eval-source-map</h3>\n<p>该选项不会生成.map文件，但是source map会以DataURL的方式添加到evel最后面，如 <code>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64</code> 。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/227810330b5144af9615114e782c4699~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>同样的该配置也能定位到报错源代码具体的行和列位置</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5be5d9d705394a7da15c620e297d5195~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<h3 id="inline-source-map">inline-source-map</h3>\n<p>该选项也不会生成.map文件，但是它会在打包文件bundle.js最下面以DataURL方式添加到文件最底下，如 <code>//# sourceMappingURL=data:application/json;charset=utf-8;base64</code> 。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2d8f47ee0244d0285fa9f3614f80485~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>同样也能在浏览器中定位到源代码具体的行和列位置</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0c402522d1e4b35bba2ff8a0d17a401~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<h3 id="cheap-soure-map">cheap-soure-map</h3>\n<p>它跟source-map一样，会生成.map文件，也会在bundle.js最下面生成 <code>//# sourceMappingURL=bundle.js.map</code> 注释指向.map文件，不同的是一个低开销的生成方式，它没有列映射，因为在实际开发中我们定位到某一行就大概能分析出问题了。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c6fe4a08fac46669e2c6aecdd63ebee~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>但是这个选项有个问题，当我们使用loader对源码做了处理，该source map报错定位就处理了不那么好了，比如我们使用babel-loader处理我们的代码</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5c493c14541407d8657fe23a3e2477c~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>当我们重新定位报错位置后发现报错位置与源代码不符合了</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1f63d23f06e404a8ffaa910553db7a9~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>因此就出现了cheap-module-source-map配置。</p>\n<h3 id="cheap-module-source-map">cheap-module-source-map</h3>\n<p>该选择与cheap-source-map的区别是它会对使用loader的soucre map处理更好。我们还是使用babel-loader处理。重新打包后定位到报错位置可以看到现在报错位置和源码所在位置以完全符合。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f29dd1aa806450b84f18ef629610ee3~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<h3 id="hidden-source-map">hidden-source-map</h3>\n<p>该选项会生成source map文件，但是在bundle.js文件最下面 <code>//# sourceMappingURL=bundle.js.map</code> 这条注释会被删除，这时就引用不了source map文件，如果在bundle.js下面手动添加上面这条注释，就又会生效。</p>\n<h3 id="nosources-source-map">nosources-source-map</h3>\n<p>该选项会生成source map，在打包文件bundle.js下面也会有添加url注释，但是和source-map不同的是，bundle.js.map文件缺少了sourceContent属性</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/867ff06bab544d16bdcebb125485831b~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>因此只能产生报错信息，不能生成源文件。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3356bc9b781745048488b053031f2fb4~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>实际上webpack给了我们这么多的source map选项，是可以组合的，组合规则如下</p>\n<ul>\n<li><code>inline-|hidden-|eval</code>: 三个值时三选一</li>\n<li><code>nosources</code>: 可选值</li>\n<li><code>cheap</code>: 可选值，并且可以跟随 <code>module</code> 的值</li>\n</ul>\n<p>模式规则总结 <code>[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map</code> 。</p>\n<p>那我们在不同的环境下如何最优使用呢</p>\n<ul>\n<li><strong>开发阶段</strong> : 推荐使用 <code>source-map</code> 或者 <code>cheap-module-source-map</code></li>\n<li><ul>\n<li>这分别是vue和react使用的值，可以获取调试信息，方便快速开发</li>\n</ul>\n</li>\n<li><strong>测试阶段</strong> : 推荐使用 <code>source-map</code> 或者 <code>cheap-module-source-map</code></li>\n<li><ul>\n<li>测试阶段我们也希望在浏览器下看到正确的错误提示</li>\n</ul>\n</li>\n<li><strong>发布阶段</strong> : false、缺省值(不写)</li>\n</ul>\n',document.body.appendChild(s)}},function(s){var n;n=648,s(s.s=n)}]);
