import type { Metadata } from "next"; // Keep Metadata import for server-side rendering of title/description
import GroupClientPage from "./GroupClientPage";

// Metadata is a server-only export, so it needs to be outside the client component
export const metadata: Metadata = {
  title: "Group Companies - Jaydeep Industries",
  description:
    "Learn about Jaydeep Industries group companies and our strategic partnerships in the textile industry.",
};

export default function GroupPage() {
  return <GroupClientPage />;
}
