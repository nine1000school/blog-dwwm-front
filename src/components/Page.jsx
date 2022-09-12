import Link from "@/components/Link.jsx"
import classNames from "classnames"

const Page = (props) => {
  const { title, small, children } = props

  return (
    <div>
      <header className="border-b flex justify-between">
        <h1 className="text-4xl font-bold px-4 py-2">
          <Link href="/">My blog</Link>
        </h1>
        <nav>
          <ul className="flex gap-4 h-full items-center">
            <li>
              <Link href="/sign-up" className="font-bold p-4 hover:underline">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <article
        className={classNames(
          small ? "w-96" : "w-2/3 max-w-[800px]",
          "p-8 md:px-0 mx-auto"
        )}
      >
        {title ? (
          <h1 className="text-2xl font-bold text-slate-600 p-4 mb-4">
            {title}
          </h1>
        ) : null}
        {children}
      </article>
    </div>
  )
}

export default Page
