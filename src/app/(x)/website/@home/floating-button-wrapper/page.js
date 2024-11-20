"use client";
const {
  default: ChatComponent,
} = require("@/components/ui/website/ChatComponent");
const {
  default: FloatingButton,
} = require("@/components/ui/website/FloatingButton");
const { useState } = require("react");

function FloatingButtonWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <FloatingButton onClick={toggleChat} />
      {isChatOpen && (
        <div
          style={{ zIndex: "9999", height: "400px" }}
          className="fixed bottom-20 right-4 bg-white-50 shadow-lg rounded-lg  w-80 transition-transform transform duration-300 ease-in-out"
        >
          <ChatComponent />
        </div>
      )}
    </>
  );
}
export default FloatingButtonWrapper;
