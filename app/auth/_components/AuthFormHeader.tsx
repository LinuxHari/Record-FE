const AuthFromHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    )
}

export default AuthFromHeader