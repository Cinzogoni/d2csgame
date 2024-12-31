"use client";

import styles from "../RealTimeProducts/RealTimeProducts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useCallback, useEffect } from "react";
import { Link } from "src/i18n/routing";
import { useTranslations } from "next-intl";
import GridSystem from "src/app/components/GridSystem/GridSystem";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

type Move = "prev" | "next";

function RealTimeProducts() {
  const t = useTranslations("HomePage");
  const [width, setWidth] = useState<number>(0);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [activeMove, setActiveMove] = useState<Move | null>(null);

  const products = [
    {
      id: 1,
      imgUrl:
        "https://d2set.net/Uploads/thumb/12a440b419d58482c3da42d5d81aa375.jpg",
    },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    {
      id: 16,
      imgUrl:
        "https://d2set.net/Uploads/thumb/f4492a76642add20f6706f82dc287783.png",
    },
  ];

  const calculateBoxesPerSlide = useCallback(() => {
    if (width >= 1920) return 8;
    if (width >= 1366 && width < 1920) return 8;
    if (width >= 1024 && width < 1366) return 8;
    if (width >= 768 && width < 1024) return 6;
    if (width >= 630 && width < 768) return 4;
    if (width >= 430 && width < 630) return 2;
    if (width < 430) return 2;
    return 10;
  }, [width]);

  const handleScroll = (move: Move) => {
    const totalBoxes = products.length;
    const boxesPerSlide = calculateBoxesPerSlide();
    const maxScrollIndex = totalBoxes - boxesPerSlide;

    setScrollIndex((prevIndex) => {
      if (move === "prev") return Math.max(prevIndex - 1, 0);
      if (move === "next") return Math.min(prevIndex + 1, maxScrollIndex);
      return prevIndex;
    });

    setActiveMove(move);
    setTimeout(() => {
      setActiveMove(null);
    }, 100);
  };

  const transformValue = () => {
    const boxesPerSlide = calculateBoxesPerSlide();
    const slideWidth = 100 / boxesPerSlide;
    return `translateX(-${scrollIndex * slideWidth}%)`;
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <button className={cx("view-all")}>
        <Link href="/realtimeProducts" className={cx("link")}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "1.6rem",
              margin: "0 6px 0 10px",
            }}
          >
            {t("realtimeProducts")}
          </h4>
          <FaAngleRight
            style={{
              width: "20px",
              height: "20px",
              color: "#34495e",
            }}
          />
        </Link>
      </button>

      <div className={cx("products")}>
        <div className={cx("move")} onClick={() => handleScroll("prev")}>
          <FaAngleLeft
            style={{
              height: "173px",
              width: "24px",
              transition: "transform 0.25s ease",
              transform: activeMove === "prev" ? "scale(1.2)" : "scale(1)",
            }}
          />
        </div>

        <GridSystem rowClass={cx("row")}>
          <div
            className={cx("frame")}
            style={{
              transition: "transform 0.25s ease-in-out",
              transform: transformValue(),
            }}
          >
            {products.map((product) => {
              return (
                <GridSystem
                  key={product.id}
                  colClass={cx("col")}
                  colL={cx("l-1-8")}
                  colML={cx("ml-1-8")}
                  colM={cx("m-1-8")}
                  colSM={cx("sm-2")}
                  colS={cx("s-3")}
                  colMo={cx("mo-6")}
                  colMi={cx("mi-6")}
                >
                  <div className={cx("product")}>
                    <img className={cx("img")} src={product.imgUrl} alt="" />
                    <div className={cx("info")}>
                      <h5 className={cx("name")}>Product name</h5>
                      <h6 className={cx("price")}>price</h6>
                    </div>
                  </div>
                </GridSystem>
              );
            })}
          </div>
        </GridSystem>

        <div className={cx("move")} onClick={() => handleScroll("next")}>
          <FaAngleRight
            style={{
              height: "173px",
              width: "24px",
              transition: "transform 0.25s ease",
              transform: activeMove === "next" ? "scale(1.2)" : "scale(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RealTimeProducts;
