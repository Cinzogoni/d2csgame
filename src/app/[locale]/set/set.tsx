import { getTranslations } from "next-intl/server";

async function Set() {
  const t = await getTranslations("HomePage");
  return <h1>Set Page</h1>;
}

export default Set;
