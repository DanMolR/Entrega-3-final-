let saludo = "Hola profe, esta es la entrega 3"
console.log(saludo);

/* CALCULADORA NIVEL 1

1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma
de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar
el resultado de su multiplicación.
5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo. */

function calculadora_1 (a, b) {

    function suma() {
        return a + b;
    }

    function resta() {
        return a - b;
    }

    function multiplicacion() {
        return a * b;
    }

    function division() {
        return a / b;
    }

    console.log("------CALCULADORA 1.0-------");
    console.log(`La suma de ${a} y ${b} es ${suma()}`);
    console.log(`La resta de ${a} y ${b} es ${resta()}`);
    console.log(`La multiplicación de ${a} y ${b} es ${multiplicacion()}`);
    console.log(`La divisón de  ${a} y ${b} es ${division()}`);
}
calculadora_1(50, 0)

/* CALCULADORA NIVEL 2

Superado el Nivel I, agregamos un poco más de dificultad, probaremos nuestras
funciones. Te recomendamos usar la función prompt() con la que estuvimos
trabajando en la semana para pedirle al usuario que ingrese los números con los
que posteriormente ejecutaremos las funciones de nuestra calculadora. Recordá
guardar esos datos del usuario en diferentes variables.

1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
anterioridad— creá un console.log en el cual vas a poner un string para
indicar que debajo de él comenzarás a probar las funciones, algo así como

un “separador de código”. Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
2. Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados.
3. Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
4. Ejecutar la función que permite dividir pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado.
5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.
*/

function calculadora_2 () {
    const valor1 = parseInt(prompt("ingrese el primer valor a calcular"))
    const valor2 = parseInt(prompt("ingrese el segundo valor a calcular"))

    function suma() {
        return valor1 + valor2;
    }

    function resta() {
        return valor1 - valor2;
    }

    
    function multiplicacion() {
        return valor1 * valor2;
    }
    
    function division() {
        if (valor2 === 0 ){
            return 'Imposible: no se puede dividir entre cero "0" '
        } else {
            return valor1 / valor1;
        }
    }
    
    console.log("------CALCULADORA 2.0-------");
    
    console.log("----Testeo de Operaciones / Calculadora----")
    console.log(`La suma de ${valor1} y ${valor2} es ${suma()}. La resta de ${valor1} y ${valor2} es ${resta()}`);

    console.log(`La multiplicación de ${valor1} y ${valor2} es ${multiplicacion()}`);
    console.log(`La divisón de ${valor1} y ${valor2} es ${division()}`);
    
    
}


/* CALCULADORA NIVEL 3

Si llegamos hasta aquí, podemos quedarnos tranquilos con lo realizado. A
continuación desarrollaremos funciones extras a nuestra calculadora, en las cuales
utilizaremos las funciones ya creadas. Podemos realizar la prueba de estas luego de
desarrollar cada una.
1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número
como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.

3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total
y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.
4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
200. 
*/

function calc_3_cuadrado () {
    const cuadrado = parseFloat(prompt("ingrese un valor para sacar el cuadrado"))

    function cuadradoDeUnNumero() {
        return cuadrado * cuadrado;
    }
    
    console.log("------CALCULADORA 3.0-------");
    
    console.log(`el cuadrado de ${cuadrado} es ${cuadradoDeUnNumero()}`);
}

function calc_3_promedio() {
    const valor1 = parseFloat(prompt("ingrese el primer valor para promediar"))
    const valor2 = parseFloat(prompt("ingrese el segundo valor para promediar"))
    const valor3 = parseInt(prompt("ingrese el tercer valor para promediar"))

    function promedio() {
        let sumatoria = valor1 + valor2 + valor3;
        return sumatoria / 3
    }

    console.log("------CALCULADORA 3.0-------");
    console.log(`el promedio de ${valor1}, ${valor2} y ${valor3} es ${promedio()}`);
    
}

function calc_3_calcularPorcentaje() {
    const valor = parseFloat(prompt("ingrese el número al que le quiere sacar el porcentaje"))
    const porciento = parseFloat(prompt("¿Qué porcentaje quiere calcular? (Por ejemplo, 10%, 20%, etc.)"))

    function porcentaje() {
        return valor * porciento / 100
    }

    console.log("------CALCULADORA 3.0-------");
    console.log(`el ${porciento}% de ${valor} es ${porcentaje()} `);
    
}

