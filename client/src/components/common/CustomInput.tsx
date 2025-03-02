interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
const CustomInput: React.FC<CustomInputProps> = ({label, ...props}) => {
  return (
    <div className="w-full">
      {label  && <label className="">{label}</label>}
      <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"    {...props} />
    </div>
  )
}

export default CustomInput