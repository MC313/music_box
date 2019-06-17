import App, { Container } from 'next/app';

import { StoreProvider } from '../store';

class musicApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
      </Container>
    );
  }
}

export default musicApp;