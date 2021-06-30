import React, {useState} from "react";

export default function Quote(props) {

    const [quote, setQuote] = useState({});
    function handlerClick() {
        setQuote({name: 'Альберт Эйнштейн', text: 'Стремитесь не к успеху, а к ценностям, которые он дает'});
    }

    return (
        <div>
            <button onClick={handlerClick}>Цитата дня</button>
            <div>
                <p>{quote.name ? quote.name : ''}</p>
                <p>{quote.text ? quote.text : ''}</p>
            </div>
        </div>
    );
}