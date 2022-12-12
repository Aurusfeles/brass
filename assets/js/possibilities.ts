enum BuildingType {
    CottonMill,
    CoalMine,
    Ironworks,
    Port,
    Shipyard,
}

enum CubeType {
    Iron,
    Coal
}

enum CardType {
    Location,
    Building
}

interface Card {
    type: CardType,
    location?: string,
    building?: BuildingType
}


class BuildingMarker {
    type: BuildingType;
    player: Number;
    level: number;
    cost: number;
    income: number;
    victory_points: number;
    needs_coal: boolean;
    needs_iron: boolean;
    cube_production?: number;
    cube_type?: CubeType;
    cube_quantity?: number;

    constructor(type: BuildingType, player: number, level: number, cost: number, income: number, victory_points: number, needs_coal: boolean, needs_iron: boolean, cube_production?: number, cube_type?: CubeType, cube_quantity?: number) {
        this.type = type;
        this.player = player;
        this.level = level;
        this.cost = cost;
        this.income = income;
        this.victory_points = victory_points;
        this.needs_coal = needs_coal;
        this.needs_iron = needs_iron;
        this.cube_production = cube_production;
        this.cube_type = cube_type;
        this.cube_quantity = this.cube_quantity;
    }
}


class BuildingMarkerStock {
    ports: BuildingMarker[];
    cotton_mills: BuildingMarker[];
    ironworks: BuildingMarker[];
    shipyards: BuildingMarker[];
    coal_mines: BuildingMarker[];

    constructor(player: number) {
        this.ports = [];
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 1, 6, 3, 2, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 1, 6, 3, 2, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 2, 7, 3, 4, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 2, 7, 3, 4, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 3, 8, 4, 6, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 3, 8, 4, 6, false, false));
        this.ports.push(new BuildingMarker(BuildingType.Port, player, 4, 9, 4, 9, false, false));

        this.cotton_mills = [];
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 18, 2, 12, true, true));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 18, 2, 12, true, true));
        this.cotton_mills.push(new BuildingMarker(BuildingType.CottonMill, player, 3, 18, 2, 12, true, true));

    }
}

class Player {
    id: number;
    name: string;
    color: string;
    money: number;
    victory_points: number;
    income_spot: number;
    hand: Card[];
    building_marker_stock: BuildingMarkerStock;
    route_marker_stock: number;

    constructor(id: number, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.money = 30;
        this.victory_points = 0;
        this.income_spot = 10;
        this.hand = [];
        this.building_marker_stock = new BuildingMarkerStock();
        this.route_marker_stock = 15;
    }
}

enum Era {
    Canals,
    Rairoads
}

interface GameMap {
    towns: Town[],
    canals: Canal[],
}

interface Game {
    players: Player[],
    map: GameMap,
    coal_demand_spot: number,
    iron_demand_spot: number,
    cotton_market_spot: number,
    player_order: number[],
    era: Era,
    deck: number,
    played_cards: Card[]

}

interface Canal {
    link: Town[],
    player?: number,
    position: Position
}

interface Position {
    x: number,
    y: number
}

interface Town {
    name: string,
    places: ConstructionPlace[],
    position: Position
}


interface ConstructionPlace {
    type: BuildingType[],
    marker?: BuildingMarker
}


let base_player = {
    name: "unknown",
    color: "#000000",
    building_marker_stock = {
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
    }

export function make_new_building_set() {
        let new_building_set = {};
for (const building_type in buildings) {
    new_building_set[building_type] = [];
    for (const building_specs of buildings[building_type]) {
        let i = 0;
        while (i < building_specs.quantity) {
            new_building_set[building_type].push({ ...building_specs })
            i++;
        }
    }
}
return new_building_set;
}

export function get_building_tile(building_type, number) {

}

function construction_place_build_possibility(location, construction_place_index, player, game) {

}

export function build_possibilities_for_location(location, player, game) {
    let town = game.map.towns[location];
    if (game.era == "canals" && town.places.find((place) => place.building !== undefined && place.building.player == player)) {
        return "You already have a building there."
    }

    let free_buildings = [];
    for (const place of town.places.filter((place) => place.marker === undefined)) {
        switch (place.type) {
            case "cotton_mill_or_coal_mine":
                free_buildings.push("cotton_mill");
                free_buildings.push("coal_mine");
                break;
            case "cotton_mill_or_port":
                free_buildings.push("cotton_mill");
                free_buildings.push("port");
                break;
            case "coal_mine":
                free_buildings.push("coal_mine");
                break;
            case "ironworks":
                free_buildings.push("ironworks");
                break;

        }
    }

}

export function build_possibilities_for_building(building, player, game) {

}