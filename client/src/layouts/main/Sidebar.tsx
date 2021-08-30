import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { styled } from "@material-ui/core/styles";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from "@material-ui/core";
import { MHidden } from "../../components/@meterial-extend";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

export default function Sidebar({
  isOpenSidebar,
  onCloseSidebar,
}: {
  isOpenSidebar: boolean;
  onCloseSidebar: boolean;
}) {
  const { pathname } = useLocation();

  const renderContent = {};

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
