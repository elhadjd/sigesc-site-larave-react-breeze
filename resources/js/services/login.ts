import React, { useEffect, useState } from 'react'
import {firebase} from './firebase'
import {useFormState} from '../contexts/stateForm'
import { routeApi } from '../axiosConfig'
import { useLoggedUser } from '../contexts/loggedUser'
import { toast } from "react-toastify";
import { router } from '@inertiajs/react'
const {FacebookAuthProvider,
GithubAuthProvider,
GoogleAuthProvider,
auth,
signInWithPopup} = firebase()
interface dataType{
  email: string,
  password: string,
  weekConnect: boolean
}
interface StateForm{
    register: boolean,
}
export const loginServices = (local: string) => {
    const [formData ,setFormData] = useState<dataType>({
        email: '',
        password: '',
        weekConnect: false
    })
    const {loginWithSocial,Login} = routeApi()
    const {setIsFormSubmitted} = useFormState()
    const [stateForm, setStateForm] = useState<StateForm>({
        register: true
    })
    const {user,setUser} = useLoggedUser()
    const handlerChangeForm = ((state: boolean)=>{
        stateForm.register = state
        setStateForm({...stateForm})
    })

    const {checkLoggedUser} = routeApi()
    useEffect(()=>{
        (async()=>{
            let user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                setIsFormSubmitted(true)
                await checkLoggedUser(user).then((response) => {
                if (response.data.stateLogin) {
                    return router.get('/')
                }
                }).catch((err) => {
                    toast.error(err.message,{position: 'top-right'})
                    console.log(err);
                }).finally(()=>{
                    setIsFormSubmitted(false)
                });
            }
        })()
    },[])

    const handleCHangeInput = ((event)=>{
        formData[event.target.id] = event.target.id == 'weekConnect' ? event.target.checked : event.target.value
        setFormData({...formData})
    })

    const handelSubmitForm = (async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault(),
        setStateForm({...stateForm})
        setIsFormSubmitted(true)
        await Login(formData).then((result) => {
            if(result.data.user) localStorage.setItem('user',JSON.stringify(result.data.user))
            toast[result.data.type](result.data.message,{position: 'top-right'})
            return router.get('/')
        }).catch((err) => {
            console.log(err);
            toast.error(err.message,{position: 'top-right'})
            if (err.response.data.type) return toast[err.response.data.type](err.response.data.message,{position: 'top-right'})
        }).finally(()=>{
            setIsFormSubmitted(false)
        });
    })

    const authenticateWithSocial = (async(type: string)=>{
        await loginWithSocial(local,type)
        .then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    })


    // const handlerLoginWithGoogle = async()=>{
    //     const provider = new GoogleAuthProvider()
    //     await signInWithPopup(auth,provider)
    //     .then((response) => {
    //         setUser(response.user);
    //         return LoginWithSocial()
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    // const handlerLoginWithFacebook = async()=>{
    //     const provider = new FacebookAuthProvider()
    //     await signInWithPopup(auth,provider)
    //     .then((response) => {
    //         setUser(response.user);
    //         return LoginWithSocial()
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    // const handlerLoginWithGitHub = async()=>{
    //     const provider = new GithubAuthProvider()
    //     await signInWithPopup(auth,provider)
    //     .then((response) => {
    //         setUser({...response.user});
    //         return LoginWithSocial()
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    // async function LoginWithSocial(){
    //     setIsFormSubmitted(true)
    //     await loginWithSocial(user).then((result) => {
    //         localStorage.setItem('user',JSON.stringify(user))
    //         toast.success(result.data.message,{position: 'top-right'})
    //         return router.get('/')
    //     }).catch((err) => {
    //         toast.error(err.message,{position: 'top-right'})
    //         console.log(err);
    //         if (err.response.data.message) return toast.error(err.response.data.message,{position: 'top-right'})
    //         LogOut()
    //     }).finally(()=>{
    //         setIsFormSubmitted(false)
    //     });
    // }

    async function LogOut() {
        return await auth.signOut().then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);

        })
    }

    return {
        formData,
        stateForm,
        handelSubmitForm,
        handleCHangeInput,
        handlerChangeForm,
        authenticateWithSocial
        // handlerLoginWithGoogle,
        // handlerLoginWithFacebook,
        // handlerLoginWithGitHub,
    }
}
