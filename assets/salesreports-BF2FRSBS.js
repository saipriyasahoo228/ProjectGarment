import{r,j as e,S,ad as y,J as C,U as T,a6 as _,a8 as v,a9 as d,X as Y,Y as $,Z as w,_ as k,$ as s,a1 as G,G as H}from"./index-N_PQDySr.js";import{E as J}from"./jspdf.plugin.autotable-YEY3S-9E.js";import{d as M,T as U,u as f,w as X}from"./PictureAsPdf-BVGiPIdr.js";import{d as Z}from"./Description-CsmwZ7LL.js";import{C as z}from"./Container-7UvSAqlZ.js";const oe=()=>{const[x,D]=r.useState(""),[h,E]=r.useState(""),[o,P]=r.useState(""),[g,F]=r.useState(""),[K,R]=r.useState([]),[W,A]=r.useState(0),[n,B]=r.useState([]),[m,b]=r.useState(0),[p,I]=r.useState(5),[j,N]=r.useState("asc"),[l,O]=r.useState("date"),Q=async()=>{try{const t={start_date:x||null,end_date:h||null,sale_type:o||null},a=await H.post("api/retailsale/sales-report/",t,{headers:{"Content-Type":"application/json"}});R(a.data.report||[]),A(a.data.total_sum||0),B(a.data.report||[])}catch(t){console.error("Error fetching sales report:",t)}},q=()=>{if(n.length===0){alert("No data to export");return}const t=new J;t.text("Sales Report",14,10),t.autoTable({head:[["Date","Item Type","Category","Amount","Quantity"]],body:n.map(a=>[a.date,a.sale_type,a.category,a.total_amount.toFixed(2),a.total_unit]),startY:20}),t.save("sales_report.pdf")},L=()=>{if(n.length===0){alert("No data to export");return}const t=f.json_to_sheet(n.map(c=>({Date:c.date,"Sale Type":c.sale_type,Category:c.category,Amount:c.total_amount.toFixed(2),Quantity:c.total_unit}))),a=f.book_new();f.book_append_sheet(a,t,"Sale Tax Report"),X(a,"sale_report.xlsx")},V=t=>{F(t.target.value),t.target.value==="pdf"?q():t.target.value==="excel"&&L()},i=t=>{N(l===t&&j==="asc"?"desc":"asc"),O(t)},u=n.slice().sort((t,a)=>t[l]<a[l]?j==="asc"?-1:1:t[l]>a[l]?j==="asc"?1:-1:0);return r.useEffect(()=>{Q()},[x,h,o]),e.jsx(z,{maxWidth:"lg",sx:{marginTop:4},children:e.jsxs(S,{elevation:3,sx:{padding:4,backgroundColor:"#f9dff5"},children:[e.jsx(y,{variant:"h4",gutterBottom:!0,align:"center",color:"purple",children:"Sales Report"}),e.jsxs(C,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:2,marginBottom:3},children:[e.jsx(T,{label:"Start Date",type:"date",value:x,onChange:t=>D(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(T,{label:"End Date",type:"date",value:h,onChange:t=>E(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(_,{sx:{minWidth:150},children:e.jsxs(v,{value:o,onChange:t=>P(t.target.value),displayEmpty:!0,renderValue:()=>o||"Select Sale Type",children:[e.jsx(d,{value:"",children:"All Types"}),e.jsx(d,{value:"RetailSale",children:"Retail Sale"}),e.jsx(d,{value:"BulkSale",children:"Bulk Sale"})]})}),e.jsx(_,{sx:{minWidth:150},children:e.jsxs(v,{value:g,onChange:V,displayEmpty:!0,renderValue:()=>g||"Export As",children:[e.jsxs(d,{value:"pdf",children:[e.jsx(M,{sx:{marginRight:1,color:"red"}}),"PDF"]}),e.jsxs(d,{value:"excel",children:[e.jsx(Z,{sx:{marginRight:1,color:"green"}}),"Excel"]})]})})]}),u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Y,{component:S,sx:{marginTop:4,backgroundColor:"#f4c4ec"},children:e.jsxs($,{children:[e.jsx(w,{children:e.jsxs(k,{children:[e.jsx(s,{onClick:()=>i("date"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontWeight:"bold",color:"purple"},children:e.jsx("strong",{children:"Date"})}),e.jsx(s,{onClick:()=>i("sale_type"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontWeight:"bold",color:"purple"},children:e.jsx("strong",{children:"Sale Type"})}),e.jsx(s,{onClick:()=>i("category"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontWeight:"bold",color:"purple"},children:e.jsx("strong",{children:"Category"})}),e.jsx(s,{align:"right",onClick:()=>i("total_amount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontWeight:"bold",color:"purple"},children:e.jsx("strong",{children:"Amount"})}),e.jsx(s,{align:"right",onClick:()=>i("total_unit"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontWeight:"bold",color:"purple"},children:e.jsx("strong",{children:"Quantity"})})]})}),e.jsx(G,{children:u.slice(m*p,m*p+p).map(t=>e.jsxs(k,{children:[e.jsx(s,{children:t.date}),e.jsx(s,{children:t.sale_type}),e.jsx(s,{children:t.category}),e.jsx(s,{align:"right",children:parseFloat(t.total_amount).toFixed(2)}),e.jsx(s,{align:"right",children:t.total_unit})]},t.date))})]})}),e.jsx(U,{rowsPerPageOptions:[5,10,25],component:"div",count:u.length,rowsPerPage:p,page:m,onPageChange:(t,a)=>b(a),onRowsPerPageChange:t=>{I(parseInt(t.target.value,10)),b(0)},sx:{marginTop:2}}),e.jsx(C,{sx:{textAlign:"right",marginTop:2,padding:2},children:e.jsxs(y,{variant:"h6",color:"purple",children:["Total Sum: ₹",parseFloat(W).toFixed(2)]})})]}),u.length===0&&e.jsx(y,{variant:"h6",color:"error",align:"center",children:"No data found"})]})})};export{oe as default};
