const Container = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode
  backgroundColor: 'bg-white' | 'bg-gray-50'
}) => {
  return <div className={`${backgroundColor} py-6`}>{children}</div>
}

export default Container
