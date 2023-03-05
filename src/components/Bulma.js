import IMG from "../assets/favicon.png";

export default function Bulma() {
  function Card() {
    return (
      <div className="card m-auto" style={{ width: "500px" }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={IMG} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={IMG} alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Hawaiian Fox</p>
              <p className="subtitle is-6">@hawaiianFox</p>
            </div>
          </div>

          <div className="content">
            Check out Bulma io Documentation.
            <a href="https://bulma.io/" rel="noreferrer">#css</a>{" "}
            <a href="https://bulma.io/" rel="noreferrer">#responsive</a>{" "}
            <a href="https://bulma.io/" rel="noreferrer">#awesome</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-dark" style={{ marginTop: "5rem" }}>
      <h2 className="text-center h1 m-2">Bulma Library</h2>
      <Card />
    </div>
  );
}
