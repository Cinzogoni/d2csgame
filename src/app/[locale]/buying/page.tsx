import { getTranslations } from "next-intl/server";

async function Buying() {
  const t = await getTranslations("HomePage");
  return <h1>Buying Page</h1>;
}

export default Buying;
