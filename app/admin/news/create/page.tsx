import NewsForm from "@/components/admin/news/NewsForm";

export default function CreateNewsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-white">
          Create News Article
        </h1>

        <p className="mt-2 text-slate-400">
          Create and publish a new article.
        </p>
      </div>

      <NewsForm />

    </div>
  );
}