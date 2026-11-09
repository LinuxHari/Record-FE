import Link from "next/link"

import AuthFormHeader from '../_components/AuthFormHeader'
import LoginForm from './_components/LoginForm'

const Login = () => {

    return (
        <>
            <AuthFormHeader title="Login" subtitle="Welcome back! Please login to your account" />
            <LoginForm />
            <p className="text-center mt-2 text-sm">Don't have an account? <Link className="link" href="/auth/signup">Signup</Link></p>
            <Link className="link text-center mx-auto mt-2 block" href="/auth/forgot-password">Forgot password?</Link>

        </>
    )
}

export default Login