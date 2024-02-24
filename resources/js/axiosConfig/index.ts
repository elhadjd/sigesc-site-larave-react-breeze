import axios from "axios";
import { Auth, User } from "firebase/auth";

export const Api = axios.create({
    baseURL: `/`
    // headers: {
    //     'Authorization': `Bearer `
    // }
});

export const routeApi = ()=>{
    const loginWithSocial = async(local:string,type: string)=>{
        return await Api.post(`${local}/loginWithSocial`,{type: type})
    }
    const checkLoggedUser = ((data:User)=>{
        return Api.post('checkLoggedUser',{...data})
    })

    const Login = async(data:any)=>{
        return Api.post('authenticate',{...data})
    }
    return {loginWithSocial,checkLoggedUser,Login}
}
