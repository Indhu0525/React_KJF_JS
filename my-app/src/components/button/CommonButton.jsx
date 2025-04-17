import React from 'react'

export const CommonButton = ({ label, onClick, className = "", type = "button" }) => {
  return (
    <div>
    <button type={type}  onClick={onClick} className={`bg-[#F1D954] ${className}`}>  {label}
    </button>
  </div>
  )
}
