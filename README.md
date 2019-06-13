
# Cipher CRYPTOGRAMAFUN

### Definición del producto

Esta es la primera versión de una aplicación de cifrado de mensajes que en algún momento se pretende que cumpla también la función de compartirlos (por medio de facebook, messenger, whatsapp, etc.).

Esta primera versión se aprecia correctamente sólo en computadora.

El diseño está pensado en que sea sencillo de utilizar e intuitivo. Puede utilizarlo cualquier persona que desee enviar mensajes en clave ya sea por necesidad o diversión.

Actualmente el programa resuelve los problemas de cifrado y descifrado de un mensaje utilizando el "cifrado César", y permitiendo que el usuario elija la cantidad de espacios (offset) con los que desea cifrar-descifrar.

### ¿Qué es el "Cifrado César"?

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

### Instrucciones

Ingresa a la liga: https://karlaalvarezlaboratoria.github.io/GDL003-cipher/src/

Una vez en el programa tendrás la opción de ingresar a la página de cifrado o descifrado del mensaje.

Con tu compañer@ de mensajes determinen previamente el numero de offset (espacios) que desean utilizar para cifrar o descifrar su mensaje.

Ingresa tu mensaje en la caja de texto (puedes utilizar mayúsculas, minúsculas y espacios) y define el número de offset, a continuación presiona el botón "CIFRAR" O "DESCIFRAR", esto te arrojará el texto modificado.

### Interfaz de usuario (UI)

La interfaz de la versión 1.0 permite al usuario:


* Insertar el mensaje (texto) que queremos cifrar.
* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el descifrado desplace cada caracter.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

Este proyecto contiene los siguentes archivos.

* `README.md`: Explica cómo acceder y   ejecutar la aplicación a travéz de la liga. Así como una introducción a la aplicación, su funcionalidad y decisiones de diseño.

* `src/index.html`: Este archivo
  contiene el _markup_ (HTML) e incluye el enlace al CSS y JavaScript necesario.
* `src/cipher.js`: Aqui implemento el objeto cipher, el cual debe está
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`)
  contiene dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: Aquí le doy funcionalidad a mi página e invoco `cipher.encode()`
  o `cipher.decode()` además de actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo los cuales fueron implementados y aprobados para `cipher.encode()` y `cipher.decode()`.
