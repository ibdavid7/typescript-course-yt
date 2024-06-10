import MealItem from './MealItem';
import classes from './mealsGrid.module.css'

interface MealsGridProp {
    meals: any[];
}

const MealsGrid = ({ meals } : MealsGridProp) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}

export default MealsGrid;