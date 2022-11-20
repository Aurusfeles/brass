export default {
    towns: {
        barrow_in_furness: [{ type: "shipyard" }, { type: "ironworks" }],
        lancaster: [{ type: "port" }, { type: "cotton_mill_or_port" }],
        fleetwood: [{ type: "port" }],
        colne: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
        preston: [{ type: "port" }, { type: "cotton_mill_or_port" }, { type: "ironworks" }],
        blackburn: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
        burnley: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
        rochdale: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
        bury: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
        bolton: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
        wigan: [{ type: "coal_mine" }, { type: "coal_mine" }],
        liverpool: [{ type: "port" }, { type: "port" }, { type: "shipyard" }, { type: "port" }],
        oldham: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }],
        birkenhead: [{ type: "shipyard" }],
        warrington_runcorn: [{ type: "cotton_mill_or_coal_mine" }, { type: "port" }],
        manchester: [{ type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "cotton_mill_or_coal_mine" }, { type: "ironworks" }],
        ellesmere_port: [{ type: "port" }],
        stockport: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
        macclesfield: [{ type: "cotton_mill" }, { type: "cotton_mill" }],
        yorkshire: [{ type: "external_port" }],
        the_midlands: [{ type: "external_port" }],
        blackpool: [{ type: "external" }],
        scotland: [{ type: "external_port" }],
        southport: [{ type: "external" }],
        northwich: [{ type: "external" }],
    },
    canals: [
        ["lancaster", "preston"],
        ["preston", "fleetwood"],
        ["preston", "wigan"],
        ["liverpool", "wigan"],
        ["warrington_runcorn", "wigan"],
        ["blackburn", "wigan"],
        ["blackburn", "burnley"],
        ["burnley", "colne"],
        ["colne", "yorkshire"],
        ["rochdale", "yorkshire"],
        ["rochdale", "yorkshire"],
        ["rochdale", "oldham"],
        ["oldham", "manchester"],
        ["manchester", "bury"],
        ["manchester", "bolton"],
        ["bolton", "bury"],
        ["manchester", "warrington_runcorn"],
        ["manchester", "stockport"],
        ["stockport", "macclesfield"],
        ["macclesfield", "the_midlands"],
        ["the_midlands", "northwitch"],
        ["ellesmere_port", "northwitch"],
        ["liverpool", "ellesmere_port"]
        ["warrington_runcorn", "ellesmere_port"]


    ]



}