const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
            <div className="max-w-md w-full shadow-md p-8 rounded-md">
                {children}
            </div>
        </main>
    )
}

export default Layout