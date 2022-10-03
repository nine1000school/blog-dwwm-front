import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import api from "@/services/api.js"
import { Form, Formik } from "formik"
import { useCallback } from "react"

const initialValues = {
  avatar: "",
  avatarFile: "",
}

const SettingsPage = () => {
  const handleSubmit = useCallback(async ({ avatarFile }) => {
    const result = await api.post(
      "/users/avatar",
      { avatar: avatarFile },
      { headers: { "Content-Type": "multipart/form-data" } }
    )

    console.log(result)
  }, [])

  return (
    <Page title="Settings">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-4" encType="multipart/form-data">
          <FormField name="avatar" type="file" />
          <Button type="submit">SAVE</Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SettingsPage
