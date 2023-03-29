import {Image, Text, View, StyleSheet, ScrollView } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri:props.item.capa}}
        style={styles.livro}  
      />
      <Text style={{ color: 'black' }}> {props.item.titulo}</Text>
      <Text style={{ color: 'black' }}> {props.item.genero}</Text>
      <Text style={{ fontSize: 12, color: 'red' }}> R$ {props.item.preco.toString()} </Text>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      id:1,
      capa: 'https://m.media-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e a Pedra Filosofal',
      genero: 'Ficção',
      preco: 35.90
    },
    {
      id:2,
      capa: 'https://m.media-amazon.com/images/I/51SnGLrrJcL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Harry Potter e a Câmara Secreta',
      genero: 'Ficção',
      preco: 33.90
    },
    {
      id:3,
      capa: 'https://m.media-amazon.com/images/I/41kT95iZ81L._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      genero: 'Ficção',
      preco: 35.99
    },
    {
      id:4,
      capa: 'https://m.media-amazon.com/images/I/51DDABrpU5L._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e o Calice de Fogo',
      genero: 'Ficção',
      preco: 41.90
    },
    {
      id:5,
      capa: 'https://m.media-amazon.com/images/I/41SknlxiqHL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Harry Potter e a Ordem da Fênix', 
      genero: 'Ficção',
      preco: 57.90 
    },
    { 
      id:6,
      capa: 'https://m.media-amazon.com/images/I/51msVf94L2L._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e o Enigma do Príncipe',
      genero: 'Ficção',
      preco: 34.99
    },
    { 
      id:7,
      capa: 'https://m.media-amazon.com/images/I/51PoQ61oq-L._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e as Relíquias da Morte',
      genero: 'Ficção',
      preco: 42.90
    },
  ]

  return (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.conteudo}>
        {livros.map(livro => <Card item={livro} key={livro.titulo}/>)}
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justfyContent: 'center',
    alignItems: 'center', 
    paddingTop: 20,
    backgroundColor: '#ccc',
  }, 
  conteudo: {
    flex: 1, 
    backgroundColor: '#f7f7df',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  card: {
    backgroundColor: '#ccc',
    width: '40%',
    height: 278,
    margin: 18,
  },
  livro: {
    resizeMode: 'stretch', 
    width: '100%',
    height: 200,
  },
});