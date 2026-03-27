export function HtmlSnippet({ html, className = '', as: Tag = 'div' }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function SvgSnippet({ svg, className = '' }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}
