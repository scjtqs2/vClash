import{r as c,j as e}from"./index-3b7e2f10.js";const f="_toggle_o4ww2_1",_="_input_o4ww2_12",x="_track_o4ww2_16",a={toggle:f,input:_,track:x};function m({id:g,checked:t,disabled:o,onChange:n}){const[p,u]=c.useState(!!t),r=c.useRef(!!t);c.useEffect(()=>{r.current!==t&&u(!!t),r.current=!!t},[t]);const l=c.useCallback(s=>{o||(u(s),n&&n(s))},[o,n]);return e.jsxs("label",{className:a.toggle,children:[e.jsx("input",{className:a.input,id:g,type:"checkbox",onChange:s=>l(s.target.checked),checked:p,disabled:o}),e.jsx("span",{className:a.track})]})}export{m as T};
