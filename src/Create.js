import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('mario');
    const[isPending,setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { title,body,author };
        setIspending(true);
        // console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type":"application/json" },
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log('new blog added');
            setIspending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit = { handleSubmit }>
            <label>Blog Title:</label>
            <input 
            type="text"
            required 
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea 
            required
            value = {body}
            onChange = {(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <input 
            type="text"
            required 
            value = {author}
            onChange = {(e) => setAuthor(e.target.value)}
            />
            
            {!isPending && <button>Add Book</button>}
            {isPending && <button disabled>Adding book...</button>}
            <p>{ title }</p>
            <p> { body } </p>
            <p> { author } </p>
        </form>
        </div>
    );
}
 
export default Create;