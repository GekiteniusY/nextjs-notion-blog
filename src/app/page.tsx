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
      <h2 className="font-bold">My Tech Note</h2>
      <TopPageContents />
      <div>
        <div className="">Author</div>
        <div>
          {
            // TODO: 自身のポートフォリオサイトへのリンクを作成する
          }
        </div>
      </div>

      <div>
        <div className="">Recent Updates</div>
        <div>
          {
            // TODO: 直近の更新情報を記載する
          }
        </div>
      </div>

      <div>
        <h3>Category</h3>
        <div>
          {
            // TODO: GithubのReadmeにあるようなバッジと記事の数を記載
          }
        </div>
        <div>
          {
            // TODO: カテゴリごとのカードコンポーネントを実装
            // カードコンポーネントではなく、ツリー状にしてもいいかも
          }
        </div>
      </div>
      <div>
        <h3>Today I Learned</h3>

      </div>
      <div>
        {posts.map((post: PageObjectResponse) => {
          let slugText: string;
          const title = "sample_title";
          const date = "sample_date";
          const abstract = "";

          const properties = post.properties;
          const id = post.id;
          console.debug("id: ", id);

          // slugの設定
          const slug = properties.Slug;
          // console.debug('properties.Slug :', slug);
          // properties.Slug : {
          //   id: 'a%3COL',
          //   type: 'rich_text',
          //   rich_text: [
          //     {
          //       type: 'text',
          //       text: [Object],
          //       annotations: [Object],
          //       plain_text: '20240613',
          //       href: null
          //     }
          //   ]
          // }

          const richTextItemResponse: RichTextItemResponse[] | null =
            slug.type === "rich_text" ? slug.rich_text : null;
          // console.debug('RichTextItemResponse: ', richTextItemResponse);
          // RichTextItemResponse:  [
          //   {
          //     type: 'text',
          //     text: { content: '20240613', link: null },
          //     annotations: {
          //       bold: false,
          //       italic: false,
          //       strikethrough: false,
          //       underline: false,
          //       code: false,
          //       color: 'default'
          //     },
          //     plain_text: '20240613',
          //     href: null
          //   }
          // ]

          console.log("\n");
          console.log("============================");
          // 以下のコードだと型の同定、プロパティへのアクセスが可能
          if (richTextItemResponse != null && richTextItemResponse.length > 0) {
            const textRichTextItemResponse =
              richTextItemResponse[0] as TextRichTextItemResponse;
            // console.debug('textRichTextItemResponse: ', textRichTextItemResponse);
            // textRichTextItemResponse:  {
            //   type: 'text',
            //   text: { content: '20240614', link: null },
            //   annotations: {
            //     bold: false,
            //     italic: false,
            //     strikethrough: false,
            //     underline: false,
            //     code: false,
            //     color: 'default'
            //   },
            //   plain_text: '20240614',
            //   href: null
            // }

            if (textRichTextItemResponse && textRichTextItemResponse.text) {
              console.log(textRichTextItemResponse.plain_text);
              slugText = textRichTextItemResponse.plain_text;
            } else {
              console.log("text2 or text2.text is undefined");
              return;
            }
          } else {
            console.log("text is null or empty");
            return;
          }

          return (
            <li key={id} className="">
              <Link href={`/article/${slugText}`}>
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
