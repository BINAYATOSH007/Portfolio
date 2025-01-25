"use client";

import NextError from "next/error";
import { useEffect } from "react";


// app/global-error.tsx



// app/global-error.tsx



interface GlobalErrorProps {
  error: Error; // You can use a more specific type if needed
  reset: () => void; // Function type for the reset function
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default GlobalError;