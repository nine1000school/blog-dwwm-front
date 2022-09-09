import Link from "@/components/Link.jsx"

const Page = (props) => {
  const { children } = props

  return (
    <div>
      <header className="border-b">
        <h1 className="text-4xl font-bold px-4 py-2">
          <Link href="/">My blog</Link>
        </h1>
      </header>
      <article>{children}</article>
    </div>
  )
}

export default Page
