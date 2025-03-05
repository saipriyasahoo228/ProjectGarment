import{r as o,aH as g,u as h,j as e,c as p,aI as I,aJ as A,aK as Q,P as w,C as U,B as T,G as k}from"./index-DJEOmVav.js";import{b as W,M as u}from"./Modal-COTehh6r.js";import{C as X}from"./Col-CR0LDZjT.js";import"./CloseButton-C2t9bUN4.js";const j=o.forwardRef(({bsPrefix:a,className:s,htmlFor:t,...l},r)=>{const{controlId:n}=o.useContext(g);return a=h(a,"form-check-label"),e.jsx("label",{...l,ref:r,htmlFor:t||n,className:p(s,a)})});j.displayName="FormCheckLabel";const b=o.forwardRef(({id:a,bsPrefix:s,bsSwitchPrefix:t,inline:l=!1,reverse:r=!1,disabled:n=!1,isValid:i=!1,isInvalid:y=!1,feedbackTooltip:d=!1,feedback:c,feedbackType:f,className:D,style:Y,title:J="",type:C="checkbox",label:F,children:N,as:K="input",...V},_)=>{s=h(s,"form-check"),t=h(t,"form-switch");const{controlId:L}=o.useContext(g),q=o.useMemo(()=>({controlId:a||L}),[L,a]),R=!N&&F!=null&&F!==!1||W(N,j),z=e.jsx(I,{...V,type:C==="switch"?"checkbox":C,ref:_,isValid:i,isInvalid:y,disabled:n,as:K});return e.jsx(g.Provider,{value:q,children:e.jsx("div",{style:Y,className:p(D,R&&s,l&&`${s}-inline`,r&&`${s}-reverse`,C==="switch"&&t),children:N||e.jsxs(e.Fragment,{children:[z,R&&e.jsx(j,{title:J,children:F}),c&&e.jsx(A,{type:f,tooltip:d,children:c})]})})})});b.displayName="FormCheck";const x=Object.assign(b,{Input:I,Label:j}),$=o.forwardRef(({className:a,bsPrefix:s,as:t="div",...l},r)=>(s=h(s,"form-floating"),e.jsx(t,{ref:r,className:p(a,s),...l})));$.displayName="FormFloating";const v=o.forwardRef(({controlId:a,as:s="div",...t},l)=>{const r=o.useMemo(()=>({controlId:a}),[a]);return e.jsx(g.Provider,{value:r,children:e.jsx(s,{...t,ref:l})})});v.displayName="FormGroup";const M=o.forwardRef(({as:a="label",bsPrefix:s,column:t=!1,visuallyHidden:l=!1,className:r,htmlFor:n,...i},y)=>{const{controlId:d}=o.useContext(g);s=h(s,"form-label");let c="col-form-label";typeof t=="string"&&(c=`${c} ${c}-${t}`);const f=p(r,s,l&&"visually-hidden",t&&c);return n=n||d,t?e.jsx(X,{ref:y,as:"label",className:f,htmlFor:n,...i}):e.jsx(a,{ref:y,className:f,htmlFor:n,...i})});M.displayName="FormLabel";const E=o.forwardRef(({bsPrefix:a,className:s,id:t,...l},r)=>{const{controlId:n}=o.useContext(g);return a=h(a,"form-range"),e.jsx("input",{...l,type:"range",ref:r,className:p(s,a),id:t||n})});E.displayName="FormRange";const G=o.forwardRef(({bsPrefix:a,size:s,htmlSize:t,className:l,isValid:r=!1,isInvalid:n=!1,id:i,...y},d)=>{const{controlId:c}=o.useContext(g);return a=h(a,"form-select"),e.jsx("select",{...y,size:t,ref:d,className:p(l,a,s&&`${a}-${s}`,r&&"is-valid",n&&"is-invalid"),id:i||c})});G.displayName="FormSelect";const B=o.forwardRef(({bsPrefix:a,className:s,as:t="small",muted:l,...r},n)=>(a=h(a,"form-text"),e.jsx(t,{...r,ref:n,className:p(s,a,l&&"text-muted")})));B.displayName="FormText";const O=o.forwardRef((a,s)=>e.jsx(x,{...a,ref:s,type:"switch"}));O.displayName="Switch";const Z=Object.assign(O,{Input:x.Input,Label:x.Label}),H=o.forwardRef(({bsPrefix:a,className:s,children:t,controlId:l,label:r,...n},i)=>(a=h(a,"form-floating"),e.jsxs(v,{ref:i,className:p(s,a),controlId:l,...n,children:[t,e.jsx("label",{htmlFor:l,children:r})]})));H.displayName="FloatingLabel";const P={_ref:w.any,validated:w.bool,as:w.elementType},S=o.forwardRef(({className:a,validated:s,as:t="form",...l},r)=>e.jsx(t,{...l,ref:r,className:p(a,s&&"was-validated")}));S.displayName="Form";S.propTypes=P;const m=Object.assign(S,{Group:v,Control:Q,Floating:$,Check:x,Switch:Z,Label:M,Text:B,Range:E,Select:G,FloatingLabel:H}),re=()=>{const[a,s]=o.useState({daily:0,monthly:0,yearly:0}),[t,l]=o.useState(!1),[r,n]=o.useState({daily:0,monthly:0,yearly:0});o.useEffect(()=>{(async()=>{try{const c=await k.get("/api/salestarget/salestargets/");s(c.data),n(c.data)}catch(c){console.error("Error fetching sales targets:",c)}})()},[]);const i=d=>{n({...r,[d.target.name]:d.target.value})},y=async()=>{try{await k.put("/api/salestarget/salestargets/update/",r),s(r),l(!1)}catch(d){console.error("Error updating sales targets:",d)}};return e.jsxs(U,{className:"p-3",children:[e.jsx("h4",{children:"Sales Targets"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Daily Target:"})," ₹",a.daily.toLocaleString("en-IN")]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monthly Target:"})," ₹",a.monthly.toLocaleString("en-IN")]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Yearly Target:"})," ₹",a.yearly.toLocaleString("en-IN")]}),e.jsx(T,{variant:"primary",onClick:()=>l(!0),children:"Edit Targets"}),e.jsxs(u,{show:t,onHide:()=>l(!1),children:[e.jsx(u.Header,{closeButton:!0,children:e.jsx(u.Title,{children:"Edit Sales Targets"})}),e.jsx(u.Body,{children:e.jsxs(m,{children:[e.jsxs(m.Group,{className:"mb-3",children:[e.jsx(m.Label,{children:"Daily Target"}),e.jsx(m.Control,{type:"number",name:"daily",value:r.daily,onChange:i})]}),e.jsxs(m.Group,{className:"mb-3",children:[e.jsx(m.Label,{children:"Monthly Target"}),e.jsx(m.Control,{type:"number",name:"monthly",value:r.monthly,onChange:i})]}),e.jsxs(m.Group,{className:"mb-3",children:[e.jsx(m.Label,{children:"Yearly Target"}),e.jsx(m.Control,{type:"number",name:"yearly",value:r.yearly,onChange:i})]})]})}),e.jsxs(u.Footer,{children:[e.jsx(T,{variant:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(T,{variant:"primary",onClick:y,children:"Save Changes"})]})]})]})};export{re as default};
