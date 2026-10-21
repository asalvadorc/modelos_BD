---
hide:
    - toc
---

# Ejemplo Completo

Vamos a ver cómo quedará definitivamente la traducción del ejemplo que estamos arrastrando desde el Tema 2. Daremos 2 versiones, teniendo en cuenta o no la especialización de que el trabajador puede ser jefe o trabajador normal.

Sin tener en cuenta la especialización tendremos esta solución:

???+ "Ejemplo: Empresa"
    ![Ejemplo: Empresa](image-28.png){width=800}

!!! quote ""
    - EMPLEADO (<u>dni</u>, nombre, direccion, telefono, sueldo, fecha-n, <mark>departamento</mark>, <mark>supervisor</mark>)
        - PK: (dni)
        - FK: departamento->DEPARTAMENTO(num-d) <span class="tag-no-nulo">[no nulo]</span>
        - FK: supervisor->EMPLEADO(dni)
    - FAMILIAR (<u><mark>dni-e</mark>, nombre-f</u>, fecha-n, parentesco, ) <span class="tag-cascade">(borrar en cascada)</span>
        - PK: (dni-e, nombre-f)
        - FK: dni-e->EMPLEADO(dni)
    - DEPARTAMENTO (<u>num-d</u>, nombre-d, <mark>director</mark>, fecha)
        - PK: (num-d)
        - FK: director->EMPLEADO(dni) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
    - PROYECTO (<u>num-p</u>, nombre-p, <mark>departamento</mark>)
        - PK: (num-p)
        - FK: departamento->DEPARTAMENTO(num-d) <span class="tag-no-nulo">[no nulo]</span>
    - TRABAJA (<u><mark>dni</mark>, <mark>num-p</mark></u>, horas)    
        - PK: (dni, num-p)
        - FK: dni->EMPLEADO(dni)
        - FK: num-p->PROYECTO(num-p)
    

Y esta sería la forma alternativa de representarlo:


![alt text](image-40.png){width=600}


Y teniendo en cuenta la especialización:

???+ "Ejemplo con especialización: Empresa"
    ![Ejemplo: Empresa](image-30.png)
    

!!! quote ""
    - EMPLEADO (<u>dni</u>, nombre, direccion, telefono, sueldo, fecha-n, <mark>departamento</mark>, <mark>supervisor</mark>)
        - PK: (dni)
        - FK: departamento->DEPARTAMENTO(num-d) <span class="tag-no-nulo">[no nulo]</span>
        - FK: supervisor->EMPLEADO(dni)
    - JEFE (<u><mark>dni</mark></u>, opinion) <span class="tag-cascade">(borrar en cascada)</span>
        - PK: (dni)
        - FK: dni->EMPLEADO(dni)
    - TRABAJADOR  (<u><mark>dni</mark></u>, horas-extra)  <span class="tag-cascade">(borrar en cascada)</span>
        - PK: (dni)
        - FK: dni->EMPLEADO(dni)     
    - FAMILIAR (<u><mark>dni-e</mark>, nombre-f</u>, fecha-n, parentesco, ) <span class="tag-cascade">(borrar en cascada)</span>
        - PK: (dni-e, nombre-f)
        - FK: dni-e->EMPLEADO(dni)
    - DEPARTAMENTO (<u>num-d</u>, nombre-d, <mark>director</mark>, fecha)
        - PK: (num-d)
        - FK: director->JEFE(dni) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
    - PROYECTO (<u>num-p</u>, nombre-p, <mark>departamento</mark>)
        - PK: (num-p)
        - FK: departamento->DEPARTAMENTO(num-d) <span class="tag-no-nulo">[no nulo]</span>
    - TRABAJA (<u><mark>dni</mark>, <mark>num-p</mark></u>, horas)    
        - PK: (dni, num-p)
        - FK: dni->EMPLEADO(dni)
        - FK: num-p->PROYECTO(num-p)
    

Y aquí tendríamos la representación alternativa:



![alt text](image-41.png){width=600}
