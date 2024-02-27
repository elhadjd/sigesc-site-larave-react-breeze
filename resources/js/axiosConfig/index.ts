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
        return await Api.get(`${local}/loginWithSocial/${type}`)
    }

    const checkLoggedUser = ((data:User)=>{
        return Api.post('checkLoggedUser',{...data})
    })

    const Login = async(local:string,data:any)=>{
        return Api.post(`${local}/authenticate`,{...data})
    }

    const RoutePost = (async(route:string,data:any)=>{
        return await Api.post(route,{...data})
    })

    const RouteGet = (async(route:string)=>{
        return await Api.get(route)
    })

    const RouteDelete = (async(route:string)=>{
        return await Api.get(route)
    })

    return {
        loginWithSocial,
        checkLoggedUser,
        Login,
        RoutePost,
        RouteGet,
        RouteDelete
    }
}
