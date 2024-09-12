import React from 'react'

type Props = {
  title: string
  value: number
  icon: JSX.Element
  sales?: boolean
}

const DashboardCard = ({ icon, title, value, sales }: Props) => {
  return (
    <div className=" max-w-fit inline-flex rounded-lg flex-col gap-5  border-[1px] border-white/20 bg-[#181818] pl-6 pr-28 pt-6 pb-8 ">
      <div className="flex gap-3 text-white min-w-56">
        {icon}
        <h2 className="font-normal tracking-wide text-xl">{title}</h2>
      </div>
      <p className="font-semibold text-6xl">
        {sales && '$'}
        {value}
      </p>
    </div>
  )
}

export default DashboardCard