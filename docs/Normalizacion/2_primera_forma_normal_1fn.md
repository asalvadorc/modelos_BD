---
hide:
  - toc
---
# 2. Primera Forma Normal (1FN)

 
<div class="definition-box">
  <div class="box-title">Definición (1FN)</div>
  Una relación está en Primera Forma Normal (1FN) cuando todos sus atributos contienen valores atómicos, es decir, cada celda almacena un único valor y no existen grupos repetitivos ni atributos multivaluados.
</div>
---  

!!!Warning "Problemas cuando una tabla no cumple la Primera Forma Normal (1FN):"
    - Redundancia de datos, al almacenar información repetida.
    - Anomalías de inserción, actualización y borrado, que pueden provocar inconsistencias o pérdida de información.
    - Consultas más complejas, debido a que los datos no están organizados de forma uniforme.
    - Menor flexibilidad y mayor mantenimiento, al dificultar la ampliación y modificación de la base de datos.


!!!Note "Casos en los que una tabla no está en 1FN:"
    - Varios valores en una misma celda.
    - Un campo para cada posible valor.
    - Atributos compuestos.

<div class="case-card" markdown>

**<span class="case-badge">CASO 1</span> Varios valores en una misma celda**

En este caso tenemos un campo para almacenar varias medidas de un mismo material.

<u>**COD-MAT**</u> |  **DESCRIPCIÓN** |  **MEDIDAS**  
---|---|---  
039  |  Tornillo  |  3,5 - 5 - 7 - 9   
067  |  Arandela  |  2 - 5   
461  |  Broca  |  2,5 - 3 - 3,5   

</div>

<div class="case-card" markdown>

**<span class="case-badge">CASO 2</span> Un campo para cada posible valor (grupos repetitivos)**

En este caso tenemos un campo para cada medida. 

<u>**COD-MAT**</u> |  **DESCRIPCIÓN** |  **MEDIDA1** | **MEDIDA2** |  **MEDIDA3** | **MEDIDA4**  
---|---|---|---|---|---  
039  |  Tornillo  |  3,5  |  5 |  7 |  9  
067  |  Arandela  |  2  |  5 |  |   
461  |  Broca  |  2,5  |  3 |  3,5 |   

</div>

<div class="case-card" markdown>

**<u>Poner en 1FN</u>**

Los casos **1** y **2** comparten la misma solución: la tabla que no estaba en 1FN **se descompone** en **dos** tablas distintas:

<div class="tables-side-by-side" markdown>

<div markdown>

**A)** La **primera tabla** se creará con los siguientes atributos:

  * La clave de la tabla original.
  * Los atributos atómicos (los que contienen valores únicos).


<u>**COD-MAT**</u> |  **DESCRIPCIÓN**
---|---
039  |  Tornillo
067  |  Arandela
461  |  Broca

</div>

<div markdown>

**B)** La **segunda tabla** se creará con los siguientes atributos:

  * La clave de la tabla original.
  * Los atributos que contienen varios valores se separan en distintas filas, de forma que en cada fila aparezca un único valor.

La clave primaria de esta segunda tabla estará formada por **COD-MAT + MEDIDA**.

<u>**COD-MAT**</u> | <u>**MEDIDA**</u>
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

</div>

</div>

Con esta descomposición se eliminan los grupos repetitivos y se consigue que cada celda almacene un único valor atómico.

  
</div>

<div class="case-card" markdown>

**<span class="case-badge">CASO 3</span> Atributos compuestos**

En este caso el atributo PROVEEDOR mezcla dos datos distintos: el nombre del proveedor y la ciudad.

<u>**COD-MAT**</u> |  **DESCRIPCIÓN** |  **PROVEEDOR**  
---|---|---  
039  |  Tornillo  |  Ferretería López, Castellón   
067  |  Arandela  |  Suministros Pérez, Valencia  
461  |  Broca  |  Herramientas SL, Madrid  

**<u>Poner en 1FN</u>**

Si el problema es un **atributo compuesto**, la solución no consiste en crear una segunda tabla, sino en **descomponer ese atributo en atributos atómicos** dentro de la misma relación.


<u>**COD-MAT**</u> | **DESCRIPCIÓN** | **PROVEEDOR** | **CIUDAD**
---|---|---|---
039 | Tornillo | Ferretería López | Castellón
067 | Arandela | Suministros Pérez | Valencia
461 | Broca | Herramientas SL | Madrid

En este caso, la tabla queda en 1FN porque cada atributo almacena un único dato elemental.

</div>