function calc_3_generadorDePorcentaje() {
    const total = parseFloat(prompt("Ingrese el valor total"))
    const cantidad = parseFloat(prompt(("Ingrese la cantidad que desea calcular como porcentaje del total")))

    function porcentaje() {
        return (cantidad / total) * 100
    }

    console.log("------CALCULADORA 3.0-------");
    console.log(` si el total es ${total} o 100%, entonces ${cantidad} es el ${porcentaje()}%`);
}





// CALCULADORA NIVEL 4 (prueba: tutorial + chatGPT)

/////////// Calculadora VERSIÓN 4.0 (tutorial) ////////////
// tutorial: https://www.youtube.com/watch?v=I5kj-YsmWjM


/*
CODIGO:

const display = document.getElementById("display")

function appendToDisplay (input) {
    display.value += input; // W3: The Addition Assignment Operator (+=) adds a value to a variable. 
}

function clearDisplay () {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "ERROR"
    }

    // Multiples errores puede ocurrir al ejecutar una función. La declaración "try...catch" señala un bloque de instrucciones a intentar (TRY), y especifica una respuesta si se produce una excepción (CATCH).

}
*/


//////////// Calculadora VERSIÓN 4.1 Mejorado por ChatGPT ///////////  

const display = document.getElementById("display");
let calculoCompletado = false; // GPT: bandera que indica si un cálculo ha terminado
// (( lo que entiendo: las banderas deben empezar en False porque aún no ha ocurrido ningún cálculo. Cuando se realiza un cálculo, presionando =, la bandera se activa True. De esta menera, si el usuario empieza a ingresar números, la pntalla se borra para poder empezar un nuevo cálculo ))
let operadorUsado = false; // GPT: bandera que indica si se ha usado un operador
// (( lo que entiendo: esta indica si se ha usado un operador matemático en la operación actual. Ayuda con la funcionalidad de no tener más de un operador seguido, reemplazando el anterior "2++2"))

