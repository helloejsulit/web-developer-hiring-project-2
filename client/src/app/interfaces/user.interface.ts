export interface User {
  userId: string;
  name: string;
  contact: number;
  address: string;
  policy: UserPolicy;
}

export interface UserPolicy {
  policySummary: UserPolicyDetails;
  policySchedule: UserPolicySchedule;
  policyHistory: UserPolicyPaymentHistory[];
}

export interface UserPolicyDetails {
  policyId: number;
  policyNumber: number;
  effectiveDate: string;
  maturityDate: string;
  insured: string;
  currency: string;
  faceAmount: number;
  status: string;
  duration: string;
}

export interface UserPolicySchedule {
  dueDate: string;
  premiumDue: number;
  currentPaymentMode: string;
}

export interface UserPolicyPaymentHistory {
  transactionDate: string;
  transaction: string;
  amount: number;
  orNumber: string;
}
