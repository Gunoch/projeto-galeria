export default function Controls({ current, total, onPrevious, onNext, onSurprise, }){
    return(
        <div className="controls">
            <button onClick={onPrevious}>Anterior</button>
            <span className="counter">Imagem {current} de {total}</span>
            <button onClick={onNext}>Próxima</button>
            <button className="surprise" onClick={onSurprise}>Surpresa</button>
        </div>
    );
}