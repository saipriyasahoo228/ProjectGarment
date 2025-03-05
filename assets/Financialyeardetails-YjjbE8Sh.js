import{r as l,j as e,J as z,K as u,M as R,O as w,Q as I,S as A,U as g,a6 as G,a7 as H,a8 as J,a9 as T,V as L,W as Q,X as V,Y as X,Z,_ as O,$ as s,a0 as _,a1 as ee,a2 as ae,a3 as ne,G as C}from"./index-CA9y7HEl.js";import{E as te}from"./jspdf.plugin.autotable-CCtkh-2D.js";import{D as le}from"./Download-D7ICcGDx.js";function de(){const[t,f]=l.useState({start_date:"",end_date:"",status:!0,financial_year_name:"",description:""}),[d,h]=l.useState([]),[c,D]=l.useState({add:!1}),[P,x]=l.useState(!1),[i,Y]=l.useState(null),[W,p]=l.useState(!1),[j,K]=l.useState(null),U=l.useRef(null),F=l.useRef(null),b=l.useRef(null),v=l.useRef(null);l.useEffect(()=>{if(t.start_date&&t.end_date){const a=new Date(t.start_date).getFullYear(),n=new Date(t.end_date).getFullYear();f({...t,financial_year_name:`${a}-${n}`})}},[t.start_date,t.end_date]),l.useEffect(()=>{(async()=>{try{const n=await C.get("/api/user/financial-years/");h(n.data.data)}catch(n){console.error("Error fetching financial year data:",n)}finally{D({...c,fetch:!1})}})()},[]);const m=a=>{f({...t,[a.target.name]:a.target.value})},$=()=>{x(!0),Y(null)},E=()=>{x(!1)},S=async a=>{a.preventDefault(),D({...c,add:!0});const n=i!==null?`/api/user/financial-years/${d[i].id}/`:"/api/user/financial-years/",o=i!==null?"put":"post";try{const r=await C({method:o,url:n,data:t});if(i!==null){const k=[...d];k[i]=r.data.data,h(k)}else h([...d,r.data.data]);console.log(i!==null?"Updated":"Added",r.data),alert(r.data.message),x(!1)}catch(r){console.error("Error saving financial year:",r)}finally{D({...c,add:!1})}f({start_date:"",end_date:"",status:!0,financial_year_name:"",description:""})},B=a=>{f(d[a]),Y(a),x(!0)},q=a=>{K(a),p(!0)},N=async()=>{try{const a=d[j].id;await C.delete(`/api/user/financial-years/${a}`);const n=d.filter((o,r)=>r!==j);h(n),console.log("Deleted financial year at index",j),alert("Deleted financial year at index",j)}catch(a){console.error("Error deleting financial year:",a)}finally{p(!1)}},y=(a,n)=>{var o;if(a.key==="Enter"){a.preventDefault();const r=(o=n.current)==null?void 0:o.nextElementSibling;r?r.focus():S(a)}},M=()=>{const a=new te;a.text("Financial Year Report",14,15),a.autoTable({startY:25,head:[["#","Financial Year Name","Start Date","End Date","Status","Description"]],body:d.map((n,o)=>[o+1,n.financial_year_name,n.start_date,n.end_date,n.status?"Active":"Inactive",n.description]),theme:"striped"}),a.save("Financial_Year_List.pdf")};return e.jsxs(z,{sx:{maxWidth:"100%",padding:2},children:[e.jsx(u,{variant:"contained",color:"secondary",onClick:$,children:i!==null?"Edit Financial Year":"Add Financial Year"}),e.jsxs(R,{open:P,onClose:E,children:[e.jsx(w,{style:{backgroundColor:"#f9dff5"},children:i!==null?"Edit Financial Year":"Add Financial Year"}),e.jsx(I,{style:{backgroundColor:"#f9dff5"},children:e.jsx(A,{sx:{padding:"10px",backgroundColor:"#f9dff5"},elevation:0,children:e.jsxs("form",{children:[e.jsx(g,{fullWidth:!0,label:"Financial Year Start Date",name:"start_date",type:"date",InputLabelProps:{shrink:!0},value:t.start_date,onChange:m,margin:"normal",required:!0,inputRef:U,onKeyDown:a=>y(a,F)}),e.jsx(g,{fullWidth:!0,label:"Financial Year End Date",name:"end_date",type:"date",InputLabelProps:{shrink:!0},value:t.end_date,onChange:m,margin:"normal",required:!0,inputRef:F,onKeyDown:a=>y(a,b)}),e.jsxs(G,{fullWidth:!0,margin:"normal",required:!0,children:[e.jsx(H,{children:"Status"}),e.jsxs(J,{value:t.status,name:"status",onChange:m,label:"Status",inputRef:b,onKeyDown:a=>y(a,v),children:[e.jsx(T,{value:!0,children:"Active"}),e.jsx(T,{value:!1,children:"Inactive"})]})]}),e.jsx(g,{fullWidth:!0,label:"Financial Year Name",name:"financial_year_name",value:t.financial_year_name,InputProps:{readOnly:!0},margin:"normal"}),e.jsx(g,{fullWidth:!0,multiline:!0,rows:3,label:"Description",name:"description",value:t.description,onChange:m,margin:"normal",inputRef:v,onKeyDown:a=>y(a,null)})]})})}),e.jsxs(L,{style:{backgroundColor:"#f9dff5"},children:[e.jsx(u,{onClick:E,color:"error",children:"Cancel"}),e.jsx(u,{onClick:S,color:"secondary",disabled:c.add,children:c.add?e.jsx(Q,{size:24}):i!==null?"Update":"Add"})]})]}),e.jsx(V,{component:A,sx:{marginTop:3},children:e.jsxs(X,{children:[e.jsx(Z,{children:e.jsxs(O,{children:[e.jsx(s,{children:"Financial Year Name"}),e.jsx(s,{children:"Start Date"}),e.jsx(s,{children:"End Date"}),e.jsx(s,{children:"Status"}),e.jsx(s,{children:"Description"}),e.jsx(s,{children:"Actions"}),e.jsx(s,{children:e.jsx(_,{color:"primary",onClick:M,children:e.jsx(le,{})})})]})}),e.jsx(ee,{children:d.map((a,n)=>e.jsxs(O,{children:[e.jsx(s,{children:a.financial_year_name}),e.jsx(s,{children:a.start_date}),e.jsx(s,{children:a.end_date}),e.jsx(s,{children:a.status?"Active":"Inactive"})," ",e.jsx(s,{children:a.description}),e.jsxs(s,{children:[e.jsx(_,{color:"secondary",onClick:()=>B(n),children:e.jsx(ae,{})}),e.jsx(_,{color:"error",onClick:()=>q(n),children:e.jsx(ne,{})})]})]},n))})]})}),e.jsxs(R,{open:W,onClose:()=>p(!1),children:[e.jsx(w,{children:"Delete Financial Year"}),e.jsx(I,{children:"Are you sure you want to delete this financial year?"}),e.jsxs(L,{children:[e.jsx(u,{onClick:()=>p(!1),color:"secondary",children:"Cancel"}),e.jsx(u,{onClick:N,color:"error",children:"Confirm"})]})]})]})}export{de as default};
