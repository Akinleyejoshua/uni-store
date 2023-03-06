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
  AiOutlineShoppingCart,
} from "react-icons/ai";

export const HomeHeader = ({cart}) => {
  const router = useRouter();
  return (
    <header className="home-header">
      <nav className="flex justify-between">
        <div className="navbrand">
          <a href="/">UNI-STORE</a>
        </div>

        <div className="navlinks flex">
          <a href="#" onClick={() => router.push("/")}>
            <AiOutlineHome />
            <div className="space-2"></div>
            <p>Home</p>
          </a>

          <div className="space-2"></div>
          <a href="#">
            <AiOutlineInfoCircle />
            <div className="space-2"></div>
            <p>About</p>
          </a>
          <div className="space-2"></div>
          <a href="#">
            <AiOutlineContacts />
            <div className="space-2"></div>

            <p>Contact</p>
          </a>
          <div className="space-2"></div>
          <a href="#" onClick={() => router.push("/products")}>
            <FaStoreAlt />
            <div className="space-2"></div>
            <p>Store</p>
          </a>
          <div className="space-2"></div>
          <a href="#" onClick={() => router.push("/admin/")}>
            <AiOutlineDashboard />
            <div className="space-2"></div>
            <p>Admin</p>
          </a>

          <div className="space-2"></div>
          <a href="#" onClick={() => router.push("/cart/")} className="flex">
            <AiOutlineShoppingCart />
            <div className="space-2"></div>
            <p>Cart</p>
          </a>
        </div>

        {/* <div className="nav-actions flex items-center">
          <button className="flex">
            <AiOutlineShoppingCart />
            <div className="space-2"></div>
            <p>{cart}</p>
          </button>
        </div> */}
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
