import { categoryInfos } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => {
        return <CategoryCard key={index} data={infos} />;
      })}
    </section>
  );
}

export default Category;
