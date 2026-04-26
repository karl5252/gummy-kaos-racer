# Gummy Chaos Racer (Working Title)

Small, fast-paced top-down prototype built with Phaser 3 + Vite.

Goal: create a simple, fun core loop in a weekend.

---

## Concept

You control a vehicle from a top-down view and chase down fleeing gummy bears.

Core loop:
- Drive
- Chase
- Smash
- Score
- Repeat

The focus is on **movement feel**, **collision feedback**, and **simple AI behavior**.

---

## Scope (MVP)

This project is intentionally small. The first playable version should include:

- Player-controlled vehicle (rectangle for now)
- Basic movement (acceleration, turning)
- Gummy bears:
    - random movement
    - flee when player is nearby
- Collision:
    - bear gets removed
    - score increases
- Simple game loop (restart / replay)

### Not in scope (for now)

- Advanced physics
- Weapons
- Multiple vehicles
- Complex AI
- Level editor / tilemap system
- Menus beyond basic restart

If it’s not listed above, it’s not part of the MVP.

---

## Tech Stack

- [Phaser 3](https://phaser.io/)
- [Vite](https://vitejs.dev/)

---

## Getting Started

Install dependencies:

```bash
npm install
```
Run development server:
```bash
npm run dev
```
Build for production:
```bash
npm run build
```
 Project Structure (Simplified)
```
src/
  main.js
  GameScene.js
```
We keep structure minimal during prototyping. It may evolve later.

 Development Rules
Keep features small and testable
Prefer working gameplay over clean architecture (for now)
If something takes more than a few hours → simplify or cut
Focus on feel first, not visuals

# First Milestone

A playable build where:

player can move
at least one bear flees
player can collide and "smash" it
# License

MIT