import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Divider,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next"; // Ensure this library is installed
import toast from "react-hot-toast";
import axios from "axios";

export default function LogoutModal({ isOpen, onClose }) {
  const router = useRouter();

  const handleLogout = async () => {
    // Clear cookies
    const token = getCookie("authToken");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_AUTH}/logout`,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    deleteCookie("authToken");
    deleteCookie("userRole");
    toast.success("Logout successful!");

    // Redirect to home page
    router.push("/");

    // Close modal
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButton
      backdrop="opaque"
      size="xl"
    >
      <ModalContent className="p-4">
        <ModalHeader style={headerStyle}>
          <h2 style={titleStyle}>Log Out</h2>
        </ModalHeader>
        <ModalBody style={bodyStyle}>
          <div style={formContainerStyle}>
            <Divider className="my-2" />
            <label style={labelStyle}>
              Are you sure you want to log out? Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </label>
          </div>
        </ModalBody>
        <ModalFooter className="flex items-center justify-center">
          <Button flat color="error" onClick={onClose} style={buttonStyle}>
            Cancel
          </Button>
          <Button
            color="primary"
            style={submitButtonStyle}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Styles
const headerStyle = {
  textAlign: "center",
  fontWeight: "600",
  padding: "1.5rem 0",
};

const titleStyle = {
  fontSize: "1.5rem",
  textAlign: "center",

  color: "#333",
  margin: "auto",
};

const bodyStyle = {
  //   padding: "1.5rem 2rem",
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const labelStyle = {
  color: "var(--Foundation-Black-Text-Color-B300, #262727)",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
};

const radioGroupStyle = {
  //   display: "flex",
  gap: "1rem",
};

const inputStyle = {
  borderRadius: "8px",
  padding: "10px",
  fontSize: "0.875rem",
};

const textareaStyle = {
  borderRadius: "8px",
  padding: "10px",
  fontSize: "0.875rem",
};

const buttonStyle = {
  color: "var(--Foundation-Black-Text-Color-B75, #A6A6A6)",
  fontFamily: "Poppins",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "1.25rem" /* 111.111% */,
  borderRadius: " 0.375rem",
  border: "1px solid var(--Foundation-Black-Text-Color-B75, #A6A6A6)",
  padding: "0.75rem 2.125rem",
};

const submitButtonStyle = {
  color: " var(--Foundation-White-text-color-W300, #FFF)",
  fontFamily: "Poppins",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "1.25rem" /* 111.111% */,
  borderRadius: "0.375rem",
  background: "var(--Foundation-Primary-color-P300, #FE8315)",
  padding: "0.75rem 2.125rem",
};
