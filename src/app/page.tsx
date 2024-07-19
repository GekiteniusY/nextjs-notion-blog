import { isDatabaseObjectResponse } from "@/component/notion/notion-typecheck";
import { getDatabase } from "@/repository/notion";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts: PageObjectResponse[] = await getDatabase();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header></header>
      <h2 className="font-bold">Home Page Title</h2>
      <TopPageContents />
      <div className="">Recent Posts</div>
      <div>
        {posts.map((post: PageObjectResponse) => {
          const properties = post.properties;
          const id = "sample_id";
          const slug = properties.Slug;
          // console.debug('properties.Slug :', slug);
          const text: RichTextItemResponse[] | null = slug.type === 'rich_text' ? slug.rich_text : null;
          console.log('\n')
          console.log('============================')
          // console.log(text);
          // if (text != null) {
          //   const text2 = text![0] as TextRichTextItemResponse;
          //   console.log(text2.type)
          // }

          // 以下のコードだと型の同定、プロパティへのアクセスが可能
          let slugText: string;
          if (text != null && text.length > 0) {
            const slugText = text[0] as TextRichTextItemResponse;
            if (slugText && slugText.text) {
                console.log(slugText.plain_text);
            } else {
                console.log('text2 or text2.text is undefined');
                return;
            }
          } else {
              console.log('text is null or empty');
              return;
          }
          console.log('============================')


          // プロパティ 'properties' は型 'NotionDatabaseResponseResult' に存在しません　のエラーが出る
          // const title = post.properties?.Title?.rich_text;
          const title = "sample_title";
          const date = "sample_date";
          const abstract = "";

          return (
            <li key={id} className="">
              <Link href={`/article/${slug}`}>
                {/* title */}
                <h3 className="">{title}</h3>
                {/* date */}
                <p>{date}</p>
                {/* abstract */}
                <p>{abstract}</p>
              </Link>
            </li>
          );
        })}
      </div>
    </main>
  );
}

// Customize your contents
function TopPageContents(): JSX.Element {
  return <></>;
}
