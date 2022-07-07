var ke=Object.create;var W=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ne=Object.getOwnPropertyNames;var Ce=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var Ee=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},ae=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ne(t))!Oe.call(e,o)&&o!==r&&W(e,o,{get:()=>t[o],enumerable:!(a=we(t,o))||a.enumerable});return e};var O=(e,t,r)=>(r=e!=null?ke(Ce(e)):{},ae(t||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),Le=e=>ae(W({},"__esModule",{value:!0}),e);var Me={};Ee(Me,{ElectricLadylandForm:()=>xe,formActionFunction:()=>ne,formLoaderFunction:()=>ie,stringValidator:()=>$e,validation:()=>re,validationPatterns:()=>w});module.exports=Le(Me);function Q({formBlueprint:e,body:t,context:r}){var i;function a(n){var d,m,f;let p;if((n.type==="email"||n.type==="password"||n.type==="text"||n.type==="textarea"||n.type==="radio"||n.type==="select"||n.type==="hidden"||n.type==="stateful-radio")&&(p=(m=(d=t.get(`${n.name}`))==null?void 0:d.toString())!=null?m:n.initialValue),n.type==="checkbox"){let u=(f=t.get(`${n.name}`))==null?void 0:f.toString();if(!u)return;p=u}let s=[];(n.type==="text"||n.type==="textarea"||n.type==="email"||n.type==="password")&&!p&&n.required&&s.push("This field is required"),typeof n=="object"&&p&&(r[`${n.name}`]={value:p,errors:s}),n.type==="stateful-radio"&&n.dependentChildren.forEach(u=>{typeof u<"u"&&u.forEach(g=>{g&&a(g)})}),n.type==="checkbox-group"&&n.checkboxes.forEach(u=>{delete r[`${u.name}`],a(u)})}let o=r.currentStep;for(let n of(i=e[o])==null?void 0:i.fields)n&&a(n)}function X({context:e,formBlueprint:t}){var i,n,p;let r=!1,a=e.currentStep,o=[];for(let s of(i=t[a])==null?void 0:i.fields)e&&Ie(s,o,e);for(let s of o)if(((p=(n=e[`${s}`])==null?void 0:n.errors)==null?void 0:p.length)>=1&&(r=!0),r)return!0;return!1}function Ie(e,t,r){if(t.push(e.name),e.type==="stateful-radio"){let a=e.options.indexOf(r[`${e.name}`].value);e.dependentChildren[a].forEach(o=>{o&&t.push(o.name)})}}async function q({handleDataFn:e,context:t,successRedirectPath:r,session:a,request:o,formUtilitiesFromRemixApp:i}){let{commitSession:n,redirect:p,json:s}=i,d=await e(t,o),[m,f]=d;return m?(t={},t.dataHandlerSuccessMessage=f,t.dataHandlerErrorMessage="",a.set("context",t),p(r,{headers:{"Set-Cookie":await n(a)}})):(t.dataHandlerSuccessMessage="",t.dataHandlerErrorMessage=f,a.set("context",t),s({},{headers:{"Set-Cookie":await n(a)}}))}async function Y({operationType:e,formBlueprint:t,context:r,session:a,pathname:o,redirect:i,body:n,commitSession:p}){var m,f,u;let s=(m=t[r==null?void 0:r.currentStep])==null?void 0:m.fields.find(g=>g.type==="expandable-list"),d=(u=(f=r==null?void 0:r[s.name])==null?void 0:f.value)!=null?u:[];if(e==="add-item-to-list"){let g={};s.listItemStructure.forEach(x=>{g[x.name]={value:n.get(x.name),errors:[]}}),d.push(g)}else if(e==="edit-list-item"){let g=n.get("index-to-change");s.listItemStructure.forEach(x=>{d[Number(g)][x.name]={value:n.get(x.name),errors:[]}})}else if(e==="delete-list-item"){let g=n.get("index-to-delete");d.splice(Number(g),1)}return a.set("context",{...r,[s.name]:{value:d,errors:[]}}),i(o,{headers:{"Set-Cookie":await p(a)}})}function _({body:e}){return!!e.get("given-name")}function G({context:e,formBlueprint:t}){if(t.length===1)return"end";let r=t.length;return e.currentStep===0?"beginning":Number(e.currentStep)+1===r?"end":"middle"}function Z(e){let t=e.length,r="";for(let a=0;a<t;a++){let o=e.charCodeAt(a);o===8216||o===8217?r+="'":r+=e[a]}return r}function U({formField:e,context:t}){if(e.type!=="hidden"){if(e.type==="text"||e.type==="textarea"||e.type==="email"||e.type==="password"){let r=t[`${e.name}`].value;e.validation.patterns.forEach((a,o)=>{!Ae({value:r,regex:a})&&!t[`${e.name}`].errors.includes(e.validation.messages[o])&&t[`${e.name}`].errors.push(e.validation.messages[o])})}if(e.type==="stateful-radio"){let r=t[`${e.name}`].value,{dependentChildren:a}=e,o=e.options.indexOf(r);typeof a=="object"&&a[o].forEach(i=>{typeof i<"u"&&U({context:t,formField:i})})}}}function Ae({value:e,regex:t}){let r=new RegExp(`${t}`,"igm");return e=Z(e),r.test(e)}async function ne({request:e,formBlueprint:t,handleDataFn:r,successRedirectPath:a,formUtilitiesFromRemixApp:o}){var H,T,P;let{commitSession:i,getSession:n,destroySession:p,redirect:s}=o,d="basic";t.length>1?d="multipart":d="basic";let m=await n(e.headers.get("Cookie")),{pathname:f}=new URL(e.url),u=(H=m.get("context"))!=null?H:{};if(d==="multipart"&&Object.keys(u).length<1){let{pathname:v}=new URL(e.url);return console.log("No context found in session, redirecting to start"),s(v,{headers:{"Set-Cookie":await p(m)}})}let g=await e.formData();if(_({body:g}))return s("/");let V=g.get("operation-type");if(V)return await Y({operationType:V,formBlueprint:t,context:u,session:m,commitSession:i,pathname:f,body:g,redirect:s});let y=(P=(T=g.get("submit-type"))==null?void 0:T.toString())!=null?P:"";if(d==="multipart"&&y==="back")return u.currentStep-=1,m.set("context",u),s(f,{headers:{"Set-Cookie":await i(m)}});if(await Q({formBlueprint:t,body:g,context:u}),!t[u.currentStep].fields)throw new Error("No fields found in formBlueprint");t[0].fields.forEach(v=>{U({context:u,formField:v})});let k={};for(let v in u)k[v]=u[v].value;if(m.set("context",u),!X({context:u,formBlueprint:t})){let v=G({formBlueprint:t,context:u});return u.formStage=v,d==="basic"?q({request:e,handleDataFn:r,context:u,successRedirectPath:a,formUtilitiesFromRemixApp:o,session:m}):v==="end"&&y==="submit"?q({handleDataFn:r,context:u,successRedirectPath:a,formUtilitiesFromRemixApp:o,session:m,request:e}):(u.currentStep+=1,m.set("context",u),s(f,{headers:{"Set-Cookie":await i(m)}}))}return s(f,{headers:{"Set-Cookie":await i(m)}})}function J({formBlueprint:e,context:t}){if(!t)return{};let r=!1;for(let a of e)for(let o of a==null?void 0:a.fields){if(r)return{};r=oe({field:o,context:t})}return t}function oe({field:e,context:t}){if(e.type==="checkbox-group")return!1;let r=t[`${e.name}`];return typeof(r==null?void 0:r.value)!="string"&&typeof(r==null?void 0:r.value)!="object"?!0:(e.type==="stateful-radio"&&e.dependentChildren.forEach(a=>{a.forEach(o=>{o&&oe({field:o,context:t})})}),!1)}function K({formBlueprint:e}){let t={};for(let r of e)for(let a of r==null?void 0:r.fields)a&&se({field:a,context:t});return t.currentStep=0,t}function se({field:e,context:t}){e.type!=="checkbox-group"&&e.type!=="expandable-list"?t[`${e.name}`]={value:e.initialValue||"",errors:[]}:e.type==="checkbox-group"?e.checkboxes.forEach(r=>{r.initialValue&&(console.log("Check yourself before you wreck yourself"),t[`${r.name}`]={value:r.initialValue||"",errors:[]})}):e.type==="expandable-list"&&(t[`${e.name}`]={value:e.initialValue||[],errors:[]}),e.type==="stateful-radio"&&e.dependentChildren.forEach(r=>{r.forEach(a=>{typeof a<"u"&&se({field:a,context:t})})})}async function ie({request:e,formBlueprint:t,formUtilitiesFromRemixApp:r}){var m,f,u;let{commitSession:a,getSession:o,destroySession:i,json:n}=r,p=await o(e.headers.get("Cookie")),s=p.get("context");s=J({formBlueprint:t,context:s}),Object.keys(s).length<1&&(s=K({formBlueprint:t})),s.currentStep=(m=s==null?void 0:s.currentStep)!=null?m:0,s.currentStep<0&&(s.currentStep=0);let d=G({context:s,formBlueprint:t});return s.currentStep>0&&Object.keys(s).length<1?n({},{headers:{"Set-Cookie":await i(p)}}):(s.formStage=d,s.nextButtonText=(f=t[s.currentStep])==null?void 0:f.nextButtonText,s.backButtonText=(u=t[s.currentStep])==null?void 0:u.backButtonText,p.set("context",s),{context:s,formStructure:t[s.currentStep],commitSession:a,session:p})}var c=O(require("react"));var F=O(require("react"));function le({fieldContext:e,fieldBlueprint:t}){var o,i;let r=(o=t.initialValue)!=null?o:"",a=(i=e==null?void 0:e.value)!=null?i:r;return React.createElement("input",{type:"hidden",name:t.name,value:a})}var M=O(require("react"));var h=O(require("react"));function Ve({className:e,children:t}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("span",{className:`el-form-field-label${e?" "+e:""}`},t))}function De({children:e}){return e?h.default.createElement("p",{className:"el-form-field-description"},e):null}function Te({fieldErrors:e,fieldVisited:t}){return h.default.createElement(h.default.Fragment,null,e.length>=1&&t?e.map(r=>e.length===1?h.default.createElement("div",{className:"el-field-error-text",key:r},r):h.default.createElement("div",{className:"el-field-error-text",key:r},"- ",r)):null)}function S({fieldBlueprint:e,fieldErrors:t,fieldVisited:r}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",{htmlFor:e.name,key:e.name},h.default.createElement(Ve,null,e.label)),h.default.createElement(De,null,e.description),t&&r?Te({fieldErrors:t,fieldVisited:r}):null)}function E({className:e,children:t}){return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:`el-radio-or-checkbox-wrapper${e?" "+e:""}`},t))}function L({className:e,children:t,htmlFor:r}){return h.default.createElement("label",{htmlFor:r,className:`el-radio-or-checkbox-label${e?" "+e:""}`},t)}var R=require("react");function I(e){let t=e.split("-");for(let r=0;r<t.length;r++)t[r]=t[r][0].toUpperCase()+t[r].slice(1);return t.join(" ")}function ee({e,fieldValidation:t,setFieldErrors:r,fieldErrors:a}){console.log({validation:t,fieldErrors:a});let o=!0;t.patterns.forEach(async(i,n)=>{var m;let p=new RegExp(i,"gim"),s=Z((m=e==null?void 0:e.currentTarget)==null?void 0:m.value),d=p.test(s);if(d||(o=!1),d){let f=a.indexOf(t.messages[n]);f>-1&&a.splice(f,1)}else a.includes(t.messages[n])||r([...a,t.messages[n]])}),o&&r([])}function me({fieldBlueprint:e,fieldContext:t}){var m,f;let r=[],a=!1;(e.type==="email"||e.type==="password"||e.type==="text"||e.type==="textarea")&&t!=null&&t.errors&&(r=t==null?void 0:t.errors,(t==null?void 0:t.errors.length)>=1&&(a=!0));let[o,i]=(0,R.useState)(r),[n,p]=(0,R.useState)(a),s=(m=e.initialValue)!=null?m:"",d=(f=t==null?void 0:t.value)!=null?f:s;return{fieldErrors:o,fieldVisited:n,setFieldErrors:i,setFieldVisited:p,defaultValue:d}}function pe({fieldBlueprint:e,fieldContext:t,className:r}){let{defaultValue:a,fieldErrors:o,setFieldErrors:i,fieldVisited:n,setFieldVisited:p}=me({fieldBlueprint:e,fieldContext:t});return M.default.createElement(M.default.Fragment,null,S({fieldBlueprint:e,fieldErrors:o,fieldVisited:n}),e.type==="text"||e.type==="password"||e.type==="email"?M.default.createElement("input",{"data-test":e.name,name:e.name,id:e.name,className:`el-text-input${r?" "+r:""}`,required:e.required,defaultValue:a,placeholder:e.placeholder,onBlur:()=>p(!0),onChange:s=>{ee({e:s,setFieldErrors:i,fieldErrors:o,fieldValidation:e.validation})},pattern:e.validation.browserPattern,title:e.validation.browserMessage,type:e.type,autoCorrect:"false",autoComplete:"false"}):e.type==="textarea"?M.default.createElement("textarea",{name:e.name,id:e.name,"data-test":e.name,className:"el-text-input",required:e.required,rows:5,defaultValue:a,placeholder:e.placeholder,onBlur:()=>p(!0),onChange:s=>{ee({e:s,setFieldErrors:i,fieldErrors:o,fieldValidation:e.validation})}}):null)}function ue({fieldBlueprint:e,fieldContext:t}){return React.createElement(React.Fragment,null,S({fieldBlueprint:e}),e.options.map(r=>{let a=e.initialValue;t!=null&&t.value&&(a=t.value);let o=I(r);return React.createElement(E,{key:`${e.name}-${r}`},React.createElement("input",{"data-test":`${e.name}-${r}`,key:r,type:"radio",id:`${e.name}-${r}`,name:e.name,value:r,autoComplete:"off",defaultChecked:r===a}),React.createElement(L,{className:`ml-2
              `,htmlFor:`${e.name}-${r}`},o))}))}function de({fieldBlueprint:e,context:t}){return React.createElement(React.Fragment,null,S({fieldBlueprint:e}),e.checkboxes.map(r=>React.createElement(E,{key:r.name},React.createElement("input",{"data-test":`${r.name}-${r.value}`,key:r.name,type:"checkbox",id:r.name,name:r.name,value:r.value,autoComplete:"off",defaultChecked:t==null?void 0:t[r.name]}),React.createElement(L,{className:`ml-2
              `,htmlFor:r.name},r.label))))}var A=require("react"),l=O(require("react")),z=require("@reach/dialog"),ce=require("react-icons/fi");var ye=require("react-icons/io5");function be({fieldBlueprint:e,fieldContext:t,remixBrowserUtils:r}){console.log({remixBrowserUtils:r});let a=r.useSubmit(),[o,i]=(0,A.useState)(!1),[n,p]=(0,A.useState)(void 0),[s,d]=(0,A.useState)(""),[m,f]=(0,A.useState)([]),u=()=>i(!0),g=()=>i(!1);(0,A.useEffect)(()=>{f(t==null?void 0:t.value)},[t,m]);let{listItemStructure:x}=e,V={};return x.forEach(y=>{y.showOnMobileTable&&(V[y.name]=y)}),l.default.createElement("div",{className:"el-field-item"},S({fieldBlueprint:e}),l.default.createElement("button",{className:"expand-click-target el-form-button el-form-add-item-button",onClick:y=>{y.preventDefault(),p(void 0),d(""),u()}},l.default.createElement("span",{className:"el-form-left-icon"},l.default.createElement(ce.FiPlusCircle,null)),e.addItemLabel),(m==null?void 0:m.length)>0&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"list-items-table-wrapper"},l.default.createElement("table",null,l.default.createElement("thead",null,l.default.createElement("tr",{className:"lit-row"},x.map(y=>Object.keys(V).includes(y.name)?l.default.createElement("th",{className:"lit-cell","data-flex":y.tableFlex,"data-align-text":y.alignText,key:y.name},y.label):null),l.default.createElement("th",{className:"lit-cell","data-flex":3},"\xA0"),l.default.createElement("th",{className:"lit-cell","data-flex":3},"\xA0"))),l.default.createElement("tbody",null,m.map((y,k)=>l.default.createElement("tr",{className:"lit-row",key:k},Object.keys(V).map((C,H)=>{var v;let T,P;return x.forEach(B=>{B.name===C&&(T=B.tableFlex,P=B.alignText)}),l.default.createElement("th",{className:"lit-cell","data-flex":T,"data-align-text":P,key:`${y[C]}-${H}`},(v=y[C])==null?void 0:v.value)}),l.default.createElement("th",{className:"lit-cell","data-align-text":"right","data-flex":3},l.default.createElement("button",{className:"edit-item-button expand-click-target","data-test":`edit-${k}`,onClick:C=>{C.preventDefault(),p(k),d("edit-item"),u()}},"Edit")),l.default.createElement("th",{className:"lit-cell","data-align-text":"right","data-flex":3},l.default.createElement("button",{className:"delete-item-button expand-click-target","data-test":`delete-${k}`,onClick:C=>{C.preventDefault(),p(k),d("delete-item"),u()}},"Delete")))))))),l.default.createElement(z.DialogOverlay,{isOpen:o,onDismiss:g},l.default.createElement(z.DialogContent,{"aria-label":e.addOrEditItemModalLabel},l.default.createElement("div",{className:"modal-content-wrapper"},l.default.createElement("button",{className:"close-modal-button expand-click-target",onClick:g},l.default.createElement("span",{className:"close-icon-wrapper"},l.default.createElement(ye.IoClose,{role:"img"})),l.default.createElement("span",{className:"visually-hidden"},"Close Modal")),s==="delete-item"?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"modal-label modal-delete-item-label"},"Delete Item"),l.default.createElement("span",{className:"block h-3"}),l.default.createElement("p",{className:"confirm-delete-text"},"Are you sure you want to delete item"," ",m.map(y=>{var k;return y===n?(k=m[n][Object.keys(m[n])[0]])==null?void 0:k.value:null}),"?"),l.default.createElement("span",{className:"block h-6"}),l.default.createElement("div",{className:"flex items-center"},l.default.createElement("button",{className:"el-form-button el-form-button-neutral expand-click-target","data-test":"cancel",onClick:()=>{g()}},"Cancel"),l.default.createElement(r.Form,{method:"post",onSubmitCapture:y=>{a(y.currentTarget),g()}},l.default.createElement("input",{type:"hidden",name:"operation-type",value:"delete-list-item"}),l.default.createElement("input",{type:"hidden",name:"index-to-delete",value:n}),l.default.createElement("button",{className:"el-form-button el-form-button-danger expand-click-target","data-test":"confirm-delete",type:"submit"},"Confirm Delete")))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"modal-label modal-add-item-label"},typeof n=="number"?e.editItemLabel:e.addItemLabel),l.default.createElement("span",{className:"block h-8"}),l.default.createElement(r.Form,{reloadDocument:!0,method:"post",onSubmitCapture:y=>{a(y.currentTarget),g()}},s==="edit-item"?l.default.createElement(l.default.Fragment,null,l.default.createElement("input",{type:"hidden",name:"operation-type",value:"edit-list-item"}),l.default.createElement("input",{type:"hidden",name:"index-to-change",value:n})):l.default.createElement("input",{type:"hidden",name:"operation-type",value:"add-item-to-list"}),x.map(y=>l.default.createElement(D,{remixBrowserUtils:r,context:typeof n=="number"?t==null?void 0:t.value[n]:t,key:y.name,field:y})),l.default.createElement("span",{className:"block h-4"}),l.default.createElement("button",{className:"el-form-button el-form-add-item-button expand-click-target",type:"submit"},"Confirm")))))))}var fe=require("react"),$=O(require("react"));function ge({fieldBlueprint:e,context:t,remixBrowserUtils:r}){let a=0;e.options.forEach((n,p)=>{var d,m;((m=(d=t[e.name])==null?void 0:d.value)!=null?m:e.initialValue)===n&&(a=p)});let[o,i]=(0,fe.useState)(a);return $.default.createElement($.default.Fragment,null,S({fieldBlueprint:e}),$.default.createElement("div",{className:"el-field-item"},e.options.map((n,p)=>{let s=I(n);return p===o?$.default.createElement(E,{key:n},$.default.createElement("input",{"data-test":`${e.name}-${n}`,type:"radio",id:`${e.name}-${n}`,name:e.name,value:n,onChange:()=>{i(p)},checked:!0,autoComplete:"off"}),$.default.createElement(L,{htmlFor:`${e.name}-${n}`},s)):$.default.createElement(E,{key:n},$.default.createElement("input",{"data-test":`${e.name}-${n}`,type:"radio",id:`${e.name}-${n}`,name:e.name,value:n,onChange:()=>{i(p)},autoComplete:"off"}),$.default.createElement(L,{htmlFor:`${e.name}-${n}`},s))})),e.dependentChildren[o].map(n=>n?$.default.createElement(D,{remixBrowserUtils:r,context:t,key:n.name,field:n}):null))}var he=require("react"),N=O(require("react"));var Fe=require("react-icons/fa");function ve({fieldBlueprint:e,fieldContext:t}){let r=e.initialValue;t!=null&&t.value&&(r=t.value);let[a,o]=(0,he.useState)(r);return N.default.createElement(N.default.Fragment,null,S({fieldBlueprint:e}),N.default.createElement("div",{className:"el-select-wrapper"},N.default.createElement("select",{className:"el-native-select",id:e.name,value:a,onChange:i=>o(i.target.value),name:e.name},e.options.map(i=>{let n=I(i);return N.default.createElement("option",{key:i,value:i},n)})),N.default.createElement("div",{className:"el-select-presentational"},I(a),N.default.createElement("div",{className:"el-select-icon-wrapper"},N.default.createElement(Fe.FaChevronDown,null)))))}function D({field:e,context:t,remixBrowserUtils:r}){return e.type==="hidden"?F.default.createElement(le,{fieldContext:t[e.name],fieldBlueprint:e}):e.type==="text"||e.type==="textarea"||e.type==="password"||e.type==="email"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(pe,{fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="radio"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ue,{fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="select"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ve,{fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="checkbox-group"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(de,{fieldBlueprint:e,context:t})):e.type==="expandable-list"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(be,{remixBrowserUtils:r,fieldBlueprint:e,fieldContext:t[e.name]})):e.type==="stateful-radio"?F.default.createElement("div",{className:"el-field-item"},F.default.createElement(ge,{remixBrowserUtils:r,fieldBlueprint:e,context:t})):null}var j=require("react-icons/fa");function xe({context:e,formStructure:t,action:r,submitText:a="Submit",reloadDocument:o=!1,remixBrowserUtils:i}){return c.default.createElement("div",{className:"el-form-wrapper"},c.default.createElement(Se,{RemixFormFromApplication:i==null?void 0:i.Form,reloadDocument:o,action:r},c.default.createElement(Pe,null),t.fields.map(n=>c.default.createElement(D,{remixBrowserUtils:i,field:n,context:e,key:n.name})),e.dataHandlerErrorMessage&&e.formStage==="end"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"font-display text-lg font-semibold text-danger-5"},e.dataHandlerErrorMessage),c.default.createElement("span",{className:"block h-6"})):null,c.default.createElement("div",{className:"forward-button-wrapper mt-10 flex w-full"},(e.formStage==="beginning"||e.formStage==="middle")&&c.default.createElement(te,{dataTest:"next",className:"el-form-button-forward",name:"submit-type",type:"submit",value:"next"},e.nextButtonText,c.default.createElement("span",{className:"el-form-right-icon"},c.default.createElement(j.FaChevronRight,{"aria-hidden":"true"}))),e.formStage==="end"&&c.default.createElement(te,{dataTest:"submit",className:"el-form-button-forward",name:"submit-type",type:"submit",value:"submit"},a,c.default.createElement("span",{className:"el-form-right-icon"},c.default.createElement(j.FaChevronRight,{"aria-hidden":"true"}))))),(e.formStage==="middle"||e.formStage==="end")&&e.currentStep>0?c.default.createElement(Se,{RemixFormFromApplication:i==null?void 0:i.Form},c.default.createElement(te,{dataTest:"back",className:"el-form-button-back",name:"submit-type",type:"submit",value:"back"},c.default.createElement("span",{className:"el-form-left-icon"},c.default.createElement(j.FaChevronLeft,{"aria-hidden":"true"})),e.backButtonText)):null)}function Se({children:e,action:t,reloadDocument:r=!1,RemixFormFromApplication:a}){return a?r?c.default.createElement(a,{reloadDocument:!0,action:t,method:"post"},e):c.default.createElement(a,{action:t,method:"post"},e):c.default.createElement("form",{method:"post",action:t},e)}function Pe(){return c.default.createElement(c.default.Fragment,null,c.default.createElement("input",{className:"visually-hidden",type:"text",name:"given-name",id:"given-name"}),c.default.createElement("label",{className:"visually-hidden",htmlFor:"given-name"},"Given Name"))}function te({children:e,name:t,className:r,value:a,type:o="submit",dataTest:i}){return c.default.createElement("button",{"data-test":i,className:`el-form-button${r?" "+r:""}`,name:t,type:o,value:a},e)}var w={phoneNumber:"^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$",email:"^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",postalCode:"^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\\s?[0-9][A-Z][0-9]$",password:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%^&*])(?=.{8,}).*$"},b={letters:"A-Za-z",numbers:"0-9",spaces:"\\s",dotsAndCommas:"\\.\\,",punctuation:'"!\\-@#$%*()|;:,./?',minLength5:"^.{5,}$"},re={phone:{browserPattern:w.phoneNumber,browserMessage:"valid phone number with area code",patterns:[w.phoneNumber],messages:["Provide a valid phone number with area code"]},email:{browserPattern:w.email,browserMessage:"valid email address",patterns:[w.email],messages:["Please provide a valid email address"]},postalCode:{browserPattern:w.postalCode,browserMessage:"valid postal code",patterns:[w.postalCode],messages:["Please provide valid postal code"]},password:{browserPattern:w.password,browserMessage:"letters, numbers, and special characters",patterns:[w.password],messages:["Letters, numbers, and special characters are required"]},sentences:{browserPattern:`^[${b.letters}${b.spaces}${b.numbers}${b.punctuation}]+$`,browserMessage:"letters, numbers, and special characters",patterns:[`^[${b.letters}${b.spaces}${b.numbers}${b.punctuation}]{1,}$`],messages:["Only letters, numbers, and basic punctuation allowed"]},lettersOnly:{browserPattern:`^[${b.letters}]+$`,browserMessage:"letters only",patterns:[`^[${b.letters}${b.spaces}]{1,}$`],messages:["Only letters allowed"]},lettersAndSpaces:{browserPattern:`^[${b.letters}${b.spaces}]+$`,browserMessage:"letters and spaces only",patterns:[`^[${b.letters}${b.spaces}]{1,}$`],messages:["Only letters and spaces allowed"]},numbersOnly:{browserPattern:`^[${b.numbers}${b.dotsAndCommas}]+$`,browserMessage:"numbers only",patterns:[`^[${b.numbers}${b.dotsAndCommas}]{1,}$`],messages:["Only numbers allowed"]},numbersAndSpaces:{browserPattern:`^[${b.numbers}${b.dotsAndCommas}${b.spaces}]+$`,browserMessage:"numbers and spaces only",patterns:[`^[${b.numbers}${b.dotsAndCommas}${b.spaces}]{1,}$`],messages:["Only numbers and spaces allowed"]}};function $e({min:e,max:t,validationType:r,customValidation:a}){let o={browserPattern:"",browserMessage:"",patterns:[],messages:[]};return e||(e=0),t||(t=2e3),a?{browserPattern:a.pattern,browserMessage:a.message,patterns:[a.pattern],messages:[a.message]}:(o=Object.assign({},re[r]),(r==="sentences"||r==="lettersOnly"||r==="lettersAndSpaces"||r==="numbersOnly"||r==="numbersAndSpaces")&&(o.browserPattern=o.browserPattern.replace("]+",`]{${e},${t}}`),o.patterns.find(n=>n===`^.{${e},}$`)||(o.patterns=[...o.patterns,`^.{${e},}$`,`^.{0,${t}}$`],o.messages=[...o.messages,`Must be at least ${e} characters`,`Must be no more than ${t} characters`])),o)}
//# sourceMappingURL=index.js.map
