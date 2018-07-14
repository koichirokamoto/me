import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  withStyles,
  WithStyles,
  StyleRulesCallback,
} from '@material-ui/core/styles';
import Layout from '../components/layout';
import withRoot from '../withRoot';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textDecoration: `underline solid ${theme.palette.primary.dark}`,
  },
});

const Contact: React.StatelessComponent<WithStyles<'root'>> = ({classes}) => (
  <Layout>
    <div>
      <a href="mailto:koichirokamoto@gmail.com" className={classes.root}>
        <Typography variant="display1">koichirokamoto@gmail.com</Typography>
      </a>
    </div>
  </Layout>
);

export default withRoot(withStyles(styles)(Contact));
