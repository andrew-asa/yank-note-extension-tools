(function(E){"use strict";function F(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var _=F(E);const i=globalThis.ctx;function p(e){globalThis.registerPlugin(e)}function m(e){i.action.getActionHandler("xterm.run")(e)}function L(){return i.editor.getEditor()}function k(){return i.editor.getMonaco()}function D(e,n){var t=L(),r=k();t.setPosition(new r.Position(e,n)),t.focus()}function a(){return i.editor.getEditor().getPosition().lineNumber}function O(){return i.editor.getEditor().getPosition().column}function f(){return i.editor.getEditor().getModel().getLineCount()}function l(e){return i.editor.getLineContent(e)}function w(){return l(a())}function S(){return i.storage.get("currentFile")}function c(e){i.editor.insert(e)}function s(e,n,t){i.editor.replaceLines(e,n,t)}function M(e,n){i.editor.replaceLine(e,n)}function A(){var e=a(),n=f();s(e,n,null)}function g(){var e=a(),n=l(e);n&&i.editor.replaceLine(e,n+`
`+n)}function C(){var e=a();if(e>1){var n=O(),t=e-1,r=l(t),u=l(e);s(t,e,u+`
`+r),D(t,n)}}function h(){var e=a(),n=f();if(e<n){var t=e+1,r=l(t),u=l(e);s(e,t,r+`
`+u)}}function N(){var e=`source ~/.bash_profile
conda activate  paddleenv
cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python
result=\`python - <<EOF
from python_tools.ocr.img_ocr import ImageOcr
ocr = ImageOcr()
ocr.ocr_clipboard_img()
EOF\` 
 echo $result 
exit`;m(e)}function T(){var e=`source ~/.bash_profile
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
exit`;m(e)}function U(e){i.doc.deleteDoc(e)}function Y(e){return i.utils.path.basename(e)}function B(e){return i.utils.path.dirname(e)}function I(e,n){return i.utils.path.resolve(e,n)}function P(){var e=w(),n=H(e),t=S();if(n.length>0&&t.path){var r=B(t.path),u=a();n.forEach(v=>{var b=v[0],d=v[2],y=I(r,d),R=Y(d);U({name:R,path:y,repo:t.repo,type:"file"}),e=e.replace(b,""),console.log("delete"+b+"-->"+d+"-->"+y)}),M(u,e)}}function H(e){const n=/!\[(.*?)\]\((.*?)\)/mg;let t;for(var r=[];(t=n.exec(e))!==null;)r.push(t);return r}function j(){p({name:"asa-enhance-insert-template",register:e=>{e.statusBar.tapMenus(n=>{n["asa-enhance-insert-template"]={id:"asa-enhance-insert-template",position:"left",title:"\u6A21\u677F",list:[{id:"asa-enhance-insert-template-new-line",type:"normal",title:"\u6362\u884C\u7B26",onClick:()=>{c("<br>")}},{id:"asa-enhance-insert-template-YYYY-MM-DD-HH:mm:ss",type:"normal",title:"\u5F53\u524D\u65F6\u95F4",onClick:()=>{c(_.default().format("YYYY-MM-DD HH:mm:ss"))}},{id:"asa-enhance-insert-template-week-day",type:"normal",title:"\u661F\u671F\u51E0",onClick:()=>{c("\u661F\u671F"+"\u5929\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D".charAt(new Date().getDay()))}}]}})}})}const o="asa-enhance";function K(){p({name:o+"plugin-fast-operation",register:e=>{e.statusBar.tapMenus(n=>{n[o+"plugin-fast-operation"]={id:o+"plugin-fast-operation",position:"left",title:"\u7F16\u8F91",list:[{id:o+"plugin-delete-after",type:"normal",title:"\u5220\u9664\u5149\u6807\u540E\u7684\u884C",onClick:()=>{A()}},{id:o+"plugin-delete-out-link-location-image",type:"normal",title:"\u5220\u9664\u5916\u94FE\u56FE\u7247",onClick:()=>{P()}},{id:o+"plugin-fast-orc",type:"normal",title:"\u7C98\u8D34\u677F\u56FE\u7247OCR",onClick:()=>{N()}},{id:o+"plugin-fast-table-ocr-md",type:"normal",title:"\u8868\u683COCR",onClick:()=>{T()}},{id:o+"plugin-fast-operation-duplicate-line",type:"normal",title:"\u590D\u5236\u4E00\u884C",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,"d"]),onClick:()=>{g()}},{id:o+"plugin-fast-operation-up-line",type:"normal",title:"\u884C\u4E0A\u79FB",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,e.command.Shift,"u"]),onClick:()=>{C()}},{id:o+"plugin-fast-operation-up-line",type:"normal",title:"\u884C\u4E0B\u79FB",subTitle:e.command.getKeysLabel([e.command.CtrlCmd,e.command.Shift,"d"]),onClick:()=>{h()}}]}}),e.action.registerAction({name:o+"plugin-fast-operation-duplicate-line",keys:[e.command.CtrlCmd,"d"],handler:()=>{g()}}),e.action.registerAction({name:o+"plugin-fast-operation-line-up",keys:[e.command.CtrlCmd,e.command.Shift,"u"],handler:()=>{C()}}),e.action.registerAction({name:o+"plugin-fast-operation-line-down",keys:[e.command.CtrlCmd,e.command.Shift,"d"],handler:()=>{h()}})}})}function q(){K(),j()}q()})(ctx.lib.dayjs);
