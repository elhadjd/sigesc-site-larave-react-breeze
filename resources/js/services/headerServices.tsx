import React, { useState, useEffect} from "react"
import { router } from '@inertiajs/react'

import {AiOutlineRight,AiOutlineArrowRight} from 'react-icons/ai'
import { useFormState } from "../contexts/stateForm"
import { useLoggedUser } from "../contexts/loggedUser"
import { toast } from "react-toastify"
import axios from "axios"


export const HeaderServices = (()=>{
  const {setIsFormSubmitted,isFormSubmitted} = useFormState()
  const {setUser,user} = useLoggedUser()
    const [icons,setIcons] = useState([
        <AiOutlineRight/>,
        <AiOutlineArrowRight/>
      ])
      const [icon,setIcon] = useState(<AiOutlineRight/>)
      const changeIcons = ((position:number)=>{
        return setIcon(icons[position])
      })
      useEffect(()=>{
        (async()=>{
          changeIcons(0)
        })()
      },[])

      const Login = (()=>{
        router.get('/auth')
      })

      const navigates = ((route: string) : void =>{
        setIsFormSubmitted(false)
        return router.get(route)
      })

      return {icon,Login,changeIcons,navigates}
})
