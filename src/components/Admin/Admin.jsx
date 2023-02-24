import "./Admin.css";
import axios from 'axios'; 
import {useState, useEffect} from 'react';
import Time from "../Time/Time";

function Admin() {

	useEffect(() => {
		console.log('in useEffect');
		getOrders();
	  }, []);

	const [allOrders, setAllOrders] = useState([]);

	const getOrders = () => {
		axios({
			method: 'GET', 
			url: '/api/order'
		})
		.then((response) => {
			console.log('in get orders')
			console.log(response);
			setAllOrders(response.data)

		})
		.catch((err) => {
			alert('error getting orders')
			console.log(err)
		})
	}

	

	return (
		<>
		<h1>Admin</h1>
		<table>
        	<tbody>
           	 	<tr>
              		<th>Name</th>
			 		<th>Time Order Placed</th>
			  		<th>Type</th>
			  		<th>Cost</th>
            	</tr>
			{allOrders.map((order, i) => 
				<tr key={i}>
					<td>{order.customer_name}</td>
					<Time timeStamp={order.time} />
					<td>{order.type}</td>
					<td>{order.total}</td>
				</tr>
				)}
			</tbody>
        </table>
		</>
	);

}

export default Admin;
