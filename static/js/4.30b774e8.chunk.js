(this["webpackJsonpe-commerce-crw"]=this["webpackJsonpe-commerce-crw"]||[]).push([[4],{102:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(42),l=(n(91),n(41)),i=n(16),o=n(24),u=n(25),m=n(18),s=n(22);var f=Object(m.b)({getCurrentUser:u.a}),b=Object(s.g)(Object(i.b)(f,(function(e){return{addItem:function(t){return e(Object(o.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,c=e.getCurrentUser,r=e.history,i=t.name,o=t.price,u=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(u,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",null,i),a.a.createElement("span",null,"$",o)),c?a.a.createElement(l.a,{onClick:function(){return n(t)},inverted:!0},"ADD TO CART"):a.a.createElement(l.a,{onClick:function(){return r.push("/signin")},inverted:!0},"SIGN IN TO BUY"))}))),v=(n(92),n(23));function p(e){var t=e.title,n=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},a.a.createElement(v.b,{to:"shop/".concat(t.toLowerCase())},t)),a.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(b,{key:e.id,item:e})}))))}var E=Object(m.a)([function(e){return e.shopReducer}],(function(e){return e.collections})),d=Object(m.a)([E],(function(e){return Object.values(e)}));var h=Object(i.b)((function(e){return{collections:d(e)}}))((function(e){var t=e.collections;return a.a.createElement("div",null,t.map((function(e){var t=e.id,n=Object(r.a)(e,["id"]);return a.a.createElement(p,Object.assign({key:t},n))})))}));n(93);var O=Object(i.b)((function(e,t){return{selectCollection:(n=t.match.params.collectionid,Object(m.a)([E],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.selectCollection,n=t.title,c=t.items;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("div",{className:"items"},c.map((function(e){return a.a.createElement(b,{key:e.id,item:e})}))))})),j=n(34),g=n(48);t.default=Object(i.b)((function(e){return{getShopCollections:E(e)}}),(function(e){return{fetchCollectionsStart:function(){return e(Object(j.b)())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match,r=e.getShopCollections;return Object(c.useEffect)((function(){t()}),[t]),a.a.createElement(a.a.Fragment,null,""===r?a.a.createElement(g.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(s.b,{exact:!0,path:"".concat(n.url),component:h}),a.a.createElement(s.b,{path:"".concat(n.url,"/:collectionid"),component:O})))}))},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}}]);
//# sourceMappingURL=4.30b774e8.chunk.js.map