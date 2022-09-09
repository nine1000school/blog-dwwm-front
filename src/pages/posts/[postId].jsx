import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
import api from "@/services/api.js"
import { useEffect, useState } from "react"

const PostsSinglePage = (props) => {
  const {
    router: {
      query: { postId },
    },
  } = props
  const [post, setPost] = useState(null)

  console.log(post)

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
    return "Loading..."
  }

  return (
    <Page>
      <Post post={post} />
    </Page>
  )
}

export default PostsSinglePage
