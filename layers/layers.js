var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.format.GeoJSON();
var features_shp_barrios_y_veredasbarrios_y_veredasshp_1 = format_shp_barrios_y_veredasbarrios_y_veredasshp_1.readFeatures(json_shp_barrios_y_veredasbarrios_y_veredasshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1.addFeatures(features_shp_barrios_y_veredasbarrios_y_veredasshp_1);
var lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1, 
                style: style_shp_barrios_y_veredasbarrios_y_veredasshp_1,
                popuplayertitle: 'shp_barrios_y_veredas — barrios_y_veredas.shp',
                interactive: true,
                title: '<img src="styles/legend/shp_barrios_y_veredasbarrios_y_veredasshp_1.png" /> shp_barrios_y_veredas — barrios_y_veredas.shp'
            });
var format_ANDENESSEGUIMIENTO5_08_25_2 = new ol.format.GeoJSON();
var features_ANDENESSEGUIMIENTO5_08_25_2 = format_ANDENESSEGUIMIENTO5_08_25_2.readFeatures(json_ANDENESSEGUIMIENTO5_08_25_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANDENESSEGUIMIENTO5_08_25_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANDENESSEGUIMIENTO5_08_25_2.addFeatures(features_ANDENESSEGUIMIENTO5_08_25_2);
var lyr_ANDENESSEGUIMIENTO5_08_25_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANDENESSEGUIMIENTO5_08_25_2, 
                style: style_ANDENESSEGUIMIENTO5_08_25_2,
                popuplayertitle: 'ANDENES SEGUIMIENTO 5_08_25',
                interactive: true,
                title: '<img src="styles/legend/ANDENESSEGUIMIENTO5_08_25_2.png" /> ANDENES SEGUIMIENTO 5_08_25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.setVisible(true);lyr_ANDENESSEGUIMIENTO5_08_25_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1,lyr_ANDENESSEGUIMIENTO5_08_25_2];
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'IDENTIFICA': 'IDENTIFICA', 'LIMITECOMU': 'LIMITECOMU', 'LIMITEMUNI': 'LIMITEMUNI', 'SUBTIPO_BA': 'SUBTIPO_BA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ANDENESSEGUIMIENTO5_08_25_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'codigo': 'codigo', 'orden_elem': 'orden_elem', 'id_segment': 'id_segment', 'ancho': 'ancho', 'altura': 'altura', 'longitud': 'longitud', 'estado': 'estado', 'homogeneo': 'homogeneo', 'homolgado': 'homolgado', 'obstaculo': 'obstaculo', 'material': 'material', 'id_element': 'id_element', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldImages', {'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'LIMITECOMU': 'TextEdit', 'LIMITEMUNI': 'TextEdit', 'SUBTIPO_BA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ANDENESSEGUIMIENTO5_08_25_2.set('fieldImages', {'fid': '', 'objectid': '', 'codigo': '', 'orden_elem': '', 'id_segment': '', 'ancho': '', 'altura': '', 'longitud': '', 'estado': '', 'homogeneo': '', 'homolgado': '', 'obstaculo': '', 'material': '', 'id_element': '', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldLabels', {'CODIGO': 'no label', 'NOMBRE': 'no label', 'IDENTIFICA': 'no label', 'LIMITECOMU': 'no label', 'LIMITEMUNI': 'no label', 'SUBTIPO_BA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ANDENESSEGUIMIENTO5_08_25_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'codigo': 'no label', 'orden_elem': 'no label', 'id_segment': 'no label', 'ancho': 'no label', 'altura': 'no label', 'longitud': 'no label', 'estado': 'no label', 'homogeneo': 'no label', 'homolgado': 'no label', 'obstaculo': 'no label', 'material': 'no label', 'id_element': 'no label', });
lyr_ANDENESSEGUIMIENTO5_08_25_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});