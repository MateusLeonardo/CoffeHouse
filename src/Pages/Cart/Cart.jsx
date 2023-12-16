import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from "./styles.module.scss";
import { useCart } from "../../Components/CartContext/CartContext";

export function Cart() {
  const {cartItems} = useCart()

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => {
      return total + produto.preco * produto.quantidade;
    }, 0);
  };

  const adicionarQuantidade = (id) => {
    const novosProdutos = produtos.map((produto) => {
      if (produto.id === id) {
        return { ...produto, quantidade: produto.quantidade + 1 };
      }
      return produto;
    });
    setProdutos(novosProdutos);
  };

  const removerQuantidade = (id) => {
    const novosProdutos = produtos.map((produto) => {
      if (produto.id === id && produto.quantidade > 0) {
        return { ...produto, quantidade: produto.quantidade - 1 };
      }
      return produto;
    });
    setProdutos(novosProdutos);
  };

  return (
    <section className={styles.container}>
      <div className={styles.tabelaProdutos}>
        <div className={styles.titleCart}>
          <h1>Meu Carrinho</h1>
          <p>
            Você tem <span>3 itens no carrinho</span>
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.itemNome}</td>
                <td>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.itemPreco)}</td>
                <td className={styles.quantityButtons}>
                  <button onClick={() => removerQuantidade(item.id)}>
                    -
                  </button>
                  {item.quantidade}
                  <button onClick={() => adicionarQuantidade(item.id)}>
                    +
                  </button>
                </td>
                <td>R$ {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.itemPreco)}</td>
                <td>
                  <RiDeleteBin7Line />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.cardTotal}>Continuar pagamento</div>
    </section>
  );
}
