import styles from "../ItemsSet/ItemsSet.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "src/i18n/routing";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa";

const outsItem = [
  {
    id: 1,
    imgUrl: "",
  },
  {
    id: 2,
    imgUrl: "",
  },
];

const outsSet = [
  {
    id: 1,
    imgUrl: "",
  },
  {
    id: 2,
    imgUrl: "",
  },
];

function ItemsSet() {
  const t = useTranslations("itemsSet");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("items")}>
        <div className={cx("outstanding")}>
          <h4 className={cx("title")}>{t("highlightItem")}</h4>
          <div className={cx("frame")}>
            {outsItem.map((out) => {
              return (
                <Link key={out.id} href="/item" className={cx("outs-link")}>
                  <div className={cx("outs")}>
                    <img className={cx("outs-img")} src={out.imgUrl} alt="/" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={cx("item")}>
          <div className={cx("item-viewAll")}>
            <h4 className={cx("title")}>{t("itemForSale")}</h4>
            <Link href="/" className={cx("viewAll-link")}>
              <h4 className={cx("action")}>Xem tất cả</h4>
              <FaAngleRight className={cx("icon")} />
            </Link>
          </div>
        </div>
      </div>

      <div className={cx("sets")}>
        <div className={cx("outstanding")}>
          <h4 className={cx("title")}>{t("highlightSet")}</h4>
          <div className={cx("frame")}>
            {outsSet.map((out) => {
              return (
                <Link key={out.id} href="/set" className={cx("outs-link")}>
                  <div className={cx("outs")}>
                    <img className={cx("outs-img")} src={out.imgUrl} alt="/" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={cx("bundle")}>
          <div className={cx("item-viewAll")}>
            <h4 className={cx("title")}>{t("setForSale")}</h4>
            <Link href="/" className={cx("viewAll-link")}>
              <h4 className={cx("action")}>Xem tất cả</h4>
              <FaAngleRight className={cx("icon")} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsSet;
