import React from 'react';
import Categories from "../components/categories";
import SortPopup from "../components/sortPopup";
import PizzaBlock from "../components/pizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizza } from "../redux/actions/cart";
import LoadingBlock from "../components/pizzaBlock/loadingBlock";

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  {name: 'популярности', type: 'rating'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'}
];

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas, category, isLoaded }) => {
    return {
      items: pizzas.items,
      category,
      isLoaded: pizzas.isLoaded
    }
  });
  const { category, sortBy } = useSelector(({filters}) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));

  }, [sortBy, category]);

  const onChangeCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  const onClickSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  });

  const addPizzaToCart = React.useCallback((item) => {
    dispatch(addPizza(item));
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categories}
          onClickItem={onChangeCategory}
        />
        <SortPopup
          items={sortItems}
          activeSortType={ sortBy }
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ?
          items.map((item) =>
            <PizzaBlock
              key={item.id}
              { ...item }
              addedCnt={cartItems[item.id] && cartItems[item.id].items.length}
              onClickAddPizza={addPizzaToCart}
            />
           ) :
            Array(10)
              .fill(0)
              .map((_, index) => (<LoadingBlock key={index}/>))
        }
      </div>
    </div>
  )
};

export default Home;