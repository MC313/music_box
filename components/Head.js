import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body { 
        width: 100%;
        height: 100vh;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
      }
      #__next {
        height: 100%;
      }
    `}</style>
  </div>
)