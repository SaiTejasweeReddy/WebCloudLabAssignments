/**
 * Created by sai krishna reddy on 7/29/2017.
 */

$(document).ready(function () {
    var bubbleChart = new d3.svg.BubbleChart({
        supportResponsive: true,
        size: 600,
        innerRadius: 600 / 3.5,
        radiusMin: 40,
        data: {
            items: [
                {text: "TeenChoice", count: "1"},
                {text: "MTVHottest", count: "2"},
                {text: "giveaway", count: "3"},
                {text: "EXO", count: "4"},
                {text: "NowPlaying", count: "5"},
                {text: "win", count: "6"},
                {text: "LoveIsland", count: "7"},
                {text: "job", count: "8"},
                {text: "KoKoBop", count: "9"},
                {text: "TreCru", count: "10"},

            ],
            eval: function (item) {return item.count;},
            classed: function (item) {return item.text.split(" ").join("");}
        },
        plugins: [
            {
                name: "central-click",
                options: {
                    style: {
                        "font-size": "12px",
                        "font-style": "italic",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        "fill": "white"
                    },
                    attr: {dy: "65px"},
                    centralClick: function() {
                        alert("Here is more details!!");
                    }
                }
            },
            {
                name: "lines",
                options: {
                    format: [
                        {
                            textField: "count",
                            classed: {count: true},
                            style: {
                                "font-size": "28px",
                                "font-family": "Source Sans Pro, sans-serif",
                                "text-anchor": "middle",
                                fill: "white"
                            },
                            attr: {
                                dy: "0px",
                                x: function (d) {return d.cx;},
                                y: function (d) {return d.cy;}
                            }
                        },
                        {
                            textField: "text",
                            classed: {text: true},
                            style: {
                                "font-size": "14px",
                                "font-family": "Source Sans Pro, sans-serif",
                                "text-anchor": "middle",
                                fill: "white"
                            },
                            attr: {
                                dy: "20px",
                                x: function (d) {return d.cx;},
                                y: function (d) {return d.cy;}
                            }
                        }
                    ],
                    centralFormat: [
                        {
                            style: {"font-size": "50px"},
                            attr: {}
                        },
                        {
                            style: {"font-size": "30px"},
                            attr: {dy: "40px"}
                        }
                    ]
                }
            }]
    });
});