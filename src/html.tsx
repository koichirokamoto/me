import React from 'react';

interface HtmlProps {
  htmlAttributes: object;
  headComponents: Array<any>;
  bodyAttributes: object;
  preBodyComponents: Array<any>;
  body: string;
  postBodyComponents: Array<any>;
}

const links = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,50',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  },
];

export default class HTML extends React.Component<HtmlProps, {}> {
  public render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          {links.map(({rel, href}, index) => {
            return <link rel={rel} href={href} />;
          })}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
