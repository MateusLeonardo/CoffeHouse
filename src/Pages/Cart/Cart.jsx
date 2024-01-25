import React, { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from "./styles.module.scss";
import { useCart } from "../../Components/CartContext/CartContext";
import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";

export function Cart() {
  const { cartItems, updateCartItemQuantity, removeFromCard } =
    useCart();
  const [cupomDescontoCard, setCupomDescontoCard] = useState(false);
  const [inputCupomDesconto, setInputCupomDesconto] = useState("");
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [desconto, setDesconto] = useState({});
  const [errorDesconto, setErrorDesconto] = useState(false);
  const [successDesconto, setSuccessDesconto] = useState(false);

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

  useEffect(() => {
    const calcularTotal = () => {
      let subTotal = cartItems.reduce((total, item) => {
        return total + item.itemPreco * item.quantidade;
      }, 0);

      let totalComDesconto = subTotal;
      setSubTotal(subTotal);

      if (desconto && desconto.desconto) {
        const valorDesconto = (subTotal * desconto.desconto) / 100;
        totalComDesconto = subTotal - valorDesconto;
      }

      return totalComDesconto;
    };

    // Atualiza o estado 'total' com o valor calculado
    setTotal(calcularTotal());
  }, [cartItems, desconto, subTotal]);

  const handleCalculateCupomDesconto = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cupomDesconto");
      const cupomEncontrado = response.data.find(
        (item) => item.cupomNome === inputCupomDesconto
      );

      if (cupomEncontrado) {
        setDesconto(cupomEncontrado);
        setErrorDesconto(false);
        setSuccessDesconto(true);
      } else {
        setDesconto({});
        setErrorDesconto(true);

        setTimeout(() => {
          setErrorDesconto(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.cartMain}>
      {cartItems.length > 0 ? (
        <section className={`${styles.container} mt80`}>
          <div className={styles.tabelaProdutos}>
            <div className={styles.titleCart}>
              <h1>Meu Carrinho</h1>
              <p>
                Você tem{" "}
                <span>
                  {cartItems.length} {cartItems.length > 1 ? "itens" : "item"} no
                  carrinho
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
                      <div>
                        <button onClick={() => removerQuantidade(item.id)}>
                          <FaMinus />
                        </button>
                        <p>{item.quantidade}</p>
                        <button onClick={() => adicionarQuantidade(item.id)}>
                          <FaPlus />
                        </button>
                      </div>
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
          <div className={styles.cardTotal}>
            <h1>Continuar pagamento</h1>
            <div className={styles.cupomDesconto}>
              {successDesconto ? (
                <p className={styles.descontoSucesso}>
                  Desconto de {desconto.desconto && desconto.desconto}%
                  adicionado com sucesso
                </p>
              ) : cupomDescontoCard ? (
                <>
                  <span>Cupom</span>
                  <input
                    type="text"
                    value={inputCupomDesconto}
                    onChange={({ target }) =>
                      setInputCupomDesconto(target.value)
                    }
                  />
                  {errorDesconto ? (
                    <span>Cupom inválido</span>
                  ) : (
                    <button onClick={handleCalculateCupomDesconto}>
                      Adicionar
                    </button>
                  )}
                </>
              ) : (
                <>
                  <span>Cupom</span>
                  <p onClick={() => setCupomDescontoCard(!cupomDescontoCard)}>
                    Adicionar cupom de desconto
                  </p>
                </>
              )}
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <div>
                {successDesconto && (
                  <span className={styles.subTotal}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(subTotal)}
                  </span>
                )}
                <span className={styles.numberTotal}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>
            </div>
            <div className={styles.pagamentoButton}>
              <button>Continuar pagamento</button>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.container}>
          <div className={styles.tabelaProdutos}>
            <div className={styles.titleCart}>
              <h1>Meu Carrinho</h1>
              <p>Você não tem nada no carrinho</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
