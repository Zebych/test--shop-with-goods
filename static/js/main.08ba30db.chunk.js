(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,r){e.exports={container:"Container_container__2WC6z"}},78:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=(r(78),r(10)),i=r.n(n),d=r(47),o=r(32),s=r(22),u=r(18),l=r(44),j=r(68),p=r(30),b=r.n(p),m=r(43),h=r.p+"static/media/6-1000x1000.9c0a3947.jpg",f=r.p+"static/media/6064641689.2e40e89d.jpg",O=r.p+"static/media/680395566_w640_h640_kruzhka-s-prikolom.6603be42.jpg",x=r.p+"static/media/kruzhka_sgushchenka_img.d966e552.webp",v=r.p+"static/media/people_2_mug_chameleon_front_whitered_500.8f503f2c.jpg",y=r.p+"static/media/pic1white.1ea6d9b1.jpg",g=[{name:"mug1",photo:h,id:1,price:50,toPurchase:1,inStock:10},{name:"mug3",photo:f,id:3,price:90,toPurchase:1,inStock:10},{name:"mug2",photo:O,id:2,price:70,toPurchase:1,inStock:10},{name:"mug4",photo:x,id:4,price:100,toPurchase:1,inStock:10},{name:"mug5",photo:v,id:5,price:110,toPurchase:1,inStock:10},{name:"mug6",photo:r.p+"static/media/product_57508_0_0_0.5fd91d27.jpg",id:6,price:120,toPurchase:1,inStock:10},{name:"mug7",photo:y,id:7,price:130,toPurchase:1,inStock:10}],C=[],P=function(e){return new Promise((function(t){setTimeout((function(){1===e&&t({result:"success",data:g}),t({result:"error",data:[]})}),0)}))},w=function(e){return new Promise((function(t){setTimeout((function(){t(g.find((function(t){return t.id===e})))}),0)}))},A=function(e,t){return C.push(e,t),new Promise((function(e){setTimeout((function(){e({result:"true"})}),0)}))},k=function(e){try{var t=JSON.stringify(e);localStorage.setItem("addedProduct",t)}catch(r){}},N=Object(s.b)("cart/buy",function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(t.addedCart,t.values));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(s.c)({name:"cart",initialState:{sumPrice:0,addedCart:[],conditionBuy:!1},reducers:{setCart:function(e,t){var r=t.payload.addProduct;e.addedCart=[].concat(Object(j.a)(e.addedCart),[r]),e.sumPrice=e.addedCart.reduce((function(e,t){return e+t.price}),0),k(e.addedCart)},deleteCart:function(e,t){e.addedCart=e.addedCart.filter((function(e){return e.id!==t.payload.id})),k(e.addedCart)},totalPrice:function(e){e.sumPrice=e.addedCart.reduce((function(e,t){return e+t.price}),0)},subtractCart:function(e,t){e.addedCart.map((function(r){return r.id===t.payload.id&&(r.price-=r.price/r.toPurchase,r.toPurchase-=1),e})),k(e.addedCart)},addProductInCart:function(e,t){e.addedCart.map((function(e){var r=t.payload;return e.id===r.id&&(e.price+=e.price/e.toPurchase,e.toPurchase+=1),e})),e.sumPrice=e.addedCart.reduce((function(e,t){return e+t.price}),0),k(e.addedCart)},conditionBuy:function(e,t){e.conditionBuy=t.payload.result}},extraReducers:function(e){e.addCase(N.fulfilled,(function(e,t){e.conditionBuy=t.payload.result,e.addedCart=[],e.sumPrice=e.addedCart.reduce((function(e,t){return e+t.price}),0),k(e.addedCart)}))}}),L=S.reducer,D=S.actions,E=D.setCart,I=D.totalPrice,B=D.subtractCart,F=D.addProductInCart,_=D.deleteCart,V=D.conditionBuy,z=Object(s.b)("cart/addInCart",function(){var e=Object(m.a)(b.a.mark((function e(t,r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:c=e.sent,r.dispatch(E({addProduct:c}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T=Object(s.b)("goods/goodsAll",function(){var e=Object(m.a)(b.a.mark((function e(t,r){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:return c=e.sent,a=c.data,r.dispatch(I()),e.abrupt("return",{data:a});case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),M=Object(s.c)({name:"goods",initialState:{result:"",data:[]},reducers:{},extraReducers:function(e){e.addCase(T.fulfilled,(function(e,t){e.data=t.payload.data}))}}).reducer,R=Object(u.b)({goods:M,cart:L}),W=Object(s.a)({reducer:R,middleware:function(e){return e().prepend(l.a)}});window.store=W;var G=function(){return Object(d.b)()},Y=d.c,q=r(123),K=r(124),H=r(118),Q=r(2),J=Object(c.memo)((function(e){var t=e.picture,r=e.name,a=e.price,n=e.id,i=e.toPurchase,d=e.subtractProduct,o=e.DeleteProduct,s=e.AddProduct,u=Object(c.useCallback)((function(){d(n)}),[]),l=Object(c.useCallback)((function(){o(n)}),[]),j=Object(c.useCallback)((function(){s(n)}),[]);return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)("img",{src:t,alt:"product_photo",style:{width:"150px",height:"150px"}}),Object(Q.jsx)("div",{children:Object(Q.jsx)("p",{children:r})}),Object(Q.jsx)("div",{children:Object(Q.jsx)("p",{children:a})}),Object(Q.jsxs)("div",{style:{display:"flex"},children:[i>1?Object(Q.jsx)(H.a,{variant:"contained",color:"primary",onClick:u,children:"-"}):Object(Q.jsx)(H.a,{variant:"contained",color:"primary",onClick:l,children:"-"}),Object(Q.jsx)("div",{style:{padding:"10px"},children:i}),Object(Q.jsx)(H.a,{variant:"contained",color:"primary",onClick:j,children:"+"})]})]})})})),U=function(e){return e.cart.sumPrice},Z=function(e){return e.cart.addedCart},$=function(e){return e.goods.data},X=function(e){return e.cart.conditionBuy},ee=Object(c.memo)((function(){var e=Y(Z),t=Y(U),r=G();Object(c.useEffect)((function(){r(I())}),[e]);var a=function(e){r(B({id:e}))},n=function(e){r(_({id:e}))},i=function(e){r(F({id:e}))};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)("p",{children:"shopping list:"}),Object(Q.jsx)("div",{style:{padding:"20px"},children:e.map((function(e){return Object(Q.jsx)(J,{name:e.name,price:e.price,picture:e.photo,id:e.id,toPurchase:e.toPurchase,subtractProduct:a,AddProduct:i,DeleteProduct:n},e.id)}))}),Object(Q.jsx)("div",{children:t>0&&Object(Q.jsxs)("span",{children:["amount to pay: ",t]})})]})})})),te=r(39),re=r(127),ce=r(122),ae=r(125),ne=r(128),ie=r(126),de=r(67),oe=Object(c.memo)((function(e){var t=e.mediaStyle,r=G(),c=Y(Z),a=Object(de.a)({initialValues:{firstLastName:"",cardNumber:"",expirationDate:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.cardNumber?19===e.cardNumber.length&&/^[0-9]+ [0-9]+ [0-9]+ [0-9]{4}$/i.test(e.cardNumber)||(t.cardNumber="Invalid card number"):t.cardNumber="Required",e.firstLastName?/^[A-Z]+ [A-Z]{2,20}$/i.test(e.firstLastName)||(t.firstLastName="Invalid firstLastName"):t.firstLastName="Required",e.expirationDate?5===e.expirationDate.length&&/^[0-9]+\/[0-9]{2}$/i.test(e.expirationDate)||(t.expirationDate="Invalid expirationDate"):t.expirationDate="Required",e.password?/^[0-9]{3}$/i.test(e.password)||(t.password="Invalid password"):t.password="Required",t},onSubmit:function(e){r(N({addedCart:c,values:e})),a.resetForm()}});return Object(Q.jsx)(re.a,{style:{paddingLeft:"50px"},children:Object(Q.jsx)("form",{onSubmit:a.handleSubmit,style:t,children:Object(Q.jsxs)(ce.a,{children:[Object(Q.jsx)(ae.a,Object(te.a)({variant:"outlined",type:"tel",label:"0000 0000 0000 0000",margin:"normal"},a.getFieldProps("cardNumber"))),a.touched.cardNumber&&a.errors.cardNumber&&Object(Q.jsx)("div",{style:{color:"red"},children:a.errors.cardNumber}),Object(Q.jsx)(ae.a,Object(te.a)({variant:"outlined",label:"IVAN IVANOV",margin:"normal"},a.getFieldProps("firstLastName"))),a.touched.firstLastName&&a.errors.firstLastName&&Object(Q.jsx)("div",{style:{color:"red"},children:a.errors.firstLastName}),Object(Q.jsx)(ae.a,Object(te.a)({variant:"outlined",label:"00/00",margin:"normal"},a.getFieldProps("expirationDate"))),a.touched.expirationDate&&a.errors.expirationDate&&Object(Q.jsx)("div",{style:{color:"red"},children:a.errors.expirationDate}),Object(Q.jsx)(ae.a,Object(te.a)({variant:"outlined",label:"000",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(Q.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(Q.jsx)(ne.a,{label:"remember me",control:Object(Q.jsx)(ie.a,Object(te.a)({},a.getFieldProps("rememberMe"))),checked:a.values.rememberMe}),Object(Q.jsx)(H.a,{type:"submit",variant:"contained",color:"primary",children:"buy"})]})})})})),se=r(54),ue=r.n(se),le=Object(c.memo)((function(e){var t=e.mediaStyle;return Object(Q.jsx)("div",{className:ue.a.container,children:Object(Q.jsx)("div",{style:{display:"flex"},children:Object(Q.jsxs)("div",{style:t,children:[Object(Q.jsx)(ee,{}),Object(Q.jsx)(oe,{mediaStyle:t})]})})})})),je=r(29),pe=r(7),be=Object(c.memo)((function(){var e=Y(X),t=G(),r=Object(pe.f)(),a=Object(c.useState)(window.matchMedia("(min-width: 550px)").matches),n=Object(je.a)(a,2),i=n[0],d=n[1];Object(c.useEffect)((function(){window.matchMedia("(min-width: 550px)").addEventListener("change",(function(e){return d(e.matches)}))}),[]);var o=i?{display:"flex"}:{display:"block"};return Object(c.useEffect)((function(){t(V({result:!1}))}),[e]),e&&r("/test--shop-with-goods",{replace:!0}),Object(Q.jsx)("div",{children:Object(Q.jsx)(le,{mediaStyle:o})})})),me=Object(c.memo)((function(){var e=Y(U);return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(o.b,{to:"/test--shop-with-goods",style:{textDecoration:"none"},children:Object(Q.jsx)(H.a,{color:"inherit",children:Object(Q.jsx)("p",{style:{color:"#fff"},children:"Goods"})})}),Object(Q.jsx)(o.b,{to:"/cart",style:{textDecoration:"none"},children:Object(Q.jsxs)(H.a,{color:"inherit",children:[Object(Q.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABN0lEQVRIx2NgGM7gf/1/GFhMLYN+/1egjkH//0+h3IPO/0kHt/4rYTPqJBlGFWIzKIBkY/7818ZmEOP/K2DpSoLBwPj/LFjlHFwKYsHSL/9zEjAoBqzuy38pXApY/t8HK8nBawzH/4dgVU34FGWBlTz4z4pHTTlYzYv/PPhtew5WFo9Thcj/D2AVGYQCEmLftf+MOOQnQuVZCBnE9/89WGkQVlmV/z/Bsr7EpPEWqJ31WOARsNwB4jKLLYFk+O+/CXEGbSdgUANxxrhCC5QWrF6r+G9FnDFM/y+ADZpJaWFiAzbm838JSg0qBBt0Eau3UKEDfoO8iC5C6gkVEKupYhA4uD3/11HsNWrWcibAbPAZiE1Il0VWKP7/LTQM3mEmAfyyqEqTkIIzlTRZGhlELa9RLbCHEwAAzDjcMcF63UIAAAAASUVORK5CYII=",alt:"cart"}),e>0&&Object(Q.jsx)("p",{style:{color:"#fff"},children:e})]})})]})})),he=Object(c.memo)((function(){return Object(Q.jsxs)(pe.c,{children:[Object(Q.jsx)(pe.a,{path:"/test--shop-with-goods",element:Object(Q.jsx)(Oe,{})}),Object(Q.jsx)(pe.a,{path:"/cart",element:Object(Q.jsx)(be,{})})]})})),fe=Object(c.memo)((function(e){var t=e.photo,r=e.id,c=e.name,a=e.price,n=Y(Z),i=G();return Object(Q.jsxs)("div",{style:{padding:"20px"},children:[Object(Q.jsx)("img",{src:t,alt:"product_photo",style:{width:"300px",height:"300px"}}),Object(Q.jsx)("p",{children:c}),Object(Q.jsx)("h3",{children:a}),Object(Q.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){n.some((function(e){return e.id===r}))?i(F({id:r})):i(z(r))},children:"buy"})]})})),Oe=Object(c.memo)((function(){var e=Y($);return Object(Q.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(Q.jsx)("div",{className:ue.a.container,children:e.map((function(e){return Object(Q.jsx)(fe,{photo:e.photo,name:e.name,id:e.id,price:e.price},e.id)}))})})})),xe=Object(c.memo)((function(){var e=G();return Object(c.useEffect)((function(){(function(){try{var e=localStorage.getItem("addedProduct");return null!==e?JSON.parse(e).filter((function(e){return null!==e})):[]}catch(t){return null}})().map((function(t){return e(E({addProduct:t}))})),e(T(1))}),[]),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(q.a,{position:"static",children:Object(Q.jsx)(K.a,{style:{display:"flex",justifyContent:"flex-end"},children:Object(Q.jsx)(me,{})})}),Object(Q.jsx)(he,{})]})})),ve=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,130)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(o.a,{children:Object(Q.jsx)(d.a,{store:W,children:Object(Q.jsx)(xe,{})})})}),document.getElementById("root")),ve()}},[[90,1,2]]]);
//# sourceMappingURL=main.08ba30db.chunk.js.map