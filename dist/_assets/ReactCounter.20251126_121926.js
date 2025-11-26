import{r as p}from"./index.Cd_vQiNd.js";var a={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function h(){if(l)return i;l=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function x(n,e,t){var o=null;if(t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:u,type:n,key:o,ref:e!==void 0?e:null,props:t}}return i.Fragment=c,i.jsx=x,i.jsxs=x,i}var d;function m(){return d||(d=1,a.exports=h()),a.exports}var s=m();function v({initial:u=0,step:c=1}){const[x,n]=p.useState(u),e=()=>n(r=>r+c),t=()=>n(r=>r-c),o=()=>n(u);return s.jsxs("div",{className:"p-4 bg-white shadow rounded text-center border border-slate-500",children:[s.jsx("div",{className:"text-base mb-2 font-bold",children:"ReactCounter"}),s.jsx("div",{className:"text-2xl font-bold mb-2",children:x}),s.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[s.jsx("button",{className:"p-2 bg-sky-800 hover:bg-sky-700 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center",onClick:t,children:"−"}),s.jsx("button",{className:"p-2 bg-red-600 hover:bg-red-500 text-white cursor-pointer flex h-[30px] items-center justify-center",onClick:o,children:"reset"}),s.jsx("button",{className:"p-2 bg-sky-800 hover:bg-sky-700 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center",onClick:e,children:"+"})]})]})}export{v as default};
