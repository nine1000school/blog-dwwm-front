import Loading from "@/components/Loading.jsx"
import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
import api from "@/services/api.js"
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
  const { query } = context

  return {
    props: { query },
  }
}

const UsersSinglePage = (props) => {
  const {
    query: { userId },
  } = props
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const [
        {
          data: { result: userResult },
        },
        {
          data: { result: postsResult },
        },
      ] = await Promise.all([
        api(`/users/${userId}`),
        api("/posts/", { /* query */ params: { userId } }),
      ])

      setUser(userResult[0])
      setPosts(postsResult)
    })()
  }, [userId])

  if (!user) {
    return <Loading />
  }

  return (
    <Page>
      <header>
        <h1 className="text-3xl font-bold text-blue-600 p-4">
          All posts by {user.displayName}
        </h1>
      </header>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Page>
  )
}

export default UsersSinglePage
