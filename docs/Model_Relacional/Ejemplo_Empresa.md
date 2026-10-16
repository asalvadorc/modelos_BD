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
    - EMPLEADO (<u>dni</u>, nombre, direccion, telefono, sueldo, fecha_n, <mark>departamento</mark>, <mark>supervisor</mark>)
        - FK: departamento->DEPARTAMENTO(num_d) <span class="tag-no-nulo">[no nulo]</span>
        - FK: supervisor->EMPLEADO(dni)
    - FAMILIAR (<u><mark>dni_e</mark>, nombre_f</u>, fecha_n, parentesco, ) <span class="tag-cascade">(borrar en cascada)</span>
        - FK: dni_e->EMPLEADO(dni)
    - DEPARTAMENTO (<u>num_d</u>, nombre_d, <mark>director</mark>, fecha)
        - FK: director->EMPLEADO(dni) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
    - PROYECTO (<u>num_p</u>, nombre_p, <mark>departamento</mark>)
        - FK: departamento->DEPARTAMENTO(num_d) <span class="tag-no-nulo">[no nulo]</span>
    - TRABAJA (<u><mark>dni</mark>, <mark>num_p</mark></u>, horas)    
        - FK: dni->EMPLEADO(dni)
        - FK: num_p->PROYECTO(num_p)
    

Y esta sería la forma alternativa de representarlo:


![alt text](image-40.png){width=600}


Y teniendo en cuenta la especialización:

???+ "Ejemplo con especialización: Empresa"
    ![Ejemplo: Empresa](image-30.png)
    

!!! quote ""
    - EMPLEADO (<u>dni</u>, nombre, direccion, telefono, sueldo, fecha_n, <mark>departamento</mark>, <mark>supervisor</mark>)
        - FK: departamento->DEPARTAMENTO(num_d) <span class="tag-no-nulo">[no nulo]</span>
        - FK: supervisor->EMPLEADO(dni)
    - JEFE (<u><mark>dni</mark></u>, opinion) <span class="tag-cascade">(borrar en cascada)</span>
        - FK: dni->EMPLEADO(dni)
    - TRABAJADOR  (<u><mark>dni</mark></u>, horas_extra)  <span class="tag-cascade">(borrar en cascada)</span>
        - FK: dni->EMPLEADO(dni)     
    - FAMILIAR (<u><mark>dni_e</mark>, nombre_f</u>, fecha_n, parentesco, ) <span class="tag-cascade">(borrar en cascada)</span>
        - FK: dni_e->EMPLEADO(dni)
    - DEPARTAMENTO (<u>num_d</u>, nombre_d, <mark>director</mark>, fecha)
        - FK: director->JEFE(dni) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
    - PROYECTO (<u>num_p</u>, nombre_p, <mark>departamento</mark>)
        - FK: departamento->DEPARTAMENTO(num_d) <span class="tag-no-nulo">[no nulo]</span>
    - TRABAJA (<u><mark>dni</mark>, <mark>num_p</mark></u>, horas)    
        - FK: dni->EMPLEADO(dni)
        - FK: num_p->PROYECTO(num_p)
    

Y aquí tendríamos la representación alternativa:



![alt text](image-41.png){width=600}