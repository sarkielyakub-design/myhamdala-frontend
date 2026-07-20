"use client";

import { useEffect } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Undo,
  Redo,
  Link2,
  ImagePlus,
} from "lucide-react";

interface NewsEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NewsEditor({
  value,
  onChange,
}: NewsEditorProps) {

  const editor = useEditor({

    extensions: [

      StarterKit,

      Placeholder.configure({

        placeholder:
          "Start writing your article...",

      }),

      Link.configure({

        openOnClick: false,

      }),

      Image,

    ],

    content: value,

    onUpdate({ editor }) {

      onChange(
        editor.getHTML()
      );

    },

  });

  useEffect(() => {

    if (!editor) return;

    if (
      value !== editor.getHTML()
    ) {

      editor.commands.setContent(
        value || "",
        {}
      );

    }

  }, [value, editor]);

  if (!editor) return null;

  return (

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]">

      <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Bold size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Italic size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 1,
              })
              .run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Heading1 size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Heading2 size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <List size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <ListOrdered size={18} />
        </button>

        <button
          type="button"
          onClick={() => {

            const url = prompt(
              "Enter URL"
            );

            if (!url) return;

            editor
              .chain()
              .focus()
              .setLink({
                href: url,
              })
              .run();

          }}
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Link2 size={18} />
        </button>

        <button
          type="button"
          onClick={() => {

            const url = prompt(
              "Enter Image URL"
            );

            if (!url) return;

            editor
              .chain()
              .focus()
              .setImage({
                src: url,
              })
              .run();

          }}
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <ImagePlus size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().undo().run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Undo size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().redo().run()
          }
          className="rounded-xl p-3 hover:bg-white/10"
        >
          <Redo size={18} />
        </button>

      </div>

      <EditorContent
        editor={editor}
        className="min-h-[500px] p-6 text-white"
      />

    </div>

  );

}