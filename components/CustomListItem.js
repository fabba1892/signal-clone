import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }} />
        Youtube Chat
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
