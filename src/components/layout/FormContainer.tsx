"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string("Apenas letras!").min(2, {
    message: "Seu nome deve ter no mínimo 2 caracteres.",
  }),
  email: z.email().min(2, {
    message: "Seu email deve ter no mínimo 2 caracteres.",
  }),
})

export default function FormContainer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex grow flex-col items-center justify-center h-auto p-6 md:ml-6 
      border rounded-xl border-gray-800 dark:border-gray-400 shadow-2xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex gap-6">
                <div className="grow">
                  <FormLabel className="font-bold">
                    Seu nome
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="João" {...field} 
                      className="mt-2 border border-gray-800 dark:border-gray-400 focus:border-0 focus:stroke-none" 
                    />
                  </FormControl>
                  <FormMessage />
                </div>
                <div className="grow">
                  <FormLabel className="font-bold">
                    Seu email
                  </FormLabel>
                  <FormControl>
                    <Input 
                    placeholder="joao@mail.com" {...field} 
                    className="mt-2 border border-gray-800 dark:border-gray-400 focus:border-0 focus:stroke-none" 
                  />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div>
            <FormLabel className="font-bold mb-2 mt-8">
              Mensagem
            </FormLabel>
            <Textarea 
              placeholder="Fique a vontade para escrever sua mensagem ou sua dúvida." 
              className="border border-gray-800 dark:border-gray-400 focus:border-0 focus:stroke-none"
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  )
}