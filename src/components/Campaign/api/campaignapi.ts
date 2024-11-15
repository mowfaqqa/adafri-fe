/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/utils/api";
import { CampaignInput } from "../../../utils/interface";

export const campaignService = {
  getAllCampaigns: async () => {
    try {
      const response = await api.get(`/campaigns`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getSingleCampaign: async (id: string) => {
    try {
      const response = await api.get(`/campaigns/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCampaign: async (campaignData: CampaignInput) => {
    try {
      const response = await api.post(`/campaigns`, campaignData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCampaign: async (id: string, campaignData: CampaignInput) => {
    try {
      const response = await api.put(`/campaigns/${id}`, campaignData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCampaign: async (id: string) => {
    try {
      await api.delete(`/campaigns/${id}`);
      return true;
    } catch (error) {
      throw error;
    }
  },
};
