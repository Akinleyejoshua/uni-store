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
          <a>UNI-STORE</a>
        </div>

        <div className="navlinks flex">
          <a>
            <AiOutlineHome />
          </a>

          <div className="space-2"></div>
          <a>
            <AiOutlineInfoCircle />
          </a>
          <div className="space-2"></div>
          <a>
            <AiOutlineContacts />
          </a>
          <div className="space-2"></div>
          <a onClick={() => router.push("/products")}>
            <FaStoreAlt />
          </a>
          <div className="space-2"></div>
          <a onClick={() => router.push("/admin/")}>
            <AiOutlineDashboard />
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
