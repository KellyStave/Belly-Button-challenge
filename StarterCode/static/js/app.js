//Use the D3 library to read in samples.json
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Promise pending  
const dataPromise = d3.json(url)
console.log("Data Promise", dataPromise);

//Fetch data and console log
d3.json(url).then(function(data) {
    console.log("Data", data);

  
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    let values = data.samples.map(row =>row.sample_values)
    let labels = data.samples.map(row => row.otu_ids)
    let hovertext = data.otu_labels
    console.log("Values", values)
    console.log("ids", labels)
   

    let trace1 = [{
        x: values,
        y: labels,
        type: "bar",
        orientation: "h"
    }];
    
    let chart = [trace1];
    let layout = {
        title: "Top 10 OTU"
    };
    //Plotly.newPlot("bar", chart, layout);

    d3.selectAll("#selDataset").on("optionChanged(this.value)", updatePlotly);

    function updatePlotly() {
        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        let dataset = dropdownMenu.property("value");
      
}});


// Create a bubble chart that displays each sample.

var trace1 = {
    x: data.map(row => row.otu_ids),
    y: data.samples.map(row =>row.sample_values),
    mode: 'markers',
};
var data = [trace1];
var layout = {
    title: 'Bubble Chart'
};

plotly.newplot("bubble", data, layout);





