import { getTranslations } from "next-intl/server";

async function Classification() {
  const t = await getTranslations("HomePage");
  return <h1>Classification Page</h1>;
}

export default Classification;
