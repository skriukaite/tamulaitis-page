import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const remarkArticleVersionStyles = css`
  .article-version {
    color: ${(props) => props.theme.colors.primaryTextSilent};
    font-size: 0.8rem;
  }
`;
