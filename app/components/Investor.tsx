"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, Select } from "@chakra-ui/react";
import { Investors } from "../types";
import { fetchInvestorByAssetClass } from "../api";

interface InvestorProps {
  investor: Investors;
}
export const Investor: React.FC<InvestorProps> = ({ investor }) => {
  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAsset(event.target.value);
  };

  useEffect(() => {
    if (selectedAsset) {
      const fetchData = async () => {
        //TODO: investor CORS issue
        const investorWithAsset = await fetchInvestorByAssetClass(
          investor.firm_id,
          selectedAsset
        );
        console.log(investorWithAsset);
      };

      fetchData();
    }
  }, [selectedAsset, investor]);

  return (
    <>
      <Select
        placeholder="Select Asset Class"
        onChange={handleChange}
        value={selectedAsset}
      >
        <option value="PE">Private Equity</option>
        <option value="PD">Private Debt</option>
        <option value="RE">Real Estate</option>
        <option value="INF">Infrastructure</option>
        <option value="NR">Natural Resources</option>
        <option value="HF">Hedge Funds</option>
      </Select>

      <Card>
        <CardBody>
          <p>{investor.firm_name}</p>
          <p>{investor.address}</p>
          <p>{investor.firm_id.toString()}</p>
        </CardBody>
      </Card>
    </>
  );
};
