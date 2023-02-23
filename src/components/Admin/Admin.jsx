import "./Admin.css";
import axios from 'axios'; 
import {useState, useEffect} from 'react';

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

	const [timeStamp, setTimeStamp ] = useState('');

	function formatTimeStamp(timeStamp) {
	  const [date, time] = timeStamp.split('T');
	  const [year, month, day] = date.split('-');
	  const [hour, minute, seconds] = time.split(':');
	  const timeOfDay = hour > 12 ? 'pm' : 'am';
	  return `${month}/${day}/${year} at ${hour}:${minute}${timeOfDay}`;
	}
	console.log(formatTimeStamp(timeStamp));


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
					<td {(order.time)}>{formatTimeStamp()}</td>
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
