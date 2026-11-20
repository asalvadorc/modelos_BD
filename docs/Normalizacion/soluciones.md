---
hide:
  - toc
---

# Soluciones

!!! warning "Antes de consultar la resolución"
    Intenta resolver cada ejercicio y compara después tu propuesta con la solución.



??? success "Ejercicio 1. Grafo de dependencias funcionales"

    ### 1. Normalización hasta 3FN

    #### 1.1. Primera forma normal (1FN)

    La relación ya está en 1FN. La clave principal es **(A, B, O)**.

    ![Grafo inicial con clave A, B y O.](ejercicios-clase/01-grafo-df.png){ width=700 }

    #### 1.2. Segunda forma normal (2FN)

    Separamos las dependencias parciales **A → Q**, **O → C** y **B + O → R** en R2, R3 y R4. R1 conserva la clave completa y M y S; N y P permanecen de momento junto a M.

    **Grafo tras aplicar 2FN**

    ![En 2FN quedan R1, R2, R3 y R4; M todavía determina N y P dentro de R1.](ejercicios-clase/01-grafo-2fn.svg){ width=900 }

    #### 1.3. Tercera forma normal (3FN)

    En R1 quedan **A + B + O → M → N, P**. Separamos M, N y P en R5 y conservamos M en R1.

    **Grafo tras aplicar 3FN**

    ![En 3FN se añade R5 con clave M y atributos N y P.](ejercicios-clase/01-grafo-3fn.svg){ width=900 }

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 1, con sus columnas, claves primarias y claves externas.](ejercicios-clase/01-diagrama-relacional.svg){ width=1200 }

        R1 conserva la relación original; R2, R3 y R4 recogen las dependencias parciales y R5 la dependencia transitiva. Los nombres corresponden a los grafos de la resolución.

