"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  Save,
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Globe,
  ImagePlus,
  UploadCloud,
} from "lucide-react";

import API from "@/lib/api";

export default function WebsiteSettingsForm() {
  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  // ===============================
  // LOGO
  // ===============================

  const [logoFile, setLogoFile] =
    useState<File | null>(null);

  const [faviconFile, setFaviconFile] =
    useState<File | null>(null);

  const [logoPreview, setLogoPreview] =
    useState("");

  const [faviconPreview, setFaviconPreview] =
    useState("");

  // ===============================
  // FORM
  // ===============================

  const [form, setForm] = useState({

    company_name: "",

    company_email: "",

    phone_one: "",

    phone_two: "",

    address: "",

    business_hours: "",

    booking_url: "",

    whatsapp: "",

    facebook: "",

    instagram: "",

    linkedin: "",

    twitter: "",

    youtube: "",

    tiktok: "",

    google_maps: "",

    seo_title: "",

    seo_description: "",

    footer_text: "",

  });

  // ===============================
  // LOAD SETTINGS
  // ===============================

  useEffect(() => {

    loadSettings();

  }, []);

  async function loadSettings() {

    try {

      const response =
        await API.get(
          "/admin/settings/"
        );

      const data =
        response.data.data;

      if (!data) {

        setLoading(false);

        return;

      }

      setForm({

        company_name:
          data.company_name || "",

        company_email:
          data.company_email || "",

        phone_one:
          data.phone_one || "",

        phone_two:
          data.phone_two || "",

        address:
          data.address || "",

        business_hours:
          data.business_hours || "",

        booking_url:
          data.booking_url || "",

        whatsapp:
          data.whatsapp || "",

        facebook:
          data.facebook || "",

        instagram:
          data.instagram || "",

        linkedin:
          data.linkedin || "",

        twitter:
          data.twitter || "",

        youtube:
          data.youtube || "",

        tiktok:
          data.tiktok || "",

        google_maps:
          data.google_maps || "",

        seo_title:
          data.seo_title || "",

        seo_description:
          data.seo_description || "",

        footer_text:
          data.footer_text || "",

      });

      setLogoPreview(
        data.logo || ""
      );

      setFaviconPreview(
        data.favicon || ""
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  // ===============================
  // INPUT CHANGE
  // ===============================

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });

  }

  // ===============================
  // LOGO
  // ===============================

  function handleLogo(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);

    setLogoPreview(
      URL.createObjectURL(file)
    );

  }

  // ===============================
  // FAVICON
  // ===============================

  function handleFavicon(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      e.target.files?.[0];

    if (!file) return;

    setFaviconFile(file);

    setFaviconPreview(
      URL.createObjectURL(file)
    );

  }

  // ===============================
  // SAVE
  // ===============================

  async function saveSettings() {

    try {

      setSaving(true);

      const formData =
        new FormData();

      Object.entries(form).forEach(
        ([key, value]) => {

          formData.append(
            key,
            String(value)
          );

        }
      );

      if (logoFile) {

        formData.append(
          "logo",
          logoFile
        );

      }

      if (faviconFile) {

        formData.append(
          "favicon",
          faviconFile
        );

      }

      await API.put(

        "/admin/settings/",

        formData,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }

      );

      alert(
        "Website settings updated successfully."
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to update settings."
      );

    } finally {

      setSaving(false);

    }

  }

  if (loading) {

    return (

      <div className="flex h-[60vh] items-center justify-center">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

      </div>

    );

  }

  return (<div className="space-y-8">

  {/* ==========================================
      BRANDING
  ========================================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-white">

      <ImagePlus className="text-yellow-400" />

      Branding

    </h2>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Logo */}

      <div>

        <label className="mb-4 block font-semibold text-white">

          Company Logo

        </label>

        <div className="relative mb-5 h-56 overflow-hidden rounded-2xl border border-dashed border-white/20 bg-[#0B1220]">

          {logoPreview ? (

            <Image
              src={logoPreview}
              alt="Logo"
              fill
              className="object-contain p-6"
            />

          ) : (

            <div className="flex h-full flex-col items-center justify-center gap-4 text-slate-500">

              <UploadCloud size={60} />

              <span>No Logo Selected</span>

            </div>

          )}

        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleLogo}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      {/* Favicon */}

      <div>

        <label className="mb-4 block font-semibold text-white">

          Website Favicon

        </label>

        <div className="relative mb-5 h-56 overflow-hidden rounded-2xl border border-dashed border-white/20 bg-[#0B1220]">

          {faviconPreview ? (

            <Image
              src={faviconPreview}
              alt="Favicon"
              fill
              className="object-contain p-10"
            />

          ) : (

            <div className="flex h-full flex-col items-center justify-center gap-4 text-slate-500">

              <UploadCloud size={60} />

              <span>No Favicon Selected</span>

            </div>

          )}

        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFavicon}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

    </div>

  </div>

  {/* ==========================================
      GENERAL INFORMATION
  ========================================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 flex items-center gap-3 text-2xl font-black text-white">

      <Building2 className="text-yellow-400" />

      General Information

    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Company Name

        </label>

        <input
          name="company_name"
          value={form.company_name}
          onChange={handleChange}
          placeholder="M.Y Hamdala Travel & Tours Ltd"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Company Email

        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-4 text-yellow-400"
          />

          <input
            name="company_email"
            value={form.company_email}
            onChange={handleChange}
            placeholder="info@myhamdala.com"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-11 pr-4 text-white"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Phone Number

        </label>

        <div className="relative">

          <Phone
            size={18}
            className="absolute left-4 top-4 text-green-400"
          />

          <input
            name="phone_one"
            value={form.phone_one}
            onChange={handleChange}
            placeholder="+234..."
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-11 pr-4 text-white"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Alternative Phone

        </label>

        <input
          name="phone_two"
          value={form.phone_two}
          onChange={handleChange}
          placeholder="+234..."
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

      <div className="md:col-span-2">

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Office Address

        </label>

        <div className="relative">

          <MapPin
            size={18}
            className="absolute left-4 top-4 text-red-400"
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Company Head Office Address"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-11 pr-4 text-white"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Business Hours

        </label>

        <div className="relative">

          <Clock3
            size={18}
            className="absolute left-4 top-4 text-cyan-400"
          />

          <input
            name="business_hours"
            value={form.business_hours}
            onChange={handleChange}
            placeholder="Mon - Fri | 8:00 AM - 6:00 PM"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-11 pr-4 text-white"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-300">

          Booking URL

        </label>

        <div className="relative">

          <Globe
            size={18}
            className="absolute left-4 top-4 text-blue-400"
          />

          <input
            name="booking_url"
            value={form.booking_url}
            onChange={handleChange}
            placeholder="https://booking.myhamdala.com"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1220] py-4 pl-11 pr-4 text-white"
          />

        </div>

      </div>

    </div>

  </div>  {/* ==========================================
      SOCIAL MEDIA
  ========================================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">
      Social Media
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <input
        name="facebook"
        value={form.facebook}
        onChange={handleChange}
        placeholder="Facebook URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

      <input
        name="instagram"
        value={form.instagram}
        onChange={handleChange}
        placeholder="Instagram URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

      <input
        name="linkedin"
        value={form.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

      <input
        name="twitter"
        value={form.twitter}
        onChange={handleChange}
        placeholder="X (Twitter) URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

      <input
        name="youtube"
        value={form.youtube}
        onChange={handleChange}
        placeholder="YouTube URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

      <input
        name="tiktok"
        value={form.tiktok}
        onChange={handleChange}
        placeholder="TikTok URL"
        className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
      />

    </div>

  </div>

  {/* ==========================================
      CONTACT & SEO
  ========================================== */}

  <div className="grid gap-8 lg:grid-cols-2">

    {/* Contact */}

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <h2 className="mb-8 text-2xl font-black text-white">
        Contact
      </h2>

      <div className="space-y-6">

        <input
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="WhatsApp Number"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

        <input
          name="google_maps"
          value={form.google_maps}
          onChange={handleChange}
          placeholder="Google Maps Link"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

    </div>

    {/* SEO */}

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

      <h2 className="mb-8 text-2xl font-black text-white">
        SEO
      </h2>

      <div className="space-y-6">

        <input
          name="seo_title"
          value={form.seo_title}
          onChange={handleChange}
          placeholder="SEO Title"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

        <textarea
          rows={5}
          name="seo_description"
          value={form.seo_description}
          onChange={handleChange}
          placeholder="SEO Description"
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-white"
        />

      </div>

    </div>

  </div>

  {/* ==========================================
      FOOTER
  ========================================== */}

  <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

    <h2 className="mb-8 text-2xl font-black text-white">
      Footer
    </h2>

    <textarea
      rows={6}
      name="footer_text"
      value={form.footer_text}
      onChange={handleChange}
      placeholder="Copyright © 2026 M.Y Hamdala Travel & Tours. All Rights Reserved."
      className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-5 text-white"
    />

  </div>

  {/* ==========================================
      SAVE
  ========================================== */}

  <div className="flex justify-end">

    <button
      onClick={saveSettings}
      disabled={saving}
      className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-300 disabled:opacity-50"
    >

      <Save size={20} />

      {saving
        ? "Saving..."
        : "Save Website Settings"}

    </button>

  </div>

</div>
  );
}