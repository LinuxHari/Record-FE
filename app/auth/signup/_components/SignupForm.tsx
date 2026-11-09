"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { passwordSchema, usernameSchema, emailSchema } from '../../_schema';
import { FormInput } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const signupSchema = z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, { error: 'Confirm password is required' }),
}) .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>

const SignupForm = () => {
    const form = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = (data: SignupFormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full" noValidate>
            <FormInput name="username" label="Username" placeholder='Enter your username' control={form.control} id='username' required/>
            <FormInput name="email" label="Email" placeholder='Enter your email' control={form.control} id='email' required type='email'/>
            <FormInput name="password" label="Password" placeholder='Enter your password' control={form.control} id='password' required type='password'/>
            <FormInput name="confirmPassword" label="Confirm Password" placeholder='Confirm your password' control={form.control} id='confirmPassword' required type='password'/>
            <Button type="submit" className="button bg-primary font-semibold">Sign Up</Button>
        </form>
    )
}

export default SignupForm