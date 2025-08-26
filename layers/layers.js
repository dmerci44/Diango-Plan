var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_diangopoly_1 = new ol.format.GeoJSON();
var features_diangopoly_1 = format_diangopoly_1.readFeatures(json_diangopoly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diangopoly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diangopoly_1.addFeatures(features_diangopoly_1);
var lyr_diangopoly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diangopoly_1, 
                style: style_diangopoly_1,
                popuplayertitle: 'diango poly',
                interactive: true,
                title: '<img src="styles/legend/diangopoly_1.png" /> diango poly'
            });
var format_confli_2 = new ol.format.GeoJSON();
var features_confli_2 = format_confli_2.readFeatures(json_confli_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confli_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confli_2.addFeatures(features_confli_2);
var lyr_confli_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_confli_2, 
                style: style_confli_2,
                popuplayertitle: 'confli',
                interactive: true,
                title: '<img src="styles/legend/confli_2.png" /> confli'
            });
var format_RUISDIA_3 = new ol.format.GeoJSON();
var features_RUISDIA_3 = format_RUISDIA_3.readFeatures(json_RUISDIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISDIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISDIA_3.addFeatures(features_RUISDIA_3);
var lyr_RUISDIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISDIA_3, 
                style: style_RUISDIA_3,
                popuplayertitle: 'RUIS DIA',
                interactive: true,
                title: '<img src="styles/legend/RUISDIA_3.png" /> RUIS DIA'
            });
var format_numdiango_4 = new ol.format.GeoJSON();
var features_numdiango_4 = format_numdiango_4.readFeatures(json_numdiango_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numdiango_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numdiango_4.addFeatures(features_numdiango_4);
var lyr_numdiango_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numdiango_4, 
                style: style_numdiango_4,
                popuplayertitle: 'num diango.',
                interactive: false,
                title: '<img src="styles/legend/numdiango_4.png" /> num diango.'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_diangopoly_1.setVisible(true);lyr_confli_2.setVisible(true);lyr_RUISDIA_3.setVisible(true);lyr_numdiango_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_diangopoly_1,lyr_confli_2,lyr_RUISDIA_3,lyr_numdiango_4];
lyr_diangopoly_1.set('fieldAliases', {'di': 'di', });
lyr_confli_2.set('fieldAliases', {'conf': 'conf', });
lyr_RUISDIA_3.set('fieldAliases', {'F': 'F', });
lyr_numdiango_4.set('fieldAliases', {'NN': 'NN', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_diangopoly_1.set('fieldImages', {'di': '', });
lyr_confli_2.set('fieldImages', {'conf': '', });
lyr_RUISDIA_3.set('fieldImages', {'F': '', });
lyr_numdiango_4.set('fieldImages', {'NN': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_diangopoly_1.set('fieldLabels', {'di': 'inline label - always visible', });
lyr_confli_2.set('fieldLabels', {'conf': 'no label', });
lyr_RUISDIA_3.set('fieldLabels', {'F': 'inline label - always visible', });
lyr_numdiango_4.set('fieldLabels', {'NN': 'inline label - visible with data', });
lyr_numdiango_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});