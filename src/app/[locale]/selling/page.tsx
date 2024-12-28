import { getTranslations } from "next-intl/server";

async function Selling() {
  const t = await getTranslations("HomePage");
  return <h1>Selling Page</h1>;
}

export default Selling;
