import React, { useState } from "react";
interface dataType {
  surname: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}
import axios from "axios";
import { toast } from "react-toastify";
import { useFormState } from "../contexts/stateForm";
export const contactsServices = () => {
  const {setIsFormSubmitted} = useFormState()
  const [buttonSubmitDisable,setButtonSubmitDisable] = useState<boolean>(false)
  const [formData, setFormData] = useState<dataType>({
    surname: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleCHangeInput = (event: {
    target: { id: string; value: string };
  }) => {
    formData[event.target.id] = event.target.value;
    setFormData({ ...formData });
    setButtonSubmitDisable(false)
  };

  const handelSubmitForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if(buttonSubmitDisable) return toast.info('Formulario enviado',{position: 'top-right'})
    setIsFormSubmitted(true)
    axios.post("https://sigesc-bacend.onrender.com/contact", { ...formData })
      .then((response) => {
        toast[response.data.type](response.data.message,{position: "top-right"})
        if (response.status === 200) {
          setButtonSubmitDisable(true)
        }
      }).catch((err) => {
        toast.error(err.message,{position: "top-right"})
        console.log(err);
      }).finally(()=>{
        setIsFormSubmitted(false)
      });
  };
  return { formData, handleCHangeInput, handelSubmitForm };
};
