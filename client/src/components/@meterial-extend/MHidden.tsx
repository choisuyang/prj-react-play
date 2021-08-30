import { useMediaQuery } from "@material-ui/core";

interface MHiddenWidth {
  xsDown: string;
  smDown: string;
  mdDown: string;
  lgDown: string;
  xlDown: string;
  xsUp: string;
  smUp: string;
  mdUp: string;
  lgUp: string;
  xlUp: string;
}

export default function MHidden({ width, children }: { width: string; children: any }) {
  const breakpoint = width.substring(0, 2);
  const hiddenUp = useMediaQuery((theme: any) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: any) => theme.breakpoints.down(breakpoint));

  if (width.includes("Down")) {
    return hiddenDown ? null : children;
  }

  if (width.includes("Up")) {
    return hiddenUp ? null : children;
  }

  return null;
}
