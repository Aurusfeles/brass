import { defineStore } from 'pinia'
import * as possibilities from "~/assets/js/possibilities"


export const useGameStore = defineStore('game', {
    state: () => {
        let game = new possibilities.Game();
        game.add_player("Aurus", "#FFAAAA");
        game.add_player("Bob", "#AAFFAA");
        game = possibilities.make_action_build_industry(game, 0, { industry: possibilities.IndustryType.CoalMine, coordinates: { town_name: possibilities.TownName.Wigan, construction_place_index: 0 } });// );
        game = possibilities.make_action_build_industry(game, 1, { industry: possibilities.IndustryType.Ironworks, coordinates: { town_name: possibilities.TownName.Preston, construction_place_index: 0 }, coal_source: { town_name: possibilities.TownName.Wigan, construction_place_index: 0 } });// );
        return { ...game };

    }
})