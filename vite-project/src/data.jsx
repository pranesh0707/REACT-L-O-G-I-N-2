import React, { useEffect, useState } from "react";

const Data = () => {
    const [value, setValue] = useState(0);
    const [inputText, setInputText] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const jsonData = await response.json();
            setUsers(jsonData.users);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch users. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black">Counter</h2>
                <div className="flex items-center gap-6 mt-4">
                    <button
                        onClick={() => setValue(value - 1)}
                        className="px-6 py-3 bg-red-500 text-white font-bold rounded-md shadow-md"
                    >
                        -
                    </button>
                    <span className="text-2xl font-bold">{value}</span>
                    <button
                        onClick={() => setValue(value + 1)}
                        className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow-md"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Input & Submit Section */}
            <div className="flex flex-col items-center space-y-4">
                <input
                    type="text"
                    placeholder="Enter name"
                    className="p-2 border border-gray-400 rounded-md"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow-md"
                    onClick={() => setSubmittedData([...submittedData, inputText])}
                >
                    Submit
                </button>

                {/* Display Submitted Names */}
                <div className="w-full max-w-md">
                    {submittedData.length > 0 && (
                        <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold">Submitted Names</h3>
                            {submittedData.map((name, index) => (
                                <p key={index} className="text-gray-700">• {name}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full max-w-4xl">
                <h2 className="text-xl font-bold mb-3">Fetched User Data</h2>
                {error && <p className="text-red-500">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user,id) => (
                        <div
                            key={id}
                            className="p-4 border space-x-4 border-gray-300 bg-white rounded-md shadow-md"
                        >
                            <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
                            <p className="text-gray-600">Age: {user.age}</p>
                     
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Data;
