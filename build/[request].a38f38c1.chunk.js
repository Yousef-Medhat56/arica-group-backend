(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6750],{85104:(V,J,y)=>{"use strict";V.exports=y(74879)},74879:function(V,J,y){(function(r,x){V.exports=x(y(67294),y(78384),y(39711),y(43257))})(this,function(r,x,P,m){return function(n){var l={};function t(i){if(l[i])return l[i].exports;var a=l[i]={i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=l,t.d=function(i,a,d){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:d})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var u in i)t.d(d,u,function(f){return i[f]}.bind(null,u));return d},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=115)}({0:function(n,l,t){n.exports=t(19)()},1:function(n,l){n.exports=r},10:function(n,l,t){var i=t(25),a=t(26),d=t(22),u=t(27);n.exports=function(f,p){return i(f)||a(f,p)||d(f,p)||u()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,l,t){"use strict";t.r(l),t.d(l,"Link",function(){return Y});var i,a,d=t(5),u=t.n(d),f=t(4),p=t.n(f),b=t(3),k=t.n(b),A=t(1),s=t.n(A),M=t(0),O=t.n(M),R=t(2),F=t.n(R),B=t(83),e=t.n(B),o=t(38),c=t(8),$=t(6),Q=t(16),_=["href","to","children","disabled","startIcon","endIcon"],re=F.a.a(i||(i=k()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(T){return T.disabled?"none":void 0},function(T){var K=T.disabled,G=T.theme;return K?G.colors.neutral600:G.colors.primary600},.625,function(T){return T.theme.colors.primary800},Q.a),ee=F()($.Box)(a||(a=k()([`
  display: flex;
`]))),Y=function(T){var K=T.href,G=T.to,oe=T.children,X=T.disabled,te=T.startIcon,ne=T.endIcon,ae=p()(T,_),ie=K?"_blank":void 0,le=K?"noreferrer noopener":void 0;return s.a.createElement(re,u()({as:G&&!X?o.NavLink:"a",target:ie,rel:le,to:X?void 0:G,href:X?"#":K,disabled:X},ae),te&&s.a.createElement(ee,{as:"span","aria-hidden":!0,paddingRight:2},te),s.a.createElement(c.Typography,{textColor:X?"neutral600":"primary600"},oe),ne&&!K&&s.a.createElement(ee,{as:"span","aria-hidden":!0,paddingLeft:2},ne),K&&s.a.createElement(ee,{as:"span","aria-hidden":!0,paddingLeft:2},s.a.createElement(e.a,null)))};Y.displayName="Link",Y.defaultProps={href:void 0,to:void 0,disabled:!1},Y.propTypes={children:O.a.node.isRequired,disabled:O.a.bool,endIcon:O.a.element,href:function(T){if(!T.disabled&&!T.to&&!T.href)return new Error("href must be defined")},startIcon:O.a.element,to:function(T){if(!T.disabled&&!T.href&&!T.to)return new Error("to must be defined")}}},13:function(n,l){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),t(i)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,l,t){"use strict";t.d(l,"b",function(){return i}),t.d(l,"c",function(){return a}),t.d(l,"a",function(){return d});var i=function(u){return function(f){var p=f.theme,b=f.size;return p.sizes[u][b]}},a=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(f){var p=f.theme,b=f.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(u,`:focus-within {
        border: 1px solid `).concat(b?p.colors.danger600:p.colors.primary600,`;
        box-shadow: `).concat(b?p.colors.danger600:p.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},d=function(u){var f=u.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(f.colors.primary600,`;
    }
  }
`)}},19:function(n,l,t){"use strict";var i=t(20);function a(){}function d(){}d.resetWarningCache=a,n.exports=function(){function u(b,k,A,s,M,O){if(O!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}function f(){return u}u.isRequired=u;var p={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:d,resetWarningCache:a};return p.PropTypes=p,p}},2:function(n,l){n.exports=x},20:function(n,l,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,l){n.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,d=new Array(i);a<i;a++)d[a]=t[a];return d},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,l,t){var i=t(21);n.exports=function(a,d){if(a){if(typeof a=="string")return i(a,d);var u=Object.prototype.toString.call(a).slice(8,-1);return u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set"?Array.from(a):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(a,d):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,l){n.exports=function(t,i){if(t==null)return{};var a,d,u={},f=Object.keys(t);for(d=0;d<f.length;d++)a=f[d],i.indexOf(a)>=0||(u[a]=t[a]);return u},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,l){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,l){n.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var d,u,f=[],p=!0,b=!1;try{for(a=a.call(t);!(p=(d=a.next()).done)&&(f.push(d.value),!i||f.length!==i);p=!0);}catch(k){b=!0,u=k}finally{try{p||a.return==null||a.return()}finally{if(b)throw u}}return f}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,l){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,l){n.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},38:function(n,l){n.exports=P},4:function(n,l,t){var i=t(24);n.exports=function(a,d){if(a==null)return{};var u,f,p=i(a,d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(a);for(f=0;f<b.length;f++)u=b[f],d.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(a,u)&&(p[u]=a[u])}return p},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,l){function t(){return n.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}return i},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,l,t){"use strict";t.r(l),t.d(l,"Box",function(){return B});var i,a=t(3),d=t.n(a),u=t(2),f=t.n(u),p=t(7),b=t(1),k=t.n(b),A=t(0),s=t.n(A),M=function(e){return k.a.createElement("div",e)},O={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},R={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])};M.defaultProps=O,M.propTypes=R;var F={color:!0},B=f.a.div.withConfig({shouldForwardProp:function(e,o){return!F[e]&&o(e)}})(i||(i=d()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,c=e.background;return o.colors[c]},function(e){var o=e.theme,c=e.color;return o.colors[c]},function(e){var o=e.theme,c=e.padding;return Object(p.a)("padding",c,o)},function(e){var o=e.theme,c=e.paddingTop;return Object(p.a)("padding-top",c,o)},function(e){var o=e.theme,c=e.paddingRight;return Object(p.a)("padding-right",c,o)},function(e){var o=e.theme,c=e.paddingBottom;return Object(p.a)("padding-bottom",c,o)},function(e){var o=e.theme,c=e.paddingLeft;return Object(p.a)("padding-left",c,o)},function(e){var o=e.theme,c=e.marginLeft;return Object(p.a)("margin-left",c,o)},function(e){var o=e.theme,c=e.marginRight;return Object(p.a)("margin-right",c,o)},function(e){var o=e.theme,c=e.marginTop;return Object(p.a)("margin-top",c,o)},function(e){var o=e.theme,c=e.marginBottom;return Object(p.a)("margin-bottom",c,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,c=e.hasRadius,$=e.borderRadius;return c?o.borderRadius:$},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,c=e.borderColor,$=e.borderStyle,Q=e.borderWidth;if(c&&!$&&!Q)return"1px solid ".concat(o.colors[c])},function(e){var o=e.theme,c=e.shadow;return o.shadows[c]},function(e){return e.pointerEvents},function(e){var o=e._hover,c=e.theme;return o?o(c):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});B.defaultProps=O,B.propTypes=R},7:function(n,l,t){"use strict";var i=t(10),a=t.n(i),d=t(13),u=t.n(d);l.a=function(f,p,b){var k=p;if(Array.isArray(p)||u()(p)!=="object"||(k=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),k!==void 0){if(Array.isArray(k)){var A=k,s=a()(A,3),M=s[0],O=s[1],R=s[2],F="".concat(f,": ").concat(b.spaces[M],";");return O!==void 0&&(F+="".concat(b.mediaQueries.tablet,`{
          `).concat(f,": ").concat(b.spaces[O],`;
        }`)),R!==void 0&&(F+="".concat(b.mediaQueries.mobile,`{
          `).concat(f,": ").concat(b.spaces[R],`;
        }`)),F}var B=b.spaces[k]||k;return"".concat(f,": ").concat(B,";")}}},8:function(n,l,t){"use strict";t.r(l),t.d(l,"Typography",function(){return B});var i,a=t(3),d=t.n(a),u=t(2),f=t.n(u),p=["alpha","beta","delta","epsilon","omega","pi","sigma"],b=t(1),k=t.n(b),A=t(0),s=t.n(A),M=function(e){return k.a.createElement("div",e)},O={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},R={ellipsis:s.a.bool,fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(p)};M.defaultProps=O,M.propTypes=R;var F={fontSize:!0,fontWeight:!0},B=f.a.span.withConfig({shouldForwardProp:function(e,o){return!F[e]&&o(e)}})(i||(i=d()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,c=e.fontWeight;return o.fontWeights[c]},function(e){var o=e.theme,c=e.fontSize;return o.fontSizes[c]},function(e){var o=e.theme,c=e.lineHeight;return o.lineHeights[c]},function(e){var o=e.theme,c=e.textColor;return o.colors[c||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,c=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[5],`;
        line-height: `).concat(c.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[4],`;
        line-height: `).concat(c.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(c.fontWeights.semiBold,`;
        font-size: `).concat(c.fontSizes[3],`;
        line-height: `).concat(c.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(c.fontSizes[3],`;
        line-height: `).concat(c.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(c.fontSizes[2],`;
        line-height: `).concat(c.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(c.fontSizes[1],`;
        line-height: `).concat(c.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[0],`;
        line-height: `).concat(c.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(c.fontSizes[2],`;
      `)}});B.defaultProps=O,B.propTypes=R},83:function(n,l){n.exports=m}})})},68717:function(V,J,y){(function(r,x){V.exports=x(y(67294))})(this,function(r){return function(x){var P={};function m(n){if(P[n])return P[n].exports;var l=P[n]={i:n,l:!1,exports:{}};return x[n].call(l.exports,l,l.exports,m),l.l=!0,l.exports}return m.m=x,m.c=P,m.d=function(n,l,t){m.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:t})},m.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},m.t=function(n,l){if(1&l&&(n=m(n)),8&l||4&l&&typeof n=="object"&&n&&n.__esModule)return n;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&l&&typeof n!="string")for(var i in n)m.d(t,i,function(a){return n[a]}.bind(null,i));return t},m.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return m.d(l,"a",l),l},m.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},m.p="",m(m.s=5)}({0:function(x,P){x.exports=r},5:function(x,P,m){"use strict";m.r(P);var n=m(0);function l(){return(l=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(t[d]=a[d])}return t}).apply(this,arguments)}P.default=function(t){return n.createElement("svg",l({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),n.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},86726:(V,J,y)=>{"use strict";y.r(J),y.d(J,{default:()=>ue});var r=y(67294),x=y(5493),P=y(11402),m=y(41798),n=y(19408),l=y(68547),t=y(49425),i=y(26851);const a=()=>r.createElement(m.Thead,null,r.createElement(m.Tr,null,r.createElement(m.Th,null,r.createElement(i.VisuallyHidden,null,"INDEX")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"NAME")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"IN MEILISEARCH ?")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"INDEXING ?")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"INDEX NAME")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"DOCUMENTS")),r.createElement(m.Th,null,r.createElement(t.Typography,{variant:"sigma"},"HOOKS")),r.createElement(m.Th,null,r.createElement(i.VisuallyHidden,null,"Actions")))),d=(0,r.memo)(a);var u=y(59522),f=y(67826);const p=({entry:g,deleteCollection:C,addCollection:v,updateCollection:I})=>r.createElement(m.Tr,{key:g.contentType},r.createElement(m.Td,null,r.createElement(u.BaseCheckbox,{"aria-label":`Select ${g.collection}`,onValueChange:()=>{g.indexed?C({contentType:g.contentType}):v({contentType:g.contentType})},value:g.indexed})),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.collection)),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.indexed?"Yes":"No")),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.isIndexing?"Yes":"No")),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.indexUid)),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.numberOfDocuments," / ",g.numberOfEntries)),r.createElement(m.Td,null,r.createElement(t.Typography,{textColor:"neutral800"},g.reloadNeeded)),r.createElement(m.Td,null,r.createElement(f.Flex,null,r.createElement(x.Box,{paddingLeft:1},r.createElement(n.Button,{onClick:()=>I({contentType:g.contentType}),size:"S",variant:"secondary"},"Update"))))),b=(0,r.memo)(p);var k=y(98161),A=y.n(k);function s(){const g=(0,l.useNotification)();return{handleNotification:({type:v="info",message:I="Something occured in Meilisearch",link:S,blockTransition:j=!0})=>{g({type:v,message:{id:"notification.meilisearch.message",defaultMessage:I},link:S,blockTransition:j,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)})}}}const M=s;var O=(g,C,v)=>new Promise((I,S)=>{var j=h=>{try{w(v.next(h))}catch(E){S(E)}},H=h=>{try{w(v.throw(h))}catch(E){S(E)}},w=h=>h.done?I(h.value):Promise.resolve(h.value).then(j,H);w((v=v.apply(g,C)).next())});const R=({indexed:g,listened:C})=>{if(g&&!C||!g&&C)return"Reload needed";if(g&&C)return"Hooked";if(!g&&!C)return"/"};function F(){const[g,C]=(0,r.useState)([]),[v,I]=(0,r.useState)(!0),[S,j]=(0,r.useState)(!1),[H,w]=(0,r.useState)(!1),{handleNotification:h}=M(),E=()=>I(N=>!N),Z=()=>O(this,null,function*(){const{data:N,error:D}=yield(0,l.request)(`/${A()}/content-type/`,{method:"GET"});if(D)h({type:"warning",message:D.message,link:D.link});else{const z=N.contentTypes.map(U=>(U.reloadNeeded=R({indexed:U.indexed,listened:U.listened}),U)),de=z.find(U=>U.reloadNeeded==="Reload needed"),fe=z.find(U=>U.isIndexing===!0);w(!!fe),j(!!de),C(z)}}),q=N=>O(this,[N],function*({contentType:D}){const{error:z}=yield(0,l.request)(`/${A()}/content-type/${D}`,{method:"DELETE"});z?h({type:"warning",message:z.message,link:z.link}):(E(),h({type:"success",message:"Request to delete content-type is successful",blockTransition:!1}))}),L=N=>O(this,[N],function*({contentType:D}){const{error:z}=yield(0,l.request)(`/${A()}/content-type`,{method:"POST",body:{contentType:D}});z?h({type:"warning",message:z.message,link:z.link}):(E(),h({type:"success",message:"Request to add a content-type is successful",blockTransition:!1}))}),W=N=>O(this,[N],function*({contentType:D}){const{error:z}=yield(0,l.request)(`/${A()}/content-type`,{method:"PUT",body:{contentType:D}});z?h({type:"warning",message:z.message,link:z.link}):(E(),h({type:"success",message:"Request to update content-type is successful",blockTransition:!1}))});return(0,r.useEffect)(()=>{Z()},[v]),(0,r.useEffect)(()=>{let N;return H?N=setInterval(()=>{E()},1e3):clearInterval(N),()=>clearInterval(N)},[H]),{collections:g,deleteCollection:q,addCollection:L,updateCollection:W,reloadNeeded:S,refetchCollection:E,handleNotification:h}}const B=F;var e=y(25108),o=(g,C,v)=>new Promise((I,S)=>{var j=h=>{try{w(v.next(h))}catch(E){S(E)}},H=h=>{try{w(v.throw(h))}catch(E){S(E)}},w=h=>h.done?I(h.value):Promise.resolve(h.value).then(j,H);w((v=v.apply(g,C)).next())});const c=()=>{const{collections:g,deleteCollection:C,addCollection:v,updateCollection:I,reloadNeeded:S,refetchCollection:j}=B(),{lockAppWithAutoreload:H,unlockAppWithAutoreload:w}=(0,l.useAutoReloadOverlayBlocker)(),[h,E]=(0,r.useState)(!1),Z=6,q=10,L=()=>o(void 0,null,function*(){try{H(),yield(0,l.request)(`/${A()}/reload`,{method:"GET"},!0),E(!1)}catch(W){e.error(W)}finally{w(),j()}});return(0,r.useEffect)(()=>{h&&L()},[h]),r.createElement(x.Box,{background:"neutral100"},r.createElement(m.Table,{colCount:q,rowCount:Z},r.createElement(d,null),r.createElement(m.Tbody,null,g.map(W=>r.createElement(b,{key:W.collection,entry:W,deleteCollection:C,addCollection:v,updateCollection:I})))),S&&r.createElement(x.Box,{padding:5},r.createElement(n.Button,{onClick:()=>E(!0)},"Reload server")))},$=(0,r.memo)(c);var Q=y(55967),_=(g,C,v)=>new Promise((I,S)=>{var j=h=>{try{w(v.next(h))}catch(E){S(E)}},H=h=>{try{w(v.throw(h))}catch(E){S(E)}},w=h=>h.done?I(h.value):Promise.resolve(h.value).then(j,H);w((v=v.apply(g,C)).next())});function re(){const[g,C]=(0,r.useState)({host:"",apiKey:"",ApiKeyIsFromConfigFile:!0,HostIsFromConfigFile:!0}),[v,I]=(0,r.useState)(!0),[S,j]=(0,r.useState)(""),[H,w]=(0,r.useState)(""),{handleNotification:h}=M(),E=()=>I(L=>!L),Z=()=>_(this,null,function*(){const{error:L}=yield(0,l.request)(`/${A()}/credential`,{method:"POST",body:{apiKey:H,host:S}});L?h({type:"warning",message:L.message,link:L.link}):(E(),h({type:"success",message:"Credentials sucessfully updated!",blockTransition:!1}))}),q=()=>_(this,null,function*(){const{data:L,error:W}=yield(0,l.request)(`/${A()}/credential`,{method:"GET"});W?h({type:"warning",message:W.message,link:W.link}):(C(L),j(L.host),w(L.apiKey))});return(0,r.useEffect)(()=>{q()},[v]),{credentials:g,updateCredentials:Z,setHost:j,setApiKey:w,host:S,apiKey:H}}const ee=null,Y=()=>{const{host:g,apiKey:C,credentials:v,setHost:I,setApiKey:S,updateCredentials:j}=re();return r.createElement(x.Box,null,r.createElement(x.Box,{padding:2},r.createElement(Q.TextInput,{placeholder:"Host",label:"Meilisearch Host",name:"host",hint:"The host on which your Meilisearch is running",value:g,onChange:H=>I(H.target.value),disabled:v.HostIsFromConfigFile})),r.createElement(x.Box,{padding:2},r.createElement(Q.TextInput,{placeholder:"API key",label:"Meilisearch API Key",name:"apiKey",hint:"A valid API key with enough permission to create indexes (or the master key).",onChange:H=>S(H.target.value),value:C,disabled:v.ApiKeyIsFromConfigFile,"aria-label":"Password",type:"password"})),r.createElement(x.Box,{paddingTop:1,paddingLeft:2},r.createElement(t.Typography,{variant:"pi",style:{color:"red"}},"Do not use this API key on your front-end as it has too much rights. Instead, use the public key available using"," ",r.createElement("a",{href:"https://docs.meilisearch.com/reference/api/keys.html#get-keys"},"the key route"),".")),r.createElement(x.Box,{paddingTop:2,paddingLeft:2,paddingRight:2,paddingBottom:2},r.createElement(n.Button,{variant:"secondary",onClick:()=>j(),disabled:v.ApiKeyIsFromConfigFile&&v.HostIsFromConfigFile},"Save")))},T=(0,r.memo)(Y),K=()=>r.createElement(x.Box,{padding:5},r.createElement(T,null)),G=(0,r.memo)(K),oe=()=>r.createElement(x.Box,{padding:8,margin:10,background:"neutral"},r.createElement(P.TabGroup,{label:"Some stuff for the label",id:"tabs"},r.createElement(P.Tabs,null,r.createElement(P.Tab,null,"Collections"),r.createElement(P.Tab,null,"Settings")),r.createElement(P.TabPanels,null,r.createElement(P.TabPanel,null,r.createElement(x.Box,{color:"neutral800",padding:4,background:"neutral0"},r.createElement($,null))),r.createElement(P.TabPanel,null,r.createElement(x.Box,{color:"neutral800",padding:4,background:"neutral0"},r.createElement(G,null)))))),X=(0,r.memo)(oe);var te=y(68717),ne=y.n(te),ae=y(85104),ie=y(78862);const le=()=>r.createElement(x.Box,{background:"neutral100"},r.createElement(ie.BaseHeaderLayout,{navigationAction:r.createElement(ae.Link,{startIcon:r.createElement(ne(),null),to:"/"},"Go back"),title:"Meilisearch",subtitle:"strapi-plugin-meilisearch",as:"h2"})),se=(0,r.memo)(le),ce=()=>r.createElement("div",null,r.createElement(se,null),r.createElement(X,null)),ue=(0,r.memo)(ce)}}]);
