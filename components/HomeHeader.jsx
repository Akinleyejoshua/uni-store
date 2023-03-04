import { useRouter } from "next/router";
import {
  FaAddressBook,
  FaHome,
  FaInfoCircle,
  FaStoreAlt,
} from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineInfoCircle,
  AiOutlineCustomerService,
  AiOutlineDashboard,
} from "react-icons/ai";

export const HomeHeader = () => {
  const router = useRouter();
  return (
    <header className="home-header">
      <nav className="flex justify-between">
        <div className="navbrand">
          <a href="/">UNI-STORE</a>
        </div>

        <div className="navlinks flex">
          <a onClick={() => router.push("/")}>
            <AiOutlineHome />
            <div className="space-2"></div>
            <p>Home</p>
          </a>

          <div className="space-2"></div>
          <a>
            <AiOutlineInfoCircle />
            <div className="space-2"></div>
            <p>About</p>
          </a>
          <div className="space-2"></div>
          <a>
            <AiOutlineContacts />
            <div className="space-2"></div>

            <p>Contact</p>
          </a>
          <div className="space-2"></div>
          <a onClick={() => router.push("/products")}>
            <FaStoreAlt />
            <div className="space-2"></div>
            <p>Store</p>
          </a>
          <div className="space-2"></div>
          <a onClick={() => router.push("/admin/products/")}>
            <AiOutlineDashboard />
            <div className="space-2"></div>
            <p>Admin</p>
          </a>
        </div>
      </nav>
    </header>
  );
};

{
  /* <button>Home</button>
                <div className='space-2'></div>
                <button>About</button>
                <div className='space-2'></div>
                <button>Contact</button>
                <div className='space-2'></div>
                <button>Market</button> */
}
