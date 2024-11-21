import { ReactNode } from "react";


interface Props {
    heading: string;
    text: string;
    icon: ReactNode
}

const Counter = ({heading,text,icon}:Props) => {
  return (
    <div className="p-2 rounded-md flex flex-col items-center justify-between shadow-md shadow-slate-400 m-4 text-center">
      {icon}
      <h3 className="font-semibold text-2xl my-5">{heading}</h3>
      <p className="text-lg text-slate-600">{text}</p>
    </div>
  )
}

export default Counter
