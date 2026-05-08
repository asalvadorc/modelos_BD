# 1. Introducción



En 1970 **E.F. Codd** introdujo la teoría matemática de las relaciones en el campo de los SGBD. El modelo de datos que creó se llama **MODELO RELACIONAL**, con una base matemática (la de las relaciones) muy sólida, donde los datos se estructuran en forma de relaciones (tablas) que son estructuras de datos simples y uniformes, que permiten una fácil comprensión.

En el momento en que surgió, los modelos que funcionaban eran el jerárquico y el de red (también llamado Codasyl, por el grupo de trabajo que lo estandarizó). Como modelo los superó porque, como dijo el mismo Codd,
"_proporciona un medio para describir los datos con su estructura únicamente, sin tener que superponer ninguna estructura adicional para representarse en la máquina_" (es decir, sin punteros ni historias).

A pesar de ello estuvo unos años en competencia con aquellos, con mucha gente muy reticente, ya que los productos comerciales que salían no eran suficientemente eficientes, quizás porque la tecnología de la época no lo permitía. A partir de los años 80, cuando la tecnología lo permitió, salieron productos mejores, como por ejemplo el **ORACLE** (1979), y entonces su implantación fue aplastante.

Los objetivos del Modelo Relacional son:

  * **Fidelidad**, para originar esquemas que representen fielmente la información (los objetos y relaciones entre ellos) que existe en el dominio del problema.
  

  * **Independencia física**[1], para que la forma de guardar los datos no influya en su manipulación lógica, y así los usuarios que acceden a estos datos no tengan que modificar sus programas por cambios en el almacenamiento físico.
  

  * **Independencia lógica**, para que las vistas externas no se vean afectadas por cambios en el esquema conceptual de la B.D.
  

  * **Flexibilidad**, para poder ofrecer los datos a cada usuario de la forma más adecuada a su aplicación.
  

  * **Uniformidad**, las estructuras lógicas de los datos presentan un aspecto simple y uniforme (las tablas), lo que facilita la concepción y manipulación por parte de los usuarios.
  

  * **Sencillez**, las características anteriores, unidas a unos lenguajes de usuario sencillos, hacen que el M. Relacional sea fácil de entender y de utilizar por el usuario final.

Recordad que las **relaciones** del Modelo Relacional son las **tablas**. No son lo mismo que las relaciones del Modelo Entidad-Relación. Para evitar confusiones intentaremos llamarlas siempre tablas.

* * *

[1]En realidad tanto la independencia física como lógica las han intentado conseguir todos los modelos.


Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial CompartirIgual 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
