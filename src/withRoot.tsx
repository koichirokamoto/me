import * as React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function withRoot<Props>(Component: React.ComponentType) {
  class WithRoot extends React.Component<Props, {}> {
    public render() {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
