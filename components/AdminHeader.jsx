import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";

export const AdminHeader = ({toggleSideBar}) => {
  const router = useRouter();

  return <header className="header">
  <nav>
    <div className="welcome flex items-center">
      <button onClick={() => toggleSideBar()} className="menu-btn"><AiOutlineMenu/></button>
      <h1>{router.pathname ? router.pathname.replace("/", "").toLocaleUpperCase(): "404 Not Found"}</h1>
    </div>

    <div className="nav-right">
      {/* <Avater name={"JA"} />
      <button className="notification-btn" onClick={() => router.push("/notification")}>
        <AiOutlineNotification className="" />
      </button>
      <button className="logout" onClick={() => router.push("/signin")}>
        <AiOutlineLogout className="red" />
      </button> */}
    </div>
  </nav>
</header>
};
