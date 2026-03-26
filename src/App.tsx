import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Produto } from './types'

import { useGetProdutosQuery } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { adicionar } from './slices/carrinhoSlice'
import { toggleFavorito } from './slices/favoritosSlice'

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  if (isLoading) return <p>Carregando...</p>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} favoritos={favoritos} />

        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
