// ブロックのテキストを解釈して表示するコンポーネント

// TODO: titleの型付け
export default function NotionText({ title }:any) {
  if (!title) {
    return null;
  }

  // TODO: valueの型付け
  return title.map((value: any) => {
    const {
      annotations: {
        bold, code, color, italic, strikethrough, underline,
      },
      text,
    } = value;
    return (
      <span
        // className={[
        //   bold ? styles.bold : '',
        //   code ? styles.code : '',
        //   italic ? styles.italic : '',
        //   strikethrough ? styles.strikethrough : '',
        //   underline ? styles.underline : '',
        // ].join(' ')}
        style={color !== 'default' ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
}
