import { useAppContext } from "@/components/AppContext.jsx"
import Link from "@/components/Link.jsx"
import classNames from "classnames"
import { useCallback } from "react"

const Page = (props) => {
  const { title, small, children } = props
  const {
    setSession,
    state: { session },
  } = useAppContext()
  const logout = useCallback(() => setSession(null), [setSession])

  return (
    <div>
      <header className="border-b flex justify-between">
        <h1 className="text-4xl font-bold px-4 py-2">
          <Link href="/">My blog</Link>
        </h1>
        <nav>
          <ul className="flex h-full items-center px-4">
            {session ? (
              <li>
                <span
                  className="font-bold p-4 hover:underline cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </span>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/sign-up"
                    className="font-bold p-4 hover:underline"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-in"
                    className="font-bold p-4 hover:underline"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
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
