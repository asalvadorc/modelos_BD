# Ejercicios


## ![](icon_activity.gif) Ejercicio 3

Diseñar un esquema E/R que recoja información sobre una universidad. Se
considera que:

  * Los departamentos (como por ejemplo el Departamento de _Lenguajes y Sistemas Informáticos_) pueden estar en una única facultad o ser interfacultativos, agrupando en este caso cátedras que pertenecen a facultades distintas.
  

  * Una cátedra (por ejemplo la de _Bases de Datos_) pertenece a un único departamento.
  

  * Una cátedra está en una única facultad.
  

  * Un profesor está siempre asignado a un único departamento y adscrito a una o más de una cátedra. Puede cambiar de cátedra pero no de departamento. Nos interesa la fecha en que un profesor es adscrito a una cátedra.
  

  * Existen áreas de conocimiento (como por ejemplo el área de _Informática_, que incluye los departamentos de _Lenguajes y Sistemas Informáticos_ y de _Ingeniería y Ciencia de los Computadores_) y todo departamento tendrá una única área de conocimiento.


## ![](icon_activity.gif) Ejercicio 4

El análisis de requisitos de una determinada red bancaria es el siguiente:

  * De cada banco nos interesa el nombre y la dirección de la sede social. Hay un código distinto para cada entidad bancaria.

  * Cada banco tiene distintas sucursales, que se identifican _internamente_ por un código.

  * Cada sucursal tiene asignados una serie de cuentas corrientes, que se identifican _internamente_ por un código. Una cuenta puede pertenecer a uno o más de un cliente. Es posible que cada cliente pueda hacer operaciones distintas con las cuentas. Así podría ser que, aunque dos clientes sean titulares de una misma cuenta, solo uno tenga facultad para cerrarla.

  * Cada cliente, que se identifica por su DNI, puede tener más de una cuenta, y evidentemente privilegios distintos en cada una de ellas.

  * Cada cuenta puede tener domiciliaciones asociadas a ella.

  * Las sucursales pueden otorgar préstamos a los clientes, que no estarán asociados a las cuentas. Cada préstamo se otorga a nombre de un único cliente, y a un cliente se le puede otorgar más de un préstamo.


## ![](icon_activity.gif) Ejercicio 5

Se quiere mantener información sobre una **biblioteca**, donde podemos tener de cada
libro más de un ejemplar, que además se pueden prestar, y que también nos
interesa un histórico de préstamos. El análisis de requerimientos sería el siguiente:

  * Cada libro (con un determinado título, ISBN, idioma, número de edición y fecha de edición) trata solo de un tema, está editado por una única editorial, escrito por uno o más autores, y dispondremos de unos cuantos ejemplares. De los ejemplares siempre tendremos el número de registro, que lo identifica unívocamente.

  * Los préstamos son de los ejemplares de los libros, que son las materializaciones de los libros. Un ejemplar se puede prestar a un único lector (del cual tendremos Dni, Nombre, Dirección y Teléfono), y nos interesa la fecha en la cual se ha prestado. Un lector puede tener más de un libro prestado.

  * Aparte del préstamo actual, querremos saber en el pasado a quién se ha prestado. Por tanto en el histórico de préstamos cada ejemplar se habrá prestado a muchos lectores, y para poder llevar el seguimiento nos interesa la fecha de préstamo y la de devolución.

## ![](icon_activity.gif) Ejercicio 6

Realizad el esquema E/R que recoja información de una asociación
de aficionados a las **mariposas**, que quieren guardar información respecto a
ejemplares capturados bien para su observación, bien para ser incluidos en una
colección:

  * Como en cualquier orden natural, un ejemplar de mariposa pertenece a una especie única. Una especie pertenece a un género único, y un género a una familia natural única.
  

  * Cada especie de mariposa tiene un nombre científico único, aunque su nombre común, que depende de la comarca donde se ha cogido, también nos interesa.
  

  * Ya sea para la observación o para formar parte de una colección, primero se tiene que capturar el ejemplar de mariposa. Esta captura la realiza una única persona, y querremos saber también en qué lugar (comarca) se ha capturado. Si el ejemplar es destinado a la observación querremos saber la duración de la observación.
  

  * Una determinada persona solo puede ser propietaria de una colección, pero los ejemplares de esta colección pueden haber estado capturados por otras personas.
  

  * Se quiere mantener información de las familias, géneros y especies de mariposas aunque no se hayan capturado ejemplares de los mismos.
  

  * Una mariposa solo puede pertenecer a una colección, y una colección está formada al menos por un ejemplar. Toda mariposa que pertenece a una colección tendrá un determinado valor. 

<!--
## ![](icon_activity.gif) Ejercicio 7

Una empresa de líneas ferroviarias quiere que se le diseñe una Base de Datos para su gestión. Este es el análisis de requerimientos:

  * La compañía necesita controlar los trenes, sus trabajadores y los viajes realizados. 

  * De los trabajadores se quiere guardar su código y nombre. Para los conductores, además, nos interesa el número de horas que han realizado.

  * Todos los trabajadores tienen una estación base a la que pertenecen y de las estaciones se quiere tener el nombre, la localidad y el teléfono.

  * Los trenes tienen un código que los identifica, un tipo (cercanías, grandes líneas,…) y una estación donde se le realizan las revisiones de mantenimiento.

  * Un trayecto será un tipo de viaje que se realiza regularmente. Tendrá una estación origen y una estación de destino.

  * Un viaje de tren es una materialización de un trayecto, y utilizará obviamente un tren, una fecha, una hora de salida y uno o unos conductores que lo lleven (no nos interesan los otros posibles trabajadores que van en los viajes). Todos los viajes se identifican por un código, por ejemplo, el viaje correspondiente al trayecto Castellón - Valencia de las 12:10 de un determinado día es el viaje 4356.

Opcionalmente, podemos poner todas las estaciones a las que se llega en un trayecto (sustituyendo la estación origen y destino). Tendremos que saber si la estación es origen, destino o de paso.

-->

Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial
CompartirIgual 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
