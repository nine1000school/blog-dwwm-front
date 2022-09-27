const { default: Page } = require("@/components/Page.jsx")

const NotFoundPage = () => <Page title="404">Not found.</Page>

NotFoundPage.isPublic = true

export default NotFoundPage
