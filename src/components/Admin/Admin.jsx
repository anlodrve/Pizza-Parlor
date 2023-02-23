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

	return (
		<>
		<h1>Admin</h1>
		<tr>
			{allOrders.map((order, i) => 
			<td key={i}>{order.customer_name}</td>
			</tr>
			) }


<table>
        <tbody>
            <tr>
              <th>Airline</th>
            </tr>
            <AirlineList />
            </tbody>
        </table>

		<tr>
            {airlines.map(airline => {
                return(
                    <td>{airline}</td>
                )
            })}
        </tr>

		</>
	);

}

export default Admin;
