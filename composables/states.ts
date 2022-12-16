import example_game from "~/assets/js/example_game";
import * as possibilities from "~/assets/js/possibilities"


let game = new possibilities.Game();
game.add_player("Aurus", "#FFAAAA");
game.add_player("Bob", "#AAFFAA");
let coal_mine = game.players[0].building_marker_stock.pop_building_tile(
    possibilities.BuildingType.CoalMine
);
if (coal_mine !== undefined) {
    game.map.set_building_marker(
        {
            town_name: possibilities.TownName.Wigan,
            construction_place_index: 0,
        },

        coal_mine,
        "none",
        "none"
    );
}

export const useGame = () => useState<possibilities.Game>("players", () => game);
export const usePlayers = () => useState<Array<possibilities.Player>>("players", () => game.players);
export const useTowns = () => useState<Record<possibilities.TownName, possibilities.Town>>("towns", () => game.map.towns);
export const useCanals = () => useState<Array<possibilities.Canal>>("canals", () => game.map.canals);
