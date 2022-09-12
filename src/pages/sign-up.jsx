import Button from "@/components/Button.jsx"
import FormError from "@/components/FormError.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page"
import api from "@/services/api.js"
import {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUsername,
} from "@/validators.js"
import { AxiosError } from "axios"
import { Form, Formik } from "formik"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import * as yup from "yup"

const initialValues = {
  displayName: "",
  username: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  displayName: validateDisplayName.required(),
  username: validateUsername.required(),
  email: validateEmail.required(),
  password: validatePassword.required(),
})

const SignUpPage = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ email, password, username, displayName }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { email, password, username, displayName })

        if (count) {
          router.push("/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }
        console.log(err)
        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router]
  )

  return (
    <Page title="Sign up" small>
      {errors.length ? (
        <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
          {errors.map((error) => (
            <FormError key={error}>{error}</FormError>
          ))}
        </div>
      ) : null}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="flex flex-col gap-4">
            <FormField
              type="text"
              name="displayName"
              placeholder="Display name"
            />
            <FormField type="text" name="username" placeholder="Username" />
            <FormField type="email" name="email" placeholder="E-mail" />
            <FormField type="password" name="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default SignUpPage
