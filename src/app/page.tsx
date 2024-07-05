import { isDatabaseObjectResponse } from "@/component/notion/notion-typecheck";
import { getDatabase } from "@/repository/notion";
import { NotionDatabaseResponseResult } from "@/types/notion.type";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // TODO: 型情報を作成する
  const posts: PageObjectResponse[] = await getDatabase();
  console.debug("posts object: ", posts[0]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header></header>
      <h2 className="font-bold">Home Page Title</h2>
      <TopPageContents />
      <div className="">Recent Posts</div>
      <div>
        {posts.map((post: any) => {
          // const properties = post.properties;
          const id = "sample_id";
          // プロパティ 'properties' は型 'NotionDatabaseResponseResult' に存在しません　のエラーが出る
          const slug = post.properties?.Slug?.rich_text[0].text.content;
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
