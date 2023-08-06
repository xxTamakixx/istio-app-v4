import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import Link from 'next/link'


const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center">
      <Link href="/api/fetch">
        <a className="tracking-wider font-serif my-4 pb-3 text-3xl font-medium">FETCH</a>
      </Link>
    </div>
  )
}

export default Home