??? success "Ejercicio 2. Pedidos"

    Normaliza la relación del siguiente grafo y expresa el resultado en el modelo relacional.

    
    ![Grafo inicial de pedidos.](ejercicios-clase/02-pedidos.png){ width=700 }

    El grafo representa las dependencias entre los datos de una única tabla **PEDIDOS**. Antes de normalizarla, todos los campos pertenecen a la tabla que se muestra a continuación.

    <div class="normalizacion-exercise-table" markdown>

    | IDcliente | Región | IDproducto | IDpedido | Cantidad | NombreProducto | Categoria | ImpuestoRegion | FechaPedido | PrecioUnitario |
    |-----------|--------|------------|----------|----------|----------------|-----------|----------------|-------------|----------------|

    </div>


    ### 1. Normalización hasta 3FN

    La clave principal de la relación inicial es **(IDcliente, Región, IDproducto)**.

    Las dependencias representadas son:

    - **IDcliente + Región + IDproducto → IDpedido, FechaPedido**.
    - **IDpedido → Cantidad**.
    - **Región + IDproducto → NombreProducto, ImpuestoRegion**.
    - **NombreProducto → Categoria**.
    - **IDproducto → PrecioUnitario**.

    #### 1.1. Primera forma normal (1FN)

    La relación ya está en **1FN**: todos sus atributos contienen valores atómicos.

    #### 1.2. Segunda forma normal (2FN)

    Identificamos las dependencias **parciales** respecto a la clave compuesta:

    - NombreProducto e ImpuestoRegion dependen solo de **Región + IDproducto**.
    - Categoria también depende de esa parte de la clave, a través de NombreProducto.
    - PrecioUnitario depende solo de **IDproducto**.

    En cambio, IDpedido y FechaPedido dependen de la clave completa. Cantidad permanece de momento junto a IDpedido, porque se obtiene a través de él.

    Separamos los atributos según sus determinantes:

    - **PEDIDOS** (<u>IDcliente, Región, IDproducto</u>, IDpedido, FechaPedido, Cantidad).
    - **PRODUCTO** (<u>Región, IDproducto</u>, NombreProducto, Categoria, ImpuestoRegion).
    - **PRECIO** (<u>IDproducto</u>, PrecioUnitario).

    Es importante separar PRECIO: dejar PrecioUnitario en PRODUCTO mantendría una dependencia parcial respecto a su clave (Región, IDproducto).

    **Grafo tras aplicar 2FN**

    ![Grafo del ejercicio 2 tras aplicar segunda forma normal.](ejercicios-clase/02-pedidos-2fn.svg){ width=900 }

    #### 1.3. Tercera forma normal (3FN)

    Quedan dos dependencias transitivas:

    - En PEDIDOS: **IDcliente + Región + IDproducto → IDpedido → Cantidad**.
    - En PRODUCTO: **Región + IDproducto → NombreProducto → Categoria**.

    Separamos Cantidad y Categoria en sus propias tablas. Conservamos IDpedido en PEDIDOS y NombreProducto en PRODUCTO como claves externas.

    **Grafo tras aplicar 3FN**

    ![Solución de pedidos en 3FN: cinco tablas, cada una con su clave y sus dependencias. PEDIDOS referencia PRODUCTO y CANTIDAD; PRODUCTO referencia PRECIO y CATEGORIA.](ejercicios-clase/02-pedidos-solucion.svg){ width=850 }

    ### 2. Tablas resultantes con PK y FK

    - **CANTIDAD** (<u>IDpedido</u>, Cantidad).
        - PK: IDpedido.
    - **CATEGORIA** (<u>NombreProducto</u>, Categoria).
        - PK: NombreProducto.
    - **PRECIO** (<u>IDproducto</u>, PrecioUnitario).
        - PK: IDproducto.
    - **PRODUCTO** (<u>Región, IDproducto</u>, NombreProducto, ImpuestoRegion).
        - PK: (Región, IDproducto).
        - FK: IDproducto → PRECIO(IDproducto).
        - FK: NombreProducto → CATEGORIA(NombreProducto).
    - **PEDIDOS** (<u>IDcliente, Región, IDproducto</u>, IDpedido, FechaPedido).
        - PK: (IDcliente, Región, IDproducto).
        - FK: (Región, IDproducto) → PRODUCTO(Región, IDproducto).
        - FK: IDpedido → CANTIDAD(IDpedido).


    Con las dependencias indicadas, todas las tablas cumplen **FNBC**: en todas sus dependencias funcionales no triviales, el determinante es una clave.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 2, con sus columnas, claves primarias y claves externas.](ejercicios-clase/02-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 3. Líneas de pedido"

    **Tabla original de pedidos**

    <div class="normalizacion-exercise-table" markdown>

    | **id_orden** | **fecha** | **id_cliente** | **nom_cliente** | **ciudad** | **num_art** | **nom_art** | **cantidad** | **precio_art** |
    |-------------|-----------|----------------|-----------------|------------|-------------|-------------|----------|------------|
    | 2301 | 23/02/11 | 101 | Martin | Caracas | 3786 | Red | 3 | 35,00 |
    | 2301 | 23/02/11 | 101 | Martin | Caracas | 4011 | Raqueta | 6 | 65,00 |
    | 2301 | 23/02/11 | 101 | Martin | Caracas | 9132 | Paq-3 | 8 | 4,75 |
    | 2302 | 25/02/11 | 107 | Herman | Coro | 5794 | Paq-6 | 4 | 5,00 |
    | 2303 | 27/02/11 | 110 | Pedro | Maracay | 4011 | Raqueta | 2 | 65,00 |
    | 2303 | 27/02/11 | 110 | Pedro | Maracay | 3141 | Funda | 2 | 10,00 |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    Partimos de una tabla con una fila por artículo incluido en una orden. Los datos de la orden y del cliente se repiten cuando una orden contiene varios artículos.

    La clave principal es **(id_orden, num_art)**: una orden puede tener varios artículos y el mismo artículo puede aparecer en distintas órdenes.

    ### 2. Dependencias funcionales y grafo

    - **id_orden → fecha, id_cliente**.
    - **id_cliente → nom_cliente, ciudad**.
    - **num_art → nom_art, precio_art**.
    - **id_orden + num_art → cantidad**.

    **Grafo de dependencias**

    ![Grafo inicial de líneas de pedido.](ejercicios-clase/03-ordenes.svg){ width=700 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    La relación ya está en **1FN**: todos sus atributos contienen valores atómicos.

    #### 3.2. Segunda forma normal (2FN)

    Las siguientes dependencias son **parciales**, porque sus determinantes son una parte de la clave compuesta:

    - **id_orden → fecha, id_cliente**.
    - **num_art → nom_art, precio_art**.

    La dependencia **id_orden + num_art → cantidad** es **total**: necesitamos conocer tanto la orden como el artículo para determinar la cantidad.

    Separamos los atributos según su determinante:

    - **ORDEN** (<u>id_orden</u>, fecha, id_cliente, nom_cliente, ciudad).
    - **ARTICULO** (<u>num_art</u>, nom_art, precio_art).
    - **DETALLE_ORDEN** (<u>id_orden, num_art</u>, cantidad).

    Los datos del cliente permanecen de momento en ORDEN, porque dependen de id_orden a través de id_cliente. La 2FN todavía permite esta dependencia transitiva.

    **Grafo tras aplicar 2FN**

    ![Grafo del ejercicio 3 tras aplicar segunda forma normal.](ejercicios-clase/03-ordenes-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    En ORDEN existe una dependencia transitiva:

    **id_orden → id_cliente → nom_cliente, ciudad**.

    Separamos los datos del cliente en una nueva tabla y conservamos id_cliente en ORDEN como clave externa.

    **Grafo tras aplicar 3FN**

    ![Esquema normalizado: CLIENTE con clave id_cliente; ORDEN con clave id_orden y referencia al cliente; ARTICULO con clave num_art; DETALLE_ORDEN con clave id_orden y num_art y referencias a ORDEN y ARTICULO. Cada clave determina los atributos de su tabla.](ejercicios-clase/03-ordenes-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **CLIENTE** (<u>id_cliente</u>, nom_cliente, ciudad).
        - PK: id_cliente.
    - **ORDEN** (<u>id_orden</u>, fecha, id_cliente).
        - PK: id_orden.
        - FK: id_cliente → CLIENTE(id_cliente).
    - **ARTICULO** (<u>num_art</u>, nom_art, precio_art).
        - PK: num_art.
    - **DETALLE_ORDEN** (<u>id_orden, num_art</u>, cantidad).
        - PK: (id_orden, num_art).
        - FK: id_orden → ORDEN(id_orden).
        - FK: num_art → ARTICULO(num_art).


    La cantidad queda en DETALLE_ORDEN porque depende de la combinación de orden y artículo. El atributo precio_art queda en ARTICULO, tal como establece la dependencia num_art → precio_art del grafo.

    Con las dependencias indicadas, las cuatro tablas también cumplen **FNBC**: en todas sus dependencias funcionales no triviales, el determinante es una clave.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 3, con sus columnas, claves primarias y claves externas.](ejercicios-clase/03-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 4. Exposiciones"

    **Tabla original EXPOSICIONES**


    <div class="normalizacion-exercise-table exposiciones-table" markdown>

    | codexp | codgal | nomgal | dirgal | cpgal | ciugal | fecha | codobr | nomobr | tip | dim | codaut | nomaut |
    |--------|--------|--------|--------|-------|--------|-------|--------|--------|-----|-----|--------|--------|
    | ART024 | ART | ARTACTUAL | C/ Enmig, 54 | 12001 | Castelló | Del 1-12-2012<br>al 15-12-2012 | GO-068 | Bodegón | Óleo | 60x40 | GM | Gregori Mifsud |
    | ART024 | ART | ARTACTUAL | C/ Enmig, 54 | 12001 | Castelló | Del 1-12-2012<br>al 15-12-2012 | GO-069 | Bodegón | Óleo | 50x30 | GM | Gregori Mifsud |
    | ART024 | ART | ARTACTUAL | C/ Enmig, 54 | 12001 | Castelló | Del 1-12-2012<br>al 15-12-2012 | GO-070 | Paisaje lunar | Óleo | 100x50 | GM | Gregori Mifsud |
    | ART024 | ART | ARTACTUAL | C/ Enmig, 54 | 12001 | Castelló | Del 1-12-2012<br>al 15-12-2012 | RA-250 | Estampa antigua | Aquarela | 40x30 | RB | Ramon Bernat |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    La relación original es **EXPOSICIONES** (<u>codexp, codobr</u>, codgal, nomgal, dirgal, cpgal, ciugal, fecha, nomobr, tip, dim, codaut, nomaut).

    Su clave principal es **(codexp, codobr)**: una exposición puede incluir varias obras y una obra puede participar en distintas exposiciones. Los datos de la exposición, la galería y el autor se repiten. Además, fecha combina el inicio y el fin de la exposición y deberá separarse en 1FN.

    ### 2. Dependencias funcionales y grafo

    - **codexp → fecha, codgal**.
    - **codgal → nomgal, dirgal, cpgal, ciugal**.
    - **codobr → nomobr, tip, dim, codaut**.
    - **codaut → nomaut**.

    **Grafo de dependencias**

    Para que se vea la descomposición del campo fecha, el grafo ya muestra **fecha_inicio** y **fecha_fin** por separado: **codexp → fecha_inicio, fecha_fin, codgal**. El cambio para cumplir la 1FN se explica en el paso 3.1.

    ![Grafo de exposiciones con las fechas separadas.](ejercicios-clase/04-exposiciones-grafo.svg){ width=700 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    El campo **fecha** combina dos datos que queremos consultar por separado: el inicio y el fin de la exposición. Antes de continuar, lo descomponemos en **fecha_inicio** y **fecha_fin**:

    | Valor original de fecha | fecha_inicio | fecha_fin |
    |-------------------------|--------------|-----------|
    | Del 1-12-2012 al 15-12-2012 | 01/12/2012 | 15/12/2012 |

    Sustituimos fecha por estos dos campos en las cuatro filas originales. **No creamos otra tabla ni duplicamos filas**: se trata de separar un atributo compuesto dentro de la misma relación. Para este ejercicio conservamos dim como un único dato de dimensión.

    La relación en 1FN queda así:

    **EXPOSICIONES** (<u>codexp, codobr</u>, codgal, nomgal, dirgal, cpgal, ciugal, fecha_inicio, fecha_fin, nomobr, tip, dim, codaut, nomaut).

    La dependencia del grafo se actualiza a **codexp → fecha_inicio, fecha_fin, codgal**. La clave principal no cambia.

    #### 3.2. Segunda forma normal (2FN)

    La tabla no está en 2FN: sus atributos descriptivos dependen solo de una parte de la clave compuesta.

    - **codexp → fecha_inicio, fecha_fin, codgal**: las fechas y la galería dependen solo de la exposición. Los datos de la galería también se obtienen a partir de codexp, a través de codgal.
    - **codobr → nomobr, tip, dim, codaut**: los datos de la obra dependen solo de su código. El nombre del autor también se obtiene a partir de codobr, a través de codaut.

    Separamos los datos según su determinante:

    - **EXPOSICION** (<u>codexp</u>, fecha_inicio, fecha_fin, codgal, nomgal, dirgal, cpgal, ciugal).
    - **OBRA** (<u>codobr</u>, nomobr, tip, dim, codaut, nomaut).
    - **PARTICIPA** (<u>codexp, codobr</u>).

    PARTICIPA conserva la asociación entre exposición y obra. **Es necesaria aunque no tenga atributos adicionales**: si la elimináramos, perderíamos la información sobre qué obras se exponen en cada exposición.

    **Grafo tras aplicar 2FN**

    ![Grafo del ejercicio 4 tras aplicar segunda forma normal.](ejercicios-clase/04-exposiciones-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Quedan dos dependencias transitivas:

    - En EXPOSICION: **codexp → codgal → nomgal, dirgal, cpgal, ciugal**.
    - En OBRA: **codobr → codaut → nomaut**.

    Separamos los datos de la galería y del autor en dos tablas nuevas. Conservamos codgal en EXPOSICION y codaut en OBRA como claves externas.

    **Grafo tras aplicar 3FN**

    ![Solución en 3FN: GALERIA, EXPOSICION, AUTOR, OBRA y PARTICIPA, con sus claves y dependencias. EXPOSICION referencia GALERIA; OBRA referencia AUTOR; PARTICIPA referencia EXPOSICION y OBRA.](ejercicios-clase/04-exposiciones-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **GALERIA** (<u>codgal</u>, nomgal, dirgal, cpgal, ciugal).
        - PK: codgal.
    - **EXPOSICION** (<u>codexp</u>, fecha_inicio, fecha_fin, codgal).
        - PK: codexp.
        - FK: codgal → GALERIA(codgal).
    - **AUTOR** (<u>codaut</u>, nomaut).
        - PK: codaut.
    - **OBRA** (<u>codobr</u>, nomobr, tip, dim, codaut).
        - PK: codobr.
        - FK: codaut → AUTOR(codaut).
    - **PARTICIPA** (<u>codexp, codobr</u>).
        - PK: (codexp, codobr).
        - FK: codexp → EXPOSICION(codexp).
        - FK: codobr → OBRA(codobr).


    Ahora los datos de cada galería se guardan una sola vez, los del autor una sola vez y las participaciones se registran mediante parejas de códigos. Con las dependencias indicadas, las cinco tablas cumplen **3FN**.

    No añadimos **cpgal → ciugal**, porque el enunciado no establece esa dependencia. La descomposición se basa en las reglas dadas, no únicamente en las coincidencias de las cuatro filas de muestra.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 4, con sus columnas, claves primarias y claves externas.](ejercicios-clase/04-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 5. Trabajador"

    **Tabla original TRABAJADOR**

    <div class="normalizacion-exercise-table" markdown>

    | nss | nombre | apellidos | puesto | salario | emails |
    |-----|--------|-----------|--------|---------|--------|
    | 111 | Juan | Pérez Arias | Jefe de Área | 3000 | juanp@ecn.es; jefe2@ecn.es |
    | 222 | José | Sánchez Ramos | Administrativo | 1500 | juanp@ecn.es; jefe2@ecn.es |
    | 333 | Ana | Díaz Ruiz | Administrativo | 1500 | adiaz@ecn.es; ana32@gmail.com |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    La clave que identifica a cada trabajador es **nss**. El atributo emails es multivaluado, por lo que la tabla original no está en 1FN. Varios trabajadores pueden compartir un email, como muestran las filas de Juan y José.

    ### 2. Dependencias funcionales y grafo

    - **nss → nombre, apellidos, puesto, salario**.
    - **puesto → salario**, si cada puesto tiene un salario fijo. Esta es la regla que asumimos para resolver el ejercicio; debe confirmarse con la empresa y no se deduce solo de las tres filas.

    Un trabajador puede tener varios emails. No suponemos nss → email ni email → nss en la relación que almacena un email por fila.

    Para representar las dependencias con atributos atómicos, el grafo muestra la estructura obtenida tras aplicar 1FN. Esta transformación se desarrolla en el paso 3.1.

    **Grafo de dependencias**

    ![Grafo en 1FN: nss determina nombre, apellidos y puesto; puesto determina salario. EMAIL_TRABAJADOR tiene clave nss y email y no tiene atributos adicionales.](ejercicios-clase/05-trabajador-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    Separamos el atributo multivaluado en una tabla con **una fila por cada email de un trabajador**:

    - **TRABAJADOR** (<u>nss</u>, nombre, apellidos, puesto, salario).
    - **EMAIL_TRABAJADOR** (<u>nss, email</u>).

    **EMAIL_TRABAJADOR en 1FN**

    | nss | email |
    |-----|-------|
    | 111 | juanp@ecn.es |
    | 111 | jefe2@ecn.es |
    | 222 | juanp@ecn.es |
    | 222 | jefe2@ecn.es |
    | 333 | adiaz@ecn.es |
    | 333 | ana32@gmail.com |

    La clave de EMAIL_TRABAJADOR es **(nss, email)**. Ni nss ni email identifican una fila por separado. Ahora cada celda contiene un único valor.

    #### 3.2. Segunda forma normal (2FN)

    Las dos tablas ya están en **2FN**:

    - TRABAJADOR tiene una clave simple, nss; no hay dependencias parciales.
    - EMAIL_TRABAJADOR solo contiene los atributos de su clave compuesta, sin atributos no clave.

    No es necesario descomponer ninguna tabla en este paso.

    **Grafo tras aplicar 2FN**

    El grafo se mantiene respecto a 1FN: no hay dependencias parciales. La dependencia puesto → salario se separará en 3FN.

    ![Grafo del ejercicio 5 tras aplicar segunda forma normal.](ejercicios-clase/05-trabajador-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Con la regla del salario fijo por puesto, en TRABAJADOR existe la dependencia transitiva:

    **nss → puesto → salario**.

    Separamos los salarios por puesto y conservamos puesto en TRABAJADOR como clave externa.

    **Grafo tras aplicar 3FN**

    ![Trabajador en 3FN: PUESTO determina salario; TRABAJADOR con clave nss determina nombre, apellidos y puesto; EMAIL_TRABAJADOR asocia trabajadores y emails con clave compuesta.](ejercicios-clase/05-trabajador-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **PUESTO** (<u>puesto</u>, salario).
        - PK: puesto.
    - **TRABAJADOR** (<u>nss</u>, nombre, apellidos, puesto).
        - PK: nss.
        - FK: puesto → PUESTO(puesto).
    - **EMAIL_TRABAJADOR** (<u>nss, email</u>).
        - PK: (nss, email).
        - FK: nss → TRABAJADOR(nss).


    Ahora los salarios se guardan una sola vez por puesto y los emails se registran sin repetir el resto de los datos del trabajador. Con las reglas utilizadas, las tres tablas cumplen **3FN**.

    Si cada trabajador pudiera tener un salario diferente dentro del mismo puesto, **puesto → salario no se cumpliría**: salario permanecería en TRABAJADOR y no crearíamos PUESTO para esta descomposición.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 5, con sus columnas, claves primarias y claves externas.](ejercicios-clase/05-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 6. Películas"

    **Tabla original PELICULA**

    <div class="normalizacion-exercise-table" markdown>

    | titulo | anyo | duracion | tipo | estudio | ciudadestudio | actor |
    |--------|------|----------|------|---------|---------------|-------|
    | Star Wars | 1977 | 124 | Color | Fox | Hollywood | Carrie Fisher |
    | Star Wars | 1977 | 124 | Color | Fox | Hollywood | Mark Hamill |
    | Star Wars | 1977 | 124 | Color | Fox | Hollywood | Harrison Ford |
    | Mighty Ducks | 1991 | 104 | Color | Disney | Buena Vista | Emilio Estevez |
    | Ben Hur | 1959 | 212 | Color | MGM | Hollywood | Charlton Heston |
    | Ben Hur | 1959 | 212 | Color | MGM | Hollywood | Martha Scott |
    | El retorno del Jedi | 1983 | 124 | Color | Fox | Hollywood | Carrie Fisher |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    La tabla tiene una fila por participación de un actor en una versión de una película. Los datos de la película y la ciudad del estudio se repiten para sus distintos actores.

    La clave principal es **(titulo, anyo, actor)**. Los tres campos son necesarios: título y año no distinguen a los actores de una película; título y actor no distinguen las versiones en las que participa; año y actor no distinguen las películas de ese año.

    ### 2. Dependencias funcionales y grafo

    - **titulo + anyo → duracion, tipo, estudio**: título y año identifican una versión de la película.
    - **estudio → ciudadestudio**: cada estudio está ubicado en una sola ciudad.

    Un actor puede participar en varias versiones del mismo título y una película puede tener varios actores. No se cumple titulo + actor → anyo.

    **Grafo de dependencias**

    ![Grafo en 1FN: la clave principal contiene titulo, anyo y actor. El subconjunto titulo y anyo determina duracion, tipo y estudio; estudio determina ciudadestudio.](ejercicios-clase/06-peliculas-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    La tabla ya está en **1FN**: cada fila contiene un único actor y cada celda un único valor. Que una película aparezca en varias filas no incumple la 1FN.

    #### 3.2. Segunda forma normal (2FN)

    La tabla **no está en 2FN**: duracion, tipo y estudio dependen solo de **titulo + anyo**, una parte de la clave principal. ciudadestudio también depende de esa parte, a través de estudio.

    Separamos los datos de la película de las participaciones de los actores:

    - **PELICULA** (<u>titulo, anyo</u>, duracion, tipo, estudio, ciudadestudio).
    - **REPARTO** (<u>titulo, anyo, actor</u>).

    REPARTO conserva qué actores participan en cada versión. No tiene atributos adicionales y ya está en 3FN. En PELICULA aún queda una dependencia transitiva.

    **Grafo tras aplicar 2FN**

    ![Grafo del ejercicio 6 tras aplicar segunda forma normal.](ejercicios-clase/06-peliculas-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    En PELICULA tenemos la cadena:

    **titulo + anyo → estudio → ciudadestudio**.

    Separamos la ciudad del estudio en ESTUDIO y conservamos estudio en PELICULA como clave externa.

    **Grafo tras aplicar 3FN**

    ![Películas en 3FN: ESTUDIO determina ciudadestudio; PELICULA con clave titulo y anyo determina duracion, tipo y estudio; REPARTO tiene clave titulo, anyo y actor, sin atributos adicionales, y referencia a PELICULA.](ejercicios-clase/06-peliculas-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **ESTUDIO** (<u>estudio</u>, ciudadestudio).
        - PK: estudio.
    - **PELICULA** (<u>titulo, anyo</u>, duracion, tipo, estudio).
        - PK: (titulo, anyo).
        - FK: estudio → ESTUDIO(estudio).
    - **REPARTO** (<u>titulo, anyo, actor</u>).
        - PK: (titulo, anyo, actor).
        - FK: (titulo, anyo) → PELICULA(titulo, anyo).

    La clave compuesta de REPARTO permite registrar varios actores en una película y también al mismo actor en distintas versiones del mismo título.


    El estudio y su ciudad se guardan una sola vez, los datos de cada película una sola vez por título y año y sus actores en REPARTO.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 6, con sus columnas, claves primarias y claves externas.](ejercicios-clase/06-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 7. Matrículas"

    **Tabla original MATRICULA**

    <div class="normalizacion-exercise-table" markdown>

    | idmatricula | nombre | apellido | direccion | telefono | curso | codigo | carrera |
    |-------------|--------|----------|-----------|----------|-------|--------|---------|
    | 100 | Juan | Martín Arias | C/ Ongolmo 340, Concepción | 78872890 | base datos | bd1 | ingeniería civil informática |
    | 100 | Juan | Martín Arias | C/ Ongolmo 340, Concepción | 78872890 | estadística | e2 | ingeniería civil informática |
    | 100 | Juan | Martín Arias | C/ Ongolmo 340, Concepción | 78872890 | analítica | a5 | ingeniería civil informática |
    | 200 | Ana | Rodríguez Ferrer | C/San Martín 840, Santiago | 78342367 | estadística | e2 | ingeniería comercial |
    | 200 | Ana | Rodríguez Ferrer | C/San Martín 840, Santiago | 78342367 | analítica | a5 | ingeniería comercial |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    Tal como indica el enunciado, **idmatricula identifica al alumno** y **codigo identifica al curso**. La clave principal de la tabla original es **(idmatricula, codigo)**: un alumno se matricula en varios cursos y un curso puede tener varios alumnos.

    Los datos del alumno se repiten en cada matrícula y el nombre del curso se repite para sus alumnos. Además, direccion combina la dirección y la localidad, que separaremos en el paso 3.1.

    ### 2. Dependencias funcionales y grafo

    - **idmatricula → nombre, apellido, direccion, telefono, carrera**.
    - **codigo → curso**.

    Suponemos que cada alumno tiene una dirección, un teléfono y una carrera; no suponemos que el nombre del curso sea único. Al separar direccion en dirección y localidad, idmatricula también determina localidad.

    Para representar las dependencias con atributos atómicos, el grafo muestra la estructura obtenida tras aplicar 1FN. Esta transformación se desarrolla en el paso 3.1.

    **Grafo de dependencias**

    ![Grafo en 1FN: la clave compuesta contiene idmatricula y codigo; idmatricula determina los datos del alumno, con direccion y localidad separados, y codigo determina curso.](ejercicios-clase/07-matriculas-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    Para tratar por separado la dirección y la localidad, descomponemos el atributo direccion, tal como pide el ejercicio:

    | idmatricula | direccion | localidad |
    |-------------|-----------|-----------|
    | 100 | C/ Ongolmo 340 | Concepción |
    | 200 | C/San Martín 840 | Santiago |

    Esta tabla muestra cómo se separa el campo; todavía no es la descomposición completa de la relación. Sustituimos direccion por **direccion y localidad** en cada fila original:

    **MATRICULA** (<u>idmatricula, codigo</u>, nombre, apellido, direccion, localidad, telefono, curso, carrera).

    Cada fila ya contiene un solo curso. Repetir los datos de un alumno en filas distintas **no es, por sí mismo, una infracción de la 1FN**; las dependencias parciales de esos datos se eliminan en 2FN.

    #### 3.2. Segunda forma normal (2FN)

    Existen dependencias parciales respecto a (idmatricula, codigo):

    - Los datos del alumno dependen solo de **idmatricula**, incluida localidad tras separar la dirección.
    - El nombre del curso depende solo de **codigo**.

    Separamos los atributos según su determinante y conservamos la relación de matrícula:

    - **ALUMNO** (<u>idmatricula</u>, nombre, apellido, direccion, localidad, telefono, carrera).
    - **CURSO** (<u>codigo</u>, curso).
    - **MATRICULA** (<u>idmatricula, codigo</u>).

    MATRICULA es necesaria aunque no tenga atributos adicionales: guarda qué cursos ha elegido cada alumno.

    **Grafo tras aplicar 2FN**

    Las tres tablas obtenidas en 2FN ya cumplen también la 3FN; en el siguiente paso el grafo no cambia.

    ![Grafo del ejercicio 7 tras aplicar segunda forma normal.](ejercicios-clase/07-matriculas-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Con las reglas indicadas, no quedan dependencias transitivas entre atributos no clave. Las tres tablas obtenidas en 2FN **ya están en 3FN**: no hace falta otra descomposición.

    No separamos carrera en una tabla propia, porque el enunciado no aporta otros atributos ni dependencias que lo exijan. Tampoco suponemos que direccion determine localidad: una misma dirección escrita puede existir en distintas localidades.

    El grafo se mantiene: no quedan dependencias transitivas que requieran otra descomposición.

    **Grafo tras aplicar 3FN**

    ![Matrículas en 3FN: ALUMNO con clave idmatricula determina sus seis atributos; CURSO con clave codigo determina curso; MATRICULA registra la asociación con clave idmatricula y codigo.](ejercicios-clase/07-matriculas-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **ALUMNO** (<u>idmatricula</u>, nombre, apellido, direccion, localidad, telefono, carrera).
        - PK: idmatricula.
    - **CURSO** (<u>codigo</u>, curso).
        - PK: codigo.
    - **MATRICULA** (<u>idmatricula, codigo</u>).
        - PK: (idmatricula, codigo).
        - FK: idmatricula → ALUMNO(idmatricula).
        - FK: codigo → CURSO(codigo).


    La unión de las tres tablas por idmatricula y codigo recupera las cinco matrículas originales, con dirección y localidad separadas.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 7, con sus columnas, claves primarias y claves externas.](ejercicios-clase/07-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 8. Recetas de cocina: ingredientes en una celda"

    **Tabla original RECETAS_COCINA**

    <div class="normalizacion-exercise-table recetas-table" markdown>

    | Cod_Plato | Nombre_Plato | Cocinero | Región | Tipo_Plato | Ingredientes |
    | --- | --- | --- | --- | --- | --- |
    | P01 | Paella Valenciana | Carlos García | valenciana | Principal | Arroz, Pollo, Judías Verdes, Tomate |
    | P02 | Ensalada Mixta | María López | internacional | Entrante | Lechuga, Tomate, Atún, Aceitunas |
    | P03 | Tarta de Queso | Laura Sánchez | vasca | Postre | Queso Crema, Galletas, Mantequilla |
    | P04 | Gazpacho Andaluz | Antonio Martínez | andaluza | Principal | Tomate, Pepino, Pimiento, Aceite |
    | P05 | Cocido Madrileño | Javier Pérez | madrileña | Entrante | Garbanzos, Carne, Patata |
    | P06 | Flan de Huevo | Elena Rodríguez | internacional | Postre | Huevos, Leche, Azúcar |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    **Cod_Plato** identifica cada plato en la tabla original y es su clave principal. Ingredientes contiene varios valores en una misma celda: es un **atributo multivaluado**. La estructura no cumple la 1FN y dificulta añadir ingredientes sin modificar las columnas o el contenido de una lista.

    ### 2. Dependencias funcionales y grafo

    **Cod_Plato → Nombre_Plato, Cocinero, Región, Tipo_Plato**.

    Suponemos un nombre, un cocinero, una región y un tipo por plato. Un plato puede tener varios ingredientes y un ingrediente puede aparecer en varios platos.

    No suponemos que el cocinero determine la región ni el tipo de plato. En la relación que guarda un ingrediente por fila, la pareja **(Cod_Plato, Ingrediente)** identifica cada participación.

    Para representar las dependencias con atributos atómicos, el grafo muestra la estructura obtenida tras aplicar 1FN. Esta transformación se desarrolla en el paso 3.1.

    **Grafo de dependencias**

    ![Tras aplicar 1FN: RECETA tiene clave Cod_Plato y determina Nombre_Plato, Cocinero, Región y Tipo_Plato; RECETA_INGREDIENTE tiene clave Cod_Plato e Ingrediente y no contiene otros atributos.](ejercicios-clase/08-09-recetas-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    La tabla no está en 1FN. Ingredientes es **multivaluado**: contiene una lista de valores en una sola celda.

    Separamos la lista de ingredientes en filas, una por cada pareja de plato e ingrediente.

    Conservamos los datos del plato en RECETA y creamos RECETA_INGREDIENTE para sus ingredientes. Su clave es **(Cod_Plato, Ingrediente)**: cada ingrediente se registra una sola vez en cada receta.

    **Ejemplo de las filas de la paella**

    | Cod_Plato | Ingrediente |
    |-----------|-------------|
    | P01 | Arroz |
    | P01 | Pollo |
    | P01 | Judías Verdes |
    | P01 | Tomate |

    Este proceso se aplica a los seis platos. No creamos columnas nuevas para añadir ingredientes y el nombre del plato no se repite en las filas de RECETA_INGREDIENTE.

    #### 3.2. Segunda forma normal (2FN)

    Las dos tablas ya están en 2FN:

    - RECETA tiene clave simple, Cod_Plato; no hay dependencias parciales.
    - RECETA_INGREDIENTE solo contiene los atributos de su clave compuesta.

    No necesitamos otra descomposición. Si hubiéramos repetido los datos del plato junto a cada ingrediente en una sola tabla en 1FN, tendríamos que separarlos ahora, porque dependen solo de Cod_Plato.

    **Grafo tras aplicar 2FN**

    Las tablas ya cumplían 2FN tras separar los ingredientes en 1FN; este paso no cambia el grafo.

    ![Grafo del ejercicio 8 tras aplicar segunda forma normal.](ejercicios-clase/08-09-recetas-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Con las reglas utilizadas no hay dependencias transitivas entre atributos no clave. Las tablas obtenidas en el primer paso ya cumplen 3FN.

    No creamos una tabla INGREDIENTE independiente, porque este ejercicio no aporta atributos propios del ingrediente ni exige un catálogo separado.

    El grafo se mantiene: no quedan dependencias transitivas que requieran otra descomposición.

    **Grafo tras aplicar 3FN**

    ![Resultado en 3FN: RECETA y RECETA_INGREDIENTE, con su clave compuesta y referencia a RECETA.](ejercicios-clase/08-09-recetas-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **RECETA** (<u>Cod_Plato</u>, Nombre_Plato, Cocinero, Región, Tipo_Plato).
        - PK: Cod_Plato.
    - **RECETA_INGREDIENTE** (<u>Cod_Plato, Ingrediente</u>).
        - PK: (Cod_Plato, Ingrediente).
        - FK: Cod_Plato → RECETA(Cod_Plato).


    La lista original se recupera consultando los ingredientes asociados a cada Cod_Plato, sin perder los datos de los seis platos.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 8, con sus columnas, claves primarias y claves externas.](ejercicios-clase/08-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 9. Recetas de cocina: una columna por ingrediente"

    **Tabla original RECETAS_COCINA**

    <div class="normalizacion-exercise-table recetas-table" markdown>

    | Cod_Plato | Nombre_Plato | Cocinero | Región | Tipo_Plato | Ingrediente1 | Ingrediente2 | Ingrediente3 | Ingrediente4 |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | P01 | Paella Valenciana | Carlos García | valenciana | Principal | Arroz | Pollo | Judías Verdes | Tomate |
    | P02 | Ensalada Mixta | María López | internacional | Entrante | Lechuga | Tomate | Atún | Aceitunas |
    | P03 | Tarta de Queso | Laura Sánchez | vasca | Postre | Queso Crema | Galletas | Mantequilla | NULL |
    | P04 | Gazpacho Andaluz | Antonio Martínez | andaluza | Principal | Tomate | Pepino | Pimiento | Aceite |
    | P05 | Cocido Madrileño | Javier Pérez | madrileña | Entrante | Garbanzos | Carne | Patata | NULL |
    | P06 | Flan de Huevo | Elena Rodríguez | internacional | Postre | Huevos | Leche | Azúcar | NULL |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    **Cod_Plato** identifica cada plato en la tabla original y es su clave principal. Ingrediente1, Ingrediente2, Ingrediente3 e Ingrediente4 forman un **grupo repetitivo**. Los NULL muestran que no todos los platos tienen cuatro ingredientes. La estructura no cumple la 1FN y dificulta añadir ingredientes sin modificar las columnas o el contenido de una lista.

    ### 2. Dependencias funcionales y grafo

    **Cod_Plato → Nombre_Plato, Cocinero, Región, Tipo_Plato**.

    Suponemos un nombre, un cocinero, una región y un tipo por plato. Un plato puede tener varios ingredientes y un ingrediente puede aparecer en varios platos.

    No suponemos que el cocinero determine la región ni el tipo de plato. En la relación que guarda un ingrediente por fila, la pareja **(Cod_Plato, Ingrediente)** identifica cada participación.

    Para representar las dependencias con atributos atómicos, el grafo muestra la estructura obtenida tras aplicar 1FN. Esta transformación se desarrolla en el paso 3.1.

    **Grafo de dependencias**

    ![Tras aplicar 1FN: RECETA tiene clave Cod_Plato y determina Nombre_Plato, Cocinero, Región y Tipo_Plato; RECETA_INGREDIENTE tiene clave Cod_Plato e Ingrediente y no contiene otros atributos.](ejercicios-clase/08-09-recetas-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    La tabla no está en 1FN. Ingrediente1, Ingrediente2, Ingrediente3 e Ingrediente4 forman un **grupo repetitivo**: representan el mismo atributo en distintas columnas.

    Convertimos las cuatro columnas de ingredientes en filas de una única columna Ingrediente.

    Conservamos los datos del plato en RECETA y creamos RECETA_INGREDIENTE para sus ingredientes. Su clave es **(Cod_Plato, Ingrediente)**: cada ingrediente se registra una sola vez en cada receta.

    **Ejemplo de las filas de la paella**

    | Cod_Plato | Ingrediente |
    |-----------|-------------|
    | P01 | Arroz |
    | P01 | Pollo |
    | P01 | Judías Verdes |
    | P01 | Tomate |

    No creamos una fila con Ingrediente = NULL: esos valores indican que no hay un cuarto ingrediente.

    Este proceso se aplica a los seis platos. No creamos columnas nuevas para añadir ingredientes y el nombre del plato no se repite en las filas de RECETA_INGREDIENTE.

    #### 3.2. Segunda forma normal (2FN)

    Las dos tablas ya están en 2FN:

    - RECETA tiene clave simple, Cod_Plato; no hay dependencias parciales.
    - RECETA_INGREDIENTE solo contiene los atributos de su clave compuesta.

    No necesitamos otra descomposición. Si hubiéramos repetido los datos del plato junto a cada ingrediente en una sola tabla en 1FN, tendríamos que separarlos ahora, porque dependen solo de Cod_Plato.

    **Grafo tras aplicar 2FN**

    Las tablas ya cumplían 2FN tras eliminar las columnas repetidas; este paso no cambia el grafo.

    ![Grafo del ejercicio 9 tras aplicar segunda forma normal.](ejercicios-clase/08-09-recetas-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Con las reglas utilizadas no hay dependencias transitivas entre atributos no clave. Las tablas obtenidas en el primer paso ya cumplen 3FN.

    No creamos una tabla INGREDIENTE independiente, porque este ejercicio no aporta atributos propios del ingrediente ni exige un catálogo separado.

    El grafo se mantiene: no quedan dependencias transitivas que requieran otra descomposición.

    **Grafo tras aplicar 3FN**

    ![Resultado en 3FN: RECETA y RECETA_INGREDIENTE, con su clave compuesta y referencia a RECETA.](ejercicios-clase/08-09-recetas-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **RECETA** (<u>Cod_Plato</u>, Nombre_Plato, Cocinero, Región, Tipo_Plato).
        - PK: Cod_Plato.
    - **RECETA_INGREDIENTE** (<u>Cod_Plato, Ingrediente</u>).
        - PK: (Cod_Plato, Ingrediente).
        - FK: Cod_Plato → RECETA(Cod_Plato).


    El resultado es el mismo que en el ejercicio 8: cambia la forma inicial de guardar los ingredientes, pero no las tablas necesarias para representarlos.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 9, con sus columnas, claves primarias y claves externas.](ejercicios-clase/09-diagrama-relacional.svg){ width=1200 }

??? success "Ejercicio 10. Recetas de cocina: ingredientes, cantidades y stock"

    **Tabla original RECETAS_COCINA**

    <div class="normalizacion-exercise-table recetas-table" markdown>

    | Cod_Plato | Nombre_Plato | Cocinero | Región | Tipo_Plato | Ingrediente1 | Cantidad1 | Stock1 | Ingrediente2 | Cantidad2 | Stock2 | Ingrediente3 | Cantidad3 | Stock3 | Ingrediente4 | Cantidad4 | Stock4 |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | P01 | Paella Valenciana | Carlos García | valenciana | Principal | Arroz | 300g | 50 kg | Pollo | 200g | 20 kg | Judías Verdes | 100g | 15 kg | Tomate | 50g | 40 kg |
    | P02 | Ensalada Mixta | María López | internacional | Entrante | Lechuga | 150g | 30 kg | Tomate | 80g | 40 kg | Atún | 50g | 10 kg | Aceitunas | 30g | 8 kg |
    | P03 | Tarta de Queso | Laura Sánchez | vasca | Postre | Queso Crema | 250g | 12 kg | Galletas | 150g | 20 kg | Mantequilla | 80g | 5 kg | NULL | NULL | NULL |
    | P04 | Gazpacho Andaluz | Antonio Martínez | andaluza | Principal | Tomate | 500g | 40 kg | Pepino | 150g | 18 kg | Pimiento | 100g | 12 kg | Aceite | 30ml | 25 l |
    | P05 | Cocido Madrileño | Javier Pérez | madrileña | Entrante | Garbanzos | 300g | 35 kg | Carne | 250g | 30 kg | Patata | 200g | 60 kg | NULL | NULL | NULL |
    | P06 | Flan de Huevo | Elena Rodríguez | internacional | Postre | Huevos | 4 ud | 500 ud | Leche | 500ml | 100 l | Azúcar | 100g | 80 kg | NULL | NULL | NULL |

    </div>

    ### 1. Análisis de la tabla y clave primaria

    **Cod_Plato** identifica cada plato en la tabla original y es su clave principal. Los grupos Ingrediente, Cantidad y Stock se repiten en columnas numeradas, lo que incumple la 1FN. También se repite el stock cuando un ingrediente aparece en distintas recetas.

    Cantidad indica cuánto ingrediente necesita un plato; Stock es la existencia disponible del ingrediente en el almacén en el momento considerado.

    ### 2. Dependencias funcionales y grafo

    - **Cod_Plato → Nombre_Plato, Cocinero, Región, Tipo_Plato**.
    - **Cod_Plato + Ingrediente → Cantidad**.
    - **Ingrediente → Stock**.

    Suponemos que Ingrediente identifica un ingrediente del almacén y que el stock es común a todas las recetas. Tras eliminar los grupos repetitivos, la clave de RECETA_INGREDIENTE es **(Cod_Plato, Ingrediente)**. No deducimos reglas adicionales sobre el cocinero, la región o el tipo de plato a partir de la muestra.

    Para representar las dependencias con atributos atómicos, el grafo muestra la estructura obtenida tras aplicar 1FN. Esta transformación se desarrolla en el paso 3.1.

    **Grafo de dependencias**

    ![En 1FN: RECETA con clave Cod_Plato determina los datos del plato; en RECETA_INGREDIENTE la clave completa Cod_Plato e Ingrediente determina Cantidad, mientras que solo Ingrediente determina Stock.](ejercicios-clase/10-recetas-1fn.svg){ width=850 }

    ### 3. Normalización paso a paso hasta 3FN

    #### 3.1. Primera forma normal (1FN)

    Los grupos **Ingrediente1, Cantidad1, Stock1**, **Ingrediente2, Cantidad2, Stock2**, etc., se repiten. Convertimos cada grupo completo en una fila, manteniendo juntos el ingrediente, su cantidad y su stock.

    Obtenemos:

    - **RECETA** (<u>Cod_Plato</u>, Nombre_Plato, Cocinero, Región, Tipo_Plato).
    - **RECETA_INGREDIENTE** (<u>Cod_Plato, Ingrediente</u>, Cantidad, Stock).

    Omitimos los grupos en los que no hay ingrediente; no creamos filas con NULL como parte de la clave. Suponemos una sola cantidad por ingrediente y receta.

    **Ejemplo de la paella tras aplicar 1FN**

    | Cod_Plato | Ingrediente | Cantidad | Stock |
    |-----------|-------------|----------|-------|
    | P01 | Arroz | 300g | 50 kg |
    | P01 | Pollo | 200g | 20 kg |
    | P01 | Judías Verdes | 100g | 15 kg |
    | P01 | Tomate | 50g | 40 kg |

    La cantidad y el stock son medidas con su unidad indicada; para este ejercicio las tratamos como valores atómicos.

    #### 3.2. Segunda forma normal (2FN)

    RECETA ya está en 2FN. RECETA_INGREDIENTE no la cumple: **Ingrediente → Stock** es una dependencia parcial respecto a la clave **(Cod_Plato, Ingrediente)**. El stock del tomate, por ejemplo, se repite en la paella, la ensalada y el gazpacho.

    Separamos el stock en **INGREDIENTE (Ingrediente, Stock)**. En RECETA_INGREDIENTE conservamos Cantidad, que depende de la clave completa: la paella necesita 50g de tomate, la ensalada 80g y el gazpacho 500g.

    **Grafo tras aplicar 2FN**

    La separación de Stock elimina la dependencia parcial. Estas tablas ya cumplen también la 3FN.

    ![Grafo del ejercicio 10 tras aplicar segunda forma normal.](ejercicios-clase/10-recetas-2fn.svg){ width=900 }

    #### 3.3. Tercera forma normal (3FN)

    Con las reglas indicadas, las tres tablas resultantes ya están en 3FN: no quedan dependencias transitivas entre atributos no clave. No es necesaria otra descomposición.

    El grafo se mantiene: no quedan dependencias transitivas que requieran otra descomposición.

    **Grafo tras aplicar 3FN**

    ![Resultado en 3FN: RECETA guarda los datos de cada plato; INGREDIENTE guarda el stock una sola vez; RECETA_INGREDIENTE tiene clave Cod_Plato e Ingrediente y guarda la cantidad necesaria para cada receta, con referencias a ambas tablas.](ejercicios-clase/10-recetas-solucion.svg){ width=850 }

    ### 4. Tablas resultantes con PK y FK

    - **RECETA** (<u>Cod_Plato</u>, Nombre_Plato, Cocinero, Región, Tipo_Plato).
        - PK: Cod_Plato.
    - **INGREDIENTE** (<u>Ingrediente</u>, Stock).
        - PK: Ingrediente.
    - **RECETA_INGREDIENTE** (<u>Cod_Plato, Ingrediente</u>, Cantidad).
        - PK: (Cod_Plato, Ingrediente).
        - FK: Cod_Plato → RECETA(Cod_Plato).
        - FK: Ingrediente → INGREDIENTE(Ingrediente).


    El stock se actualiza en una sola fila de INGREDIENTE, mientras que cada receta conserva su cantidad. Podemos reconstruir los datos uniendo las tablas por Cod_Plato e Ingrediente. Si el stock se gestionara por almacén o fecha, habría que incorporar esos datos al diseño; esa situación no forma parte del ejercicio.

    ??? info "Ver diagrama relacional de la base de datos"

        Cada recuadro representa una tabla con sus columnas. **PK** identifica los campos de la clave primaria y **FK** los de una clave externa. Las flechas conectan cada FK con la PK referenciada; los corchetes agrupan los campos de una clave compuesta. Si hay varios campos marcados como PK en una tabla, **todos juntos forman su clave primaria**.

        ![Diagrama relacional de las tablas del ejercicio 10, con sus columnas, claves primarias y claves externas.](ejercicios-clase/10-diagrama-relacional.svg){ width=1200 }

