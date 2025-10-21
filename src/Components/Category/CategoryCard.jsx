import classes from "./category.module.css"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

function CategoryCard({data}) {
    console.log(data)
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span><h2>{data.title}</h2></span>

        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

CategoryCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard
