import example_game from "~/assets/js/example_game";
export const usePlayers = () => useState<Array<Object>>("players", () => example_game.players);
export const useTowns = () => useState<Object>("towns", () => example_game.map.towns);
export const useCanals = () => useState<Array<Object>>("canals", () => example_game.map.canals);
