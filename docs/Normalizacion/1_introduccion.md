# 1. Introducción


El proceso de normalización se encarga de seguir una serie de pasos o normas. Después de aplicarlas todas, se obtienen los datos agrupados en diferentes tablas, de manera que es la estructura óptima para su implementación, gestión y explotación desde diferentes aplicaciones futuras.

La normalización se basa en que los datos deben ser independientes de las aplicaciones que los utilizan, y por lo tanto no serán optimizados para una aplicación determinada sino que serán optimizados, en general, para cualquier aplicación futura. Su objetivo es obtener el **mayor número de tablas posibles**. Cada una de estas tablas estará formada por los atributos imprescindibles para representar la entidad o la relación entre entidades.



Ventajas que se obtienen después de la normalización:

  * **Facilidad de uso.** Los datos están agrupados en tablas que identifican claramente una entidad o una relación.
  

  * **Flexibilidad.** La información que necesitan los usuarios se puede obtener de las tablas relacionales por medio de las operaciones del álgebra relacional. No se tienen unas estructuras rígidas de datos sino que se pueden combinar de manera que se obtengan múltiples vistas.
  

  * **Facilidad de Implementación.** Las tablas resultantes son simples.
  

  * **Claridad.** La representación de la información es clara y sencilla para el usuario. Son tablas sencillas.
  

  * **Redundancia mínima.** La información no estará duplicada innecesariamente dentro de las estructuras.
  

  * **Máximo rendimiento de las aplicaciones.** Solo se trata aquella información que será de utilidad a cada aplicación.

****

Dentro de todo el proceso de creación de una Base de Datos, la normalización se haría después de construir todo el esquema relacional, es decir, primero se construiría el esquema con el Modelo E/R, después se traduciría al Modelo Relacional, y posteriormente se normalizarían estas tablas del esquema relacional. Lo cierto es que normalmente las tablas que nos saldrán en el esquema relacional estarán bastante normalizadas, aunque puede ser muy conveniente analizar todas las tablas.

**La verdadera utilidad y necesidad de la normalización está en la conversión o actualización de sistemas de información antiguos**. Así, si queremos actualizar una aplicación basada en ficheros tradicionales, la normalización de las tablas será absolutamente necesaria.



Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial SinObraDerivada 3.0](http://creativecommons.org/licenses/by-nc-nd/3.0/)
