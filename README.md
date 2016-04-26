# Step by step

- *Optional: download files*
	- *e.g. from http://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2015_rgb@senstadt&type=FEED*
	- *unzip them*

- Merge them in to a single overview file `gdalbuildvrt -addalpha -hidenodata mosaic.vrt ecw/*.ecw`

- *Optional: preview in QGis*

- Split them in to tiles: `gdal2tiles.py -p mercator --resume -z '0-18' -s 'EPSG:25833' -w none mosaic.vrt tiles`

Unfortunately gdal2tiles.py generates png tiles in the wrong order (y axis upside down). So `convert.js` uses GraphicsMagick to improve colors, flatten them on a background color and reorder the y axis.

- Convert the tiles to web save jpegs: `node convert.js tiles/ tiles_jpeg/`
