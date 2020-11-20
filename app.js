var app = new Vue({
  el: "#app",
  data: {
    items: [
      { id: 0, item: "Backpack", weight: 10 },
      { id: 1, item: "Crowbar", weight: 20 },
      { id: 2, item: "Garlic", weight: 5 },
      { id: 3, item: "Grappling Hook", weight: 25 },
      { id: 4, item: "Hammer (small)", weight: 10 },
      { id: 5, item: "Holy Symbol", weight: 10 },
      { id: 6, item: "Holy Water (vial)", weight: 10 },
      { id: 7, item: "Iron Spikes (12)", weight: 5 },
      { id: 8, item: "Lantern", weight: 20 },
      { id: 9, item: "Mirror (hand-sized, steel)", weight: 5 },
      { id: 10, item: "Oil (1 flask)", weight: 10 },
      { id: 11, item: "Pole (10 ft long, wooden)", weight: 50 },
      { id: 12, item: "Rations (iron, 7 days)", weight: 10 },
      { id: 13, item: "Rations (standard, 7 days)", weight: 10 },
      { id: 14, item: "Rope (50 ft)", weight: 15 },
      { id: 15, item: "Sack (small)", weight: 2 },
      { id: 16, item: "Sack (large)", weight: 5 },
      { id: 17, item: "Stakes (3) and mallet", weight: 10 },
      { id: 18, item: "Thieves Tools", weight: 20 },
      { id: 19, item: "Tinder box (flint & steel)", weight: 10 },
      { id: 20, item: "Torches (6)", weight: 10 },
      { id: 21, item: "Waterskin", weight: 10 },
      { id: 22, item: "Wine (2 pints)", weight: 10 },
      { id: 23, item: "Wolfsbane (1 bunch)", weight: 5 },
    ],
    inventory: 0,
    inInventory: false,
  },
  methods: {
    addToInventory: function () {
      this.inventory += 1;
      inInventory = true;
    },
  },
});
