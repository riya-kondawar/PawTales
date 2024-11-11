import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [userData, setUserData] = useState({});
    const [petData, setPetData] = useState([]);
    const [totalPets, setTotalPets] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch('http://localhost:4000/Dashboard/user-registrations');
                const userData = await userResponse.json();
                setUserData(userData);

                const petResponse = await fetch('http://localhost:4000/Dashboard/pet-types');
                const petData = await petResponse.json();
                const petDataMapped = petData.map(item => ({ name: item._id, value: item.count }));

                setTotalPets(petDataMapped.reduce((acc, item) => acc + item.value, 0));
                setPetData(petDataMapped);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A8E6CF', '#DCE775'];

    return (
        <div className="dashboard-container">
            <div className="total-users">
                <h2>Total Registered Users</h2>
                <h3>{userData.count || 0}</h3>
            </div>

            <div className="pie-chart-container">
                <h2>Distribution of Pet Types</h2>
                <h3>Total Pets: {totalPets}</h3>

                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={petData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {petData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
