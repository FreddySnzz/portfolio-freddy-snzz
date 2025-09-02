import { z } from "zod"
import { 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../../ui/form"
import { Input } from "../../ui/input"
import { formSchema } from "@/data/schemas/form.schema"

type FormValues = z.infer<typeof formSchema>

interface FormInputProps {
  name: keyof FormValues
  label: string
  placeholder: string
  type?: string
}

export default function FormInput({ name, label, placeholder, type = "text" }: FormInputProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="font-bold">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
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