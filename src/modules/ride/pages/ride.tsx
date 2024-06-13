import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { rideSchema } from "../core/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const ROUTES = [
  {
    href: "/ride/rides",
    name: "Rides",
  },
  {
    href: "/ride/come-with-you",
    name: "Come with you",
  },
  {
    href: "/ride/pick-me",
    name: "Pick me",
  },
  {
    href: "/ride/offers",
    name: "Offers",
  },
];

const INPUTS = [
  {
    name: "rideAreaDistance",
    title: "Ride Area Distance",
    type: "number",
  },
  {
    name: "riderequestDuration",
    title: "Ride Request Duration",
    type: "number",
  },
  {
    name: "isMonthlyContestAvailable",
    title: "Is Monthly Contest Available",
    type: "checkbox",
  },
  {
    name: "rideRequestCashback",
    title: "Ride Request Cashback",
    type: "checkbox",
  },
  {
    name: "rideCriminalRecord",
    title: "Ride Criminal Record",
    type: "checkbox",
  },
  {
    name: "rideTechnicalExamination",
    title: "Ride Technical Examination",
    type: "checkbox",
  },
  {
    name: "rideDrugAnalysis",
    title: "Ride Drug Analysis",
    type: "checkbox",
  },
  {
    name: "monthlyContestFees",
    title: "Monthly Contest Fees",
    type: "number",
  },
  {
    name: "monthlyContestReward",
    title: "Monthly Contest Reward",
    type: "number",
  },
  {
    name: "pricePerKm",
    title: "Price Per Km",
    type: "number",
  },
  {
    name: "highCostPerKilo",
    title: "High Cost Per Kilo",
    type: "number",
  },
  {
    name: "lowCostPerKilo",
    title: "Low Cost Per Kilo",
    type: "number",
  },
  {
    name: "constantY",
    title: "Constant Y",
    type: "number",
  },
  {
    name: "constantZ",
    title: "Constant Z",
    type: "number",
  },
  {
    name: "tripRatio",
    title: "Trip Ratio",
    type: "number",
  },
  {
    name: "rideTechnicalExaminationCenterPhone",
    title: "Ride Technical Examination Center Phone",
    type: "text",
  },
  {
    name: "rideTechnicalExaminationCenterLocation",
    title: "Ride Technical Examination Center Location",
    type: "text",
  },
  {
    name: "rideDrugAnalysisCenterPhone",
    title: "Ride Drug Analysis Center Phone",
    type: "text",
  },
  {
    name: "rideDrugAnalysisCenterLocation",
    title: "RideDrug Analysis Center Location",
    type: "text",
  },
];

const Ride = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof rideSchema>>({
    resolver: zodResolver(rideSchema),
  });

  function onSubmit(values: z.infer<typeof rideSchema>) {
    console.log(values);
  }

  return (
    <>
      {/* Header */}
      <PageHeader>Ride</PageHeader>
      {/* Menu */}
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        {ROUTES.map((route) => (
          <Button
            onClick={() => navigate(route.href)}
            className="h-20"
            key={route.href}
          >
            {route.name}
          </Button>
        ))}
      </div>
      <Separator className="mt-10" />
      <div className="mt-10">
        <PageHeader>Control Rides</PageHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid md:grid-cols-3 gap-4 mt-10"
            action=""
          >
            {INPUTS.map((input, index) => (
              <div key={index}>
                <FormField
                  control={form.control}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={input.name as any}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{input.title}</FormLabel>
                      <FormControl>
                        <Input type={input.type} {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <Label> {input.title} </Label>
                <Input type={input.type} name={input.name} /> */}
              </div>
            ))}
            <div className="col-span-2">
              <Button className="col-span-1 mt-10 " type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Ride;
