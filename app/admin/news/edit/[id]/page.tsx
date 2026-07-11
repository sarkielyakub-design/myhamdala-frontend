import NewsForm from "@/components/admin/news/NewsForm";
import { getNewsById } from "@/lib/api";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditNewsPage({
  params,
}: Props) {

  const article = await getNewsById(params.id);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-white">
          Edit Article
        </h1>

        <p className="mt-2 text-slate-400">
          Update article information.
        </p>
      </div>

      <NewsForm article={article} />

    </div>
  );
}