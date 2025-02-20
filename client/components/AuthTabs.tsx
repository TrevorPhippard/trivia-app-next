"use client"


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import SignIn from "@/components/SignIn"
import SignUp from "@/components/SignUp"


export default function ProfileForm() {

    return (

        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign-in">sign-in</TabsTrigger>
                <TabsTrigger value="sign-up">sign-up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
                <div className="card">

                    <SignIn />

                </div>
            </TabsContent>
            <TabsContent value="sign-up">
                <div className="card">
                    <header>
                        <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight ">Sign Up</h1>
                        <p className="mb-2">
                            Don&apos;t have an account, sign up now it&apos;s free.
                        </p>
                    </header>
                    <div className="space-y-2">
                        <SignUp />
                    </div>

                </div>
            </TabsContent>
        </Tabs>


    )
}