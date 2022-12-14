export enum BuildingType {
    CottonMill,
    CoalMine,
    Ironworks,
    Port,
    Shipyard,
}

export enum CubeType {
    Iron,
    Coal
}

export enum CardType {
    Location,
    Building
}

export enum TownName {
    BarrowInFurness,
    Birkenhead,
    Blackburn,
    Blackpool,
    Bolton,
    Burnley,
    Bury,
    Colne,
    EllesmerePort,
    Fleetwood,
    Lancaster,
    Liverpool,
    Macclesfield,
    Manchester,
    Northwich,
    Oldham,
    Preston,
    Rochdale,
    Scotland,
    Southport,
    Stockport,
    TheMidlands,
    WarringtonAndRuncorn,
    Wigan,
    Yorkshire,

}

export interface Card {
    type: CardType,
    location?: string,
    building?: BuildingType
}


export class BuildingMarker {
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


export class BuildingMarkerStock {
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

export class Town {
    name: string;
    places: ConstructionPlace[];
    constructor(name: string, places: ConstructionPlace[]) {
        this.name = name;
        this.places = places;
    }
}


export class Player {
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

export enum Era {
    Canals,
    Rairoads
}

export class GameMap {
    towns: Record<TownName, Town>;
    canals: Canal[];

    constructor() {
        this.towns = {
            [TownName.BarrowInFurness]: new Town("Barrow-in-Furness", [new ConstructionPlace([BuildingType.Shipyard]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Birkenhead]: new Town("Birkenhead", [new ConstructionPlace([BuildingType.Shipyard])]),
            [TownName.Blackburn]: new Town("Blackburn", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Blackpool]: new Town("Blackpool", []),
            [TownName.Bolton]: new Town("Bolton", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Burnley]: new Town("Burnley", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine])]),
            [TownName.Bury]: new Town("Bury", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine])]),
            [TownName.Colne]: new Town("Colne", [new ConstructionPlace([BuildingType.CottonMill]), new ConstructionPlace([BuildingType.CottonMill])]),
            [TownName.EllesmerePort]: new Town("Ellesmere Port", [new ConstructionPlace([BuildingType.Port])]),
            [TownName.Fleetwood]: new Town("Fleetwood", [new ConstructionPlace([BuildingType.Port])]),
            [TownName.Lancaster]: new Town("Lancaster", [new ConstructionPlace([BuildingType.Port]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.Port])]),
            [TownName.Liverpool]: new Town("Liverpool", [new ConstructionPlace([BuildingType.Port]), new ConstructionPlace([BuildingType.Port]), new ConstructionPlace([BuildingType.Shipyard]), new ConstructionPlace([BuildingType.Port])]),
            [TownName.Macclesfield]: new Town("Macclesfield", [new ConstructionPlace([BuildingType.CottonMill]), new ConstructionPlace([BuildingType.CottonMill])]),
            [TownName.Manchester]: new Town("Manchester", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Northwich]: new Town("Northwich", []),
            [TownName.Oldham]: new Town("Oldham", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine])]),
            [TownName.Preston]: new Town("Preston", [new ConstructionPlace([BuildingType.Port]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.Port]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Rochdale]: new Town("Rochdale", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.Ironworks])]),
            [TownName.Scotland]: new Town("Scotland", []),
            [TownName.Southport]: new Town("Southport", []),
            [TownName.Stockport]: new Town("Stockport", [new ConstructionPlace([BuildingType.CottonMill]), new ConstructionPlace([BuildingType.CottonMill])]),
            [TownName.TheMidlands]: new Town("The Midlands", []),
            [TownName.WarringtonAndRuncorn]: new Town("Warrington & Runcorn", [new ConstructionPlace([BuildingType.CottonMill, BuildingType.CoalMine]), new ConstructionPlace([BuildingType.Port])]),
            [TownName.Wigan]: new Town("Wigan", [new ConstructionPlace([BuildingType.CoalMine]), new ConstructionPlace([BuildingType.CoalMine])]),
            [TownName.Yorkshire]: new Town("Yorkshire", []),
        };
        this.canals = [
            { link: [TownName.Lancaster, TownName.Preston] },
            { link: [TownName.Preston, TownName.Fleetwood] },
            { link: [TownName.Preston, TownName.Wigan] },
            { link: [TownName.Liverpool, TownName.Wigan] },
            { link: [TownName.WarringtonAndRuncorn, TownName.Wigan] },
            { link: [TownName.Blackburn, TownName.Wigan] },
            { link: [TownName.Blackburn, TownName.Burnley] },
            { link: [TownName.Burnley, TownName.Colne] },
            { link: [TownName.Colne, TownName.Yorkshire] },
            { link: [TownName.Rochdale, TownName.Yorkshire] },
            { link: [TownName.Rochdale, TownName.Yorkshire] },
            { link: [TownName.Rochdale, TownName.Oldham] },
            { link: [TownName.Oldham, TownName.Manchester] },
            { link: [TownName.Manchester, TownName.Bury] },
            { link: [TownName.Manchester, TownName.Bolton] },
            { link: [TownName.Bolton, TownName.Bury] },
            { link: [TownName.Manchester, TownName.WarringtonAndRuncorn] },
            { link: [TownName.Manchester, TownName.Stockport] },
            { link: [TownName.Stockport, TownName.Macclesfield] },
            { link: [TownName.Macclesfield, TownName.TheMidlands] },
            { link: [TownName.TheMidlands, TownName.Northwich] },
            { link: [TownName.EllesmerePort, TownName.Northwich] },
            { link: [TownName.Liverpool, TownName.EllesmerePort] },
            { link: [TownName.WarringtonAndRuncorn, TownName.EllesmerePort] }
        ]
    }

    set_building_marker(building_coordinates: Coordinates, building_marker: BuildingMarker, coal_coordinates: Coordinates | "market", inron_coordinates: Coordinates | "market") {
        if (coal_coordinates == "market") {
            // trouver un chemin jusqu'à un port
        }

        this.towns[building_coordinates.town_name].places[building_coordinates.construction_place_index].set_building_marker(building_marker);
    }
}

export interface Coordinates {
    town_name: TownName,
    construction_place_index: number
}

export class Game {
    players: Player[];
    map: GameMap;
    coal_demand_spot: number;
    iron_demand_spot: number;
    cotton_market_spot: number;
    player_order: number[];
    era: Era;
    deck: number;
    played_cards: Card[];

    constructor() {
        this.players = [];
        this.map = new GameMap();
        this.coal_demand_spot = 7;
        this.iron_demand_spot = 7;
        this.cotton_market_spot = 5;
        this.player_order = [];
        this.era = Era.Canals;
        this.deck = 40;
        this.played_cards = [];
    }

    add_player(name: string, color: string) {
        this.players.push(new Player(this.players.length, name, color));
    }

}

export interface Canal {
    link: TownName[],
    player?: number,
}

export class ConstructionPlace {
    accepted_building_types: BuildingType[];
    building_marker?: BuildingMarker;

    constructor(accepted_building_types: BuildingType[]) {
        this.accepted_building_types = accepted_building_types;
    }

    set_building_marker(building_marker: BuildingMarker) {
        this.building_marker = building_marker;
    }
}

/*
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

}*/