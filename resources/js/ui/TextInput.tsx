import { forwardRef, useEffect, useRef } from 'react';

export default (function TextInput({ type , className, isFocused,ref,id,value,name }:
    {type: string,className: string,isFocused: boolean,ref:string,id:string,name:string,value:string}) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
