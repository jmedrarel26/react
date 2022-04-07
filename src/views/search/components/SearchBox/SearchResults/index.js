import SearchResultsitem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}){
    return(
    <div style={{width: "100%", padding: "0rem 2rem 0rem 2rem"}}>
        {!results?.length && isSearching && <p>No hay resultados</p>}
        {results?.map((value)=>{
            return(
                <SearchResultsitem  key={value.id} {...value}/>
            )
        })}
    </div>
    );
}