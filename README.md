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
  - Iteracion 2


# Pasos antes de comenzar el projeto
## Creación del Ambiente Virtual con venv
```
# Instalacion de ambiente virtual
#windows
    python -m venv .venv
#linux
    python3 -m venv .venv
# Activacio del ambiente virtual
# Windows
    .venv\Scripts\activate
# Linux
	source .venv/bin/activate
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
Para hacerlo de forma local hay que ir a el RSS de la Vanguardia y copiar el xml a mano y despues guardalo en rss/vanguardia y poner el nombre que le comresponga a cada xml y lo que pasa es que no se acutaliza es estatico.
```
	### MODE LOCAL: versió que fa servir l'XML descarregat
		xml = f"./rss/lavanguardia/{seccio}.xml"
```
## Remoto
Para hacerlo de forma remota hay que ir a el RSS de la Vanguardia y copiar la url y ponerlo de una forma especifica
```
	### MODE REMOT: versió on descarrega l'XML de la web
    		xml = f"https://www.lavanguardia.com/rss/{seccio}.xml"
```



# Iteraciones

## Iteracion 1

Para comenzar la iterancon 1 lo que he hecho ha sido descargar el codigo esqueleto del proyecto despues de hacer toda la instalacion esplicada anteriormente. Primero lo que hice fue crear los dos nuevas sesiones simples y yo he añadidos sucesos y tecnologia.

Despues he añadido el logo del la vanguardia en el documento la vanguardia.html con eñ siguiente codigo: 
```
 <img src="{{rss.feed.image.url}}" alt="{{rss.feed.image.description}}" class="img-fluid mb-4 "/>
```

Finalmente lo que he hecho ha sido meter la siguiente estructura en el fichero lavanguardia.html
```
Descripcion:
Fecha de publicacion:
Ultima actualizacion:
Autor:
Categoria:
```
## Iteracion 2

En la iteracion 2 en lo que se basaba era en meter boostrap , css y javascript. Para hacer la pagina mas bonita, lo que pedia era una barra de navegacion, un carrusel que yo he puesto uno por cada seccion y despues en las noticias hacer 4 columnas o menos dependiendo de lo grande que sea la pantalla. Lo primero lo que hice fue el cambio del color de fondo que lo puse azul y una barra de navegacion, despues puse  
un carrusel por cada seccion y finalmente hice que las noticias se organizaran en 4 columas dependiendo del tamaño. A continuacion pondre ejemplos de codigo de cada parte.

### Barra de navegacion:

```
 <nav class="navbar navbar-expand-lg  barra-navegacion">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/lavanguardia/deportes"></i>Deportes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/lavanguardia/politica">Política</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/lavanguardia/vida">Vida</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/lavanguardia/sucesos">Sucesos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/lavanguardia/tecnologia">Tecnología</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
```

### Carrusel:

```
<div id="carousel1" class="carousel slide mb-4" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="/lavanguardia/deportes"><img src="../static/img/Deportes/futbol.jpeg"></a>
                </div>
                <div class="carousel-item">
                    <a href="/lavanguardia/deportes"><img src="../static/img/Deportes/formula1.jpeg"></a>
                </div>
                <div class="carousel-item">
                    <a href="/lavanguardia/deportes"><img src="../static/img/Deportes/bici.jpeg" ></a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
```

### Cartas y columnas:

```
div class="container">
        <div class="row">
            {% for item in rss.entries %}
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="{{item.link}}">{{item.title}}</a>
                        </h5>
                        {% for media in item.media_content %}
                            <p><img src="{{media.url}}" alt="{{item.title}}" class="img-fluid"/></p>
                        {% endfor %}
                        <p class="card-text">Descripcio: {{item.description}}</p>
                        <p class="card-text">Data Publicacio: {{item.published}}</p>
                        <p class="card-text">Categoria: {{item.category}}</p>
                        <p class="card-text">Autor: {{item.author}}</p>
                        <p class="card-text">Ultima actualitzacio: {{item.modified}}</p>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
```
