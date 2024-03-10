import { Date } from "@/components/date";
import { getAllPostIds, getPostData } from "@/lib/post";

export const runtime = 'edge';

type PostData = {
  title: string;
  pubDatetime: string;
  contentHtml: string;
};

type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id);

  return (
    <>
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

      <div className="text-gray-500 font-medium mb-5">
        <Date dateString={postData.pubDatetime} />
      </div>

      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}
