import './App.css'
import ChevonDown from './ui/chevonDown'
import { useQuery } from 'react-query';
import { setProductList, setSearchQuery } from './lib/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  function fetchProducts() {
    return async dispatch => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        dispatch(setProductList(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

	return (
		<div className='container bg-grey h-screen'>
			{/* top card */}
			<div className='card'>
				<div className='card-header'>
					<h1 className='page-title'>Product List</h1>
				</div>
				<div className='card-content flex gap-4 items-center'>
					<h3>Search</h3>
					<div className='dropdown ml-20 '>
						All
						<ChevonDown />
						<div className='dropdown-content'>
							<span>All</span>
							<span>Name</span>
							<span>Brand</span>
							<span>Description</span>
						</div>
					</div>
					<input type='search' />
					<button className='search'>Search</button>
				</div>
			</div>

			<span className='block my-8'>Search Result: 100 Products</span>

			<div class='card'>
				<table>
					<thead>
						<tr>
							<th>Product number</th>
							<th>Product name</th>
							<th>Brand</th>
							<th>Product content</th>
							<th>Price</th>
							<th>Rating</th>
							<th>Inventory</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>001</td>
							<td>Product A</td>
							<td>Brand X</td>
							<td>Product A content goes here</td>
							<td>$10.00</td>
							<td>4.5 stars</td>
							<td>10</td>
						</tr>
						<tr>
							<td>002</td>
							<td>Product B</td>
							<td>Brand Y</td>
							<td>Product B content goes here</td>
							<td>$20.00</td>
							<td>3.5 stars</td>
							<td>20</td>
						</tr>
					</tbody>
				</table>
				<div class='pagination'>
					<a href='/'>Previous</a>
					<a href='/'>1</a>
					<a href='/'>2</a>
					<a href='/'>3</a>
					<a href='/'>Next</a>
				</div>
			</div>
		</div>
	)
}

export default App
