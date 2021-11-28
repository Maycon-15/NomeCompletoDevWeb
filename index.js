const processar = () => {
  event.preventDefault();

  //obter valores digitados
  const camponome = document.querySelector("#nome");
  const camposobrenome = document.querySelector("#sobrenome");

  const nomedigitado = camponome.value;
  const sobrenomedigitado = camposobrenome.value;

  const nomeCompleto = `${nomedigitado}  ${sobrenomedigitado}`;
  const nomeCatalogo = `${sobrenomedigitado.toUpperCase()}, ${nomedigitado}`;

  const mensagem = document.querySelector("#mensagem");
  mensagem.innerHTML = `
  <div>Nome completo = ${nomeCompleto}</div>
  <div>Nome catálogo = ${nomeCatalogo}</div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const botaoProcessar = document.querySelector("#processar");
  botaoProcessar.addEventListener("click", processar);
});
