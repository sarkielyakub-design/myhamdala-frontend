"use client";

import { useMemo, useState } from "react";

import {
  ShieldCheck,
  Search,
  Users,
  Mail,
  Crown,
  User2,
  CheckCircle2,
  CalendarDays,
  Trash2,
  Eye,
} from "lucide-react";

import API from "@/lib/api";

export default function UserList({ users }: any) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>(null);

  // 🔥 FILTER USERS
  const filteredUsers = useMemo(() => {
    return users.filter((u: any) => {
      const q = search.toLowerCase();

      return (
        u.name?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q) ||
        u.role?.toLowerCase().includes(q)
      );
    });
  }, [users, search]);

  // 🔥 DELETE USER
  const deleteUser = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/users/${id}`);

      alert("✅ User deleted");

      window.location.reload();
    } catch (err) {
      console.error(err);

      alert("❌ Failed to delete user");
    }
  };

  // 🔥 STATS
  const totalUsers = users.length;

  const admins = users.filter(
    (u: any) =>
      u.role === "admin" ||
      u.role === "super_admin"
  ).length;

  const verified = users.filter(
    (u: any) => u.is_verified === true
  ).length;

  return (
    <div className="space-y-8">

      {/* 🔥 HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            User Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage customers, admins and staff accounts.
          </p>

        </div>

        {/* 🔍 SEARCH */}
        <div className="relative w-full lg:w-80">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />

          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-yellow-500 transition"
          />

        </div>

      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TOTAL USERS */}
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-300/5 border border-blue-500/20 rounded-3xl p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                Total Users
              </p>

              <h2 className="text-3xl font-black mt-2 text-blue-400">
                {totalUsers}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">

              <Users className="text-blue-400" />

            </div>

          </div>

        </div>

        {/* ADMINS */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 rounded-3xl p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                Admin Accounts
              </p>

              <h2 className="text-3xl font-black mt-2 text-yellow-400">
                {admins}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

              <Crown className="text-yellow-400" />

            </div>

          </div>

        </div>

        {/* VERIFIED */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-300/5 border border-green-500/20 rounded-3xl p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                Verified Users
              </p>

              <h2 className="text-3xl font-black mt-2 text-green-400">
                {verified}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

              <ShieldCheck className="text-green-400" />

            </div>

          </div>

        </div>

      </div>

      {/* 🔥 USER GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredUsers.map((u: any) => {

          const role =
            u.role === "super_admin"
              ? "Super Admin"
              : u.role === "admin"
              ? "Admin"
              : "Customer";

          return (
            <div
              key={u.id}
              className="group bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
            >

              {/* 🔥 TOP */}
              <div className="flex items-start justify-between mb-5">

                <div className="flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black flex items-center justify-center text-2xl font-black shadow-lg">

                    {u.name?.charAt(0)?.toUpperCase()}

                  </div>

                  {/* USER */}
                  <div>

                    <h2 className="font-bold text-lg">
                      {u.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      {u.email}
                    </p>

                    <div className="flex items-center gap-2 mt-2">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          u.role === "admin" ||
                          u.role === "super_admin"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {role}
                      </span>

                      {u.is_verified && (
                        <span className="flex items-center gap-1 text-green-400 text-xs">

                          <CheckCircle2 size={14} />

                          Verified

                        </span>
                      )}

                    </div>

                  </div>

                </div>

              </div>

              {/* 🔥 INFO */}
              <div className="space-y-4">

                {/* EMAIL */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">

                    <Mail
                      size={18}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-gray-500">
                      Email Address
                    </p>

                    <p className="text-sm text-white break-all">
                      {u.email}
                    </p>

                  </div>

                </div>

                {/* USER ID */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <User2
                      size={18}
                      className="text-purple-400"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-gray-500">
                      User ID
                    </p>

                    <p className="text-sm text-white">
                      #{u.id}
                    </p>

                  </div>

                </div>

                {/* CREATED */}
                {u.created_at && (
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">

                      <CalendarDays
                        size={18}
                        className="text-green-400"
                      />

                    </div>

                    <div>

                      <p className="text-xs text-gray-500">
                        Joined
                      </p>

                      <p className="text-sm text-white">
                        {new Date(
                          u.created_at
                        ).toLocaleDateString()}
                      </p>

                    </div>

                  </div>
                )}

              </div>

              {/* 🔥 ACTIONS */}
              <div className="grid grid-cols-2 gap-3 mt-6">

                {/* VIEW */}
                <button
                  onClick={() => setSelected(u)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all"
                >

                  <Eye size={16} />

                  View

                </button>

                {/* DELETE */}
                <button
                  onClick={() => deleteUser(u.id)}
                  className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all"
                >

                  <Trash2 size={16} />

                  Delete

                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-5">

          <div className="w-full max-w-2xl bg-[#0B1120] border border-white/10 rounded-[32px] overflow-hidden">

            {/* TOP */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-300/5 border-b border-white/10 p-8">

              <div className="flex items-center gap-5">

                <div className="w-24 h-24 rounded-3xl bg-yellow-500 text-black flex items-center justify-center text-4xl font-black">

                  {selected.name?.charAt(0)}

                </div>

                <div>

                  <h2 className="text-3xl font-black">
                    {selected.name}
                  </h2>

                  <p className="text-gray-400 mt-1">
                    {selected.email}
                  </p>

                  <div className="flex items-center gap-2 mt-3">

                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                      {selected.role || "user"}
                    </span>

                    {selected.is_verified && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        Verified
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* BODY */}
            <div className="p-8 grid md:grid-cols-2 gap-5">

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <p className="text-gray-500 text-sm mb-2">
                  User ID
                </p>

                <h3 className="text-xl font-bold">
                  #{selected.id}
                </h3>

              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <p className="text-gray-500 text-sm mb-2">
                  Role
                </p>

                <h3 className="text-xl font-bold">
                  {selected.role || "user"}
                </h3>

              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <p className="text-gray-500 text-sm mb-2">
                  Email
                </p>

                <h3 className="text-sm break-all">
                  {selected.email}
                </h3>

              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <p className="text-gray-500 text-sm mb-2">
                  Verification
                </p>

                <h3 className="text-xl font-bold text-green-400">
                  {selected.is_verified
                    ? "Verified"
                    : "Pending"}
                </h3>

              </div>

            </div>

            {/* FOOTER */}
            <div className="p-6 border-t border-white/10 flex justify-end">

              <button
                onClick={() => setSelected(null)}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-semibold transition-all"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}