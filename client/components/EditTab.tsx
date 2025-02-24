
// EditTab.tsx
import { BaseSyntheticEvent, startTransition, useActionState, useRef } from "react";
import { submitToServerActions } from '@/app/_actions/formSubmit';
import Form from 'next/form';
import { useForm, useFieldArray } from 'react-hook-form';
import { Schema, schema, defaultValues } from '@/app/_schemas/question';
import { zodResolver } from '@hookform/resolvers/zod';
import Sortable from '@/components/Sortable';
import QuestionInput from '@/components/QuestionInput';
import ImageInput from '@/components/ImageInput';
import AnswersList from '@/components/AnswersList';
import { QuestionData } from "@/app/_types"



export default function EditTab(props: {
    id: number
    questions: QuestionData | undefined,
    slideLength: number | undefined
}) {



    const [message, formAction, isPending] = useActionState(submitToServerActions, null);

    const { register, handleSubmit, formState: { errors }, control } = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "answer",
        rules: { maxLength: 4 }
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (evt: BaseSyntheticEvent) => {
        evt.preventDefault();
        handleSubmit(() => {
            startTransition(() => {
                const fdata = new FormData(formRef.current!);
                fdata.append('triviaId', String(props.id));
                fdata.append('order', String(89));
                formAction(fdata);
            });
        })(evt);
    };

    return (
        <>
            <aside className="w-2/12 card">
                <Sortable length={props.slideLength} />
            </aside>
            <div className="card w-10/12">
                <p>{props.questions?.question}</p>

                <Form ref={formRef} action={formAction} onSubmit={onSubmit}>
                    <QuestionInput register={register} errors={errors} />
                    <ImageInput register={register} errors={errors} />
                    <AnswersList register={register} errors={errors} fields={fields} append={append} remove={remove} />
                    <button className="custom-button" type="submit">Submit</button>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-expect-error */}
                    <p>{isPending ? "Loading..." : message?.message}</p>
                </Form>
            </div>
        </>
    );
}