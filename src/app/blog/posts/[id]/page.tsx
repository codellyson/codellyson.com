import { Date } from "@/components/date";
import { getPostData } from "@/lib/post";
import { TypographyStylesProvider } from "@mantine/core";

// export const runtime = "edge";

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
      <h1 className="font-extrabold text-xl mb-1">{postData.title}</h1>
      <br />
      <div className="text-gray-500 font-medium  ">
        <Date dateString={postData.pubDatetime} />
      </div>

      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </TypographyStylesProvider>
    </>
  );
}
