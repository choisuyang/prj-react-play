import { Box } from "@material-ui/core";

export default function Logo({ sx }: { sx?: object }) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}
