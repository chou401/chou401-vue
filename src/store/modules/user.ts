import { defineStore } from "pinia";
import { store } from "@/store";
import {LoginResult,LoginParamsType} from "@/api/types/userTypes";
import {loginApi,logoutApi,getLoginUserInfoApi} from '@/api/user'
import {ElMessage} from "element-plus";
import {setToken,removeToken} from "@/utils/auth";
import {computeDate} from "@/utils";
import { router } from "@/router";
import {LoginUserInfoResult} from "@/api/types/userTypes";

interface userType {
  userinfo:LoginUserInfoResult,
  menuList:Array<RouteConfigsTable>
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): userType => ({
    userinfo:{
      deptId:null,
      deptName:null,
      nickname:'',
      roleCodes:[],
      roleIds:[],
      roleNames:[],
      userId:'',
      username:''
    },
    menuList:[]
  }),
  getters:{
    /** 获取本地用户信息*/
    getUserInfo():LoginUserInfoResult{
      const userinfo=<string>localStorage.getItem('userinfo');
      return JSON.parse(userinfo)||this.userinfo;
    }
  },
  actions: {
    /**
     * @description:退出登录
     * */
    async login(data:LoginParamsType){
      return new Promise((resolve, reject)=>{
        loginApi(data).then((res)=>{
          if(res){
            setToken({
              token:res.token,
              expires:computeDate(1,2)
            });
            this.getLoginUserInfo().then(()=>{
              resolve(res);
            });
          }
        })
      })
    },
    /**
     * @description:获取登录用户信息
     * */
    async getLoginUserInfo(){
      return new Promise((resolve, reject)=>{
        getLoginUserInfoApi().then((res)=>{
          this.userinfo=res;
          localStorage.setItem('userinfo',JSON.stringify(res));
          ElMessage.success('登录成功');
          resolve(res);
        })
      })
    },

    /**
     * @description:退出登录
     * */
    async logout(){
      logoutApi().then(()=>{
        removeToken();
        localStorage.removeItem('userinfo');
        this.$reset();
        router.push("/login");
      })
    },

    /**
     * @description:设置菜单路由
     * */
    setMenu(data:Array<RouteConfigsTable>){
      this.menuList=data;
    },
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}