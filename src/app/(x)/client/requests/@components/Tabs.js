"use client";
import React, { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0]?.props?.tabKey);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          // borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        {children.map((tab) => (
          <button
            key={tab.props.tabKey}
            onClick={() => setActiveTab(tab.props.tabKey)}
            style={{
              border: "none",
              background: "none",
              fontWeight: activeTab === tab.props.tabKey ? "bold" : "normal",
              color: activeTab === tab.props.tabKey ? "#71C598" : "#A6A6A6",
              borderBottom:
                activeTab === tab.props.tabKey ? "2px solid #71C598" : "none",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {children.find((tab) => tab.props.tabKey === activeTab)?.props.children}
      </div>
    </div>
  );
}

function Tab({ children }) {
  return <div>{children}</div>;
}

export { Tabs, Tab };
