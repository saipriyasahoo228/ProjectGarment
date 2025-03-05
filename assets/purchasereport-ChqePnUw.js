import{r as a,j as e,S as m,ad as b,J as E,U as F,a6 as N,a8 as V,a9 as j,X as B,Y as G,Z as q,_ as f,$ as o,a1 as I,G as O}from"./index-DJEOmVav.js";import{d as L,T as Q,u as h,w as W}from"./PictureAsPdf-CDE85P8m.js";import{d as Y}from"./InsertDriveFile-vusH50E0.js";import{E as $}from"./jspdf.plugin.autotable-BJ5pxiWk.js";import{C as H}from"./Container-Bpnb6PYQ.js";const z=()=>{const[x,_]=a.useState(""),[C,y]=a.useState([]),[p,k]=a.useState("asc"),[c,S]=a.useState("party_name"),[d,g]=a.useState(0),[l,P]=a.useState(5);a.useEffect(()=>{(async()=>{try{const t=await O.post("api/purchase/purchase-details/");y(t.data.data)}catch(t){console.error("Error fetching purchase report data:",t)}})()},[]);const v=r=>{_(r.target.value)},n=r=>{k(c===r&&p==="asc"?"desc":"asc"),S(r)},i=C.filter(r=>r.party_name.toLowerCase().includes(x.toLowerCase())),u=i.sort((r,t)=>p==="asc"?r[c]<t[c]?-1:1:r[c]>t[c]?-1:1),T=()=>{const r=new $;r.text("Purchase Report",20,10);const t=["Party Name","Address","Item","Voucher Number","Voucher Date","Quantity","Rate","Discount Percentage","Discount Amount","Taxable Amount","GST Percentage","GST Amount","Purchase Amount","Reference Voucher Number"],A=i.map(s=>[s.party_name,s.address,s.item,s.voucher_number,s.voucher_date,s.quantity,s.rate,s.discount_percentage,s.discount_amount,s.taxable_amount,s.gst_percentage,s.gst_amount,s.purchase_amount,s.reference_voucher_number]);r.autoTable({head:[t],body:A,startY:20}),r.save("purchase_report.pdf")},R=()=>{const r=h.json_to_sheet(i),t=h.book_new();h.book_append_sheet(t,r,"Purchase Report"),W(t,"purchase_report.xlsx")},D=r=>{const t=r.target.value;t==="pdf"?T():t==="excel"&&R()};return e.jsx(H,{maxWidth:"lg",sx:{marginTop:4},children:e.jsxs(m,{elevation:3,sx:{padding:4,backgroundColor:"#f9dff5"},children:[e.jsx(b,{variant:"h4",gutterBottom:!0,align:"center",color:"purple",children:"Purchase Report"}),e.jsxs(E,{sx:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[e.jsx(F,{label:"Search Party Name",value:x,onChange:v,sx:{flexGrow:1,marginRight:2}}),e.jsx(N,{sx:{minWidth:160},children:e.jsxs(V,{value:"",onChange:D,displayEmpty:!0,renderValue:()=>"Export As",children:[e.jsxs(j,{value:"pdf",children:[e.jsx(L,{sx:{color:"red",marginRight:1}}),"PDF"]}),e.jsxs(j,{value:"excel",children:[e.jsx(Y,{sx:{color:"green",marginRight:1}}),"Excel"]})]})})]}),u.length>0?e.jsxs(e.Fragment,{children:[e.jsx(B,{component:m,sx:{marginTop:4,backgroundColor:"#f4c4ec"},children:e.jsxs(G,{children:[e.jsx(q,{children:e.jsxs(f,{children:[e.jsx(o,{onClick:()=>n("party_name"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Party Name"})}),e.jsx(o,{onClick:()=>n("address"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Address"})}),e.jsx(o,{onClick:()=>n("item"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Item"})}),e.jsx(o,{onClick:()=>n("voucher_number"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Voucher Number"})}),e.jsx(o,{onClick:()=>n("voucher_date"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Voucher Date"})}),e.jsx(o,{onClick:()=>n("quantity"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Quantity"})}),e.jsx(o,{onClick:()=>n("rate"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Rate"})}),e.jsx(o,{onClick:()=>n("discount_percentage"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Discount Percentage"})}),e.jsx(o,{onClick:()=>n("discount_amount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Discount Amount"})}),e.jsx(o,{onClick:()=>n("taxable_amount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Taxable Amount"})}),e.jsx(o,{onClick:()=>n("gst_percentage"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"GST Percentage"})}),e.jsx(o,{onClick:()=>n("gst_amount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"GST Amount"})}),e.jsx(o,{onClick:()=>n("purchase_amount"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Purchase Amount"})}),e.jsx(o,{onClick:()=>n("reference_voucher_number"),sx:{cursor:"pointer",backgroundColor:"#ea8cdb",fontStyle:"bold",color:"purple"},children:e.jsx("strong",{children:"Reference Voucher Number"})})]})}),e.jsx(I,{children:u.slice(d*l,d*l+l).map(r=>e.jsxs(f,{children:[e.jsx(o,{children:r.party_name}),e.jsx(o,{children:r.address}),e.jsx(o,{children:r.item}),e.jsx(o,{children:r.voucher_number}),e.jsx(o,{children:r.voucher_date}),e.jsx(o,{children:r.quantity}),e.jsx(o,{children:r.rate}),e.jsx(o,{children:r.discount_percentage}),e.jsx(o,{children:r.discount_amount}),e.jsx(o,{children:r.taxable_amount}),e.jsx(o,{children:r.gst_percentage}),e.jsx(o,{children:r.gst_amount}),e.jsx(o,{children:r.purchase_amount}),e.jsx(o,{children:r.reference_voucher_number})]},r.voucher_number))})]})}),e.jsx(Q,{rowsPerPageOptions:[5,10,25],component:"div",count:u.length,rowsPerPage:l,page:d,onPageChange:(r,t)=>g(t),onRowsPerPageChange:r=>{P(parseInt(r.target.value,10)),g(0)}})]}):e.jsx(b,{variant:"body1",color:"textSecondary",align:"center",children:"No items found."})]})})};export{z as default};
