import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames("px-3 py-2 border-2 text-lg rounded-sm", className)}
    />
  )
}

export default Input
