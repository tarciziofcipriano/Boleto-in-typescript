import React, { PureComponent } from 'react';

export class Html extends PureComponent {
  render() {
    return (
      <html>
        <head>
          <meta
            charSet="utf-8"
          />
          <meta
            httpEquiv="X-UA-Compatible"
            content="IE=edge,chrome=1"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
        </head>
        <body style={{ margin: 0 }}>
          {this.props.children}
        </body>
      </html>
    );
  }
}
