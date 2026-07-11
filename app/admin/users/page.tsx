"use client";

import { useEffect, useState } from "react";

import UserStats from "@/components/admin/users/UserStats";
import UserToolbar from "@/components/admin/users/UserToolbar";
import UserTable from "@/components/admin/users/UserTable";

import { getUsers } from "@/lib/api";

export default function UsersPage() {

  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  // ==========================
  // LOAD USERS
  // ==========================

  const loadUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data || []);
      setFilteredUsers(data || []);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    loadUsers();

  }, []);

  // ==========================
  // SEARCH
  // ==========================

  useEffect(() => {

    const keyword = search.toLowerCase();

    setFilteredUsers(

      users.filter((user) => {

        return (

          user.name
            ?.toLowerCase()
            .includes(keyword) ||

          user.email
            ?.toLowerCase()
            .includes(keyword) ||

          user.phone
            ?.toLowerCase()
            .includes(keyword)

        );

      })

    );

  }, [search, users]);

  return (

    <div className="space-y-8">

      <UserStats
        users={filteredUsers}
      />

      <UserToolbar
        search={search}
        onSearch={setSearch}
        onRefresh={loadUsers}
      />

      <UserTable
        users={filteredUsers}
      />

    </div>

  );

}