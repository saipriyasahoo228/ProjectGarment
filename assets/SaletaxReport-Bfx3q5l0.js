import{aa as L,ab as W,j as e,r,S as R,ad as E,J as k,U as F,a6 as w,a8 as A,a9 as f,W as ee,X as te,Y as ae,Z as re,_ as I,$ as s,a1 as se,G as oe}from"./index-Bbe0Ovny.js";import{E as le}from"./jspdf.plugin.autotable-Blg2YauO.js";import{d as ne,T as ie,u as j,w as ce}from"./PictureAsPdf-Cg_HAf00.js";import{d as de}from"./Description-C-I2drT8.js";import{C as xe}from"./Container-DTlu8WPL.js";var _={},pe=W;Object.defineProperty(_,"__esModule",{value:!0});var m=_.default=void 0,ue=pe(L()),he=e;m=_.default=(0,ue.default)((0,he.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");var S={},ge=W;Object.defineProperty(S,"__esModule",{value:!0});var y=S.default=void 0,fe=ge(L()),je=e;y=S.default=(0,fe.default)((0,je.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");const ve=()=>{const[i,$]=r.useState(""),[c,z]=r.useState(""),[o,B]=r.useState(""),[h,q]=r.useState(""),[b,M]=r.useState([]),[d,O]=r.useState([]),[V,v]=r.useState(!1),[g,T]=r.useState(0),[p,N]=r.useState(5),[u,U]=r.useState("asc"),[l,Y]=r.useState("total_price"),G=async()=>{v(!0);try{const a=(await oe.post("/api/retailsale/saletax-report/",{start_date:i,end_date:c,tax_type:o})).data.data;M(a)}catch(t){console.error("Error fetching report data:",t)}finally{v(!1)}};r.useEffect(()=>{G()},[i,c,o]),r.useEffect(()=>{(()=>{const a=new Date(i),n=new Date(c),Z=b.filter(D=>{const P=new Date(D.date),K=(!i||P>=a)&&(!c||P<=n),Q=!o||D.sale_type===o;return K&&Q});O(Z)})()},[i,c,o,b]);const H=()=>{if(d.length===0){alert("No data to export");return}const t=new le;t.text("Sale Tax Report",14,10),t.autoTable({head:[["Date","Category","Sale Type","Total Price","Total Tax"]],body:d.map(a=>[a.date,a.category,a.sale_type,a.total_price.toFixed(2),a.total_tax.toFixed(2)]),startY:20}),t.save("sale_tax_report.pdf")},J=()=>{if(d.length===0){alert("No data to export");return}const t=j.json_to_sheet(d.map(n=>({Date:n.date,Category:n.category,"Sale Type":n.sale_type,"Total Price":n.total_price.toFixed(2),"Total Tax":n.total_tax.toFixed(2)}))),a=j.book_new();j.book_append_sheet(a,t,"Sale Tax Report"),ce(a,"sale_tax_report.xlsx")},X=t=>{q(t.target.value),t.target.value==="pdf"?H():t.target.value==="excel"&&J()},x=t=>{U(l===t&&u==="asc"?"desc":"asc"),Y(t)},C=d.sort((t,a)=>u==="asc"?t[l]>a[l]?1:-1:t[l]<a[l]?1:-1);return e.jsx(xe,{maxWidth:"lg",sx:{marginTop:4},children:e.jsxs(R,{elevation:3,sx:{padding:4,backgroundColor:"#f9dff5"},children:[e.jsx(E,{variant:"h4",gutterBottom:!0,align:"center",color:"purple",children:"Sale Tax Report"}),e.jsxs(k,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:2,marginBottom:3},children:[e.jsx(F,{label:"Start Date",type:"date",value:i,onChange:t=>$(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(F,{label:"End Date",type:"date",value:c,onChange:t=>z(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(w,{sx:{minWidth:150},children:e.jsx(A,{value:o,onChange:t=>B(t.target.value),displayEmpty:!0,renderValue:()=>o||"Select Sale Type",children:e.jsx(f,{value:"RetailSale",children:"Retail Sale"})})}),e.jsx(w,{sx:{minWidth:150},children:e.jsxs(A,{value:h,onChange:X,displayEmpty:!0,renderValue:()=>h||"Export As",children:[e.jsxs(f,{value:"pdf",children:[e.jsx(ne,{sx:{marginRight:1,color:"red"}}),"PDF"]}),e.jsxs(f,{value:"excel",children:[e.jsx(de,{sx:{marginRight:1,color:"green"}}),"Excel"]})]})})]}),V?e.jsx(k,{sx:{display:"flex",justifyContent:"center",marginTop:4},children:e.jsx(ee,{})}):e.jsx(e.Fragment,{children:d.length>0?e.jsxs(e.Fragment,{children:[e.jsx(te,{component:R,sx:{marginTop:4,backgroundColor:"#f4c4ec"},children:e.jsxs(ae,{children:[e.jsx(re,{children:e.jsxs(I,{children:[e.jsx(s,{onClick:()=>x("date"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Date"})}),e.jsx(s,{onClick:()=>x("category"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Category"})}),e.jsx(s,{onClick:()=>x("sale_type"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Sale Type"})}),e.jsx(s,{onClick:()=>x("total_price"),align:"right",sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsxs("strong",{children:["Total Price ",l==="total_price"?u==="asc"?e.jsx(m,{fontSize:"small"}):e.jsx(y,{fontSize:"small"}):null]})}),e.jsx(s,{onClick:()=>x("total_tax"),align:"right",sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsxs("strong",{children:["Total Tax ",l==="total_tax"?u==="asc"?e.jsx(m,{fontSize:"small"}):e.jsx(y,{fontSize:"small"}):null]})})]})}),e.jsx(se,{children:C.slice(g*p,g*p+p).map(t=>e.jsxs(I,{children:[e.jsx(s,{children:t.date}),e.jsx(s,{children:t.category}),e.jsx(s,{children:t.sale_type}),e.jsx(s,{align:"right",children:t.total_price.toFixed(2)}),e.jsx(s,{align:"right",children:t.total_tax.toFixed(2)})]},t.date))})]})}),e.jsx(ie,{rowsPerPageOptions:[5,10,25],component:"div",count:C.length,rowsPerPage:p,page:g,onPageChange:(t,a)=>T(a),onRowsPerPageChange:t=>{N(parseInt(t.target.value,10)),T(0)}})]}):e.jsx(E,{variant:"h6",align:"center",color:"text.secondary",sx:{marginTop:4},children:"No data available for the selected filters."})})]})})};export{ve as default};
