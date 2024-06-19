import Head from "next/head";
import Text from '../../../component/text';
import Link from "next/link";

export default async function Page({ }) {
  // blokの取得処理

  const title = 'page.properties.Title?.rich_text';

  return (
    <div>
      <Head>
        <title>
        {/* ブログタイトル */}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article >
        <h1 >
          {/* <Text title={title} /> */}
        </h1>
        <section>
          {/* TODO: 取得したブロックを表示する処理 */}

          {/* トップページ遷移用のリンク */}
          <Link href="/" >
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  );
}