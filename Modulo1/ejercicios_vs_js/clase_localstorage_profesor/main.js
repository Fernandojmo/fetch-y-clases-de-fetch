const input = document.querySelector("input")
const btn = document.querySelector("button")
const lista = document.querySelector("#lista")
const nombres = JSON.parse(localStorage.getItem("lista"))

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const li = document.createElement("li")
  li.innerText = input.value
  lista.appendChild(li)
  input.value = ""
  const nombres = Array.from(lista.childNodes).map((li) => li.innerText)
  localStorage.setItem("lista", JSON.stringify(nombres))
  li.addEventListener("click", (e) => {
    e.preventDefault()
    li.remove()
    const nombres = Array.from(lista.childNodes).map((li) => li.innerText)
    localStorage.setItem("lista", JSON.stringify(nombres))
  })
})

input.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key === "Enter") {
    const li = document.createElement("li")
    li.innerText = input.value
    lista.appendChild(li)
    input.value = ""
    const nombres = Array.from(lista.childNodes).map((li) => li.innerText)
    localStorage.setItem("lista", JSON.stringify(nombres))
    li.addEventListener("click", (e) => {
      e.preventDefault()
      li.remove()
      const nombres = Array.from(lista.childNodes).map((li) => li.innerText)
      localStorage.setItem("lista", JSON.stringify(nombres))
    })
  }
})

nombres.forEach((nombre) => {
  const li = document.createElement("li")
  li.innerText = nombre
  lista.appendChild(li)
  li.addEventListener("click", (e) => {
    e.preventDefault()
    li.remove()
    const nombres = Array.from(lista.childNodes).map((li) => li.innerText)
    localStorage.setItem("lista", JSON.stringify(nombres))
  })
})
