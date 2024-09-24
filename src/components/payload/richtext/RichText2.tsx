import { PayloadLexicalReactRenderer } from './payloadLexicalReactRenderer'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  return <PayloadLexicalReactRenderer content={content} />
}

export default RichText
