import "./GlobalStyles.css";
import { ReactNode, memo } from "react";

interface GlobalStylesProps {
  children: ReactNode;
}

function GlobalStyles({ children }: GlobalStylesProps) {
  return children;
}

export default memo(GlobalStyles);
