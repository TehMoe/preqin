import { fetchInvestors } from "@/app/api";
import { Investor } from "@/app/components";
import { Investors } from "@/app/types";

export default async function investors({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  // Small bug on the API, it seems to return all the firms regardless of what I send
  const investor = await getRequestFirm(id);

  return investor && <Investor investor={investor} />;
}

const getRequestFirm = async (
  firmId: number
): Promise<Investors | undefined> => {
  const firmIds = [firmId];
  const investors = await fetchInvestors(firmIds);
  return investors.find((investor) => investor.firm_id == firmId);
};
