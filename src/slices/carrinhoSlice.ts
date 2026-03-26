import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const existe = state.itens.find((item) => item.id === produto.id)

      if (existe) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    },

    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
