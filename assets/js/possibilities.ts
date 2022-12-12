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

enum TownName {
    Manchester,
    Lancaster,
    Fleetwood,
    Wigan,
    Rochdale,
    Burnley,
    Colne,
    Bury,
    Oldham
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

    constructor(type: BuildingType, player: number, level: number, cost: number, income: number, victory_points: number, needs_coal: boolean, needs_iron: boolean, cube_production?: number, cube_type?: CubeType) {
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
        this.cube_quantity = this.cube_production;
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

        this.coal_mines = [];
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 1, 5, 4, 1, false, false, 2, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 2, 7, 7, 2, false, false, 3, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 2, 7, 7, 2, false, false, 3, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 3, 8, 6, 3, false, true, 4, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 3, 8, 6, 3, false, true, 4, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 4, 10, 5, 4, false, true, 5, CubeType.Coal));
        this.coal_mines.push(new BuildingMarker(BuildingType.CoalMine, player, 4, 10, 5, 4, false, true, 5, CubeType.Coal));

        this.ironworks = [];
        this.ironworks.push(new BuildingMarker(BuildingType.Ironworks, player, 1, 5, 3, 3, true, false, 4, CubeType.Iron));
        this.ironworks.push(new BuildingMarker(BuildingType.Ironworks, player, 2, 7, 3, 5, true, false, 4, CubeType.Iron));
        this.ironworks.push(new BuildingMarker(BuildingType.Ironworks, player, 3, 9, 2, 7, true, false, 5, CubeType.Iron));
        this.ironworks.push(new BuildingMarker(BuildingType.Ironworks, player, 4, 12, 1, 9, true, false, 6, CubeType.Iron));

        this.shipyards = [];
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 0, 9999, 0, 0, false, false));
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 0, 9999, 0, 0, false, false));
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 1, 16, 2, 10, true, true));
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 1, 16, 2, 10, true, true));
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 2, 25, 1, 18, true, true));
        this.shipyards.push(new BuildingMarker(BuildingType.Shipyard, player, 2, 25, 1, 18, true, true));

    }

    get_collection_from_building_type(building_type: BuildingType): Array<BuildingMarker> {
        switch (building_type) {
            case BuildingType.CoalMine:
                return this.coal_mines;
            case BuildingType.CottonMill:
                return this.cotton_mills;
            case BuildingType.Ironworks:
                return this.ironworks;
            case BuildingType.Port:
                return this.ports;
            case BuildingType.Shipyard:
                return this.shipyards;
        }
    }

    pop_building_tile(building_type: BuildingType): BuildingMarker | undefined {
        return this.get_collection_from_building_type(building_type).shift();
    }

    peek_building_tile(building_type: BuildingType): BuildingMarker | undefined {
        return this.get_collection_from_building_type(building_type)[0];
    }
}

class Town {
    name: string;
    places: ConstructionPlace[];
    position: Position;

    constructor(name: string, places: ConstructionPlace[], position: Position) {
        this.name = name;
        this.places = places;
        this.position = position;
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
        this.building_marker_stock = new BuildingMarkerStock(id);
        this.route_marker_stock = 15;
    }
}

enum Era {
    Canals,
    Rairoads
}

class GameMap {
    towns: Record<TownName, Town>;
    canals: Canal[];

    constructor() {
        this.towns = {
            [TownName.Burnley]: new Town("Burnley", [], { x: 0, y: 0 }),
            [TownName.Bury]: new Town("Bury", [], { x: 0, y: 0 }),
            [TownName.Oldham]: new Town("Oldham", [], { x: 0, y: 0 }),
            [TownName.Rochdale]: new Town("Rochdale", [], { x: 0, y: 0 }),
            [TownName.Colne]: new Town("Colne", [], { x: 0, y: 0 }),
            [TownName.Fleetwood]: new Town("Fleetwood", [], { x: 0, y: 0 }),
            [TownName.Wigan]: new Town("Wigan", [], { x: 0, y: 0 }),
            [TownName.Manchester]: new Town("Manchester", [], { x: 0, y: 0 }),
            [TownName.Lancaster]: new Town("Lancaster", [], { x: 0, y: 0 }),

        };

        this.canals = [];

    }
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



interface ConstructionPlace {
    type: BuildingType[],
    marker?: BuildingMarker
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