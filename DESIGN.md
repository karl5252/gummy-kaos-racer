## Core Assumptions

### 1. Perspective & Controls
- Top-down 2D view
- Player controls a vehicle
- Simple controls:
  - accelerate / reverse
  - turn left / right

Focus is on **responsiveness and clarity**, not realistic physics.

---

### 2. Core Gameplay Loop

**drive → chase → smash → score → repeat**

- Player moves around the arena
- Chases fleeing gummy bears
- Collides with them to score points
- Loop continues until timer/end condition

Any feature that does not support this loop should be removed.

---

### 3. Enemy Behavior (Gummy Bears)

- Default: random wandering
- When player is nearby: flee away from player

No complex AI systems:
- no behavior trees
- no multi-state logic
- no advanced pathfinding

Goal: simple, readable “panic” behavior.

---

### 4. Collision & Feedback

- On collision with a gummy bear:
  - bear is removed
  - visual feedback (splat / particles)
  - score increases

No:
- health systems
- damage calculations
- complex hit detection

Immediate feedback is key.

---

### 5. Environment (MVP)

- Simple bounded arena
- Basic obstacles (rectangles)
- No tilemap system for initial version

Optional later:
- terrain types (slow/fast zones)

---

### 6. Difficulty & Pacing

Difficulty increases over time via:
- increasing player speed OR
- increasing number of bears

Only one axis of difficulty at a time.

---

### 7. Game Condition

Choose one for MVP:

- Time-based (e.g. 60 seconds)
- Survival-based

No:
- levels
- progression systems
- campaign structure

---

### 8. Visual Clarity

The game must be understandable within 1 second:
- player is clearly visible
- enemies are clearly visible
- objective is obvious

---

## Constraints (MVP Scope)

- No weapons
- No AI vehicles
- No upgrade systems
- No level editor
- No complex physics

---

## Definition of Done (MVP)

The game is considered complete when:

- Player can control the vehicle
- Bears move and flee from the player
- Player can collide with and "smash" bears
- Score is tracked
- The game loop runs for at least 1–2 minutes and feels playable
