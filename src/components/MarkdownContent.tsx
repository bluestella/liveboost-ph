export default function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="md"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

