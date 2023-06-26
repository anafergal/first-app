import {useEffect} from "react";
import './'

const API_IMAGE = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const Apod = () => {
    const [astros, setAstros] = useState([]);

    const fetchData = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setAstros(data.people))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);



    const astrosCards = astros.map((astro,index) => (
        <div className="astro--card" key={astro.name}>
            <h1 className="astro--name">
                {astro.name}
            </h1>
            <h3 className="astro--craft">
                {astro.craft}
            </h3>
        </div>
    ))

    return (
        <div className="astros--cards">
            {astrosCards}
        </div>
    )


}

export default Apod;