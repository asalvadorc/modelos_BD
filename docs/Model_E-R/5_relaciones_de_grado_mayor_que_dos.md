# 5. Relaciones de grado mayor que dos



Vamos a estudiar un poco más el caso de las relaciones ternarias. Dada su
complejidad podríamos, y de hecho así se hace a veces, descomponerla en
tres relaciones binarias



![](relacio_tern1.png)



  
Así puede haber una ocurrencia de que Contabilidad adquiere una calculadora, otra
de que Contabilidad compra a Distribuciones Garcia, S.L., y otra de que
Distribuciones Garcia, S.L. suministra calculadoras.

Pero esto no tiene por qué querer decir que la calculadora comprada por
Contabilidad, la haya comprado a Distribuciones Garcia, S.L. Puede haberla
comprado a otro proveedor, y lo que le compra a Garcia son bolígrafos
(aunque Garcia también pueda vender calculadoras).

En cambio en una relación ternaria se dice quién compra, qué compra y a quién compra.
Por tanto una relación ternaria proporciona más información que 3 binarias.



![](relacio_tern2.png)



La cardinalidad se calcula fijando 2 y viendo cuántas ocurrencias entran en
la tercera. Así, un determinado departamento puede comprar un determinado artículo
a más de un proveedor (N). Un artículo de un proveedor lo puede comprar más de un
departamento (N). Y un departamento puede comprar a un proveedor más de un artículo.
No tiene porqué ser siempre N:N:N (en este caso de las ternarias no utilizaremos
ya la M, solo la N). Por ejemplo supongamos que un departamento siempre compra un
artículo al mismo proveedor; entonces en Proveedor tendríamos 1.



![](relacio_tern3.png)





Algunas herramientas de diseño de B.D. solo permiten relaciones binarias.
Entonces se tendría que hacer un truco para representar la relación ternaria,
construyendo una entidad nueva, débil, que dependa en identificación de las otras
3. Veremos las entidades débiles en el siguiente punto.





![](T2_5_4.PNG)




Licenciado bajo la [Licencia Creative Commons Reconocimiento NoComercial
CompartirIgual 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
