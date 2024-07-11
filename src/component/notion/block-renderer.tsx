import NotionCode from "./notion-code";
import NotionText from "./notion-text";

type Block = {
  id: string;
  blockType: string;
  value: any; // TODO: 型付けを頑張るか後で検討
};

// TODO: implement

// Block objectのレンダー用関数
// https://developers.notion.com/reference/block
// アルファベット順

export function renderBlock(block: Block) {
  const { id, blockType, value } = block;

  switch (blockType) {
    // Bookmark
    case "bookmark": {
      return <a></a>;
    }
    // Breadcrumb(パンくずリスト)
    case "breadcrumb": {
      return <a></a>;
    }
    case "bulleted_list_item":{
      return <a></a>
    }
    // https://extns.notion.site/d3d1b61749b942d592d69c9673ffb008
    case "callout":{
      return <a></a>
    }
    // TODO: サポート必要？？？
    case "child_database":{
      return <a></a>
    }
    case "child_page":
      return (
        <div>
          <strong></strong>
        </div>
      );
    // TODO: コードハイライトがされるようにする
    case "code":
      return (
        <pre>
          <NotionCode></NotionCode>
        </pre>
      );
    case "column_list": {
      return <div></div>;
    }
    case "column": {
      return <div></div>;
    }
    case "paragraph":
      return (
        <p>
          <NotionText></NotionText>
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <NotionText></NotionText>
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <NotionText></NotionText>
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <NotionText></NotionText>
        </h3>
      );
    // TODO: bulleted_listは存在しないのでは？？？
    case "bulleted_list": {
      return <ul></ul>;
    }
    case "numbered_list": {
      return <ol></ol>;
    }
    // TODO: 一緒の処理にするか後で検討する
    // case "bulleted_list_item":
    case "numbered_list_item":
      return <li></li>;
    case "to_do":
      return (
        <div>
          <label>
            <input type="checkbox" />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary></summary>
        </details>
      );
    case "image": {
      return (
        <figure>
          <img />
          <figcaption></figcaption>
        </figure>
      );
    }
    case "divider":
      return <hr />;
    case "quote":
      return <blockquote></blockquote>;
    case "file": {
      return (
        <figure>
          <div></div>
        </figure>
      );
    }
    case "table": {
      return (
        <table>
          <tbody></tbody>
        </table>
      );
    }
    default:
  }
}
