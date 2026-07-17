---
hide:
  - toc
---

# 6. Tercera Forma Normal (3FN)


<div class="definition-box">
Se dice que una tabla está en Tercera Forma Normal (3FN) cuando se cumplen dos condiciones:
<ul>
  <li>Se encuentra en 2FN.</li>
  <li>No existen dependencias transitivas.</li>
</ul>
  Es decir, ningún atributo no clave depende de otro atributo no clave.

</div><p></p>  
---  
  
Esto significa que un atributo secundario solo puede depender directamente de la clave principal (o de una clave candidata) y nunca de otro atributo secundario. Si un atributo se obtiene a través de otro atributo no clave, existe una dependencia transitiva y la tabla no cumple la Tercera Forma Normal (3FN).

En un grafo de dependencias para comprobar la 3FN, solo se dibujan las dependencias entre atributos no clave, ya que las dependencias desde la clave hacia el resto de atributos se consideran implícitas.



**Ejemplo:** **A** es la clave principal, **B** es una clave candidata y se dan las siguientes dependencias:

**A** →**B B** →**A C** →**D**

**A** →**C B** →**C C** →**E**

**A** →**D B** →**D**

**A** →**E B** →**E**

El grafo queda del siguiente modo:  

<div class="tables-side-by-side" markdown>

<div markdown>

**Opción 1**

![alt text](image-16.png){width=400}

</div>

<div markdown>

**Opción 2**

![alt text](image-17.png){width=450}

</div>

</div>


Las flechas que muestran las dependencias funcionales que tiene la clave candidata B no se representan (como hemos dicho anteriormente) porque son evidentes y no simplifican la visión del grafo. Además, para la normalización, no se necesitan para nada; por el contrario, suelen complicar el análisis.

La tabla T no está en 3FN ya que los atributos D y E son transitivamente dependientes respecto de la clave A.



**<u>Poner en 3FN</u>**

Para normalizar una tabla que no esté en tercera forma normal, es decir, que tenga dependencias transitivas, descompondremos la tabla en más de una tabla:

<div class="tables-side-by-side" markdown>

<div markdown>

**A)** Una **primera tabla** con la clave principal más los atributos que no dependen transitivamente

![alt text](image-18.png){width=400}

</div>

<div markdown>

**B)** Una **segunda tabla** con los atributos que dependen transitivamente, más el atributo del que dependen, que será clave principal

![alt text](image-19.png){width=400}

</div>

</div>


Se hará una descomposición por cada dependencia transitiva que haya que afecte a campos distintos.


**<u>Ejemplo</u>**

<div class="case-card" markdown>

Para el ejemplo de los atributos NUMMAT, GRUPO y AULAGRUPO tenemos el siguiente grafo:

![alt text](image-47.png){width=650}

Una vez descompuesta la tabla, según el algoritmo anterior, tendremos dos tablas, que si sen encuentran en 3FN:

![alt text](image-46.png){width=700}



De manera que la representación de las tablas al **modelo relacional** quedaría de la siguiente manera:

!!! quote ""
    - ALUMNOS (<u>nummat</u>, grupo)
    - GRUPOS (<u>grupo</u>, aulagrupo)

</div>
****

**Ejemplo del apartado 3.3**

A continuación, se presenta un ejemplo completo que ilustra cómo identificar las dependencias transitivas y normalizar una tabla a la Tercera Forma Normal.

<div class="tables-side-by-side equal-height" markdown>

<div markdown>


![alt text](image-20.png){width=650}


</div>

<div markdown>

**Grafo de dependencias**

![alt text](image-42.png){width=650}


</div>

</div>

La solución quedaría así:

![alt text](image-24.png){width=600}

![alt text](image-28.png){width=800}
