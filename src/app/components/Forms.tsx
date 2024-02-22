'use client'





import { FormEvent, useState } from "react";

import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser'



interface IProps {
    SERVICE_ID: string;
    TEMPLATE_ID: string
    PUBLIC_KEY: string;

}

export default function Forms({ SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY }: IProps) {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')



    function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        if (name === "" || email === "" || message === "") {
            toast.error('Preencha todos os campos')
            return
        }

        console.log(name, email, message)

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }




        try {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    if (response.status === 200) {
                        toast.success('Email enviado com sucesso!')
                        setName('')
                        setEmail('')
                        setMessage('')
                    }



                }, (err) => {
                    console.log('FAILED...', err)
                    toast.error('Erro ao enviar email')

                })

        }

        catch (err) {
            console.log(err)
            toast.error('Erro ao enviar email')
        }


    }

    return (

        <main className="bg-black h-screen flex items-center justify-center">


            <div className="bg-red-400 w-1/2 mx-auto p-6 space-y-7">
                <h1 className="text-center text-white ">Contato</h1>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} className="p-2 rounded-md text-slate-700" type="text" placeholder="Digite seu nome" />
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} className="p-2 rounded-md text-slate-700" type="email" placeholder="Digite seu email" />

                    <textarea value={message} onChange={(e) => {
                        setMessage(e.target.value)
                    }} name="" id="" className="resize-none p-2 rounded-md" placeholder="Escreva sua mensagem"></textarea>

                    <input className=" bg-white cursor-pointer rounded-xl p-3" type="submit" value={"Enviar Forms"} />
                </form>


            </div>
            <Toaster richColors />
        </main>
    );
}
