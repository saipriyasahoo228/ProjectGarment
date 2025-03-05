import{r as a,G as c,j as t,J as d,K as x,ac as M,ad as j,a6 as b,a7 as v,a8 as S,a9 as y,U as p,X as se,S as re,Y as ne,Z as ie,_ as O,$ as r,a1 as oe,ae as le}from"./index-CA9y7HEl.js";import{A as ce}from"./Alert-DcujsATy.js";function xe(){const[de,q]=a.useState(""),[m,w]=a.useState(""),[h,C]=a.useState(""),[u,I]=a.useState(""),[g,_]=a.useState(""),[l,N]=a.useState(""),[me,F]=a.useState(""),[E,P]=a.useState([]),[k,n]=a.useState(""),[L,f]=a.useState(!1),[Z,Q]=a.useState([]),[D,G]=a.useState([]),[H,J]=a.useState([]),[he,B]=a.useState(!0),[o,z]=a.useState([]),[K,$]=a.useState(!1),[T,R]=a.useState(""),[W,A]=a.useState("");a.useEffect(()=>{c.get("api/barcode/code/").then(e=>{P(e.data.barcodes||[])}).catch(e=>{console.error("Error fetching stock entries:",e)}),c.get("api/user/categories/").then(e=>{Q(e.data),B(!1)}).catch(e=>{console.error("Error fetching categories:",e),B(!1)})},[]),a.useEffect(()=>{c.get("api/user/items/").then(e=>{e.data&&e.data.data&&G(e.data.data)}).catch(e=>console.error("Error fetching items:",e))},[]),a.useEffect(()=>{l&&c.get(`api/user/subcategories/${l}`).then(e=>J(e.data)).catch(e=>console.error("Error fetching subcategories:",e))},[l]);const U=(e,s)=>{e.target.checked?z([...o,s]):z(o.filter(i=>i.id!==s.id))},X=()=>{if(o.length===0){n("No items selected for preview.");return}n(""),$(!0)},Y=()=>{const e=/^[0-9]+$/,s=/^[0-9]+(\.[0-9]+)?$/,i=/^[A-Za-z0-9]+$/,ae=/^[A-Za-z\s]+$/;return!m||!e.test(m)?(n("Invalid quantity: Only digits are allowed."),!1):!g||!s.test(g)?(n("Invalid price: Only numbers and a decimal point are allowed."),!1):!h||!i.test(h)?(n("Invalid item size: Only letters and numbers are allowed."),!1):!u||!ae.test(u)?(n("Invalid shop name: Only letters and spaces are allowed."),!1):(n(""),!0)},V=()=>{R(""),q(""),w(""),C(""),I(""),_(""),N(""),F(""),A(""),n(""),f(!1)},ee=()=>{if(!Y())return;const e={item_name:T,quantity:parseInt(m,10),item_price:parseFloat(g),item_size:h,shop_name:u,category_name:l,sub_category:W};console.log("New entry data:",e),c.post("api/barcode/code/",e).then(s=>{P([...E,s.data]),V()}).catch(s=>{console.error("Error in barcoding:",s),n("Error in barcoding. Please try again.")})},te=()=>{if(o.length===0){n("Please select items to print.");return}const e=`
      <html>
        <head>
          <title>Barcode Print</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .barcode { margin: 10px 0; }
            .barcode img { width: 200px; height: auto; }
            .item-name { font-weight: bold; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>Barcode Preview</h1>
          ${o.map(i=>`
              <div class="barcode">
                <div class="item-name">${i.item_name}</div>
                <img src="data:image/png;base64,${i.barcode_image_base64}" alt="Barcode">
              </div>
            `).join("")}
          <script>
            window.onload = function() {
              window.print();
              window.close();
            };
          <\/script>
        </body>
      </html>
    `,s=window.open("","_blank","width=800,height=600");s.document.open(),s.document.write(e),s.document.close()};return t.jsxs("div",{children:[t.jsxs(d,{sx:{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx(x,{onClick:()=>f(!0),variant:"contained",color:"secondary",children:"Add Barcode"}),t.jsxs(d,{children:[t.jsx(x,{onClick:X,variant:"contained",color:"primary",sx:{marginRight:"10px"},children:"Preview"}),t.jsx(x,{onClick:te,variant:"contained",color:"secondary",children:"Print"})]}),k&&t.jsx(ce,{severity:"error",children:k})]}),t.jsx(M,{open:L,onClose:()=>f(!1),children:t.jsxs(d,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:700,bgcolor:"#f9dff5",border:"2px solid #000",boxShadow:24,p:4},children:[t.jsx(j,{variant:"h6",children:"Add Barcode Details"}),t.jsxs(b,{fullWidth:!0,margin:"normal",children:[t.jsx(v,{children:"Category"}),t.jsx(S,{value:l,onChange:e=>N(e.target.value),children:Z.map(e=>t.jsx(y,{value:e.category_name,children:e.category_name},e.id))})]}),t.jsxs(b,{fullWidth:!0,margin:"normal",children:[t.jsx(v,{children:"Item Name"}),t.jsx(S,{value:T,onChange:e=>R(e.target.value),children:D.map(e=>t.jsx(y,{value:e.item_name,children:e.item_name},e.id))})]}),t.jsxs(b,{fullWidth:!0,margin:"normal",children:[t.jsx(v,{children:"Sub Categories"}),t.jsx(S,{value:W,onChange:e=>A(e.target.value),children:H.map(e=>t.jsx(y,{value:e.name,children:e.name},e.id))})]}),t.jsx(p,{label:"Quantity",type:"number",value:m,onChange:e=>w(e.target.value),margin:"normal",fullWidth:!0}),t.jsx(p,{label:"Item Price",value:g,onChange:e=>_(e.target.value),margin:"normal",fullWidth:!0}),t.jsx(p,{label:"Item Size",value:h,onChange:e=>C(e.target.value),margin:"normal",fullWidth:!0}),t.jsx(p,{label:"Shop Name",value:u,onChange:e=>I(e.target.value),margin:"normal",fullWidth:!0}),t.jsx(x,{onClick:ee,variant:"contained",color:"secondary",sx:{mt:2},children:"Save"})]})}),t.jsx(M,{open:K,onClose:()=>$(!1),children:t.jsxs(d,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[t.jsx(j,{variant:"h6",sx:{marginBottom:"20px"},children:"Barcode Preview"}),o.map((e,s)=>t.jsxs(d,{sx:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[t.jsx("img",{src:`data:image/png;base64,${e.barcode_image_base64}`,alt:"Barcode",style:{width:"200px",marginRight:"10px"}}),t.jsx(j,{children:e.item_name})]},s))]})}),t.jsx(se,{component:re,sx:{marginTop:"20px"},children:t.jsxs(ne,{children:[t.jsx(ie,{children:t.jsxs(O,{children:[t.jsx(r,{children:"Select"}),t.jsx(r,{children:"SL. No"}),t.jsx(r,{children:"Barcode"}),t.jsx(r,{children:"Item Name"}),t.jsx(r,{children:"Item Size"}),t.jsx(r,{children:"Shop Name"}),t.jsx(r,{children:"Category Name"})]})}),t.jsx(oe,{children:E.map((e,s)=>t.jsxs(O,{children:[t.jsx(r,{children:t.jsx(le,{onChange:i=>U(i,e),checked:o.includes(e)})}),t.jsx(r,{children:s+1}),t.jsx(r,{children:e.serial_number}),t.jsx(r,{children:e.item_name}),t.jsx(r,{children:e.item_size}),t.jsx(r,{children:e.shop_name}),t.jsx(r,{children:e.category_name})]},e.id))})]})})]})}export{xe as default};
