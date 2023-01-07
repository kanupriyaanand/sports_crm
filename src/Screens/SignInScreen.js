import React from 'react'
import { useForm } from 'react-hook-form';

const SignInScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
  return (
    <div>



      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <input type="text" placeholder="Username" {...register("Username", {})} />
        <input type="undefined" placeholder="Password" {...register} />
        <input type="undefined" placeholder="Semester" {...register} />
        <input type="undefined" placeholder="Date of Birth" {...register} />
        <input type="text" placeholder="Department" {...register("Department", {})} />
        <input type="undefined" placeholder="USN" {...register} />
        <input type="undefined" placeholder="Counselor email" {...register} />
  
        <input type="submit" />
      </form>
  
   </div>
  )
}

export default SignInScreen
