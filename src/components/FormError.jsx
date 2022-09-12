import classNames from "classnames"

const FormError = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <p {...otherProps} className={classNames("px-2 text-red-600", className)}>
      🛑 {children}
    </p>
  )
}

export default FormError
