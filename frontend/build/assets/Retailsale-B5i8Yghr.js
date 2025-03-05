import{af as xe,ag as ye,ah as be,aj as ve,r as x,ak as je,ar as $e,j as n,as as _e,am as we,ad as q,ai as me,an as Se,g as Pe,at as Me,S as he,a6 as X,a7 as ee,a8 as te,a9 as R,J as oe,a0 as le,T as N,U as $,K as ue,au as Ce,ac as Ie,av as Ne,X as De,Y as Ae,Z as Te,_ as ce,$ as W,a1 as Fe,G}from"./index-CA9y7HEl.js";import{C as Re}from"./Container-CYPZNIxx.js";import{S as Ee,P as ke}from"./Send-D7iOedxz.js";function Oe(s){return xe("MuiInputAdornment",s)}const Ue=ye("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),pe=Ue;var fe;const We=(s,_)=>{const{ownerState:y}=s;return[_.root,_[`position${me(y.position)}`],y.disablePointerEvents===!0&&_.disablePointerEvents,_[y.variant]]},Be=s=>{const{classes:_,disablePointerEvents:y,hiddenLabel:M,position:E,size:F,variant:k}=s,O={root:["root",y&&"disablePointerEvents",E&&`position${me(E)}`,k,M&&"hiddenLabel",F&&`size${me(F)}`]};return Se(O,Oe,_)},ze=be("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:We})(ve(({theme:s})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(s.vars||s).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${pe.positionStart}&:not(.${pe.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),de=x.forwardRef(function(_,y){const M=je({props:_,name:"MuiInputAdornment"}),{children:E,className:F,component:k="div",disablePointerEvents:O=!1,disableTypography:B=!1,position:D,variant:Y,...C}=M,z=$e()||{};let w=Y;Y&&z.variant,z&&!w&&(w=z.variant);const U={...M,hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:O,position:D,variant:w},J=Be(U);return n.jsx(_e.Provider,{value:null,children:n.jsx(ze,{as:k,ownerState:U,className:we(J.root,F),ref:y,...C,children:typeof E=="string"&&!B?n.jsx(q,{color:"textSecondary",children:E}):n.jsxs(x.Fragment,{children:[D==="start"?fe||(fe=n.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,E]})})})});var ge={exports:{}};(function(s,_){(function(y,M){s.exports=M()})(Me,function(){var y=1e3,M=6e4,E=36e5,F="millisecond",k="second",O="minute",B="hour",D="day",Y="week",C="month",z="quarter",w="year",U="date",J="Invalid Date",re=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ie=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,se={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var o=["th","st","nd","rd"],r=d%100;return"["+d+(o[(r-20)%10]||o[r]||o[0])+"]"}},ne=function(d,o,r){var u=String(d);return!u||u.length>=o?d:""+Array(o+1-u.length).join(r)+d},I={s:ne,z:function(d){var o=-d.utcOffset(),r=Math.abs(o),u=Math.floor(r/60),i=r%60;return(o<=0?"+":"-")+ne(u,2,"0")+":"+ne(i,2,"0")},m:function d(o,r){if(o.date()<r.date())return-d(r,o);var u=12*(r.year()-o.year())+(r.month()-o.month()),i=o.clone().add(u,C),e=r-i<0,a=o.clone().add(u+(e?-1:1),C);return+(-(u+(r-i)/(e?i-a:a-i))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:C,y:w,w:Y,d:D,D:U,h:B,m:O,s:k,ms:F,Q:z}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},H="en",g={};g[H]=se;var A="$isDayjsObject",V=function(d){return d instanceof S||!(!d||!d[A])},Z=function d(o,r,u){var i;if(!o)return H;if(typeof o=="string"){var e=o.toLowerCase();g[e]&&(i=e),r&&(g[e]=r,i=e);var a=o.split("-");if(!i&&a.length>1)return d(a[0])}else{var t=o.name;g[t]=o,i=t}return!u&&i&&(H=i),i||!u&&H},b=function(d,o){if(V(d))return d.clone();var r=typeof o=="object"?o:{};return r.date=d,r.args=arguments,new S(r)},p=I;p.l=Z,p.i=V,p.w=function(d,o){return b(d,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var S=function(){function d(r){this.$L=Z(r.locale,null,!0),this.parse(r),this.$x=this.$x||r.x||{},this[A]=!0}var o=d.prototype;return o.parse=function(r){this.$d=function(u){var i=u.date,e=u.utc;if(i===null)return new Date(NaN);if(p.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var a=i.match(re);if(a){var t=a[2]-1||0,l=(a[7]||"0").substring(0,3);return e?new Date(Date.UTC(a[1],t,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)):new Date(a[1],t,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)}}return new Date(i)}(r),this.init()},o.init=function(){var r=this.$d;this.$y=r.getFullYear(),this.$M=r.getMonth(),this.$D=r.getDate(),this.$W=r.getDay(),this.$H=r.getHours(),this.$m=r.getMinutes(),this.$s=r.getSeconds(),this.$ms=r.getMilliseconds()},o.$utils=function(){return p},o.isValid=function(){return this.$d.toString()!==J},o.isSame=function(r,u){var i=b(r);return this.startOf(u)<=i&&i<=this.endOf(u)},o.isAfter=function(r,u){return b(r)<this.startOf(u)},o.isBefore=function(r,u){return this.endOf(u)<b(r)},o.$g=function(r,u,i){return p.u(r)?this[u]:this.set(i,r)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(r,u){var i=this,e=!!p.u(u)||u,a=p.p(r),t=function(j,v){var K=p.w(i.$u?Date.UTC(i.$y,v,j):new Date(i.$y,v,j),i);return e?K:K.endOf(D)},l=function(j,v){return p.w(i.toDate()[j].apply(i.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(v)),i)},c=this.$W,m=this.$M,h=this.$D,f="set"+(this.$u?"UTC":"");switch(a){case w:return e?t(1,0):t(31,11);case C:return e?t(1,m):t(0,m+1);case Y:var P=this.$locale().weekStart||0,T=(c<P?c+7:c)-P;return t(e?h-T:h+(6-T),m);case D:case U:return l(f+"Hours",0);case B:return l(f+"Minutes",1);case O:return l(f+"Seconds",2);case k:return l(f+"Milliseconds",3);default:return this.clone()}},o.endOf=function(r){return this.startOf(r,!1)},o.$set=function(r,u){var i,e=p.p(r),a="set"+(this.$u?"UTC":""),t=(i={},i[D]=a+"Date",i[U]=a+"Date",i[C]=a+"Month",i[w]=a+"FullYear",i[B]=a+"Hours",i[O]=a+"Minutes",i[k]=a+"Seconds",i[F]=a+"Milliseconds",i)[e],l=e===D?this.$D+(u-this.$W):u;if(e===C||e===w){var c=this.clone().set(U,1);c.$d[t](l),c.init(),this.$d=c.set(U,Math.min(this.$D,c.daysInMonth())).$d}else t&&this.$d[t](l);return this.init(),this},o.set=function(r,u){return this.clone().$set(r,u)},o.get=function(r){return this[p.p(r)]()},o.add=function(r,u){var i,e=this;r=Number(r);var a=p.p(u),t=function(m){var h=b(e);return p.w(h.date(h.date()+Math.round(m*r)),e)};if(a===C)return this.set(C,this.$M+r);if(a===w)return this.set(w,this.$y+r);if(a===D)return t(1);if(a===Y)return t(7);var l=(i={},i[O]=M,i[B]=E,i[k]=y,i)[a]||1,c=this.$d.getTime()+r*l;return p.w(c,this)},o.subtract=function(r,u){return this.add(-1*r,u)},o.format=function(r){var u=this,i=this.$locale();if(!this.isValid())return i.invalidDate||J;var e=r||"YYYY-MM-DDTHH:mm:ssZ",a=p.z(this),t=this.$H,l=this.$m,c=this.$M,m=i.weekdays,h=i.months,f=i.meridiem,P=function(v,K,Q,ae){return v&&(v[K]||v(u,e))||Q[K].slice(0,ae)},T=function(v){return p.s(t%12||12,v,"0")},j=f||function(v,K,Q){var ae=v<12?"AM":"PM";return Q?ae.toLowerCase():ae};return e.replace(ie,function(v,K){return K||function(Q){switch(Q){case"YY":return String(u.$y).slice(-2);case"YYYY":return p.s(u.$y,4,"0");case"M":return c+1;case"MM":return p.s(c+1,2,"0");case"MMM":return P(i.monthsShort,c,h,3);case"MMMM":return P(h,c);case"D":return u.$D;case"DD":return p.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return P(i.weekdaysMin,u.$W,m,2);case"ddd":return P(i.weekdaysShort,u.$W,m,3);case"dddd":return m[u.$W];case"H":return String(t);case"HH":return p.s(t,2,"0");case"h":return T(1);case"hh":return T(2);case"a":return j(t,l,!0);case"A":return j(t,l,!1);case"m":return String(l);case"mm":return p.s(l,2,"0");case"s":return String(u.$s);case"ss":return p.s(u.$s,2,"0");case"SSS":return p.s(u.$ms,3,"0");case"Z":return a}return null}(v)||a.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(r,u,i){var e,a=this,t=p.p(u),l=b(r),c=(l.utcOffset()-this.utcOffset())*M,m=this-l,h=function(){return p.m(a,l)};switch(t){case w:e=h()/12;break;case C:e=h();break;case z:e=h()/3;break;case Y:e=(m-c)/6048e5;break;case D:e=(m-c)/864e5;break;case B:e=m/E;break;case O:e=m/M;break;case k:e=m/y;break;default:e=m}return i?e:p.a(e)},o.daysInMonth=function(){return this.endOf(C).$D},o.$locale=function(){return g[this.$L]},o.locale=function(r,u){if(!r)return this.$L;var i=this.clone(),e=Z(r,u,!0);return e&&(i.$L=e),i},o.clone=function(){return p.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},d}(),L=S.prototype;return b.prototype=L,[["$ms",F],["$s",k],["$m",O],["$H",B],["$W",D],["$M",C],["$y",w],["$D",U]].forEach(function(d){L[d[1]]=function(o){return this.$g(o,d[0],d[1])}}),b.extend=function(d,o){return d.$i||(d(o,S,b),d.$i=!0),b},b.locale=Z,b.isDayjs=V,b.unix=function(d){return b(1e3*d)},b.en=g[H],b.Ls=g,b.p={},b})})(ge);var Le=ge.exports;const Ye=Pe(Le);function Ge(){const[s,_]=x.useState({fullName:"",number:"",address:"",tax:"",discount:"",totalPrice:"",paymentMethod1:"Cash",paymentMethod2:"UPI",amount1:"",amount2:"",saletype:"RetailSale",narration:""}),[y,M]=x.useState([{barcode:"",category:"",sub_category:"",size:"",item_name:"",unit:"1",unit_price:"0.00"}]),E=x.useRef(""),[F,k]=x.useState(!1);x.useState(null);const O=Ye().format("YYYY-MM-DD HH:mm:ss"),[B,D]=x.useState(!1),[Y,C]=x.useState(0),[z,w]=x.useState([]),[U,J]=x.useState([]),[re,ie]=x.useState(null),[se,ne]=x.useState(!1),[I,H]=x.useState([]),g=x.useRef([]);x.useEffect(()=>{console.log("🔄 Updated Preview Items:",I)},[I]);const A=e=>{const{name:a,value:t}=e.target;_(l=>{const c={...l,[a]:t};return a==="amount1"&&t!==""&&u(),c})};x.useEffect(()=>{(async()=>{try{const a=await G.get("api/user/taxes/");a.data&&Array.isArray(a.data.data)?w(a.data.data):(console.error("Unexpected API response:",a.data),w([]))}catch(a){console.error("Error fetching tax data:",a),w([])}})()},[]);const V=async()=>{if(s.number.length<10){alert("Please enter a valid phone number");return}try{const e=await G.post("api/retailsale/phone/",{phone_number:s.number});e.data&&_(a=>({...a,fullName:e.data.fullname||"",address:e.data.address||""}))}catch(e){console.error("Error fetching data:",e),alert("Failed to fetch data")}};x.useEffect(()=>{(async()=>{var t;const a=y[y.length-1];if(!(!a||!a.barcode||a.barcode===E.current)){E.current=a.barcode;try{console.log("Fetching data for barcode:",a.barcode);const l=await G.get(`api/barcode/get-barcode-details/${a.barcode}/`);if(console.log("API Response:",l.data),(t=l.data)!=null&&t.item_details){const{item_name:c,item_price:m,category_name:h,sub_category:f,item_size:P}=l.data.item_details;M(T=>T.map((j,v)=>v===T.length-1?{...j,item_name:c||j.item_name,unit_price:m||j.unit_price,category:h||j.category,sub_category:f||j.sub_category,size:P||j.size}:j))}}catch(l){console.error("Error fetching data:",l)}}})()},[y]),x.useEffect(()=>{const e=async()=>{try{if(I.length===0)return;const a=I.reduce((c,m)=>c+Number(m.total_item_price||0),0),t={grand_total:a,discount:s.discount?Number(s.discount):0,tax:s.tax?Number(s.tax):0};console.log("Sending request data:",t),_(c=>({...c,totalPrice:Number(parseFloat(a).toFixed(2))}));const l=await G.post("api/retailsale/calculate-total-price/",t);console.log("API Response:",l.data),l.data&&l.data.total_price!==void 0&&_(c=>({...c,totalPrice:Number(parseFloat(l.data.total_price).toFixed(2))}))}catch(a){console.error("Error fetching total price:",a)}};I.length>0&&e()},[I,s.tax,s.discount]);const Z=(e,a)=>{let t=[];e.fullName.trim()||t.push("⚠️ Full Name is required."),e.number.trim()||t.push("⚠️ Phone Number is required."),e.address.trim()||t.push("⚠️ Address is required."),e.tax||t.push("⚠️ Tax is required."),e.paymentMethod1.trim()||t.push("⚠️ Payment Method 1 is required."),e.amount1||t.push("⚠️ Payment Method 1 Amount is required."),e.paymentMethod2.trim()||t.push("⚠️ Payment Method 2 is required."),e.amount2||t.push("⚠️ Payment Method 2 Amount is required."),e.saletype.trim()||t.push("⚠️ Sale Type is required."),a.length===0&&t.push("⚠️ No items added! Please add at least one item.");const l=/^[0-9]{10}$/,c=/^\d+(\.\d{1,2})?$/,m=/^\d+(\.\d{1,2})?$/;return l.test(e.number.trim())||t.push("⚠️ Phone Number must be 10 digits."),c.test(e.tax)||t.push("⚠️ Tax must be a valid number with up to 2 decimal places."),m.test(e.amount1)||t.push("⚠️ Payment Method 1 Amount must be a valid number with up to 2 decimal places."),m.test(e.amount2)||t.push("⚠️ Payment Method 2 Amount must be a valid number with up to 2 decimal places."),a.forEach((h,f)=>{h.barcode.trim()||t.push(`⚠️ Item ${f+1}: Barcode is required.`),h.category.trim()||t.push(`⚠️ Item ${f+1}: Category is required.`),h.sub_category.trim()||t.push(`⚠️ Item ${f+1}: Sub-Category is required.`),h.item_name.trim()||t.push(`⚠️ Item ${f+1}: Item Name is required.`),(!h.unit_price||!m.test(h.unit_price))&&t.push(`⚠️ Item ${f+1}: Unit Price must be a valid number.`)}),t.length>0?(alert(t.join(`
`)),!1):!0},b=async e=>{var t;if(e.preventDefault(),!Z(s,I))return;const a={fullname:s.fullName.trim(),phone_number:s.number.trim(),address:s.address.trim(),tax:parseFloat(s.tax).toFixed(2),tax_type:"SGST",discount:s.discount?parseFloat(s.discount).toFixed(2):null,payment_method1:s.paymentMethod1.trim(),payment_method1_amount:parseFloat(s.amount1).toFixed(2),payment_method2:s.paymentMethod2.trim(),payment_method2_amount:parseFloat(s.amount2).toFixed(2),narration:s.narration.trim(),saletype:s.saletype.trim(),items:I.map(({barcode:l,category:c,sub_category:m,size:h,item_name:f,unit:P,unit_price:T})=>({barcode:(l==null?void 0:l.trim())||"",category:(c==null?void 0:c.trim())||"",sub_category:(m==null?void 0:m.trim())||"",size:(h==null?void 0:h.trim())||"",item_name:(f==null?void 0:f.trim())||"",unit:Number(P)||1,unit_price:T?parseFloat(T).toFixed(2):"0.00"}))};try{const c=((t=(await G.post("api/retailsale/create-order/",a)).data)==null?void 0:t.bill_number)||null;ie(c),alert(`✅ Form submitted successfully! Bill Number: ${c}`),_({fullName:"",number:"",address:"",tax:"",discount:"",totalPrice:"",paymentMethod1:"Cash",paymentMethod2:"UPI",amount1:"",amount2:"",saletype:"RetailSale",narration:""}),H([]),M([{barcode:"",category:"",sub_category:"",size:"",item_name:"",unit:"1",unit_price:"0.00"}])}catch(l){if(console.error("❌ Submission Error:",l.response?JSON.stringify(l.response.data,null,2):l.message),l.response&&l.response.data){const c=Object.values(l.response.data).flat();alert(`❌ Submission failed:
${c.join(`
`)}`)}else alert(`❌ Submission failed: ${l.message}`)}},p=()=>{alert("Notification sent!")},S=(e,a)=>{if(e.key==="Enter"){e.preventDefault();const t=a+1;t<g.current.length&&g.current[t].focus()}},L=(e,a)=>{const{name:t,value:l}=a.target;M(c=>c.map((m,h)=>h===e?{...m,[t]:l}:m))},d=()=>{if(y.length>0){const e=y[y.length-1];console.log("📌 Last item before adding:",e);const a=[];if(e.barcode||a.push("Barcode"),e.item_name||a.push("Item Name"),e.unit||a.push("Unit"),e.unit_price||a.push("Unit Price"),a.length>0){alert(`Please fill out the required fields: ${a.join(", ")}`);return}H(t=>[...t,{barcode:e.barcode,item_name:e.item_name||"",category:e.category||"",sub_category:e.sub_category||"",size:e.size||"",unit:Number(e.unit)||1,unit_price:Number(e.unit_price).toFixed(2)||"0.00"}]),M([{barcode:"",category:"",sub_category:"",size:"",item_name:"",unit:"1",unit_price:"0.00"}])}else alert("No items to add.")};x.useEffect(()=>{console.log("✅ Updated Preview Items:",I)},[I]);const o=()=>{const e=window.open("","","height=600,width=800"),a=new Date().toLocaleString(),t=parseFloat(s.unitPrice)||0,l=parseFloat(s.tax)||0,c=parseFloat(s.discount)||0,h=(parseFloat(s.unit)||0)*t,f=h*l/100,P=h+f,T=F?P*c/100:0,j=P-T,v=`
    <html>
    <head>
      <title>Retail Sale Invoice</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; padding: 0; color: blue; background-color: #f9f9f9; }
        hr { border: none; border-bottom: 2px solid blue; margin: 20px 0; }/
        .invoice-container { width: 100%; max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; background-color: #fff; }
        .header { text-align: center; padding: 20px 0; background-color: #4caf50; color: blue; }
        .header h1 { margin: 0; font-size: 24px; }
        .section { margin-bottom: 20px; }
        .section h2 { margin-bottom: 10px; font-size: 18px; color: #4caf50; }
        .section p { margin: 5px 0; font-size: 14px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .table th, .table td { border: 1px solid #ddd; padding: 10px; font-size: 14px; }
        .table th { background-color: #f2f2f2; text-align: left; }
        .footer { text-align: center; padding: 20px 0; background-color: #4caf50; color: blue; font-size: 14px; }
        .footer p { margin: 0;}
        .flex-container { display: flex; justify-content: space-between; align-items: center; }
        .left-info { text-align: left; }
        .right-info { text-align: right; }
        .right-info p { margin: 0; }
        .pricing-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .pricing-row span {
          padding: 0 10px;
        }
      </style>
    </head>
    <body>
      <div class="invoice-container">
        <div class="header">
          <h1>NAARI FASHIONS</h1>
          <h2>MARKET BUILDING UNIT-II</h2>
          <hr>
          <h2>GSTIN:21AXKPR9141G1ZD</h2>
          <br><br>
          <h4>Retail Invoice</h4>
        </div>

        <div class="section">
          <div class="flex-container">
            <div class="left-info">
              <p><strong>Full Name:</strong> ${s.fullName}</p>
              <p><strong>Number:</strong> ${s.number}</p>
            </div>
            <div class="right-info">
              <p><strong>Date:</strong> ${a}</p>
              <p><strong>Invoice Number:</strong> ${s.invoiceNumber||"N/A"}</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Item Information</h2>
          <table class="table">
            <tr>
              <th>Sl#</th>
              <th>Particulars</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>1</td>
              <td>${s.itemName}</td>
              <td>${s.unit}</td>
              <td>₹${P.toFixed(2)}</td> <!-- Updated to show total after tax -->
            </tr>
          </table>
        </div>

        <div class="section">
          <h2>Pricing and Tax</h2>
          <div class="pricing-row">
            <span>Total</span>
            <span>${s.unit}</span>
            <span>₹ ${P.toFixed(2)}</span>
          </div>
          <!--<div class="pricing-row">
            <span>Tax:</span>
            <span>${l}%</span>
            <span>+₹${f.toFixed(2)}</span>
          </div>-->
          ${F?`
            <div class="pricing-row">
              <span>Discount:</span>
              <span>${s.discount}%</span>
              <span>-₹${T.toFixed(2)}</span>
            </div>`:""}
          <div class="pricing-row">
            <span><strong>Net Payable:</strong></span>
            <span><strong>₹${j.toFixed(2)}</strong></span>
          </div>
        </div>

        <div class="section">
          <h2>Payment and Narration</h2>
          <p><strong>Payment Method1:</strong> ${s.paymentMethod1} ₹ ${s.paymentAmount1||0}</p>
          <p><strong>Payment Method2:</strong> ${s.paymentMethod2} ₹ ${s.paymentAmount2||0}</p>
          <p><strong>Narration:</strong> ${s.narration}</p>
        </div>
        <div class="section">
        <h6>Terms & Condition</h6>
        <hr>
        <ul>
        <li>No cash return</li>
        <li>No Exchange without Bill</li>
        <li>Exchange within 7 days</li>
        <li>No Exchange on Satureday and Sunday</li>
        <li>Exchange within 12 p.m to 4 p.m only</li>
        <li>No Colour Guarantee on any item</li>
        </ul>
        </div>

        <div class="footer">
          <p>Thank you visit again!</p>
        </div>
      </div>
    </body>
    </html>
  `;e.document.open(),e.document.write(v),e.document.close(),e.print()},r=async()=>{if(I.length===0){alert("No items to preview.");return}try{const e=I.map(({item_name:t,unit:l,unit_price:c})=>({item_name:t.trim(),unit:parseFloat(l)||1,unit_price:parseFloat(c)||0})),a=await G.post("api/retailsale/item-preview/",{items:e});console.log("✅ API Response:",a.data),a.data&&a.data.created_items?(H(t=>t.map((l,c)=>{var m,h,f;return{...l,unit:((m=a.data.created_items[c])==null?void 0:m.unit)||l.unit,unit_price:((h=a.data.created_items[c])==null?void 0:h.unit_price)||l.unit_price,total_item_price:((f=a.data.created_items[c])==null?void 0:f.total_item_price)||"0.00"}})),J(a.data.created_items.map((t,l)=>{var c;return{barcode:((c=I[l])==null?void 0:c.barcode)||"",item_name:t.item_name,unit:t.unit,unit_price:t.unit_price,total_item_price:t.total_item_price||"0.00"}})),C(a.data.grand_total||0),D(!0)):(console.error("🚨 Unexpected API Response Structure:",a.data),alert("Unexpected response format. Please check the API."))}catch(e){console.error("❌ Error fetching preview:",e.response?e.response.data:e.message),alert(`Error: ${e.response?JSON.stringify(e.response.data):e.message}`)}},u=async()=>{if(s.totalPrice)try{const e=await G.post("api/retailsale/calculate-payment-amount2/",{total_price:s.totalPrice,payment_method1_amount:s.amount1||"0"}),a=parseFloat(e.data.payment_method2_amount).toFixed(2);_(t=>({...t,amount2:a}))}catch(e){console.error("Error calculating Payment Amount 2:",e)}};x.useEffect(()=>{u()},[s.totalPrice,s.amount1]);const i=()=>D(!1);return n.jsx(Re,{maxWidth:"lg",sx:{backgroundColor:"#f9dff5",position:"relative"},children:n.jsxs(he,{sx:{p:3,backgroundColor:"#f9dff5"},elevation:0,children:[n.jsx(q,{variant:"h5",gutterBottom:!0,align:"center",color:"secondary",children:"SALE MODULE"}),n.jsxs(q,{variant:"body2",color:"textSecondary",align:"center",children:["Sales Date & Time: ",O]}),n.jsxs(X,{size:"small",sx:{minWidth:120},children:[n.jsx(ee,{children:"Sale Type"}),n.jsxs(te,{value:s.saletype,onChange:A,name:"saletype",label:"Sale Type",children:[n.jsx(R,{value:"RetailSale",children:"Retail Sale"}),n.jsx(R,{value:"BulkSale",children:"Bulk Sale"})]})]}),n.jsxs(oe,{sx:{position:"absolute",top:16,right:16,display:"flex",gap:1},children:[n.jsx(le,{onClick:p,sx:{color:"#370140"},children:n.jsx(Ee,{})}),n.jsx(le,{onClick:o,sx:{color:"#370140"},children:n.jsx(ke,{})})]}),n.jsxs(oe,{component:"form",onSubmit:b,sx:{mt:2},children:[n.jsxs(N,{container:!0,spacing:2,children:[n.jsxs(N,{item:!0,xs:12,md:3,children:[y.map((e,a)=>n.jsxs(N,{container:!0,spacing:2,style:{marginTop:"0.7px"},children:[n.jsxs(q,{variant:"subtitle1",gutterBottom:!0,color:"textPrimary",children:["Item Information ",a+1]}),n.jsxs(N,{container:!0,spacing:2,alignItems:"center",children:[n.jsx(N,{item:!0,xs:6,children:n.jsx($,{style:{width:"100%"},label:"Barcode",name:"barcode",value:e.barcode,onChange:t=>L(a,t),margin:"normal",variant:"outlined",inputRef:t=>g.current[0]=t,onKeyDown:t=>S(t,0)})}),n.jsx(N,{item:!0,xs:6,children:n.jsx($,{style:{width:"100%"},label:"Item Name",name:"item_name",value:e.item_name,onChange:t=>L(a,t),margin:"normal",variant:"outlined"})})]}),n.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx($,{style:{width:"150px"},label:"Category",name:"category",value:e.category,onChange:t=>L(a,t),margin:"dense",variant:"outlined",inputRef:t=>g.current[2]=t,onKeyDown:t=>S(t,2)}),n.jsx($,{style:{width:"120px"},label:"Sub-category",name:"sub_category",value:e.sub_category,onChange:t=>L(a,t),margin:"dense",variant:"outlined",inputRef:t=>g.current[3]=t,onKeyDown:t=>S(t,3)})]}),n.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n.jsx($,{style:{width:"150px"},label:"Size",name:"size",value:e.size,onChange:t=>L(a,t),margin:"dense",variant:"outlined",inputRef:t=>g.current[4]=t,onKeyDown:t=>S(t,4)}),n.jsx($,{style:{width:"120px"},label:"Unit",name:"unit",value:e.unit,onChange:t=>L(a,t),margin:"dense",variant:"outlined",inputRef:t=>g.current[5]=t,onKeyDown:t=>S(t,5)})]}),n.jsx($,{style:{width:"100%"},label:"Unit Price",name:"unit_price",value:e.unit_price,onChange:t=>L(a,t),margin:"normal",variant:"outlined",inputRef:t=>g.current[6]=t,onKeyDown:t=>S(t,6)}),a!==y.length-1&&n.jsx("hr",{style:{margin:"10px 0"}})]},a)),n.jsxs(N,{children:[n.jsx(ue,{variant:"contained",color:"secondary",onClick:d,style:{marginTop:"20px",borderRadius:"50%",height:"60px",width:"60px",padding:0},children:n.jsx(Ce,{style:{fontSize:"32px",fontWeight:"bold"}})}),n.jsx(ue,{variant:"outlined",color:"secondary",onClick:r,style:{marginTop:"20px",marginLeft:"20px"},children:"CHECK HERE"})]})]}),n.jsx(Ie,{open:B,onClose:i,children:n.jsxs(oe,{sx:{bgcolor:"background.paper",borderRadius:2,boxShadow:24,p:4,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"600px",overflowY:"auto",maxHeight:"400px"},children:[n.jsxs(q,{variant:"h6",component:"h2",gutterBottom:!0,style:{color:"secondary"},children:["Preview Items",n.jsx(le,{onClick:i,style:{float:"right"},children:n.jsx(Ne,{})})]}),U.length===0?n.jsx(q,{variant:"body1",children:"No items added yet."}):n.jsx(De,{component:he,children:n.jsxs(Ae,{children:[n.jsx(Te,{children:n.jsxs(ce,{children:[n.jsx(W,{style:{color:"secondary"},children:"Sl.No"}),n.jsx(W,{style:{color:"secondary"},children:"Item Name"}),n.jsx(W,{style:{color:"secondary"},children:"Unit"}),n.jsx(W,{style:{color:"secondary"},children:"Unit Price"}),n.jsx(W,{style:{color:"secondary"},children:"Total Item Price"})]})}),n.jsxs(Fe,{children:[U.map((e,a)=>n.jsxs(ce,{children:[n.jsx(W,{style:{textAlign:"center",color:"secondary"},children:a+1}),n.jsx(W,{style:{textAlign:"center"},children:e.item_name}),n.jsx(W,{style:{textAlign:"center"},children:e.unit}),n.jsx(W,{style:{textAlign:"center"},children:parseFloat(e.unit_price).toFixed(2)}),n.jsx(W,{style:{textAlign:"center"},children:e.total_item_price})]},a)),n.jsxs(ce,{children:[n.jsx(W,{colSpan:4,align:"right",children:n.jsx("strong",{children:"Grand Total:"})}),n.jsx(W,{style:{textAlign:"center"},children:parseFloat(Y).toFixed(2)})]})]})]})})]})}),n.jsxs(N,{item:!0,xs:12,md:3,children:[n.jsx(q,{variant:"subtitle1",gutterBottom:!0,color:"textPrimary",children:"Customer Information"}),n.jsx($,{fullWidth:!0,label:"Number",name:"number",value:s.number,onChange:A,onBlur:V,margin:"normal",type:"tel",variant:"outlined"}),n.jsx($,{fullWidth:!0,label:"Full Name",name:"fullName",value:s.fullName,onChange:A,margin:"normal",variant:"outlined"}),n.jsx($,{fullWidth:!0,multiline:!0,rows:4,label:"Address",name:"address",value:s.address,onChange:A,margin:"normal",variant:"outlined"}),n.jsx($,{label:"Bill Number",name:"bill_number",value:se?"Generating Bill Number...":re||"",variant:"outlined",margin:"normal",style:{width:"200px",fontWeight:"bold"},InputProps:{readOnly:!0}})]}),n.jsxs(N,{item:!0,xs:12,md:3,children:[n.jsx(q,{variant:"subtitle1",gutterBottom:!0,color:"textPrimary",children:"Pricing and Tax"}),n.jsxs(X,{fullWidth:!0,margin:"normal",variant:"outlined",children:[n.jsx(ee,{children:"Tax Type"}),n.jsx(te,{name:"taxType",value:s.taxType,onChange:A,label:"Tax Type",children:z.map(e=>n.jsx(R,{value:e.tax_name,children:e.tax_name},e.id))})]}),n.jsx($,{fullWidth:!0,label:"Tax (%)",name:"tax",value:s.tax,onChange:A,margin:"normal",variant:"outlined",inputRef:e=>g.current[7]=e,onKeyDown:e=>S(e,7)}),n.jsxs(X,{fullWidth:!0,margin:"normal",variant:"outlined",children:[n.jsx(ee,{children:"Discount Applicable"}),n.jsxs(te,{name:"isDiscountApplicable",value:F?"Yes":"No",onChange:e=>k(e.target.value==="Yes"),label:"Discount Applicable",children:[n.jsx(R,{value:"No",children:"No"}),n.jsx(R,{value:"Yes",children:"Yes"})]})]}),F&&n.jsx($,{fullWidth:!0,label:"Discount (%)",name:"discount",value:s.discount,onChange:A,margin:"normal",type:"number",variant:"outlined",inputRef:e=>g.current[8]=e,onKeyDown:e=>S(e,8)}),n.jsx($,{fullWidth:!0,label:"Total Price",name:"totalPrice",value:s.totalPrice,margin:"normal",InputProps:{readOnly:!0,startAdornment:n.jsx(de,{position:"start",children:"₹"})},variant:"outlined",inputRef:e=>g.current[9]=e,onKeyDown:e=>S(e,9)})]}),n.jsxs(N,{item:!0,xs:12,md:3,children:[n.jsx(q,{variant:"subtitle1",gutterBottom:!0,color:"textPrimary",children:"Payment and Narration"}),n.jsxs(N,{container:!0,spacing:2,children:[n.jsx(N,{item:!0,xs:6,children:n.jsxs(X,{fullWidth:!0,margin:"normal",variant:"outlined",children:[n.jsx(ee,{children:"Payment Method 1"}),n.jsxs(te,{name:"paymentMethod1",value:s.paymentMethod1,onChange:A,label:"Payment Method 1",children:[n.jsx(R,{value:"Cash",children:"Cash"}),n.jsx(R,{value:"Credit Card",children:"Credit Card"}),n.jsx(R,{value:"Debit Card",children:"Debit Card"}),n.jsx(R,{value:"UPI",children:"UPI"})]})]})}),n.jsx(N,{item:!0,xs:6,children:n.jsx($,{fullWidth:!0,label:"Payment Amount 1",name:"amount1",value:s.amount1,onChange:A,margin:"normal",InputProps:{startAdornment:n.jsx(de,{position:"start",children:"₹"})},variant:"outlined",inputRef:e=>g.current[10]=e,onKeyDown:e=>S(e,10)})}),n.jsx(N,{item:!0,xs:6,children:n.jsxs(X,{fullWidth:!0,margin:"normal",variant:"outlined",children:[n.jsx(ee,{children:"Payment Method 2"}),n.jsxs(te,{name:"paymentMethod2",value:s.paymentMethod2,onChange:A,label:"Payment Method 2",children:[n.jsx(R,{value:"Cash",children:"Cash"}),n.jsx(R,{value:"Credit Card",children:"Credit Card"}),n.jsx(R,{value:"Debit Card",children:"Debit Card"}),n.jsx(R,{value:"UPI",children:"UPI"})]})]})}),n.jsx(N,{item:!0,xs:6,children:n.jsx($,{fullWidth:!0,label:"Payment Amount 2",name:"amount2",value:s.amount2,margin:"normal",InputProps:{startAdornment:n.jsx(de,{position:"start",children:"₹"})},variant:"outlined"})})]}),n.jsx($,{fullWidth:!0,multiline:!0,rows:4,label:"Narration",name:"narration",value:s.narration,onChange:A,margin:"normal",variant:"outlined",inputRef:e=>g.current[12]=e,onKeyDown:e=>S(e,12)})]})]}),n.jsx(ue,{type:"submit",variant:"contained",color:"secondary",fullWidth:!0,sx:{mt:2},children:"Submit"})]})]})})}export{Ge as default};
