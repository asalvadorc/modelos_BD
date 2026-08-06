# Soluciones

!!! warning "Advertencia"
    Antes de consultar la resolución, asegúrate de haber intentado resolver el ejercicio. Comparar tu propuesta con la solución te ayudará mucho más que leerla directamente.

??? success "Ver solución propuesta (Ejercicio 1)"
    !!! quote "Opción 1"
        - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)   
        - **VINO** (<u>codi_vi</u>, descripcion, año_cogida)       
        - **RETIRA** (<u>codi_vi</u>, <mark>dni</mark>, <mark>codi_vi</mark>, fecha, cant)
            - dni -> SOCIO (dni)
            - codi_vi -> VINO (num_p)  
    
    !!! quote "Opción 2"
        - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)   
        - **VINO** (<u>codi_vi</u>, descripcion, año_cogida)
        - **VALE** (<u>num_val</u>, <mark>dni</mark>, <mark>codi_vi</mark>, fecha, cant)
            - dni -> SOCIO (dni)
            - codi_vi -> VINO (num_p)        
            
    !!! quote "Opción 3"
        - **SOCIO** (<u>dni</u>, nombre, direccion, telefono, correo)   
        - **VINO** (<u>codi_vi</u>, descripcion, año_cogida)
        - **VALE** (<u>num_val</u>, <mark>dni</mark>,fecha)
            - dni -> SOCIO (dni)  
        - **RETIRA** (<u><mark>num_val</mark>, <mark>dni</mark>, cant</u>)
            - num_val -> VALE (num_val)
            - codi_vi -> VINO (num_p)  
   

??? success "Ver solución propuesta (Ejercicio 2)"
    - **MUNICIPIO** (<u>código_municipio</u>)
    - **VIVIENDA** (<u>referencia_catastral</u>, <mark>código_municipio</mark>)
        - código_municipio -> MUNICIPIO (código_municipio)
    - **PERSONA** (<u>código_persona</u>, <mark>referencia_catastral</mark>, <mark>código_persona_cabeza_familia</mark>, parentesco)
        - referencia_catastral -> VIVIENDA (referencia_catastral)
        - código_persona_cabeza_familia -> PERSONA (código_persona)
    - **PROPIEDAD** (<u><mark>código_persona</mark>,<mark>referencia_catastral</mark></u>)
        - código_persona -> PERSONA (código_persona)
        - referencia_catastral -> VIVIENDA (referencia_catastral)

??? success "Ver solución propuesta (Ejercicio 3)"
    
    - **ÁREA DE CONOCIMIENTO** (<u>ID_Area</u>)
    - **FACULTAD** (<u>ID_Facultad</u>)
    - **DEPARTAMENTO** (<u>ID_Depto</u>, <mark>ID_Area</mark>)
        - ID_Area -> ÁREA DE CONOCIMIENTO (ID_Area) <span class="tag-no-nulo">[no nulo]</span>
    - **CÁTEDRA** (<u>ID_Catedra</u>, <mark>ID_Depto</mark>, <mark>ID_Facultad</mark>)
        - ID_Depto -> DEPARTAMENTO (ID_Depto)
        - ID_Facultad -> FACULTAD (ID_Facultad) <span class="tag-no-nulo">[no nulo]</span>
    - **PROFESOR** (<u>ID_Profesor</u>, <mark>ID_Depto</mark>)
        - ID_Depto -> DEPARTAMENTO (ID_Depto) <span class="tag-no-nulo">[no nulo]</span>
    - **ADSCRITO_A** (<u><mark>ID_Profesor</mark>, <mark>ID_Catedra</mark></u>, fecha)
        - ID_Profesor -> PROFESOR (ID_Profesor)
        - ID_Catedra -> CÁTEDRA (ID_Catedra)

