import Image from "next/image";
import logo from "@/assets/images/website/logo.png";

export const AcmeLogo = () => (
  <Image
    src={logo}
    width={0}
    height={0}
    alt=""
    style={{
      height: "4rem",
      width: "5rem",
    }}
  />
);
