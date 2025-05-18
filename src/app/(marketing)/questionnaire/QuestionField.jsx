"use client";

import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio";
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Field, Label } from "@/components/ui/fieldset";

export function QuestionField({ question, control, errors }) {
  const { type, question: label, options } = question;

  return (
    <Field>
      <Label>{label}</Label>

      <Controller
        name={label}
        control={control}
        render={({ field }) => {
          switch (type) {
            case "text":
            case "email":
              return <Input {...field} type={type} />;

            case "textarea":
              return <Textarea {...field} />;

            case "single":
              return (
                <RadioGroup>
                  {options.map((o) => (
                    <RadioField key={o}>
                      <Label>{o}</Label>
                      <Radio
                        value={o}
                        checked={field.value === o}
                        onChange={() => field.onChange(o)}
                      />
                    </RadioField>
                  ))}
                </RadioGroup>
              );

            case "multi":
              return (
                <CheckboxGroup>
                  {options.map((o) => (
                    <CheckboxField key={o}>
                      <Checkbox
                        value={o}
                        checked={field.value?.includes(o)}
                        onChange={(e) => {
                          const arr = new Set(field.value || []);
                          e.target.checked ? arr.add(o) : arr.delete(o);
                          field.onChange([...arr]);
                        }}
                      />
                      <Label>{o}</Label>
                    </CheckboxField>
                  ))}
                </CheckboxGroup>
              );

            case "select":
              return (
                <Select {...field}>
                  {options.map((o) => (
                    <option value={o} key={o}>
                      {o}
                    </option>
                  ))}
                </Select>
              );

            default:
              return null;
          }
        }}
      />

      {errors[label] && (
        <p className="mt-2 text-sm text-red-600">{errors[label].message}</p>
      )}
    </Field>
  );
}
