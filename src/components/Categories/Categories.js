import React from "react";
import { connect } from "react-redux";
import { activateCategory } from '../../store/storeReducer'

// can do Categories({categories}) to deconstruct categories directly out of props
function Categories(props) {

  console.log('CATEGORIES COMPONENT PROPS', props);

  return (
    <>
      <section id="categories">
        <h2>{props.activeCategory}</h2>
        {props.categories.map((category) => {
          return (
            <button onClick={() => props.activateCategory(category)} key={category.normalizedName}>{category.displayName}</button>
          )
        })}
      </section>
    </>
  );
}

const action = {type: 'ACTIVE_CATEGORY', payload: category.normalizedName}



const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
  }
}

const mapDispatchToProps = {
  activateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);