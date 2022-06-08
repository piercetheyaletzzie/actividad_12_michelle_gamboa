import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5'); //tarea 1
    const json = await response.json(); //tarea 2'
    setData(json);

  } catch (error){
    console.error(error);
  }
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style= {{flex: 1, padding:24}}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <>
            <Text>{item.title}</Text>
            <Image source={{uri: item.url}}
            style={{width: 100, height:100}}/>    
            </>      )}
        />
      
    </View>
  );
}

