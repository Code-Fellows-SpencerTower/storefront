import React from "react";
import { connect } from "react-redux";

function Categories(props) {

  return (
    <>
      <section id="categories">
        {props.categories.map((category, key) => {
          return (
            <p key={key}>{category.displayName}</p>
          )
        })}
      </section>
      <button onClick={() => { }}>Filter</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}


export default connect(mapStateToProps)(Categories);