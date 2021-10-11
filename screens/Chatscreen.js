import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const Chatscreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar rounded source={{ uri: "" }} />
          <Text>{route.params.chatName}</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default Chatscreen;

const styles = StyleSheet.create({});
