export default {
    coal_demand_spot: 4,
    steel_demand_spot: 6,
    cotton_market_spot: 3,
    player_order: [2, 0, 1, 3],
    era: "canals",
    deck: ["port", "rochdale", "preston", "cotton_mill", "cotton_mill", "shipyard", "colne", "manchester", "port", "port", "coal_mine", "lancaster", "fleetwood", "cotton_mill"],
    played_cards: ["bury", "oldham", "ironworks", "blackburn"],
    map: {
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
                places: [{
                    type: "cotton_mill_or_coal_mine", tile: {
                        type: "cotton_mill",
                        player: 0,
                        level: 1,
                        cost: 12,
                        income: 5,
                        vp: 5,
                    }
                }, { type: "cotton_mill_or_coal_mine" }],
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
                places: [{
                    type: "coal_mine", tile: {
                        type: "coal_mine",
                        player: 1,
                        level: 1,
                        coal_cubes: 2,
                        cost: 5,
                        income: 4,
                        vp: 1,
                        production: 2,

                    }
                }, { type: "coal_mine" }],
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
                places: [{
                    type: "cotton_mill_or_coal_mine", tile: {
                        type: "coal_mine",
                        player: 1,
                        level: 1,
                        flipped: true,
                        cost: 5,
                        income: 4,
                        vp: 1,
                        production: 2,
                    }
                }, { type: "port" }],
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
            { link: ["warrington_runcorn", "wigan"], player: 1 },
            { link: ["blackburn", "wigan"], player: 0 },
            { link: ["blackburn", "burnley"], player: 0 },
            { link: ["burnley", "colne"], player: 0 },
            { link: ["colne", "yorkshire"], player: 0 },
            { link: ["rochdale", "yorkshire"] },
            { link: ["rochdale", "yorkshire"] },
            { link: ["rochdale", "oldham"] },
            { link: ["oldham", "manchester"] },
            { link: ["manchester", "bury"] },
            { link: ["manchester", "bolton"] },
            { link: ["bolton", "bury"] },
            { link: ["manchester", "warrington_runcorn"], player: 1 },
            { link: ["manchester", "stockport"] },
            { link: ["stockport", "macclesfield"] },
            { link: ["macclesfield", "the_midlands"] },
            { link: ["the_midlands", "northwich"] },
            { link: ["ellesmere_port", "northwich"] },
            { link: ["liverpool", "ellesmere_port"] },
            { link: ["warrington_runcorn", "ellesmere_port"] }


        ]
    },
    players: [
        {
            name: "Aurus",
            color: "#FF5733",
            money: 24,
            points: 10,
            income_spot: 6,
            cards: [
                "cotton_mill", "port", "manchester", "burnley", "port", "ironworks", "coal_mine", "fleetwood"
            ],
            tiles: {
                canals: 6,
                rails: 10,
                cotton_mills: [
                    {
                        level: 2,
                        cost: 14,
                        needs_coal: 1,
                        income: 4,
                        vp: 5,
                    },
                    {
                        level: 2,
                        cost: 14,
                        needs_coal: 1,
                        income: 4,
                        vp: 5,
                    },
                    {
                        level: 2,
                        cost: 14,
                        needs_coal: 1,
                        income: 4,
                        vp: 5,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },

                ],
                shipyards: [
                    {
                        level: 0,
                        cost: 9999,
                        income: 0,
                        vp: 0,
                    },
                    {
                        level: 0,
                        cost: 9999,
                        income: 0,
                        vp: 0,
                    },
                    {
                        level: 1,
                        cost: 16,
                        income: 2,
                        vp: 10,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 1,
                        cost: 16,
                        income: 2,
                        vp: 10,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 2,
                        cost: 25,
                        income: 1,
                        vp: 18,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 2,
                        cost: 25,
                        income: 1,
                        vp: 18,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                ],
                coal_mines: [
                    {
                        level: 2,
                        cost: 7,
                        income: 7,
                        vp: 2,
                        production: 3,
                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 6,
                        vp: 3,
                        production: 4,
                        needs_steel: 1,

                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 6,
                        vp: 3,
                        production: 4,
                        needs_steel: 1,

                    },
                    {
                        level: 4,
                        cost: 10,
                        income: 5,
                        vp: 45,
                        production: 5,
                        needs_steel: 1,

                    },
                    {
                        level: 4,
                        cost: 10,
                        income: 5,
                        vp: 45,
                        production: 5,
                        needs_steel: 1,

                    },
                ],
                ports: [
                    {
                        level: 2,
                        cost: 7,
                        income: 3,
                        vp: 4,
                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 4,
                        vp: 6,

                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 4,
                        vp: 6,

                    },
                    {
                        level: 4,
                        cost: 9,
                        income: 4,
                        vp: 9,

                    },
                    {
                        level: 4,
                        cost: 9,
                        income: 4,
                        vp: 9,

                    },
                ],
                ironworks: [{
                    level: 1,
                    cost: 5,
                    needs_coal: 1,
                    income: 3,
                    vp: 3,
                    production: 4,

                }, {
                    level: 2,
                    cost: 7,
                    needs_coal: 1,
                    income: 3,
                    vp: 5,
                    production: 4,

                },
                {
                    level: 3,
                    cost: 9,
                    needs_coal: 1,
                    income: 2,
                    vp: 7,
                    production: 5,

                }, {
                    level: 4,
                    cost: 12,
                    needs_coal: 1,
                    income: 1,
                    vp: 9,
                    production: 6,
                },],
            }
        },

        {
            name: "Bob",
            color: "#5733FF",
            money: 7,
            points: 10,
            income_spot: 10,
            cards: [
                "lancaster", "manchester", "liverpool", "port", "ironworks", "port", "rochdale"
            ],
            tiles: {
                canals: 7,
                rails: 10,
                cotton_mills: [
                    {
                        level: 2,
                        cost: 14,
                        needs_coal: 1,
                        income: 4,
                        vp: 5,
                    },
                    {
                        level: 2,
                        cost: 14,
                        needs_coal: 1,
                        income: 4,
                        vp: 5,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 3,
                        cost: 16,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 3,
                        vp: 9,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },
                    {
                        level: 4,
                        cost: 18,
                        needs_coal: 1,
                        needs_steel: 1,
                        income: 2,
                        vp: 12,
                    },

                ],
                shipyards: [
                    {
                        level: 1,
                        cost: 16,
                        income: 2,
                        vp: 10,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 1,
                        cost: 16,
                        income: 2,
                        vp: 10,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 2,
                        cost: 25,
                        income: 1,
                        vp: 18,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                    {
                        level: 2,
                        cost: 25,
                        income: 1,
                        vp: 18,
                        needs_steel: 1,
                        needs_coal: 1,
                    },
                ],
                coal_mines: [
                    {
                        level: 2,
                        cost: 7,
                        income: 7,
                        vp: 2,
                        production: 3,
                    },
                    {
                        level: 2,
                        cost: 7,
                        income: 7,
                        vp: 2,
                        production: 3,
                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 6,
                        vp: 3,
                        production: 4,
                        needs_steel: 1,

                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 6,
                        vp: 3,
                        production: 4,
                        needs_steel: 1,

                    },
                    {
                        level: 4,
                        cost: 10,
                        income: 5,
                        vp: 45,
                        production: 5,
                        needs_steel: 1,

                    },
                    {
                        level: 4,
                        cost: 10,
                        income: 5,
                        vp: 45,
                        production: 5,
                        needs_steel: 1,

                    },
                ],
                ports: [
                    {
                        level: 2,
                        cost: 7,
                        income: 3,
                        vp: 4,
                    },
                    {
                        level: 2,
                        cost: 7,
                        income: 3,
                        vp: 4,
                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 4,
                        vp: 6,

                    },
                    {
                        level: 3,
                        cost: 8,
                        income: 4,
                        vp: 6,

                    },
                    {
                        level: 4,
                        cost: 9,
                        income: 4,
                        vp: 9,

                    },
                    {
                        level: 4,
                        cost: 9,
                        income: 4,
                        vp: 9,

                    },
                ],
                ironworks: [{
                    level: 2,
                    cost: 7,
                    needs_coal: 1,
                    income: 3,
                    vp: 5,
                    production: 4,

                },
                {
                    level: 3,
                    cost: 9,
                    needs_coal: 1,
                    income: 2,
                    vp: 7,
                    production: 5,

                }, {
                    level: 4,
                    cost: 12,
                    needs_coal: 1,
                    income: 1,
                    vp: 9,
                    production: 6,
                },],
            }
        }
    ]
};
