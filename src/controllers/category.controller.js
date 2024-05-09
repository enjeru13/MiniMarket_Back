import Category from "../models/category.model.js";

// Obtener todas las categorías
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({
      name: req.name.id,
    }).populate('name')
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener categorías" });
  }
};

// Obtener una categoría por ID
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('user');
    if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
    res.json(category);
  } catch (error) {
    return res.status(404).json({ message: "Error al obtener categoría" });
  }
};

// Crear una nueva categoría
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({
      name,
    });
    const savedCategory = await newCategory.save();
    res.json(savedCategory)
  } catch (error) {
    return res.status(500).json({ message: "Error al crear categoría" });
  }
};

// Actualizar una categoría
export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
    res.json(category);
  } catch (error) {
    res.status(404).json({ message: "Error al actualizar categoría" });
  }
};

// Eliminar una categoría
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Error al eliminar categoría" });
  }
};

