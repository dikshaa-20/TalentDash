export interface SalaryRecord {
  id: string;

  company: string;
  companySlug: string;

  role: string;

  level:
    | "L3"
    | "L4"
    | "L5"
    | "L6"
    | "Principal";

  location: string;

  experience: number;

  baseSalary: number;

  bonus: number;

  stock: number;

  totalCompensation: number;

  industry: string;

  founded: number;

  headcount: string;

  headquarters: string;
}