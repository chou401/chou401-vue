import{d as _,B as l,D as p,r as d,o as z,c as P,x as S,a as o}from"./index-94373d68.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const f={class:"pagination-box"},x=_({__name:"index",props:{currentPage:null,pageSize:{default:10},total:null},emits:["changePage","changeSize","update:pageSize","update:currentPage"],setup(c,{emit:n}){const r=c;let a=l({currentPage:p({get:()=>r.currentPage,set:e=>{n("update:currentPage",e)}}),pageSize:p({get:()=>r.pageSize,set:e=>{n("update:pageSize",e)}})});const s=e=>{a.currentPage=1,a.pageSize=e,n("changeSize",e)},i=e=>{a.currentPage=e,n("changePage",e)};return(e,t)=>{const u=d("el-pagination");return z(),P("div",f,[S(u,{"current-page":o(a).currentPage,"onUpdate:currentPage":t[0]||(t[0]=g=>o(a).currentPage=g),"page-size":o(a).pageSize,"onUpdate:pageSize":t[1]||(t[1]=g=>o(a).pageSize=g),"page-sizes":[10,20,50,100],background:"","hide-on-single-page":"",layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:s,onCurrentChange:i},null,8,["current-page","page-size","total"])])}}});const C=m(x,[["__scopeId","data-v-ef63512c"]]);export{C as _};