import{_ as u,r as i,o as p,c as _,a,b as t,w as s,i as h,d as n}from"./index-d4859fcf.js";const{VITE_API:v}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"mandyapi",BASE_URL:"/hex-vue3-mainWork6/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{}},methods:{checkUser(){this.$http.post(`${v}/api/user/check`).then(e=>{console.log(e.data)}).catch(e=>{e.response.data.success||this.$router.push("/login")})},logout(){document.cookie=`userToken=; expires=${new Date};`,this.$router.push("/login")}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.checkUser()}},m={class:"container text-center"},b=a("h3",null,"後台頁面",-1),g={class:"navbar navbar-expand-lg bg-light mb-5"},f={class:"container-fluid"},x=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),$={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},A={class:"navbar-nav"};function T(e,r,E,V,w,c){const o=i("router-link"),l=i("router-view");return p(),_("div",m,[b,a("nav",g,[a("div",f,[t(o,{to:"/",class:"navbar-brand"},{default:s(()=>[n("往前台")]),_:1}),x,a("div",$,[a("div",A,[t(o,{class:"nav-link",to:"/admin/products"},{default:s(()=>[n("後台產品管理")]),_:1}),t(o,{class:"nav-link",to:"/admin/orders"},{default:s(()=>[n("後台訂單管理")]),_:1}),a("a",{href:"#",class:"nav-link ms-2",onClick:r[0]||(r[0]=h((...d)=>c.logout&&c.logout(...d),["prevent"]))},"登出")])])])]),t(l)])}const N=u(k,[["render",T]]);export{N as default};
