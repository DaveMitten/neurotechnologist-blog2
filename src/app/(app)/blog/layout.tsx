import Nav from '../../../components/sections/Nav'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="px-12 lg:px-24 xl:px-48 py-14 w-full">{children}</div>
}
