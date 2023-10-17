const Noticia = ({titulo, imagem, alt, descricao, categoria}) => {
    return(
        <div class="not">
            <h2 className="Titulo">{titulo}</h2>
            <img src={imagem} alt={alt} className="noticia-imagem"></img>
            <p className="descricao">{descricao}</p>
            <p className="categoria">{categoria}</p>
        </div>
    )
}
export default Noticia;