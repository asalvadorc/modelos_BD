---
hide:
  - toc
---

# Soluciones

!!! warning "Advertencia"
    Antes de consultar la resolución, asegúrate de haber intentado resolver el ejercicio. Comparar tu propuesta con la solución te ayudará mucho más que leerla directamente.

!!! info "Atributos de los enunciados y de las soluciones"
    Para simplificar las imágenes y facilitar su lectura, en los diagramas E/R de los enunciados no se han representado todos los atributos. En las soluciones se incluyen algunos atributos descriptivos adicionales para aportar más información al modelo relacional. Ten en cuenta que las tablas no contienen únicamente claves primarias y foráneas, sino también otros datos de interés sobre las entidades y las relaciones. Al resolver los ejercicios, incluye los atributos que aparecen en el diagrama. No tienes que inventar los atributos adicionales que aparecen en la solución, y no se considerará un error que no los hayas incluido.
    
??? example "Ejercicio 1"

    ??? question "Enunciado"
        Recordad que teníamos 3 opciones:

       ![alt text](image-68.png){ .grayscale width=400 }

    ??? success "Solución propuesta"
        !!! quote "Opción 1"
            - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)
            - **VINO** (<u>codi_vi</u>, descripcion, anio_cogida)
            - **RETIRA** (<u>cod_retira</u>, <mark>dni</mark>, <mark>codi_vi</mark>, fecha, cant)
                - FK: dni->SOCIO(dni)
                - FK: codi_vi->VINO(codi_vi)

        !!! quote "Opción 2"
            - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)
            - **VINO** (<u>codi_vi</u>, descripcion, anio_cogida)
            - **VALE** (<u>num_vale</u>, <mark>dni</mark>, <mark>codi_vi</mark>, fecha, cant)
                - FK: dni->SOCIO(dni)
                - FK: codi_vi->VINO(num_p)

        !!! quote "Opción 3"
            - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)
            - **VINO** (<u>codi_vi</u>, descripcion, anio_cogida)
            - **VALE** (<u>num_vale</u>, <mark>dni</mark>,fecha)
                - FK: dni->SOCIO(dni)
            - **RETIRA** (<u><mark>num_val</mark>, <mark>dni</mark>, cant</u>)
                - FK: num_vale->VALE(num_vale)
                - FK: codi_vi->VINO(num_p)


??? example "Ejercicio 2"

    ??? question "Enunciado"
        ![alt text](Ej2.jpg){ .grayscale }

    ??? success "Solución propuesta"
        - **MUNICIPIO** (<u>cod_m</u>)
        - **VIVIENDA** (<u>cod_cat</u>, <mark>cod_m</mark>)
            - FK: cod_m->MUNICIPIO(cod_m)
        - **PERSONA** (<u>cod_p</u>, <mark>cod_cat</mark>, <mark>cod_per_ref</mark>, parentesco)
            - FK: cod_cat->VIVIENDA(cod_cat)
            - FK: cod_per_ref->PERSONA(cod_p)
        - **PROPIEDAD** (<u><mark>cod_p</mark>,<mark>cod_cat</mark></u>)
            - FK: cod_p->PERSONA(cod_p)
            - FK: cod_cat->VIVIENDA(cod_cat)

??? example "Ejercicio 3"

    ??? question "Enunciado"
        ![alt text](Ej3.jpg){ .grayscale }

    ??? success "Solución propuesta"
        - **ÁREA DE CONOCIMIENTO** (<u>cod_a</u>)
        - **FACULTAD** (<u>cod_fac</u>)
        - **DEPARTAMENTO** (<u>cod_dept</u>, <mark>cod_a</mark>)
            - FK: cod_a->ÁREA DE CONOCIMIENTO(cod_a) <span class="tag-no-nulo">[no nulo]</span>
        - **CÁTEDRA** (<u>cod_cat</u>, <mark>cod_dept</mark>, <mark>cod_fac</mark>)
            - FK: cod_dept->DEPARTAMENTO(cod_dept)
            - FK: cod_fac->FACULTAD(cod_fac) <span class="tag-no-nulo">[no nulo]</span>
        - **PROFESOR** (<u>dni</u>, <mark>cod_dept</mark>)
            - FK: cod_dept->DEPARTAMENTO(cod_dept) <span class="tag-no-nulo">[no nulo]</span>
        - **ADSCRITO_A** (<u><mark>dni</mark>, <mark>cod_cat</mark></u>, fecha)
            - FK: dni->PROFESOR(dni)
            - FK: cod_cat->CÁTEDRA(cod_cat)

