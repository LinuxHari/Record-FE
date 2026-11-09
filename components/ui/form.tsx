import { HTMLInputTypeAttribute } from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

import {
    Field,
    // FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface ControlInterface<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>
}

type FormInputProps<TFieldValues extends FieldValues> =  { label: string, placeholder?: string, id: string, required?: boolean, type?: HTMLInputTypeAttribute | undefined } & ControlInterface<TFieldValues>

export const FormInput = <TFieldValues extends FieldValues>({ name, label, placeholder, control, id, required = false, type }: FormInputProps<TFieldValues>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={id} className="gap-0">
                        {label} {required && <span className="text-destructive font-medium ml-1">*</span>}
                    </FieldLabel>
                    <Input
                        {...field}
                        className="input"
                        type={type}
                        id={id}
                        aria-invalid={fieldState.invalid}
                        placeholder={placeholder}
                        autoComplete="off"
                        required={required}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    )
}