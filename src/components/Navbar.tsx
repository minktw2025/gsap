import Link from "next/link"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {

  // note: 隨每個尺寸改變的<p>

  return (
    <div
      className="flex items-center justify-between h-full px-4 sm:px-8 md-px-12 lg:px-20 xl:px-48"
    >
      {/* LOGO */}
      <div>
        <Link 
          href="/" 
          className="flex items-center justify-center bg-zinc-700 pl-1 py-1 text-sm font-semibold rounded-md"
        >
          <span className="text-white">Mink</span>
          <span className="flex items-center justify-center w-12 h-8 px-1 bg-white rounded">.dev</span>
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="">
        {/* MENU BUTTON */}
        <button className="flex flex-col justify-between relative items-center w-10 h-8 z-50">
          <div className="w-10 h-1 bg-white"></div>
          <div className="w-10 h-1 bg-white"></div>
          <div className="w-10 h-1 bg-white"></div>
        </button>
        {/* MENU LIST */}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 absolute top-0 left-0 w-screen h-screen text-4xl bg-zinc-700 text-white">
        {links.map(link => <Link href={link.url} key="link.title">{link.title}</Link>)}
      </div>
    </div>
  )
}
export default Navbar