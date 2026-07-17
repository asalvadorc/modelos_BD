# Soluciones

Antes de consultar la resolución, asegúrate de haber intentado resolver el ejercicio. Comparar tu propuesta con la solución te ayudará mucho más que leerla directamente.


??? success "Ver solución propuesta Ejercicio 1"
    * **Entidad SOCIOS**: Atributos (<u>DNI</u>, nombre, dirección, ciudad, código postal, ...)
    * **Entidad CLASES_VINO**: Atributos (<u>ID_Clase</u>, descripción, precio_venta, categoría, procedencia, año_cosecha)
    * **Entidad VALE_RETIRO**: Atributos (<u>ID_Vale</u>, fecha, cantidad_retirada)
    *(Nota: La relación entre estas entidades se verá en el siguiente tema)*


??? success "Ver solución propuesta Ejercicio 1 bis"
    * **SOCIOS** (1,N) --- *retiran* --- (1,1) **VALE_RETIRO**
    * **VALE_RETIRO** (1,N) --- *contiene* --- (0,N) **CLASES_VINO**    


??? success "Ver solución propuesta Ejercicio 2"
    * **PERSONA** (1,1) --- *habita* --- (0,N) **VIVIENDA**
    * **PERSONA** (1,1) --- *reside* --- (0,N) **MUNICIPIO**
    * **PERSONA** (0,N) --- *propietaria* --- (0,N) **VIVIENDA**
    * **PERSONA** (0,N) --- *es_cabeza_de* --- (0,N) **PERSONA** (Relación reflexiva)    

??? success "Ver solución propuesta Ejercicio 3"
    * **FACULTAD** --- *tiene* --- **DEPARTAMENTO**
    * **FACULTAD** --- *tiene* --- **CÁTEDRA**
    * **DEPARTAMENTO** --- *tiene* --- **CÁTEDRA**
    * **PROFESOR** --- *pertenece_a* --- **DEPARTAMENTO**
    * **PROFESOR** --- *adscrito_a* --- **CÁTEDRA** (Atributo: *fecha*)
    * **ÁREA_CONOCIMIENTO** --- *incluye* --- **DEPARTAMENTO**    

??? success "Ver solución propuesta (Ejercicio 4)"
    * **BANCO** --- *tiene* --- **SUCURSAL**
    * **SUCURSAL** --- *asignada* --- **CUENTA**
    * **CUENTA** --- *pertenece_a* --- **CLIENTE** (Atributos de relación: *privilegios*)
    * **CUENTA** --- *tiene* --- **DOMICILIACIÓN**
    * **SUCURSAL** --- *otorga* --- **PRÉSTAMO** --- *a* --- **CLIENTE**


??? success "Ver solución propuesta (Ejercicio 5)"
    * **LIBRO** --- *trata* --- **TEMA**
    * **LIBRO** --- *editado_por* --- **EDITORIAL**
    * **LIBRO** --- *escrito_por* --- **AUTOR**
    * **LIBRO** --- *tiene* --- **EJEMPLAR**
    * **EJEMPLAR** --- *prestado_a* --- **LECTOR** (Atributo: *fecha*)
    * **EJEMPLAR** --- *historico_prestamos* --- **LECTOR** (Atributos: *fecha_prestamo*, *fecha_devolucion*)


??? success "Ver solución propuesta (Ejercicio 6)"
    * **MARIPOSA** --- *pertenece_a* --- **ESPECIE** --- *pertenece_a* --- **GÉNERO** --- *pertenece_a* --- **FAMILIA**
    * **PERSONA** --- *captura* --- **MARIPOSA** (Atributos: *comarca*, *duración_observación*)
    * **PERSONA** --- *propietaria* --- **COLECCIÓN**
    * **COLECCIÓN** --- *formada_por* --- **MARIPOSA** (Atributo: *valor*)
