export enum IndustryType {
    CottonMill = "cotton_mill",
    CoalMine = "coal_mine",
    Ironworks = "ironworks",
    Port = "port",
    Shipyard = "shipyard",
}

export enum CubeType {
    Iron = "iron",
    Coal = "coal"
}

export enum CardType {
    Location = "location",
    Industry = "industry"
}

export class RessourceMarket {
    spot: number;
    values: Array<number>;
    constructor() {
        this.spot = 0;
        this.values = [1, 1, 2, 2, 3, 3, 4, 4];
    }

    pop() {
        if (this.spot < 7) {
            this.spot = this.spot + 1;
            return this.values[this.spot - 1];
        }
        return 5;
    }

    push() {
        if (this.spot > 0) {
            this.spot = this.spot - 1;
            return this.values[this.spot];
        }
    }
}

export enum TownName {
    BarrowInFurness = "barrow_in_furness",
    Birkenhead = "birkenhead",
    Blackburn = "blackburn",
    Blackpool = "blockpool",
    Bolton = "bolton",
    Burnley = "burnley",
    Bury = "bury",
    Colne = "colne",
    EllesmerePort = "ellesmere_port",
    Fleetwood = "fleetwood",
    Lancaster = "lancaster",
    Liverpool = "liverpool",
    Macclesfield = "macclesfield",
    Manchester = "manchester",
    Northwich = "northwich",
    Oldham = "oldham",
    Preston = "preston",
    Rochdale = "rochdale",
    Scotland = "scotland",
    Southport = "southport",
    Stockport = "stockport",
    TheMidlands = "the_midlands",
    WarringtonAndRuncorn = "warrington_and_runcorn",
    Wigan = "wigan",
    Yorkshire = "yorkshire",

}

export interface Card {
    type: CardType,
    location?: string,
    industry?: IndustryType
}


export class IndustryTile {
    type: IndustryType;
    player: number;
    level: number;
    cost: number;
    income: number;
    victory_points: number;
    flipped: boolean;
    needs_coal: boolean;
    needs_iron: boolean;
    cube_production?: number;
    cube_type?: CubeType;
    cube_quantity?: number;

    constructor(type: IndustryType, player: number, level: number, cost: number, income: number, victory_points: number, needs_coal: boolean, needs_iron: boolean, cube_production?: number, cube_type?: CubeType) {
        this.type = type;
        this.player = player;
        this.level = level;
        this.cost = cost;
        this.income = income;
        this.victory_points = victory_points;
        this.flipped = false;
        this.needs_coal = needs_coal;
        this.needs_iron = needs_iron;
        this.cube_production = cube_production;
        this.cube_type = cube_type;
        this.cube_quantity = this.cube_production;
    }

    flip() {
        this.flipped = true;
    }
}


export class IndustryTileStock {
    ports: IndustryTile[];
    cotton_mills: IndustryTile[];
    ironworks: IndustryTile[];
    shipyards: IndustryTile[];
    coal_mines: IndustryTile[];

