export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight md:pr-8 text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-indigo-500 mb-12">
      {children}
    </h1>
  )
}