function appendToDisplay(input) {
    const ultimoCaracter = display.value[display.value.length - 1]; // GPT: Último carácter en display 
    // (( Lo que entiendo: Length arroja el número total de caracteres, pero como la cadena empieza con cero en su posición, hay que  restar 1 para centrarse en el último caracter ))
    const operadores = ['+', '-', '*', '/']; // GPT: Lista de operadores

    display.classList.remove("display-small-text"); // GPT: Eliminar clase para texto pequeño 
    // (( lo que entiendo: para remover la clase que se le agregó a la pantalla en la función calculate: display.classList.add("display-small-text"). La función era para reducir el tamaño de la letra para que el mensaje de dividir entre cero cupiera en la pantalla ))

    //// GPT: Reiniciar display si hay un error
    if (display.value === "ERROR" || display.value.includes("No se puede dividir entre cero")) {
        display.value = ""; 
        // ((Ya lo testeé y remover la función no afecta la funcionalidad pero hace que se pueda digitar operadores despues del error. Aunque con al digitar números, sí se reinicia la pantalla))
    }

    //// GPT: Reemplaza el operador anterior si se ingresa otro operador
    if (operadores.includes(ultimoCaracter) && operadores.includes(input)) {
        // (( Lo que entiendo: "includes()" verifica si un string contiene algo específico y nuestra true o false. Entonces, operadores.includes(ultimoCaracter) revisa si el string del display, tiene de último caractér un operador matemático. Y operadores.includes(input) revisa si el último dato digitado o cliqueado es un operador también. Al cumplirse ambas condiciones, se ejecuta la función para eliminar el último digito del display y, haciendo append +, reemplazarlopor el  input o último valor digitado. ))
        
        display.value = display.value.slice(0, -1) + input; 
        // (( lo que entiendo: .value refleja o asigna nuevos valores a display. Así que al poner "=" le asignaremos nuevo valor: display.value.slice(0, -1) + input. Por lo tanto tomará el valor "actual" del display y le cortará el último elemento de la derecha (definido con -1), pero debemos asegurarnos de poner 0 al comienzo para que se muestre el string completo (desde el principio), solamente removido el último caracter. Luego a ese string le agregaremos input más reciente con append + ))

    } 

    //// GPT: Evitar múltiples puntos decimales en el mismo número
    else if (input === '.' && display.value.split(/[ \+ \- \* \/ ]/).pop().includes('.')) {
        // (( Lo que entiendo: display.value.split(/[+\*-/]$/) toma el valor actual del display y la parte usando los operadores matemáticos, generando un array. de números (enteros o decimales). Pop selecciona el último elemento del array, por lo tanto pop.includes('.') toma ese último elemento del array y verifica si hay presente un decimal. Vuelve False si es un número entero y True si es un decimal))
        // NOTA: parece hacer split con los operadores matemáticos, necesitamos una expresión regular o regex, debido a que los caracteres "+" y "*". Pare evitar eso hay que "escaparlos" usando backslash "\". los [] significa cualquiera de estos caracteres. Las // al inicio y final indican el inicio de la regex.

        return; // GPT: No agregar un segundo punto decimal
        // (( Lo que entiendo: dejar "return" solo evita que se realicen más acciones ya que cumple con la función de que el último elemento del array ya tiene un decimal ))
    } 
    
    //// GPT: Reiniciar display si el cálculo fue completado y se ingresa un número
    else if (calculoCompletado && !isNaN(input)) {
        // (( Lo que entiendo: busca saber si aplican ambas condiciones... calculoCompletado === True. Y  "!isNaN", la cual busca confirmar si el valor ingresado  es un número.  Debido a que la "!"" niega a "isNaN", cuando hay un número marcará True. Si no tuviera "!"" retornaría False al ingresar un número))

        display.value = input;
        // (( lo que entiendo: una vez completadas las dos condiciones, calculo completado en true, porque presionamos =, y el nuevo valor es un número, permite que el input o nuevo valor aparezca en pantalla. No tiene "+=" porque no va a agregar valores a una string existente, sino que la va a reemplazar por una nueva))
        calculoCompletado = false; // GPT: Marcar que el cálculo no está completo
        // ((lo que entiendo: Vuelve a asignar calculoCompletado = false porque se está reiniciando el estado de la calculadora pues la lógica reinicia a una operación donde  aún on se ha presionado "=" ))
    } 

    //// GPT: Permitir agregar operadores después de un cálculo
    else if (calculoCompletado && operadores.includes(input)) {
        // (( lo que entiendo: se busca que si calculoCompletado está en True y el input, hace parte de la lista de operadores, se efectúan las siguientes acciones:))

        display.value += input; // GPT: Añade el operador sin borrar el resultado anterior
        calculoCompletado = false; // GPT: Restablece el estado de cálculo
        // (( lo que entiendo: debe pasar a false para que no se reinicie el displey, como pasaría en el statement else if de arriba))
        operadorUsado = true; // GPT: Marca que se ha usado un operador

    } 
    else {
        display.value += input; // GPT: Agregar entrada al display
    }
}

function clearDisplay() {
    display.value = ""; // GPT: Limpiar el display
    calculoCompletado = false; // GPT: Reiniciar estado
    operadorUsado = false; // GPT: Reiniciar estado
    // (( lo que entiendo, al limpiar la pantalla, empieza un nuevo estado donde no se ha copletado ningún cálculo y ningún operador se ha usado, así que deben pasar al false))
}

function backspace() {
    let currentDisplayValue = display.value; // GPT: Obtener valor actual
    // (( lo que entiendo: se crea una variable currentDisplayValue a la cual se le puede aplicar el cambio de eliminar el último caracter del string))

    if (currentDisplayValue.length > 0) {
        currentDisplayValue = currentDisplayValue.slice(0, -1); // GPT: Eliminar último carácter
        // (( lo que entiendo: como current display value empieza con el mismo valor que display.value se toma ese string y se le hace slice. El 0 indica que empieze desde el principio y -1 indica que solo hay que eliminar el último caracter del string. Ese sería el nuevo valor de currentDisplayValue))

        display.value = currentDisplayValue; // GPT: Actualizar display
        // (( lo que entiendo: a display.value se le aplica el valor de currentDisplayValue que es el string al que le quitamos es último caractér))

    }

}

