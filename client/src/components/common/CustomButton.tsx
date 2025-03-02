interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, icon, className, ...props }) => {
  return (
      <button
        {...props}
        className={`${className}`}>
        {icon}
        {label}
      </button> 
  )
}

export default CustomButton