import {z} from "zod";

const regixValues = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const usernameValidtion = 
    z.string()
    .min(3 , "Username must me three character")
    .max(20 , "Username must me less than 20 character")
    .regex( regixValues , "Username not contain specail Characters")
    
export const signUpSchema = z.object({
    username : usernameValidtion,
    email : z.string().email({message:"Invalid Email"}),
    password : z.string().min(6 , "Password must me greater than 6 character")
})