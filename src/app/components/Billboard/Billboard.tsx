"use client";

import styles from "../Billboard/Billboard.module.scss";
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

function Billboard() {
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

    setActiveSlide(slide);
    setTimeout(() => {
      setActiveSlide(null);
    }, 100);
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
        setScrollIndex((prevIndex) => {
          if (prevIndex === scrollIndex) {
            handleScroll("prev");
          } else {
            handleScroll("next");
          }
          return prevIndex;
        });
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [handleScroll, isVideoPlaying, scrollIndex]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cx("billboard")}>
      <article className={cx("news")}>
        <h4 className={cx("news-title")}>{t("news")}</h4>
        <div className={cx("news-frame")}>
          {news.map((post) => {
            return (
              <Link key={post.id} href="/news" className={cx("link")}>
                <div className={cx("new")}>
                  <img className={cx("new-img")} src={post.imgUrl} alt="/" />

                  <div className={cx("published")}>
                    <h5
                      style={{
                        fontSize: "1.3rem",
                        color: "#ffffffcc",
                        textAlign: "center",
                      }}
                    >
                      Title
                    </h5>
                    <h6
                      style={{
                        fontSize: "1.3rem",
                        color: "#ffffffcc",
                        textAlign: "center",
                      }}
                    >
                      Publish date
                    </h6>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </article>

      <aside className={cx("banners")}>
        <div className={cx("banners-frame")}>
          <div className={cx("banners-both-sides-left")}>
            {leftBanners.map((bannerLeft) => {
              return (
                <Link
                  className={cx("banners-box")}
                  key={bannerLeft.id}
                  href="/classification"
                >
                  <img
                    className={cx("banner-img-both-sides")}
                    src={bannerLeft.imgUrl}
                    alt="/"
                  />
                </Link>
              );
            })}
          </div>

          <div className={cx("banners-both-sides-right")}>
            {rightBanners.map((bannerRight) => {
              return (
                <Link
                  className={cx("banners-box-1")}
                  key={bannerRight.id}
                  href="/classification"
                >
                  <img
                    className={cx("banner-img-both-sides")}
                    src={bannerRight.imgUrl}
                    alt="/"
                  />
                </Link>
              );
            })}
          </div>

          <div className={cx("banners-video")}>
            <GridSystem rowClass={cx("row-1")}>
              <div className={cx("slides")}>
                <div className={cx("slide")}>
                  <FaAngleLeft
                    className={cx("slide-icon")}
                    onClick={() => handleScroll("prev")}
                    style={{
                      transition: "transform 0.25s ease",
                      transform:
                        activeSlide === "prev" ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </div>
                <div className={cx("slide")}>
                  <FaAngleRight
                    className={cx("slide-icon")}
                    onClick={() => handleScroll("next")}
                    style={{
                      transition: "transform 0.25s ease",
                      transform:
                        activeSlide === "next" ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </div>
              </div>

              <div
                className={cx("video-frame")}
                style={{
                  transition: "transform 0.5s ease-in-out",
                  transform: transformValue(),
                }}
              >
                {bannerVideos.map((video) => {
                  return (
                    <GridSystem
                      key={video.id}
                      colClass={cx("col-1")}
                      colL={cx("l-12")}
                      colML={cx("ml-12")}
                      colM={cx("m-12")}
                      colSM={cx("sm-12")}
                      colS={cx("s-12")}
                      colMo={cx("mo-12")}
                      colMi={cx("mi-12")}
                    >
                      <ReactPlayer
                        url={video.videoUrl}
                        width="100%"
                        height="100%"
                        controls={true}
                        style={{ objectFit: "cover" }}
                        onPlay={() => handleVideoPlay(video.id)}
                        onPause={handleVideoPause}
                      />
                    </GridSystem>
                  );
                })}
              </div>
            </GridSystem>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Billboard;
