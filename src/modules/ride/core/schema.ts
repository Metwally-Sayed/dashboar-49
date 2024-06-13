import { z } from "zod";

export const rideSchema = z.object({
  rideAreaDistance: z.string(),
  riderequestDuration: z.string(),
  isMonthlyContestAvailable: z.boolean().default(false),
  monthlyContestFees: z.string(),
  monthlyContestReward: z.string(),
  pricePerKm: z.string(),
  lowCostPerKilo: z.string(),
  rideRequestCashback: z.boolean().default(false),
  constantY: z.string(),
  constantZ: z.string(),
  tripRatio: z.string(),
  rideDrugAnalysis: z.boolean().default(false),
  rideTechnicalExamination: z.boolean().default(false),
  rideCriminalRecord: z.boolean().default(false),
  rideTechnicalExaminationCenterPhone: z.string(),
  rideTechnicalExaminationCenterLocation: z.string(),
  rideDrugAnalysisCenterPhone: z.string(),
  rideDrugAnalysisCenterLocation: z.string(),
  highCostPerKilo: z.string(),
});
