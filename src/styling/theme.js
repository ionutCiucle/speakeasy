import { createMuiTheme } from '@material-ui/core/styles';
import { primaryBlue, white } from './colors';

export const speakeasyTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryBlue,
      contrastText: white
    },
    secondary: {
      main: white
    }
  }
});