import styles from "../Billboard/Billboard.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "src/i18n/routing";
import { getTranslations } from "next-intl/server";

async function Billboard() {
  const t = await getTranslations("HomePage");
  return (
    <div className={cx("billboard")}>
      <article className={cx("news")}>
        <h4 className={cx("news-title")}>{t("news")}</h4>
        <div className={cx("news-frame")}>
          <div className={cx("new")}></div>
          <div className={cx("new")}></div>
          <div className={cx("new")}></div>
        </div>
      </article>
      <aside className={cx("banners")}>
        <div className={cx("banners-frame")}>
          <div className={cx("banners-both-sides-left")}>
            <Link href="/" className={cx("banners-box")}></Link>
            <Link href="/" className={cx("banners-box")}></Link>
            <Link href="/" className={cx("banners-box")}></Link>
            <Link href="/" className={cx("banners-box")}></Link>
          </div>

          <Link href="/" className={cx("banners-center")}>
            <div className={cx("banners-center-box")}>
              <img
                className={cx("image-style")}
                src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1731544174"
                alt=""
              />
            </div>
          </Link>

          <div className={cx("banners-both-sides-right")}>
            <Link href="/" className={cx("banners-box-1")}></Link>
            <Link href="/" className={cx("banners-box-1")}></Link>
            <Link href="/" className={cx("banners-box-1")}></Link>
            <Link href="/" className={cx("banners-box-1")}></Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Billboard;
