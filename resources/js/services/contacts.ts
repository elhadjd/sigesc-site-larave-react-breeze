import React, { useEffect, useState } from "react";
interface dataType {
  surname: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  newsletter:boolean,
  account:boolean
}
import axios from "axios";
import { toast } from "react-toastify";
import { useFormState } from "../contexts/stateForm";
import { routeApi } from "@/axiosConfig";
import { useForm } from "@inertiajs/react";
import { User } from "@/types";
export const contactsServices = () => {
  const [buttonSubmitDisable,setButtonSubmitDisable] = useState<boolean>(false)
  const {data, setData, post,hasErrors,wasSuccessful, processing,errors} = useForm<dataType>({
    surname: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    newsletter:false,
    account: false
  });

  const handelSubmitForm = (event: React.FormEvent<HTMLElement>) => {
    if(buttonSubmitDisable) return
    event.preventDefault();
    if(buttonSubmitDisable) return toast.info('Formulario enviado',{position: 'top-right'})
    post("/en/contact/sendMessage")
  };
  return { setData,data,errors,wasSuccessful,hasErrors, handelSubmitForm,processing };
};
