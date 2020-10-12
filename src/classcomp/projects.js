import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: "Book Lovers",
        git: "https://github.com/Leaf1204/bookshelf",
        live: "https://booklovers.vercel.app/",
        img: "https://i.imgur.com/xgDKO61.png?1"
      },
      {
        name: "Dopamine Box",
        git: "https://github.com/Leaf1204/project2",
        live: "https://lfzenproject2.herokuapp.com/",
        img: "https://i.imgur.com/T5C09bS.png?1"
      },
      {
        name: "Mock Store website",
        git:
          "https://git.generalassemb.ly/lafrisinger/seirf-zen-hw/tree/master/unit_2/w11d3/mongoose_store",
        live: "",
        img: ""
      }
    ];
  }
  render() {
    return this.state.map((item) => {
      return (
        <div className="flex_card">
          <h3>{item.name}</h3>
          <a href={item.git}>
            <h6>{item.git}</h6>
          </a>
          <a href={item.live}>
            <h6>{item.live}</h6>
          </a>

          <img className="image" src={item.img} alt="" />
        </div>
      );
    });
  }
}

export default Project;
