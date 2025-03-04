import CustomButton from "../../components/common/CustomButton";

import CustomInput from "../../components/common/CustomInput";

import { AuthImg, GoogleImg } from "../../constants";

interface LoginProps {
  toggleAuth: () => void;
}
const Login:React.FC<LoginProps> = ({toggleAuth}) => {
  return (
    <div className="h-screen flex items-center justify-center bg-secondary p-6">
      <div className="relative flex flex-col md:flex-row bg-white/30  rounded-3xl overflow-hidden max-w-5xl w-full">

        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 text-dark-100 p-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Login to your account</h1>

          <p className="text-gray-500 text-sm mt-2">Upgrade to premium services</p>

          <div className="w-full mt-6 flex-col flex items-center   aligjustify-center">
            <CustomInput label="Email" type="email" placeholder="example@gmail.com" className="inputs mt-4" />
            <CustomInput label="Password" type="password" placeholder="******" className="inputs mt-4" />
            <CustomButton
              label="Sign In"
              className="my-2 mt-4 rounded-xl w-[95%] bg-green-700 text-white py-2.5 cursor-pointer font-serif font-normal text-[18px]"
            />

            <p className="text-gray-500 text-md text-center font-serif font-light italic ">
              Dont't have an account? <span className="text-green-800 cursor-pointer hover:underline font-semibold"
                onClick={toggleAuth}>Sign Up</span>
            </p>
            <div className="w-[90%] flex justify-center items-center gap-8 mt-2">
              <hr className="w-full" />
              <p className="font-serif text-md font-semibold text-acient capitalize">or</p>
              <hr className="w-full" />
            </div>
          </div>



          <CustomButton
            label="Continue with google"
            icon={
              <img src={GoogleImg}
                className="w-6 h-6" />
            }
            className="flex justify-center items-center gap-10 mt-6 bg-gray-100/50 w-[95%] py-2 rounded-lg font-serif cursor-pointer"
          />
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex w-1/2 relative px-3 py-3 flex-col">
          <img src={AuthImg} className="w-full h-full object-cover rounded-xl" alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Login;
