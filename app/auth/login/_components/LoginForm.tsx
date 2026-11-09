"use client"

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { usernameSchema, emailSchema } from '../../_schema';

const loginSchema = z.object({
    user: z.string({ error: 'Username or email is required' }).min(3, { error: 'Username or email is not valid' }),
    password: z.string().min(1, { error: 'Password is required' }).max(255, { error: 'Password cannot exceed 255 characters' }),
}).superRefine((data, ctx) => {
    if (!data.user || (!emailSchema.safeParse(data.user).success && !usernameSchema.safeParse(data.user).success)) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid username or email',
        });
    }
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            user: '',
            password: '',
        },
    })

    const onSubmit = (data: LoginFormData) => {
        console.log(data)
    }

    return  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full" noValidate>
                <FormInput name="user" label="Username or Email" placeholder='Enter your username or email' control={form.control} id='user' required/>
                <FormInput name="password" label="Password" placeholder='Enter your password' control={form.control} id='password' required type='password'/>
                <Button type="submit" className="button bg-primary font-semibold">Login</Button>
            </form>
}

export default LoginForm