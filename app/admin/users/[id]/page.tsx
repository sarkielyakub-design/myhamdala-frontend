"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import UserProfileCard from "@/components/admin/users/UserProfileCard";

import { getUser } from "@/lib/api";

export default function UserDetailsPage() {

  const { id } = useParams();

  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadUser();

  }, []);

  const loadUser = async () => {

    try {

      const data = await getUser(
        Number(id)
      );

      setUser(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-20 text-center text-slate-400">

        Loading customer...

      </div>

    );

  }

  if (!user) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-20 text-center text-red-400">

        Customer not found.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <UserProfileCard
        user={user}
      />

    </div>

  );

}