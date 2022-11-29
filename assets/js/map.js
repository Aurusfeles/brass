export default {
    towns: {
        barrow_in_furness: {
            name: "Barrow-in-Furness",
            places: [{ type: "shipyard" }, { type: "ironworks" }],
            position: {
                x: 100,
                y: 0
            }
        },
        lancaster: {
            name: "Lancaster",
            places: [{ type: "port" }, { type: "cotton_mill_or_port" }],
            position: {
                x: 300,
                y: 0
            }
        },
        fleetwood: {
            name: "Fleetwood",
            places: [{ type: "port" }],
            position: {
                x: 0,
                y: 75
            }
        },
        colne: {
            name: "Colne",
            places: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
            position: {
                x: 600,
                y: 150
            }
        },
        preston: {
            name: "Preston",
            places: [{ type: "port" }, { type: "cotton_mill_or_port" }, { type: "ironworks" }],
            position: {
                x: 150,
                y: 150
            }
        },
        blackburn: {
            name: "Blackburn",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
            position: {
                x: 300,
                y: 150
            }
        },
        burnley: {
            name: "Burnley",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
            position: {
                x: 450,
                y: 150
            }
        },
        rochdale: {
            name: "Rochdale",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
            position: {
                x: 600,
                y: 300
            }
        },
        bury: {
            name: "Bury",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
            position: {
                x: 450,
                y: 300
            }
        },
        bolton: {
            name: "Bolton",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
            position: {
                x: 300,
                y: 300
            }
        },
        wigan: {
            name: "Wigan",
            places: [{ type: "coal_mine" }, { type: "coal_mine" }],
            position: {
                x: 150,
                y: 300
            }
        },
        liverpool: {
            name: "Liverpool",
            places: [{ type: "port" }, { type: "port" }, { type: "shipyard" }, { type: "port" }],
            position: {
                x: 0,
                y: 375
            }
        },
        oldham: {
            name: "Oldham",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
            position: {
                x: 600,
                y: 450
            }
        },
        birkenhead: {
            name: "Birkenhead",
            places: [{ type: "shipyard" }],
            position: {
                x: 0,
                y: 600
            }
        },
        warrington_runcorn: {
            name: "Warrington & Runcorn",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "port" }],
            position: {
                x: 150,
                y: 450
            }
        },
        manchester: {
            name: "Manchester",
            places: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
            position: {
                x: 375,
                y: 450
            }
        },
        ellesmere_port: {
            name: "Ellesmere Port",
            places: [{ type: "port" }],
            position: {
                x: 150,
                y: 600
            }
        },
        stockport: {
            name: "Stockport",
            places: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
            position: {
                x: 500,
                y: 600
            }
        },
        macclesfield: {
            name: "Macclesfield",
            places: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
            position: {
                x: 500,
                y: 750
            }
        },
        yorkshire: {
            name: "Yorkshire",
            type: "external_port",
            position: {
                x: 750,
                y: 300
            }
        },
        the_midlands: {
            name: "The Midlands",
            type: "external_port",
            position: {
                x: 300,
                y: 800
            }
        },
        blackpool: {
            name: "Blackpool",
            type: "external",
            position: {
                x: 0,
                y: 200
            }
        },
        scotland: {
            name: "Scotland",
            type: "external_port",
            position: {
                x: 450,
                y: 0
            }
        },
        southport: {
            name: "Southport",
            type: "external",
            position: {
                x: 0,
                y: 300
            }
        },
        northwich: {
            name: "Northwich",
            type: "external",
            position: {
                x: 150,
                y: 750
            }
        },
    },
    canals: [
        { link: ["lancaster", "preston"] },
        { link: ["preston", "fleetwood"] },
        { link: ["preston", "wigan"] },
        { link: ["liverpool", "wigan"] },
        { link: ["warrington_runcorn", "wigan"] },
        { link: ["blackburn", "wigan"] },
        { link: ["blackburn", "burnley"] },
        { link: ["burnley", "colne"] },
        { link: ["colne", "yorkshire"] },
        { link: ["rochdale", "yorkshire"] },
        { link: ["rochdale", "yorkshire"] },
        { link: ["rochdale", "oldham"] },
        { link: ["oldham", "manchester"] },
        { link: ["manchester", "bury"] },
        { link: ["manchester", "bolton"] },
        { link: ["bolton", "bury"] },
        { link: ["manchester", "warrington_runcorn"] },
        { link: ["manchester", "stockport"] },
        { link: ["stockport", "macclesfield"] },
        { link: ["macclesfield", "the_midlands"] },
        { link: ["the_midlands", "northwich"] },
        { link: ["ellesmere_port", "northwich"] },
        { link: ["liverpool", "ellesmere_port"] },
        { link: ["warrington_runcorn", "ellesmere_port"] }


    ]


}