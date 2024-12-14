import React, { useState } from "react";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  SelectItem,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import SuccessModal from "./SuccessModal";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { addData } from "@/context/apiHelper";
import { useRouter } from "next/navigation";

export default function ProposeChangeModal({ isOpen, onClose, serviceRequestId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [paymentType, setPaymentType] = useState("flat_rate");
  const vendorID = parseInt(getCookie("userID")); // Ensure vendorID is an integer
  const [formData, setFormData] = useState({
    price: "",
    service_request_id: parseInt(serviceRequestId), // Convert to integer
    payment_type: paymentType,
    estimated_hours: "",
    vendor_id: vendorID, // Ensure it's an integer
    start_date: "",
    completion_date: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const finalData = {
      ...formData,
      vendor_id: parseInt(formData.vendor_id),
      service_request_id: parseInt(formData.service_request_id),
    };

    console.log("Final Data Sent to API:", finalData);
    // const header = {
    //   "Content-Type": "multipart/form-data",
    // }
    const header = {
      "Content-Type": "application/json",
    }
    try {
      const response = await addData("vendors/proposals", finalData, header);
      console.log(response);

      if (response.success) {
        toast.success(response.message);
        router.push("/request-service");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(`Error setting up profile: ${errorMessage}`);
      console.error("Profile setup error:", error);
    }
    finally {
      openModal()
      onClose()
      setFormData({
        price: "",
        service_request_id: parseInt(serviceRequestId), // Convert to integer
        payment_type: paymentType,
        estimated_hours: "",
        vendor_id: vendorID, // Ensure it's an integer
        start_date: "",
        completion_date: "",
        message: "",
      });
    }
  };



  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButton
      backdrop="opaque"
      size="3xl"
    >
      <ModalContent className="p-4">
        <ModalHeader style={headerStyle}>
          <h2 style={titleStyle}>Propose Change</h2>
        </ModalHeader>
        <ModalBody style={bodyStyle}>
          <div style={formContainerStyle}>
            <label style={labelStyle}>Select Payment Type*</label>
            <RadioGroup
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              orientation="vertical"
              color="primary"
              style={radioGroupStyle}
            >
              <Radio value="flat_rate" size="sm">
                Flat Rate
              </Radio>
              <Radio value="hourly_rate" size="sm">
                Hourly Rate
              </Radio>
            </RadioGroup>

            {paymentType === "hourly_rate" && (
              <>
                <Input
                  label="Hourly Rate"
                  placeholder="$100"
                  labelPlacement="outside"
                  variant="bordered"
                  fullWidth
                  name="price"
                  onChange={handleInputChange}
                  value={formData.price}
                  style={inputStyle}
                />
                <Select
                  label="Estimated Hours"
                  placeholder="Select estimated hours"
                  labelPlacement="outside"
                  variant="bordered"
                  fullWidth
                  name="estimated_hours"
                  onChange={(value) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      estimated_hours: value.target.value, // Directly set the value
                    }));
                  }}
                  style={inputStyle}
                >
                  <SelectItem value="1_2">1-2 hours</SelectItem>
                  <SelectItem value="2_4">2-4 hours</SelectItem>
                  <SelectItem value="4_6">4-6 hours</SelectItem>
                </Select>

              </>
            )}

            {paymentType === "flat_rate" && (

              <Input
                label="Flat Rate"
                placeholder="$100"
                labelPlacement="outside"
                variant="bordered"
                fullWidth
                name="price"
                onChange={handleInputChange}
                value={formData.price}
                style={inputStyle}
              />
            )}

            <Input
              label="Service Start Date*"
              type="date"
              fullWidth
              variant="bordered"
              labelPlacement="outside"
              name="start_date"
              onChange={handleInputChange}
              value={formData.start_date}
              style={inputStyle}
            />
            <Input
              label="Service Completion Date*"
              type="date"
              fullWidth
              variant="bordered"
              name="completion_date"
              placeholder="mm/dd/yy"
              labelPlacement="outside"
              onChange={handleInputChange}
              value={formData.completion_date}
              style={inputStyle}
            />

            <Textarea
              label="Message"
              placeholder="Start from here"
              labelPlacement="outside"
              fullWidth
              name="message"
              variant="bordered"
              rows={4}
              onChange={handleInputChange}
              value={formData.message}
              style={textareaStyle}
            />
          </div>
        </ModalBody>
        <ModalFooter className="flex items-center justify-center">
          <Button flat color="error" onClick={onClose} style={buttonStyle}>
            Back
          </Button>
          <Button color="primary" onClick={handleSubmit} style={submitButtonStyle}>
            Submit Proposal
          </Button>
        </ModalFooter>
        <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
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
