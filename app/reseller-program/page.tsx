import type { Metadata } from "next";
import ResellerProgramClientPage from "./ResellerProgramClientPage";

export const metadata: Metadata = {
  title: "Reseller Program - Jaydeep Industries",
  description:
    "Join Jaydeep Industries' reseller program and partner with a leader in the weaving industry.",
};

export default function ResellerProgramPage() {
  return <ResellerProgramClientPage />;
}
