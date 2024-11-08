// app/sign-up/layout.js
import "@/app/globals.css";

export const metadata = {
  title: "Auth - InstaHandi",
  description: "Sign up page for InstaHandi",
};

export default function SignUpLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children} {/* This will only render the content of the Sign-Up page */}
      </body>
    </html>
  );
}
