import React from "react";
import styles from "@/assets/css/styles.module.css"; // Import your CSS module

const FloatingButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btnMessage} fixed bottom-4 right-4 text-white-50 p-4 rounded-full `}
    >
      Support
    </button>
  );
};

export default FloatingButton;
