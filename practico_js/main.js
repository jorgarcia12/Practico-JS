// 1. Introduccion
console.log("1. Introduccion")

// Ejercicio 2

{
  console.log("Ejercicio 2")
  let a = 5
  let b = 10
  let c = a + b
  console.log("La suma de a + b es: " + c)
}

//Ejercicio 3
/*{
  console.log("Ejercicio 3")
  let nombre = prompt("Hola! Ingresa tu nombre!")
  console.log("Hola " + nombre + "!")
}*/

//2. Operadores lógicos y condicionales
console.log("2. Operadores Logicos y condicionales")

//Ejercicio 1
console.log("Ejercicio 1")
{
  let a = 5
  let b = 15
  let c = 32
  let mayor = a
  if (b > a) {
    mayor = b
  }
  if (c > mayor) {
    mayor = c
  }
  console.log("El mayor de los 3 numeros es: " + mayor)
}

//Ejercicio 2
console.log("Ejercicio 2")
/*{
  let num = prompt("Ingresa un numero y te dire si es par o impar:")

  if (num % 2 === 0) {
    prompt("Tu numero es par")
  } else {
    prompt("Tu numero es impar")
  }

}*/

//3. Operadores de Asignacion y bucles
console.log("3. Operadores de Asignacion y bucles")

//Ejercicio 1
console.log("Ejercicio 1")

let back_Count = 10

while (back_Count > 0) {
  console.log(back_Count)
  back_Count--;
}

//Ejercicio 2
console.log("Ejercicio 2")
/*{
  do {
    var num_100 = prompt("Ingresa un numero mayor a 100")

  } while (num_100 < 100)

    console.log("Ingresaste un numero mayor a 100: "+ num_100)
}*/

//4. Funciones
console.log("4. Funciones")

//Ejercicio 1
console.log("Ejercicio 1")
{
  let n = 12
  let n2 = 13

  const esPar = (num) => {
    if (num % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  console.log("El numero " + n + " es par?: " + esPar(n))
  console.log("El numero " + n2 + " es par?: " + esPar(n2))
}

//Ejercicio 2
console.log("Ejercicio 2")

let celsius = 30

const convertirCelsiusAFarenheit = (degree) => {
  return (degree * 1.8) + 32
}

console.log(celsius + "°C son: " + convertirCelsiusAFarenheit(celsius) + "°F")

//5. Objetos 
console.log("5. Objetos")

//Ejercicio 1
console.log("Ejercicio 1")

{
  let persona = {
    nombre: "Jorge",
    edad: 21,
    ciudad: "Mendoza",
    cambiarCiudad: function () {
      this.ciudad = "Buenos Aires"
    }

  };
  console.log(persona)

  persona.cambiarCiudad()
  console.log(persona)
}

//Ejercicio 2
console.log("Ejercicio 2")
{
  let Libro = {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    anio: 1997,
    esViejo: function () {
      if ((2024 - this.anio) > 10) {
        return true
      } else {
        return false
      }
    }
  };
  console.log("El libro " + Libro.titulo + " de " + Libro.autor + " es antiguo: " + Libro.esViejo())
}

//6. Arrays
console.log("6. Arrays ")
//Ejercicio 1
{
  console.log("Ejercicio 1")
  console.log("Array Normal")
  let arrayNormal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(arrayNormal)

  console.log("Array Multiplicado")
  let arrayMulti = arrayNormal.map((numArray) => {
    return numArray * 2
  })
  console.log(arrayMulti)
}

//Ejercicio 2
{
  console.log("Ejercicio 2")
  //Primeros 10 numeros pares
  let pares = []
  let i = 1

  for (i = 1; i < 21; i++) {
    if (i % 2 === 0) {
      pares.push(i)
    }
  }
  pares.length = 10;
  console.log(pares)
}

//7. Instroduccion al DOM
//Ejercicio 1
{
  const cambiarColorP = () => {
    const parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
      parrafos[i].classList.add("pColor");
    }
  };

  const button = document.getElementById("cambiar_color");
  button.addEventListener("click", () => {
    console.log("El usuario clickeó");
    cambiarColorP();
  });
}

//Ejercicio 2
{
  console.log("Ejercicio 2");

  const button_input = document.getElementById("button_form");

  const getDataInput = () => {
    const form_text = document.getElementById('texto_form').value;
    prompt(form_text)
  };

  button_input.addEventListener('click', () => {
    getDataInput();
  })
};

//8. Eventos en DOM 
//Ejercicio 1

{
  console.log("Eventos de DOM")
  console.log("Ejercicio 1")
  const list_element_1 = document.getElementById("list_element_1")
  const list_element_2 = document.getElementById("list_element_2")
  const list_element_3 = document.getElementById("list_element_3")
  const list_element_4 = document.getElementById("list_element_4")

  const getDataInConsole = (list_element) => {
    console.log(list_element)
  }


  list_element_1.addEventListener('click', () => {
    getDataInConsole(list_element_1.textContent);
  })

  list_element_2.addEventListener('click', () => {
    getDataInConsole(list_element_2.textContent)
  })
  list_element_3.addEventListener('click', () => {
    getDataInConsole(list_element_3.textContent)
  })
  list_element_4.addEventListener('click', () => {
    getDataInConsole(list_element_4.textContent)
  })
}


//Ejercicio 2
{
  let boton_habilitar = document.getElementById("habilitar")
  let boton_deshabilitar = document.getElementById("deshabilitar")
  let textarea = document.getElementById("ejercicio2_textarea")
  const enableTextArea = () => {
    textarea.disabled = false
  }

  const disableTextArea = () => {
    textarea.disabled = true

  }

  boton_habilitar.addEventListener('click', () => {
    enableTextArea();
  })

  boton_deshabilitar.addEventListener('click', () => {
    disableTextArea();
  })
}

//9. LocalStorage

{
  let boton_borrar = document.getElementById("delete_button");
  let boton_guardar = document.getElementById("save_button");
  let email = document.getElementById("email");
  let mail_almacenado = document.getElementById("stored_mail");

  const mostrarMailGuardado = () => {
    const mail_guardado = localStorage.getItem("mail");
    if (mail_guardado) {
      mail_almacenado.textContent = `Email guardado: ${mail_guardado}`;
    }else {
      mail_almacenado.textContent = "No hay ningún email guardado.";
    }
  };

  const guardarEmail = () => {
    localStorage.setItem("mail", email.value);
    console.log("Email guardado: ", email.value);
    mostrarMailGuardado();
  };

  const borrarEmail = () => {
    localStorage.removeItem("mail");
    console.log("Email borrado del almacenamiento");
    mostrarMailGuardado();
  };

  boton_guardar.addEventListener('click', (event) => {
    event.preventDefault();
    guardarEmail();
  });

  boton_borrar.addEventListener('click', (event) => {
    event.preventDefault();
    borrarEmail();
  });

  mostrarMailGuardado();

}