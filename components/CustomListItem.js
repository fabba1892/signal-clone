import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png",
        }}
      />
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
