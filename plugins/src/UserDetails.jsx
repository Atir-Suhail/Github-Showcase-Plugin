import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const username = "Atir-Suhail";
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUser(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    fetchUser();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="header">
      <h1 >{user.name}</h1>
      <p>Username: {user.login}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
      <img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
    </div>
  );
};

export default GitHubUser;
