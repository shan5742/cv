import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-900 w-full p-10 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
