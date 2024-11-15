// Types
export interface Campaign {
  status: string;
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
}

export interface CampaignInput {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
}


export type StatusFilter = 'All' | Campaign['status'];