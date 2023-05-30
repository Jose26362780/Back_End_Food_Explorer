/*// Ruta para crear un nuevo plato
app.post('/dishes', (request, response) => {
  const { name, description, price, image, category, makings } = request.body;
  const newDish = new Dish({ name, description, price, image, category, makings });
  newDish.save((error) => {
    if (error) {
      return response.status(500).json({ error: 'Error al crear el plato' });
    }
    response.status(201).json({ message: 'Plato creado exitosamente' });
  });
});
*/