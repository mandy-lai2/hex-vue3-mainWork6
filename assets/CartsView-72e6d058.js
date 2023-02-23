import{_ as y,r as b,o as d,c as i,a as e,f as r,F as V,e as k,g,t as u,b as n,w as I,d as v,h as A,v as B}from"./index-5ca1608b.js";const{VITE_API:p,VITE_APIPATH:f}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"mandyapi",BASE_URL:"/hex-vue3-mainWork6/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{cart:{},loadingId:"",user:{email:"",name:"",tel:"",address:"",message:""},isOpen:!0,isButton:!1}},methods:{getCart(){const o=this.$loading.show();this.$http.get(`${p}/api/${f}/cart`).then(t=>{this.cart=t.data.data,o.hide(),this.cart.carts.length?this.isOpen=!1:this.isOpen=!0,this.isButton=!1}).catch(t=>{alert(t.response.data.message)})},updateCart(o,t,h){h<0&&(h=0);const x={product_id:t,qty:h};this.$http.put(`${p}/api/${f}/cart/${o}`,{data:x}).then(s=>{alert(s.data.message),this.getCart()}).catch(s=>{alert(s.response.data.message)})},delCart(o){this.loadingId=o,this.isButton=!0,this.$http.delete(`${p}/api/${f}/cart/${o}`).then(t=>{alert(t.data.message),this.getCart(),this.loadingId=""}).catch(t=>{alert(t.response.data.message)})},delAllCarts(){this.isButton=!0,this.$http.delete(`${p}/api/${f}/carts`).then(o=>{this.isButton=!1,this.getCart()}).catch(o=>{alert(o.response.data.message)})},isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"須為正確的手機號碼格式"},onSubmit(){console.log(this.user),this.$refs.form.resetForm(),this.delAllCarts(),alert("成功送出")}},mounted(){this.getCart()}},w={key:0},P={class:"text-end"},T={class:"table align-middle"},U=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價"),e("th",{style:{width:"130px"}})])],-1),N=["onClick"],O={key:0,class:"fas fa-spinner fa-pulse"},S={key:0,class:"text-success"},D={class:"input-group input-group-sm"},q={class:"input-group mb-3"},F=["onUpdate:modelValue","onChange"],H={class:"input-group-text",id:"basic-addon2"},L={class:"text-end"},M=e("small",{class:"text-success"},"折扣價：",-1),R=e("td",{colspan:"4",class:"text-end"},"總計",-1),j={class:"text-end"},z=e("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1),W={class:"text-end text-success"},G={key:1},J=e("h3",{class:"text-success mt-4"},"目前購物車沒有商品喔!",-1),K=[J],Q={class:"my-5 row justify-content-center"},X={class:"mb-3"},Y=e("label",{for:"email",class:"form-label"},"Email",-1),Z={class:"mb-3"},$=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ee={class:"mb-3"},te=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),se={class:"mb-3"},le=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ae={class:"mb-3"},oe=e("label",{for:"message",class:"form-label"},"留言",-1),ne={class:"text-end"};function de(o,t,h,x,s,c){const m=b("v-field"),_=b("error-message"),C=b("v-form");return d(),i(V,null,[s.cart.final_total?(d(),i("div",w,[e("div",P,[e("button",{class:r(["btn btn-outline-danger",{disabled:s.isButton}]),type:"button",onClick:t[0]||(t[0]=(...l)=>c.delAllCarts&&c.delAllCarts(...l))}," 清空購物車 ",2)]),e("table",T,[U,e("tbody",null,[s.cart.carts?(d(!0),i(V,{key:0},k(s.cart.carts,l=>(d(),i("tr",{key:l.id},[e("td",null,[e("button",{type:"button",class:r(["btn btn-outline-danger btn-sm",{disabled:s.isButton}]),onClick:a=>c.delCart(l.id)},[s.loadingId===l.id?(d(),i("i",O)):g("",!0),v(" x ")],10,N)]),e("td",null,[v(u(l.product.title)+" ",1),l.coupon?(d(),i("div",S,"已套用優惠券")):g("",!0)]),e("td",null,[e("div",D,[e("div",q,[A(e("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":a=>l.qty=a,onChange:a=>c.updateCart(l.id,l.product.id,l.qty)},null,40,F),[[B,l.qty,void 0,{number:!0}]]),e("span",H,u(l.product.unit),1)])])]),e("td",null,u(l.product.price),1),e("td",L,[M,v(" "+u(l.final_total),1)])]))),128)):g("",!0)]),e("tfoot",null,[e("tr",null,[R,e("td",j,u(s.cart.total),1)]),e("tr",null,[z,e("td",W,u(s.cart.final_total),1)])])])])):(d(),i("div",G,K)),e("div",Q,[n(C,{ref:"form",class:"col-md-6 text-start",onSubmit:c.onSubmit},{default:I(({errors:l})=>[e("div",X,[Y,n(m,{id:"email",name:"email",type:"email",class:r(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":t[1]||(t[1]=a=>s.user.email=a)},null,8,["class","modelValue"]),n(_,{name:"email",class:"invalid-feedback"})]),e("div",Z,[$,n(m,{id:"name",name:"姓名",type:"text",class:r(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.user.name,"onUpdate:modelValue":t[2]||(t[2]=a=>s.user.name=a)},null,8,["class","modelValue"]),n(_,{name:"姓名",class:"invalid-feedback"})]),e("div",ee,[te,n(m,{id:"tel",name:"電話",type:"tel",class:r(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:s.user.tel,"onUpdate:modelValue":t[3]||(t[3]=a=>s.user.tel=a)},null,8,["class","rules","modelValue"]),n(_,{name:"電話",class:"invalid-feedback"})]),e("div",se,[le,n(m,{id:"address",name:"地址",type:"text",class:r(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.user.address,"onUpdate:modelValue":t[4]||(t[4]=a=>s.user.address=a)},null,8,["class","modelValue"]),n(_,{name:"地址",class:"invalid-feedback"})]),e("div",ae,[oe,n(m,{as:"textarea",id:"message",name:"留言",class:"form-control",cols:"30",rows:"10",modelValue:s.user.message,"onUpdate:modelValue":t[5]||(t[5]=a=>s.user.message=a)},null,8,["modelValue"])]),e("div",ne,[e("button",{type:"submit",class:r(["btn btn-danger",{disabled:s.isOpen}])},"送出訂單",2)])]),_:1},8,["onSubmit"])])],64)}const re=y(E,[["render",de]]);export{re as default};
