// app/sign-up/layout.js
import "@/app/globals.css";

export const metadata = {
  title: "Auth - InstaHandi",
  description: "Sign up page for InstaHandi",
};

export default function SignUpLayout({ children }) {
  return (
    <div>
      {children} 
    </div>
  );
}
