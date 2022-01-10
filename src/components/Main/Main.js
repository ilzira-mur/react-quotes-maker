import './Main.css';

function Main({onGetQuote, author, body}) {
    return (
        <section className="main">
        <div className="main__container">
            <h1 className="main__header">quotes-maker</h1>
            <p className="main__text">press <span className="main__span">PUSH</span> to get the quote for the day</p>
            <button className="main__button" onClick={onGetQuote}>PUSH</button>
            <p className="main__quote">{author}</p>
            <p className="main__quote">{body}</p>
        </div>
        </section>
    )
}
export default Main;