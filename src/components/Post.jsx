import Link from "@/components/Link.jsx"
import { formatLongDateTime } from "@/formatters/date.js"
import classNames from "classnames"

const Post = (props) => {
  const { post, className } = props

  return (
    <article className={classNames("px-4 py-4", className)}>
      <header className="mb-4">
        <h1 className="text-2xl font-bold italic">
          <Link
            href={`/posts/${post.id}`}
            className="hover:text-slate-600 hover:underline"
          >
            {post.title}
          </Link>
        </h1>
        <p className="text-sm text-slate-600">
          Published by{" "}
          <Link
            href={`/users/${post.user.id}`}
            className="font-bold hover:underline"
          >
            {post.user.displayName}
          </Link>{" "}
          on {formatLongDateTime(new Date(post.publishedAt))}
        </p>
      </header>

      {post.content.split("\n").map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </article>
  )
}

export default Post
