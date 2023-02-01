import Link from "next/link"

export const Header = () => {
    return (
        <header>
          <div className="topNav">
        <nav>
          <ul>
            <li>
          <Link href="/">Home</Link>
            </li>
            <li>
          <Link href="/events">Events</Link>
            </li>
            <li>
          <Link href="/about-us">About</Link>
            </li>
          </ul>
        </nav>
        <img src="" alt="" />
          </div>
      </header>
    )
}