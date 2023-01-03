import { defineStore } from 'pinia'
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

export const useAlertsStore = defineStore('game', {
    state: () => {
        return {
            game
        }
    }
})