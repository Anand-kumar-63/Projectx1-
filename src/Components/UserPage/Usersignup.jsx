import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-96">


        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
            //  register your input into the hook by invoking the "register" function 
            //  include validation with required or other standard HTML validation rules 
              {...register("username", { required: "Username is required",
                minLength:{ value:5 , message:"first name should be minimum of 5 character"},
               maxLength:{value:20 , message:"first name should not exceed 20 characters"}
              })}
              className="w-full p-2 border rounded-xl outline-none mt-1 placeholder-gray-500"
              placeholder="Enter your username"
            />
            {/* errors will return when field validation fails */}
            {errors.username && <p className="text-blue-500 text-sm">{errors.username.message}</p>}
          </div>

          
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
              })}
              className="w-full p-2 border outline-none rounded-xl mt-1  placeholder-gray-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-blue-500 text-sm">{errors.email.message}</p>}
          </div>

          
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                maxLength:{value:30 , message :"password should not exceed 30 characters"}
              })}
              type="password"
              className="w-full p-2 border outline-none rounded-xl mt-1  placeholder-gray-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-blue-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="ml-[65px] w-[200px] bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700">
            Sign Up
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default Signup;
