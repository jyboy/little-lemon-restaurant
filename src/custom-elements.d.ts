import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'github-corners': DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        position?: string;
        width?: number;
        height?: number;
        href?: string;
        target?: string;
      };
    }
  }
}
