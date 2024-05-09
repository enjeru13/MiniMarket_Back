import Product from "../models/product.model.js";

// Obtener todos los productos

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({
      user: req.user.id,
    }).populate('user')
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};


export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('user');
    if (!product) return res.status(404).json({ message: "Producto no encontrada" });
    res.json(product);
  } catch (error) {
    return res.status(404).json({ message: "Error al obtener producto" });
  }
};

// Crear una nueva producto
export const createProduct = async (req, res) => {
  try {
    const { name, stock, price, photo, category } = req.body;
    const newProduct = new Product({
      name,
      stock,
      price,
      photo,
      category,
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct)
  } catch (error) {
    return res.status(500).json({ message: "Error al crear producto" });
  }
};

// Actualizar una producto
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Producto no encontrada" });
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Error al actualizar producto" });
  }
};

// Eliminar una producto
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Error al eliminar producto" });
  }
};
