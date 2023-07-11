import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NativeBaseProvider, Box, Text } from "native-base";
import HomeNav from './GameList/HomeNav';



export default function App() {
  return (
    <NativeBaseProvider >
      <Box bg="blueGray.400" flex={1} alignItems={'center'} justifyContent={'center'} h={"100%"}>
        <Text mt={"5%"}> Home </Text>
        <HomeNav />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}


