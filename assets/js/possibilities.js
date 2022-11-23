let buildings = {
    shipyards: [
        {
            level: 0,
            cost: 9999,
            income: 0,
            vp: 0,
            quantity: 2,
        },
        {
            level: 1,
            cost: 16,
            income: 2,
            vp: 10,
            needs_steel: 1,
            needs_coal: 1,
            quantity: 2,
        },
        {
            level: 2,
            cost: 25,
            income: 1,
            vp: 18,
            needs_steel: 1,
            needs_coal: 1,
            quantity: 2,
        },
    ],
    coal_mines: [
        {
            level: 1,
            cost: 5,
            income: 4,
            vp: 1,
            production: 2,
            quantity: 1,
        },
        {
            level: 2,
            cost: 7,
            income: 7,
            vp: 2,
            production: 3,
            quantity: 2,
        },
        {
            level: 3,
            cost: 8,
            income: 6,
            vp: 3,
            production: 4,
            needs_steel: 1,
            quantity: 2,
        },
        {
            level: 4,
            cost: 10,
            income: 5,
            vp: 45,
            production: 5,
            needs_steel: 1,
            quantity: 2,
        },
    ],
    ports: [{
        level: 1,
        cost: 6,
        income: 3,
        vp: 2,
        quantity: 2,
    },
    {
        level: 2,
        cost: 7,
        income: 3,
        vp: 4,
        quantity: 2,
    },
    {
        level: 3,
        cost: 8,
        income: 4,
        vp: 6,
        quantity: 2,
    },
    {
        level: 4,
        cost: 9,
        income: 4,
        vp: 9,
        quantity: 2,
    },
    ],
    ironworks: [{
        level: 1,
        cost: 5,
        needs_coal: 1,
        income: 3,
        vp: 3,
        production: 4,
        quantity: 1,

    }, {
        level: 2,
        cost: 7,
        needs_coal: 1,
        income: 3,
        vp: 5,
        production: 4,
        quantity: 1

    },
    {
        level: 3,
        cost: 9,
        needs_coal: 1,
        income: 2,
        vp: 7,
        production: 5,
        quantity: 1

    }, {
        level: 4,
        cost: 12,
        needs_coal: 1,
        income: 1,
        vp: 9,
        production: 6,
        quantity: 1
    },],
    cotton_mills: [{
        level: 1,
        cost: 12,
        income: 5,
        vp: 5,
        quantity: 3
    },
    {
        level: 2,
        cost: 14,
        needs_coal: 1,
        income: 4,
        vp: 5,
        quantity: 3
    },
    {
        level: 3,
        cost: 16,
        needs_coal: 1,
        needs_steel: 1,
        income: 3,
        vp: 9,
        quantity: 3
    },
    {
        level: 4,
        cost: 18,
        needs_coal: 1,
        needs_steel: 1,
        income: 2,
        vp: 12,
        quantity: 3
    },
    ],
    shipyards: [
    ]
}

export function get_building_tile(building, player) {

}

export function build_possibilities_for_location(location, player, game) {
    let town = game.map.towns[location];
    if (game.era == "canals" && town.places.find((place) => place.building !== undefined && place.building.player == player)) {
        return "You already have a building there."
    }
}

export function build_possibilities_for_building(building, player, game) {

}