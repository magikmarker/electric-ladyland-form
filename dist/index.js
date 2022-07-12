var $e=Object.create;var H=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var we=Object.getOwnPropertyNames;var Ne=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty;var Ee=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},ae=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of we(t))!Ce.call(e,n)&&n!==r&&H(e,n,{get:()=>t[n],enumerable:!(a=ke(t,n))||a.enumerable});return e};var O=(e,t,r)=>(r=e!=null?$e(Ne(e)):{},ae(t||!e||!e.__esModule?H(r,"default",{value:e,enumerable:!0}):r,e)),Oe=e=>ae(H({},"__esModule",{value:!0}),e);var Pe={};Ee(Pe,{ElectricLadylandForm:()=>Se,formActionFunction:()=>ne,formLoaderFunction:()=>ie,stringValidator:()=>xe,validation:()=>ee,validationPatterns:()=>N});module.exports=Oe(Pe);function z({formBlueprint:e,body:t,context:r}){var l;function a(s){var u,d,c;let m;if((s.type==="email"||s.type==="password"||s.type==="text"||s.type==="textarea"||s.type==="radio"||s.type==="select"||s.type==="hidden"||s.type==="stateful-radio")&&(m=(d=(u=t.get(`${s.name}`))==null?void 0:u.toString())!=null?d:s.initialValue),s.type==="checkbox"){let p=(c=t.get(`${s.name}`))==null?void 0:c.toString();if(!p)return;m=p}let o=[];(s.type==="text"||s.type==="textarea"||s.type==="email"||s.type==="password")&&!m&&s.required&&o.push("This field is required"),typeof s=="object"&&m&&(r[`${s.name}`]={value:m,errors:o}),s.type==="stateful-radio"&&s.dependentChildren.forEach(p=>{typeof p<"u"&&p.forEach(g=>{g&&a(g)})}),s.type==="checkbox-group"&&s.checkboxes.forEach(p=>{delete r[`${p.name}`],a(p)})}let n=r.currentStep;for(let s of(l=e[n])==null?void 0:l.fields)s&&a(s)}function Q({context:e,formBlueprint:t}){var l,s,m;let r=!1,a=e.currentStep,n=[];for(let o of(l=t[a])==null?void 0:l.fields)e&&Le(o,n,e);for(let o of n)if(((m=(s=e[`${o}`])==null?void 0:s.errors)==null?void 0:m.length)>=1&&(r=!0),r)return!0;return!1}function Le(e,t,r){if(t.push(e.name),e.type==="stateful-radio"){let a=e.options.indexOf(r[`${e.name}`].value);e.dependentChildren[a].forEach(n=>{n&&t.push(n.name)})}}async function W({handleDataFn:e,context:t,successRedirectPath:r,session:a,request:n,formUtilitiesFromRemixApp:l}){let{commitSession:s,redirect:m,json:o}=l,u=await e(t,n),[d,c]=u;return d?(t={},t.dataHandlerSuccessMessage=c,t.dataHandlerErrorMessage="",a.set("context",t),m(r,{headers:{"Set-Cookie":await s(a)}})):(t.dataHandlerSuccessMessage="",t.dataHandlerErrorMessage=c,a.set("context",t),o({},{headers:{"Set-Cookie":await s(a)}}))}async function X({operationType:e,formBlueprint:t,context:r,session:a,pathname:n,redirect:l,body:s,commitSession:m}){var d,c,p;let o=(d=t[r==null?void 0:r.currentStep])==null?void 0:d.fields.find(g=>g.type==="expandable-list"),u=(p=(c=r==null?void 0:r[o.name])==null?void 0:c.value)!=null?p:[];if(e==="add-item-to-list"){let g={};o.listItemStructure.forEach(k=>{g[k.name]={value:s.get(k.name),errors:[]}}),u.push(g)}else if(e==="edit-list-item"){let g=s.get("index-to-change");o.listItemStructure.forEach(k=>{u[Number(g)][k.name]={value:s.get(k.name),errors:[]}})}else if(e==="delete-list-item"){let g=s.get("index-to-delete");u.splice(Number(g),1)}return a.set("context",{...r,[o.name]:{value:u,errors:[]}}),l(n,{headers:{"Set-Cookie":await m(a)}})}function Y({body:e}){return!!e.get("given-name")}function q({context:e,formBlueprint:t}){if(t.length===1)return"end";let r=t.length;return e.currentStep===0?"beginning":Number(e.currentStep)+1===r?"end":"middle"}function U(e){let t=e.length,r="";for(let a=0;a<t;a++){let n=e.charCodeAt(a);n===8216||n===8217?r+="'":r+=e[a]}return r}function G({formField:e,context:t}){if(e.type!=="hidden"){if(e.type==="text"||e.type==="textarea"||e.type==="email"||e.type==="password"){let r=t[`${e.name}`].value;e.validation.patterns.forEach((a,n)=>{!Ie({value:r,regex:a})&&!t[`${e.name}`].errors.includes(e.validation.messages[n])&&t[`${e.name}`].errors.push(e.validation.messages[n])})}if(e.type==="stateful-radio"){let r=t[`${e.name}`].value,{dependentChildren:a}=e,n=e.options.indexOf(r);typeof a=="object"&&a[n].forEach(l=>{typeof l<"u"&&G({context:t,formField:l})})}}}function Ie({value:e,regex:t}){let r=new RegExp(`${t}`,"igm");return e=U(e),r.test(e)}async function ne({request:e,formBlueprint:t,handleDataFn:r,successRedirectPath:a,formUtilitiesFromRemixApp:n}){var x,w,j;let{commitSession:l,getSession:s,destroySession:m,redirect:o}=n,u="basic";t.length>1?u="multipart":u="basic";let d=await s(e.headers.get("Cookie")),{pathname:c}=new URL(e.url),p=(x=d.get("context"))!=null?x:{};if(u==="multipart"&&Object.keys(p).length<1){let{pathname:v}=new URL(e.url);return console.log("No context found in session, redirecting to start"),o(v,{headers:{"Set-Cookie":await m(d)}})}let g=await e.formData();if(Y({body:g}))return o("/");let E=g.get("operation-type");if(E)return await X({operationType:E,formBlueprint:t,context:p,session:d,commitSession:l,pathname:c,body:g,redirect:o});let L=(j=(w=g.get("submit-type"))==null?void 0:w.toString())!=null?j:"";if(u==="multipart"&&L==="back")return p.currentStep-=1,d.set("context",p),o(c,{headers:{"Set-Cookie":await l(d)}});if(await z({formBlueprint:t,body:g,context:p}),!t[p.currentStep].fields)throw new Error("No fields found in formBlueprint");t[0].fields.forEach(v=>{G({context:p,formField:v})});let T={};for(let v in p)T[v]=p[v].value;if(d.set("context",p),!Q({context:p,formBlueprint:t})){let v=q({formBlueprint:t,context:p});return p.formStage=v,u==="basic"?W({request:e,handleDataFn:r,context:p,successRedirectPath:a,formUtilitiesFromRemixApp:n,session:d}):v==="end"&&L==="submit"?W({handleDataFn:r,context:p,successRedirectPath:a,formUtilitiesFromRemixApp:n,session:d,request:e}):(p.currentStep+=1,d.set("context",p),o(c,{headers:{"Set-Cookie":await l(d)}}))}return o(c,{headers:{"Set-Cookie":await l(d)}})}function _({formBlueprint:e,context:t}){if(!t)return{};let r=!1;for(let a of e)for(let n of a==null?void 0:a.fields){if(r)return{};r=oe({field:n,context:t})}return t}function oe({field:e,context:t}){if(e.type==="checkbox-group")return!1;let r=t[`${e.name}`];return typeof(r==null?void 0:r.value)!="string"&&typeof(r==null?void 0:r.value)!="object"?!0:(e.type==="stateful-radio"&&e.dependentChildren.forEach(a=>{a.forEach(n=>{n&&oe({field:n,context:t})})}),!1)}function J({formBlueprint:e}){let t={};for(let r of e)for(let a of r==null?void 0:r.fields)a&&se({field:a,context:t});return t.currentStep=0,t}function se({field:e,context:t}){e.type!=="checkbox-group"&&e.type!=="expandable-list"?t[`${e.name}`]={value:e.initialValue||"",errors:[]}:e.type==="checkbox-group"?e.checkboxes.forEach(r=>{r.initialValue&&(console.log("Check yourself before you wreck yourself"),t[`${r.name}`]={value:r.initialValue||"",errors:[]})}):e.type==="expandable-list"&&(t[`${e.name}`]={value:e.initialValue||[],errors:[]}),e.type==="stateful-radio"&&e.dependentChildren.forEach(r=>{r.forEach(a=>{typeof a<"u"&&se({field:a,context:t})})})}async function ie({request:e,formBlueprint:t,formUtilitiesFromRemixApp:r}){var d,c,p;let{commitSession:a,getSession:n,destroySession:l,json:s}=r,m=await n(e.headers.get("Cookie")),o=m.get("context");o=_({formBlueprint:t,context:o}),Object.keys(o).length<1&&(o=J({formBlueprint:t})),o.currentStep=(d=o==null?void 0:o.currentStep)!=null?d:0,o.currentStep<0&&(o.currentStep=0);let u=q({context:o,formBlueprint:t});return o.currentStep>0&&Object.keys(o).length<1?s({},{headers:{"Set-Cookie":await l(m)}}):(o.formStage=u,o.nextButtonText=(c=t[o.currentStep])==null?void 0:c.nextButtonText,o.backButtonText=(p=t[o.currentStep])==null?void 0:p.backButtonText,m.set("context",o),{context:o,formStructure:t[o.currentStep],commitSession:a,session:m})}var y=O(require("react"));var F=O(require("react"));var le=O(require("react"));function me({fieldContext:e,fieldBlueprint:t}){var n,l;let r=(n=t.initialValue)!=null?n:"",a=(l=e==null?void 0:e.value)!=null?l:r;return le.default.createElement("input",{type:"hidden",name:t.name,value:a})}var P=O(require("react"));var h=O(require("react"));function Ae({className:e,children:t}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("span",{className:`el-form-field-label${e?" "+e:""}`},t))}function Ve({children:e}){return e?h.default.createElement("p",{className:"el-form-field-description"},e):null}function De({fieldErrors:e,fieldVisited:t}){return h.default.createElement(h.default.Fragment,null,e.length>=1&&t?e.map(r=>e.length===1?h.default.createElement("div",{className:"el-field-error-text",key:r},r):h.default.createElement("div",{className:"el-field-error-text",key:r},"- ",r)):null)}function S({fieldBlueprint:e,fieldErrors:t,fieldVisited:r}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",{htmlFor:e.name,key:e.name},h.default.createElement(Ae,null,e.label)),h.default.createElement(Ve,null,e.description),t&&r?De({fieldErrors:t,fieldVisited:r}):null)}function I({className:e,children:t}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:`el-radio-or-checkbox-wrapper${e?" "+e:""}`},t))}function A({className:e,children:t,htmlFor:r}){return h.default.createElement("label",{htmlFor:r,className:`el-radio-or-checkbox-label${e?" "+e:""}`},t)}function V(e){let t=e.split("-");for(let r=0;r<t.length;r++)t[r]=t[r][0].toUpperCase()+t[r].slice(1);return t.join(" ")}function K({e,fieldValidation:t,setFieldErrors:r,fieldErrors:a}){console.log({validation:t,fieldErrors:a});let n=!0;t.patterns.forEach(async(l,s)=>{var d;let m=new RegExp(l,"gim"),o=U((d=e==null?void 0:e.currentTarget)==null?void 0:d.value),u=m.test(o);if(u||(n=!1),u){let c=a.indexOf(t.messages[s]);c>-1&&a.splice(c,1)}else a.includes(t.messages[s])||r([...a,t.messages[s]])}),n&&r([])}function pe({fieldBlueprint:e,fieldContext:t,remixBrowserUtils:r}){var p,g;let{useState:a}=r,n=[],l=!1;(e.type==="email"||e.type==="password"||e.type==="text"||e.type==="textarea")&&t!=null&&t.errors&&(n=t==null?void 0:t.errors,(t==null?void 0:t.errors.length)>=1&&(l=!0));let[s,m]=a(n),[o,u]=a(l),d=(p=e.initialValue)!=null?p:"",c=(g=t==null?void 0:t.value)!=null?g:d;return{fieldErrors:s,fieldVisited:o,setFieldErrors:m,setFieldVisited:u,defaultValue:c}}function ue({fieldBlueprint:e,fieldContext:t,className:r,remixBrowserUtils:a}){let{defaultValue:n,fieldErrors:l,setFieldErrors:s,fieldVisited:m,setFieldVisited:o}=pe({fieldBlueprint:e,fieldContext:t,remixBrowserUtils:a});return P.default.createElement(P.default.Fragment,null,S({fieldBlueprint:e,fieldErrors:l,fieldVisited:m}),e.type==="text"||e.type==="password"||e.type==="email"?P.default.createElement("input",{"data-test":e.name,name:e.name,id:e.name,className:`el-text-input${r?" "+r:""}`,required:e.required,defaultValue:n,placeholder:e.placeholder,onBlur:()=>o(!0),onChange:u=>{K({e:u,setFieldErrors:s,fieldErrors:l,fieldValidation:e.validation})},pattern:e.validation.browserPattern,title:e.validation.browserMessage,type:e.type,autoCorrect:"false",autoComplete:"false"}):e.type==="textarea"?P.default.createElement("textarea",{name:e.name,id:e.name,"data-test":e.name,className:"el-text-input",required:e.required,rows:5,defaultValue:n,placeholder:e.placeholder,onBlur:()=>o(!0),onChange:u=>{K({e:u,setFieldErrors:s,fieldErrors:l,fieldValidation:e.validation})}}):null)}function de({fieldBlueprint:e,fieldContext:t}){return React.createElement(React.Fragment,null,S({fieldBlueprint:e}),e.options.map(r=>{let a=e.initialValue;t!=null&&t.value&&(a=t.value);let n=V(r);return React.createElement(I,{key:`${e.name}-${r}`},React.createElement("input",{"data-test":`${e.name}-${r}`,key:r,type:"radio",id:`${e.name}-${r}`,name:e.name,value:r,autoComplete:"off",defaultChecked:r===a}),React.createElement(A,{className:`ml-2
              `,htmlFor:`${e.name}-${r}`},n))}))}function ce({fieldBlueprint:e,context:t}){return React.createElement(React.Fragment,null,S({fieldBlueprint:e}),e.checkboxes.map(r=>React.createElement(I,{key:r.name},React.createElement("input",{"data-test":`${r.name}-${r.value}`,key:r.name,type:"checkbox",id:r.name,name:r.name,value:r.value,autoComplete:"off",defaultChecked:t==null?void 0:t[r.name]}),React.createElement(A,{className:`ml-2
              `,htmlFor:r.name},r.label))))}var i=O(require("react")),Z=require("@reach/dialog"),ye=require("react-icons/fi");var fe=require("react-icons/io5");function be({fieldBlueprint:e,fieldContext:t,remixBrowserUtils:r}){let{useState:a,useEffect:n}=r,l=r.useSubmit(),[s,m]=a(!1),[o,u]=a(void 0),[d,c]=a(""),[p,g]=a([]),k=()=>m(!0),E=()=>m(!1);n(()=>{g(t==null?void 0:t.value)},[t,p]);let{listItemStructure:L}=e,T={};return L.forEach(b=>{b.showOnMobileTable&&(T[b.name]=b)}),i.default.createElement("div",{className:"el-field-item"},S({fieldBlueprint:e}),i.default.createElement("button",{className:"expand-click-target el-form-button el-form-add-item-button",onClick:b=>{b.preventDefault(),u(void 0),c(""),k()}},i.default.createElement("span",{className:"el-form-left-icon"},i.default.createElement(ye.FiPlusCircle,null)),e.addItemLabel),(p==null?void 0:p.length)>0&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"list-items-table-wrapper"},i.default.createElement("table",null,i.default.createElement("thead",null,i.default.createElement("tr",{className:"lit-row"},L.map(b=>Object.keys(T).includes(b.name)?i.default.createElement("th",{className:"lit-cell","data-flex":b.tableFlex,"data-align-text":b.alignText,key:b.name},b.label):null),i.default.createElement("th",{className:"lit-cell","data-flex":3},"\xA0"),i.default.createElement("th",{className:"lit-cell","data-flex":3},"\xA0"))),i.default.createElement("tbody",null,p.map((b,x)=>i.default.createElement("tr",{className:"lit-row",key:x},Object.keys(T).map((w,j)=>{var re;let v,te;return L.forEach(B=>{B.name===w&&(v=B.tableFlex,te=B.alignText)}),i.default.createElement("th",{className:"lit-cell","data-flex":v,"data-align-text":te,key:`${b[w]}-${j}`},(re=b[w])==null?void 0:re.value)}),i.default.createElement("th",{className:"lit-cell","data-align-text":"right","data-flex":3},i.default.createElement("button",{className:"edit-item-button expand-click-target","data-test":`edit-${x}`,onClick:w=>{w.preventDefault(),u(x),c("edit-item"),k()}},"Edit")),i.default.createElement("th",{className:"lit-cell","data-align-text":"right","data-flex":3},i.default.createElement("button",{className:"delete-item-button expand-click-target","data-test":`delete-${x}`,onClick:w=>{w.preventDefault(),u(x),c("delete-item"),k()}},"Delete")))))))),i.default.createElement(Z.DialogOverlay,{isOpen:s,onDismiss:E},i.default.createElement(Z.DialogContent,{"aria-label":e.addOrEditItemModalLabel},i.default.createElement("div",{className:"modal-content-wrapper"},i.default.createElement("button",{className:"close-modal-button expand-click-target",onClick:E},i.default.createElement("span",{className:"close-icon-wrapper"},i.default.createElement(fe.IoClose,{role:"img"})),i.default.createElement("span",{className:"visually-hidden"},"Close Modal")),d==="delete-item"?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"modal-label modal-delete-item-label"},"Delete Item"),i.default.createElement("span",{className:"block h-3"}),i.default.createElement("p",{className:"confirm-delete-text"},"Are you sure you want to delete item"," ",p.map(b=>{var x;return b===o?(x=p[o][Object.keys(p[o])[0]])==null?void 0:x.value:null}),"?"),i.default.createElement("span",{className:"block h-6"}),i.default.createElement("div",{className:"flex items-center"},i.default.createElement("button",{className:"el-form-button el-form-button-neutral expand-click-target","data-test":"cancel",onClick:()=>{E()}},"Cancel"),i.default.createElement(r.Form,{method:"post",onSubmitCapture:b=>{l(b.currentTarget),E()}},i.default.createElement("input",{type:"hidden",name:"operation-type",value:"delete-list-item"}),i.default.createElement("input",{type:"hidden",name:"index-to-delete",value:o}),i.default.createElement("button",{className:"el-form-button el-form-button-danger expand-click-target","data-test":"confirm-delete",type:"submit"},"Confirm Delete")))):i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"modal-label modal-add-item-label"},typeof o=="number"?e.editItemLabel:e.addItemLabel),i.default.createElement("span",{className:"block h-8"}),i.default.createElement(r.Form,{reloadDocument:!0,method:"post",onSubmitCapture:b=>{l(b.currentTarget),E()}},d==="edit-item"?i.default.createElement(i.default.Fragment,null,i.default.createElement("input",{type:"hidden",name:"operation-type",value:"edit-list-item"}),i.default.createElement("input",{type:"hidden",name:"index-to-change",value:o})):i.default.createElement("input",{type:"hidden",name:"operation-type",value:"add-item-to-list"}),L.map(b=>i.default.createElement(D,{remixBrowserUtils:r,context:typeof o=="number"?t==null?void 0:t.value[o]:t,key:b.name,field:b})),i.default.createElement("span",{className:"block h-4"}),i.default.createElement("button",{className:"el-form-button el-form-add-item-button expand-click-target",type:"submit"},"Confirm")))))))}var $=O(require("react"));function ge({fieldBlueprint:e,context:t,remixBrowserUtils:r}){let{useState:a}=r,n=0;e.options.forEach((m,o)=>{var d,c;((c=(d=t[e.name])==null?void 0:d.value)!=null?c:e.initialValue)===m&&(n=o)});let[l,s]=a(n);return $.default.createElement($.default.Fragment,null,S({fieldBlueprint:e}),$.default.createElement("div",{className:"el-field-item"},e.options.map((m,o)=>{let u=V(m);return o===l?$.default.createElement(I,{key:m},$.default.createElement("input",{"data-test":`${e.name}-${m}`,type:"radio",id:`${e.name}-${m}`,name:e.name,value:m,onChange:()=>{s(o)},checked:!0,autoComplete:"off"}),$.default.createElement(A,{htmlFor:`${e.name}-${m}`},u)):$.default.createElement(I,{key:m},$.default.createElement("input",{"data-test":`${e.name}-${m}`,type:"radio",id:`${e.name}-${m}`,name:e.name,value:m,onChange:()=>{s(o)},autoComplete:"off"}),$.default.createElement(A,{htmlFor:`${e.name}-${m}`},u))})),e.dependentChildren[l].map(m=>m?$.default.createElement(D,{remixBrowserUtils:r,context:t,key:m.name,field:m}):null))}var C=O(require("react"));var he=require("react-icons/fa");function Fe({fieldBlueprint:e,fieldContext:t,remixBrowserUtils:r}){let{useState:a}=r,n=e.initialValue;t!=null&&t.value&&(n=t.value);let[l,s]=a(n);return C.default.createElement(C.default.Fragment,null,S({fieldBlueprint:e}),C.default.createElement("div",{className:"el-select-wrapper"},C.default.createElement("select",{className:"el-native-select",id:e.name,value:l,onChange:m=>s(m.target.value),name:e.name},e.options.map(m=>{let o=V(m);return C.default.createElement("option",{key:m,value:m},o)})),C.default.createElement("div",{className:"el-select-presentational"},V(l),C.default.createElement("div",{className:"el-select-icon-wrapper"},C.default.createElement(he.FaChevronDown,null)))))}function D({field:e,context:t,remixBrowserUtils:r}){return e.type==="hidden"?F.default.createElement(me,{fieldContext:t[e.name],fieldBlueprint:e}):e.type==="text"||e.type==="textarea"||e.type==="password"||e.type==="email"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ue,{remixBrowserUtils:r,fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="radio"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(de,{fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="select"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(Fe,{remixBrowserUtils:r,fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="checkbox-group"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ce,{fieldBlueprint:e,context:t})):e.type==="expandable-list"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(be,{remixBrowserUtils:r,fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="stateful-radio"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ge,{remixBrowserUtils:r,fieldBlueprint:e,context:t})):null}var M=require("react-icons/fa");function Se({context:e,formStructure:t,action:r,submitText:a="Submit",reloadDocument:n=!1,remixBrowserUtils:l}){return y.default.createElement("div",{className:"el-form-wrapper"},y.default.createElement(ve,{RemixFormFromApplication:l==null?void 0:l.Form,reloadDocument:n,action:r},y.default.createElement(Te,null),t.fields.map(s=>y.default.createElement(D,{remixBrowserUtils:l,field:s,context:e,key:s.name})),e.dataHandlerErrorMessage&&e.formStage==="end"?y.default.createElement(y.default.Fragment,null,y.default.createElement("div",{className:"font-display text-lg font-semibold text-danger-5"},e.dataHandlerErrorMessage),y.default.createElement("span",{className:"block h-6"})):null,y.default.createElement("div",{className:"forward-button-wrapper mt-10 flex w-full"},(e.formStage==="beginning"||e.formStage==="middle")&&y.default.createElement(R,{dataTest:"next",className:"el-form-button-forward",name:"submit-type",type:"submit",value:"next"},e.nextButtonText,y.default.createElement("span",{className:"el-form-right-icon"},y.default.createElement(M.FaChevronRight,{"aria-hidden":"true"}))),e.formStage==="end"&&y.default.createElement(R,{dataTest:"submit",className:"el-form-button-forward",name:"submit-type",type:"submit",value:"submit"},a,y.default.createElement("span",{className:"el-form-right-icon"},y.default.createElement(M.FaChevronRight,{"aria-hidden":"true"}))))),(e.formStage==="middle"||e.formStage==="end")&&e.currentStep>0?y.default.createElement(ve,{RemixFormFromApplication:l==null?void 0:l.Form},y.default.createElement(R,{dataTest:"back",className:"el-form-button-back",name:"submit-type",type:"submit",value:"back"},y.default.createElement("span",{className:"el-form-left-icon"},y.default.createElement(M.FaChevronLeft,{"aria-hidden":"true"})),e.backButtonText)):null)}function ve({children:e,action:t,reloadDocument:r=!1,RemixFormFromApplication:a}){return a?r?y.default.createElement(a,{reloadDocument:!0,action:t,method:"post"},e):y.default.createElement(a,{action:t,method:"post"},e):y.default.createElement("form",{method:"post",action:t},e)}function Te(){return y.default.createElement(y.default.Fragment,null,y.default.createElement("input",{className:"visually-hidden",type:"text",name:"given-name",id:"given-name"}),y.default.createElement("label",{className:"visually-hidden",htmlFor:"given-name"},"Given Name"))}function R({children:e,name:t,className:r,value:a,type:n="submit",dataTest:l}){return y.default.createElement("button",{"data-test":l,className:`el-form-button${r?" "+r:""}`,name:t,type:n,value:a},e)}var N={phoneNumber:"^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$",email:"^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",postalCode:"^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\\s?[0-9][A-Z][0-9]$",password:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%^&*])(?=.{8,}).*$"},f={letters:"A-Za-z",numbers:"0-9",spaces:"\\s",dotsAndCommas:"\\.\\,",punctuation:`"'!\\-@#$%*()|;:,./?`,minLength5:"^.{5,}$"},ee={phone:{browserPattern:N.phoneNumber,browserMessage:"valid phone number with area code",patterns:[N.phoneNumber],messages:["Provide a valid phone number with area code"]},email:{browserPattern:N.email,browserMessage:"valid email address",patterns:[N.email],messages:["Please provide a valid email address"]},postalCode:{browserPattern:N.postalCode,browserMessage:"valid postal code",patterns:[N.postalCode],messages:["Please provide valid postal code"]},password:{browserPattern:N.password,browserMessage:"letters, numbers, and special characters",patterns:[N.password],messages:["Letters, numbers, and special characters are required"]},sentences:{browserPattern:`^[${f.letters}${f.spaces}${f.numbers}${f.punctuation}]+$`,browserMessage:"letters, numbers, and special characters",patterns:[`^[${f.letters}${f.spaces}${f.numbers}${f.punctuation}]{0,}$`],messages:["Only letters, numbers, and basic punctuation allowed"]},lettersOnly:{browserPattern:`^[${f.letters}]+$`,browserMessage:"letters only",patterns:[`^[${f.letters}${f.spaces}]{0,}$`],messages:["Only letters allowed"]},lettersAndSpaces:{browserPattern:`^[${f.letters}${f.spaces}]+$`,browserMessage:"letters and spaces only",patterns:[`^[${f.letters}${f.spaces}]{0,}$`],messages:["Only letters and spaces allowed"]},numbersOnly:{browserPattern:`^[${f.numbers}${f.dotsAndCommas}]+$`,browserMessage:"numbers only",patterns:[`^[${f.numbers}${f.dotsAndCommas}]{0,}$`],messages:["Only numbers allowed"]},numbersAndSpaces:{browserPattern:`^[${f.numbers}${f.dotsAndCommas}${f.spaces}]+$`,browserMessage:"numbers and spaces only",patterns:[`^[${f.numbers}${f.dotsAndCommas}${f.spaces}]{0,}$`],messages:["Only numbers and spaces allowed"]}};function xe({min:e,max:t,validationType:r,customValidation:a}){let n={browserPattern:"",browserMessage:"",patterns:[],messages:[]};return e||(e=0),t||(t=2e3),a?{browserPattern:a.pattern,browserMessage:a.message,patterns:[a.pattern],messages:[a.message]}:(n=Object.assign({},ee[r]),(r==="sentences"||r==="lettersOnly"||r==="lettersAndSpaces"||r==="numbersOnly"||r==="numbersAndSpaces")&&(n.browserPattern=n.browserPattern.replace("]+",`]{${e},${t}}`),n.patterns.find(s=>s===`^.{${e},}$`)||(n.patterns=[...n.patterns,`^.{${e},}$`,`^.{0,${t}}$`],n.messages=[...n.messages,`Must be at least ${e} characters`,`Must be no more than ${t} characters`])),n)}
//# sourceMappingURL=index.js.map
