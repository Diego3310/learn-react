(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,a){t.exports=a(16)},16:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a(3),r=a(5),s=a(4),i=a(6),o=a(0),l=a.n(o),m=a(1),u=a(7),p=a.n(u),d=(a(12),function(t){function e(){var t;return Object(n.a)(this,e),(t=Object(r.a)(this,Object(s.a)(e).call(this))).add=function(){if(t.state.quantity===parseInt(t.props.stock))return t.setState({existStock:!1}),alert("".concat(t.props.name," without stock"));t.setState({quantity:t.state.quantity+1})},t.remove=function(){if(0===t.state.quantity)return alert("Don't remove");t.setState({existStock:!0}),t.setState({quantity:t.state.quantity-1})},t.clean=function(){t.setState({existStock:!0}),t.setState({quantity:0})},t.state={quantity:0,existStock:!0},t.add=t.add.bind(Object(m.a)(t)),t.remove=t.remove.bind(Object(m.a)(t)),t.clean=t.clean.bind(Object(m.a)(t)),t}return Object(i.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t="card ".concat(p.a.FruitCard," border rounded"),e="card ".concat(p.a.FruitCardError," border rounded"),a=this.state.existStock?t:e;return l.a.createElement("div",{className:a},l.a.createElement("div",{className:"card-header"},l.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Added ",l.a.createElement("span",{className:"badge badge-light"},this.state.quantity)),l.a.createElement("button",{type:"button",className:"btn btn-muted float-right"},"Total : ",l.a.createElement("span",{className:"badge badge-light"}," $ ",this.props.price*this.state.quantity))),l.a.createElement("img",{src:this.props.img,className:"card-img-top img-thumbnail",alt:""}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},this.props.name),l.a.createElement("p",{id:"stock-js",className:"card-text"}," Stock : ",this.props.stock-this.state.quantity),l.a.createElement("p",{className:"card-text"},"Price : $ ",this.props.price),l.a.createElement("div",{className:"text-center btn-group"},l.a.createElement("button",{className:"btn btn-info",onClick:this.add},"Add"),l.a.createElement("button",{className:"btn btn-danger",onClick:this.remove},"Remove"),l.a.createElement("button",{className:"btn btn-success",onClick:this.clean},"Clean"))))}}]),e}(l.a.Component)),b=[{name:"Orange",price:"5.00",stock:"10",img:"https://ceyloncoolspice.com/wp-content/uploads/2018/07/orange.jpg"},{name:"Apple",price:"3.00",stock:"15",img:"https://candlekiln.com/wp-content/uploads/2017/06/apple2.jpg"},{name:"Banana",price:"2.00",stock:"10",img:"https://previews.123rf.com/images/kulyk/kulyk1507/kulyk150700013/43279121-banana-fruit-close-up-bunch-of-bananas-isolated-on-white-background-qualitative-vector-illustration-.jpg"},{name:"Coconaut",price:"3.00",stock:"4",img:"https://cdn.shopify.com/s/files/1/2154/4937/products/Coconut600x600_1_a00f8f32-80d0-47e5-b70f-4751bbe28d30_600x.png?v=1571578092"},{name:"Strawberry",price:"6.00",stock:"20",img:"https://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg"},{name:"Peach",price:"3.00",stock:"33",img:"https://greenshop.com.ar/wp-content/uploads/sites/9/2016/08/A.2.17-500GR.jpg"}],h=function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(s.a)(e).call(this))}return Object(i.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center p-5"},"Delicious Fruit Market"),l.a.createElement("hr",null),l.a.createElement("div",{className:"card-columns"},b.map((function(t,e){return l.a.createElement(d,{key:e,name:t.name,img:t.img,price:t.price,stock:t.stock})}))))}}]),e}(l.a.Component),k=a(9);a.n(k).a.render(l.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,a){t.exports={FruitCard:"FruitCard_FruitCard__rdm6c",FruitCardError:"FruitCard_FruitCardError__2A7X1"}}},[[10,1,2]]]);
//# sourceMappingURL=main.dc95c4f7.chunk.js.map