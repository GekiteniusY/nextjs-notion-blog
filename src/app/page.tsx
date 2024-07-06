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

          // const slug: string | null =
          //   properties["Slug"].type === "rich_text"
          //     ? properties["Slug"].rich_text[0].type === "text"
          //       ? properties["Slug"].rich_text[0].text.content
          //       : null
          //     : null;

          let slug2: string | null = null;
          if (properties.Slug.type === 'rich_text') {
            // if (properties.Slug.rich_text[0].type === 'text') {
            //   // console.debug('DEBUG slug2 :', properties.Slug.rich_text[0].text.content);
            // } else{
            //   slug2 = null;
            // }
            const rich_text = properties.Slug.rich_text[0] as TextRichTextItemResponse;
            console.debug(rich_text);


            // console.debug(obj);
            slug2 = 'ok'
          } else {
            slug2 = null;
          }
          console.debug('slug2 :', slug2);

          // rich_text[0].text.content;
          // .rich_text[0].text.content;

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
