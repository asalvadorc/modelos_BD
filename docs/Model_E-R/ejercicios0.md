# Ejercicios

!!! tip er-review "Revisa tu solución"

    Antes de consultar la solución oficial, revisa tu propuesta utilizando el prompt del apartado **[Cómo utilizar la IA para aprender](../IA.md)**.

    Existen distintas convenciones para representar y leer las cardinalidades en los diagramas E/R. La IA puede utilizar una diferente a la de estos apuntes, por lo que conviene indicarle cuál usamos. Añade este texto al prompt general:

    ```text
    Hay distintas convenciones para leer las cardinalidades. En estos apuntes, se leen al otro lado de la relación: 

    Ejemplo: DEPARTAMENTO (1)—PERTENECE—(N) EMPLEADO significa que un departamento tiene muchos empleados y cada empleado pertenece a un único departamento.

    Usa esta convención y, antes de corregir las cardinalidades, explica cómo has leído la relación en ambos sentidos.
    ```
    
## <span class="exercise-title"><span class="exercise-icon">📝</span><span>Ejercicio 1 bis</span></span>

Diseñar el esquema E/R del ejercicio 1

## <span class="exercise-title"><span class="exercise-icon">📝</span><span>Ejercicio 2</span></span>

Diseñar un esquema E/R que recoja información sobre el **padrón** de municipios, viviendas y
personas. Cada persona solo puede habitar una vivienda y residir en un municipio,
pero puede ser propietaria de más de una vivienda. Evidentemente, una vivienda puede
tener más de un propietario. Nos interesa también la relación de las personas con su responsable de familia.
