import React from 'react'

type SectionProps = {
  label: string
  message: string
}

const Section = ({ label, message }: SectionProps) => {
  return (
    <div >
      <p className="text-lg font-medium text-white">{label}</p>
      <p className="text-sm font-light text-white/80">{message}</p>
    </div>
  )
}

export default Section
