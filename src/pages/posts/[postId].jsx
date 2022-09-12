import Loading from "@/components/Loading.jsx"
import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
import api from "@/services/api.js"
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
  return { props: { query: context.query } }
}

const PostsSinglePage = (props) => {
  const {
    query: { postId },
  } = props
  const [post, setPost] = useState(null)

  useEffect(() => {
    ;(async () => {
      const {
        data: {
          result: [result],
        },
      } = await api(`/posts/${postId}`)

      setPost(result)
    })()
  }, [postId])

  if (!post) {
    return <Loading />
  }

  return (
    <Page>
      <Post post={post} />
    </Page>
  )
}

export default PostsSinglePage
