import Image from "next/image";
import books from "../../../public/assets/books.svg";
import dashboard from "../../../public/assets/dashboard.svg";
import bell from "../../../public/assets/notification.svg";
import bookmark from "../../../public/assets/bookmark.svg";
import friends from "../../../public/assets/friends.svg";
import config from "../../../public/assets/configuration.svg";
import logout from "../../../public/assets/log-out.svg";
import user from "../../../public/assets/user.png";

export default function Header() {
    return (
      <header className="fixed w-6 h-full flex flex-col items-center justify-between bg-bgwarn border-r-[0.2px] border-off shadow-r-sm">
        <Image src={books} width='auto' height='auto' alt="books" className="p-2" />
        <nav className="h-3/5 p-2">
            <Image src={dashboard} width='auto' height='auto' alt="dashboard" className="pb-1" />
            <Image src={bell} width='auto' height='auto' alt="dashboard" className="pb-1" />
            <Image src={bookmark} width='auto' height='auto' alt="dashboard" className="pb-1" />
            <Image src={friends} width='auto' height='auto' alt="dashboard" className="pb-1" />
            <Image src={config} width='auto' height='auto' alt="dashboard" className="pb-1" />
        </nav>
        <nav>
            <Image src={user} width='182' height='181' alt="dashboard" className="p-1" />
            <Image src={logout} width='auto' height='auto' alt="dashboard" className="px-2 pt-1 pb-2" />
        </nav>
      </header>
    )
  }
  