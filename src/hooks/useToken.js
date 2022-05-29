import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        const presentUser = {email: email};
        if(email){
            fetch(`https://mysterious-anchorage-92670.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(presentUser)
            })
            .then(res=>res.json())
            .then(data => {
                const token = data.token;
                setToken(token);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;