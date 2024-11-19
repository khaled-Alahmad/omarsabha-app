// app/auth/layout.js
import "@/app/globals.css";

export const metadata = {
  title: "Auth Pages - InstaHandi",
  description: "Authentication Pages Layout",
};

export default function AuthLayout({ children }) {
  return <main>{children}</main>;
}
