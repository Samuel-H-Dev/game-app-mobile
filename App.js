import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NativeBaseProvider, Box, Text } from "native-base";
import HomeNav from './GameList/HomeNav';



export default function App() {
  const [page, setPage] = useState('Home');




  return (
    <NativeBaseProvider >
      <Box bg="blueGray.400" flex={1} alignItems={'center'} justifyContent={'center'} h={"100%"}>
        <Text fontSize={24} fontWeight={600}> {page} </Text>
        {(page === "Rock, Paper, Scissor")
          ? <Text>working</Text>
          : <Text>whatever </Text>
          }
        <HomeNav setPage={setPage}/>
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}


