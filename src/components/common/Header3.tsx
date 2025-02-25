export type Header3Props = React.HTMLAttributes<HTMLHeadElement>;

function Header3({ className, children, ...props }: Header3Props) {
  return (
    <h3 className={`text-2xl${className ? ` ${className}` : ""}`} {...props}>
      {children}
    </h3>
  );
}

export default Header3;
