---
hide:
  - toc
---
# 4. Segunda Forma Normal (2FN)


<div class="definition-box">
Una relación está en Segunda Forma Normal (2FN) cuando:
<ul>
    <li>Está previamente en Primera Forma Normal (1FN).</li>
    <li>Todos los atributos que no forman parte de la clave dependen totalmente de la clave primaria.</li>
</ul>
Es decir, no pueden existir dependencias parciales respecto a una clave compuesta.
</div><p></p>
  
---  
  
Esta forma normal solo se considera si la clave principal es compuesta, y por tanto, está formada por varios atributos.


Si una tabla **T** tiene como atributos **A, B, C, D** y la clave es **A . B** cumpliéndose las dependencias:

**A . B** →**C**

**B** →**D**

Se observa que la tabla no se encuentra en 2FN ya que el atributo D no tiene una dependencia funcional total con la clave completa A . B, sino con una parte de la clave (B). El grafo de las dependencias funcionales sería:  


![alt text](image-5.png){ width=400 }


## Poner en 2FN

Para convertir una tabla que no está en segunda forma normal a 2FN, se realiza una proyección en dos partes:

<div class="tables-side-by-side equal-height" markdown>

<div markdown>

### Parte A. Tabla principal

Se crea una **primera tabla** con la clave y todas sus dependencias totales con los atributos secundarios afectados:

![alt text](image-9.png){width=400}

</div>

<div markdown>

### Parte B. Tabla de la dependencia parcial

Se crea una **segunda tabla** con la parte de la clave que tiene dependencias, y los atributos secundarios implicados:

![alt text](image-10.png){width=450}

</div>

</div>

!!!warning "Gráficamente"
    Si existe una flecha que sale del interior de la caja que engloba la clave, entonces la tabla no está en 2FN.

### Ejemplo aplicado

**Ejemplo**: Tabla con las personas que trabajan en diversas empresas con el sueldo correspondiente, con los atributos: **DNI, NOMBRE, EMPRESA, SUELDO**

Entre los atributos existen las dependencias:

**DNI** →**NOMBRE**

**DNI . EMPRESA** →**SUELDO**


<div class="tables-side-by-side equal-height" markdown>

<div markdown>

**Grafo de dependencias**

![alt text](image-39.png){width=425}

</div>

<div markdown>

**Grafo normalizado**

![alt text](image-38.png){width=300}

</div>

</div>

De manera que la representación de las tablas al **modelo relacional** quedaría de la manera siguiente:

!!! quote ""
    - EMPLEADO (<u>dni, empresa</u> sueldo)
    - PERSONA (<u>dni</u>, nombre)


