// return centered child

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-[100dvw] h-[100dvh] flex justify-center items-center bg-primary">{children}</div>
}

export default AuthLayout