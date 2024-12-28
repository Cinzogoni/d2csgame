import styles from "../RealTimeProducts/RealTimeProducts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import GridSystem from "src/app/[locale]/styles/GridSystem/GridSystem";

import { Link } from "src/i18n/routing";
import { getTranslations } from "next-intl/server";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

async function RealTimeProducts() {
  const t = await getTranslations("HomePage");

  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

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
              color: "var(--text-color)",
            }}
          />
        </Link>
      </button>

      <div className={cx("products")}>
        <FaAngleLeft style={{ height: "173px", width: "20px" }} />

        <GridSystem rowClass={cx("row")}>
          {products.map((product) => {
            return (
              <GridSystem
                key={product.id}
                colClass={cx("col")}
                colL={cx("l-1-10")}
                colML={cx("ml-1-10")}
                colM={cx("m-1-8")}
              >
                <div className={cx("product")}></div>
              </GridSystem>
            );
          })}
        </GridSystem>

        <FaAngleRight style={{ height: "173px", width: "20px" }} />
      </div>
    </div>
  );
}

export default RealTimeProducts;
