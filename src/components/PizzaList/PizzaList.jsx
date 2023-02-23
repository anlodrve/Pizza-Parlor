import "./PizzaList.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PizzaItem from "react";

function PizzaList({order,fetchOrders}) {

const dispatch = useDispatch ();
	useEffect(()=> {
		getPizzas();
		// deletePizza();
	},[])

	const history = useHistory();

	const sendToForm = () => {
		history.push('/form')
		console.log(sendToForm)
	} 

	const [isButtonClick,setIsButtonClick] = useState(false)


	const getPizzas = () => {
		axios ({
			method: 'GET',
			url:	'/api/pizza'
		}) .then ((response)=>{
			console.log('in GET pizza')
			dispatch ({
				type: 'SET_CART',
				payload: response.data
			})
		}).catch ((error)=>{
			console.log('Error in get pizza',error)
		})

	};

	// const deletePizza = ()=> {
    //     axios.delete(`/api/order/${order.id}`)
    //     .then(() => {
    //         console.log('delete order success');
    //         fetchOrders();
	// 		dispatch ({
	// 			type: 'SET_CART',
	// 			payload:response.data	
	// 		})
    //     })
    //     .catch
	// 	(err => console.log('delete order failed', err))
    // }

	function deletePizza () {
	dispatch ({
		type: 'REMOVE_FROM_CART',
		payload: response.data
	})
		setIsButtonClick(isButtonClick)
	}
	
	
	const pizzaList = useSelector ((store)=> store.pizzaList)

	return ( 
	
		<div>
			<h1>Pizza</h1>
		{pizzaList?.map((pizza) => 
		<PizzaItem key={pizza.id} pizza={pizza}
	/> 
	)} 

	<button className='pizzaNextBtn' onClick={sendToForm}>Next</button>
	<button onClick={deletePizza}> Delete </button> 

	</div>
			
	
	)
}

export default PizzaList;
