export interface Policy {
  policyId: number;
  policyName: string;
  coveragePeriod: string;
  issueAge: string;
  description: string;
  details: PolicyDetails[];
}

export interface PolicyDetails {
  icon: string;
  title: string;
  description: string;
}
