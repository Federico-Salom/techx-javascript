import "./Inicio.css";
import combo1 from "../../assets/combo1.webp";
import combo2 from "../../assets/combo2.webp";
import combo3 from "../../assets/combo3.webp";
import combo4 from "../../assets/combo4.webp";


const combos = [
    { src: combo1, title: 'Computadora gamer ultima generacion' }, 
    { src: combo2, title: 'Computadora pro gama alta' },
    { src: combo3, title: 'Computadora de alto rendimiento' }, 
    { src: combo4, title: 'Computadora de entrada' }
]


function Inicio() {
    return (
        <main className="inicio">
            <section className="">
                <h1>Bienvenido a nuestra tienda con lo ultimo en tecnologia.</h1>
                <h2>Los mejores combos!!</h2>
                <article>
                    {combos.map((combo) => 
                    (<div key={combo.title}>
                        <h3>{combo.title}</h3>
                        <img src={combo.src} alt={combo.title} />
                    </div>))}
                </article>
            </section>
        </main>
    );
}

export default Inicio;
