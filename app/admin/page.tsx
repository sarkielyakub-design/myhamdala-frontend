import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <DashboardStats />

      <RevenueChart />

    </div>
  );
}