function calculate() {
    try {
        // GPT: Verificar si el display está vacío o termina con un operador
        if (display.value === "" || /[ \+ \- \* \/ ]$/.test(display.value)) {
            // (( lo que entiendo: ya había entendido que /[ \+ \- \* \/ ] / era una expresión regular o regex. Pero se le agrega $ para indicar que esse patrón debe coincidir al final del string. ".test()" se usa para comprar si la string coincide con el patrón definido por la regex... busca si el último caracter de display.value es +, -, * o / ))

            display.value = "0"; // GPT: Mostrar 0 si hay un error
            // (( cuando alguna las condición se cumplen: o el display está vacío, o cuando el string termina en un operador matemático como por ejemplo "2+", la pantalla se pone en 0 al precionar =))
            /* 
            NOTA: No sé si sea correcto programar que se ponga 0, ya que he visto  comportamientos diferentes en 3 calculadoras distintas. 
                1 - En una calculadora 2+ y = lo que hace es sumarle un dos. así que queda 2+(2)=4, y si presionó una vez más, se va acumulando o haciendo append: si presionó = una vez más se pone 4+(2)=6, y así sucesivamente 
                2 - En otra calculadora que probé, poner 2+ y darle = solo me sigue mostrando el 2+, como esperando a que pusiera otro valor numérico
                3 - Y en otra calculadora, cuando pongo 2+ y le doy =, simplemente arroja Error.
            */

            return; // GPT: Salir de la función
        }

        // GPT: Verificar si se intenta dividir por cero
        if (display.value.includes('/0')) {
            // (( lo que entiendo: "includes" devuelve valor true cuando /0 esté en pantalla))

            display.value = "No se puede dividir entre cero: 0"; // GPT: Mensaje de error
            display.classList.add("display-small-text"); // GPT: Añadir clase para texto pequeño
            // (( lo que entiendo: Como el font-size está muy grande, el mensaje se sale del la pantalla. Se incluye "classList.add" porque añade una class en html al display. Y se crea en css un elemento .display-small-text para reducir el tamaño de la letra))

            calculoCompletado = true; // GPT: Marcar que el cálculo se ha completado
            // (( lo que entiendo, calculoCompletado cambia a True, para poder usado en la función de appendToDisplay en las condiciones donde calculoCompletado sea True junto con alguna condición adicional ya sea And && u Or || ))
            
            operadorUsado = false; // GPT: Reiniciar estado de operador
            // (( lo que entiendo: como en la división entre 0 se usó el operador /, esta bandera estaba en true, así que se debe cambiar a false para cuando se reinicie el cálculo))

            return; // GPT: Salir para evitar entradas adicionales

        } else 
            //// GPT: Quitar ceros a la izquierda
            display.value = display.value.replace(/(^|[^0-9])0+([0-9]+)/g, '$1$2');
            /* (( lo que entiendo: Dentro de "replace" hay un regex que busca ceros a la izquierda y los elimina dejando intactos los números válidos. 
            Replace toma dos valores separados por coma. 
                1- el patrón de búsqueda, en este caso una regex: /(^|[^0-9])0+([0-9]+)/g
                2- lo que se quiere usar para reemplazarlo: '$1$2'.

            La regex se descompone en: 
                ->Los parentesis () sirven para hacer grupos "de captura":  (^|[^0-9]) y ([0-9]+) 
                -> "/ /" se usa para señalar todo la expresión regular. 
                -> 0+ tiene el propósito de encontrar los ceros consecutivos espcíficamente
                
                >>> En el primero grupo: (^|[^0-9]), se indica: 
                    -> "^" se asegura que la siguiente "0+" propiedad se aplique solo o al principio de una string 
                    -> "|" funciona como OR para marcar la siguiente condición
                    -> [^0-9] se asegura que la siguiente propiedad "0+" se aplique justo después de un operador matemático +,-,*,/. Esto asegura que solo se seleccionen los ceros duplicados donde no son relevantes en una operación matemática. 
                
                >>> el 0+ detecta o captura los ceros duplicados cuando la condición anterior se detectó. el "+" signfica "uno o más" así que busca uno o más cercos

                >>> En el segundo grupo: ([0-9]+) se indica: 
                    -> el [0-9] captura los valores numéricos que estaban después de los ceros duplicados, dejándolos por fuera y asegura que se conserve un 0 justo antes del decimal. Ej: si tiene 00.25, deja 0.25
                    -> el "+" signfica uno o más así que busca uno o más caractéres númericos
                    
                >>> La "g" es un dicador global, y permite que se pueda buscar coincidencias en todas las lineas del código. Hace que la expresión no se detenga después de la primera coincidencia sino que búsque en toda la cadena. Ej: con la "g", la operación 0025 + 00.5 hace que quede 25 + 0.5. Sin la "g", solo quedaría 25 + 00.5
                    
                    
            '$1$2': En replace, los $1, $2, $3, etc. son llamados "backreferences" y hacen referencia al contenido de los grupos. En este caso $1 a (^|[^0-9]) y $2 a ([0-9]+)... esta parte aún no me queda tan clara ))
            */
        
            const result = eval(display.value); // GPT: Evaluar la expresión


            if (result === Infinity || result === -Infinity) {
                display.value = "No se puede dividir entre cero"; // GPT: Mensaje si hay división por cero
                display.classList.add("display-small-text"); // GPT: Añadir clase para texto pequeño
                calculoCompletado = true; // GPT: Marcar que el cálculo se ha completado
                operadorUsado = false; // GPT: Reiniciar estado de operador
            } else {
                display.value = result; // GPT: Mostrar el resultado
                display.classList.remove("display-small-text"); // GPT: Remover clase para texto pequeño
            }
        
        calculoCompletado = true; // GPT: Marcar que el cálculo se ha completado
        operadorUsado = false; // GPT: Reiniciar estado de operador
    } catch {


        display.value = "ERROR"; // GPT: Mostrar mensaje de error
        display.classList.remove("display-small-text"); // GPT: Remover clase para texto pequeño
        calculoCompletado = true; // GPT: Marcar que el cálculo se ha completado
        operadorUsado = false; // GPT: Reiniciar estado de operador
    }

}