    constructor(player: number) {
        this.ports = [];
        this.ports.push(new IndustryTile(IndustryType.Port, player, 1, 6, 3, 2, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 1, 6, 3, 2, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 2, 7, 3, 4, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 2, 7, 3, 4, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 3, 8, 4, 6, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 3, 8, 4, 6, false, false));
        this.ports.push(new IndustryTile(IndustryType.Port, player, 4, 9, 4, 9, false, false));

        this.cotton_mills = [];
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 1, 12, 5, 3, false, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 2, 14, 4, 5, true, false));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 16, 3, 9, true, true));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 18, 2, 12, true, true));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 18, 2, 12, true, true));
        this.cotton_mills.push(new IndustryTile(IndustryType.CottonMill, player, 3, 18, 2, 12, true, true));

        this.coal_mines = [];
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 1, 5, 4, 1, false, false, 2, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 2, 7, 7, 2, false, false, 3, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 2, 7, 7, 2, false, false, 3, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 3, 8, 6, 3, false, true, 4, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 3, 8, 6, 3, false, true, 4, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 4, 10, 5, 4, false, true, 5, CubeType.Coal));
        this.coal_mines.push(new IndustryTile(IndustryType.CoalMine, player, 4, 10, 5, 4, false, true, 5, CubeType.Coal));

        this.ironworks = [];
        this.ironworks.push(new IndustryTile(IndustryType.Ironworks, player, 1, 5, 3, 3, true, false, 4, CubeType.Iron));
        this.ironworks.push(new IndustryTile(IndustryType.Ironworks, player, 2, 7, 3, 5, true, false, 4, CubeType.Iron));
        this.ironworks.push(new IndustryTile(IndustryType.Ironworks, player, 3, 9, 2, 7, true, false, 5, CubeType.Iron));
        this.ironworks.push(new IndustryTile(IndustryType.Ironworks, player, 4, 12, 1, 9, true, false, 6, CubeType.Iron));

        this.shipyards = [];
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 0, 9999, 0, 0, false, false));
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 0, 9999, 0, 0, false, false));
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 1, 16, 2, 10, true, true));
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 1, 16, 2, 10, true, true));
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 2, 25, 1, 18, true, true));
        this.shipyards.push(new IndustryTile(IndustryType.Shipyard, player, 2, 25, 1, 18, true, true));

    }

    get_collection_from_industry_type(industry_type: IndustryType): Array<IndustryTile> {
        switch (industry_type) {
            case IndustryType.CoalMine:
                return this.coal_mines;
            case IndustryType.CottonMill:
                return this.cotton_mills;
            case IndustryType.Ironworks:
                return this.ironworks;
            case IndustryType.Port:
                return this.ports;
            case IndustryType.Shipyard:
                return this.shipyards;
        }
    }

    pop_industry_tile(industry_type: IndustryType): IndustryTile | undefined {
        return this.get_collection_from_industry_type(industry_type).shift();
    }

    peek_industry_tile(industry_type: IndustryType): IndustryTile | undefined {
        return this.get_collection_from_industry_type(industry_type)[0];
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
    industry_tile_stock: IndustryTileStock;
    link_tile_stock: number;
    spent_money: number;

    constructor(id: number, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.money = 30;
        this.spent_money = 0;
        this.victory_points = 0;
        this.income_spot = 10;
        this.hand = [];
        this.industry_tile_stock = new IndustryTileStock(id);
        this.link_tile_stock = 15;
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
            [TownName.BarrowInFurness]: new Town("Barrow-in-Furness", [new ConstructionPlace([IndustryType.Shipyard]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Birkenhead]: new Town("Birkenhead", [new ConstructionPlace([IndustryType.Shipyard])]),
            [TownName.Blackburn]: new Town("Blackburn", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Blackpool]: new Town("Blackpool", []),
            [TownName.Bolton]: new Town("Bolton", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Burnley]: new Town("Burnley", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine])]),
            [TownName.Bury]: new Town("Bury", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine])]),
            [TownName.Colne]: new Town("Colne", [new ConstructionPlace([IndustryType.CottonMill]), new ConstructionPlace([IndustryType.CottonMill])]),
            [TownName.EllesmerePort]: new Town("Ellesmere Port", [new ConstructionPlace([IndustryType.Port])]),
            [TownName.Fleetwood]: new Town("Fleetwood", [new ConstructionPlace([IndustryType.Port])]),
            [TownName.Lancaster]: new Town("Lancaster", [new ConstructionPlace([IndustryType.Port]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.Port])]),
            [TownName.Liverpool]: new Town("Liverpool", [new ConstructionPlace([IndustryType.Port]), new ConstructionPlace([IndustryType.Port]), new ConstructionPlace([IndustryType.Shipyard]), new ConstructionPlace([IndustryType.Port])]),
            [TownName.Macclesfield]: new Town("Macclesfield", [new ConstructionPlace([IndustryType.CottonMill]), new ConstructionPlace([IndustryType.CottonMill])]),
            [TownName.Manchester]: new Town("Manchester", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Northwich]: new Town("Northwich", []),
            [TownName.Oldham]: new Town("Oldham", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine])]),
            [TownName.Preston]: new Town("Preston", [new ConstructionPlace([IndustryType.Port]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.Port]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Rochdale]: new Town("Rochdale", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.Ironworks])]),
            [TownName.Scotland]: new Town("Scotland", []),
            [TownName.Southport]: new Town("Southport", []),
            [TownName.Stockport]: new Town("Stockport", [new ConstructionPlace([IndustryType.CottonMill]), new ConstructionPlace([IndustryType.CottonMill])]),
            [TownName.TheMidlands]: new Town("The Midlands", []),
            [TownName.WarringtonAndRuncorn]: new Town("Warrington & Runcorn", [new ConstructionPlace([IndustryType.CottonMill, IndustryType.CoalMine]), new ConstructionPlace([IndustryType.Port])]),
            [TownName.Wigan]: new Town("Wigan", [new ConstructionPlace([IndustryType.CoalMine]), new ConstructionPlace([IndustryType.CoalMine])]),
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

    set_industry_tile(industry_coordinates: Coordinates, industry_tile: IndustryTile, coal_coordinates: Coordinates | "market" | "none", inron_coordinates: Coordinates | "market" | "none") {
        if (coal_coordinates == "market") {
            // trouver un chemin jusqu'?? un port
        }
        this.towns[industry_coordinates.town_name].places[industry_coordinates.construction_place_index].set_industry_tile(industry_tile);
    }
}

