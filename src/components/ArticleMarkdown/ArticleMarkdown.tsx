import React from 'react';
import { ReactMarkdown, ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkYoutubeVideo from './utils/remarkYoutubeVideo';
import remarkSpotifyEmbed from './utils/remarkSpotifyEmbed';
import * as S from './ArticleMarkdown.styles';

const ArticleMarkdown: React.FC<ReactMarkdownOptions> = ({ children }) => {
  return (
    <S.ArticleContainer>
      <ReactMarkdown
        remarkPlugins={[
          remarkYoutubeVideo,
          remarkSpotifyEmbed,
        ]}
        rehypePlugins={[
          rehypeRaw,
        ]}
        linkTarget="_blank"
      >
        {children}
      </ReactMarkdown>
    </S.ArticleContainer>
  );
};

export default ArticleMarkdown;
