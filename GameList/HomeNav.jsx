import { Text, Center, Box, Spinner, Image, VStack, FormControl } from "native-base";
import GameList from "../data/games.json";
import { ScrollView } from "react-native";


export default function HomeNav(){


    return(
        <Center w={"100%"} h={"85%"}>
            <Box w="90%" mt={"10%"} >
                <ScrollView >

                { GameList.map(item => {
                    return(
                        <Box key={item.id} w={"100%"} my={3} py={4} display={"flex"} flexDirection={"row"} borderBottomColor={"black"} borderBottomWidth={2} borderRadius={13} bgColor={"#ffffff60"}> 
                    <VStack>
                        <FormControl mx={4}>
                            <Text w={"100%"}> {item.name} </Text>
                            <Image source={{
                                uri: item.img }} alt="img" size="xl"/>
                            <Text> Player Requirement: {item.playerReq} </Text>
                        </FormControl>
                    </VStack>

                        <Text w={"40%"}> {item.description} </Text>
                    </Box> 
                )})}
                </ScrollView>
            </Box>
    </Center>
    )
}