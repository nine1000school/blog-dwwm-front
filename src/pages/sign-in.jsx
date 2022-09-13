import { useAppContext } from "@/components/AppContext.jsx"
import Button from "@/components/Button.jsx"
import FormError from "@/components/FormError.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page"
import api from "@/services/api.js"
import { validateEmailOrUsername, validatePassword } from "@/validators.js"
import { AxiosError } from "axios"
import { Form, Formik } from "formik"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import * as yup from "yup"

const initialValues = {
  emailOrUsername: "",
  password: "",
}

const validationSchema = yup.object().shape({
  emailOrUsername: validateEmailOrUsername.required(),
  password: validatePassword.required(),
})

const SignInPage = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const { setSession } = useAppContext()
  const handleSubmit = useCallback(
    async ({ emailOrUsername, password }) => {
      setErrors([])

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/sign-in", {
          emailOrUsername,
          password,
        })

        if (jwt) {
          setSession(jwt)
          router.push("/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router, setSession]
  )

  return (
    <Page title="Sign in" small>
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
          <Form className="flex flex-col gap-4" noValidate>
            <FormField
              type="email"
              name="emailOrUsername"
              placeholder="E-mail or Username"
            />
            <FormField type="password" name="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default SignInPage