??? example "Ejercicio 4"

    ??? question "Enunciado"
        ![alt text](Ej5.jpg){ .grayscale }

    ??? success "Solución propuesta"
        - **TEMA** (<u>cod_t</u>)
        - **AUTOR** (<u>cod_aut</u>)
        - **EDITORIAL** (<u>cod_ed</u>)
        - **LIBRO** (<u>isbn</u>, <mark>cod_t</mark>, <mark>cod_ed</mark>)
            - FK: cod_t->TEMA(cod_t)
            - FK: cod_ed->EDITORIAL(cod_ed)
        - **EJEMPLAR** (<u>n_reg</u>, <mark>isbn</mark>,<mark>dni</mark>, fecha_p) <span class="tag-cascade">(borrar en cascada)</span>
            - FK: isbn->LIBRO(isbn) <span class="tag-no-nulo">[no nulo]</span>
            - FK: dni->LECTOR(dni)
        - **ESCRIBE** (<u><mark>cod_aut</mark>, <mark>isbn</mark></u>)
            - FK: cod_aut->AUTOR(cod_aut)
            - FK: isbn->LIBRO(isbn)
        - **LECTOR** (<u>dni</u>)
        - **HISTORICO** ( <u><mark>n_reg</mark>, <mark>dni</mark>, fecha_p</u>, fecha_dev)
            - FK: n_reg->EJEMPLAR(n_reg)
            - FK: dni->LECTOR(dni)


