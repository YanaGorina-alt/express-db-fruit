const React = require("react")
const Nav = require("../components/Nav")

class Index extends React.Component {
  render() {
    const { vegetables } = this.props
    return(
      <div>
        <h1>Vegetables Index Page</h1>
        <Nav link="/vegetables/new" text="Create a Veg"/>
        <ul>
            {vegetables.map((veg, i) => {
                return (
                    <li key={i}>
                        The {" "}
                        <a href={`/vegetables/${veg._id}`}>
                            {veg.name}
                        </a>{" "}
                        is {veg.color} <br></br>
                        {veg.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}
                        <br />
                    </li>
                );
            })}
        </ul>
    </div>
    )
  }
}

module.exports = Index

