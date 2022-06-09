export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left mt-16 mb-12">
      {children}
    </h1>
  )
}
