import { z } from "zod"
import { formSchema } from "@/data/schemas/form.schema"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"

type FormValues = z.infer<typeof formSchema>

interface FormTextareaProps {
  name: keyof FormValues
  label: string
  placeholder: string
}

export default function FormTextArea({ name, label, placeholder }: FormTextareaProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="font-bold">
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="mt-2 border border-gray-800 dark:border-gray-400 focus:outline-none"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}