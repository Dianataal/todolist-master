import './TodoItem.css'
import TodoDate from "./TodoDate";
import Card from "../UI/Card";


const TodoItem = (props) => {

    return (
        <li>
        <Card className="expense-item">
            <TodoDate date={props.date}></TodoDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
        </li>
    )

}

export default TodoItem