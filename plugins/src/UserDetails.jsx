import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubUser = () => {
  const [username, setUsername] = useState("Atir-Suhail"); // Default username
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState(""); // To store input value

  const fetchUser = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch default user when the component mounts
    fetchUser(username);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(inputValue); // Fetch GitHub user based on input
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="header">
      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
          className="input-field"
        />
        <button type="submit" className="enter-button">Enter</button>
      </form>

      {/* User Information */}
      {user && (
        <>
          <h1>{user.name}</h1>
          <p className="username">Username: {user.login}</p>
          <p className="bio">Bio: {user.bio}</p>
          <p className="location">Location: {user.location}</p>
          <p className="public-repos">Public Repos: {user.public_repos}</p>
          <img src={user.avatar_url} alt={`${user.login} avatar`} />
        </>
      )}

      {/* GIF Element */}
      <div className="gif-container">
        <img src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="GitHub GIF" />
      </div>
    </div>
  );
};

export default GitHubUser;
