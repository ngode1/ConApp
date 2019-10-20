import { Dimensions } from "react-native";

const { width } = Dimensions.get( "window" );

export default {
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    // color: "grey",
    marginTop: 15,
  },
  info: {
    flex: 1,
    marginTop: 7,
    alignItems: "flex-start",
    flexDirection: "row"
  },
  name: {
    fontWeight: "bold",
    fontSize: 19
  },
  banner: {
    flex: 1,
    height: 300,
    width
  },
  icon: {
    marginRight: 10
  },
  text: {
    marginRight: 75
  }
};
