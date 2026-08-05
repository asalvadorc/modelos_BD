# Soluciones

Antes de consultar la resolución, asegúrate de haber intentado resolver cada ejercicio. Comparar tu propuesta con la solución te ayudará más que leerla directamente.

??? success "Ver solución propuesta (Ejercicio 1)"

    Una propuesta coherente con el grafo (suponiendo tabla en 1FN y clave compuesta inicial) es:

    - **T1** (<u>A, B, C</u>, Q, S)
    - **T2** (<u>A</u>, M)
    - **T3** (<u>M</u>, N, P)
    - **T4** (<u>C</u>, O, R)

    Relaciones entre tablas:

    - A en **T1** -> **T2** (A)
    - M en **T2** -> **T3** (M)
    - C en **T1** -> **T4** (C)

    Con esta descomposición se eliminan dependencias parciales y transitivas del esquema inicial.

??? success "Ver solución propuesta (Ejercicio 2)"

    El problema principal está en **FPROF** y **FCURS**, porque contienen grupos repetidos (CODCURS1..10, CODASSIG1..10, ...), por lo que inicialmente no están en 1FN.

    Una descomposición razonable es:

    - **ALUMNO** (<u>CODAL</u>, NUMEX, COGNOM1, COGNOM2, NOM)
    - **CURSO** (<u>CODCURS</u>, NOMCURS, CODTUTOR)
    - **PROFESOR** (<u>CODPROF</u>, NOMPROF)
    - **ASIGNATURA** (<u>CODASSIG</u>, NOMASSIG)
    - **MATRICULA** (<u>CODAL, CODCURS</u>)
        - CODAL -> ALUMNO (CODAL)
        - CODCURS -> CURSO (CODCURS)
    - **CURSO_ASIGNATURA** (<u>CODCURS, CODASSIG</u>)
        - CODCURS -> CURSO (CODCURS)
        - CODASSIG -> ASIGNATURA (CODASSIG)
    - **DOCENCIA** (<u>CODPROF, CODCURS, CODASSIG</u>)
        - CODPROF -> PROFESOR (CODPROF)
        - CODCURS -> CURSO (CODCURS)
        - CODASSIG -> ASIGNATURA (CODASSIG)

    Además:

    - **FGAL** se reparte entre **ALUMNO** y **MATRICULA**.
    - **FASSIGN** se reparte entre **ASIGNATURA** y **DOCENCIA**.
    - **FCURS** se reparte entre **CURSO**, **CURSO_ASIGNATURA** y (si procede) **PROFESOR** para el tutor.

??? success "Ver solución propuesta (Ejercicio 3)"

    La tabla inicial no está en 1FN porque tiene grupos repetidos de líneas de factura (COD1..COD15, CONCEPTE1..CONCEPTE15, ...).

    Una propuesta de normalización:

    - **CLIENTE** (<u>DNICLI</u>, NOMCLI, ADRCLI, CPCLI, CIUCLI, TELCLI)
    - **HABITACION** (<u>NUMHAB</u>, TIPHAB, TARHAB)
    - **FACTURA** (<u>NUMFACT</u>, DATA, DNICLI, NUMHAB, NUMPERS, BASE_IMPONIBLE, IVA, TOTFAC)
        - DNICLI -> CLIENTE (DNICLI)
        - NUMHAB -> HABITACION (NUMHAB)
    - **CONCEPTO** (<u>CODCONCEPTO</u>, DESCRIPCION)
    - **LINEA_FACTURA** (<u>NUMFACT, NLINEA</u>, CODCONCEPTO, CANTIDAD, PRECIO_UNITARIO, TOTAL_LINEA)
        - NUMFACT -> FACTURA (NUMFACT)
        - CODCONCEPTO -> CONCEPTO (CODCONCEPTO)

    Nota práctica:

    - Si el precio puede variar en el tiempo, debe guardarse en **LINEA_FACTURA** (como en la propuesta).
    - Si el precio es fijo por concepto, puede guardarse en **CONCEPTO** y omitirlo en la línea.
