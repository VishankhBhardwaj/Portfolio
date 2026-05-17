import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export function InputField({ form, setForm }) {
    return (
        <Field className='flex flex-col gap-4'>

            <div className="flex flex-col gap-4">

                <div className="md:flex md:flex-row gap-5">

                    <div className="md:w-1/2 flex flex-col gap-2">

                        <FieldLabel
                            htmlFor="input-field-name"
                            className="text-white/60"
                        >
                            Name
                        </FieldLabel>

                        <Input
                            id="input-field-name"
                            type="text"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                            className="border border-white/10 focus:shadow-lg focus:shadow-white/10 transition-all duration-300 ease-out rounded-3xl h-10 md:h-12 p-5 md:w-80"
                        />

                    </div>

                    <div className="md:w-1/2 flex flex-col gap-2">

                        <FieldLabel
                            htmlFor="input-field-email"
                            className="text-white/60"
                        >
                            Email
                        </FieldLabel>

                        <Input
                            id="input-field-email"
                            type="text"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            className="border border-white/10 focus:shadow-lg focus:shadow-white/10 transition-all duration-300 ease-out rounded-3xl h-10 md:h-12 p-5 md:w-80"
                        />

                    </div>

                </div>

                <div className="flex flex-col gap-2">

                    <FieldLabel
                        htmlFor="input-field-message"
                        className="text-white/60"
                    >
                        Message
                    </FieldLabel>

                    <Textarea
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                message: e.target.value,
                            }))
                        }
                        className="border border-white/10 focus:shadow-lg focus:shadow-white/10 transition-all duration-300 ease-out rounded-3xl h-32 md:w-[89%] p-5"
                    />

                </div>

            </div>

        </Field>
    )
}
