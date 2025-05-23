var wms_layers = [];

var format_shp_barrios_y_veredasbarrios_y_veredasshp_0 = new ol.format.GeoJSON();
var features_shp_barrios_y_veredasbarrios_y_veredasshp_0 = format_shp_barrios_y_veredasbarrios_y_veredasshp_0.readFeatures(json_shp_barrios_y_veredasbarrios_y_veredasshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_0.addFeatures(features_shp_barrios_y_veredasbarrios_y_veredasshp_0);
var lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_0, 
                style: style_shp_barrios_y_veredasbarrios_y_veredasshp_0,
                popuplayertitle: 'shp_barrios_y_veredas — barrios_y_veredas.shp',
                interactive: true,
                title: '<img src="styles/legend/shp_barrios_y_veredasbarrios_y_veredasshp_0.png" /> shp_barrios_y_veredas — barrios_y_veredas.shp'
            });
var format_COMUNA16ESTADO22_05_25_1 = new ol.format.GeoJSON();
var features_COMUNA16ESTADO22_05_25_1 = format_COMUNA16ESTADO22_05_25_1.readFeatures(json_COMUNA16ESTADO22_05_25_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNA16ESTADO22_05_25_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNA16ESTADO22_05_25_1.addFeatures(features_COMUNA16ESTADO22_05_25_1);
var lyr_COMUNA16ESTADO22_05_25_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNA16ESTADO22_05_25_1, 
                style: style_COMUNA16ESTADO22_05_25_1,
                popuplayertitle: 'COMUNA 16 ESTADO 22_05_25',
                interactive: true,
                title: '<img src="styles/legend/COMUNA16ESTADO22_05_25_1.png" /> COMUNA 16 ESTADO 22_05_25'
            });

lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0.setVisible(true);lyr_COMUNA16ESTADO22_05_25_1.setVisible(true);
var layersList = [lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0,lyr_COMUNA16ESTADO22_05_25_1];
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0.set('fieldAliases', {'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'IDENTIFICA': 'IDENTIFICA', 'LIMITECOMU': 'LIMITECOMU', 'LIMITEMUNI': 'LIMITEMUNI', 'SUBTIPO_BA': 'SUBTIPO_BA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_COMUNA16ESTADO22_05_25_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'codigo': 'codigo', 'orden_elem': 'orden_elem', 'id_segment': 'id_segment', 'ancho': 'ancho', 'altura': 'altura', 'longitud': 'longitud', 'estado': 'estado', 'homogeneo': 'homogeneo', 'homolgado': 'homolgado', 'obstaculo': 'obstaculo', 'material': 'material', 'id_element': 'id_element', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0.set('fieldImages', {'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'LIMITECOMU': 'TextEdit', 'LIMITEMUNI': 'TextEdit', 'SUBTIPO_BA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_COMUNA16ESTADO22_05_25_1.set('fieldImages', {'fid': '', 'objectid': '', 'codigo': '', 'orden_elem': '', 'id_segment': '', 'ancho': '', 'altura': '', 'longitud': '', 'estado': '', 'homogeneo': '', 'homolgado': '', 'obstaculo': '', 'material': '', 'id_element': '', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_0.set('fieldLabels', {'CODIGO': 'no label', 'NOMBRE': 'no label', 'IDENTIFICA': 'no label', 'LIMITECOMU': 'no label', 'LIMITEMUNI': 'no label', 'SUBTIPO_BA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_COMUNA16ESTADO22_05_25_1.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'codigo': 'inline label - always visible', 'orden_elem': 'no label', 'id_segment': 'no label', 'ancho': 'no label', 'altura': 'no label', 'longitud': 'no label', 'estado': 'no label', 'homogeneo': 'no label', 'homolgado': 'no label', 'obstaculo': 'no label', 'material': 'no label', 'id_element': 'no label', });
lyr_COMUNA16ESTADO22_05_25_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});