///////////Pseudo-Código///////////////
/*
INICIO

Definir display como el elemento con ID "display"
Inicializar calculoCompletado en falso
Inicializar operadorUsado en falso

FUNCIÓN appendToDisplay(input):
    Obtener último carácter de display
    Definir lista de operadores: ['+', '-', '*', '/']

    Eliminar clase "display-small-text" de display

    SI display es "ERROR" O display contiene "No se puede dividir entre cero":
        Reiniciar display

    SI último carácter es un operador Y input es un operador:
        Reemplazar el último carácter en display con input
    SINO SI input es '.' Y el último número ya tiene un punto:
        NO hacer nada (evitar agregar otro punto decimal)
    SINO SI calculoCompletado es verdadero Y input es un número:
        Asignar input a display
        Establecer calculoCompletado en falso
    SINO SI calculoCompletado es verdadero Y input es un operador:
        Limpiar display
        Agregar input a display
        Establecer calculoCompletado en falso
        Establecer operadorUsado en verdadero
    SINO:
        Agregar input a display

FUNCIÓN clearDisplay():
    Limpiar display
    Establecer calculoCompletado en falso
    Establecer operadorUsado en falso

FUNCIÓN backspace():
    Obtener valor actual de display
    SI el valor actual tiene longitud mayor que 0:
        Eliminar último carácter de valor actual
        Actualizar display con el nuevo valor

FUNCIÓN calculate():
    TRATAR:
        SI display está vacío O termina con un operador:
            Mostrar "lo que estaba en el display" en display osea no cambiar y salir de la función

        SI display contiene '/0':
            Mostrar "No se puede dividir entre cero" en display
            Establecer calculoCompletado en verdadero
            Establecer operadorUsado en falso
            Salir de la función
        SINO:
            Reemplazar ceros a la izquierda en display
            Calcular el resultado de display usando eval()
            SI el resultado es infinito:
                Mostrar "No se puede dividir entre cero" en display
                Establecer calculoCompletado en verdadero
                Establecer operadorUsado en falso
            SINO:
                Mostrar resultado en display

        Establecer calculoCompletado en verdadero
        Establecer operadorUsado en falso

    CAPTURAR:
        Mostrar "ERROR" en display
        Establecer calculoCompletado en verdadero
        Establecer operadorUsado en falso

FIN

*/