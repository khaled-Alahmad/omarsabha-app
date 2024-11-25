// app/loading.js

import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <Spinner color="warning" />
    </div>
  );
}
