"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["21448"],{17866:function(e,o,s){s.r(o),s.d(o,{metadata:()=>t,contentTitle:()=>p,default:()=>u,assets:()=>r,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"release-notes/nodejs/index","title":"Node.js Agent Release Notes","description":"Release history for 2024","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/nodejs/index.mdx","sourceDirName":"release-notes/nodejs","slug":"/release-notes/nodejs/","permalink":"/ja/release-notes/nodejs/","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/nodejs/index.mdx","tags":[],"version":"current","frontMatter":{"id":"index","title":"Node.js Agent Release Notes","displayed_sidebar":"releaseSidebar","hide_table_of_contents":true,"toc_min_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3","permalink":"/ja/release-notes/php/php-previous"},"next":{"title":"Node.js Agent v0.5.4","permalink":"/ja/release-notes/nodejs/nodejs-0_5_4"}}'),n=s("85893"),d=s("50065"),a=JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_0","ver":"v0.5.0","date":"2024-08-12","Lists":[{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> whatap\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u8A2D\u5B9A\u3059\u308B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<blockquote>\\n<p><strong>log_root</strong> <span class=\\"type\\">String</span> \u65E2\u5B9A\u5024\u306A\u3057</p>\\n</blockquote>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Node.js\u30D3\u30EB\u30C8\u30A4\u30F3\u95A2\u6570\u3067\u3042\u308B<code>fetch</code>\u306B\u5BFE\u3059\u308B\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u6A5F\u80FD\u3092\u8FFD\u52A0</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Redis\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u8FFD\u52A0(<a href=\\"https://www.npmjs.com/package/ioredis\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ioredis</a>)</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code>\u30D3\u30EB\u30C9\u30D5\u30A1\u30A4\u30EB\u306E\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u7121\u8996\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u540D\u79F0\u3092\u4FEE\u6B63</p>","details":"<ul>\\n<li><code>ignore_nextjs_build_file_enabled</code> \u2192 <code>ignore_build_file_enabled</code></li>\\n<li><code>ignore_nextjs_build_file_path</code> \u2192 <code>ignore_build_file_path</code></li>\\n</ul>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>  <code>auto_oname_prefix</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024\u304C<code>false</code>\u3067\u3082<code>true</code>\u3067\u9069\u7528\u3055\u308C\u308B\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_1","ver":"v0.5.1","date":"2024-08-28","Lists":[{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code>\u30DD\u30C3\u30C8(port)\u756A\u53F7\u3092\u8FFD\u52A0\u3057\u3066\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u540D(ONAME)\u3092\u751F\u6210\u3059\u308B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0(\u4F8B\u3001NODE-14-103-3000)</p>","details":"<blockquote>\\n<p><strong>oname_port_postfix_enabled</strong> <span class=\\"type\\">Boolean</span> \u65E2\u5B9A\u5024<code>false</code></p>\\n</blockquote>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code>\u30ED\u30B0\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u306E\u305F\u3081\u306E\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>logsink_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024<code>false</code></p>\\n<p>\u30ED\u30B0\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u306E\u6D3B\u6027\u5316\u6709\u7121\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p><strong>logsink_trace_txid_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024 <code>true</code></p>\\n<p>\u30ED\u30B0\u306B\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3ID\u3092\u633F\u5165\u3057\u3066\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3 \u30C8\u30EC\u30FC\u30B9\u306E\u30ED\u30B0\u30BF\u30D6\u306E\u8868\u793A\u6709\u7121\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024 <code>true</code></p>\\n<p>\u30ED\u30B0\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6700\u5927\u30B5\u30A4\u30BA\u306E\u5236\u9650\u6709\u7121\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_length</strong> <span class=\\"type\\">Number</span></p>\\n<p>\u65E2\u5B9A\u5024 <code>10,000</code></p>\\n<p>\u30ED\u30B0\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6700\u5927\u9577\u3055\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u5024\u306F\u3001<code>logsink_limit_content_enabled</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u304C<code>true</code>\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u5834\u5408\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002</p>\\n</li>\\n</ul>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>Global\u30D1\u30C3\u30B1\u30FC\u30B8\u306Efetch\u95A2\u6570\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u4E2D\u306B\u4F8B\u5916\u304C\u767A\u751F\u3057\u305F\u6642\u3001\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u51FA\u529B\u3055\u308C\u308B\u3088\u3046\u306B\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_2","ver":"v0.5.2","date":"2024-10-17","Lists":[{"ver":"v0.5.2","hash":"v052","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>SQL\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u4FEE\u6B63</p>","details":"<ul>\\n<li>\\n<p>SQL\u7167\u4F1A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u3001\u30A8\u30E9\u30FC\u30B9\u30BF\u30C3\u30AF\u3092\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306E\u4E0B\u90E8\u306B\u8868\u8A18\u3057\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p>\u4FEE\u6B63\u3055\u308C\u305FSQL\u30E2\u30B8\u30E5\u30FC\u30EB\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002 <strong>MySQL</strong>\u3001<strong>MariaDB</strong>\u3001<strong>PostgreSQL</strong>\u3001<strong>SQL Server</strong></p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_96","ver":"v0.4.96","date":"2024-05-30","Lists":[{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30B5\u30FC\u30D0\u3067\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u30C7\u30FC\u30BF\u3092\u9001\u4FE1\u3059\u308B\u969B\u3001\u30C7\u30FC\u30BF\u53CE\u96C6\u306E\u305F\u3081\u306Ewebsocket\u30D1\u30C3\u30B1\u30FC\u30B8\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3092\u8FFD\u52A0</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>ignore_nextjs_build_file_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024 <code>true</code></p>\\n<p><em>Next.js</em>\u30D3\u30EB\u30C9\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3059\u308B\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u53EF\u5426\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u5024\u3092<code>true</code>\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001<em>Next.js</em>\u30D3\u30EB\u30C9\u30D5\u30A1\u30A4\u30EB\u3092\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3057\u307E\u305B\u3093\u3002</p>\\n</li>\\n<li>\\n<p><strong>ignore_nextjs_build_file_path</strong> <span class=\\"type\\">String</span></p>\\n<p>\u65E2\u5B9A\u5024<code>/next/</code></p>\\n<p>\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3067\u9664\u5916\u3059\u308B<em>Next.js</em>\u30D3\u30EB\u30C9\u30D5\u30A1\u30A4\u30EB\u306E\u958B\u59CB\u30D1\u30B9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 <code>ignore_nextjs_build_file_enabled</code>\u5024\u304C<code>true</code>\u306E\u5834\u5408\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002 \u30B3\u30F3\u30DE(,)\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u8907\u6570\u306E\u30D1\u30B9\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">ignore_nextjs_build_file_path</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">/next/abc/,/next/def/</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3059\u308B\\" title=\\"\u30B3\u30D4\u30FC\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_sampling_enabled</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092<code>true</code>\u306B\u5909\u66F4</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> HTTP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3067socket\u30A8\u30E9\u30FC\u306B\u95A2\u3059\u308B\u7D71\u8A08\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3092\u7121\u8996\u3059\u308B\u3088\u3046\u306B\u4FEE\u6B63</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u7D50\u679C\u304C<b>Lost Connection</b>\u5834\u5408\u3001URL\u304C\u8868\u793A\u3055\u308C\u306A\u3044\u554F\u984C\u3092\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_98","ver":"v0.4.98","date":"2024-07-09","Lists":[{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> IP\u30A2\u30C9\u30EC\u30B9\u5225\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u7D71\u8A08\u3092\u53CE\u96C6\u3059\u308B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<blockquote>\\n<p><strong>stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>\u3001\u65E2\u5B9A\u5024<code>false</code></p>\\n</blockquote>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> License\u3001Server Host\u5024\u3092\u74B0\u5883\u5909\u6570\u3068<em>whatap.conf</em>\u30D5\u30A1\u30A4\u30EB\u306B\u540C\u6642\u9069\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u4FEE\u6B63</p>","details":"<p>\u74B0\u5883\u5909\u6570\u3068<em>whatap.conf</em>\u3059\u3079\u3066\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u9069\u7528\u3059\u308B\u3068\u3001\u74B0\u5883\u5909\u6570\u5024\u306B\u57FA\u3065\u3044\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002</p>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> ONODE NAME\u8A2D\u5B9A\u6642\u3001ONODE\u5024\u306E\u751F\u6210\u30ED\u30B8\u30C3\u30AF\u3092\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_4","ver":"v0.5.4","date":"2024-11-13","Lists":[{"ver":"v0.5.4","hash":"v054","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3068\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC\u3092\u76E3\u8996\u3059\u308B\u305F\u3081\u306E\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>profile_error_httpc_time_max</strong> <span class=\\"type\\">Number</span></p>\\n<p>\u65E2\u5B9A\u5024<code>10000</code></p>\\n<p>HTTPC\u5B9F\u884C\u6642\u9593\u304C\u6307\u5B9A\u3055\u308C\u305F\u5024\u3092\u8D85\u3048\u308B\u5834\u5408\u3001TOO SLOW\u30A8\u30E9\u30FC\u3067\u51E6\u7406\u3057\u307E\u3059\u3002 <code>0</code>\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u3092\u884C\u3044\u307E\u305B\u3093\u3002</p>\\n</li>\\n<li>\\n<p><strong>profile_error_sql_time_max</strong> <span class=\\"type\\">Number</span></p>\\n<p>\u65E2\u5B9A\u5024<code>30000</code></p>\\n<p>SQL\u5B9F\u884C\u6642\u9593\u304C\u8A2D\u5B9A\u3057\u305F\u5024\u3092\u8D85\u3048\u308B\u3068\u3001TOO SLOW\u30A8\u30E9\u30FC\u3067\u51E6\u7406\u3057\u307E\u3059\u3002<code>0</code>\u306B\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u3092\u884C\u3044\u307E\u305B\u3093\u3002</p>\\n</li>\\n<li>\\n<p><strong>profile_error_sql_fetch_max</strong> <span class=\\"type\\">Number</span></p>\\n<p>\u65E2\u5B9A\u5024<code>10000</code></p>\\n<p>SQL\u7D50\u679C\u4EF6\u6570\u304C\u8A2D\u5B9A\u3057\u305F\u5024\u3092\u8D85\u3048\u308B\u3068\u3001TOO MANY RECORDS\u30A8\u30E9\u30FC\u3067\u51E6\u7406\u3057\u307E\u3059\u3002 <code>0</code>\u306B\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u3092\u884C\u3044\u307E\u305B\u3093\u3002</p>\\n</li>\\n<li>\\n<p><strong>ignore_http_lost_connection</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024<code>false</code></p>\\n<p><code>true</code>\u306B\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001Lost connection\u30A8\u30E9\u30FC\u3092\u53CE\u96C6\u3057\u307E\u305B\u3093\u3002</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_95","ver":"v0.4.95","date":"2024-04-29","Lists":[{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u30C7\u30FC\u30BF\u3092\u5727\u7E2E\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<p><strong>profile_zip_enabled</strong> <span class=\\"type\\">Boolean</span></p>"},{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>SQL\u5909\u6570\u3001HTTP\u30AF\u30A8\u30EA\u306E\u7167\u4F1A\u306B\u5FC5\u8981\u306A\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30AD\u30FC\u304C\u4F5C\u6210\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u5909\u66F4</p>","details":"<p><em>paramkey.txt</em> \u2192 <em>security.conf</em></p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_97","ver":"v0.4.97","date":"2024-06-03","Lists":[{"ver":"v0.4.97","hash":"v0497","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code>Kubernetes\u74B0\u5883\u306E\u4F7F\u7528\u53EF\u5426\u3092\u74B0\u5883\u5909\u6570\u3068\u3057\u3066\u9069\u7528\u53EF\u80FD</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_86","ver":"v0.4.86","date":"2024-01-04","Lists":[{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_status_ignore</strong> <span class=\\"type\\">String</span></p>\\n<p>\u65E2\u5B9A\u5024<code>Empty</code></p>\\n<p>\u7121\u8996\u3059\u308B<code>HTTPC_ERROR</code>\u30B3\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u8907\u6570\u306E\u5024\u3092\u5BFE\u8C61\u3068\u3059\u308B\u5834\u5408\u306F\u3001\u30B3\u30F3\u30DE\uFF08,\uFF09\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">httpc_status_ignore</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">404,500</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3059\u308B\\" title=\\"\u30B3\u30D4\u30FC\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n<li>\\n<p><strong>httpc_status_ignore_set</strong> <span class=\\"type\\">String</span></p>\\n<p>\u65E2\u5B9A\u5024<code>Empty</code></p>\\n<p><code>whatap.error.HTTPC_ERROR</code>\u3092\u7121\u8996\u3057\u307E\u3059\u3002 \u8907\u6570\u306E\u5024\u3092\u5BFE\u8C61\u3068\u3059\u308B\u5834\u5408\u306F\u3001\u30B3\u30F3\u30DE(,)\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>\u30CE\u30FC\u30C8</div><div class=\\"admonitionContent_BuS1\\"><p><code>httpc_status_ignore_set=/a/b/c:400,/a/ab/c:404</code>\u306E\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u306E\u5834\u5408\u3001URL\u306F\u7D71\u8A08/\u30A8\u30E9\u30FC\u5206\u6790\u306B<code>HTPC_URL</code>\u306E\u5024\u3092\u5165\u529B\u3057\u307E\u3059\u3002</p></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MariaDB\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u304C\u3067\u304D\u306A\u3044\u554F\u984C\u3092\u4FEE\u6B63</p>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> SQL(MySQL\u3001SQL Server) \u30B3\u30CD\u30AF\u30B7\u30E7\u30F3\u60C5\u5831\u51FA\u529B\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_90","ver":"v0.4.90","date":"2024-02-05","Lists":[{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_not_found_ignore</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>\u65E2\u5B9A\u5024<code>false</code></p>\\n<p>Not Found\u30A8\u30E9\u30FC\u304C\u7279\u5B9A\u306E\u6642\u9593(<code>httpc_not_found_ignore_time</code>)\u306B50\u4EF6\u4EE5\u4E0A\u767A\u751F\u3059\u308B\u3068\u3001\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u691C\u51FA\u3092\u7121\u8996\u3057\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p><strong>httpc_not_found_ignore_time</strong> <span class=\\"type\\">Milisecond</span></p>\\n<p>\u65E2\u5B9A\u5024<code>300000</code></p>\\n<p><code>httpc_not_found_ignore</code>\u5024\u304C<code>true</code>\u3067\u3042\u308B\u5834\u5408\u3001Not Found\u30A8\u30E9\u30FC\u3092\u7121\u8996\u3059\u308B\u6642\u9593\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>\\n</li>\\n</ul>"},{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongoose\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0\u304C\u3067\u304D\u306A\u3044\u554F\u984C\u3092\u4FEE\u6B63</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_88","ver":"v0.4.88","date":"2024-01-11","Lists":[{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>trace_http_client_ip_header_key=x-forwarded-for</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u305F\u72B6\u614B\u3067\u30D8\u30C3\u30C0\u3067<code>x-forwarded-for</code>\u5024\u306B\u8907\u6570\u306EIP\u304C\u8EE2\u9001\u3055\u308C\u308B\u5834\u5408(\u30B3\u30F3\u30DE\u57FA\u6E96)\u3001\u6700\u521D\u306E\u5024\u306BIP\u3092\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u4FEE\u6B63</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> TCP\u3001UDP\u30BD\u30B1\u30C3\u30C8\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3092\u4FEE\u6B63</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>profile_http_header_enabled</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024\u304C<code>true</code>\u3067\u3042\u308C\u3070\u3001profile\u306Eheaders\u5024\u3092\u8868\u3059\u65B9\u5F0F\u3092\u4FEE\u6B63(JSON \u2192 key=value\\\\n)</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_89","ver":"v0.4.89","date":"2024-01-22","Lists":[{"ver":"v0.4.89","hash":"v0489","product":"Node.js Agent","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> ONODE\u306E\u8A2D\u5B9A\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63</li>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_94","ver":"v0.4.94","date":"2024-03-07","Lists":[{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <a href=\\"http://socket.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">socket.io</a>\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u8FFD\u52A0</p>","details":"<p><code>trace_sampling_enabled</code>\u3001<code>trace_sampling_tps</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 <code>trace_ignore_url_prefix</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u306B<code>/socket.io</code>\u7D4C\u8DEF\u3092\u8FFD\u52A0\u3057\u3066\u8FFD\u8DE1\u3067\u304D\u306A\u3044\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</p>","details":"<ul>\\n<li>\\n<p><strong>profile_http_header_ignore_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>\u65E2\u5B9A\u5024 <code>Cookie,cookie,accept,user-agent,referer</code></p>\\n<p>HTTP\u30D8\u30C3\u30C0\u30FC\u540D\u3092\u6307\u5B9A\u3057\u3066\u53CE\u96C6\u60C5\u5831\u304B\u3089\u9664\u5916\u3067\u304D\u307E\u3059\u3002 \u6307\u5B9A\u3057\u305FHTTP\u30D8\u30C3\u30C0\u30FC\u540D\u306E\u5024\u306F\u53CE\u96C6\u304B\u3089\u9664\u5916\u3055\u308C\u3001\'#\'\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002</p>\\n</li>\\n<li>\\n<p><strong>profile_http_parameter_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>\u8A2D\u5B9A\u3055\u308C\u305F\u30AD\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u60C5\u5831\u306E\u307F\u3092\u8A18\u9332\u3057\u307E\u3059\u3002 \u8907\u6570\u306E\u9805\u76EE\u3092\u767B\u9332\u3059\u308B\u5834\u5408\u306F\u3001\u30B3\u30F3\u30DE(,)\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u8A2D\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u60C5\u5831\u304C\u8A18\u9332\u3055\u308C\u307E\u3059\u3002</p>\\n</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>profile_http_parameter_enabled</code>\u30AA\u30D7\u30B7\u30E7\u30F3\u304C<code>true</code>\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u5834\u5408</p>","details":"<ul>\\n<li>HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306EBody\u30C7\u30FC\u30BF\u3092\u51FA\u529B\u3057\u306A\u3044\u3088\u3046\u306B\u4FEE\u6B63</li>\\n<li>HTTP\u30D1\u30E9\u30E1\u30FC\u30BF\u60C5\u5831\u3092\u6697\u53F7\u5316\u3057\u3001<em>paramkey.txt</em>\u5024\u3067\u5FA9\u53F7\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u4FEE\u6B63</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongoose\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u4F8B\u5916\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63</p>"}]}]');let c={id:"index",title:"Node.js Agent Release Notes",displayed_sidebar:"releaseSidebar",hide_table_of_contents:!0,toc_min_heading_level:2,isTranslationMissing:!1},p=void 0,r={},l=[{value:"Release history for 2024",id:"release-history-for-2024",level:2}];function i(e){let o={h2:"h2",section:"section",...(0,d.a)(),...e.components},{Head:s,ImportJson:t}=o;return!s&&h("Head",!0),!t&&h("ImportJson",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),"\n","\n",(0,n.jsxs)(o.section,{className:"remark-sectionize-h2",children:[(0,n.jsx)(o.h2,{id:"release-history-for-2024",children:"Release history for 2024"}),(0,n.jsx)(t,{filePath:a,sort:"date",category:"agent"})]})]})}function u(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function h(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,o,s){s.d(o,{Z:function(){return c},a:function(){return a}});var t=s(67294);let n={},d=t.createContext(n);function a(e){let o=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);