??? success "Ver solución propuesta (Ejercicio 4)"
    !!! quote "Opción 1"
        - **BANCO** (<u>número_entidad</u>)
        - **SUCURSAL** (<u><mark>número_entidad</mark>, número_sucursal</u>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad -> BANCO (número_entidad) <span class="tag-no-nulo">[no nulo]</span>
        - **CUENTA CORRIENTE** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark></u>, <u>número_cuenta</u>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal -> SUCURSAL (número_entidad, número_sucursal)
        - **DOMICILIACION** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark>, <mark>número_cuenta</mark>, número_domicilio</u>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal, número_cuenta -> CUENTA CORRIENTE (número_entidad, número_sucursal, número_cuenta)
        - **CLIENTE** (<u>dni</u>)
        - **PRESTAMO** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark>, número_prestamo</u>, <mark>dni</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal -> SUCURSAL (número_entidad, número_sucursal)
            - dni -> CLIENTE (dni)
        - **PERMISOS** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark>, <mark>número_cuenta</mark>, <mark>dni</mark></u>, privilegio)
            - número_entidad, número_sucursal, número_cuenta -> CUENTA CORRIENTE (número_entidad, número_sucursal, número_cuenta)
            - dni -> CLIENTE (dni)

    !!! quote "Opción 2"        
        - **BANCO** (<u>número_entidad</u>)
        - **SUCURSAL** (<u><mark>número_entidad</mark>, número_sucursal</u>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad -> BANCO (número_entidad) <span class="tag-no-nulo">[no nulo]</span>
        - **CUENTA CORRIENTE** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark></u>, <u>número_cuenta</u>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal -> SUCURSAL (número_entidad, número_sucursal)
        - **DOMICILIACION** (<u>num_d</u>,<mark>número_entidad</mark>, <mark>número_sucursal</mark>, <mark>número_cuenta</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal, número_cuenta -> CUENTA CORRIENTE (número_entidad, número_sucursal, número_cuenta) <span class="tag-no-nulo">[no nulo]</span>
        - **CLIENTE** (<u>dni</u>)
        - **PRESTAMO** (<u><mark>número_entidad</mark>, <mark>número_sucursal</mark>, número_prestamo</u>, <mark>dni</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - número_entidad, número_sucursal -> SUCURSAL (número_entidad, número_sucursal)
            - dni -> CLIENTE (dni)
        - **PERMISOS** (<u> cod_p</u>,<mark>número_entidad</mark>, <mark>número_sucursal</mark>, <mark>número_cuenta</mark>, <mark>dni</mark>, privilegio)
            - número_entidad, número_sucursal, número_cuenta -> CUENTA CORRIENTE (número_entidad, número_sucursal, número_cuenta) <span class="tag-no-nulo">[no nulo]</span>
            - dni -> CLIENTE (dni)


??? success "Ver solución propuesta (Ejercicio 5)"
   
    - **TEMA** (<u>codigo_tema</u>)
    - **AUTOR** (<u>codigo_autor</u>)
    - **EDITORIAL** (<u>codigo_editorial</u>)
    - **LIBRO** (<u>isbn</u>, <mark>codigo_tema</mark>, <mark>codigo_editorial</mark>)
        - codigo_tema -> TEMA (codigo_tema)
        - codigo_editorial -> EDITORIAL (codigo_editorial)
    - **EJEMPLAR** (<u>numero_registro</u>, <mark>isbn</mark>,<mark>dni</mark>, fecha_prestamo ) <span class="tag-cascade">(borrar en cascada)</span>
        - isbn -> LIBRO (isbn) <span class="tag-no-nulo">[no nulo]</span>
        - dni -> LECTOR (dni)
    - **ESCRIBE** (<u><mark>codigo_autor</mark>, <mark>isbn</mark></u>)
        - codigo_autor -> AUTOR (codigo_autor)
        - isbn -> LIBRO (isbn)
    - **LECTOR** (<u>dni</u>)
    - **HISTORICO** ( <u><mark>numero_registro</mark>, <mark>dni</mark>, fecha_prestamo</u>, fecha_devolucion)
        - numero_registro -> EJEMPLAR (numero_registro)
        - dni -> LECTOR (dni)

??? success "Ver solución propuesta (Ejercicio 6)"
    !!! quote "Opción 1"
        - **FAMILIA** (<u>nom_f</u>)
        - **GENERO** (<u>nom_g</u>, <mark>nom_f</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_f -> FAMILIA (nom_f) <span class="tag-no-nulo">[no nulo]</span>
        - **ESPECIE** (<u>nom_g,<mark>nom_e</mark> </u>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_g -> GENERO (nom_g)
        - **PERSONA** (<u>dni</u>)
        - **COMARCA** (<u>com</u>)
        - **VIVE** (<u><mark>nom_g</mark>,<mark>nom_e</mark>, <mark>com</mark></u>, nom_comun)
            - nomg,nom_e -> ESPECIE (nomg,nom_e)
            - com -> COMARCA (com)
        - **EJEMPLAR** (<u>cod_ej, <mark>nom_g</mark>,<mark>nom_e</mark></u>, <mark>dni</mark>, <mark>com</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_g,nom_e -> ESPECIE (nom_g,nom_e)
            - dni -> PERSONA (dni) <span class="tag-no-nulo">[no nulo]</span>
            - com -> COMARCA (com) <span class="tag-no-nulo">[no nulo]</span>
        - **COLECCIONISTA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - dni -> PERSONA (dni)
        - **EJ_COL** (<u><mark>cod_ej</mark>, <mark>nom_g</mark>,<mark>nom_e</mark></u>, <mark>dni</mark>, valor) <span class="tag-cascade">(borrar en cascada)</span>
            - cod_ej,nom_g,nom_e -> EJEMPLAR (cod_ej,nomg,nom_e) 
            - dni -> COLECCION (dni) <span class="tag-no-nulo">[no nulo]</span>
        - **EJ_OBS** (<u><mark>cod_ej</mark>, <mark>nom_g</mark>,<mark>nom_e</mark></u>, tiempo_obs) <span class="tag-cascade">(borrar en cascada)</span>
            - cod_ej,nom_g,nom_e -> EJEMPLAR (cod_ej,nomg,nom_e)

        <span class="tag-no-nulo">[nota]</span> La especialización de **EJEMPLAR** en **EJ_COL** y **EJ_OBS** es total y disjunta (T,D).

    !!! quote "Opción 2"    
        - **FAMILIA** (<u>nom_f</u>)
        - **GENERO** (<u>nom_g</u>, <mark>nom_f</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_f -> FAMILIA (nom_f) <span class="tag-no-nulo">[no nulo]</span>
        - **ESPECIE** (<u>nom_g,<mark>nom_e</mark> </u>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_g -> GENERO (nom_g)
        - **PERSONA** (<u>dni</u>)
        - **COMARCA** (<u>com</u>)
        - **VIVE** (<u><mark>nom_g</mark>,<mark>nom_e</mark>, <mark>com</mark></u>, nom_comun)
            - nomg,nom_e -> ESPECIE (nomg,nom_e)
            - com -> COMARCA (com)
        - **EJEMPLAR** (<u>cod_ej</u>, <mark>nom_g</mark>,<mark>nom_e</mark>, <mark>dni</mark>, <mark>com</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - nom_g,nom_e -> ESPECIE (nom_g,nom_e) <span class="tag-no-nulo">[no nulo]</span>
            - dni -> PERSONA (dni) <span class="tag-no-nulo">[no nulo]</span>
            - com -> COMARCA (com) <span class="tag-no-nulo">[no nulo]</span>
        - **COLECCIONISTA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - cod_ej -> EJEMPLAR (cod_ej)
            - dni -> PERSONA (dni)<span class="tag-no-nulo">[no nulo]</span>
        - **EJ_COL** (<u><mark>cod_ej</mark></u>, <mark>dni</mark>, valor) <span class="tag-cascade">(borrar en cascada)</span>  
            -dni -> COLECCION (dni) <span class="tag-no-nulo">[no nulo]</span>
        - **EJ_OBS** (<u><mark>cod_ej</mark></u>, tiempo_obs) <span class="tag-cascade">(borrar en cascada)</span>
            - cod_ej -> EJEMPLAR (cod_ej)
??? success "Ver solución propuesta (Ejercicio 7)"
    !!! quote "Opción 1"

        - **TRABAJADOR** (<u>codigo_trabajador</u>, <mark>codigo_estacion</mark>)
            - codigo_estacion -> ESTACIÓN (codigo_estacion)
        - **NO CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - codigo_trabajador -> TRABAJADOR (codigo_trabajador)
        - **CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>, horas) <span class="tag-cascade">(borrar en cascada)</span>
            - codigo_trabajador -> TRABAJADOR (codigo_trabajador)
        - **ESTACIÓN** (<u>codigo_estacion</u>, nombre, telefono)
        - **TREN** (<u>codigo_tren</u>, tipo)
        - **TEMPORADA** (<u>cod_temporada</u>)
        - **VIAJE** (<u>codigo_viaje</u>, hora, fecha, <mark>codigo_estacion_origen</mark>, <mark>codigo_estacion_destino</mark>, <mark>codigo_tren</mark>, <mark>cod_temporada</mark>)
            - codigo_estacion_origen -> ESTACIÓN (codigo_estacion)
            - codigo_estacion_destino -> ESTACIÓN (codigo_estacion)
            - codigo_tren -> TREN (codigo_tren)
            - cod_temporada -> TEMPORADA (cod_temporada)
        - **CONDUCTOR_VIAJE** (<u><mark>codigo_trabajador</mark>, <mark>codigo_viaje</mark></u>)
            - codigo_trabajador -> CONDUCTOR (codigo_trabajador)
            - codigo_viaje -> VIAJE (codigo_viaje)

    !!! quote "Opción 2"

        - **TRABAJADOR** (<u>codigo_trabajador</u>, <mark>codigo_estacion</mark>)
            - codigo_estacion -> ESTACIÓN (codigo_estacion)
        - **NO CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
            - codigo_trabajador -> TRABAJADOR (codigo_trabajador)
        - **CONDUCTOR** (<u><mark>codigo_trabajador</mark></u>, horas) <span class="tag-cascade">(borrar en cascada)</span>
            - codigo_trabajador -> TRABAJADOR (codigo_trabajador)
        - **ESTACIÓN** (<u>codigo_estacion</u>, nombre, telefono)
        - **TREN** (<u>codigo_tren</u>, tipo)
        - **TEMPORADA** (<u>cod_temporada</u>)
        - **TRAYECTO** (<u>codigo_trayecto</u>, hora)
        - **PARADAS** (<u><mark>codigo_estacion</mark>, <mark>codigo_trayecto</mark></u>)
            - codigo_trayecto -> TRAYECTO (codigo_trayecto)
            - codigo_estacion -> ESTACIÓN (codigo_estacion)
        - **VIAJE** (<u><mark>codigo_trayecto</mark>, fecha</u>, <mark>codigo_tren</mark>, <mark>cod_temporada</mark>) <span class="tag-cascade">(borrar en cascada)</span>
            - codigo_trayecto -> TRAYECTO (codigo_trayecto)
            - codigo_tren -> TREN (codigo_tren)
            - cod_temporada -> TEMPORADA (cod_temporada)
        - **CONDUCTOR_VIAJE** (<u><mark>codigo_trabajador</mark>, <mark>codigo_trayecto</mark>, <mark>fecha</mark></u>)
            - codigo_trabajador -> CONDUCTOR (codigo_trabajador)
            - codigo_trayecto, fecha -> VIAJE (codigo_trayecto, fecha)

??? success "Ver solución propuesta (Ejercicio 8)"
    
    - **RED** (<u>codigo_x</u>, <mark>dni</mark>)
        - dni -> EMPLEADO (dni) <span class="tag-no-nulo">[no nulo]</span>
    - **EMPLEADO** (<u>dni</u>, nombre, direccion, telefono)
    - **ORDENADOR** (<u>codigo_o</u>)
    - **IMPRESORA** (<u>codigo_i</u>, <mark>codigo_o</mark>)
        - codigo_o -> ORDENADOR (codigo_o) <span class="tag-no-nulo">[no nulo]</span> <span class="tag-unico">[unico]</span>
    - **APLICACIÓN** (<u>codigo_a,codigo_o</u>)
        - codigo_o -> ORDENADOR (codigo_o) <span class="tag-no-nulo">[no nulo]
    - **RED_ORDENADOR** (<u><mark>codigo_x</mark></u>, <u><mark>codigo_o</mark></u>)
        - codigo_x -> RED (codigo_x)
        - codigo_o -> ORDENADOR (codigo_o)
    - **EMPLEADO_ORDENADOR** (<u><mark>dni</mark>, <mark>codigo_o</mark></u>)
        - dni -> EMPLEADO (dni)
        - codigo_o -> ORDENADOR (codigo_o)
    - **PERMISO** (<u><mark>dni</mark>, <mark>codigo_a</mark></u>)
        - dni -> EMPLEADO (dni)
        - codigo_a -> APLICACIÓN (codigo_a)
    - **REGISTRA** (<u>num_reg></u>, <mark>dni</mark>, <mark>codigo_o</mark>, <mark>codigo_a</mark>, fecha)
        - dni -> EMPLEADO (dni) <span class="tag-no-nulo">[no nulo]</span>
        - codigo_o -> ORDENADOR (codigo_o)  <span class="tag-no-nulo">[no nulo]</span>
        - codigo_a -> APLICACIÓN (codigo_a) <span class="tag-no-nulo">[no nulo]</span>

??? success "Ver solución propuesta (Ejercicio 9)"
    
    - **SECTOR** (<u>cod_sector</u>)
    - **CIUDAD** (<u>cod_ciudad</u>, <mark>cod_sector</mark>)
        - cod_sector -> SECTOR (cod_sector) <span class="tag-no-nulo">[no nulo]
    - **VIAJANTE** (<u>cod_viajante</u>)
    - **CLIENTE** (<u>cod_cliente</u>, <mark>cod_ciudad</mark>)
        - cod_ciudad -> CIUDAD (cod_ciudad) <span class="tag-no-nulo">[no nulo]
    - **PRODUCTO** (<u>cod_producto</u>)
    - **VIAJANTE_PRODUCTO** (<u><mark>cod_viajante</mark>, <mark>cod_producto</mark></u>)
        - cod_viajante -> VIAJANTE (cod_viajante)
        - cod_producto -> PRODUCTO (cod_producto)
    - **SECTOR_VIAJA** (<u><mark>cod_sector</mark>, <mark>cod_viajante</mark></u>)
        - cod_viajante -> VIAJANTE (cod_viajante)
        - cod_sector -> SECTOR (cod_procod_sectorducto)     
    - **OFRECE** (<u><mark>cod_cliente</mark>, <mark>cod_producto</mark></u>, <mark>cod_viajante</mark>, precio)
        - cod_viajante -> VIAJANTE (cod_viajante) <span class="tag-no-nulo">[no nulo]
        - cod_cliente -> CLIENTE (cod_cliente)
        - cod_producto -> PRODUCTO (cod_producto)  
        - precio: <span class="tag-no-nulo">[no nulo]

??? success "Ver solución propuesta (Ejercicio 10)"
    
    - **EMPLEADO** (<u>dni</u>, nombre, direccion, telefono, fecha_inicio)
    - **GUIA** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
        - dni -> EMPLEAT (dni)
    - **CUIDADOR** (<u><mark>dni</mark></u>) <span class="tag-cascade">(borrar en cascada)</span>
        - dni -> EMPLEAT (dni)
    - **HABITAT** (<u>cod_h</u>, clima, vegetacion)
    - **ZONA** (<u>cod_z</u>, extension)
    - **ESPECIE** (<u>nom_c</u>, nombre, descripcion, <mark>cod_z</mark>)
        - cod_z -> ZONA (cod_z) <span class="tag-no-nulo">[no nulo]
    - **ESPECIE_HABITAT** (<u><mark>nom_c</mark>, <mark>cod_h</mark></u>)
        - nom_c -> ESPECIE (nom_c)
        - cod_h -> HABITAT (cod_h)
    - **CUIDADOR_ESPECIE** (<u><mark>dni</mark>, <mark>nom_c</mark></u>, data)
        - dni -> CUIDADOR (dni)
        - nom_c -> ESPECIE (nom_c)
    - **ITINERARIO** (<u>cod_i</u>, duracion, longitud, max_visitantes, num_especies)
    - **GUIA_ITINERARIO** (<u><mark>dni</mark>, <mark>cod_i</mark></u>, horas)
        - dni -> GUIA (dni)
        - cod_i -> ITINERARIO (cod_i)
    - **ITINERARIO_ZONA** (<u><mark>cod_i</mark>, <mark>cod_z</mark></u>)
        - cod_i -> ITINERARIO (cod_i)
        - cod_z -> ZONA (cod_z)