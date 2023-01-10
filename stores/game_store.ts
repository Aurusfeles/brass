import { defineStore } from 'pinia'
import * as possibilities from "~/assets/js/possibilities"


export const useGameStore = defineStore('game', {
    state: () => {
        let game = new possibilities.Game();
        game.add_player("Aurus", "#FFAAAA");
        game.add_player("Bob", "#AAFFAA");
        let coal_mine = game.players[0].industry_tile_stock.pop_industry_tile(
            possibilities.IndustryType.CoalMine
        );
        if (coal_mine !== undefined) {
            game.map.set_industry_tile(
                {
                    town_name: possibilities.TownName.Bolton,
                    construction_place_index: 0,
                },

                coal_mine,
                "none",
                "none"
            );
        }
        return { ...game };

    }
})