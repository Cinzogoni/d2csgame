import { getTranslations } from "next-intl/server";

async function News() {
  const t = await getTranslations("HomePage");
  return <h1>News Page</h1>;
}

export default News;
