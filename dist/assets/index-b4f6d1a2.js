import{_ as w}from"./logo-9ae345ed.js";import{d as v,B as u,P as h,Q as p,c as V,e as d,x as s,w as t,a as e,r as n,o as y,S as k,U as S,z as i,p as z,b as B,y as C,m as I}from"./index-94373d68.js";import{m as N}from"./md5-1224e620.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const q=a=>(z("data-v-7ba9849c"),a=a(),B(),a),F={class:"container"},R={class:"form"},E=q(()=>d("div",{class:"sys-name mb30 flex-center"},[d("img",{class:"logo-img mr5",src:w,alt:""}),i("vue+ts")],-1)),H=v({__name:"index",setup(a){const _=C(),o=u({username:"admin",password:"123456"}),f=u({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),g=()=>{I().login({username:o.username,password:N(o.password)}).then(async()=>{p.start(),await _.push("/")})};return h(()=>{p.done()}),(L,r)=>{const m=n("el-input"),c=n("el-form-item"),x=n("el-button"),b=n("el-form");return y(),V("div",F,[d("div",R,[E,s(b,{ref:"ruleFormRef",model:e(o),rules:e(f)},{default:t(()=>[s(c,{class:"mb25",prop:"username"},{default:t(()=>[s(m,{"prefix-icon":e(k),size:"large",clearable:"",modelValue:e(o).username,"onUpdate:modelValue":r[0]||(r[0]=l=>e(o).username=l),placeholder:"请输入用户名"},null,8,["prefix-icon","modelValue"])]),_:1}),s(c,{class:"mb25",prop:"password"},{default:t(()=>[s(m,{"prefix-icon":e(S),size:"large","show-password":"",clearable:"",modelValue:e(o).password,"onUpdate:modelValue":r[1]||(r[1]=l=>e(o).password=l),placeholder:"请输入密码"},null,8,["prefix-icon","modelValue"])]),_:1}),s(x,{size:"large",type:"primary",onClick:g},{default:t(()=>[i("登录")]),_:1})]),_:1},8,["model","rules"])])])}}});const j=U(H,[["__scopeId","data-v-7ba9849c"]]);export{j as default};
