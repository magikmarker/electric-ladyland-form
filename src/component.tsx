// Create a test react component
import React from "react";

export function TestComponent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}
