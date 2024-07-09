export type BlogPost = {
  id: string; // 記事の一意な識別子
  title: string; // 記事のタイトル
  content: string; // 記事の本文 // TODO: Notionからもってきたデータ型に定義し直す
  author: string; // 著者の名前
  createdAt: Date; // 作成日時
  updatedAt: Date; // 更新日時
  tags: string[]; // 記事に関連するタグ
  category: string; // 記事のカテゴリ
  isPublished: boolean; // 公開状態
};

// サンプルデータ
const examplePost: BlogPost = {
  id: "1",
  title: "My First Blog Post",
  content: "This is the content of the blog post.",
  author: "John Doe",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-02"),
  tags: ["typescript", "blog"],
  category: "Programming",
  isPublished: true,
};
