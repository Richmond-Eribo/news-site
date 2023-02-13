import Link from "next/link"

const page = () => {
  return (
    <div className="h-sreen flex justify-center items-center">
      <Link className=" text-white p-4 text-xl bg-black" href="/">
        Go Home
      </Link>
    </div>
  )
}

export default page
