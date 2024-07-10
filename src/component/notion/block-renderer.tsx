import NotionText from "../notion-text";

type Block = {
  id: string;
  blockType: string;
  value: any; // TODO: 型付けを頑張るか後で検討
};

// TODO: implement
export function renderBlock(block: Block) {
  const { id, blockType, value } = block;

  switch (blockType) {
    case "paragraph":
      return (
        <p>
          <NotionText></NotionText>
        </p>
      );
    case "heading_1":
      return <h1></h1>;
    case "heading_2":
      return <h2></h2>;
    case "heading_3":
      return <h3></h3>;
    case "bulleted_list": {
      return <ul></ul>;
    }
    case "numbered_list": {
      return <ol></ol>;
    }
    case "bulleted_list_item":
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
    case "child_page":
      return (
        <div>
          <strong></strong>
        </div>
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
    case "code":
      return (
        <pre>
          <code></code>
        </pre>
      );
    case "file": {
      return (
        <figure>
          <div></div>
        </figure>
      );
    }
    case "bookmark": {
      return <a></a>;
    }
    case "table": {
      return (
        <table>
          <tbody></tbody>
        </table>
      );
    }
    case "column_list": {
      return <div></div>;
    }
    case "column": {
      return <div></div>;
    }
    default:
  }
}
