# 7. Restricciones Externas

A pesar de todas las características del Modelo E/R Extendido, existen requerimientos que **no se pueden representar gráficamente** en el diagrama.

## ¿Qué son las Restricciones Externas?

Son requerimientos o reglas del negocio que se expresan **en lenguaje natural** (palabras) porque el diagrama E/R tiene limitaciones.

!!! warning "Limitación del Modelo"
    El Modelo E/R es una herramienta poderosa pero limitada. No siempre puede expresar gráficamente todas las restricciones del sistema.

---

## Ejemplos del Sistema de Empresa

### Restricción Rex1

!!! info "Regla de Negocio"
    **El jefe de un departamento tiene que ser miembro de ese departamento.**
    
    Esta restricción asegura que solo empleados del departamento pueden dirigirlo.

### Restricción Rex2

!!! info "Regla de Negocio"
    **Un empleado solo puede trabajar en proyectos coordinados por su departamento.**
    
    Esta restricción limita las asignaciones de empleados a proyectos del mismo departamento.

---

## Formato de Documentación

Las restricciones externas se documentan como:

```
Rex[número]: Descripción clara de la regla en lenguaje natural.
```

!!! tip "Buena Práctica"
    - Numerar todas las restricciones externas
    - Usar lenguaje claro y preciso
    - Incluir la lógica empresarial detrás de cada regla
    - Transferir estas restricciones a la implementación de la BD

---


