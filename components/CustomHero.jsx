import Image from "next/image";
import { useRouter } from "next/router";

export const CustomHero = ({children}) => {
  const router = useRouter();

  return (
    <div className="hero gradient-1-bg-welcome">
      <div className="hero-content flex col justify-between">
        <div className="center">
          {children}
          <div className="space-1"></div>
          <div>
            <button onClick={() => router.push("/products")}>Martket now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
