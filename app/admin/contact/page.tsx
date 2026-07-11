import ContactHero from "@/components/admin/contact/ContactHero";
import ContactStats from "@/components/admin/contact/ContactStats";
import ContactToolbar from "@/components/admin/contact/ContactToolbar";
import ContactTable from "@/components/admin/contact/ContactTable";

import { getContacts } from "@/lib/api";

export default async function ContactPage() {

  const contacts = await getContacts();

  return (
    <div className="space-y-8">

      <ContactHero />

      <ContactStats
        contacts={contacts}
      />

      <ContactToolbar />

      <ContactTable
        contacts={contacts}
      />

    </div>
  );
}