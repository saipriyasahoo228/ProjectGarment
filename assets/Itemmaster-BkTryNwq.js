import{a5 as V,j as t,r as i,J as he,K as p,M as H,O as B,Q as O,S as P,U as c,a6 as L,a7 as Y,a8 as U,a9 as Q,a0 as b,V as Z,W as me,X as ge,$ as n,Y as M,Z as F,_ as S,a1 as K,a2 as pe,a3 as xe,G as x}from"./index-DJEOmVav.js";import{E as fe}from"./jspdf.plugin.autotable-BJ5pxiWk.js";import{D as ye}from"./Download-BK-yiSwi.js";const _e=V(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle"),Ce=V(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"}),"RemoveCircle");function ke(){const[a,l]=i.useState({item_name:"",item_code:"",category_item:"",sub_category:"",hsn_code:"",unit_price:"",stock_quantity:"",description:"",sizes:[]}),[d,A]=i.useState([]),[k,G]=i.useState([]),[v,J]=i.useState([]),[u,D]=i.useState({add:!1}),[X,z]=i.useState(!1),[y,E]=i.useState(null),[ee,te]=i.useState(null),[se,_]=i.useState(!1),I=i.useRef([]),q=async()=>{try{const e=await x.get("/api/user/items/");A(e.data.data)}catch(e){console.error("Error fetching items:",e)}},ae=async()=>{try{const e=await x.get("/api/user/categories/");G(e.data)}catch(e){console.error("Error fetching categories:",e)}};i.useEffect(()=>{q(),ae()},[]);const re=()=>{let e=[];a.item_name||e.push("⚠️ Item Name is required."),a.item_code||e.push("⚠️ Item Code is required."),a.hsn_code||e.push("⚠️ HSN Code is required."),a.category_name||e.push("⚠️ Category is required."),a.sub_category||e.push("⚠️ Sub-Category is required.");const s=/^[A-Za-z\s']+$/,r=/^[A-Za-z0-9_]+$/,o=/^[A-Za-z0-9_]+$/,m=/^[A-Za-z0-9]+$/,f=/^[0-9]+(\.[0-9]+)?$/,de=/^[0-9]+$/,ue=/^[A-Za-z0-9\s,]*$/;return a.item_name&&!s.test(a.item_name)&&e.push("⚠️ Item Name: Only letters, spaces, and apostrophe are allowed."),a.item_code&&!r.test(a.item_code)&&e.push("⚠️ Item Code: Only alphanumeric and underscore are allowed."),a.hsn_code&&!o.test(a.hsn_code)&&e.push("⚠️ HSN Code: Only alphanumeric and underscore are allowed."),a.sizes.forEach((g,w)=>{g.size&&!m.test(g.size)&&e.push(`⚠️ Size ${w+1}: Only letters and numbers allowed.`),g.unit_price&&!f.test(g.unit_price)&&e.push(`⚠️ Unit Price ${w+1}: Only numbers and dot allowed.`),g.stock_quantity&&!de.test(g.stock_quantity)&&e.push(`⚠️ Stock Quantity ${w+1}: Only digits allowed.`)}),a.description&&!ue.test(a.description)&&e.push("⚠️ Description: Only letters, digits, spaces, and commas allowed."),e.length>0?(alert(e.join(`
`)),!1):!0},W=async e=>{if(e.preventDefault(),D({...u,add:!0}),!re()){D({...u,add:!1});return}try{let s;y!==null?s=await x.put(`/api/user/items/${a.item_code}/`,a):s=await x.post("/api/user/items-post/",a),alert("✅ Success: "+s.data.message),await q()}catch(s){if(console.error("❌ Backend Error:",s),s.response)if(s.response.data&&typeof s.response.data=="object"){let r=Object.values(s.response.data).flat();alert(`❌ Backend Errors:
`+r.join(`
`))}else alert("❌ Error: "+s.response.data.message||"Something went wrong.");else alert("❌ Network error. Please try again.")}finally{D({...u,add:!1}),C()}},T=async e=>{const s=e.target.value;l({...a,category_name:s,sub_category_name:""});try{const r=await x.get(`/api/user/subcategories/${s}/`);J(r.data)}catch(r){console.error("Error fetching subcategories:",r)}},h=e=>{l({...a,[e.target.name]:e.target.value})},ne=()=>{z(!0),E(null),l({item_name:"",item_code:"",category_name:"",sub_category:"",hsn_code:"",unit_price:"",stock_quantity:"",description:"",sizes:[]})},C=()=>{z(!1)},R=()=>{l(e=>({...e,sizes:[...e.sizes,{size:"",unit_price:"",stock_quantity:""}]}))},$=e=>{l(s=>({...s,sizes:s.sizes.filter((r,o)=>o!==e)}))},oe=e=>{E(e),l(d[e]),z(!0)},N=e=>{te(e),_(!0),l(d[e])},ie=async()=>{try{await x.delete(`/api/user/items/${a.item_code}/`),A(d.filter((e,s)=>s!==ee)),alert("Item deleted successfully!")}catch(e){console.error("Error deleting item:",e)}finally{_(!1)}},le=(e,s)=>{if(e.key==="Enter"){e.preventDefault();const r=s+1;I.current[r]&&I.current[r].focus()}},j=(e,s,r)=>{const{value:o}=e.target;l(m=>{const f=[...m.sizes];return f[s]={...f[s],[r]:o},{...m,sizes:f}})},ce=()=>{const e=new fe;e.text("Item List Report",14,15),d.forEach((s,r)=>{e.autoTable({startY:e.autoTable.previous.finalY?e.autoTable.previous.finalY+10:20,head:[["#","Item Name","Item Code","Category","Sub-Category","HSN Code","Description"]],body:[[r+1,s.item_name,s.item_code,s.category_name,s.sub_category,s.hsn_code,s.description]],theme:"striped"}),e.autoTable({startY:e.autoTable.previous.finalY+5,head:[["#","Size","Unit Price","Stock Quantity"]],body:s.sizes.map((o,m)=>[m+1,o.size,o.unit_price,o.stock_quantity]),theme:"grid",styles:{cellPadding:2,fontSize:10}})}),e.save("Item_List.pdf")};return t.jsxs(he,{sx:{maxWidth:"100%",padding:2},children:[t.jsx(p,{variant:"contained",color:"secondary",onClick:ne,children:"Add Item"}),t.jsxs(H,{open:X,onClose:C,handleClose:C,editIndex:y,itemDetails:a,categories:k,subCategories:v,handleCategoryChange:T,handleChange:h,handleDeleteDialogOpen:N,handleAddOrUpdate:W,loading:u,fieldRefs:I,handleKeyDown:le,handleSizeChange:j,addSize:R,removeSize:$,children:[t.jsx(B,{style:{backgroundColor:"#f9dff5"},children:y!==null?"Edit Item Details":"Add Item Details"}),t.jsx(O,{style:{backgroundColor:"#f9dff5"},children:t.jsx(P,{sx:{padding:"10px",backgroundColor:"#f9dff5"},elevation:0,children:t.jsxs("form",{children:[t.jsx(c,{fullWidth:!0,label:"Brand Name",name:"item_name",value:a.item_name,onChange:h,margin:"normal"}),t.jsx(c,{fullWidth:!0,label:"Brand Code",name:"item_code",value:a.item_code,onChange:h,margin:"normal"}),t.jsxs(L,{fullWidth:!0,margin:"normal",required:!0,children:[t.jsx(Y,{children:"Category"}),t.jsx(U,{value:a.category_item,name:"category_item",onChange:T,children:Array.isArray(k)&&k.map(e=>t.jsx(Q,{value:e.category_name,children:e.category_name},e.id))})]}),t.jsxs(L,{fullWidth:!0,margin:"normal",required:!0,children:[t.jsx(Y,{children:"Sub-Category"}),t.jsx(U,{value:a.sub_category,name:"sub_category",onChange:h,label:"Sub-Category",disabled:!a.category_name,children:Array.isArray(v)&&v.map(e=>t.jsx(Q,{value:e.name,children:e.name},e.id))})]}),t.jsx(c,{fullWidth:!0,label:"HSN Code",name:"hsn_code",value:a.hsn_code,onChange:h,margin:"normal"}),t.jsx(c,{fullWidth:!0,label:"Description",name:"description",value:a.description,onChange:h,margin:"normal"}),a.sizes.map((e,s)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[t.jsx(c,{fullWidth:!0,label:"Size",name:"size",value:e.size,onChange:r=>j(r,s,"size"),margin:"normal"}),t.jsx(c,{fullWidth:!0,label:"Unit Price",name:"unit_price",type:"number",value:e.unit_price,onChange:r=>j(r,s,"unit_price"),margin:"normal"}),t.jsx(c,{fullWidth:!0,label:"Stock Quantity",name:"stock_quantity",type:"number",value:e.stock_quantity,onChange:r=>j(r,s,"stock_quantity"),margin:"normal"}),t.jsx(b,{color:"secondary",onClick:()=>$(s),children:t.jsx(Ce,{})})]},s)),t.jsx(p,{variant:"outlined",startIcon:t.jsx(_e,{}),onClick:R,children:"Add Size"})]})})}),t.jsxs(Z,{style:{backgroundColor:"#f9dff5"},children:[t.jsx(p,{onClick:C,color:"error",children:"Cancel"}),t.jsx(p,{onClick:W,color:"secondary",disabled:u.add,children:u.add?t.jsx(me,{size:24}):y!==null?"Update":"Add"})]})]}),t.jsxs(ge,{component:P,sx:{marginTop:3,boxShadow:3,borderRadius:2,maxHeight:400,overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:"#888 #f1f1f1"},children:[t.jsxs(n,{children:[t.jsx(b,{color:"primary",onClick:ce,children:t.jsx(ye,{})}),t.jsx("b",{children:"DOWNLOAD STOCK DETAILS"})]}),t.jsxs(M,{stickyHeader:!0,children:[t.jsx(F,{sx:{backgroundColor:"#e0f7fa"},children:t.jsx(S,{children:["Brand Name","Brand Code","Category","Sub-Category","HSN Code","Stock details (size,price & quantities)","Description","Actions"].map(e=>t.jsx(n,{sx:{fontWeight:"bold"},children:e},e))})}),t.jsx(K,{children:Array.isArray(d)&&d.map((e,s)=>t.jsxs(S,{children:[t.jsx(n,{children:e.item_name}),t.jsx(n,{children:e.item_code}),t.jsx(n,{children:e.category_name}),t.jsx(n,{children:e.sub_category}),t.jsx(n,{children:e.hsn_code}),t.jsx(n,{children:t.jsx("div",{style:{maxHeight:"100px",overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:"#888 #f1f1f1"},children:t.jsxs(M,{size:"small",stickyHeader:!0,children:[t.jsx(F,{children:t.jsxs(S,{style:{backgroundColor:"#DDA0DD",position:"sticky",top:0,zIndex:1},children:[t.jsx(n,{sx:{fontWeight:"bold"},children:"Size"}),t.jsx(n,{sx:{fontWeight:"bold"},children:"Unit Price"}),t.jsx(n,{sx:{fontWeight:"bold"},children:"Stock Quantity"})]})}),t.jsx(K,{children:e.sizes.map((r,o)=>t.jsxs(S,{children:[t.jsx(n,{children:r.size}),t.jsx(n,{children:r.unit_price}),t.jsx(n,{children:r.stock_quantity})]},o))})]})})}),t.jsx(n,{children:e.description}),t.jsxs(n,{children:[t.jsx(b,{color:"secondary",onClick:()=>oe(s),children:t.jsx(pe,{})}),t.jsx(b,{color:"error",onClick:()=>N(s),children:t.jsx(xe,{})}),t.jsxs(H,{open:se,onClose:()=>_(!1),children:[t.jsx(B,{children:"Confirm Delete"}),t.jsxs(O,{children:["Are you sure you want to delete ",a==null?void 0:a.item_name,"?"]}),t.jsxs(Z,{children:[t.jsx(p,{onClick:()=>_(!1),color:"primary",children:"Cancel"}),t.jsx(p,{onClick:ie,color:"error",children:"Delete"})]})]})]})]},s))})]})]})]})}export{ke as default};
