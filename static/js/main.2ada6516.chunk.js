(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(t,e,r){"use strict";r.r(e);var n,a,c=r(0),i=r.n(c),o=(r(91),r(10)),s=r.n(o),d=r(48),u=r(34),l=r(155),p=r(156),j=r(157),b=r(150);!function(t){t.Goods="/",t.Cart="/cart"}(n||(n={})),function(t){t[t.Empty=0]="Empty",t[t.OneUnit=1]="OneUnit"}(a||(a={}));var m,h=r(2),f=Object(c.memo)((function(t){var e=t.picture,r=t.name,n=t.price,i=t.id,o=t.toPurchase,s=t.onRemoveProductInCart,d=t.onDeleteProductFromCart,u=t.onAddItemToCart,l=Object(c.useCallback)((function(){s(i)}),[i]),p=Object(c.useCallback)((function(){d(i)}),[i]),j=Object(c.useCallback)((function(){u(i)}),[i]);return Object(h.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(h.jsx)("img",{src:e,alt:"product_photo",style:{width:"150px",height:"150px"}}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:r})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:n})}),Object(h.jsxs)("div",{style:{display:"flex"},children:[o>a.OneUnit?Object(h.jsx)(b.a,{variant:"contained",color:"primary",onClick:l,children:"-"}):Object(h.jsx)(b.a,{variant:"contained",color:"primary",onClick:p,children:"-"}),Object(h.jsx)("div",{style:{padding:"10px"},children:o}),Object(h.jsx)(b.a,{variant:"contained",color:"primary",onClick:j,children:"+"})]})]})})),O=r(21),x=r(19),v=r(46),y=Object(O.c)({name:"cart",initialState:{status:"idle"},reducers:{setAppStatus:function(t,e){t.status=e.payload.status}}}),C=y.reducer,g=y.actions.setAppStatus,P=r(81),A=r(41),w=r.n(A),N=r(54),k=r(77),E=r.n(k).a.create({baseURL:"https://test-shop-az.herokuapp.com"}),F=function(){return E.get(n.Goods)},I=function(t,e){return E.post(n.Cart,{addedCart:t,values:e})},L=function(t,e){var r=JSON.stringify(t);localStorage.setItem(e,r)};!function(t){t.productsPlannedForPurchase="addedProduct"}(m||(m={}));var S=m.productsPlannedForPurchase,B=Object(O.b)("shoppingCart/buy",function(){var t=Object(N.a)(w.a.mark((function t(e,r){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(g({status:"loading"})),t.next=3,I(e.addedCart,e.values);case 3:return n=t.sent,a=n.data,r.dispatch(g({status:"succeeded"})),t.abrupt("return",{data:a});case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),D=Object(O.c)({name:"cart",initialState:{sumPrice:0,cartContents:[],isPurchaseMade:!1},reducers:{setCart:function(t,e){var r=e.payload.addProduct;t.cartContents=[].concat(Object(P.a)(t.cartContents),[r]),t.sumPrice=t.cartContents.reduce((function(t,e){return t+e.price}),0),L(t.cartContents,S)},deleteCart:function(t,e){t.cartContents=t.cartContents.filter((function(t){return t.id!==e.payload.id})),L(t.cartContents,S)},totalPrice:function(t){t.sumPrice=t.cartContents.reduce((function(t,e){return t+e.price}),0)},subtractCart:function(t,e){t.cartContents.map((function(r){return r.id===e.payload.id&&(r.price-=r.price/r.toPurchase,r.toPurchase-=1),t})),L(t.cartContents,S)},addProductInCart:function(t,e){t.cartContents.map((function(t){var r=e.payload;return t.id===r.id&&(t.price+=t.price/t.toPurchase,t.toPurchase+=1),t})),t.sumPrice=t.cartContents.reduce((function(t,e){return t+e.price}),0),L(t.cartContents,S)},conditionBuy:function(t,e){t.isPurchaseMade=e.payload.result}},extraReducers:function(t){t.addCase(B.fulfilled,(function(t,e){t.isPurchaseMade=e.payload.data,t.cartContents=[],t.sumPrice=t.cartContents.reduce((function(t,e){return t+e.price}),0),L(t.cartContents,S)}))}}),_=D.reducer,G=D.actions,M=G.setCart,R=G.totalPrice,V=G.subtractCart,z=G.addProductInCart,T=G.deleteCart,U=G.conditionBuy,W=r(24),Y=r.p+"static/media/6-1000x1000.9c0a3947.jpg",q=r.p+"static/media/6064641689.2e40e89d.jpg",K={result:"",data:[],imgArr:[{id:1,photo:Y},{id:2,photo:r.p+"static/media/680395566_w640_h640_kruzhka-s-prikolom.6603be42.jpg"},{id:3,photo:q},{id:4,photo:r.p+"static/media/kruzhka_sgushchenka_img.d966e552.webp"},{id:5,photo:r.p+"static/media/people_2_mug_chameleon_front_whitered_500.8f503f2c.jpg"},{id:6,photo:r.p+"static/media/pic1white.1ea6d9b1.jpg"},{id:7,photo:r.p+"static/media/product_57508_0_0_0.5fd91d27.jpg"}]},H=Object(O.b)("goods/goodsAll",function(){var t=Object(N.a)(w.a.mark((function t(e,r){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(g({status:"loading"})),t.next=3,F();case 3:return n=t.sent,a=n.data,r.dispatch(R()),r.dispatch(g({status:"succeeded"})),t.abrupt("return",{data:a});case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),Q=Object(O.c)({name:"goods",initialState:K,reducers:{},extraReducers:function(t){t.addCase(H.fulfilled,(function(t,e){t.data=e.payload.data.map((function(e){var r=t.imgArr.find((function(t){return t.id===e.id}));return r&&(e=Object(W.a)(Object(W.a)({},e),{},{photo:r.photo})),e}))}))}}).reducer,J=Object(x.b)({goods:Q,cart:_,app:C}),Z=Object(O.a)({reducer:J,middleware:function(t){return t().prepend(v.a)}});window.store=Z;var $=function(){return Object(d.b)()},X=d.c,tt=function(t){return t.cart.sumPrice},et=function(t){return t.cart.cartContents},rt=function(t){return t.goods.data},nt=function(t){return t.cart.isPurchaseMade},at=function(t){return t.goods.data},ct=function(t){return t.app.status},it=function(){var t=$(),e=X(et),r=X(tt);Object(c.useEffect)((function(){t(R())}),[e]);var n=function(e){t(V({id:e}))},i=function(e){t(T({id:e}))},o=function(e){t(z({id:e}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"shopping list:"}),Object(h.jsx)("div",{style:{padding:"20px"},children:e.map((function(t){var e=t.id,r=t.name,a=t.price,c=t.photo,s=t.toPurchase;return Object(h.jsx)(f,{name:r,price:a,picture:c,id:e,toPurchase:s,onRemoveProductInCart:n,onAddItemToCart:o,onDeleteProductFromCart:i},e)}))}),Object(h.jsx)("div",{children:r!==a.Empty&&Object(h.jsxs)("span",{children:["amount to pay: ",r]})})]})},ot=r(160),st=r(154),dt=r(158),ut=r(161),lt=r(159),pt=r(80),jt=Object(c.memo)((function(t){var e=t.mediaStyle,r=$(),n=X(et),a=Object(pt.a)({initialValues:{firstLastName:"",cardNumber:"",expirationDate:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.cardNumber?19===t.cardNumber.length&&/^[0-9]+ [0-9]+ [0-9]+ [0-9]{4}$/i.test(t.cardNumber)||(e.cardNumber="Invalid card number"):e.cardNumber="Required",t.firstLastName?/^[A-Z]+ [A-Z]{2,20}$/i.test(t.firstLastName)||(e.firstLastName="Invalid firstLastName"):e.firstLastName="Required",t.expirationDate?5===t.expirationDate.length&&/^[0-9]+\/[0-9]{2}$/i.test(t.expirationDate)||(e.expirationDate="Invalid expirationDate"):e.expirationDate="Required",t.password?/^[0-9]{3}$/i.test(t.password)||(e.password="Invalid password"):e.password="Required",e},onSubmit:function(t){r(B({addedCart:n,values:t})),a.resetForm()}});return Object(h.jsx)(ot.a,{style:{paddingLeft:"50px"},children:Object(h.jsx)("form",{onSubmit:a.handleSubmit,style:e,children:Object(h.jsxs)(st.a,{children:[Object(h.jsx)(dt.a,Object(W.a)({variant:"outlined",type:"tel",label:"0000 0000 0000 0000",margin:"normal"},a.getFieldProps("cardNumber"))),a.touched.cardNumber&&a.errors.cardNumber&&Object(h.jsx)("div",{style:{color:"red"},children:a.errors.cardNumber}),Object(h.jsx)(dt.a,Object(W.a)({variant:"outlined",label:"IVAN IVANOV",margin:"normal"},a.getFieldProps("firstLastName"))),a.touched.firstLastName&&a.errors.firstLastName&&Object(h.jsx)("div",{style:{color:"red"},children:a.errors.firstLastName}),Object(h.jsx)(dt.a,Object(W.a)({variant:"outlined",label:"00/00",margin:"normal"},a.getFieldProps("expirationDate"))),a.touched.expirationDate&&a.errors.expirationDate&&Object(h.jsx)("div",{style:{color:"red"},children:a.errors.expirationDate}),Object(h.jsx)(dt.a,Object(W.a)({variant:"outlined",label:"000",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(h.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(h.jsx)(ut.a,{label:"remember me",control:Object(h.jsx)(lt.a,Object(W.a)({},a.getFieldProps("rememberMe"))),checked:a.values.rememberMe}),Object(h.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",children:"buy"})]})})})})),bt=r(8),mt=r(58),ht=r.n(mt),ft=Object(c.memo)((function(t){var e=t.mediaStyle;return Object(h.jsx)("div",{className:ht.a.container,children:Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsxs)("div",{style:e,children:[Object(h.jsx)(it,{}),Object(h.jsx)(jt,{mediaStyle:e})]})})})})),Ot=r(32),xt=Object(c.memo)((function(){return Object(h.jsxs)(bt.c,{children:[Object(h.jsx)(bt.a,{path:n.Goods,element:Object(h.jsx)(wt,{})}),Object(h.jsx)(bt.a,{path:n.Cart,element:Object(h.jsx)(vt,{})})]})})),vt=function(){var t=$(),e=Object(bt.f)(),r=X(nt),a=function(){var t=Object(c.useState)(window.matchMedia("(min-width: 550px)").matches),e=Object(Ot.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){window.matchMedia("(min-width: 550px)").addEventListener("change",(function(t){return n(t.matches)}))}),[r]),{matches:r}}(),i=a.matches?{display:"flex"}:{display:"block"};return Object(c.useEffect)((function(){t(U({result:!1}))}),[r]),r&&e(n.Goods,{replace:!0}),Object(h.jsx)("div",{children:Object(h.jsx)(ft,{mediaStyle:i})})},yt=Object(c.memo)((function(t){var e=t.sumPrice;return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.b,{to:n.Goods,style:{textDecoration:"none"},children:Object(h.jsx)(b.a,{color:"inherit",children:Object(h.jsx)("p",{style:{color:"#fff"},children:"Goods"})})}),Object(h.jsx)(u.b,{to:n.Cart,style:{textDecoration:"none"},children:Object(h.jsxs)(b.a,{color:"inherit",children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABN0lEQVRIx2NgGM7gf/1/GFhMLYN+/1egjkH//0+h3IPO/0kHt/4rYTPqJBlGFWIzKIBkY/7818ZmEOP/K2DpSoLBwPj/LFjlHFwKYsHSL/9zEjAoBqzuy38pXApY/t8HK8nBawzH/4dgVU34FGWBlTz4z4pHTTlYzYv/PPhtew5WFo9Thcj/D2AVGYQCEmLftf+MOOQnQuVZCBnE9/89WGkQVlmV/z/Bsr7EpPEWqJ31WOARsNwB4jKLLYFk+O+/CXEGbSdgUANxxrhCC5QWrF6r+G9FnDFM/y+ADZpJaWFiAzbm838JSg0qBBt0Eau3UKEDfoO8iC5C6gkVEKupYhA4uD3/11HsNWrWcibAbPAZiE1Il0VWKP7/LTQM3mEmAfyyqEqTkIIzlTRZGhlELa9RLbCHEwAAzDjcMcF63UIAAAAASUVORK5CYII=",alt:"cart"}),e!==a.Empty&&Object(h.jsx)("p",{style:{color:"#fff"},children:e})]})})]})})),Ct=function(){var t=X(tt);return Object(h.jsx)(yt,{sumPrice:t})},gt=Object(c.memo)((function(t){var e=t.photo,r=t.onBuyProductButton,n=t.name,a=t.price,i=Object(c.useCallback)((function(){r()}),[r]);return Object(h.jsxs)("div",{style:{padding:"20px"},children:[Object(h.jsx)("img",{src:e,alt:"product_photo",style:{width:"300px",height:"300px"}}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("h3",{children:a}),Object(h.jsx)(b.a,{variant:"contained",color:"primary",onClick:i,children:"buy"})]})})),Pt=Object(c.memo)((function(t){var e=t.photo,r=t.id,n=t.name,a=t.price,c=$(),i=X(et),o=X(at);return Object(h.jsx)(gt,{name:n,photo:e,price:a,onBuyProductButton:function(){var t=i.some((function(t){return t.id===r})),e=o.find((function(t){return t.id===r}));return t?c(z({id:r})):e?c(M({addProduct:e})):void 0}})})),At=function(t){var e=t.allProducts;return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(h.jsx)("div",{className:ht.a.container,children:e.map((function(t){var e=t.photo,r=t.name,n=t.id,a=t.price;return Object(h.jsx)(Pt,{photo:e,name:r,id:n,price:a},n)}))})})},wt=function(){var t=X(rt);return Object(h.jsx)(At,{allProducts:t})},Nt=function(){var t=$(),e=X(ct);return Object(c.useEffect)((function(){(function(t){var e=localStorage.getItem(t);return null!==e?JSON.parse(e).filter((function(t){return null!==t})):[]})(m.productsPlannedForPurchase).map((function(e){return t(M({addProduct:e}))})),t(H())}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)(l.a,{position:"static",children:[Object(h.jsx)(p.a,{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)(Ct,{})}),"loading"===e&&Object(h.jsx)(j.a,{})]}),Object(h.jsx)(xt,{})]})},kt=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,162)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),c(t),i(t)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(u.a,{basename:"/",children:Object(h.jsx)(d.a,{store:Z,children:Object(h.jsx)(Nt,{})})})}),document.getElementById("root")),kt()},58:function(t,e,r){t.exports={container:"Container_container__2SB1r"}},91:function(t,e,r){}},[[121,1,2]]]);
//# sourceMappingURL=main.2ada6516.chunk.js.map