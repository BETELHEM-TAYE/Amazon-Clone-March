import {categoryInfo} from "./CategoryFullinfo"

import classes from "./category.module.css"
import CategoryCard from './CategoryCard';
function Category() {
  return (
    <div>
      <section className={classes.Category_container}>
        {
        categoryInfo.map((infos,i)=>
          
          
           < CategoryCard key={i} data = {infos}/>
        )
        }
        </section>
        {/* {console.log(categoryInfo)} */}
    </div>
  );
}

export default Category
