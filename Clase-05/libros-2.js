const biblioteca = [
  {
    titulo: 'Cuando llegues al otro lado',
    autor: 'Mariana Osorio Gumá',
    anio: 2019,
    estado: 'disponible',
    capitulos: [],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  },

  {
    titulo: 'Los ojos de mi princesa',
    autor: 'Carlos Cuauhtémoc Sánchez',
    anio: 2004,
    estado: 'disponible',
    capitulos: [
      'Primera parte',
      'Segunda parte',
      'Tercera parte'
    ],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  },

  {
    titulo: 'La bailarina de Auschwitz',
    autor: 'Edith Eger',
    anio: 2018,
    estado: 'prestado',
    capitulos: [],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  },

  {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    anio: 1943,
    estado: 'disponible',
    capitulos: [
      'Capítulo 1',
      'Capítulo 2',
      'Capítulo 3',
      'Capítulo 4',
      'Capítulo 5',
      'Capítulo 6',
      'Capítulo 7',
      'Capítulo 8',
      'Capítulo 9',
      'Capítulo 10'
    ],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  },

  {
    titulo: 'La hipótesis del amor',
    autor: 'Ali Hazelwood',
    anio: 2021,
    estado: 'disponible',
    capitulos: [],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  },

  {
    titulo: 'Mujercitas',
    autor: 'Louisa May Alcott',
    anio: 1868,
    estado: 'disponible',
    capitulos: [
      'Jugando a los peregrinos',
      'Una feliz Navidad',
      'El muchacho Laurence',
      'Cargas',
      'Ser buenos vecinos'
    ],

    describirLibro: function () {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo agregado a "${this.titulo}": ${capitulo}`);
    },

    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);

      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo eliminado de "${this.titulo}": ${capitulo}`);
      } else {
        console.log(`El capítulo "${capitulo}" no existe en "${this.titulo}".`);
      }
    }
  }
];

// Mostrar la información básica de todos los libros
console.log('Información de la biblioteca');

biblioteca.forEach(function (libro) {
  libro.describirLibro();

  if (libro.capitulos.length > 0) {
    console.log('Capítulos registrados:');
    libro.capitulos.forEach(function (capitulo, index) {
      console.log(`${index + 1}. ${capitulo}`);
    });
  } else {
    console.log('Este libro todavía no tiene capítulos registrados.');
  }

});

// Ejemplo de uso de los métodos opcionales
console.log('Ejemplo de agregar y eliminar capítulos');

biblioteca[0].agregarCapitulo('Capítulo 1');
biblioteca[0].agregarCapitulo('Capítulo 2');
biblioteca[0].eliminarCapitulo('Capítulo 1');

console.log(biblioteca[0]);