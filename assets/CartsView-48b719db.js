import{_ as y,r as b,o as d,c as i,a as e,f as r,F as V,e as k,g,t as u,b as n,w as I,d as v,h as A,v as B}from"./index-36296579.js";const{VITE_API:p,VITE_APIPATH:f}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"mandyapi",BASE_URL:"/vue-6mainWork/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{cart:{},loadingId:"",user:{email:"",name:"",tel:"",address:"",message:""},isOpen:!0,isButton:!1}},methods:{getCart(){this.$http.get(`${p}/api/${f}/cart`).then(a=>{this.cart=a.data.data,this.cart.carts.length?this.isOpen=!1:this.isOpen=!0,this.isButton=!1}).catch(a=>{alert(a.response.data.message)})},updateCart(a,l,h){h<0&&(h=0);const x={product_id:l,qty:h};this.$http.put(`${p}/api/${f}/cart/${a}`,{data:x}).then(t=>{alert(t.data.message),this.getCart()}).catch(t=>{alert(t.response.data.message)})},delCart(a){this.loadingId=a,this.isButton=!0,this.$http.delete(`${p}/api/${f}/cart/${a}`).then(l=>{alert(l.data.message),this.getCart(),this.loadingId=""}).catch(l=>{alert(l.response.data.message)})},delAllCarts(){this.isButton=!0,this.$http.delete(`${p}/api/${f}/carts`).then(a=>{this.isButton=!1,this.getCart()}).catch(a=>{alert(a.response.data.message)})},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"須為正確的手機號碼格式"},onSubmit(){console.log(this.user),this.$refs.form.resetForm(),this.delAllCarts(),alert("成功送出")}},mounted(){this.getCart()}},P={key:0},w={class:"text-end"},T={class:"table align-middle"},U=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價"),e("th",{style:{width:"130px"}})])],-1),N=["onClick"],O={key:0,class:"fas fa-spinner fa-pulse"},S={key:0,class:"text-success"},D={class:"input-group input-group-sm"},q={class:"input-group mb-3"},F=["onUpdate:modelValue","onChange"],H={class:"input-group-text",id:"basic-addon2"},L={class:"text-end"},M=e("small",{class:"text-success"},"折扣價：",-1),R=e("td",{colspan:"4",class:"text-end"},"總計",-1),j={class:"text-end"},z=e("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1),W={class:"text-end text-success"},G={key:1},J=e("h3",{class:"text-success mt-4"},"目前購物車沒有商品喔!",-1),K=[J],Q={class:"my-5 row justify-content-center"},X={class:"mb-3"},Y=e("label",{for:"email",class:"form-label"},"Email",-1),Z={class:"mb-3"},$=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ee={class:"mb-3"},te=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),se={class:"mb-3"},le=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ae={class:"mb-3"},oe=e("label",{for:"message",class:"form-label"},"留言",-1),ne={class:"text-end"};function de(a,l,h,x,t,c){const m=b("v-field"),_=b("error-message"),C=b("v-form");return d(),i(V,null,[t.cart.final_total?(d(),i("div",P,[e("div",w,[e("button",{class:r(["btn btn-outline-danger",{disabled:t.isButton}]),type:"button",onClick:l[0]||(l[0]=(...s)=>c.delAllCarts&&c.delAllCarts(...s))}," 清空購物車 ",2)]),e("table",T,[U,e("tbody",null,[t.cart.carts?(d(!0),i(V,{key:0},k(t.cart.carts,s=>(d(),i("tr",{key:s.id},[e("td",null,[e("button",{type:"button",class:r(["btn btn-outline-danger btn-sm",{disabled:t.isButton}]),onClick:o=>c.delCart(s.id)},[t.loadingId===s.id?(d(),i("i",O)):g("",!0),v(" x ")],10,N)]),e("td",null,[v(u(s.product.title)+" ",1),s.coupon?(d(),i("div",S,"已套用優惠券")):g("",!0)]),e("td",null,[e("div",D,[e("div",q,[A(e("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":o=>s.qty=o,onChange:o=>c.updateCart(s.id,s.product.id,s.qty)},null,40,F),[[B,s.qty,void 0,{number:!0}]]),e("span",H,u(s.product.unit),1)])])]),e("td",null,u(s.product.price),1),e("td",L,[M,v(" "+u(s.final_total),1)])]))),128)):g("",!0)]),e("tfoot",null,[e("tr",null,[R,e("td",j,u(t.cart.total),1)]),e("tr",null,[z,e("td",W,u(t.cart.final_total),1)])])])])):(d(),i("div",G,K)),e("div",Q,[n(C,{ref:"form",class:"col-md-6 text-start",onSubmit:c.onSubmit},{default:I(({errors:s})=>[e("div",X,[Y,n(m,{id:"email",name:"email",type:"email",class:r(["form-control",{"is-invalid":s.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.user.email,"onUpdate:modelValue":l[1]||(l[1]=o=>t.user.email=o)},null,8,["class","modelValue"]),n(_,{name:"email",class:"invalid-feedback"})]),e("div",Z,[$,n(m,{id:"name",name:"姓名",type:"text",class:r(["form-control",{"is-invalid":s.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.user.name,"onUpdate:modelValue":l[2]||(l[2]=o=>t.user.name=o)},null,8,["class","modelValue"]),n(_,{name:"姓名",class:"invalid-feedback"})]),e("div",ee,[te,n(m,{id:"tel",name:"電話",type:"tel",class:r(["form-control",{"is-invalid":s.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:t.user.tel,"onUpdate:modelValue":l[3]||(l[3]=o=>t.user.tel=o)},null,8,["class","rules","modelValue"]),n(_,{name:"電話",class:"invalid-feedback"})]),e("div",se,[le,n(m,{id:"address",name:"地址",type:"text",class:r(["form-control",{"is-invalid":s.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.user.address,"onUpdate:modelValue":l[4]||(l[4]=o=>t.user.address=o)},null,8,["class","modelValue"]),n(_,{name:"地址",class:"invalid-feedback"})]),e("div",ae,[oe,n(m,{as:"textarea",id:"message",name:"留言",class:"form-control",cols:"30",rows:"10",modelValue:t.user.message,"onUpdate:modelValue":l[5]||(l[5]=o=>t.user.message=o)},null,8,["modelValue"])]),e("div",ne,[e("button",{type:"submit",class:r(["btn btn-danger",{disabled:t.isOpen}])},"送出訂單",2)])]),_:1},8,["onSubmit"])])],64)}const re=y(E,[["render",de]]);export{re as default};