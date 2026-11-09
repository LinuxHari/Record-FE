
import Link from "next/link"

import AuthFormHeader from '../_components/AuthFormHeader'
import SignupForm from './_components/SignupForm'

const Signup = () => {

    return (
        <>
            <AuthFormHeader title="Signup" subtitle="Create a new account" />
            <SignupForm />
            <p className="text-center mt-2 text-sm">Already have an account? <Link className="link" href="/auth/login">Login</Link></p>
        </>
    )
}

export default Signup