function Home() {
  return (
    <div className="main-content">
      <header
  className="hero"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + "/spiderman1.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h1 className="comic-title">Friendly Neighborhood Developer</h1>
  <p className="hero-sub">Just like Spider-Man – Fast, Reliable, and Always Ready to Code!</p>
</header>


      <section className="actions">
        <div className="action-box">
          <h3>Find Work</h3>
          <p>Browse from thousands of listed open positions</p>
          <button className="black-btn">Swing to Jobs</button>
        </div>
        <div className="action-box">
          <h3>List a Position</h3>
          <p>Post your requirement. The best professionals will catch it!</p>
          <button className="pink-btn">Web Up Talent</button>
        </div>
      </section>

      <footer className="footer">
        <button className="view-btn">Explore All Missions</button>
      </footer>
    </div>
  );
}
export default Home;