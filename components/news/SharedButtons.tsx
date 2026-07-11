"use client";

import { useState } from "react";

import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegram,
  FaXTwitter,
  FaLink,
} from "react-icons/fa6";

interface Props {
  article: any;
}

export default function ShareButtons({
  article,
}: Props) {

  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = article.title;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>

      <h3 className="text-2xl font-bold text-slate-900">
        Share this Article
      </h3>

      <p className="mt-2 text-slate-600">
        Help others stay informed by sharing this article.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        {/* WhatsApp */}

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${shareText} ${url}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-green-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          <FaWhatsapp size={20} />

          WhatsApp
        </a>

        {/* Facebook */}

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-blue-700
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-800
          "
        >
          <FaFacebookF size={18} />

          Facebook
        </a>

        {/* X */}

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-black
            px-6
            py-3
            font-semibold
            text-white
          "
        >
          <FaXTwitter size={18} />

          X
        </a>

        {/* Telegram */}

        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-sky-500
            px-6
            py-3
            font-semibold
            text-white
            hover:bg-sky-600
          "
        >
          <FaTelegram size={18} />

          Telegram
        </a>

        {/* Copy Link */}

        <button
          onClick={copyLink}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-slate-300
            px-6
            py-3
            font-semibold
            transition
            hover:bg-slate-100
          "
        >
          <FaLink size={18} />

          {copied ? "Copied!" : "Copy Link"}
        </button>

      </div>

    </div>
  );
}