import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {WithStyles, withStyles} from '@material-ui/core/styles';
import Layout from '../components/layout';
import withRoot from '../withRoot';

const About: React.StatelessComponent = () => (
  <Layout>
    <div>
      <Typography variant="display1">About me</Typography>
    </div>
  </Layout>
);

export default withRoot(withStyles({})(About));
