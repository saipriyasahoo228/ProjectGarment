import{r,G as b,j as e,J as X,K as m,M as P,O as W,Q as _,S as L,T as i,U as p,V as B,W as G,X as Z,Y as ee,Z as se,_ as K,$ as a,a0 as D,a1 as ne,a2 as ae,a3 as re}from"./index-v_C5IRK2.js";import{E as le}from"./jspdf.plugin.autotable-BlpybdD6.js";import{D as O}from"./Download-ClUu4MAN.js";function de(){const[l,x]=r.useState({company_name:"",gst:"",phone:"",email:"",address:""}),[d,g]=r.useState([]),[j,c]=r.useState({add:!1,fetch:!1,delete:!1}),[$,y]=r.useState(!1),[h,R]=r.useState(null),[q,I]=r.useState(null),[F,C]=r.useState(!1),U=r.useRef(null),k=r.useRef(null),w=r.useRef(null),A=r.useRef(null),E=r.useRef(null),v=r.useRef(null);r.useEffect(()=>{T()},[]);const T=async()=>{c(s=>({...s,fetch:!0}));try{const s=await b.get("/api/user/companies");console.log("Fetched Company List Response:",s.data),g(Array.isArray(s.data.data)?s.data.data:[])}catch(s){console.error("Error fetching companies:",s)}finally{c(s=>({...s,fetch:!1}))}},u=s=>{x({...l,[s.target.name]:s.target.value})},z=()=>{y(!0),R(null)},S=()=>{y(!1)},M=async s=>{s.preventDefault(),c(n=>({...n,add:!0}));try{if(h!==null){const n=await b.put(`/api/user/companies/${l.gst}/`,l),o=[...d];o[h]=n.data,g(o),alert(n.data.message||"Company updated successfully")}else{const n=await b.post("/api/user/companies/",l);g(o=>[...o,n.data]),alert(n.data.message||"Company added successfully")}T()}catch(n){if(console.error("Error adding/updating company:",n),n.response&&n.response.data&&n.response.data.error){const o=n.response.data.error;let t="";for(const[J,Q]of Object.entries(o))t+=`${J.toUpperCase()}: ${Q.join(", ")}
`;alert(`Validation Errors:
${t}`)}else n.message?alert(`Error: ${n.message}`):alert("An unknown error occurred.")}finally{c(n=>({...n,add:!1})),x({company_name:"",pan:"",gst:"",phone:"",email:"",address:""}),y(!1)}},V=s=>{x(d[s]),R(s),y(!0)},Y=s=>{I(s),x(d[s]),C(!0)},H=async()=>{c(s=>({...s,delete:!0})),console.log("GST for deletion:",l.gst);try{if(!l.gst){console.error("GST value is missing.");return}await b.delete(`/api/user/companies/${l.gst}/`);const s=d.filter((n,o)=>o!==q);g(s),console.log("Company deleted successfully!"),alert("Company deleted successfully!")}catch(s){console.error("Error deleting company",s)}finally{c(s=>({...s,delete:!1})),C(!1)}},f=(s,n)=>{s.key==="Enter"&&n.current.focus()},N=()=>{const s=new le;s.text("Company List",14,15);const n=["Company Name","GST","Phone","PAN","Email","Address"],o=d.map(t=>[t.company_name,t.gst,t.phone,t.pan,t.email,t.address]);s.autoTable({head:[n],body:o,startY:20}),s.save("company_list.pdf")};return e.jsxs(X,{sx:{maxWidth:"100%",padding:2},children:[e.jsx(m,{variant:"contained",color:"secondary",onClick:z,children:h!==null?"Edit Company":"Add Company"}),e.jsxs(P,{open:$,onClose:S,maxWidth:"md",fullWidth:!0,children:[e.jsx(W,{style:{backgroundColor:"#f9dff5"},children:h!==null?"Edit Company Details":"Add Company Details"}),e.jsx(_,{style:{backgroundColor:"#f9dff5"},children:e.jsx(L,{sx:{padding:"10px",backgroundColor:"#f9dff5"},elevation:0,children:e.jsxs("form",{children:[e.jsxs(i,{container:!0,spacing:2,marginBottom:2,children:[e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,label:"Company Name",name:"company_name",value:l.company_name,onChange:u,margin:"normal",required:!0,inputRef:U,onKeyDown:s=>f(s,k)})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,label:"Company Registration Number/GST Number",name:"gst",value:l.gst,onChange:u,margin:"normal",required:!0,inputRef:k,onKeyDown:s=>f(s,w)})})]}),e.jsxs(i,{container:!0,spacing:2,marginBottom:2,children:[e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,label:"PAN Number",name:"pan",value:l.pan,onChange:u,margin:"normal",required:!0,inputRef:w,onKeyDown:s=>f(s,A)})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,label:"Phone Number",name:"phone",value:l.phone,onChange:u,margin:"normal",required:!0,inputRef:A,onKeyDown:s=>f(s,E)})})]}),e.jsxs(i,{container:!0,spacing:2,marginBottom:2,children:[e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,label:"Email",name:"email",value:l.email,onChange:u,margin:"normal",required:!0,inputRef:E,onKeyDown:s=>f(s,v)})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,multiline:!0,rows:4,label:"Address",name:"address",value:l.address,onChange:u,required:!0,margin:"normal",inputRef:v})})]})]})})}),e.jsxs(B,{style:{backgroundColor:"#f9dff5"},children:[e.jsx(m,{onClick:S,color:"error",children:"Cancel"}),e.jsx(m,{onClick:M,color:"secondary",disabled:j.add,children:j.add?e.jsx(G,{size:24}):h!==null?"Update":"Add"})]})]}),e.jsxs(Z,{component:L,sx:{marginTop:3,position:"relative"},children:[e.jsx(m,{variant:"contained",color:"primary",startIcon:e.jsx(O,{}),onClick:N,sx:{position:"absolute",right:16,top:-50,backgroundColor:"purple","&:hover":{backgroundColor:"darkviolet"}},children:"Download PDF"}),e.jsxs(ee,{children:[e.jsx(se,{children:e.jsxs(K,{children:[e.jsx(a,{children:"Company Name"}),e.jsx(a,{children:"GST"}),e.jsx(a,{children:"Phone"}),e.jsx(a,{children:"PAN"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Address"}),e.jsx(a,{children:"Actions"}),e.jsx(a,{children:e.jsx(D,{color:"primary",onClick:N,children:e.jsx(O,{})})})]})}),e.jsx(ne,{children:Array.isArray(d)&&d.map((s,n)=>e.jsxs(K,{children:[e.jsx(a,{children:s.company_name}),e.jsx(a,{children:s.gst}),e.jsx(a,{children:s.phone}),e.jsx(a,{children:s.pan}),e.jsx(a,{children:s.email}),e.jsx(a,{children:s.address}),e.jsxs(a,{children:[e.jsx(D,{color:"secondary",onClick:()=>V(n),children:e.jsx(ae,{})}),e.jsx(D,{color:"error",onClick:()=>Y(n),children:e.jsx(re,{})})]})]},n))})]})]}),e.jsxs(P,{open:F,onClose:()=>C(!1),children:[e.jsx(W,{children:"Confirm Delete"}),e.jsx(_,{children:"Are you sure you want to delete this company?"}),e.jsxs(B,{children:[e.jsx(m,{onClick:()=>C(!1),color:"secondary",children:"Cancel"}),e.jsx(m,{onClick:H,color:"error",disabled:j.delete,children:j.delete?e.jsx(G,{size:24}):"Confirm"})]})]})]})}export{de as default};
