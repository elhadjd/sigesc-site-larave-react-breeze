import React from 'react'

export const Buttons = ({type,style,text,changeIcons=null,icon,action}) => {
  return <button onClick={action} type={type} onMouseEnter={()=>changeIcons(1)} onMouseOut={()=>changeIcons(0)}
  className={style}>{text}{icon}</button>
}
