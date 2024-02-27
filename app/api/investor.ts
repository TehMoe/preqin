import { Investors } from "../types";
import { axiosInstance } from "../utils";

export const fetchInvestors = async (
  firmIds: number[]
): Promise<Investors[]> => {
  console.log("fetchInvestors", firmIds);
  console.log(`/api/investors?FirmID=${firmIds.join(",")}`);
  try {
    const response = await axiosInstance.get(
      `/api/investors?FirmID=${firmIds.join(",")}`
    );

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Fetch with error:", error);
    throw error;
  }
};

export const fetchInvestorByAssetClass = async (
  firmId: Number,
  assetClass: String
) => {
  try {
    const response = await axiosInstance.get(
      `/api/investor/commitment/${assetClass}/${firmId}/`
    );

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Fetch with error:", error);
    throw error;
  }
};
