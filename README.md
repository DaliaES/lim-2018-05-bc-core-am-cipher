
# Cifrado César ReadMe Demo version 1.0

## Descripcion del proyecto

La aplicacion web de Cifrado Cesar es un proyecto, que tiene como objetivo ser  
una herramienta de comunicacion mediante un lenguaje "codificado" o "en clave",
de modo que en cualquier contexto, las personas usuarias y conocedoras del uso 
de este cifrado, accederan al uso de la aplicacion.

La web tiene un diseño simple y de facil acceso,tiene dos cajas de texto para 
el ingreso del mensaje, segun la necesidad del usuario de cifrar o descifrar; 
una pequeña caja para el ingreso del numero de desplazamiento y tres botones 
para ejecutar la opcion de Cifrar descifrar o borrar.

## Desarrollo del producto final

### Experiencia del usuario

La aplicacion esta diseñada especialmente para usuarios que necesiten comunicarse con 
determinadas personas a atravez de un lenguaje "desconocido" para otras personas de 
modo que estas no entiendan el mensaje. Las circunstancias para el uso de un cifrado 
cesar pueden ser diversas desde enviar mensajes confidenciales hasta la organizacion 
de una fiesta sorpresa.

El cifrado cesar es un metodo sencillo de desplazamiento que cualquier persona podria 
usar realizando la sustitucion con lapiz y papel. Sin embargo para mensajes extensos 
y con numeros altos de desplazamiento, podria resultar tedioso el proceso de cifrado 
y descifrado; por lo que se requiere un sistema que devuelva un resultado inmediato.
La aplicacion es una solucion a esta necesidad, de modo que el usuario logra tener 
eficiencia en su comunicacion.

### Diseño de Interfaz

El diseño de la estructura de la web esta pensada para la realizacion de dos acciones
inversas, cifrado y descifrado; por esta razon se coloco dos cuadros de texto, uno 
a cada extremo de la pantalla y un pequeño cuadro input en medio de estos dos, cada 
uno con una etiqueta con la indicacion de lo que se ingresa en ellos.

De modo que en el cuadro texto izquierdo o derecho se ingresa el texto segun la 
necesidad de cifrar o descifrar, el usuario tiene la libertad de colocar en el cuadro 
de en medio el numero de desplazamiento que elegira y el mensaje deseado se mostrara 
en el cuadro contrario al que se escribio el mensaje.

## Instrucciones de Acceso

La aplicacion es una primera version (demo), por lo que no requiere de instalacion 
o configuracion para su ejecucion. Para acceso a ella se debe ingresar a la web de
[Cifrado César](https://daliaes.github.io/lim-2018-05-bc-core-am-cipher/).

## Instrucciones de Operacion

### Accion de Cifrado

Para obtener un mensaje cifrado se debe seguir los pasos a continuacion:

1. Escribir el mensaje que se quiere cifrar en el cuadro del lado izquierdo.
2. Escribir en el cuadro del medio el numero de desplazamiento elegido para cifrar 
el mensaje.
3. Dar click en el boton Cifrar.
4. Listo, obtendras tu mensaje cifrado en el cuadro del lado derecho.

### Accion de Descifrado

En el caso que tengas un mensaje cifrado y quieras obtener el mensaje original 
debes seguir estos pasos pasos:

1. Escribir el mensaje cifrado en el cuadro del lado derecho.
2. Escribir en el cuadro del medio el numero de desplazamiento que se tiene para 
descifrar el mensaje.
3. Dar click en el boton Descifrar.
4. Listo, obtendras el mensaje original en el cuadro del lado izquierdo.

## Funcionalidad

la funcionalidad del cifrado esta estructurado en el uso de un objeto llamado cipher, 
que contiene dos funciones una para cada accion; encode para cifrar y decode para 
descifrar. Las funciones encode y decode tienen dos parametros: offset(numero de 
desplazamiento) y string(texto ingresado); estas se desarrollan bajo el uso del codigo 
ASCI.

Primero se definio una funcion que valida el rango de codigo ASCI para mayuscula y 
minuscula, esta funcion debe retornar true para que se ejecute lo definido en la funcion 
encode.

Luego se definieron las funciones backasci y next asci en las que se define las 
condiciones y la accion que realizara la funcion para ejecutarla, de modo que devuelva 
el string codificado.

Por ultimo en las funciones encode y decode solo se llaman a las funciones anteriores y se 
define el resultado a retornar.

## Contacto

Dalia Escudero Vera
dalia.escuderov@gmail.com


