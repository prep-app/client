export const Heading1 = ({ children, ...rest }: { children: JSX.Element }) => (
  <h1 className="text-3xl " {...rest}>
    {children}
  </h1>
)
export const Heading2 = ({ children, ...rest }: { children: JSX.Element }) => (
  <h2 className="text-xl mb-2 text-gray-900" {...rest}>
    {children}
  </h2>
)

export const Paragraph = ({ children, ...rest }: { children: JSX.Element }) => (
  <p className="text-3xl" {...rest}>
    {children}
  </p>
)
