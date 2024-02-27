import { fetchInvestors } from "./api";
import { InvestorTable } from "./components";

export default async function Page() {
  const firmIds = [2670, 2792, 332, 3611];
  const investorList = await fetchInvestors(firmIds);

  return (
    <>
      <InvestorTable investors={investorList} />
    </>
  );
}
