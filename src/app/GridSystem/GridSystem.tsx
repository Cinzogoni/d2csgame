import styles from "./GridSystem.module.scss";
import classNames from "classnames/bind";
import { ReactNode, memo } from "react";

interface GridSystemProps {
  children: ReactNode;
  gridClass?: string;
  wideClass?: string;
  rowClass?: string;
  colClass?: string;
  colL?: string;
  colML?: string;
  colM?: string;
  colSM?: string;
  colS?: string;
  colMo?: string;
}

const cx = classNames.bind(styles);

function GridSystem({
  children,
  gridClass,
  wideClass,
  rowClass,
  colClass,
  colL,
  colML,
  colM,
  colSM,
  colS,
  colMo,
}: GridSystemProps) {
  const classes = cx(
    gridClass,
    wideClass,
    rowClass,
    colClass,
    colL,
    colML,
    colM,
    colSM,
    colS,
    colMo
  );

  return <div className={classes}>{children}</div>;
}

export default memo(GridSystem);
