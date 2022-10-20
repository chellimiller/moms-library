import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';

const snapshot = `
<div
  className="app"
>
  <h1>
    Hello World
  </h1>
</div>
`;

describe('App', () => {
  it('should match snapshot', () => {
    // Act
    const tree = renderer.create(<App />).toJSON();

    // Assert
    expect(tree).toMatchInlineSnapshot(snapshot);
  });
});
