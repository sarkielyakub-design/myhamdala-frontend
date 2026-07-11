import PackageTable from "@/components/admin/packages/PackageTable";
import PackageStats from "@/components/admin/packages/PackageStats";
import PackageToolbar from "@/components/admin/packages/PackageToolbar";

import { getPackages } from "@/lib/api";

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <div className="space-y-8">

      <PackageStats
        packages={packages}
      />

      <PackageToolbar />

      <PackageTable
        packages={packages}
      />

    </div>
  );
}