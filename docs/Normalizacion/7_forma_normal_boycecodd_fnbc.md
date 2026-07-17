---
hide:
  - toc
---


# 7. Forma Normal Boyce-Codd (FNBC)



Tras la creación de la 3FN se observó, posteriormente, que podían haber anomalías que no eran abordadas. De todas formas son unas redundancias ya muy extrañas, y que a veces no valdrá la pena considerarlas.  

Son casos de tablas que aunque están en 3FN, mantienen una dependencia de un atributo secundario con parte de la clave. Es el único caso de dependencia transitiva que se nos podía haber escapado. Gráficamente es el siguiente caso:

![alt text](image-29.png){width=200}


<div class="definition-box">
Una tabla está en <b>FNBC</b> cuando todas las dependencias funcionales tienen como origen una clave candidata. Es decir, ningún atributo que no sea clave puede determinar a otros atributos.
</div><p></p>
---  
  


La definición engloba la 3FN ya que las dependencias transitivas existen por medio de atributos secundarios que no eran clave.

Si la clave está formada por un único atributo y ya estaba en 3FN, la tabla está en FNBC (como sucedía con la 2FN).

<u>**Ejemplo**</u>: Tabla de una guía de calles

![alt text](image-32.png){width=300}

 
Las dependencias funcionales que nos encontramos son:

**DIRECCIÓN . CIUDAD** →**CODPOST**

**CODPOST** →**CIUDAD**

Gráficamente:

![alt text](image-30.png){width=400}


Si observamos atentamente las tuplas de una tabla como esta, veremos que para un mismo código postal existen multitud de tuplas que se corresponden con la misma ciudad (tantas como direcciones haya diferentes), por lo tanto existe información duplicada.



Si la información, una vez que se da de alta no varía, es más rentable que la dependencia funcional **CODPOST** → **CIUDAD** se encuentre en otra tabla y que exista una sola tupla para cada código postal.

Además, ¿qué sucede si se elimina la tupla con dirección "C/ Sol, 4" de "Vinaròs" e la tupla "C/ Mar, 4" de "Vinaròs"? Lo que ocurre es que desaparece la relación entre el código postal "12500" y "Vinaròs" y quizás estos datos deberían mantenerse.



Si analizamos con más detalle la tabla, veríamos que en realidad se puede sustituir la clave principal por **A + C** (en el ejemplo **DIRECCIÓN + CÓDIGO POSTAL**), ya que si A + B ya era clave principal, como por cada valor de C solo podemos tener uno de B, la combinación A + C también podrá identificar unívocamente cada ocurrencia de la tabla. Por lo tanto, si sustituyéramos la clave principal, ya no tendríamos dudas de cómo normalizar la tabla, que será justamente como veremos a continuación:

![](T4_7_1.png)  es equivalente a   ![](T4_7_1_5.png)  
  


**Poner en FNBC**

El algoritmo de descomposición que se aplica a una tabla que no está en FNBC es el siguiente:

Si tenemos una dependencia funcional **C → B** donde **C** y **B** son disjuntos, **C** es un atributo no primario, y **B** forma parte de la clave.

Se obtienen las proyecciones:

| Opción | Descripción |
| --- | --- |
| **A)** | Una **primera tabla T1** con todos los atributos, excepto **B** (el que formaba parte de la clave principal); ahora formará parte de la clave principal **C**. |
| **B)** | Una **segunda tabla T2** con los atributos **C** e **B**, y será la clave principal **C**. |


| A) | B) |
| --- | --- |
| ![](T4_7_3.png) | ![](T4_7_4.png) |
  
En el ejemplo de la GUÍA DE CALLES:

![alt text](image-35.png){width=400}


Y quedarían con la siguiente información:

| DIRECCIÓN-CODPOST | CODPOST-CIUDAD |
| --- | --- |
| ![alt text](image-33.png){width=200} | ![](image-34.png){width=200} |


Por último, observemos las tablas que nos quedan. ¿Querremos tener una tabla de códigos postales? Si el diseño es para Correos o Telefónica, o una empresa grande que tenga muchos clientes y los quiere tener distribuidos por códigos postales, pues seguro que sí.

Pero si se trata de una empresa no demasiado grande, y que tampoco interesa demasiado la distribución por códigos postales, seguramente mantener una tabla de códigos postales puede parecer incluso ridículo. Entonces, mantener la tabla en 3FN y asumir la poquita redundancia que supone no tenerla en FNBC, puede ser incluso saludable. Por eso se ha comentado desde el principio del tema la importancia de normalizar hasta la 3FN, y la FNBC tiene una importancia relativa.

De manera que la representación de las tablas al **modelo relacional** quedaría de la siguiente manera:
<pre><cod>
    GUIA-DIRECCIÓN(<b>dirección, codpos</b>)
    GUIA-CODPOST(<b>codpost</b>, ciudad)
</cod></pre>
