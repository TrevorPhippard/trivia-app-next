"use client"


import Sortable from '@/components/Sortable';
import Answers from './Answers'
import Link from 'next/link';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { onSubmitAction } from '@/app/_actions/form';
import { startTransition, useActionState, useEffect, useRef } from "react";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

import { schema } from "@/app/_schemas/auth";

interface GameData {
    // Define the structure of gameData here
}



export default function EditTab({ gameData }: { gameData: GameData }) {


    const [state, formAction] = useActionState(onSubmitAction, { message: "" })
    const defaultOptions = { options: [{ choice: '', correct: false }] };


    const form = useForm<z.output<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            first: "",
            last: "",
            email: "",
        },
    });

    const formRef = useRef<HTMLFormElement>(null);


    return (
        <>

            <p>-</p>
            <Form {...form}>
                <form
                    className="space-y-8"
                    action={formAction}
                    ref={formRef}
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        form.handleSubmit(() => {
                            startTransition(() => formAction(new FormData(formRef.current!)));
                        })(evt);
                    }}
                >
                    <div className=" flex gap-12">
                        <div className="w-9/12">
                            <div className='flex flex-col gap-6'>
                                <h4 className='text-2xl font-bold flex gap-2'>Create Question</h4>
                                <section>
                                    <label className="text-red-600" htmlFor="question">Type(under construction): </label>
                                    <select name="type" id="type" disabled>
                                        <option value="Multiple">Multiple Choice</option>
                                    </select>
                                    <hr />
                                </section>
                                <section>
                                    <FormField
                                        control={form.control}
                                        name="first"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormDescription>Your first name.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormDescription>Your last name.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormDescription>Your email address.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </section>
                                <section className="form">
                                    <p>Answers:</p>
                                    <Answers opts={defaultOptions} />
                                </section>
                            </div>
                        </div>
                        <div className="w-3/12">
                            <Sortable />
                            <p>{JSON.stringify(gameData)}</p>

                        </div>
                    </div>
                    <div className="pt-5 flex flex-col ">

                        <h4 className="text-2xl font-bold  gap-2">Save Trivia </h4>
                        <i>save changes and return to home to launch game</i>
                        <hr />
                        <div className="flex gap-4 py-4">
                            <button className="custom-button" type="submit">Save</button>
                            <Link className='custom-button' href={`/dashboard`}>Back</Link>
                        </div>
                    </div >
                </form>
            </Form >
        </>
    );
}
