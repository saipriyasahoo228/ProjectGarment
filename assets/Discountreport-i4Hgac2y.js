import{r,j as e,S,ad as Y,J as q,U as C,a6 as _,a8 as P,a9 as p,X as G,Y as H,Z as J,_ as T,$ as l,a1 as U,G as X}from"./index-DJEOmVav.js";import{E as Z}from"./jspdf.plugin.autotable-BJ5pxiWk.js";import{d as z,T as K,u as y,w as Q}from"./PictureAsPdf-CDE85P8m.js";import{d as ee}from"./Description-2sF1fotC.js";import{C as te}from"./Container-Bpnb6PYQ.js";const le=()=>{const[c,v]=r.useState(""),[d,E]=r.useState(""),[n,k]=r.useState(""),[h,R]=r.useState(""),[b,F]=r.useState([]),[i,B]=r.useState([]),[m,A]=r.useState(0),[x,W]=r.useState(5),[g,$]=r.useState("asc"),[u,I]=r.useState("date");r.useEffect(()=>{(async()=>{try{const a=await X.post("api/retailsale/salediscount-summary/",{start_date:c,end_date:d,saletype:n});F(a.data.sales_summary)}catch(a){console.error("Error fetching data:",a)}})()},[c,d,n]),r.useEffect(()=>{w()},[c,d,n,b]);const w=()=>{const t=new Date(c),a=new Date(d),s=b.filter(o=>{const D=new Date(o.date),L=(!c||D>=t)&&(!d||D<=a),V=n?o.saletype===n:!0;return L&&V});B(s)},M=()=>{if(i.length===0){alert("No data to export");return}const t=new Z;t.text("Discount Report",14,10),t.autoTable({head:[["Date","Sale Type","Discount Amount","Discount Percentage","Customer Details"]],body:i.map(a=>[a.date,a.saletype,a.total_discount.toFixed(2),a.discountPercentage,a.customer_details.map(s=>`${s.fullname}
${s.phone_number}
${s.address}`).join(`
`)]),startY:20}),t.save("discount_report.pdf")},N=()=>{if(i.length===0){alert("No data to export");return}const t=y.json_to_sheet(i.map(s=>({Date:s.date,"Sale Type":s.saletype,"Discount Amount":s.total_discount.toFixed(2),"Discount Percentage":s.discountPercentage,"Customer Name":s.customer_details.map(o=>o.fullname).join(", "),"Customer Address":s.customer_details.map(o=>o.address).join(`
`),"Customer Phone":s.customer_details.map(o=>o.phone_number).join(", ")}))),a=y.book_new();y.book_append_sheet(a,t,"Discount Report"),Q(a,"discount_report.xlsx")},O=t=>{R(t.target.value),t.target.value==="pdf"?M():t.target.value==="excel"&&N()},j=t=>{$(u===t&&g==="asc"?"desc":"asc"),I(t)},f=i.slice().sort((t,a)=>t[u]<a[u]?g==="asc"?-1:1:t[u]>a[u]?g==="asc"?1:-1:0);return e.jsx(te,{maxWidth:"lg",sx:{marginTop:4},children:e.jsxs(S,{elevation:3,sx:{padding:4,backgroundColor:"#f9dff5"},children:[e.jsx(Y,{variant:"h4",gutterBottom:!0,align:"center",color:"purple",children:"Discount Report"}),e.jsxs(q,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:2,marginBottom:3},children:[e.jsx(C,{label:"Start Date",type:"date",value:c,onChange:t=>v(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(C,{label:"End Date",type:"date",value:d,onChange:t=>E(t.target.value),InputLabelProps:{shrink:!0},sx:{minWidth:150}}),e.jsx(_,{sx:{minWidth:150},children:e.jsxs(P,{value:n,onChange:t=>k(t.target.value),displayEmpty:!0,renderValue:()=>n||"Select Sale Type",children:[e.jsx(p,{value:"",children:e.jsx("em",{children:"All"})}),e.jsx(p,{value:"RetailSale",children:"Retail"}),e.jsx(p,{value:"BulkSale",children:"BulkSale"})]})}),e.jsx(_,{sx:{minWidth:150},children:e.jsxs(P,{value:h,onChange:O,displayEmpty:!0,renderValue:()=>h||"Export As",children:[e.jsxs(p,{value:"pdf",children:[e.jsx(z,{sx:{marginRight:1,color:"red"}}),"PDF"]}),e.jsxs(p,{value:"excel",children:[e.jsx(ee,{sx:{marginRight:1,color:"green"}}),"Excel"]})]})})]}),f.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(G,{component:S,sx:{marginTop:4,backgroundColor:"#f4c4ec"},children:e.jsxs(H,{children:[e.jsx(J,{children:e.jsxs(T,{children:[e.jsx(l,{onClick:()=>j("date"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Date"})}),e.jsx(l,{onClick:()=>j("saletype"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Sale Type"})}),e.jsx(l,{onClick:()=>j("total_discount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Total Discount"})}),e.jsx(l,{sx:{backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Customer Details"})})]})}),e.jsx(U,{children:f.slice(m*x,m*x+x).map(t=>e.jsxs(T,{children:[e.jsx(l,{children:t.date}),e.jsx(l,{children:t.saletype}),e.jsx(l,{children:t.total_discount.toFixed(2)}),e.jsx(l,{children:t.customer_details.map((a,s)=>e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("strong",{children:a.fullname}),e.jsx("br",{}),"Phone: ",a.phone_number,e.jsx("br",{}),"Address: ",a.address]},s))})]},t.date))})]})}),e.jsx(K,{rowsPerPageOptions:[5,10,25],component:"div",count:f.length,rowsPerPage:x,page:m,onPageChange:(t,a)=>A(a),onRowsPerPageChange:t=>W(parseInt(t.target.value,10))})]})]})})};export{le as default};
