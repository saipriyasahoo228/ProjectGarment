import{r as d,j as B,c as $,u as h,H as C,I as N}from"./index-DJEOmVav.js";function j({as:r,bsPrefix:s,className:c,...e}){s=h(s,"col");const p=C(),u=N(),o=[],f=[];return p.forEach(a=>{const n=e[a];delete e[a];let t,i,m;typeof n=="object"&&n!=null?{span:t,offset:i,order:m}=n:t=n;const l=a!==u?`-${a}`:"";t&&o.push(t===!0?`${s}${l}`:`${s}${l}-${t}`),m!=null&&f.push(`order${l}-${m}`),i!=null&&f.push(`offset${l}-${i}`)}),[{...e,className:$(c,...o,...f)},{as:r,bsPrefix:s,spans:o}]}const x=d.forwardRef((r,s)=>{const[{className:c,...e},{as:p="div",bsPrefix:u,spans:o}]=j(r);return B.jsx(p,{...e,ref:s,className:$(c,!o.length&&u)})});x.displayName="Col";export{x as C};
