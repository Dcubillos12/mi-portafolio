function Footer() {
  return <h1>Footer</h1>;
}

function Contenido() {
  return (
    <>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

function Header() {
  return <h1>Header</h1>;
}

function Banner() {
  return (
    <>
      <h1>Banner</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Contenido />
      <Footer />
    </>
  );
}

export default App;
