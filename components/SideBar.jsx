import { useRouter } from "next/router";
import {
  AiOutlineCloudServer,
  AiOutlineLogout,
  AiOutlinePieChart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import {
  FcHome,
  FcVideoFile,
  FcVideoCall,
  FcMoneyTransfer,
} from "react-icons/fc";
import { BsRecordCircle } from "react-icons/bs";
import { Avater } from "./Avater";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { SkelentalLoader } from "./SkelentalLoader";
import { FaShoppingBag, FaStoreAlt } from "react-icons/fa";

export const SideBar = ({ toggle, closeSideBar }) => {
  const router = useRouter();
  const go = (path) => {
    router.push(path);
  };

  const path = router.pathname;

  const {
    user,
    auth: { logout },
  } = useContext(GlobalContext);
  const { email, fname, lname, loading } = user;

  return (
    <div className={toggle ? "sidebar flex open" : "sidebar flex"}>
      <nav>
        <div className="nav-top">
          <a onClick={() => go("/home")}>UNI-STORE</a>
          {/* <h1 onClick={() => go("/home")}>SCREEN-VIEW</h1> */}
        </div>

        {/* <div className="avater-bar btn" onClick={() => go("/profile")}>
          {loading ? (
            <SkelentalLoader type="avater" />
          ) : (
            <Avater name={`${fname}_${lname}`} />
          )}

          {loading ? (
            <SkelentalLoader type="text" />
          ) : (
            <>
              <p>
                {fname} {lname}
              </p>
              <p>{email}</p>
            </>
          )}
        </div> */}

        <div className="nav-actions">
          <button
            className={path === "/home" ? "active" : ""}
            onClick={() => go("/home")}
          >
            <FcHome />
            <p>Home</p>
          </button>
          <button
            className={path === "/dashboard" ? "active" : ""}
            onClick={() => go("/dashboard")}
          >
            <AiOutlinePieChart className="blue" />
            <p>Dashboard</p>
          </button>
          <button
            className={path.includes("/admin/orders") ? "active" : ""}
            onClick={() => go("/admin/orders")}
          >
            <AiOutlineShoppingCart />
            <p>Orders</p>
          </button>
          <button
            className={path === "/stream" ? "active" : ""}
            onClick={() => go("/stream")}
          >
            <AiOutlineUsergroupAdd className="red" />
            <p>Customers</p>
          </button>
          <button
            className={path === "/admin/products" ? "active" : ""}
            onClick={() => go("/admin/products")}
          >
            <FaShoppingBag />
            <p>Products</p>
          </button>
          <button
            className={path === "/product" ? "active" : ""}
            onClick={() => go("/products")}
          >
            <FaStoreAlt />
            <p>Market</p>
          </button>
          {/* <button
            className={path === "/subscription" ? "active" : ""}
            onClick={() => go("/subscription")}
          >
            <FcMoneyTransfer />
            <p>Subscription</p>
          </button>
          <div className="h-line"></div>
          <button
            className={path === "/profile" ? "active" : ""}
            onClick={() => go("/profile")}
          >
            <AiOutlineUser className="blu" />
            <p>Profile</p>
          </button>
          <button
            className={path === ("/cloud-storage") ? "active" : ""}
            onClick={() => go("/cloud-storage")}
          >
            <AiOutlineCloudServer className="blu" />
            <p>Cloud Storage</p>
          </button> */}
        </div>

        <div className="nav-bottom">
          <button onClick={() => logout()}>
            <AiOutlineLogout className="red" />
            <p>Logout</p>
          </button>
        </div>
      </nav>
      <div className="sidebar-space" onClick={() => closeSideBar()}></div>
    </div>
  );
};
