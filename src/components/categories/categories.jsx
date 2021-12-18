import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {/*если в items что-то есть, выполняется map, если массив пустой, то ниче не делать*/}
        {items && items.map((item, i) => {
          return <li
            className={activeCategory === i ? 'active' : ''}
            key={`${item}_${i}`}
            onClick={() => onClickItem(i)}
          >
            {item}
          </li>
        })}
      </ul>
    </div>
  )
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired
};

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories;