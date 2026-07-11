import HeroStats from "@/components/admin/hero/HeroStats";
import HeroForm from "@/components/admin/hero/HeroForm";
import HeroPreview from "@/components/admin/hero/HeroPreview";

import { getHero } from "@/lib/api";

export default async function HeroPage() {
  const hero = await getHero();

  return (
    <div className="space-y-8">

      <HeroStats hero={hero} />

      <div className="grid gap-8 xl:grid-cols-2">

        <HeroForm hero={hero} />

        <HeroPreview hero={hero} />

      </div>

    </div>
  );
}