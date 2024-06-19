import { useEffect, useState } from 'react';


const GitHubUser = ({ username }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // https://api.github.com/users/tanushri415

        const fetchData = async () => {
            setLoading(true);

            try {
                await fetch(`https://api.github.com/users/${username}`);
                const resData = await Response.json();
                setUser(false);
                setLoading(false);
                console.log(resData);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [username]);

    return (
        <div className='github-user'>
            {loading && <p>Loading ...</p>}
            {error && <p>{error.message}</p>}

            {
                user && (
                    <ul></ul>
                )
            }
        </div>
    );
};
export default GitHubUser;