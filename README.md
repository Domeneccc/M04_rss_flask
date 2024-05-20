# Projecte de RSS M04
## Proyecto con Flask, Jinja, RSS y Feedparser
![image](https://github.com/Domeneccc/FlaskM04/assets/165904493/cf810448-58e5-4973-b5b1-257964963fb6)

## Index
* Pasos antes de comenzar el projeto
    - Creación del Ambiente Virtual con venv
    - Instalacion del flask y feedparser
* Flask
* Feedparser
* RSS
* Iteraciones
  - Iteracion 1


# Pasos antes de comenzar el projeto
## Creación del Ambiente Virtual con venv
```
# Instalacion de ambiente virtual
python -m venv .venv
# Activacio del ambiente virtual
.venv\Scripts\activate
# Desacitivar el ambiente
desactivate
```
[Venv](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-environment-manager)

## Instalacion del flask y feedparser
```
# Instalacion de flask
pip install flask
# Instalacion de feedparser
pip install feedparser
```

# Flask y Jinja

Flask es un framework web ligero y flexible para Python que facilita la construcción de aplicaciones web. Se basa en el principio de **WSGI**  y Jinja2 para el renderizado de plantillas **HTML**. Flask proporciona herramientas para el enrutamiento de **URLs**, gestión de sesiones, manejo de peticiones **HTTP** y más, permitiendo a los desarrolladores crear aplicaciones web de manera rápida y sencilla.

[Flask](https://flask.palletsprojects.com/en/3.0.x/)
[Jinja](https://jinja.palletsprojects.com/en/3.1.x/)

# Feedparser

Feedparser es una biblioteca de Python que facilita el análisis de feeds **RSS**. Permite a los desarrolladores extraer y procesar contenido estructurado de fuentes de noticias, blogs y otros sitios web que proporcionan feeds RSS. Con Feedparser, podemos acceder a información como títulos, descripciones, enlaces y fechas de publicación de las entradas en un feed, lo que resulta útil para integrar contenido dinámico a *aplicaciones web*.

[Feedparser](https://feedparser.readthedocs.io/en/latest/)



# RSS

Un RSS **(Really Simple Syndication)** es un formato de datos que se utiliza para distribuir contenido actualizado de manera periódica. Es comúnmente utilizado por sitios web que publican contenido regularmente, como noticias, blogs, podcasts, etc. El propósito principal de un feed RSS es permitir a los usuarios suscribirse a contenido actualizado de su interés y recibir notificaciones automáticas cuando se publique nuevo contenido.

I en este proyecto el **RSS** que utilizaremos sera el de la Vanguardia par incluir sus titulares y resúmenes de las últimas noticias publicadas en diferentes secciones, como política, deportes, cultura, etc.

[RSS](https://www.lavanguardia.com/rss)

# Explicaion de  RSS remoto y local

## Local
Para hacerlo de forma local hay que ir a el RSS de la Vanguardia y copiar el xml a mano y despues guardalo en rss/vanguardia y poner el nombre que le rescomponga a cada xml y lo que pasa es que no se acutaliza es estatico.

## Remoto
Para hacerlo de forma remota hay que ir a el RSS de la Vanguardia y copiar la url y ponerlo de una forma esecifica 

```
https://www.lavanguardia.com/rss/{seccio}.xml

```


# Iteraciones

## Iteracion 1

Para comenzar la iterancon 1 lo que he hecho ha sido descargar el codigo esqueleto del proyecto despues de hacer toda la instalacion esplicada anteriormente explicada. Primero lo que hice fue crear los dos nuevas sesiones simples y yo he añadidos sucesos y tecnologia.

Despues he añadido el logo del la vanguardia en el documento la vanguardia.html

Finalmente lo que he hecho ha sido meter la siguiente estructura 
```
Descripcion:
Fecha de publicacion:
Ultima actualizacion:
Autor:
Categoria:
```
