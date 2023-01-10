import { defineStore } from 'pinia'
import * as possibilities from "~/assets/js/possibilities"


export const useGameStore = defineStore('game', {
    state: () => {
        let game = new possibilities.Game();
        game.add_player("Aurus", "#FFAAAA");
        game.add_player("Bob", "#AAFFAA");
        game = possibilities.MakeActionBuildIndustry(game, 0, { building: possibilities.BuildingType.CoalMine, coordinates: { town_name: possibilities.TownName.Wigan, construction_place_index: 0 } });// );
        game = possibilities.MakeActionBuildIndustry(game, 1, { building: possibilities.BuildingType.Ironworks, coordinates: { town_name: possibilities.TownName.Preston, construction_place_index: 0 }, coal_source: { town_name: possibilities.TownName.Wigan, construction_place_index: 0 } });// );
        return { ...game };

    }
})