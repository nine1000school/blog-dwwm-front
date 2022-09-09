import NextLink from "next/link"

const Link = (props) => {
  const { href, ...otherProps } = props

  return (
    <NextLink href={href}>
      <a {...otherProps} />
    </NextLink>
  )
}

export default Link
