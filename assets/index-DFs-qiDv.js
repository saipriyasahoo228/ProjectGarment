import{m as pe,r as c,n as ve,b as ne,o as ge,p as xe,q as we,t as A,v as L,w as je,x as Oe,y as _e,u as R,j as a,c as k,z as re,D as be,P as Ee,E as Ce,F as Re,R as C,C as W,B as Y,G as K}from"./index-DJEOmVav.js";import{E as ke,a as Pe}from"./jspdf.plugin.autotable-BJ5pxiWk.js";import{R as Fe}from"./Row-Cnglslks.js";import{C as Te}from"./Col-CR0LDZjT.js";import{u as De,i as Ne,a as G,r as Se,h as q,m as Me,M as D}from"./Modal-COTehh6r.js";import{F as X,s as z}from"./CloseButton-C2t9bUN4.js";const I=2**31-1;function se(e,t,n){const r=n-Date.now();e.current=r<=I?setTimeout(t,r):setTimeout(()=>se(e,t,n),I)}function $e(){const e=pe(),t=c.useRef();return De(()=>clearTimeout(t.current)),c.useMemo(()=>{const n=()=>clearTimeout(t.current);function r(o,i=0){e()&&(n(),i<=I?t.current=setTimeout(o,i):se(t,o,Date.now()+i))}return{set:r,clear:n,handleRef:t}},[])}const Be=()=>{};function He(e,t,{disabled:n,clickTrigger:r}={}){const o=t||Be;ve(e,o,{disabled:n,clickTrigger:r});const i=ne(l=>{Ne(l)&&o(l)});c.useEffect(()=>{if(n||e==null)return;const l=ge(xe(e));let v=(l.defaultView||window).event;const m=we(l,"keyup",g=>{if(g===v){v=void 0;return}i(g)});return()=>{m()}},[e,n,i])}const ae=c.forwardRef((e,t)=>{const{flip:n,offset:r,placement:o,containerPadding:i,popperConfig:l={},transition:v,runTransition:m}=e,[g,x]=A(),[s,u]=A(),d=L(x,t),h=G(e.container),w=G(e.target),[f,y]=c.useState(!e.show),p=je(w,g,Oe({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:s,popperConfig:l}));e.show&&f&&y(!1);const j=(...B)=>{y(!0),e.onExited&&e.onExited(...B)},_=e.show||!f;if(He(g,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!_)return null;const{onExit:P,onExiting:E,onEnter:b,onEntering:M,onEntered:$}=e;let T=e.children(Object.assign({},p.attributes.popper,{style:p.styles.popper,ref:d}),{popper:p,placement:o,show:!!e.show,arrowProps:Object.assign({},p.attributes.arrow,{style:p.styles.arrow,ref:u})});return T=Se(v,m,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:T,onExit:P,onExiting:E,onExited:j,onEnter:b,onEntering:M,onEntered:$}),h?_e.createPortal(T,h):null});ae.displayName="Overlay";const oe=c.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=R(t,"popover-header"),a.jsx(n,{ref:o,className:k(e,t),...r})));oe.displayName="PopoverHeader";const U=c.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=R(t,"popover-body"),a.jsx(n,{ref:o,className:k(e,t),...r})));U.displayName="PopoverBody";function le(e,t){let n=e;return e==="left"?n=t?"end":"start":e==="right"&&(n=t?"start":"end"),n}function ie(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const ze=c.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:r,children:o,body:i,arrowProps:l,hasDoneInitialMeasure:v,popper:m,show:g,...x},s)=>{const u=R(e,"popover"),d=re(),[h]=(t==null?void 0:t.split("-"))||[],w=le(h,d);let f=r;return g&&!v&&(f={...r,...ie(m==null?void 0:m.strategy)}),a.jsxs("div",{ref:s,role:"tooltip",style:f,"x-placement":h,className:k(n,u,h&&`bs-popover-${w}`),...x,children:[a.jsx("div",{className:"popover-arrow",...l}),i?a.jsx(U,{children:o}):o]})}),Ie=Object.assign(ze,{Header:oe,Body:U,POPPER_OFFSET:[0,8]}),ce=c.forwardRef(({bsPrefix:e,placement:t="right",className:n,style:r,children:o,arrowProps:i,hasDoneInitialMeasure:l,popper:v,show:m,...g},x)=>{e=R(e,"tooltip");const s=re(),[u]=(t==null?void 0:t.split("-"))||[],d=le(u,s);let h=r;return m&&!l&&(h={...r,...ie(v==null?void 0:v.strategy)}),a.jsxs("div",{ref:x,style:h,role:"tooltip","x-placement":u,className:k(n,e,`bs-tooltip-${d}`),...g,children:[a.jsx("div",{className:"tooltip-arrow",...i}),a.jsx("div",{className:`${e}-inner`,children:o})]})});ce.displayName="Tooltip";const ue=Object.assign(ce,{TOOLTIP_OFFSET:[0,6]});function Le(e){const t=c.useRef(null),n=R(void 0,"popover"),r=R(void 0,"tooltip"),o=c.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if(q(t.current,n))return Ie.POPPER_OFFSET;if(q(t.current,r))return ue.TOOLTIP_OFFSET}return[0,0]}}}),[e,n,r]);return[t,[o]]}function Ue(e,t){const{ref:n}=e,{ref:r}=t;e.ref=n.__wrapped||(n.__wrapped=o=>n(z(o))),t.ref=r.__wrapped||(r.__wrapped=o=>r(z(o)))}const de=c.forwardRef(({children:e,transition:t=X,popperConfig:n={},rootClose:r=!1,placement:o="top",show:i=!1,...l},v)=>{const m=c.useRef({}),[g,x]=c.useState(null),[s,u]=Le(l.offset),d=L(v,s),h=t===!0?X:t||void 0,w=ne(f=>{x(f),n==null||n.onFirstUpdate==null||n.onFirstUpdate(f)});return be(()=>{g&&l.target&&(m.current.scheduleUpdate==null||m.current.scheduleUpdate())},[g,l.target]),c.useEffect(()=>{i||x(null)},[i]),a.jsx(ae,{...l,ref:d,popperConfig:{...n,modifiers:u.concat(n.modifiers||[]),onFirstUpdate:w},transition:h,rootClose:r,placement:o,show:i,children:(f,{arrowProps:y,popper:p,show:j})=>{var _;Ue(f,y);const P=p==null?void 0:p.placement,E=Object.assign(m.current,{state:p==null?void 0:p.state,scheduleUpdate:p==null?void 0:p.update,placement:P,outOfBoundaries:(p==null||(_=p.state)==null||(_=_.modifiersData.hide)==null?void 0:_.isReferenceHidden)||!1,strategy:n.strategy}),b=!!g;return typeof e=="function"?e({...f,placement:P,show:j,...!t&&j&&{className:"show"},popper:E,arrowProps:y,hasDoneInitialMeasure:b}):c.cloneElement(e,{...f,placement:P,arrowProps:y,popper:E,hasDoneInitialMeasure:b,className:k(e.props.className,!t&&j&&"show"),style:{...e.props.style,...f.style}})}})});de.displayName="Overlay";function Ve(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function J(e,t,n){const[r]=t,o=r.currentTarget,i=r.relatedTarget||r.nativeEvent[n];(!i||i!==o)&&!Re(o,i)&&e(...t)}Ee.oneOf(["click","hover","focus"]);const Ae=({trigger:e=["hover","focus"],overlay:t,children:n,popperConfig:r={},show:o,defaultShow:i=!1,onToggle:l,delay:v,placement:m,flip:g=m&&m.indexOf("auto")!==-1,...x})=>{const s=c.useRef(null),u=L(s,n.ref),d=$e(),h=c.useRef(""),[w,f]=Ce(o,i,l),y=Ve(v),{onFocus:p,onBlur:j,onClick:_}=typeof n!="function"?c.Children.only(n).props:{},P=O=>{u(z(O))},E=c.useCallback(()=>{if(d.clear(),h.current="show",!y.show){f(!0);return}d.set(()=>{h.current==="show"&&f(!0)},y.show)},[y.show,f,d]),b=c.useCallback(()=>{if(d.clear(),h.current="hide",!y.hide){f(!1);return}d.set(()=>{h.current==="hide"&&f(!1)},y.hide)},[y.hide,f,d]),M=c.useCallback((...O)=>{E(),p==null||p(...O)},[E,p]),$=c.useCallback((...O)=>{b(),j==null||j(...O)},[b,j]),T=c.useCallback((...O)=>{f(!w),_==null||_(...O)},[_,f,w]),B=c.useCallback((...O)=>{J(E,O,"fromElement")},[E]),ye=c.useCallback((...O)=>{J(b,O,"toElement")},[b]),H=e==null?[]:[].concat(e),F={ref:P};return H.indexOf("click")!==-1&&(F.onClick=T),H.indexOf("focus")!==-1&&(F.onFocus=M,F.onBlur=$),H.indexOf("hover")!==-1&&(F.onMouseOver=B,F.onMouseOut=ye),a.jsxs(a.Fragment,{children:[typeof n=="function"?n(F):c.cloneElement(n,F),a.jsx(de,{...x,show:w,onHide:b,flip:g,placement:m,popperConfig:r,target:s.current,children:t})]})},Q=1e3;function We(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(r*Q)/Q}function Z({min:e,now:t,max:n,label:r,visuallyHidden:o,striped:i,animated:l,className:v,style:m,variant:g,bsPrefix:x,...s},u){return a.jsx("div",{ref:u,...s,role:"progressbar",className:k(v,`${x}-bar`,{[`bg-${g}`]:g,[`${x}-bar-animated`]:l,[`${x}-bar-striped`]:l||i}),style:{width:`${We(t,e,n)}%`,...m},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:o?a.jsx("span",{className:"visually-hidden",children:r}):r})}const fe=c.forwardRef(({isChild:e=!1,...t},n)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(r.bsPrefix=R(r.bsPrefix,"progress"),e)return Z(r,n);const{min:o,now:i,max:l,label:v,visuallyHidden:m,striped:g,animated:x,bsPrefix:s,variant:u,className:d,children:h,...w}=r;return a.jsx("div",{ref:n,...w,className:k(d,s),children:h?Me(h,f=>c.cloneElement(f,{isChild:!0})):Z({min:o,now:i,max:l,label:v,visuallyHidden:m,striped:g,animated:x,bsPrefix:s,variant:u},n)})});fe.displayName="ProgressBar";const Ye=c.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:l,variant:v,responsive:m,...g},x)=>{const s=R(e,"table"),u=k(t,s,v&&`${s}-${v}`,l&&`${s}-${l}`,n&&`${s}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${s}-bordered`,o&&`${s}-borderless`,i&&`${s}-hover`),d=a.jsx("table",{...g,className:u,ref:x});if(m){let h=`${s}-responsive`;return typeof m=="string"&&(h=`${h}-${m}`),a.jsx("div",{className:h,children:d})}return d});var he={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ee=C.createContext&&C.createContext(he),Ke=["attr","size","title"];function Ge(e,t){if(e==null)return{};var n=qe(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qe(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(r){Xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xe(e,t,n){return t=Je(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(e){var t=Qe(e,"string");return typeof t=="symbol"?t:t+""}function Qe(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function me(e){return e&&e.map((t,n)=>C.createElement(t.tag,S({key:n},t.attr),me(t.child)))}function V(e){return t=>C.createElement(Ze,N({attr:S({},e.attr)},t),me(e.child))}function Ze(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=Ge(e,Ke),v=o||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),C.createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:m,style:S(S({color:e.color||n.color},n.style),e.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),i&&C.createElement("title",null,i),e.children)};return ee!==void 0?C.createElement(ee.Consumer,null,n=>t(n)):t(he)}function et(e){return V({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function tt(e){return V({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function nt(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}const rt=[{key:"daily",title:"Daily Sales Report",url:"/api/retailsale/dailysales/"},{key:"monthly",title:"Monthly Sales Report",url:"/api/retailsale/monthlysales/"},{key:"yearly",title:"Yearly Sales Report",url:"/api/retailsale/yearlysales/"}],ut=()=>{const[e,t]=c.useState([]),[n,r]=c.useState({daily:0,monthly:0,yearly:0}),[o,i]=c.useState(!1),[l,v]=c.useState(null);c.useEffect(()=>{(async()=>{try{const u=await K.get("/api/salestarget/salestargets/");r(u.data)}catch(u){console.error("Error fetching sales targets:",u)}})()},[]),c.useEffect(()=>{(async()=>{try{const u=await Promise.all(rt.map(async d=>{const h=await K.get(d.url);if(d.key==="daily"){const{title:w,current_date:f,current_day_sales:y,all_sales:p}=h.data,j=y&&y[0]?y[0]:{total_amount:"0",total_units:0};return{key:d.key,title:w||d.title,date:f||"N/A",total_amount:parseFloat(j.total_amount),total_units:j.total_units,all_sales:p||[]}}else if(d.key==="monthly"){const{title:w,current_month:f,current_month_sales:y,all_sales:p}=h.data,j=y&&y[0]?y[0]:{total_amount:"0",total_units:0};return{key:d.key,title:w||d.title,month:f||"N/A",total_amount:parseFloat(j.total_amount),total_units:j.total_units,all_sales:p||[]}}else if(d.key==="yearly"){const{title:w,current_year:f,current_year_sales:y,all_sales:p}=h.data,j=y&&y[0]?y[0]:{total_amount:"0",total_units:0};return{key:d.key,title:w||d.title,year:f||"N/A",total_amount:parseFloat(j.total_amount),total_units:j.total_units,all_sales:p||[]}}return{}}));t(u)}catch(u){console.error("Error fetching sales data:",u)}})()},[]);const m=s=>{v(s),i(!0)},g=()=>{i(!1)},x=()=>{const s=new ke;s.text(`${l.title}`,14,10),Pe(s,{startY:20,head:[[l.key==="daily"?"Date":l.key==="monthly"?"Month":"Year","Sale Type","Total Amount","Total Units"]],body:l.all_sales.map(u=>[l.key==="daily"?u.date:l.key==="monthly"?u.month:u.year,u.sale_type,`${parseFloat(u.total_amount).toLocaleString("en-IN")}`,u.total_units])}),s.save(`${l.title}.pdf`)};return a.jsxs(C.Fragment,{children:[a.jsx(Fe,{children:e.map((s,u)=>{const d=n[s.key]||0,h=d?Math.min(s.total_amount/d*100,100):0,w=h<50?"danger":h<75?"warning":h<100?"primary":"success",f=s.key==="daily"?"#1976D2":s.key==="monthly"?"#388E3C":"#FBC02D",y=s.key==="daily"?a.jsx(tt,{size:24,color:f}):s.key==="monthly"?a.jsx(et,{size:24,color:f}):a.jsx(nt,{size:24,color:f}),p=s.key==="daily"?"linear-gradient(to right, #E3F2FD, #BBDEFB)":s.key==="monthly"?"linear-gradient(to right, #E8F5E9, #C8E6C9)":"linear-gradient(to right, #FFF9C4, #FFF59D)";return a.jsx(Te,{xl:6,xxl:4,children:a.jsx(W,{style:{background:p,border:"none",borderRadius:"10px",padding:"10px"},children:a.jsxs(W.Body,{children:[a.jsxs("h5",{children:[y," ",s.title]}),a.jsx("p",{children:s.key==="daily"?`Date: ${s.date}`:s.key==="monthly"?`Month: ${s.month}`:`Year: ${s.year}`}),a.jsxs("p",{children:["Total Amount: ",a.jsxs("strong",{children:["₹",s.total_amount.toLocaleString("en-IN")]})]}),a.jsxs("p",{children:["Total Units: ",a.jsx("strong",{children:s.total_units})]}),d?a.jsx(Ae,{placement:"top",overlay:a.jsx(ue,{children:"Click to view details"}),children:a.jsx(fe,{now:h,label:`${h.toFixed(1)}%`,variant:w,style:{cursor:"pointer"},onClick:()=>m(s)})}):a.jsx("p",{children:"Loading targets..."})]})})},u)})}),l&&a.jsxs(D,{show:o,onHide:g,size:"lg",children:[a.jsx(D.Header,{closeButton:!0,children:a.jsx(D.Title,{children:l.title})}),a.jsx(D.Body,{children:a.jsxs(Ye,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:l.key==="daily"?"Date":l.key==="monthly"?"Month":"Year"}),a.jsx("th",{children:"Sale Type"}),a.jsx("th",{children:"Total Amount"}),a.jsx("th",{children:"Total Units"})]})}),a.jsx("tbody",{children:l.all_sales.map((s,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:l.key==="daily"?s.date:l.key==="monthly"?s.month:s.year}),a.jsx("td",{children:s.sale_type}),a.jsxs("td",{children:["₹",parseFloat(s.total_amount).toLocaleString("en-IN")]}),a.jsx("td",{children:s.total_units})]},u))})]})}),a.jsxs(D.Footer,{children:[a.jsx(Y,{variant:"primary",onClick:x,children:"Download PDF"}),a.jsx(Y,{variant:"secondary",onClick:g,children:"Close"})]})]})]})};export{ut as default};
