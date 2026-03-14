function Icon({ name, size = 24, className = '', ...props }) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <use href={`${import.meta.env.BASE_URL}icons.svg#${name}`} />
    </svg>
  )
}

export default Icon
