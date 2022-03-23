import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from '../../store/categories.store';


// can do Categories({categories}) to deconstruct categories directly out of props
function Categories(props) {

  // console.log('CATEGORIES COMPONENT PROPS', props);

  const { categories, activeCategory } = useSelector(store => store.categories);
  const dispatch = useDispatch();

  console.log('CATEGORIES', categories);
  console.log('ACTIVE CATEGORY', activeCategory);
  console.log('CHANGE CATEGORY', changeCategory('jackets'));


  return (
    <>
      <section id="categories">
        <h2>{activeCategory.displayName}</h2>
        {categories.map((category, key) => {
          return (
            <button onClick={() => dispatch(changeCategory(category))} key={key}>{category.displayName}</button>
          )
        })}
      </section>
    </>
  );
}

export default Categories;

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories,
//     activeCategory: state.activeCategory,
//   }
// }

// const mapDispatchToProps = {
//   activateCategory
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);