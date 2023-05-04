import { SearchFormContainer } from './styles';
import { MagnifyingGlass } from  'phosphor-react';

export function SearchForm(){
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transacoes"/>
            <button type="submit">
                Buscar
                <MagnifyingGlass size={20}/>
            </button>
        </SearchFormContainer>
    )
}