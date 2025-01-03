"use client";

import styles from "../Events/Events.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "src/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useCallback, useEffect } from "react";

import dynamic from "next/dynamic";
import GridSystem from "../GridSystem/GridSystem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const news = [
  {
    id: 1,
    imgUrl: "https://d2set.net/Uploads/posts/full-style-set-main.jpg",
  },
  {
    id: 2,
    imgUrl: "https://d2set.net/Uploads/posts/update-737e-main.jpg",
  },
  {
    id: 3,
    imgUrl: "https://d2set.net/Uploads/posts/how-set-t10-d2set.jpg",
  },
];

const banners = [
  {
    id: 1,
    imgUrl: "https://d2set.net/Uploads/banners/feature-banner-ti11.jpg",
  },
  {
    id: 2,
    imgUrl: "https://d2set.net/Uploads/banners/cache2024-head-banner.png",
  },
  {
    id: 3,
    imgUrl: "https://d2set.net/Uploads/banners/feature-banner-steam-point.png",
  },
  { id: 4, imgUrl: "https://d2set.net/Uploads/feature-banner-0913v1.png" },
  {
    id: 5,
    imgUrl: "https://d2set.net/Uploads/banners/wallet-5usd-banner.jpg",
  },
  { id: 6, imgUrl: "https://d2set.net/Uploads/feature-banner-0913v3.png" },
  {
    id: 7,
    imgUrl:
      "https://d2set.net/Uploads/banners/feature-frostivus-2024-caches.jpg",
  },
  {
    id: 8,
    imgUrl: "https://d2set.net/Uploads/banners/feature-crownfall-banner.png",
  },
];
const leftBanners = banners.slice(0, 4);
const rightBanners = banners.slice(4, 8);

const bannerVideos = [
  { id: 1, videoUrl: "https://www.youtube.com/watch?v=UcZKEOV9AiY" },
  { id: 2, videoUrl: "https://www.youtube.com/watch?v=MNUD6aOCdes" },
  { id: 3, videoUrl: "https://www.youtube.com/watch?v=HHSTjIivLhw" },
];

type videoId = number | boolean;
type slider = "prev" | "next";

function Events() {
  const t = useTranslations("HomePage");
  const [width, setWidth] = useState<number>(0);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<videoId>(false);
  const [activeSlide, setActiveSlide] = useState<slider | null>(null);

  const calculateBoxesPerSlide = useCallback(() => {
    if (width >= 1920) return 1;
    if (width >= 1366 && width < 1920) return 1;
    if (width >= 1024 && width < 1366) return 1;
    if (width >= 768 && width < 1024) return 1;
    if (width >= 630 && width < 768) return 1;
    if (width >= 430 && width < 630) return 1;
    if (width < 430) return 1;
    return 1;
  }, [width]);

  const handleScroll = (slide: slider) => {
    if (isVideoPlaying) return;

    const totalBoxes = bannerVideos.length;
    const boxesPerSlide = calculateBoxesPerSlide();
    const maxScrollIndex = totalBoxes - boxesPerSlide;

    setScrollIndex((prevIndex) => {
      if (slide === "next") {
        if (prevIndex === maxScrollIndex) return 0;
        return prevIndex + 1;
      }
      if (slide === "prev") {
        if (prevIndex === 0) return maxScrollIndex;
        return prevIndex - 1;
      }
      return prevIndex;
    });
    if (isVideoPlaying) {
      setActiveSlide(null);
    } else {
      setActiveSlide(slide);
      setTimeout(() => {
        setActiveSlide(null);
      }, 100);
    }
  };

  const transformValue = () => {
    const boxesPerSlide = calculateBoxesPerSlide();
    const slideWidth = 100 / boxesPerSlide;
    return `translateX(-${scrollIndex * slideWidth}%)`;
  };

  const handleVideoPlay = (id: videoId) => {
    setIsVideoPlaying(id);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    let intervalId = null;

    if (!isVideoPlaying) {
      intervalId = setInterval(() => {
        handleScroll("next");
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [handleScroll, isVideoPlaying]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className={cx("wrapper")}>
      <div className={cx("frame")}></div>
    </article>
  );
}

export default Events;
