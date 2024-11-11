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

export default function ProposeChangeModal({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [paymentType, setPaymentType] = useState("hourly");
  const [formData, setFormData] = useState({
    hourlyRate: "",
    estimatedHours: "",
    startDate: "",
    completionDate: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButton
      backdrop="opaque"
      size="4xl"
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
              color="warning"
              style={radioGroupStyle}
            >
              <Radio value="flat" size="sm">
                Flat Rate
              </Radio>
              <Radio value="hourly" size="sm">
                Hourly Rate
              </Radio>
            </RadioGroup>

            {paymentType === "hourly" && (
              <Input
                label="Hourly Rate"
                placeholder="$100"
                labelPlacement="outside"
                variant="bordered"
                fullWidth
                name="hourlyRate"
                onChange={handleInputChange}
                value={formData.hourlyRate}
                style={inputStyle}
              />
            )}

            <Select
              label="Estimated Hours"
              placeholder="Select estimated hours"
              labelPlacement="outside"
              variant="bordered"
              fullWidth
              name="estimatedHours"
              onChange={(value) =>
                handleInputChange({ target: { name: "estimatedHours", value } })
              }
              style={inputStyle}
            >
              <SelectItem value="1-2">1-2 hours</SelectItem>
              <SelectItem value="2-4">2-4 hours</SelectItem>
              <SelectItem value="4-6">4-6 hours</SelectItem>
            </Select>

            <Input
              label="Service Start Date*"
              type="date"
              fullWidth
              variant="bordered"
              labelPlacement="outside"
              name="startDate"
              onChange={handleInputChange}
              value={formData.startDate}
              style={inputStyle}
            />
            <Input
              label="Service Completion Date*"
              type="date"
              fullWidth
              variant="bordered"
              name="completionDate"
              placeholder="mm/dd/yy"
              labelPlacement="outside"
              onChange={handleInputChange}
              value={formData.completionDate}
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
          <Button color="primary" onClick={openModal} style={submitButtonStyle}>
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
