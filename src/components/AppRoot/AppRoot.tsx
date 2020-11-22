import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { SSRProvider, OverlayProvider } from "react-aria";

export interface Props {
  children?: ReactNode;
}

const AppRoot: FC = ({ children }: Props) => (
  <ThemeProvider>
    <SSRProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </SSRProvider>
  </ThemeProvider>
);

export default AppRoot;
