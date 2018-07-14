import * as React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import {
  createStyles,
  withStyles,
  WithStyles,
  StyleRulesCallback,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles: StyleRulesCallback<
  'root' | 'ul' | 'linkItem' | 'listLink'
> = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '1.5rem',
  },
  ul: {
    listStyle: 'none',
  },
  linkItem: {
    textDecoration: 'none',
    color: '#fafafa',
  },
  listLink: {
    marginRight: '1rem',
    float: 'left',
  },
});

interface ListLinkProps extends WithStyles<'listLink' | 'linkItem'> {
  to: string;
}

class ListLink extends React.Component<ListLinkProps, {}> {
  public render() {
    const {classes} = this.props;
    return (
      <li className={classes.listLink}>
        <Link to={this.props.to} className={classes.linkItem}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

const MuiListLink = withRoot<{to: string}>(
  withStyles<'listLink' | 'linkItem'>(styles)(ListLink)
);

class DefaultLayout extends React.Component<WithStyles<typeof styles>, {}> {
  public render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Helmet title="KOICHIROKAMOTO" />
        <AppBar position="static">
          <ToolBar>
            <Link to="/" className={classes.linkItem}>
              <Typography
                style={{fontWeight: 'bold'}}
                variant="title"
                color="inherit"
              >
                KOICHIROKAMOTO
              </Typography>
            </Link>
            <ul className={classes.ul}>
              <MuiListLink to="/about">
                <Typography variant="title" color="inherit">
                  About
                </Typography>
              </MuiListLink>
              <MuiListLink to="/contact">
                <Typography variant="title" color="inherit">
                  Contact
                </Typography>
              </MuiListLink>
            </ul>
          </ToolBar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default withRoot(
  withStyles<'root' | 'ul' | 'linkItem'>(styles)(DefaultLayout)
);
