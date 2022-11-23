export default {
    coal_demand_spot: 4,
    steel_demand_spot: 6,
    cotton_market_spot: 3,
    player_order: [2, 0, 1, 3],
    era: "canals",
    deck: ["port", "rochdale", "preston", "cotton_mill", "cotton_mill", "shipyard", "colne", "manchester", "port", "port", "coal_mine", "lancaster", "fleetwood", "cotton_mill"],
    played_cards: ["bury", "oldham", "ironworks", "blackburn"],
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
            markers: {
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
                ]
            }
        }
    ]
};
