import SimpleBarReact from "simplebar-react";
// material
import { alpha, styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

interface sxAttr {
  sx: string;
}

const RootStyle = styled("div")({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});

export default function Scrollbar({ children, sx, ...other }: { children: any; sx: string }) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarReact timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarReact>
    </RootStyle>
  );
}
