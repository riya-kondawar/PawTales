import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/UseAuthContext';

const Profile = () => {
    const { user, dispatch } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({ name: user.userName, email: user.email });
    const [tempValues, setTempValues] = useState({ name: user.userName, email: user.email });
    const [errors, setErrors] = useState([]);
    const [succMessage, setSuccMessage] = useState("");

    const handleChange = (e) => {
        setTempValues({ ...tempValues, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setErrors([]);
        setSuccMessage("");

        const newEmail = tempValues.email.toLowerCase();

        try {
            const response = await fetch('http://localhost:4000/update', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: tempValues.name,
                    email: user.email,
                    newEmail: newEmail,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors([data.error]);
                setIsEditing(false);
            } else {
                setSuccMessage("Updated Successfully");
                setEditValues({ name: data.updatedUser.name, email: data.updatedUser.email });
                setIsEditing(false);

                dispatch({ type: 'LOGIN', payload: { ...user, userName: data.updatedUser.name, email: data.updatedUser.email } });

                localStorage.setItem('user', JSON.stringify({ ...user, userName: data.updatedUser.name, email: data.updatedUser.email }));
            }
        } catch (err) {
            setErrors(['Failed to update profile.']);
        }
    };

    const handleEditClick = () => {
        setTempValues(editValues);
        setIsEditing(true);
        setSuccMessage("");
    };

   return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Profile</h2>
                {!isEditing ? (
                    <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                ) : (
                    <button className="edit-btn" onClick={handleSave}>Save</button>
                )}
            </div>
            <div className="profile-info">
                <div className="profile-item">
                    <label className="profile-label">Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={tempValues.name}
                            onChange={handleChange}
                            className="edit-input"
                        />
                    ) : (
                        <span className="profile-value">{editValues.name}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label className="profile-label">Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={tempValues.email}
                            onChange={handleChange}
                            className="edit-input"
                        />
                    ) : (
                        <span className="profile-value">{editValues.email}</span>
                    )}
                </div>
            </div>
            <br />
            <div className="password-reset-info">
                <p>If you want to change your password, please log out and then use the "Forgot Password" feature.</p>
            </div>


            {succMessage.length > 0 && (
                <div className="profile-errors-container">
                    <div className="profile-error profile-Succ-msg">
                        {succMessage}
                    </div>
                </div>
            )}

            {errors.length > 0 && (
                <div className="profile-errors-container">
                    {errors.map((error, index) => (
                        <div key={index} className="profile-error">
                            {error}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
