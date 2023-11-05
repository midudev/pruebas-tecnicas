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
      <header className="fixed w-20 h-full flex flex-col items-center justify-between bg-bgwarn border-r-[0.2px] border-off shadow-r-sm">
        <Image src={books} width='auto' height='auto' alt="books" className="p-3" />
        <nav className="h-3/5 p-6 flex flex-col items-center">
            <Image src={dashboard} width='auto' height='auto' alt="dashboard" className="h-[72px] pb-8" />
            <Image src={bell} width='auto' height='auto' alt="bell" className="h-[72px] pb-6" />
            <Image src={bookmark} width='auto' height='auto' alt="bookmark" className="h-[72px] pb-6" />
            <Image src={friends} width='auto' height='auto' alt="friends" className="h-[72px] pb-6" />
            <Image src={config} width='auto' height='auto' alt="config" className="h-[72px] pb-6" />
        </nav>
        <nav className="flex flex-col items-center justify-center">
            <Image src={user} width='182' height='181' alt="user" className="p-4" />
            <Image src={logout} width='auto' height='auto' alt="log out" className="px-2 pt-3 pb-6" />
        </nav>
      </header>
    )
  }
  