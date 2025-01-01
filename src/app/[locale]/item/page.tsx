import { getTranslations } from "next-intl/server";

async function Item() {
  const t = await getTranslations("HomePage");
  return <h1>Item Page</h1>;
}

export default Item;
