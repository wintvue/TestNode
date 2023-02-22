const { temukanPelanggar } = require('./ktpController.js')

test('should return duplicate ktp ids', async () => {
    expect(await temukanPelanggar(["3871921234567", "3871921198003", "3871929000092", "3871921198003", "3871929000092"]))
    .toEqual(["3871921198003", "3871929000092"]);
  });