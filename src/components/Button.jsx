const { default: classNames } = require("classnames")

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(
        "px-3 py-2 font-lg font-bold text-white bg-blue-600 active:bg-blue-700 disabled:bg-blue-500 border-4 border-blue-600 active:border-blue-700 disabled:border-blue-500 rounded-sm",
        className
      )}
    />
  )
}

export default Button
