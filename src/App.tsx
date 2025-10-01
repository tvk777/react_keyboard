import React from 'react';

type State = {
  pressedKey: null | string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  HandleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.HandleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.HandleKeyUp);
  }

  render() {
    const message = this.state.pressedKey
      ? `The last pressed key is [${this.state.pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
