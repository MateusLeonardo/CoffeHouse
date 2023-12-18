import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from "./styles.module.scss";
import { useCart } from "../../Components/CartContext/CartContext";

export function Cart() {
  const { cartItems, cartSize, updateCartItemQuantity, removeFromCard } =
    useCart();

  const adicionarQuantidade = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (!existingItem) {
      // Se o item não estiver no carrinho, adiciona-o
      addToCart(cartItems.find((item) => item.id === id));
    } else {
      // Se o item já estiver no carrinho, apenas aumenta sua quantidade
      updateCartItemQuantity(id, 1);
    }
  };

  const removerQuantidade = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantidade === 1) {
      removeFromCard(id);
    } else {
      updateCartItemQuantity(id, -1);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.tabelaProdutos}>
        <div className={styles.titleCart}>
          <h1>Meu Carrinho</h1>
          <p>
            Você tem{" "}
            <span>
              {cartSize} {cartItems.length > 1 ? "itens" : "item"} no carrinho
            </span>
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
                <td className={styles.tdImg}>
                  <img src={item.itemImagem} alt="" height={40} />
                  {item.itemNome}
                </td>
                <td>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.itemPreco)}
                </td>
                <td className={styles.quantityButtons}>
                  <button onClick={() => removerQuantidade(item.id)}>-</button>
                  {item.quantidade}
                  <button onClick={() => adicionarQuantidade(item.id)}>
                    +
                  </button>
                </td>
                <td>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.itemPreco * item.quantidade)}
                </td>
                <td>
                  <RiDeleteBin7Line
                    className={styles.deleteBin}
                    onClick={() => removeFromCard(item.id)}
                  />
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