??? example "Ejercicio 5"

    
    ??? question "Enunciado"
    ![alt text](Ej4.jpg){ .grayscale }

    ??? success "Solución propuesta"
        !!! quote "Opción 1"
            - **BANCO** (<u>cod_ent</u>)
            - **SUCURSAL** (<u><mark>cod_ent</mark>, cod_suc</u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent->BANCO(cod_ent) <span class="tag-no-nulo">[no nulo]</span>
            - **CUENTA CORRIENTE** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark></u>, <u>cod_cc</u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc->SUCURSAL(cod_ent, cod_suc)
            - **DOMICILIACION** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark>, <mark>cod_cc</mark>, cod_d</u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc, cod_cc->CUENTA CORRIENTE(cod_ent, cod_suc, cod_cc)
            - **CLIENTE** (<u>dni</u>)
            - **PRESTAMO** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark>, cod_p</u>, <mark>dni</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc->SUCURSAL(cod_ent, cod_suc)
                - FK: dni->CLIENTE(dni)
            - **PERMISOS** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark>, <mark>cod_cc</mark>, <mark>dni</mark></u>, privilegio)
                - FK: cod_ent, cod_suc, cod_cc->CUENTA CORRIENTE(cod_ent, cod_suc, cod_cc)
                - FK: dni->CLIENTE(dni)

        !!! quote "Opción 2"
            - **BANCO** (<u>cod_ent</u>)
            - **SUCURSAL** (<u><mark>cod_ent</mark>, cod_suc</u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent->BANCO(cod_ent) <span class="tag-no-nulo">[no nulo]</span>
            - **CUENTA CORRIENTE** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark></u>, <u>cod_cc</u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc->SUCURSAL(cod_ent, cod_suc)
            - **DOMICILIACION** (<u>num_d</u>,<mark>cod_ent</mark>, <mark>cod_suc</mark>, <mark>cod_cc</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc, cod_cc->CUENTA CORRIENTE(cod_ent, cod_suc, cod_cc) <span class="tag-no-nulo">[no nulo]</span>
            - **CLIENTE** (<u>dni</u>)
            - **PRESTAMO** (<u><mark>cod_ent</mark>, <mark>cod_suc</mark>, cod_p</u>, <mark>dni</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ent, cod_suc->SUCURSAL(cod_ent, cod_suc)
                - FK: dni->CLIENTE(dni)
            - **PERMISOS** (<u> cod_p</u>,<mark>cod_ent</mark>, <mark>cod_suc</mark>, <mark>cod_cc</mark>, <mark>dni</mark>, privilegio)
                - FK: cod_ent, cod_suc, cod_cc->CUENTA CORRIENTE(cod_ent, cod_suc, cod_cc) <span class="tag-no-nulo">[no nulo]</span>
                - FK: dni->CLIENTE(dni)    

??? example "Ejercicio 6"

    ??? question "Enunciado"
        ![alt text](Ej6.jpg){ .grayscale }

    ??? success "Solución propuesta"
        !!! quote "Opción 1"
            - **FAMILIA** (<u>nom_f</u>)
            - **GENERO** (<u>nom_g</u>, <mark>nom_f</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_f->FAMILIA(nom_f) <span class="tag-no-nulo">[no nulo]</span>
            - **ESPECIE** (<u>nom_g,<mark>nom_e</mark> </u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_g->GENERO(nom_g)
            - **PERSONA** (<u>dni</u>)
            - **COMARCA** (<u>com</u>)
            - **VIVE** (<u><mark>nom_g</mark>,<mark>nom_e</mark>, <mark>com</mark></u>, nom_comun)
                - FK: nomg,nom_e->ESPECIE(nomg,nom_e)
                - FK: com->COMARCA(com)
            - **EJEMPLAR** (<u>cod_ej, <mark>nom_g</mark>,<mark>nom_e</mark></u>, <mark>dni</mark>, <mark>com</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_g,nom_e->ESPECIE(nom_g,nom_e)
                - FK: dni->PERSONA(dni) <span class="tag-no-nulo">[no nulo]</span>
                - FK: com->COMARCA(com) <span class="tag-no-nulo">[no nulo]</span>
            - **COLECCIONISTA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: dni->PERSONA(dni)
            - **EJ_COL** (<u><mark>cod_ej</mark>, <mark>nom_g</mark>,<mark>nom_e</mark></u>, <mark>dni</mark>, valor) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ej,nom_g,nom_e->EJEMPLAR(cod_ej,nomg,nom_e)
                - FK: dni->COLECCION(dni) <span class="tag-no-nulo">[no nulo]</span>
            - **EJ_OBS** (<u><mark>cod_ej</mark>, <mark>nom_g</mark>,<mark>nom_e</mark></u>, tiempo_obs) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ej,nom_g,nom_e->EJEMPLAR(cod_ej,nomg,nom_e)

            <span class="tag-no-nulo">[nota]</span> La especialización de **EJEMPLAR** en **EJ_COL** y **EJ_OBS** es total y disjunta (T,D).

        !!! quote "Opción 2"
            - **FAMILIA** (<u>nom_f</u>)
            - **GENERO** (<u>nom_g</u>, <mark>nom_f</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_f->FAMILIA(nom_f) <span class="tag-no-nulo">[no nulo]</span>
            - **ESPECIE** (<u>nom_g,<mark>nom_e</mark> </u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_g->GENERO(nom_g)
            - **PERSONA** (<u>dni</u>)
            - **COMARCA** (<u>com</u>)
            - **VIVE** (<u><mark>nom_g</mark>,<mark>nom_e</mark>, <mark>com</mark></u>, nom_comun)
                - FK: nomg,nom_e->ESPECIE(nomg,nom_e)
                - FK: com->COMARCA(com)
            - **EJEMPLAR** (<u>cod_ej</u>, <mark>nom_g</mark>,<mark>nom_e</mark>, <mark>dni</mark>, <mark>com</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: nom_g,nom_e->ESPECIE(nom_g,nom_e) <span class="tag-no-nulo">[no nulo]</span>
                - FK: dni->PERSONA(dni) <span class="tag-no-nulo">[no nulo]</span>
                - FK: com->COMARCA(com) <span class="tag-no-nulo">[no nulo]</span>
            - **COLECCIONISTA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ej->EJEMPLAR(cod_ej)
                - FK: dni->PERSONA(dni)<span class="tag-no-nulo">[no nulo]</span>
            - **EJ_COL** (<u><mark>cod_ej</mark></u>, <mark>dni</mark>, valor) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: dni->COLECCION(dni) <span class="tag-no-nulo">[no nulo]</span>
            - **EJ_OBS** (<u><mark>cod_ej</mark></u>, tiempo_obs) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: cod_ej->EJEMPLAR(cod_ej)

??? example "Ejercicio 7"

    ??? question "Enunciado"
        Realizar el esquema relacional correspondiente a una empresa de líneas ferroviarias.

        En la de arriba consideramos únicamente los viajes (y no los trayectos). Además, solo marcamos estación de origen y de destino de un viaje.

        En la segunda incorporamos los trayectos, y además marcamos todas las estaciones donde se para en un trayecto.

        ![alt text](image-48.png){ .grayscale }

    ??? success "Solución propuesta"
        !!! quote "Opción 1"

            - **TRABAJADOR** (<u>codigo_trabajador</u>, <mark>codigo_estacion</mark>)
                - FK: codigo_estacion->ESTACIÓN(codigo_estacion)
            - **NO CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: codigo_trabajador->TRABAJADOR(codigo_trabajador)
            - **CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>, horas) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: codigo_trabajador->TRABAJADOR(codigo_trabajador)
            - **ESTACIÓN** (<u>codigo_estacion</u>, nombre, telefono)
            - **TREN** (<u>codigo_tren</u>, tipo)
            - **TEMPORADA** (<u>cod_temporada</u>)
            - **VIAJE** (<u>codigo_viaje</u>, hora, fecha, <mark>codigo_estacion_origen</mark>, <mark>codigo_estacion_destino</mark>, <mark>codigo_tren</mark>, <mark>cod_temporada</mark>)
                - FK: codigo_estacion_origen->ESTACIÓN(codigo_estacion)
                - FK: codigo_estacion_destino->ESTACIÓN(codigo_estacion)
                - FK: codigo_tren->TREN(codigo_tren)
                - FK: cod_temporada->TEMPORADA(cod_temporada)
            - **CONDUCTOR_VIAJE** (<u><mark>codigo_trabajador</mark>, <mark>codigo_viaje</mark></u>)
                - FK: codigo_trabajador->CONDUCTOR(codigo_trabajador)
                - FK: codigo_viaje->VIAJE(codigo_viaje)

        !!! quote "Opción 2"

            - **TRABAJADOR** (<u>codigo_trabajador</u>, <mark>codigo_estacion</mark>)
                - FK: codigo_estacion->ESTACIÓN(codigo_estacion)
            - **NO CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: codigo_trabajador->TRABAJADOR(codigo_trabajador)
            - **CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>, horas) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: codigo_trabajador->TRABAJADOR(codigo_trabajador)
            - **ESTACIÓN** (<u>codigo_estacion</u>, nombre, telefono)
            - **TREN** (<u>codigo_tren</u>, tipo)
            - **TEMPORADA** (<u>cod_temporada</u>)
            - **TRAYECTO** (<u>codigo_trayecto</u>, hora)
            - **PARADAS** (<u><mark>codigo_estacion</mark>, <mark>codigo_trayecto</mark></u>)
                - FK: codigo_trayecto->TRAYECTO(codigo_trayecto)
                - FK: codigo_estacion->ESTACIÓN(codigo_estacion)
            - **VIAJE** (<u><mark>codigo_trayecto</mark>, fecha</u>, <mark>codigo_tren</mark>, <mark>cod_temporada</mark>) <span class="tag-cascade">(borrar en cascada)</span>
                - FK: codigo_trayecto->TRAYECTO(codigo_trayecto)
                - FK: codigo_tren->TREN(codigo_tren)
                - FK: cod_temporada->TEMPORADA(cod_temporada)
            - **CONDUCTOR_VIAJE** (<u><mark>codigo_trabajador</mark>, <mark>codigo_trayecto</mark>, <mark>fecha</mark></u>)
                - FK: codigo_trabajador->CONDUCTOR(codigo_trabajador)
                - FK: codigo_trayecto, fecha->VIAJE(codigo_trayecto, fecha)

??? example "Ejercicio 8"

    ??? question "Enunciado"
        Realizar el esquema relacional correspondiente a un sistema de información sobre el material informático de una empresa.

        ![alt text](image-2.png){ .grayscale }

    ??? success "Solución propuesta"
        - **RED** (<u>codigo_x</u>, <mark>dni</mark>)
            - FK: dni->EMPLEADO(dni) <span class="tag-no-nulo">[no nulo]</span>
        - **EMPLEADO** (<u>dni</u>, nombre, direccion, telefono)
        - **ORDENADOR** (<u>codigo_o</u>)
        - **IMPRESORA** (<u>codigo_i</u>, <mark>codigo_o</mark>)
            - FK: codigo_o->ORDENADOR(codigo_o) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
        - **APLICACIÓN** (<u>codigo_a,codigo_o</u>)
            - FK: codigo_o->ORDENADOR(codigo_o) <span class="tag-no-nulo">[no nulo]</span>
        - **RED_ORDENADOR** (<u><mark>codigo_x</mark></u>, <u><mark>codigo_o</mark></u>)
            - FK: codigo_x->RED(codigo_x)
            - FK: codigo_o->ORDENADOR(codigo_o)
        - **EMPLEADO_ORDENADOR** (<u><mark>dni</mark>, <mark>codigo_o</mark></u>)
            - FK: dni->EMPLEADO(dni)
            - FK: codigo_o->ORDENADOR(codigo_o)
        - **PERMISO** (<u><mark>dni</mark>, <mark>codigo_a</mark></u>)
            - FK: dni->EMPLEADO(dni)
            - FK: codigo_a->APLICACIÓN(codigo_a)
        - **REGISTRA** (<u>num_reg></u>, <mark>dni</mark>, <mark>codigo_o</mark>, <mark>codigo_a</mark>, fecha)
            - FK: dni->EMPLEADO(dni) <span class="tag-no-nulo">[no nulo]</span>
            - FK: codigo_o->ORDENADOR(codigo_o)  <span class="tag-no-nulo">[no nulo]</span>
            - FK: codigo_a->APLICACIÓN(codigo_a) <span class="tag-no-nulo">[no nulo]</span>

??? example "Ejercicio 9"

    ??? question "Enunciado"
        Realizar el esquema relacional correspondiente a un sistema de información de una empresa que vende gran variedad de productos. Para la venta de estos productos, dispone de un conjunto de viajantes que realizan visitas a los clientes ofreciendo sus productos.

        ![alt text](image-52.png){ .grayscale }

    ??? success "Solución propuesta"
        - **SECTOR** (<u>cod_sector</u>)
        - **CIUDAD** (<u>cod_ciudad</u>, <mark>cod_sector</mark>)
            - FK: cod_sector->SECTOR(cod_sector) <span class="tag-no-nulo">[no nulo]</span>
        - **VIAJANTE** (<u>cod_viajante</u>)
        - **CLIENTE** (<u>cod_cliente</u>, <mark>cod_ciudad</mark>)
            - FK: cod_ciudad->CIUDAD(cod_ciudad) <span class="tag-no-nulo">[no nulo]</span>
        - **PRODUCTO** (<u>cod_producto</u>)
        - **VIAJANTE_PRODUCTO** (<u><mark>cod_viajante</mark>, <mark>cod_producto</mark></u>)
            - FK: cod_viajante->VIAJANTE(cod_viajante)
            - FK: cod_producto->PRODUCTO(cod_producto)
        - **SECTOR_VIAJA** (<u><mark>cod_sector</mark>, <mark>cod_viajante</mark></u>)
            - FK: cod_viajante->VIAJANTE(cod_viajante)
            - FK: cod_sector->SECTOR(cod_procod_sectorducto)
        - **OFRECE** (<u><mark>cod_cliente</mark>, <mark>cod_producto</mark></u>, <mark>cod_viajante</mark>, precio)
            - FK: cod_viajante->VIAJANTE(cod_viajante) <span class="tag-no-nulo">[no nulo]</span>
            - FK: cod_cliente->CLIENTE(cod_cliente)
            - FK: cod_producto->PRODUCTO(cod_producto)
            - precio: <span class="tag-no-nulo">[no nulo]</span>

??? example "Ejercicio 10"

    ??? question "Enunciado"
        Realizar el esquema relacional correspondiente a un Parque Zoológico que quiere guardar información de las especies que tiene, los empleados (cuidadores y guías), y los distintos itinerarios de visita que ofrece.

        
        ![alt text](image-70.png){ .grayscale }

    ??? success "Solución propuesta"
        - **EMPLEADO** (<u>dni</u>, nombre, direccion, telefono, fecha_inicio)
        - **GUIA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - FK: dni->EMPLEAT(dni)
        - **CUIDADOR** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - FK: dni->EMPLEAT(dni)
        - **HABITAT** (<u>cod_h</u>, clima, vegetacion)
        - **ZONA** (<u>cod_z</u>, extension)
        - **ESPECIE** (<u>nom_c</u>, nombre, descripcion, <mark>cod_z</mark>)
            - FK: cod_z->ZONA(cod_z) <span class="tag-no-nulo">[no nulo]</span>
        - **ESPECIE_HABITAT** (<u><mark>nom_c</mark>, <mark>cod_h</mark></u>)
            - FK: nom_c->ESPECIE(nom_c)
            - FK: cod_h->HABITAT(cod_h)
        - **CUIDADOR_ESPECIE** (<u><mark>dni</mark>, <mark>nom_c</mark></u>, data)
            - FK: dni->CUIDADOR(dni)
            - FK: nom_c->ESPECIE(nom_c)
        - **ITINERARIO** (<u>cod_i</u>, duracion, longitud, max_visitantes, num_especies)
        - **GUIA_ITINERARIO** (<u><mark>dni</mark>, <mark>cod_i</mark></u>, horas)
            - FK: dni->GUIA(dni)
            - FK: cod_i->ITINERARIO(cod_i)
        - **ITINERARIO_ZONA** (<u><mark>cod_i</mark>, <mark>cod_z</mark></u>)
            - FK: cod_i->ITINERARIO(cod_i)
            - FK: cod_z->ZONA(cod_z)

