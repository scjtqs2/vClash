import{r as u,R as l,P as s,c as g,j as c}from"./index-3b7e2f10.js";function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}function m(t,n){if(t==null)return{};var e=v(t,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(e[r]=t[r])}return e}function v(t,n){if(t==null)return{};var e={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(e[o]=t[o]);return e}var p=u.forwardRef(function(t,n){var e=t.color,r=e===void 0?"currentColor":e,o=t.size,i=o===void 0?24:o,f=m(t,["color","size"]);return l.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),l.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});p.propTypes={color:s.string,size:s.oneOfType([s.string,s.number])};p.displayName="Zap";const y=p,h="_animate_1w0e8_1",w={animate:h,"zap-pulse":"_zap-pulse_1w0e8_1"};function j(t){const n=t.size||24,e=g({[w.animate]:t.animate});return c.jsx("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}export{j as Z,y as a};
