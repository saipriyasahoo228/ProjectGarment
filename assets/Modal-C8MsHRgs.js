import{r,aL as ae,o as pe,aM as Xe,aN as Re,b as y,v as ie,j as l,D as be,m as Ye,aO as qe,q as xe,F as we,y as Qe,aP as I,u as $,c as O,d as Je,t as Ze,z as Pe,aQ as Me,aR as et}from"./index-v_C5IRK2.js";import{a as Q,C as tt,F as Se,t as nt}from"./CloseButton-Bl7mzraQ.js";function ot(e){const t=r.useRef(e);return t.current=e,t}function Ae(e){const t=ot(e);r.useEffect(()=>()=>t.current(),[])}function Bt(e,t){let n=0;return r.Children.map(e,o=>r.isValidElement(o)?t(o,n++):o)}function Lt(e,t){return r.Children.toArray(e).some(n=>r.isValidElement(n)&&n.type===t)}var se;function Oe(e){if((!se&&se!==0||e)&&ae){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),se=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return se}function he(e){e===void 0&&(e=pe());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function rt(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Ne=Xe("modal-open");class ye{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return rt(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();t.style={overflow:s.style.overflow,[o]:s.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(Q(s,o)||"0",10)+t.scrollBarWidth}px`),s.setAttribute(Ne,""),Q(s,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Ne),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const me=(e,t)=>ae?e==null?(t||pe()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function st(e,t){const n=Re(),[o,s]=r.useState(()=>me(e,n==null?void 0:n.document));if(!o){const a=me(e);a&&s(a)}return r.useEffect(()=>{},[t,o]),r.useEffect(()=>{const a=me(e);a!==o&&s(a)},[e,o]),o}function at({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:s}){const a=r.useRef(null),u=r.useRef(t),f=y(n);r.useEffect(()=>{t?u.current=!0:f(a.current)},[t,f]);const h=ie(a,e.ref),d=r.cloneElement(e,{ref:h});return t?d:s||!u.current&&o?null:d}function it(e){return e.code==="Escape"||e.keyCode===27}function lt(){const e=r.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const ct=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function dt(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function ut(e){let{onEnter:t,onEntering:n,onEntered:o,onExit:s,onExiting:a,onExited:u,addEndListener:f,children:h}=e,d=dt(e,ct);const{major:g}=lt(),v=g>=19?h.props.ref:h.ref,E=r.useRef(null),T=ie(E,typeof h=="function"?null:v),p=b=>x=>{b&&E.current&&b(E.current,x)},k=r.useCallback(p(t),[t]),_=r.useCallback(p(n),[n]),C=r.useCallback(p(o),[o]),H=r.useCallback(p(s),[s]),j=r.useCallback(p(a),[a]),K=r.useCallback(p(u),[u]),U=r.useCallback(p(f),[f]);return Object.assign({},d,{nodeRef:E},t&&{onEnter:k},n&&{onEntering:_},o&&{onEntered:C},s&&{onExit:H},a&&{onExiting:j},u&&{onExited:K},f&&{addEndListener:U},{children:typeof h=="function"?(b,x)=>h(b,Object.assign({},x,{ref:T})):r.cloneElement(h,{ref:T})})}const ft=["component"];function ht(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}const mt=r.forwardRef((e,t)=>{let{component:n}=e,o=ht(e,ft);const s=ut(o);return l.jsx(n,Object.assign({ref:t},s))});function gt({in:e,onTransition:t}){const n=r.useRef(null),o=r.useRef(!0),s=y(t);return be(()=>{if(!n.current)return;let a=!1;return s({in:e,element:n.current,initial:o.current,isStale:()=>a}),()=>{a=!0}},[e,s]),be(()=>(o.current=!1,()=>{o.current=!0}),[]),n}function Et({children:e,in:t,onExited:n,onEntered:o,transition:s}){const[a,u]=r.useState(!t);t&&a&&u(!1);const f=gt({in:!!t,onTransition:d=>{const g=()=>{d.isStale()||(d.in?o==null||o(d.element,d.initial):(u(!0),n==null||n(d.element)))};Promise.resolve(s(d)).then(g,v=>{throw d.in||u(!0),v})}}),h=ie(f,e.ref);return a&&!t?null:r.cloneElement(e,{ref:h})}function ke(e,t,n){return e?l.jsx(mt,Object.assign({},n,{component:e})):t?l.jsx(Et,Object.assign({},n,{transition:t})):l.jsx(at,Object.assign({},n))}const pt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Rt(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}let ge;function yt(e){return ge||(ge=new ye({ownerDocument:e==null?void 0:e.document})),ge}function vt(e){const t=Re(),n=e||yt(t),o=r.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:r.useCallback(s=>{o.current.dialog=s},[]),setBackdropRef:r.useCallback(s=>{o.current.backdrop=s},[])})}const Be=r.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:s,style:a,children:u,backdrop:f=!0,keyboard:h=!0,onBackdropClick:d,onEscapeKeyDown:g,transition:v,runTransition:E,backdropTransition:T,runBackdropTransition:p,autoFocus:k=!0,enforceFocus:_=!0,restoreFocus:C=!0,restoreFocusOptions:H,renderDialog:j,renderBackdrop:K=c=>l.jsx("div",Object.assign({},c)),manager:U,container:b,onShow:x,onHide:V=()=>{},onExit:le,onExited:G,onExiting:J,onEnter:Z,onEntering:P,onEntered:ee}=e,ce=Rt(e,pt);const w=Re(),S=st(b),m=vt(U),de=Ye(),te=qe(n),[N,A]=r.useState(!n),R=r.useRef(null);r.useImperativeHandle(t,()=>m,[m]),ae&&!te&&n&&(R.current=he(w==null?void 0:w.document)),n&&N&&A(!1);const M=y(()=>{if(m.add(),B.current=xe(document,"keydown",fe),X.current=xe(document,"focus",()=>setTimeout(ue),!0),x&&x(),k){var c,re;const q=he((c=(re=m.dialog)==null?void 0:re.ownerDocument)!=null?c:w==null?void 0:w.document);m.dialog&&q&&!we(m.dialog,q)&&(R.current=q,m.dialog.focus())}}),z=y(()=>{if(m.remove(),B.current==null||B.current(),X.current==null||X.current(),C){var c;(c=R.current)==null||c.focus==null||c.focus(H),R.current=null}});r.useEffect(()=>{!n||!S||M()},[n,S,M]),r.useEffect(()=>{N&&z()},[N,z]),Ae(()=>{z()});const ue=y(()=>{if(!_||!de()||!m.isTopModal())return;const c=he(w==null?void 0:w.document);m.dialog&&c&&!we(m.dialog,c)&&m.dialog.focus()}),ne=y(c=>{c.target===c.currentTarget&&(d==null||d(c),f===!0&&V())}),fe=y(c=>{h&&it(c)&&m.isTopModal()&&(g==null||g(c),c.defaultPrevented||V())}),X=r.useRef(),B=r.useRef(),oe=(...c)=>{A(!0),G==null||G(...c)};if(!S)return null;const L=Object.assign({role:o,ref:m.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},ce,{style:a,className:s,tabIndex:-1});let Y=j?j(L):l.jsx("div",Object.assign({},L,{children:r.cloneElement(u,{role:"document"})}));Y=ke(v,E,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:le,onExiting:J,onExited:oe,onEnter:Z,onEntering:P,onEntered:ee,children:Y});let D=null;return f&&(D=K({ref:m.setBackdropRef,onClick:ne}),D=ke(T,p,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:D})),l.jsx(l.Fragment,{children:Qe.createPortal(l.jsxs(l.Fragment,{children:[D,Y]}),S)})});Be.displayName="Modal";const Tt=Object.assign(Be,{Manager:ye});function Ct(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function bt(e,t){e.classList?e.classList.add(t):Ct(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function je(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function xt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=je(e.className,t):e.setAttribute("class",je(e.className&&e.className.baseVal||"",t))}const W={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class wt extends ye{adjustAndStore(t,n,o){const s=n.style[t];n.dataset[t]=s,Q(n,{[t]:`${parseFloat(Q(n,t))+o}px`})}restore(t,n){const o=n.dataset[t];o!==void 0&&(delete n.dataset[t],Q(n,{[t]:o}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(bt(n,"modal-open"),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";I(n,W.FIXED_CONTENT).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth)),I(n,W.STICKY_CONTENT).forEach(a=>this.adjustAndStore(s,a,-t.scrollBarWidth)),I(n,W.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(s,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();xt(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";I(n,W.FIXED_CONTENT).forEach(a=>this.restore(o,a)),I(n,W.STICKY_CONTENT).forEach(a=>this.restore(s,a)),I(n,W.NAVBAR_TOGGLER).forEach(a=>this.restore(s,a))}}let Ee;function Mt(e){return Ee||(Ee=new wt(e)),Ee}const Le=r.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},s)=>(t=$(t,"modal-body"),l.jsx(n,{ref:s,className:O(e,t),...o})));Le.displayName="ModalBody";const De=r.createContext({onHide(){}}),ve=r.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:o,size:s,fullscreen:a,children:u,scrollable:f,...h},d)=>{e=$(e,"modal");const g=`${e}-dialog`,v=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return l.jsx("div",{...h,ref:d,className:O(g,t,s&&`${e}-${s}`,o&&`${g}-centered`,f&&`${g}-scrollable`,a&&v),children:l.jsx("div",{className:O(`${e}-content`,n),children:u})})});ve.displayName="ModalDialog";const Fe=r.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},s)=>(t=$(t,"modal-footer"),l.jsx(n,{ref:s,className:O(e,t),...o})));Fe.displayName="ModalFooter";const Ot=r.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:o,children:s,...a},u)=>{const f=r.useContext(De),h=y(()=>{f==null||f.onHide(),o==null||o()});return l.jsxs("div",{ref:u,...a,children:[s,n&&l.jsx(tt,{"aria-label":e,variant:t,onClick:h})]})}),Ie=r.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:o=!1,...s},a)=>(e=$(e,"modal-header"),l.jsx(Ot,{ref:a,...s,className:O(t,e),closeLabel:n,closeButton:o})));Ie.displayName="ModalHeader";const Nt=Je("h4"),We=r.forwardRef(({className:e,bsPrefix:t,as:n=Nt,...o},s)=>(t=$(t,"modal-title"),l.jsx(n,{ref:s,className:O(e,t),...o})));We.displayName="ModalTitle";function kt(e){return l.jsx(Se,{...e,timeout:null})}function jt(e){return l.jsx(Se,{...e,timeout:null})}const $e=r.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:o,contentClassName:s,children:a,dialogAs:u=ve,"data-bs-theme":f,"aria-labelledby":h,"aria-describedby":d,"aria-label":g,show:v=!1,animation:E=!0,backdrop:T=!0,keyboard:p=!0,onEscapeKeyDown:k,onShow:_,onHide:C,container:H,autoFocus:j=!0,enforceFocus:K=!0,restoreFocus:U=!0,restoreFocusOptions:b,onEntered:x,onExit:V,onExiting:le,onEnter:G,onEntering:J,onExited:Z,backdropClassName:P,manager:ee,...ce},w)=>{const[S,m]=r.useState({}),[de,te]=r.useState(!1),N=r.useRef(!1),A=r.useRef(!1),R=r.useRef(null),[M,z]=Ze(),ue=ie(w,z),ne=y(C),fe=Pe();e=$(e,"modal");const X=r.useMemo(()=>({onHide:ne}),[ne]);function B(){return ee||Mt({isRTL:fe})}function oe(i){if(!ae)return;const F=B().getScrollbarWidth()>0,Ce=i.scrollHeight>pe(i).documentElement.clientHeight;m({paddingRight:F&&!Ce?Oe():void 0,paddingLeft:!F&&Ce?Oe():void 0})}const L=y(()=>{M&&oe(M.dialog)});Ae(()=>{Me(window,"resize",L),R.current==null||R.current()});const Y=()=>{N.current=!0},D=i=>{N.current&&M&&i.target===M.dialog&&(A.current=!0),N.current=!1},c=()=>{te(!0),R.current=nt(M.dialog,()=>{te(!1)})},re=i=>{i.target===i.currentTarget&&c()},q=i=>{if(T==="static"){re(i);return}if(A.current||i.target!==i.currentTarget){A.current=!1;return}C==null||C()},_e=i=>{p?k==null||k(i):(i.preventDefault(),T==="static"&&c())},He=(i,F)=>{i&&oe(i),G==null||G(i,F)},Ke=i=>{R.current==null||R.current(),V==null||V(i)},Ue=(i,F)=>{J==null||J(i,F),et(window,"resize",L)},Ve=i=>{i&&(i.style.display=""),Z==null||Z(i),Me(window,"resize",L)},Ge=r.useCallback(i=>l.jsx("div",{...i,className:O(`${e}-backdrop`,P,!E&&"show")}),[E,P,e]),Te={...n,...S};Te.display="block";const ze=i=>l.jsx("div",{role:"dialog",...i,style:Te,className:O(t,e,de&&`${e}-static`,!E&&"show"),onClick:T?q:void 0,onMouseUp:D,"data-bs-theme":f,"aria-label":g,"aria-labelledby":h,"aria-describedby":d,children:l.jsx(u,{...ce,onMouseDown:Y,className:o,contentClassName:s,children:a})});return l.jsx(De.Provider,{value:X,children:l.jsx(Tt,{show:v,ref:ue,backdrop:T,container:H,keyboard:!0,autoFocus:j,enforceFocus:K,restoreFocus:U,restoreFocusOptions:b,onEscapeKeyDown:_e,onShow:_,onHide:C,onEnter:He,onEntering:Ue,onEntered:x,onExit:Ke,onExiting:le,onExited:Ve,manager:B(),transition:E?kt:void 0,backdropTransition:E?jt:void 0,renderBackdrop:Ge,renderDialog:ze})})});$e.displayName="Modal";const Dt=Object.assign($e,{Body:Le,Header:Ie,Title:We,Footer:Fe,Dialog:ve,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Dt as M,st as a,Lt as b,Ct as h,it as i,Bt as m,ke as r,Ae as u};
