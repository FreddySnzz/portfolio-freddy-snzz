import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { formSchema } from "@/data/schemas/form.schema"
import { IoBan, IoCheckmarkDone } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import { sendSimpleMessage } from "@/services/Mailer.service"
import FormInput from "./FormInput"
import FormTextArea from "./FormTextArea"
import { useState } from "react"

type FormValues = z.infer<typeof formSchema>

export default function FormContainer() {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: "", 
      email: "", 
      message: "" 
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true)
    try {
      await sendSimpleMessage({
        senderEmail: values.email,
        message: values.message,
      });

      toast((
        <div className="flex gap-2 justify-center items-center">
          <IoCheckmarkDone />
          <span className="font-bold">
            Mensagem enviada!
          </span>
        </div>
      ), {
        action: {
          label: "X",
          onClick: () => console.log(),
        },
      });
    } catch(error) {
      toast((
        <div className="flex gap-2 justify-center items-center">
          <IoBan />
          <span className="font-bold">
            Mensagem não enviada!
          </span>
        </div>
      ), {
        action: {
          label: "X",
          onClick: () => console.log(),
        },
      });
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex grow flex-col items-center justify-center h-auto p-6 md:ml-6 
      border rounded-xl border-gray-800 dark:border-gray-400 shadow-2xl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput name="name" label="Seu nome" placeholder="João" />
            <FormInput name="email" label="Seu email" placeholder="joao@mail.com" type="email" />
          </div>
          <FormTextArea
            name="message"
            label="Mensagem"
            placeholder="Fique à vontade para escrever sua mensagem ou dúvida."
          />
          <Button
            type="submit"
            className="hover:bg-blue-400 font-bold"
          >
            { isLoading ? (
              <div className="flex gap-2">
                <AiOutlineLoading className="animate-spin" />
                Enviando...
              </div>
            ) : (
              <div>Enviar</div>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
