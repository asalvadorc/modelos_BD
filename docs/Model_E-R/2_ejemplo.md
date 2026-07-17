---
hide:
  - toc
---
# 2. Ejemplo Práctico

Durante todo el tema trabajaremos con el mismo caso de estudio: **una empresa de gestión de departamentos y proyectos**. Sobre este ejemplo iremos identificando y representando, paso a paso, los diferentes elementos del modelo Entidad/Relación, de manera que al finalizar el tema dispondremos del diagrama E/R completo.


## Análisis de Requerimientos


- La compañía está organizada en departamentos. 
- Cada uno tiene nombre único, número único y un empleado que lo dirige. Nos interesa la fecha en la que comenzó a dirigirlo.  

- Cada departamento controla una serie de proyectos. Cada uno de estos proyectos tiene nombre y número únicos, y estará coordinado por un único departamento.

- De cada empleado nos interesa el nombre (formado por dos apellidos y nombre de pila), DNI, dirección, teléfono, sueldo y fecha de nacimiento. Todo empleado está asignado a un departamento, y muchas veces tendrá un supervisor. Puede trabajar en más de un proyecto (no necesariamente controlados por el mismo departamento) y trabajará un determinado número de horas a la semana en cada proyecto. En un proyecto siempre trabajará, como mínimo, un empleado.

- Queremos saber también los familiares de cada empleado, para administrar los términos de un seguro. Queremos saber el nombre, fecha de nacimiento y parentesco con el empleado.  

---

??? Tip "Resumen"

    ```text title="🏢 DEPARTAMENTOS"
    
    Nombre único, número único.
    Dirigidos por un empleado.
    Fecha de inicio de dirección.
    Controla varios proyectos.
    ```

    ```text title="📋 PROYECTOS"
        
    Nombre y número únicos.
    Controlados por un departamento.
    Trabajará, como mínimo, un empleado.
    ```

    
    ```text title="👤 EMPLEADO"
        
    Nombre completo, DNI, dirección.
    Teléfono, sueldo, fecha de nacimiento.
    Asignados a un departamento con supervisor.
    Trabaja en varios proyectos.
    Trabaja unas horas semanales por proyecto.
    ```

    ```text title="👨‍👩‍👧 FAMILIARES"
        
    Nombre, fecha de nacimiento, parentesco.
    Para gestión de seguros.
    ```

<!--
---

## Estructura Detallada 

### 🏢 Departamentos

- **Nombre**: Único para cada departamento
- **Número**: Identificador único
- **Director**: Empleado responsable
- **Fecha de dirección**: Cuándo comenzó a dirigir

### 📋 Proyectos

- **Nombre**: Único dentro de la compañía
- **Número**: Identificador único
- **Departamento responsable**: Control centralizado

### 👤 Empleados

- **Identificación**: Nombre completo + Apellidos + DNI
- **Contacto**: Dirección, teléfono
- **Datos laborales**: Sueldo, departamento, supervisor
- **Personal**: Fecha de nacimiento

### 🔗 Relación: Trabajo en Proyectos

- Un empleado puede trabajar en **varios proyectos**
- Los proyectos no tienen que ser del mismo departamento
- Cada asignación incluye **horas semanales**
- Todo proyecto requiere **al menos un empleado**

### 👨‍👩‍👧 Familiares

- **Nombre**: Identificación del familiar
- **Fecha de nacimiento**: Datos demográficos
- **Parentesco**: Relación con el empleado
- **Uso**: Gestión de coberturas de seguros

-->