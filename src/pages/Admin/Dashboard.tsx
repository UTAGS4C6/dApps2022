/**
 * @fileoverview Admin Dashboard view
 */

import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export const Dashboard: React.FC = () => {
  const data_source = {
    chart: {
      caption: "Viajes Mayo - Octubre",
      subCaption: "Viajes concluidos",
      xAxisName: "Viajes",
      yAxisName: "Mes",
      numberSuffix: "",
      theme: "fusion"
    },
    data: [
      {label: "Octubre", value: "100"},
      {label: "Septiembre", value: "94"},
      {label: "Agosto", value: "102"},
      {label: "Julio", value: "81"},
      {label: "Junio", value: "99"},
      {label: "Mayo", value: "106"},
    ]
  };
  const chart_config = {
    type: "column2d",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: data_source
  };
  return(
    <>
      <ReactFC {...chart_config} />
    </>
  );
};