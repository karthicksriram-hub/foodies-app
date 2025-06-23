import style from './meal-grid.module.css'
import MealItem from './meal-items'

export default function MealGrid({meals}){
    return(
        <ul className={style.meals}>
            {meals.map((meal) =>( 
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
                ))}
        </ul>
    )
}