# Schritt für Schritt

- *Optional: Dateien runterladen*
	- *z.B.:*
	   - *http://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2015_rgb@senstadt&type=FEED*
	   - *http://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild1928@senstadt&type=FEED*
	- *In ein Verzeichnis unzippen. Neben den ECW-Dateien sollten EWW-Dateien liegen, die die Projektion spezifizieren.*

- ECW/EWW-Dateien in einem VRT-Index sammeln:
`
gdalbuildvrt -addalpha -hidenodata mosaic.vrt ecw/*.ecw`

- *Optional kann man die `mosaic.vrt` schon in QGIS anschauen*

- Mosaic in Tiles zerlegen:  
`gdal2tiles.py -p mercator --resume -z '0-18' -s 'EPSG:25833' -w none mosaic.vrt tiles`

   *Unglücklicher Weise generiert gdal2tiles.py PNG-Kacheln in der falschen Nummerierung (y-Achse gespiegelt). Also die Kacheln sind nicht von oben nach unten, sondern von unten nach oben durchnummeriert. Daher habe ich ein kleines `convert.js`-Script in node.js gebaut, das mit GraphicsMagick die Farben verbessert, Transparenz durch eine Hintergrundfarbe ersetzt, und die vertikale Nummerierung korrigiert.*

- Konvertiere PNG-Kacheln in weboptimierte JPEG-Kacheln:  
`node convert.js tiles/ tiles_jpeg/`


# Fertige Kacheln für alle \o/

Wir haben mal einige Karten-Tiles bis Zoomstufe 18 vorbereitet.  
Bitte auf die jeweiligen Nutzungsbedingungen achten! Wir haben deswegen jeweils noch mal die Quelle verlinkt!

**Berlin 1928**

- Quelle: [fbinter.stadt-berlin.de/...luftbild1928](http://fbinter.stadt-berlin.de/fb/index.jsp?loginkey=showShortInfo&mapId=k_luftbild1928@senstadt&szenario=fbinter_jsc)
- Torrent: [berlin_dop20_1928.tar.gz.torrent](https://data.dsst.io/tiles/berlin_dop20_1928.tar.gz.torrent)
- Magnet-URI: <magnet:?xt=urn:btih:77c24c48267fe4ccaa34b70f46a3adc628220a68&dn=berlin%5Fdop20%5F1928.tar.gz&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&ws=https%3A%2F%2Fdata.dsst.io%2Ftiles%2Fberlin%5Fdop20%5F1928.tar.gz>

**Berlin 2014**

- Quelle: [fbinter.stadt-berlin.de/...luftbild2014](http://fbinter.stadt-berlin.de/fb/index.jsp?loginkey=showShortInfo&mapId=k_luftbild2014@senstadt&szenario=fbinter_jsc)
- Torrent: [berlin_dop20_2014.zip.torrent](https://data.dsst.io/tiles/berlin_dop20_2014.zip.torrent)
- Magnet-URI: <magnet:?xt=urn:btih:c4b2c57b8229134773d46a353b81d4c4c00760b8&dn=berlin%5Fdop20%5F2014.zip&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&ws=https%3A%2F%2Fdata.dsst.io%2Ftiles%2Fberlin%5Fdop20%5F2014.zip>

**Berlin 2015**

- Quelle: [fbinter.stadt-berlin.de/...luftbild2015_rgb](http://fbinter.stadt-berlin.de/fb/index.jsp?loginkey=showShortInfo&mapId=k_luftbild2015_rgb@senstadt&szenario=fbinter_jsc)
- Torrent: [berlin_dop20_2015.tar.gz.torrent](https://data.dsst.io/tiles/berlin_dop20_2015.tar.gz.torrent)
- Magnet-URI: <magnet:?xt=urn:btih:1893ad03f0b2588e48dbd55857fe516117315f44&dn=berlin%5Fdop20%5F2015.tar.gz&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&ws=https%3A%2F%2Fdata.dsst.io%2Ftiles%2Fberlin%5Fdop20%5F2015.tar.gz>

**Hamburg 2015**

- Quelle: [govdata.de/...orthophotos-20cm-hamburg](https://www.govdata.de/daten/-/details/digitale-orthophotos-20cm-hamburg)
- Torrent: [hamburg_dop20_2015.zip.torrent](https://data.dsst.io/tiles/hamburg_dop20_2015.zip.torrent)
- Magnet-URI: <magnet:?xt=urn:btih:a123761684cdb8bcb550cc0010420f8facc12372&dn=hamburg%5Fdop20%5F2015.zip&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&ws=https%3A%2F%2Fdata.dsst.io%2Ftiles%2Fhamburg%5Fdop20%5F2015.zip>

