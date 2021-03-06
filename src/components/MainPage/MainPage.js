import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PostListViewer from "../PostListVIewer/PostListViewer";

class MainPage extends Component {
  static navigationOptions = {
    title: ""
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <PostListViewer navigate={navigate} />
      </View>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "yellow"
  }
});
