import FormError from "@/components/FormError.jsx"
import Input from "@/components/Input.jsx"
import { ErrorMessage, Field } from "formik"

const FormField = (props) => {
  const { name, ...otherProps } = props

  return (
    <div className="flex flex-col gap-2">
      <Field name={name}>
        {({ field, form }) => {
          const handleChange = async (event) => {
            form.setValues({
              [`${name}File`]: event.currentTarget.files[0],
            })
          }

          return <Input {...otherProps} {...field} onChange={handleChange} />
        }}
      </Field>
      <ErrorMessage name={props.name} component={FormError} />
    </div>
  )
}

export default FormField
