import{_ as j}from"./index-f1a11641.js";import{u as G,d as H,_ as J}from"./useTable-c7703c10.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-8c03ffd8.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-c7e1fdf1.js";import{d as I,q as M,v as W,r,o as s,f as c,w as l,x as a,c as y,F as C,h as S,a as o,z as u,t as A,V as X,e as E,B as Z,k as ee}from"./index-94373d68.js";import{_ as le,g as ae,d as oe}from"./dialog.vue_vue_type_script_setup_true_lang-66fce8ba.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import"./useDialog-8130540a.js";const te=E("span",{class:"search-btn__left"},"查询",-1),se=E("span",{class:"search-btn__left"},"重置",-1),re=I({__name:"index",props:{value:null,configure:null},emits:["search","update:value"],setup(D,{emit:x}){const b=D,f={label:"name",value:"id"};let n=M({});const U=()=>{x("search",n.value)},P=()=>{n.value={},x("search",n.value)};return W(()=>b.value,()=>{b.value&&(n.value={...n.value,...b.value})},{deep:!0,immediate:!0}),(k,w)=>{const $=r("el-checkbox"),z=r("el-checkbox-group"),d=r("el-form-item"),p=r("el-col"),g=r("el-radio"),F=r("el-radio-group"),B=r("el-date-picker"),R=Q,T=r("el-option"),v=r("el-select"),h=O,N=r("el-input"),q=r("ele-search"),V=r("el-icon"),_=r("el-button"),Y=r("ele-refresh"),K=r("el-row"),L=r("el-form");return s(),c(L,{model:o(n),"label-width":"90px"},{default:l(()=>[a(K,{gutter:20},{default:l(()=>[(s(!0),y(C,null,S(D.configure,e=>(s(),y(C,null,[e.type==="checkBox"?(s(),c(p,{key:0,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(z,{modelValue:o(n)[e.prop],"onUpdate:modelValue":t=>o(n)[e.prop]=t},{default:l(()=>[(s(!0),y(C,null,S(e.options,t=>{var i;return s(),c($,{label:t[((i=e==null?void 0:e.optionsConfig)==null?void 0:i.value)||f.value],border:""},{default:l(()=>{var m;return[u(A(t[((m=e==null?void 0:e.optionsConfig)==null?void 0:m.label)||f.label]),1)]}),_:2},1032,["label"])}),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024)):e.type==="radio"?(s(),c(p,{key:1,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(F,{modelValue:o(n)[e.prop],"onUpdate:modelValue":t=>o(n)[e.prop]=t},{default:l(()=>[(s(!0),y(C,null,S(e.options,t=>{var i;return s(),c(g,{label:t[((i=e.optionsConfig)==null?void 0:i.value)||f.value],border:""},{default:l(()=>{var m;return[u(A(t[((m=e.optionsConfig)==null?void 0:m.label)||f.label]),1)]}),_:2},1032,["label"])}),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024)):e.type==="date"?(s(),c(p,{key:2,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(B,{modelValue:o(n)[e.prop],"onUpdate:modelValue":t=>o(n)[e.prop]=t,placeholder:e.placeholder,"value-format":"YYYY-MM-DD"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"])]),_:2},1024)):e.type==="dateRange"?(s(),c(p,{key:3,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(R,{endDate:o(n)[e.endProp],"onUpdate:endDate":t=>o(n)[e.endProp]=t,startDate:o(n)[e.startProp],"onUpdate:startDate":t=>o(n)[e.startProp]=t,type:"daterange"},null,8,["endDate","onUpdate:endDate","startDate","onUpdate:startDate"])]),_:2},1032,["label"])]),_:2},1024)):e.type==="select"?(s(),c(p,{key:4,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(v,{modelValue:o(n)[e.prop],"onUpdate:modelValue":t=>o(n)[e.prop]=t,clearable:"",placeholder:e.placeholder,onChange:()=>{e.change&&e.change(o(n))}},{default:l(()=>[(s(!0),y(C,null,S(e.options,t=>{var i,m;return s(),c(T,{label:t[((i=e.optionsConfig)==null?void 0:i.label)||f.label],value:t[((m=e.optionsConfig)==null?void 0:m.value)||f.value]},null,8,["label","value"])}),256))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onChange"])]),_:2},1032,["label"])]),_:2},1024)):e.type==="cascader"?(s(),c(p,{key:5,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(h,{value:o(n)[e.prop],"onUpdate:value":t=>o(n)[e.prop]=t,options:e.options,placeholder:e.placeholder},null,8,["value","onUpdate:value","options","placeholder"])]),_:2},1032,["label"])]),_:2},1024)):(s(),c(p,{key:6,lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{label:e.label},{default:l(()=>[a(N,{modelValue:o(n)[e.prop],"onUpdate:modelValue":t=>o(n)[e.prop]=t,clearable:"",placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"])]),_:2},1024))],64))),256)),X(k.$slots,"default"),a(p,{lg:8,md:12,sm:24,xl:6},{default:l(()=>[a(d,{"label-width":"0"},{default:l(()=>[a(_,{type:"primary",onClick:U},{default:l(()=>[a(V,null,{default:l(()=>[a(q)]),_:1}),te]),_:1}),a(_,{onClick:P},{default:l(()=>[a(V,null,{default:l(()=>[a(Y)]),_:1}),se]),_:1})]),_:1})]),_:1})]),_:3})]),_:3},8,["model"])}}}),ce=I({__name:"index",setup(D){const x=[{label:"搜索",prop:"keyword",placeholder:"请输入配置名称/配置key/配置值"},{label:"类型",prop:"isSystem",type:"select",placeholder:"请选择类型",options:[{name:"系统类型",id:1},{name:"其他类型",id:0}]},{label:"状态",prop:"status",type:"select",placeholder:"请选择状态",options:[{name:"启用",id:1},{name:"禁用",id:0}]}],b=M(),f=[{prop:"configName",label:"配置名称"},{prop:"configKey",label:"配置key"},{prop:"configValue",label:"配置值"},{prop:"isSystem",label:"配置类型",isCustom:!0},{prop:"remark",label:"备注"},{prop:"status",label:"状态",isCustom:!0},{prop:"createTime",label:"创建时间",isSort:!0,width:180},{prop:"operation",label:"操作",isCustom:!0,fixed:"right",width:120}],n=Z({request:ae}),{tableData:U,search:P,pagination:k,getTableData:w,changePage:$,changeSize:z}=G(n);function d(g){H({id:g.id,request:oe,callback:()=>{w()}})}function p(g={}){b.value.openDialog(g)}return(g,F)=>{const B=re,R=r("ele-circle-plus"),T=r("el-icon"),v=r("el-button"),h=r("el-tag"),N=J,q=j,V=r("el-card");return s(),y("div",null,[a(V,{shadow:"never"},{default:l(()=>[a(B,{configure:x,onSearch:o(P)},null,8,["onSearch"]),a(v,{type:"primary",onClick:p,class:"mb10"},{default:l(()=>[a(T,{class:"mr5"},{default:l(()=>[a(R)]),_:1}),u(" 新 增 ")]),_:1}),a(N,{columns:f,data:o(U)},{status:l(({row:_})=>[_.status?(s(),c(h,{key:0,type:"success","disable-transitions":""},{default:l(()=>[u("启用")]),_:1})):(s(),c(h,{key:1,type:"danger","disable-transitions":""},{default:l(()=>[u("禁用")]),_:1}))]),isSystem:l(({row:_})=>[_.isSystem?(s(),c(h,{key:0,"disable-transitions":""},{default:l(()=>[u("系统类型")]),_:1})):(s(),c(h,{key:1,type:"info","disable-transitions":""},{default:l(()=>[u("其他类型")]),_:1}))]),operation:l(({row:_})=>[a(v,{link:"",type:"primary",onClick:Y=>p(_)},{default:l(()=>[u(" 修改 ")]),_:2},1032,["onClick"]),_.isSystem?ee("",!0):(s(),c(v,{key:0,onClick:Y=>d(_),link:"",type:"danger"},{default:l(()=>[u(" 删除 ")]),_:2},1032,["onClick"]))]),_:1},8,["data"]),a(q,{total:o(k).total,currentPage:o(k).pageIndex,pageSize:o(k).pageSize,onChangePage:o($),onChangeSize:o(z)},null,8,["total","currentPage","pageSize","onChangePage","onChangeSize"])]),_:1}),a(le,{ref_key:"dialogRef",ref:b,onRefresh:o(w)},null,8,["onRefresh"])])}}});const ge=ne(ce,[["__scopeId","data-v-f81f07ef"]]);export{ge as default};