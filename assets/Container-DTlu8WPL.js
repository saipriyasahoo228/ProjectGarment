import{aD as h,aE as W,aF as k,aG as v,ai as c,r as P,j as R,am as G,an as T,af as $,ah as S,ak as M}from"./index-Bbe0Ovny.js";const j=h();function y(a){const{theme:t,name:s,props:n}=a;return!t||!t.components||!t.components[s]||!t.components[s].defaultProps?n:W(t.components[s].defaultProps,n)}function D({props:a,name:t,defaultTheme:s,themeId:n}){let i=k(s);return n&&(i=i[n]||i),y({theme:i,name:t,props:a})}const E=v(),L=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:s}=a;return[t.root,t[`maxWidth${c(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),N=a=>D({props:a,name:"MuiContainer",defaultTheme:E}),U=(a,t)=>{const s=r=>$(t,r),{classes:n,fixed:i,disableGutters:l,maxWidth:e}=a,o={root:["root",e&&`maxWidth${c(String(e))}`,i&&"fixed",l&&"disableGutters"]};return T(o,s,n)};function z(a={}){const{createStyledComponent:t=L,useThemeProps:s=N,componentName:n="MuiContainer"}=a,i=t(({theme:e,ownerState:o})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!o.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:o})=>o.fixed&&Object.keys(e.breakpoints.values).reduce((r,p)=>{const u=p,d=e.breakpoints.values[u];return d!==0&&(r[e.breakpoints.up(u)]={maxWidth:`${d}${e.breakpoints.unit}`}),r},{}),({theme:e,ownerState:o})=>({...o.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...o.maxWidth&&o.maxWidth!=="xs"&&{[e.breakpoints.up(o.maxWidth)]:{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`}}}));return P.forwardRef(function(o,r){const p=s(o),{className:u,component:d="div",disableGutters:x=!1,fixed:f=!1,maxWidth:b="lg",classes:w,...g}=p,m={...p,component:d,disableGutters:x,fixed:f,maxWidth:b},C=U(m,n);return R.jsx(i,{as:d,ownerState:m,className:G(C.root,u),ref:r,...g})})}const O=z({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:s}=a;return[t.root,t[`maxWidth${c(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:a=>M({props:a,name:"MuiContainer"})});export{O as C};
