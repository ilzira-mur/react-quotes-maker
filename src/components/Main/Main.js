import { useState } from "react";

function Main({onSubmitf}) {
    const [query, setQuery] = useState('');

    function handleChange(e) {
        const { target } = e;
        const { name, value } = target;
        setQuery({ [name]: value });
      }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitf();
      }

    return (
        <div className="main">
            <button onClick={handleSubmit}>Нажать</button>
        </div>
    )
}
export default Main;