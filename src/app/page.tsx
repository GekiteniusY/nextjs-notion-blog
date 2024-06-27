import Image from "next/image";

export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? "NOTION_DATABASE_ID";

function getPosts() {
  // TODO: ブログ記事の取得処理
}

export default function Home() {
  // TODO: 型情報を作成する
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header></header>
      <h2>Home Page Title</h2>
      <div>Recent Posts</div>
      <div>
        {}
      </div>
    </main>
  );
}
