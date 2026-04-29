export const DEPTH = {
    // Background
    GROUND: 4,
    // Actors
    OBSTACLES: 5,
    BEARS: 8,
    SPLAT: 9,  // splat has higher depth than bear so will hide bear sprite before disappearing
    CARS: 10,
    POWER_UPS: 11,
    // Foreground
    // UI
    HUD: 100,
    HUD_ELEMENTS: 101,
    NOTIFICATIONS: 102,
    INFO: 150,
    OVERLAY: 200,
    // Debug
    DEBUG_INFO: 999

}