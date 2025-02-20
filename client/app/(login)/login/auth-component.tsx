const Button = () => <button></button>

export function SignIn({
    provider, ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
            }}
        >
            <Button {...props}> Sign In</Button >
        </form >
    )
}