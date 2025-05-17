import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState('');
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    const jogoOrdenado = numeros.sort((a, b) => a - b).join(' - ');
    setJogoGerado(jogoOrdenado);
    setJogosMegaSena([jogoOrdenado, ...jogosMegaSena]);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Mega Sena</Title>

      <Button
        mode="contained"
        icon="dice-multiple"
        onPress={gerarJogo}
        style={styles.botao}
        contentStyle={{ paddingVertical: 8 }}
      >
        Gerar jogo
      </Button>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardText}>{item}</Text>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  botao: {
    marginBottom: 20,
    alignSelf: 'center',
    width: 200,
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#1e1e1e',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
