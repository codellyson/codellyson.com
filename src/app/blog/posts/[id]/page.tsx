 import { CustomMDX } from "@/components/custom-mdx";
import { Date } from "@/components/date";
import { getPostData } from "@/lib/post";
import { Button, rem, Text, Title, TypographyStylesProvider } from "@mantine/core";

// export const runtime = "edge";

type PostData = {
  title: string;
  pubDatetime: string;
  content: string;
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
  console.log(postData.content)
  
  return (
    <>
      <Text fw="bolder" my={rem(20)} size={rem(35)}>
        {postData.title}
      </Text>
      <br />
      <div className="text-gray-500 font-medium  ">
        <Date dateString={postData.pubDatetime} />
      </div>
       <CustomMDX source={postData.content} />
 
    </>
  );
    }

