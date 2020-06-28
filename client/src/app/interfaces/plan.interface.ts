export interface Plan {
  planId: number;
  planName: string;
  coveragePeriod: string;
  issueAge: string;
  description: string;
  details: PlanDetails[];
}

export interface PlanDetails {
  icon: string;
  title: string;
  description: string;
}
