import { getTranslations } from "next-intl/server";

async function Payment() {
  const t = await getTranslations("HomePage");
  return <h1>Payment Page</h1>;
}

export default Payment;
