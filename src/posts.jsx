import { useContext, useEffect, useRef, useState } from "react";
import { loggedinUserContext } from "./const";

export const TableFill = (props) => {
    return (
        <>
            {
                <table>
                    <thead>
                        <tr>
                            {
                                (Object.keys(props.posts[0])).map((key) =>{return <th> {key}</th>})
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.posts.map((post) => {
                                return <tr>
                                    {
                                        Object.values(post).map((value) => {
                                            return <td>{`${value}`}</td>
                                        })
                                    }</tr>
                            })
                        }
                    </tbody>
                </table>

            }
        </>
    )
}

export const listFill = () => {
    let students = [{
        id: 1,
        name: "sai"
    },
    {
        id: 2,
        name: "vamsi"
    }]

    return (
        <ul>
            {
                students.map((item) => {
                    <li>{item.name}</li>
                })
            }
        </ul>
    )
}
export function Posts(props){
    const context = useContext(loggedinUserContext);
    const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loggedinUser, setLoggedInuser] = useState(context);
    const inputRef = useRef();
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "sai"
        },
        {
            id: 2,
            name: "vamsi"
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                alert("Error", response);
            } else {
                console.log("Called and got data")
                const data = await response.json();
                setPosts(data);
            }
        }
        fetchData();
    }, []);

    const handleClick = (e) => {
        setCount(count + 1)
    }

     const handleChangeRef = () => {
        alert(inputRef.current.value)
    }

    const handStateSelection = (e) => {
        const { value, name } = e.target;
        alert(name + ":" + value)
    }

    const handlesubmit = () =>{
        alert("form submitted")
    }
    const handleSubmit = () => {
        alert("from submiited")
    }
    return (
        <div>
            <p>{JSON.stringify(loggedinUser)}</p>
            <ul>
                {students.map((student) => {
                    return <li>{JSON.stringify(student)}</li>
                })
                }

            </ul>
            <p>{props.name}</p>
            <>{listFill}</>
            {
                posts !== null && posts.length > 0 ? <TableFill posts={posts}></TableFill> : ''
            }
            <p>{props.graduation}</p>
            <select name="state" onKeyDown={handStateSelection}>
                <optgroup>
                    <option value={'KA'}>AP</option>
                    <option value={'KA'}>TS</option>
                    <option value={'KA'}>TN</option>
                    <option value={'KA'}>KA</option>
                    <option value={'KL'}>KL</option>
                </optgroup>
            </select>
            <loggedinUserContext.Provider value={{ email: "vamsi@gmail.com", token: "adadd" }}>

            </loggedinUserContext.Provider>
            <input type="text" defaultValue={"vamsi"} ref={inputRef} onChange={handleChangeRef} />
            <p>COunter :{count}</p>
            <button onClick={handleClick} className="btn btn-primary">InCrement</button>
            <h1>Posts Hello</h1>
            <button onClick={handleSubmit}>Singup</button>
        </div>
    )
};

export default Posts;