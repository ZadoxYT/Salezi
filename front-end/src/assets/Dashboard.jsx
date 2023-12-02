import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const Dashboard = () => {
    const [token, setToken] = useState(null);
    const { data, loading, error } = useFetch('http://localhost:1337/api/products');
    let navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    if (loading) return 'Loading...';
    if (error) return 'An error occurred: ' + error;


    if (!token) {
        navigate('/')
    } else {
    return (
        <div className="m-16 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data && data.data.map(product => (
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.attributes.name}
                        </th>
                        <td className="px-6 py-4">
                        {product.attributes.Description}
                        </td>
                        <td className="px-6 py-4">
                        {product.attributes.price}
                        </td>
                        <td className="px-6 py-4">
                        {product.attributes.stock}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        )
        }
}

export default Dashboard