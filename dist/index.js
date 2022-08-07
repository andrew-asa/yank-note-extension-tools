(function(J){"use strict";function Q(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var ee=Q(J);const r=globalThis.ctx;function y(e){globalThis.registerPlugin(e)}function T(e){return e==null||e==null||e.length==0}function d(e){return!T(e)}function te(e,t){return e==null&&t==null?!0:d(e)&&d(t)?e.startsWith(t):!1}const ne=/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/,re="^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$",oe=/^[1-9]?[0-9]?(px|PX)?$/,R=/^[0-9]+$/;function f(e,t){let n;return t instanceof RegExp?n=t:n=new RegExp(t),e!=null&&e!=null?n.test(e):!1}function ie(e){return f(e,R)}var ae=Object.freeze(Object.defineProperty({__proto__:null,isEmpty:T,isNoEmpty:d,startWith:te,COLOR_REG:ne,COLOR_REG_STR:re,FONT_SIZE_PX_REG:oe,NO_NEGATIVE_INT_REG:R,testStr:f,isNoNegativeInteger:ie},Symbol.toStringTag,{value:"Module"}));function _(e){r.action.getActionHandler("xterm.run")(e)}function le(e,t,n){r.action.getActionHandler("xterm.run-code")(e,t,n)}function ue(e,t){r.api.runCode("sh",e).then(function(n){t&&t(n)})}function k(){return r.editor.getEditor()}function b(){return r.editor.getMonaco()}function L(e,t){var n=k(),o=b();n.setPosition(new o.Position(e,t)),n.focus()}function S(e,t){var n=b();return new n.Position(e,t)}function ce(){return r.editor.getEditor().getPosition()}function l(){return r.editor.getEditor().getPosition().lineNumber}function M(){return r.editor.getEditor().getPosition().column}function c(){return r.editor.getEditor().getModel().getLineCount()}function u(e){return r.editor.getLineContent(e)}function g(){return u(l())}function se(){return r.storage.get("currentRepo")}function B(){return r.storage.get("currentFile")}function p(e){r.editor.insert(e)}function I(e,t){r.editor.insertAt(S(t,1),e+`
`)}function de(e,t,n){r.editor.insertAt(S(e,t),n)}function m(e,t,n){r.editor.replaceLines(e,t,n)}function C(e,t){r.editor.replaceLine(e,t)}function fe(e){var t=l();C(t,e)}function w(){var e=l(),t=c();m(e,t,null)}function O(){var e=l(),t=u(e);t&&r.editor.replaceLine(e,t+`
`+t)}function F(){var e=l();if(e>1){var t=M(),n=e-1,o=u(n),a=u(e);m(n,e,a+`
`+o),L(n,t)}}function A(){var e=l(),t=c();if(e<t){var n=e+1,o=u(n),a=u(e);m(e,n,o+`
`+a)}}function ge(){return r.editor.getSelectionInfo().selectedLength>0}function pe(){return r.editor.getSelectionInfo()}function me(){return r.editor.getEditor().getSelection()}function Ce(e){const t=r.editor.getEditor().getSelection();r.editor.getEditor().executeEdits("",[{range:new(r.editor.getMonaco()).Range(t.startLineNumber,t.startColumn,t.endLineNumber,t.endColumn),text:e,forceMoveMarkers:!0}]),r.editor.getEditor().focus()}function he(){const e=r.editor.getEditor().getSelection();return r.editor.getEditor().getModel().getValueInRange(e)}function G(){var e=`source ~/.bash_profile
conda activate  paddleenv
cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python
result=\`python - <<EOF
from python_tools.ocr.img_ocr import ImageOcr
ocr = ImageOcr()
ocr.ocr_clipboard_img()
EOF\` 
 echo $result 
exit`;_(e)}function H(){var e=`source ~/.bash_profile
conda activate  paddleenv
cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python
result=\`python - <<EOF
from python_tools.ocr.img_ocr import ImageOcr
from python_tools.utils.ClipboardUtils import ClipboardUtils
from python_tools.utils.StringUtils import StringUtils
ocr = ImageOcr()
content = ocr.ocr_clipboard_img(print_in_console=False,copy_to_clipboard=False,colSequence=" | ",rowSequence=" |\\n| ")
content = "| " + content + " |"
ClipboardUtils.copyToClipboard(content)
print("--ocr result --")
print(content)
print("--ocr result --")
EOF\` 
 echo $result 
exit`;_(e)}function j(e){r.doc.deleteDoc(e)}function U(e){return r.utils.path.basename(e)}function Y(e){return r.utils.path.dirname(e)}function x(e,t){return r.utils.path.resolve(e,t)}function Ee(e){return e&&e.startsWith("./FILES/")}function z(){var e=g(),t=$(e),n=B();if(t.length>0&&n.path){var o=Y(n.path),a=l();t.forEach(v=>{var s=v[0],P=v[2],q=x(o,P),Be=U(P);j({name:Be,path:q,repo:n.repo,type:"file"}),e=e.replace(s,""),console.log("delete"+s+"-->"+P+"-->"+q)}),C(a,e)}}function ve(e){var t=/\!\[(.*?)\]\(.+\)/g;return e&&t.test(e)}function $(e){const t=/!\[(.*?)\]\((.*?)\)/mg;let n;for(var o=[];(n=t.exec(e))!==null;)o.push(n);return o}function ye(e,t,n){const o={};o[e]=n;const a={};a[e]=t,r.i18n.createI18n({en:o,"zh-CN":a})}function _e(){}function be(e,...t){try{e(...t)}catch{}}function Le(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,o="",a=0;a<e;a++)o+=t.charAt(Math.floor(Math.random()*n));return o}const h=/^#{1,6}\s/;function E(e){if(d(e)){let t=e.match(h);if(t!=null&&t.length>0)return t[0].trim().length}return 0}function W(){let e=l(),t=g();if(f(t,h)){let n=E(t),o=c(),a=e+1;for(;a<=o;a++){let v=u(a),s=E(v);if(s>0&&s<=n)break}N(n,a)}}function N(e,t){if(e>0){let n="#".repeat(e)+" ",o=c();t>=o?C(o,u(o)+`
`+n):t<0?I(n+`
`,1):I(n,t),L(t,n.length+1)}}function X(){let e=l(),t=g();if(f(t,h)){let n=E(t);N(n,e)}}var Se=Object.freeze(Object.defineProperty({__proto__:null,runShellCode:_,runCode:le,asynRunShellCode:ue,getEditor:k,getMonaco:b,setPosition:L,createPosition:S,getPosition:ce,getCurrentLineNumber:l,getCurrentColumnNumber:M,getLineCount:c,getLineContent:u,getCurrentLineContent:g,getCurrentRepo:se,getCurrentFile:B,insert:p,insertLineAt:I,insertAt:de,replaceLines:m,replaceLine:C,replaceCurrentLine:fe,deleteAfter:w,duplicateLine:O,moveLineUp:F,moveLineDown:A,isSelectText:ge,getSelectionInfo:pe,getSection:me,replaceSelect:Ce,getSelectText:he,clipboardOcr:G,clipboardTableOcr:H,deleteDoc:j,basename:U,dirname:Y,resolve:x,isOutLocationImage:Ee,deleteOutLinkLocationImage:z,containLink:ve,parseImgLink:$,createI18n:ye,global_resize:_e,run_no_exception:be,randomString:Le,HEADING_REG:h,getHeadingLevel:E,addPeerDirectoryAfter:W,addHeading:N,addPeerDirectoryBefore:X},Symbol.toStringTag,{value:"Module"}));function Ie(){y({name:"asa-enhance-insert-template",register:e=>{e.statusBar.tapMenus(t=>{t["asa-enhance-insert-template"]={id:"asa-enhance-insert-template",position:"left",title:"\u6A21\u677F",list:[{id:"asa-enhance-insert-template-new-line",type:"normal",title:"\u6362\u884C\u7B26",onClick:()=>{p("<br>")}},{id:"asa-enhance-insert-template-YYYY-MM-DD-HH:mm:ss",type:"normal",title:"\u5F53\u524D\u65F6\u95F4",onClick:()=>{p(ee.default().format("YYYY-MM-DD HH:mm:ss"))}},{id:"asa-enhance-insert-template-week-day",type:"normal",title:"\u661F\u671F\u51E0",onClick:()=>{p("\u661F\u671F"+"\u5929\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D".charAt(new Date().getDay()))}}]}})}})}const i="asa-enhance";function Oe(){y({name:i+"plugin-fast-operation",register:e=>{e.statusBar.tapMenus(t=>{t[i+"plugin-fast-operation"]={id:i+"plugin-fast-operation",position:"left",title:"\u5FEB\u6377\u64CD\u4F5C",list:[{id:i+"plugin-delete-after",type:"normal",title:"\u5220\u9664\u5149\u6807\u540E\u7684\u884C",onClick:()=>{w()}},{id:i+"plugin-delete-out-link-location-image",type:"normal",title:"\u5220\u9664\u5916\u94FE\u56FE\u7247",onClick:()=>{z()}},{id:i+"plugin-fast-operation-duplicate-line",type:"normal",title:"\u590D\u5236\u4E00\u884C",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,"d"]),onClick:()=>{O()}},{id:i+"plugin-fast-operation-up-line",type:"normal",title:"\u884C\u4E0A\u79FB",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,e.command.Shift,"u"]),onClick:()=>{F()}},{id:i+"plugin-fast-operation-up-line",type:"normal",title:"\u884C\u4E0B\u79FB",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,e.command.Shift,"d"]),onClick:()=>{A()}},{id:i+"plugin-fast-operation-up-add-peer-directory-after",type:"normal",title:"\u540E\u65B9\u540C\u7EA7\u76EE\u5F55",onClick:()=>{W()}},{id:i+"plugin-fast-operation-up-add-peer-directory-before",type:"normal",title:"\u524D\u65B9\u540C\u7EA7\u76EE\u5F55",onClick:()=>{X()}}]}}),e.action.registerAction({name:i+"plugin-fast-operation-duplicate-line",keys:[e.command.CtrlCmd,"d"],handler:()=>{O()}}),e.action.registerAction({name:i+"plugin-fast-operation-line-up",keys:[e.command.CtrlCmd,e.command.Shift,"u"],handler:()=>{F()}}),e.action.registerAction({name:i+"plugin-fast-operation-line-down",keys:[e.command.CtrlCmd,e.command.Shift,"d"],handler:()=>{A()}})}})}function D(e){return document.getElementById(e)}function K(e){var t=D(e);return t?t.parentNode:null}function Fe(e){var t=K(e);return t?t.firstChild:null}function Ae(e,t){var n=document.createElement(e);return n.setAttribute("id",t),n}function Ne(e){return D(e)!=null}function De(e){let t=document.createElement("div");if(t.innerHTML=e,Z(t==null?void 0:t.firstChild)){let n=document.createElement("span");return n.innerHTML=e,n}else return t.firstChild}function V(e){return e?!!e.style:!1}function Z(e){return!V(e)}var Pe=Object.freeze(Object.defineProperty({__proto__:null,getElementById:D,getParentById:K,getParentFirstChildById:Fe,createIdElement:Ae,existIdElement:Ne,htmlStrToSpanDom:De,haveStyleAttr:V,haveNoStyleAttr:Z},Symbol.toStringTag,{value:"Module"}));const Te=Object.freeze({base_dom:Pe,base_utils:Se,string_utils:ae});function Re(){console.log("installGhost");try{Object.defineProperty(window,"ghost",{configurable:!1,writable:!1,value:Te})}catch{console.log("error installGhost")}console.log("success installGhost")}function ke(){y({name:i+"plugin-ocr-operation",register:e=>{e.statusBar.tapMenus(t=>{t[i+"plugin-ocr-operation"]={id:i+"plugin-ocr-operation",position:"left",title:"OCR",list:[{id:i+"paste-img-orc",type:"normal",title:"\u7C98\u8D34\u677F\u56FE\u7247OCR",onClick:()=>{G()}},{id:i+"paste-img-table-ocr-md",type:"normal",title:"\u8868\u683COCR",onClick:()=>{H()}}]}})}})}function Me(){Oe(),ke(),Ie(),Re()}Me()})(ctx.lib.dayjs);