export function make_action_build_industry(game: Game, player_index: number, action: ActionBuildIndustry): Game {
    let player = game.players[player_index];
    let industry = player.industry_tile_stock.pop_industry_tile(action.industry);
    if (industry === undefined) {
        return game;
    }
    let total_cost = industry.cost;
    if (action.coal_source == "market") {
        total_cost += game.coal_market.pop();
    }
    else if (action.coal_source !== undefined) {
        let coal_industry = game.map.towns[action.coal_source.town_name].places[action.coal_source.construction_place_index].industry_tile;
        if (coal_industry !== undefined && coal_industry.cube_quantity !== undefined) {
            coal_industry.cube_quantity -= 1;
        }
    }

    if (action.iron_source == "market") {
        total_cost += game.iron_market.pop();
    }
    else if (action.iron_source !== undefined) {
        let iron_industry = game.map.towns[action.iron_source.town_name].places[action.iron_source.construction_place_index].industry_tile;
        if (iron_industry !== undefined && iron_industry.cube_quantity !== undefined) {
            iron_industry.cube_quantity -= 1;
        }
    }

    /// A FAIRE: tester le raccordement ?? un port, et voir s'il faut vider des cubes sur le marcher

    game.map.towns[action.coordinates.town_name].places[action.coordinates.construction_place_index].industry_tile = industry;

    player.money -= total_cost;
    player.spent_money += total_cost;
    return game;
}

export interface ActionBuildIndustry {
    industry: IndustryType,
    coordinates: Coordinates,
    coal_source?: Coordinates | "market",
    iron_source?: Coordinates | "market"
}

export interface ActionBuildLink {
    link_index: number,
    second_build: number,
    coal_source: Coordinates | undefined
}

export interface ActionLoan {
    level: number
}

export interface ActionDevelopment {
    industry: IndustryType,
    iron_source: Coordinates | "market" | undefined
}

export interface ActionSellCotton {
    cotton_mill: Coordinates,
    port: Coordinates | "market" | undefined
}

export interface Coordinates {
    town_name: TownName,
    construction_place_index: number
}

export class Game {
    players: Player[];
    map: GameMap;
    coal_market: RessourceMarket;
    iron_market: RessourceMarket;
    cotton_market_spot: number;
    player_order: number[];
    era: Era;
    deck: number;
    played_cards: Card[];

    constructor() {
        this.players = [];
        this.map = new GameMap();
        this.coal_market = new RessourceMarket();
        this.iron_market = new RessourceMarket();
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
    accepted_industry_types: IndustryType[];
    industry_tile?: IndustryTile;

    constructor(accepted_industry_types: IndustryType[]) {
        this.accepted_industry_types = accepted_industry_types;
    }

    set_industry_tile(industry_tile: IndustryTile) {
        this.industry_tile = industry_tile;
    }
}

/*
export function build_possibilities_for_location(location, player, game) {
    let town = game.map.towns[location];
    if (game.era == "canals" && town.places.find((place) => place.industry !== undefined && place.industry.player == player)) {
        return "You already have a industry there."
    }

    let free_industrys = [];
    for (const place of town.places.filter((place) => place.tile === undefined)) {
        switch (place.type) {
            case "cotton_mill_or_coal_mine":
                free_industrys.push("cotton_mill");
                free_industrys.push("coal_mine");
                break;
            case "cotton_mill_or_port":
                free_industrys.push("cotton_mill");
                free_industrys.push("port");
                break;
            case "coal_mine":
                free_industrys.push("coal_mine");
                break;
            case "ironworks":
                free_industrys.push("ironworks");
                break;

        }
    }

}

export function build_possibilities_for_industry(industry, player, game) {

}*/