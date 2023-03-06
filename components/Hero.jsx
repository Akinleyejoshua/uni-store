import Image from "next/image";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="hero gradient-1-bg-welcome">
      <div className="hero-content flex col justify-between">
        <div className="center">
          <div>
            <p>50% Discount on Latest New Arrivals</p>
            <h1>Good Products Makes your life a better one</h1>
            <small>Your one and only online marketplace</small>
          </div>
          <div className="space-1"></div>
          <div>
            <button onClick={() => router.push("/products")}>Martket now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
