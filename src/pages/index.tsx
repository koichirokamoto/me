import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      totalCount: string;
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            date: string;
          };
          fields: {
            slug: string;
          };
          excerpt: string;
        };
      }[];
    };
  };
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const {data} = this.props;
    return (
      <Layout>
        <div>
          <h1>Amazing Pandas Eating Things</h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({node}, index) => {
            return (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title}{' '}
                    <span>- {node.frontmatter.date}</span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
