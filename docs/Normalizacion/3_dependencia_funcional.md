# 3. Dependencia Funcional

<div style="background-color: #d6eaf8; color: black; padding: 5px;"> 
Un atributo o conjunto de atributos <b>Y</b> depende funcionalmente del atributo o conjunto de atributos <b>X</b>, y se representa como <br>
<b>X → Y</b>, si y solo si cada valor de X se corresponde con un único valor de Y.  
</div>  
<p></p>  


Por ejemplo, entre DNI y NOMBRE existe una dependencia funcional, ya que el valor DNI se corresponde con un único nombre.

>>>**DNI** →**NOMBRE**

En este caso (suponiendo que el NOMBRE es único y no existen dos nombres iguales) se cumple también la dependencia

>>>**NOMBRE** →**DNI**

y lo podríamos abreviar por

>>>**DNI** ←→**NOMBRE**

No siempre se da de forma biunívoca la dependencia funcional entre dos atributos, es más, en pocos casos sucede. Por ejemplo, entre los atributos DNI y DIRECCIÓN existe una dependencia funcional ya que una persona identificada por su DNI vive en una única DIRECCIÓN.

>>>**DNI** →**DIRECCIÓN**

Pero en este caso no se da la dependencia en sentido inverso, porque en una DIRECCIÓN viven unas cuantas personas. Además, la dirección no nos dice ni siquiera la ciudad donde se encuentra (por ejemplo, el "C/ Mayor, 7" se encuentra en muchas ciudades)

Hay atributos que no tienen entre ellos una dependencia funcional como es el caso de DIRECCIÓN y FECHA_NACIMIENTO.



En muchas ocasiones, para determinar un único valor de un atributo, no es suficiente con conocer el valor de otro atributo, sino que es necesario encontrar los valores de unos cuantos atributos. Eso es lo que pasa, si tenemos los atributos: DNI, EMPRESA y SUELDO, y sabemos que una persona puede trabajar en más de una empresa. Entre los atributos DNI y SUELDO no existe ninguna dependencia funcional, ya que un individuo puede ganar sueldos distintos en empresas distintas. Pero si conocemos la empresa en la cual trabaja, sí que podemos decir que:

>>>**DNI . EMPRESA** →**SUELDO**

El operador punto "." representa la expresión "junto con" o "y" entre los dos atributos y el operador barra "|" hace referencia a la expresión "o también".

Por lo tanto, podemos decir que DNI "junto con" EMPRESA determinan el SUELDO. Y para la dependencia:

>>>**DNI** →**NOMBRE | DIRECCIÓN**

diremos que con el DNI se conoce el NOMBRE "o también" la DIRECCIÓN.



## 3.2 Dependencia Funcional Total

<div style="background-color: #d6eaf8; color: black; padding: 5px;"> 
Se dice que el atributo <b>Y</b> tiene una <b>dependencia funcional total</b> del atributo <b>X</b> si tiene una dependencia funcional de X y NO depende funcionalmente de ningún subconjunto de X.  
</div><p></p>
---  
  


Por ejemplo, una dependencia funcional sería:

>>>**DNI . EMPRESA** →**NOMBRE**

Pero, lógicamente, esta dependencia no es total ya que NOMBRE depende funcionalmente de DNI. Por eso, a esta dependencia se le llama **dependencia parcial**.

La **dependencia funcional total** sería:

>>>**DNI . EMPRESA** →**SUELDO**

Ahora sí, el SUELDO no depende funcionalmente de ningún subconjunto.

Es evidente que si X está formado únicamente por un atributo, la dependencia funcional será total.
<div style="background-color: #d6eaf8; color: black; padding: 5px;"> 
Las dependencias que nos interesan para la normalización son siempre las dependencias funcionales totales.
</div></p>



## 3.3 Grafo de las Dependencias Funcionales

Sirve para mostrar gráficamente la relación existente entre todos los atributos y es una forma clara de tener una visión general de los datos y de la cohesión existente entre ellos. La clave principal se representa dentro de una caja de líneas continuas con sus atributos primarios. El resto de los atributos se representa fuera de la caja.

Si existen dependencias de un conjunto de atributos que no son la clave, irán dentro de una caja de líneas discontinuas para no confundirlo con la clave principal de la tabla.

**Ejemplo:**

![](T4_3_3_ej.png)



Esta tabla refleja un conjunto de pedidos y cumple con las dependencias funcionales especificadas:

* A,B,C→M,S: La combinación del **ID Cliente, Región e ID Producto** determina de manera única el **ID Pedido y la Fecha de Pedido**. 
* M→N: Cada **ID de Pedido** tiene una cantidad asociada (**Cantidad**). 
* B,C→O,R: La combinación de **Región e ID Producto** determina de manera única el **Nombre del Producto y el Precio Unitario** (puede variar según la región). 
* O→P: El **Nombre del Producto** determina su **Categoría**. 
* C→Q: El **ID de Producto** determina el **Impuesto por Región**, ya que depende del tipo de producto. 
***
**A . B . C** →**M | S**  
**M** →**N**  
**B . C** →**O | R**  
**O** →**P**  
**C** →**Q**  
**(clave = A . B . C)**



El grafo asociado es:

![](T4_3_1.png)


Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial SinObraDerivada 3.0](http://creativecommons.org/licenses/by-nc-nd/3.0/)
