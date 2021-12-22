import bcrypt from 'bcryptjs';

const data = {
  users: [
    
    {
      name: 'pvaldivia',
      email: 'pvaldivia@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'rodrigo',
      email: 'rodrigo@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      
    
    },      
    {
      name: 'juanito',
      email: 'juanito@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      
    
    }, 

  ],
  products: [
    {
      name: 'Tarta mousse de Chocolate',
      category: 'Tartas',
      image: '/images/mousse-chocolate.jpg',
      price: 6500,
      countInStock: 10,
      description: 'Esta tarta de mousse de chocolate es perfecta para quedar bien en cualquier ocasión, ideal para el verano y para lucirte con invitados. Es una tarta suave, que se deshace en la boca, pero en su interior tiene una mousse contundente lo que hace que sea un pastel que rinda para bastantes porciones.',
    },
    {
      name: 'Cheesecake de Nutella',
      category: 'Tartas',
      image: '/images/nutella.jpg',
      price: 8990,
      countInStock: 7,
      description: 'Los amantes de las tartas de queso y de la Nutella flotarán de placer cuando prueben esta increíble cheesecake de Nutella sin horno. De textura cremosa y sabor suave, es perfecta para poner punto y final a una comida de celebración y acompañar con ella el café de sobremesa, aunque también estará deliciosa con cualquier infusión o un simple vaso de leche bien fresca.',
    },
    {
      name: 'Pastel de Selva Negra',
      category: 'Pasteles',
      image: '/images/selva-negra.jpg',
      price: 7990,
      countInStock: 1,
      description: 'La tarta o torta Selva Negra es una tarta típica de la cocina de Baden y uno de los dulces más característicos de la gastronomía alemana. Está compuesta por varias capas de bizcochuelo de chocolate embebido en kirsch e intercaladas con nata y cerezas.',
    },
    {
      name: 'Pastel de Zanahoria',
      category: 'Pasteles',
      image: '/images/zanahoria.jpg',
      price: 8990,
      countInStock: 3,
      description: 'El pastel de zanahoria, tarta de zanahoria o torta de zanahoria es un pastel dulce con zanahoria machacada mezclada en la masa. La zanahoria se ablanda en el proceso de cocción, y la tarta suele tener una textura densa y suave.',
    },
    {
      name: 'Pastel de trufa',
      category: 'Pasteles',
      image: '/images/trufa.jpg',
      price: 12990,
      countInStock: 10,
      description: 'Exquisito pastel de trufas con frambuesas encima',
    },
    {
      name: 'Torta Celestial',
      category: 'Pasteles',
      image: '/images/torta-celestial.jpg',
      price: 10990,
      countInStock: 12,
      description: 'Sabías que ésta Torta es típica en el sur de Chile, específicamente Valdivia? Está preparada con unas capas de Bizcochos y Milhojas con Manjar, Crema Pastelera, Mermelada de Frambuesa, Merengue',
    },
    {
      name: 'Tiramisú',
      category: 'Postres',
      image: '/images/tiramisu.jpg',
      price: 15990,
      countInStock: 0,
      description: 'Es otro postre frío de origen italiano y está hecho a base de café, licor y crema. Su preparación es sencilla, solo hay que humedecer un bizcocho con una mezcla de café y licor y superponerlo en capas, alternando entre la crema y el bizcocho.'
    },
    {
      name: 'Suspiro Limeño',
      category: 'Postres',
      image: '/images/suspiro-limeño.jpg',
      price: 13990,
      countInStock: 2,
      description: 'Según su dulce historia, este postre fue creado por Amparo Ayarza, esposa del poeta José Gálvez Barrenechea. Fue este poeta quien le dio el nombre al postre ya que su textura es suave y dulce como el suspiro de una mujer.'
    },
  ],
};
export default data;
