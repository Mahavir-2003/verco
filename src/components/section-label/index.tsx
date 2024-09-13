import React from 'react'

type SectionProps = {
  label: string
  message: string
  darkText?: boolean
}

const Section = ({ label, message , darkText = false }: SectionProps) => {
  return (
    <div>
      <p className={`text-lg font-medium ${darkText ? 'text-black' : 'text-white'}`}>{label}</p>
      <p className={`text-sm font-light ${darkText ? 'text-black/80' : 'text-white/80'}`}>{message}</p>
    </div>
  )
}

export default Section
