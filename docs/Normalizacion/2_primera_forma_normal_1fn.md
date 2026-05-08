# 2. Primera Forma Normal (1FN)

 
<div style="background-color: #d6eaf8; color: black; padding: 5px;"> 
Una tabla está en 1FN si y solo si los valores que componen cada atributo de una tupla son atómicos. Es decir, en un atributo no deben aparecer valores repetitivos.</div>
---  


Por ejemplo, en la siguiente tabla hay una serie de tipos de materiales existentes en una ferretería. Un material tiene un código que lo identifica, su descripción y sus medidas (la clave principal es el campo subrayado)

**MATERIALES**

<u>**COD-MAT**</u> |  **DESCRIPCIÓN** |  **MEDIDAS**  
---|---|---  
039  |  Tornillo  |  3,5 - 5 - 7 - 9   
067  |  Arandela  |  2 - 5   
461  |  Broca  |  2,5 - 3 - 3,5   
  
Los problemas que plantea **el campo MEDIDAS** son los siguientes:

  * La falta de espacio en el campo para los valores que puedan aparecer o, por el contrario, el desaprovechamiento del atributo cuando existen pocos valores. 

  * La dificultad del tratamiento para actualizaciones, consultas y búsquedas de un valor determinado. 

  

**<u>Poner en 1FN</u>**

Para pasar a 1FN una tabla que no lo estaba **se descompone** en **dos** distintas:

**A)** La **primera tabla** será la proyección de la tabla original sobre los siguientes atributos:

  * La clave de la tabla original. 
  * Los atributos atómicos (los que contienen valores únicos). 
  
**MATERIALES**

<u>**COD-MAT**</u> |  **DESCRIPCIÓN**  
---|---  
039  |  Tornillo   
067  |  Arandela   
461  |  Broca


  
**B)** La **segunda tabla** será la proyección de la tabla original sobre los siguientes atributos:

  * La clave de la tabla original. 
  * Los atributos que tienen valores múltiples, distribuyendo estos valores múltiples en tuplas distintas y por lo tanto en una fila existirá un único valor elemental. 

> La clave de esta segunda tabla estará formada por todos los atributos.

**MAT-MEDIDAS**

<u>**COD-MAT**</u> | **MEDIDA**  
---|---  
039  |  3,5   
039  |  5   
039  |  7   
039  | 9   
067  |  2   
067  |  5   
461  |  2,5   
461  |  3   
461  |  3,5   
  

<u>**Nota**</u> 
<div style="background-color: #d6eaf8; color: black; padding: 5px;"> 
También deberemos ser capaces de detectar que no está en 1FN cuando tenemos unos atributos multivaluados "encubiertos". Por ejemplo, una variante del ejemplo anterior podría ser:
</div>
<p></p>

**MATERIALES**

<u>**COD-MAT**</u> |  **DESCRIPCIÓN** |  **MEDIDA1** | **MEDIDA2** |  **MEDIDA3** | **MEDIDA4**  
---|---|---|---|---|---  
039  |  Tornillo  |  3,5  |  5 |  7 |  9  
067  |  Arandela  |  2  |  5 |  |   
461  |  Broca  |  2,5  |  3 |  3,5 |   
  


Se ve que se trata de una manera de "disimular" los atributos multivaluados. Estamos ante el mismo caso que en el ejemplo de arriba y tendremos los mismos problemas, y por lo tanto la solución es la misma.  



Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial SinObraDerivada 3.0](http://creativecommons.org/licenses/by-nc-nd/3.0/)
