import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const AppProviders = ({children}:any) => {
    const theme: any = createTheme({
        palette: {
          mode: "dark",
        },
      });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
